---
layout: post
title:  Build Your Own Lisp - Interactive Prompt
date:   2018-01-04 16:52:00
tags:   C Programlama
comments: False
---
 

<p class="meta">8 Ocak 2018 - Türkiye</p>

An Interactive Prompt • Chapter 2
=================================

Read, Evaluate, Print
---------------------

* * *

As we build our programming language we'll need some way to interact with it. C uses a compiler, where you can change the program, recompile and run it. It'd be good if we could do something better, and interact with the language dynamically. Then we test its behaviour under a number of conditions very quickly. For this we can build something called an _interactive prompt_.

This is a program that prompts the user for some input, and when supplied with it, replies back with some message. Using this will be the easiest way to test our programming language and see how it acts. This system is also called a _REPL_, which stands for _read_-_evaluate_-_print_ _loop_. It is a common way of interacting with a programming language which you may have used before in languages such as _Python_.

Before building a full _REPL_ we'll start with something simpler. We are going to make a system that prompts the user, and echoes any input straight back. If we make this we can later extend it to parse the user input and evaluate it, as if it were an actual Lisp program.

An Interactive Prompt
---------------------

* * *

For the basic setup we want to write a loop which repeatedly writes out a message, and then waits for some input. To get user input we can use a function called `fgets`, which reads any input up until a new line. We need somewhere to store this user input. For this we can declare a constantly sized input buffer.

Once we have this user input stored we can then print it back to the user using a function called `printf`.

    #include <stdio.h>
    
    /* Declare a buffer for user input of size 2048 */
    static char input[2048];
    
    int main(int argc, char** argv) {
    
      /* Print Version and Exit Information */
      puts("Lispy Version 0.0.0.0.1");
      puts("Press Ctrl+c to Exit\n");
    
      /* In a never ending loop */
      while (1) {
    
        /* Output our prompt */
        fputs("lispy> ", stdout);
    
        /* Read a line of user input of maximum size 2048 */
        fgets(input, 2048, stdin);
    
        /* Echo input back to user */
        printf("No you're a %s", input);
      }
    
      return 0;
    }

**What is that text in light green?**

The above code contains _comments_. These are sections of the code between `/*` `*/` symbols, which are ignored by the compiler, but are used to inform the person reading what is going on. Take notice of them!

Let's go over this program in a little more depth.

The line `static char input[2048];` declares a global array of 2048 characters. This is a reserved block of data we can access anywhere from our program. In it we are going to store the user input which is typed into the command line. The `static` keyword makes this variable local to this file, and the `[2048]` section is what declares the size.

We write an infinite loop using `while (1)`. In a conditional block `1` always evaluates to true. Therefore commands inside this loop will run forever.

To output our prompt we use the function `fputs`. This is a slight variation on `puts` which does not append a newline character. We use the `fgets` function for getting user input from the command line. Both of these functions require some file to write to, or read from. For this we supply the special variables `stdin` and `stdout`. These are declared in `<stdio.h>` and are special file variables representing input to, and output from, the command line. When passed this variable the `fgets` function will wait for a user to input a line of text, and when it has it will store it into the `input` buffer, including the newline character. So that `fgets` does not read in too much data we also must also supply the size of the buffer `2048`.

To echo the message back to the user we use the function `printf`. This is a function that provides a way of printing messages consisting of several elements. It matches arguments to patterns in the given string. For example in our case we can see the `%s` pattern in the given string. This means that it will be replaced by whatever argument is passed in next, interpreted as a string.

