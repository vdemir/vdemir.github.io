---
layout: post
title:  Build Your Own Lisp - Conditionals
date:   2018-01-08 16:59:00
tags:   C Programlama
comments: False
---

{{ page.title }}
================

<p class="meta">8 Ocak 2018 - Türkiye</p>

Conditionals • Chapter 11
=========================

Doing it yourself
-----------------

* * *

We've come quite far now. Your knowledge of C should be good enough for you to stand on your own feet a little more. If you're feeling confident, this chapter is a perfect opportunity to stretch your wings out and attempt something on your own. It is a fairly short chapter and essentially consists of adding a couple of new builtin functions to deal with comparison and ordering.

If you're feeling positive, go ahead and try to implement comparison and ordering into your language now. Define some new builtin functions for _greater than_, _less than_, _equal to_, and all the other comparison operators we use in C. Try to define an `if` function that tests for some condition and then either evaluate some code, or some other code, depending on the result. Once you've finished come back and compare your work to mine. Observe the differences and decide which parts you prefer.

If you still feel uncertain don't worry. Follow along and I'll explain my approach.

Ordering
--------

* * *

For simplicity's sake I'm going to re-use our number data type to represent the result of comparisons. I'll make a rule similar to C, to say that any number that isn't `0` evaluates to true in an `if` statement, while `0` always evaluates to false.

Therefore our ordering functions are a little like a simplified version of our arithmetic functions. They'll only work on numbers, and we only want them to work on two arguments.

If these error conditions are met the maths is simple. We want to return a number `lval` either `0` or `1` depending on the equality comparison between the two input `lval`. We can use C's comparison operators to do this. Like our arithmetic functions we'll make use of a single function to do all of the comparisons.

First we check the error conditions, then we compare the numbers in each of the arguments to get some result. Finally we return this result as a number value.

    lval* builtin_gt(lenv* e, lval* a) {
      return builtin_ord(e, a, ">");
    }
    

    lval* builtin_lt(lenv* e, lval* a) {
      return builtin_ord(e, a, "<");
    }
    

    lval* builtin_ge(lenv* e, lval* a) {
      return builtin_ord(e, a, ">=");
    }
    

    lval* builtin_le(lenv* e, lval* a) {
      return builtin_ord(e, a, "<=");
    }
    

    lval* builtin_ord(lenv* e, lval* a, char* op) {
      LASSERT_NUM(op, a, 2);
      LASSERT_TYPE(op, a, 0, LVAL_NUM);
      LASSERT_TYPE(op, a, 1, LVAL_NUM);
    
      int r;
      if (strcmp(op, ">")  == 0) {
        r = (a->cell[0]->num >  a->cell[1]->num);
      }
      if (strcmp(op, "<")  == 0) {
        r = (a->cell[0]->num <  a->cell[1]->num);
      }
      if (strcmp(op, ">=") == 0) {
        r = (a->cell[0]->num >= a->cell[1]->num);
      }
      if (strcmp(op, "<=") == 0) {
        r = (a->cell[0]->num <= a->cell[1]->num);
      }
      lval_del(a);
      return lval_num(r);
    }
    

Equality
--------

* * *

Equality is going to be different to ordering because we want it to work on more than number types. It will be useful to see if an input is equal to an empty list, or to see if two functions passed in are the same. Therefore we need to define a function which can test for equality between two different types of `lval`.

This function essentially checks that all the fields which make up the data for a particular `lval` type are equal. If all the fields are equal, the whole thing is considered equal. Otherwise if there are any differences the whole thing is considered unequal.

    int lval_eq(lval* x, lval* y) {
    
      /* Different Types are always unequal */
      if (x->type != y->type) { return 0; }
    
      /* Compare Based upon type */
      switch (x->type) {
        /* Compare Number Value */
        case LVAL_NUM: return (x->num == y->num);
    
        /* Compare String Values */
        case LVAL_ERR: return (strcmp(x->err, y->err) == 0);
        case LVAL_SYM: return (strcmp(x->sym, y->sym) == 0);
    
        /* If builtin compare, otherwise compare formals and body */
        case LVAL_FUN:
          if (x->builtin || y->builtin) {
            return x->builtin == y->builtin;
          } else {
            return lval_eq(x->formals, y->formals)
              && lval_eq(x->body, y->body);
          }
    
        /* If list compare every individual element */
        case LVAL_QEXPR:
        case LVAL_SEXPR:
          if (x->count != y->count) { return 0; }
          for (int i = 0; i < x->count; i++) {
            /* If any element not equal then whole list not equal */
            if (!lval_eq(x->cell[i], y->cell[i])) { return 0; }
          }
          /* Otherwise lists must be equal */
          return 1;
        break;
      }
      return 0;
    }

