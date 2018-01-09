---
layout: post
title:  Build Your Own Lisp - Error Handling
date:   2018-01-04 16:52:00
tags:   C Programlama
comments: False
---

{{ page.title }}
================

<p class="meta">8 Ocak 2018 - Türkiye</p>

Error Handling • Chapter 6
==========================

Crashes
-------

* * *

Some of you may have noticed a problem with the previous chapter's program. Try entering this into the prompt and see what happens.

    Lispy Version 0.0.0.0.3
    Press Ctrl+c to Exit
    
    lispy> / 10 0

Ouch. The program crashed upon trying to divide by zero. It's okay if a program crashes during development, but our final program would hopefully never crash, and should always explain to the user what went wrong.

![walterwhite](/static/img/walterwhite.png)

Walter White • Heisenberg

At the moment our program can produce syntax errors but it still has no functionality for reporting errors in the evaluation of expressions. We need to build in some kind of error handling functionality to do this. It can be awkward in C, but if we start off on the right track, it will pay off later on when our system gets more complicated.

C programs crashing is a fact of life. If anything goes wrong the operating system kicks them out. Programs can crash for many different reasons, and in many different ways. You will see at least one [Heisenbug](http://en.wikipedia.org/wiki/Heisenbug).

But there is no magic in how C programs work. If you face a really troublesome bug don't give up or sit and stare at the screen till your eyes bleed. Take this chance to properly learn how to use `gdb` and `valgrind`. These will be more weapons in your tool-kit, and after the initial investment, save you a lot of time and pain.

Lisp Value
----------

* * *

There are several ways to deal with errors in C, but in this context my preferred method is to make errors a possible result of evaluating an expression. Then we can say that, in Lispy, an expression will evaluate to _either_ a _number_, or an _error_. For example `+ 1 2` will evaluate to a number, but `/ 10 0` will evaluate to an error.

For this we need a data structure that can act as either one thing or anything. For simplicity sake we are just going to use a `struct` with fields specific to each thing that can be represented, and a special field `type` to tell us exactly what fields are meaningful to access.

This we are going to call an `lval`, which stands for _Lisp Value_.

    /* Declare New lval Struct */
    typedef struct {
      int type;
      long num;
      int err;
    } lval;

Enumerations
------------

* * *

You'll notice the type of the fields `type`, and `err`, is `int`. This means they are represented by a single integer number.

The reason we pick `int` is because we will assign meaning to each integer value, to encode what we require. For example we can make a rule _"If `type` is `0` then the structure is a Number."_, or _"If `type` is `1` then the structure is an Error."_ This is a simple and effective way of doing things.

But if we litter our code with stray `0` and `1` then it is going to become increasingly unclear as to what is happening. Instead we can use named constants that have been assigned these integer values. This gives the reader an indication as to _why_ one might be comparing a number to `0` or `1` and _what_ is meant in this context.

In C this is supported using an `enum`.

    /* Create Enumeration of Possible lval Types */
    enum { LVAL_NUM, LVAL_ERR };

An `enum` is a declaration of variables which under the hood are automatically assigned integer constant values. Above describes how we would declare some enumerated values for the `type` field.

We also want to declare an enumeration for the _error_ field. We have three error cases in our particular program. There is division by zero, an unknown operator, or being passed a number that is too large to be represented internally using a `long`. These can be enumerated as follows.

    /* Create Enumeration of Possible Error Types */
    enum { LERR_DIV_ZERO, LERR_BAD_OP, LERR_BAD_NUM };

Lisp Value Functions
--------------------

* * *

Our `lval` type is almost ready to go. Unlike the previous `long` type we have no current method for creating new instances of it. To do this we can declare two functions that construct an `lval` of either an _error_ type or a _number_ type.

    /* Create a new number type lval */
    lval lval_num(long x) {
      lval v;
      v.type = LVAL_NUM;
      v.num = x;
      return v;
    }
    
    /* Create a new error type lval */
    lval lval_err(int x) {
      lval v;
      v.type = LVAL_ERR;
      v.err = x;
      return v;
    }

These functions first create an `lval` called `v`, and assign the fields before returning it.

Because our `lval` function can now be one of two things we can no longer just use `printf` to output it. We will want to behave differently depending upon the type of the `lval` that is given. There is a concise way to do this in C using the `switch` statement. This takes some value as input and compares it to other known values, known as _cases_. When the values are equal it executes the code that follows up until the next `break` statement.

Using this we can build a function that can print an `lval` of any type like this.

    /* Print an "lval" */
    void lval_print(lval v) {
      switch (v.type) {
        /* In the case the type is a number print it */
        /* Then 'break' out of the switch. */
        case LVAL_NUM: printf("%li", v.num); break;
    
        /* In the case the type is an error */
        case LVAL_ERR:
          /* Check what type of error it is and print it */
          if (v.err == LERR_DIV_ZERO) {
            printf("Error: Division By Zero!");
          }
          if (v.err == LERR_BAD_OP)   {
            printf("Error: Invalid Operator!");
          }
          if (v.err == LERR_BAD_NUM)  {
            printf("Error: Invalid Number!");
          }
        break;
      }
    }
    
    /* Print an "lval" followed by a newline */
    void lval_println(lval v) { lval_print(v); putchar('\n'); }

Evaluating Errors
-----------------

* * *

Now that we know how to work with the `lval` type, we need to change our evaluation functions to use it instead of `long`.

As well as changing the type signatures we need to change the functions such that they work correctly upon encountering either an _error_ as input, or a _number_ as input.

In our `eval_op` function, if we encounter an error we should return it right away, and only do computation if both the arguments are numbers. We should modify our code to return an error rather than attempt to divide by zero. This will fix the crash described at the beginning of this chapter.

    lval eval_op(lval x, char* op, lval y) {
    
      /* If either value is an error return it */
      if (x.type == LVAL_ERR) { return x; }
      if (y.type == LVAL_ERR) { return y; }
    
      /* Otherwise do maths on the number values */
      if (strcmp(op, "+") == 0) { return lval_num(x.num + y.num); }
      if (strcmp(op, "-") == 0) { return lval_num(x.num - y.num); }
      if (strcmp(op, "*") == 0) { return lval_num(x.num * y.num); }
      if (strcmp(op, "/") == 0) {
        /* If second operand is zero return error */
        return y.num == 0
          ? lval_err(LERR_DIV_ZERO)
          : lval_num(x.num / y.num);
      }
    
      return lval_err(LERR_BAD_OP);
    }

**What is that `?` doing there?**

You'll notice that for division to check if the second argument is zero we use a question mark symbol `?`, followed by a colon `:`. This is called the _ternary operator_, and it allows you to write conditional expressions on one line.

It works something like this. `<condition> ? <then> : <else>`. In other words, if the condition is true it returns what follows the `?`, otherwise it returns what follows `:`.

Some people dislike this operator because they believe it makes code unclear. If you are unfamiliar with the ternary operator, you may initially find it awkward to use; but once you get to know it there are rarely problems.

We need to give a similar treatment to our `eval` function. In this case because we've defined `eval_op` to robustly handle errors we just need to add the error conditions to our number conversion function.

In this case we use the `strtol` function to convert from string to `long`. This allows us to check a special variable `errno` to ensure the conversion goes correctly. This is a more robust way to convert numbers than our previous method using `atoi`.

    lval eval(mpc_ast_t* t) {
    
      if (strstr(t->tag, "number")) {
        /* Check if there is some error in conversion */
        errno = 0;
        long x = strtol(t->contents, NULL, 10);
        return errno != ERANGE ? lval_num(x) : lval_err(LERR_BAD_NUM);
      }
    
      char* op = t->children[1]->contents;
      lval x = eval(t->children[2]);
    
      int i = 3;
      while (strstr(t->children[i]->tag, "expr")) {
        x = eval_op(x, op, eval(t->children[i]));
        i++;
      }
    
      return x;
    }

The final small step is to change how we print the result found by our evaluation to use our newly defined printing function which can print any type of `lval`.

    lval result = eval(r.output);
    lval_println(result);
    mpc_ast_delete(r.output);

And we are done! Try running this new program and make sure there are no crashes when dividing by zero.

    lispy> / 10 0
    Error: Division By Zero!
    lispy> / 10 2
    5

Plumbing
--------

* * *

![plumbing](/static/img/plumbing.png)

Plumbing • Harder than you think

Some of you who have gotten this far in the book may feel uncomfortable with how it is progressing. You may feel you've managed to follow instructions well enough, but don't have a clear understanding of all of the underlying mechanisms going on behind the scenes.

If this is the case I want to reassure you that you are doing well. If you don't understand the internals it's because I may not have explained everything in sufficient depth. This is okay.

To be able to progress and get code to work under these conditions is a great skill in programming, and if you've made it this far it shows you have it.

In programming we call this _plumbing_. Roughly speaking this is following instructions to try to tie together a bunch of libraries or components, without fully understanding how they work internally.

It requires _faith_ and _intuition_. _Faith_ is required to believe that if the stars align, and every incantation is correctly performed for this magical machine, the right thing will really happen. And _intuition_ is required to work out what has gone wrong, and how to fix things when they don't go as planned.

Unfortunately these can't be taught directly, so if you've made it this far then you've made it over a difficult hump, and in the following chapters I promise we'll finish up with the plumbing, and actually start programming that feels fresh and wholesome.

Reference
---------

* * *

#### [error_handling.c](#collapseOne)

    #include "mpc.h"
    
    #ifdef _WIN32
    
    static char buffer[2048];
    
    char* readline(char* prompt) {
      fputs(prompt, stdout);
      fgets(buffer, 2048, stdin);
      char* cpy = malloc(strlen(buffer)+1);
      strcpy(cpy, buffer);
      cpy[strlen(cpy)-1] = '\0';
      return cpy;
    }
    
    void add_history(char* unused) {}
    
    #else
    #include <editline/readline.h>
    #include <editline/history.h>
    #endif
    
    /* Create Enumeration of Possible Error Types */
    enum { LERR_DIV_ZERO, LERR_BAD_OP, LERR_BAD_NUM };
    
    /* Create Enumeration of Possible lval Types */
    enum { LVAL_NUM, LVAL_ERR };
    
    /* Declare New lval Struct */
    typedef struct {
      int type;
      long num;
      int err;
    } lval;
    
    /* Create a new number type lval */
    lval lval_num(long x) {
      lval v;
      v.type = LVAL_NUM;
      v.num = x;
      return v;
    }
    
    /* Create a new error type lval */
    lval lval_err(int x) {
      lval v;
      v.type = LVAL_ERR;
      v.err = x;
      return v;
    }
    
    /* Print an "lval" */
    void lval_print(lval v) {
      switch (v.type) {
        /* In the case the type is a number print it */
        /* Then 'break' out of the switch. */
        case LVAL_NUM: printf("%li", v.num); break;
        
        /* In the case the type is an error */
        case LVAL_ERR:
          /* Check what type of error it is and print it */
          if (v.err == LERR_DIV_ZERO) {
            printf("Error: Division By Zero!");
          }
          if (v.err == LERR_BAD_OP)   {
            printf("Error: Invalid Operator!");
          }
          if (v.err == LERR_BAD_NUM)  {
            printf("Error: Invalid Number!");
          }
        break;
      }
    }
    
    /* Print an "lval" followed by a newline */
    void lval_println(lval v) { lval_print(v); putchar('\n'); }
    
    lval eval_op(lval x, char* op, lval y) {
      
      /* If either value is an error return it */
      if (x.type == LVAL_ERR) { return x; }
      if (y.type == LVAL_ERR) { return y; }
      
      /* Otherwise do maths on the number values */
      if (strcmp(op, "+") == 0) { return lval_num(x.num + y.num); }
      if (strcmp(op, "-") == 0) { return lval_num(x.num - y.num); }
      if (strcmp(op, "*") == 0) { return lval_num(x.num * y.num); }
      if (strcmp(op, "/") == 0) {
        /* If second operand is zero return error */
        return y.num == 0 
          ? lval_err(LERR_DIV_ZERO) 
          : lval_num(x.num / y.num);
      }
      
      return lval_err(LERR_BAD_OP);
    }
    
    lval eval(mpc_ast_t* t) {
      
      if (strstr(t->tag, "number")) {
        /* Check if there is some error in conversion */
        errno = 0;
        long x = strtol(t->contents, NULL, 10);
        return errno != ERANGE ? lval_num(x) : lval_err(LERR_BAD_NUM);
      }
      
      char* op = t->children[1]->contents;  
      lval x = eval(t->children[2]);
      
      int i = 3;
      while (strstr(t->children[i]->tag, "expr")) {
        x = eval_op(x, op, eval(t->children[i]));
        i++;
      }
      
      return x;  
    }
    
    int main(int argc, char** argv) {
      
      mpc_parser_t* Number = mpc_new("number");
      mpc_parser_t* Operator = mpc_new("operator");
      mpc_parser_t* Expr = mpc_new("expr");
      mpc_parser_t* Lispy = mpc_new("lispy");
      
      mpca_lang(MPCA_LANG_DEFAULT,
        "                                                     \
          number   : /-?[0-9]+/ ;                             \
          operator : '+' | '-' | '*' | '/' ;                  \
          expr     : <number> | '(' <operator> <expr>+ ')' ;  \
          lispy    : /^/ <operator> <expr>+ /$/ ;             \
        ",
        Number, Operator, Expr, Lispy);
      
      puts("Lispy Version 0.0.0.0.4");
      puts("Press Ctrl+c to Exit\n");
      
      while (1) {
      
        char* input = readline("lispy> ");
        add_history(input);
        
        mpc_result_t r;
        if (mpc_parse("<stdin>", input, Lispy, &r)) {
          lval result = eval(r.output);
          lval_println(result);
          mpc_ast_delete(r.output);
        } else {    
          mpc_err_print(r.error);
          mpc_err_delete(r.error);
        }
        
        free(input);
        
      }
      
      mpc_cleanup(4, Number, Operator, Expr, Lispy);
      
      return 0;
    }

Bonus Marks
-----------

* * *

*   › Run the previous chapter's code through `gdb` and crash it. See what happens.
*   › How do you give an `enum` a name?
*   › What are `union` data types and how do they work?
*   › What are the advantages over using a `union` instead of `struct`?
*   › Can you use a `union` in the definition of `lval`?
*   › Extend parsing and evaluation to support the remainder operator `%`.
*   › Extend parsing and evaluation to support decimal types using a `double` field.