For more information on these different patterns please see the [documentation](http://en.cppreference.com/w/c/io/printf) on `printf`.

**How am I meant to know about functions like `fgets` and `printf`?**

It isn't immediately obvious how to know about these standard functions, and when to use them. When faced with a problem it takes experience to know when it has been solved for you by library functions.

Luckily C has a very small standard library and almost all of it can be learnt in practice. If you want to do something that seems quite basic, or fundamental, it is worth looking at the [reference documentation](http://en.cppreference.com/w/c) for the standard library and checking if there are any functions included that do what you want.

Compilation
-----------

* * *

You can compile this with the same command as was used in the second chapter.

    cc -std=c99 -Wall prompt.c -o prompt

After compiling this you should try to run it. You can use `Ctrl+c` to quit the program when you are done. If everything is correct your program should run something like this.

    Lispy Version 0.0.0.0.1
    Press Ctrl+c to Exit
    
    lispy> hello
    No you're a hello
    lispy> my name is Dan
    No you're a my name is Dan
    lispy> Stop being so rude!
    No you're a Stop being so rude!
    lispy>

Editing input
-------------

* * *

If you're working on Linux or Mac you'll notice some weird behaviour when you use the arrow keys to attempt to edit your input.

    Lispy Version 0.0.0.0.3
    Press Ctrl+c to Exit
    
    lispy> hel^[[D^[[C
    

Using the arrow keys is creating these weird characters `^[[D` or `^[[C`, rather than moving the cursor around in the input. What we really want is to be able to move around on the line, deleting and editing the input in case we make a mistake.

On Windows this behaviour is the default. On Linux and Mac it is provided by a library called `editline`. On Linux and Mac we need to replace our calls to `fputs` and `fgets` with calls to functions this library provides.

If you're developing on Windows and just want to get going, feel free to skip to the end of this chapter as the next few sections may not be relevant.

### Using Editline

The library `editline` provides two functions we are going to use called `readline` and `add_history`. This first function, `readline` is used to read input from some prompt, while allowing for editing of that input. The second function `add_history` lets us record the history of inputs so that they can be retrieved with the up and down arrows.

We replace `fputs` and `fgets` with calls to these functions to get the following.

    #include <stdio.h>
    #include <stdlib.h>
    
    #include <editline/readline.h>
    #include <editline/history.h>
    
    int main(int argc, char** argv) {
    
      /* Print Version and Exit Information */
      puts("Lispy Version 0.0.0.0.1");
      puts("Press Ctrl+c to Exit\n");
    
      /* In a never ending loop */
      while (1) {
    
        /* Output our prompt and get input */
        char* input = readline("lispy> ");
    
        /* Add input to history */
        add_history(input);
    
        /* Echo input back to user */
        printf("No you're a %s\n", input);
    
        /* Free retrieved input */
        free(input);
    
      }
    
      return 0;
    }

We have _included_ a few new _headers_. There is `#include <stdlib.h>`, which gives us access to the `free` function used later on in the code. We have also added `#include <editline/readline.h>` and `#include <editline/history.h>` which give us access to the `editline` functions, `readline` and `add_history`.

Instead of prompting, and getting input with `fgets`, we do it in one go using `readline`. The result of this we pass to `add_history` to record it. Finally we print it out as before using `printf`.

Unlike `fgets`, the `readline` function strips the trailing newline character from the input, so we need to add this to our `printf` function. We also need to delete the input given to us by the `readline` function using `free`. This is because unlike `fgets`, which writes to some existing buffer, the `readline` function allocates new memory when it is called. When to free memory is something we cover in depth in later chapters.

### Compiling with Editline

If you try to compile this right away with the previous command you'll get an error. This is because you first need to install the `editline` library on your computer.

    fatal error: editline/readline.h: No such file or directory #include <editline/readline.h>

On **Mac** the `editline` library comes with _Command Line Tools_. Instructions for installing these can be found in [Chapter 2](http://www.buildyourownlisp.com/chapter2_installation). You may still get an error about the history header not being found. In this case remove the line `#include <editline/history.h>`, as this header may not be required.

On **Linux** you can install _editline_ with `sudo apt-get install libedit-dev`. On Fedora you can use the command `su -c "yum install libedit-dev*"`

Once you have installed _editline_ you can try to compile it again. This time you'll get a different error.

    undefined reference to `readline'
    undefined reference to `add_history'
    

This means that you haven't _linked_ your program to `editline`. This _linking_ process allows the compiler to directly embed calls to `editline` in your program. You can make it link by adding the flag `-ledit` to your compile command, just before the output flag.

    cc -std=c99 -Wall prompt.c -ledit -o prompt

Run it and check that now you can edit inputs as you type them in.

**It's still not working!**

Some systems might have slight variations on how to install, include, and link to `editline`. For example on Arch linux the editline history header is `histedit.h`. If you are having trouble search online and see if you can find distribution specific instructions on how to install and use the `editline` library. If that fails search for instructions on the `readline` library. This is a drop-in replacement for editline. On Mac it can be installed using HomeBrew or MacPorts.

The C Preprocessor
------------------

* * *

For such a small project it might be okay that we have to program differently depending on what operating system we are using, but if I want to send my source code to a friend on different operating system to give me a hand with the programming, it is going to cause problems. In an ideal world I'd wish for my source code to be able to compile no matter where, or on what computer, it is being compiled. This is a general problem in C, and it is called _portability_. There is not always an easy or correct solution.

![octopus](/static/img/octopus.png)

Octopus • Sort of like Octothorpe

But C does provide a mechanism to help, called _the preprocessor_.

The preprocessor is a program that runs before the compiler. It has a number of purposes, and we've been actually using it already without knowing. Any line that starts with a octothorpe `#` character (hash to you and me) is a preprocessor command. We've been using it to _include_ header files, giving us access to functions from the standard library and others.

Another use of the preprocessor is to detect which operating system the code is being compiled on, and to use this to emit different code.

This is exactly how we are going to use it. If we are running Windows we're going to let the preprocessor emit code with some fake `readline` and `add_history` functions I've prepared, otherwise we are going to include the headers from `editline` and use these.

To declare what code the compiler should emit we can wrap it in `#ifdef`, `#else`, and `#endif` preprocessor statements. These are like an `if` function that happens before the code is compiled. All the contents of the file from the first `#ifdef` to the next `#else` are used if the condition is true, otherwise all the contents from the `#else` to the final `#endif` are used instead. By putting these around our fake functions, and our editline headers, the code that is emitted should compile on Windows, Linux or Mac.

    #include <stdio.h>
    #include <stdlib.h>
    
    /* If we are compiling on Windows compile these functions */
    #ifdef _WIN32
    #include <string.h>
    
    static char buffer[2048];
    
    /* Fake readline function */
    char* readline(char* prompt) {
      fputs(prompt, stdout);
      fgets(buffer, 2048, stdin);
      char* cpy = malloc(strlen(buffer)+1);
      strcpy(cpy, buffer);
      cpy[strlen(cpy)-1] = '\0';
      return cpy;
    }
    
    /* Fake add_history function */
    void add_history(char* unused) {}
    
    /* Otherwise include the editline headers */
    #else
    #include <editline/readline.h>
    #include <editline/history.h>
    #endif
    
    int main(int argc, char** argv) {
    
      puts("Lispy Version 0.0.0.0.1");
      puts("Press Ctrl+c to Exit\n");
    
      while (1) {
    
        /* Now in either case readline will be correctly defined */
        char* input = readline("lispy> ");
        add_history(input);
    
        printf("No you're a %s\n", input);
        free(input);
    
      }
    
      return 0;
    }

Reference
---------

* * *

#### [prompt_unix.c](#collapseOne)

    #include <stdio.h>
    #include <stdlib.h>
    
    #include <editline/readline.h>
    #include <editline/history.h>
    
    int main(int argc, char** argv) {
       
      /* Print Version and Exit Information */
      puts("Lispy Version 0.0.0.0.1");
      puts("Press Ctrl+c to Exit\n");
       
      /* In a never ending loop */
      while (1) {
        
        /* Output our prompt and get input */
        char* input = readline("lispy> ");
        
        /* Add input to history */
        add_history(input);
        
        /* Echo input back to user */    
        printf("No you're a %s\n", input);
    
        /* Free retrived input */
        free(input);
        
      }
      
      return 0;
    }

#### [prompt_windows.c](#collapseTwo)

    #include <stdio.h>
    
    /* Declare a buffer for user input of size 2048 */
    static char input[2048];
    
    int main(int argc, char** argv) {
    
      /* Print Version and Exit Information */
      puts("Lispy Version 0.0.0.0.1");
      puts("Press Ctrl+c to Exit\n");
    
      /* In a never ending loop */
      while (1) {
    
        /* Output our prompt */
        fputs("lispy> ", stdout);
    
        /* Read a line of user input of maximum size 2048 */
        fgets(input, 2048, stdin);
    
        /* Echo input back to user */
        printf("No you're a %s", input);
      }
    
      return 0;
    }

#### [prompt.c](#collapseThree)

    #include <stdio.h>
    #include <stdlib.h>
    
    /* If we are compiling on Windows compile these functions */
    #ifdef _WIN32
    #include <string.h>
    
    static char buffer[2048];
    
    /* Fake readline function */
    char* readline(char* prompt) {
      fputs(prompt, stdout);
      fgets(buffer, 2048, stdin);
      char* cpy = malloc(strlen(buffer)+1);
      strcpy(cpy, buffer);
      cpy[strlen(cpy)-1] = '\0';
      return cpy;
    }
    
    /* Fake add_history function */
    void add_history(char* unused) {}
    
    /* Otherwise include the editline headers */
    #else
    #include <editline/readline.h>
    #include <editline/history.h>
    #endif
    
    int main(int argc, char** argv) {
       
      puts("Lispy Version 0.0.0.0.1");
      puts("Press Ctrl+c to Exit\n");
       
      while (1) {
        
        /* Now in either case readline will be correctly defined */
        char* input = readline("lispy> ");
        add_history(input);
    
        printf("No you're a %s\n", input);
        free(input);
        
      }
      
      return 0;
    }

Bonus Marks
-----------

* * *

*   › Change the prompt from `lispy>` to something of your choice.
*   › Change what is echoed back to the user.
*   › Add an extra message to the _Version_ and _Exit_ Information.
*   › What does the `\n` mean in those strings?
*   › What other patterns can be used with `printf`?
*   › What happens when you pass `printf` a variable that does not match the pattern?
*   › What does the preprocessor command `#ifndef` do?
*   › What does the preprocessor command `#define` do?
*   › If `_WIN32` is defined on windows, what is defined for Linux or Mac?