Using this function the new builtin function for equality comparison is very simple to add. We simply ensure two arguments are input, and that they are equal. We store the result of the comparison into a new `lval` and return it.

    lval* builtin_cmp(lenv* e, lval* a, char* op) {
      LASSERT_NUM(op, a, 2);
      int r;
      if (strcmp(op, "==") == 0) {
        r =  lval_eq(a->cell[0], a->cell[1]);
      }
      if (strcmp(op, "!=") == 0) {
        r = !lval_eq(a->cell[0], a->cell[1]);
      }
      lval_del(a);
      return lval_num(r);
    }
    
    lval* builtin_eq(lenv* e, lval* a) {
      return builtin_cmp(e, a, "==");
    }
    
    lval* builtin_ne(lenv* e, lval* a) {
      return builtin_cmp(e, a, "!=");
    }

If Function
-----------

* * *

To make our comparison operators useful we'll need an `if` function. This function is a little like the ternary operation in C. Upon some condition being true it evaluates to one thing, and if the condition is false, it evaluates to another.

We can again make use of Q-Expressions to encode a computation. First we get the user to pass in the result of a comparison, then we get the user to pass in two Q-Expressions representing the code to be evaluated upon a condition being either true or false.

    lval* builtin_if(lenv* e, lval* a) {
      LASSERT_NUM("if", a, 3);
      LASSERT_TYPE("if", a, 0, LVAL_NUM);
      LASSERT_TYPE("if", a, 1, LVAL_QEXPR);
      LASSERT_TYPE("if", a, 2, LVAL_QEXPR);
    
      /* Mark Both Expressions as evaluable */
      lval* x;
      a->cell[1]->type = LVAL_SEXPR;
      a->cell[2]->type = LVAL_SEXPR;
    
      if (a->cell[0]->num) {
        /* If condition is true evaluate first expression */
        x = lval_eval(e, lval_pop(a, 1));
      } else {
        /* Otherwise evaluate second expression */
        x = lval_eval(e, lval_pop(a, 2));
      }
    
      /* Delete argument list and return */
      lval_del(a);
      return x;
    }

All that remains is for us to register all of these new builtins and we are again ready to go.

    /* Comparison Functions */
    lenv_add_builtin(e, "if", builtin_if);
    lenv_add_builtin(e, "==", builtin_eq);
    lenv_add_builtin(e, "!=", builtin_ne);
    lenv_add_builtin(e, ">",  builtin_gt);
    lenv_add_builtin(e, "<",  builtin_lt);
    lenv_add_builtin(e, ">=", builtin_ge);
    lenv_add_builtin(e, "<=", builtin_le);
    

Have a quick mess around to check that everything is working correctly.

    lispy> > 10 5
    1
    lispy> <= 88 5
    0
    lispy> == 5 6
    0
    lispy> == 5 {}
    0
    lispy> == 1 1
    1
    lispy> != {} 56
    1
    lispy> == {1 2 3 {5 6}} {1   2  3   {5 6}}
    1
    lispy> def {x y} 100 200
    ()
    lispy> if (== x y) {+ x y} {- x y}
    -100
    

Recursive Functions
-------------------

* * *

By introducing conditionals we've actually made our language a lot more powerful. This is because they effectively let us implement recursive functions.

Recursive functions are those which call themselves. We've used these already in C to perform reading in and evaluation of expressions. The reason we require conditionals for these is because they let us test for the situation where we wish to terminate the recursion.

For example we can use conditionals to implement a function `len` which tells us the number of items in a list. If we encounter the empty list we just return `0`. Otherwise we return the length of the `tail` of the input list, plus `1`. Think about why this works. It repeatedly uses the `len` function until it reaches the empty list. At this point it returns `0` and adds all the other partial results together.

    (fun {len l} {
      if (== l {})
        {0}
        {+ 1 (len (tail l))}
    })

Just as in C, there is a pleasant symmetry to this sort of recursive function. First we do something for the empty list (_the base case_). Then if we get something bigger, we take off a chunk such as the head of the list, and do something to it, before combining it with the rest of the thing to which the function has been already applied.

Here is another function for reversing a list. As before it checks for the empty list, but this time it returns the empty list back. This makes sense. The reverse of the empty list is just the empty list. But if it gets something bigger than the empty list, it reverses the tail, and sticks this in front of the head.

    (fun {reverse l} {
      if (== l {})
        {{}}
        {join (reverse (tail l)) (head l)}
    })

We're going to use this technique to build many functions. This is because it is going to be the primary way to achieve looping in our language.

Reference
---------

* * *

Bonus Marks
-----------

* * *

*   › Create builtin logical operators _or_ `||`, _and_ `&&` and _not_ `!` and add them to the language.
*   › Define a recursive Lisp function that returns the `nth` item of that list.
*   › Define a recursive Lisp function that returns `1` if an element is a member of a list, otherwise `0`.
*   › Define a Lisp function that returns the last element of a list.
*   › Define in Lisp logical operator functions such as `or`, `and` and `not`.
*   › Add a specific boolean type to the language with the builtin variables `true` and `false`.
