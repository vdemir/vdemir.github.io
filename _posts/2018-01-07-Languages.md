---
layout: post
title:  Kendi Lisp'nizi Oluşturun - Diller
date:   2018-01-04 16:52:00
tags:   C Programlama Lisp
comments: False
---
 
<p class="meta">8 Ocak 2018 - Türkiye</p>

Languages • Chapter 3
=====================

What is a Programming Language?
-------------------------------

* * *

A programming language is very similar to a real language. There is a structure behind it, and some rules which dictate what is, and isn't, a valid thing to say. When we read and write natural language, we are unconsciously learning these rules, and the same is true for programming languages. We can utilise these rules to understand others, and generate our own speech, or code.

In the 1950s the linguist Noam Chomsky formalised a number of [important observations](http://en.wikipedia.org/wiki/Chomsky_hierarchy) about languages. Many of these form the basis of our understanding of language today. One of these was the observation that natural languages are built up of recursive and repeated substructures.

As an example of this, we can examine the phrase.

› `The cat walked on the carpet.`

Using the rules of English, the noun `cat` can be replaced by two nouns separated by `and`.

› `The **cat and dog** walked on the carpet.`

Each of these new nouns could in turn be replaced again. We could use the same rule as before, and replace `cat` with two new nouns joined with `and`. Or we could use a different rule and replace each of the nouns with an adjective and a noun, to add description to them.

› `The **cat and mouse** and dog walked on the carpet.`

› `The **white cat** and **black dog** walked on the carpet.`

These are just two examples, but English has many different rules for how types of words can be changed, manipulated and replaced.

We notice this exact behaviour in programming languages too. In C, the body of an `if` statement contains a list of new statements. Each of these new statements, could themselves be another `if` statement. These repeated structures and replacements are reflected in all parts of the language. These are sometimes called _re-write rules_ because they tell you how one thing can be _re-written_ as something else.

› `if (x > 5) { return x; }`

› `if (x > 5) { **if (x > 10) { return x; }** }`

The consequence of this observation by Chomsky is important. It means that although there are an infinite number of different things that can be said, or written down in a particular language, it is still possible to process and understand all of them with a finite number of re-write rules. The name given to a set of re-write rules is a _grammar_.

We can describe re-write rules in a number of ways. One way is textual. We could say something like, "a _sentence_ must be a _verb phrase_", or "a _verb phrase_ can be either a _verb_ or, an _adverb_ and a _verb_". This method is good for humans but it is too imprecise for computers to understand. When programming we need to write down a more formal description of a grammar.

To write a programming language such as our Lisp we are going to need to understand grammars. For reading in the user input we need to write a _grammar_ which describes it. Then we can use it along with our user input, to decide if the input is valid. We can also use it to build a structured internal representation, which will make the job of understanding it, and then evaluating it, performing the computations encoded within, much easier.

This is where a library called `mpc` comes in.

Parser Combinators
------------------

* * *

`mpc` is a _Parser Combinator_ library I have written. This means it is a library that allows you to build programs that understand and process particular languages. These are known as _parsers_. There are many different ways of building parsers, but the cool thing about using a _Parser Combinator_ library is that it lets you build _parsers_ easily, just by specifying the _grammar_ ... sort of.

Many Parser Combinator libraries actually work by letting you write normal code that _looks a bit like_ a grammar, not by actually specifying a grammar directly. In many situations this is fine, but sometimes it can get clunky and complicated. Luckily for us `mpc` allows us to write normal code that just looks like a grammar, _or_ we can use special notation to write a grammar directly!

Coding Grammars
---------------

* * *

So what does code that looks like a grammar..._look like_? Let us take a look at `mpc` by trying to write code for a grammar that recognizes [the language of Shiba Inu](http://knowyourmeme.com/memes/doge). More colloquially known as _Doge_. This language we are going to define as follows.

› An _Adjective_ is either _"wow"_, _"many"_, _"so"_ or _"such"_.

› A _Noun_ is either _"lisp"_, _"language"_, _"c"_, _"book"_ or _"build"_.

› A _Phrase_ is an _Adjective_ followed by a _Noun_.

› A _Doge_ is zero or more _Phrases_.

We can start by trying to define _Adjective_ and _Noun_. To do this we create two new parsers, represented by the type `mpc_parser_t*`, and we store them in the variables `Adjective` and `Noun`. We use the function `mpc_or` to create a parser where one of several options should be used, and the function `mpc_sym` to wrap our initial strings.

If you squint you could attempt to read the code as if it were the rules we specified above.

    /* Build a parser 'Adjective' to recognize descriptions */
    mpc_parser_t* Adjective = mpc_or(4,
      mpc_sym("wow"), mpc_sym("many"),
      mpc_sym("so"),  mpc_sym("such")
    );
    
    /* Build a parser 'Noun' to recognize things */
    mpc_parser_t* Noun = mpc_or(5,
      mpc_sym("lisp"), mpc_sym("language"),
      mpc_sym("book"),mpc_sym("build"),
      mpc_sym("c")
    );
    

**How can I access these `mpc` functions?**

For now don't worry about compiling or running any of the sample code in this chapter. Just focus on understanding the theory behind grammars. In the next chapter we'll get set up with `mpc` and use it for a language closer to our Lisp.

To define `Phrase` we can reference our existing parsers. We need to use the function `mpc_and`, that specifies one thing is required then another. As input we pass it `Adjective` and `Noun`, our previously defined parsers. This function also takes the arguments `mpcf_strfold` and `free`, which say how to join or delete the results of these parsers. Ignore these arguments for now.

    mpc_parser_t* Phrase = mpc_and(2, mpcf_strfold,
      Adjective, Noun, free);

To define _Doge_ we must specify that _zero or more_ of some parser is required. For this we need to use the function `mpc_many`. As before, this function requires the special variable `mpcf_strfold` to say how the results are joined together, which we can ignore.

    mpc_parser_t* Doge = mpc_many(mpcf_strfold, Phrase);

By creating a parser that looks for _zero or more_ occurrences of another parser an interesting thing has happened. Our `Doge` parser accepts inputs of any length. This means its language is _infinite_. Here are just some examples of possible strings `Doge` could accept. Just as we discovered in the first section of this chapter we have used a finite number of re-write rules to create an infinite language.

    "wow book such language many lisp"
    "so c such build such language"
    "many build wow c"
    ""
    "wow lisp wow c many language"
    "so c"
    

If we use more `mpc` functions, we can slowly build up parsers that parse more and more complicated languages. The code we use _sort of_ reads like a grammar, but becomes much more messy with added complexity. Due to this, taking this approach isn't always an easy task. A whole set of helper functions that build on simple constructs to make frequent tasks easy are all documented on the [mpc repository](http://github.com/orangeduck/mpc). This is a good approach for complicated languages, as it allows for fine-grained control, but won't be required for our needs.

Natural Grammars
----------------

* * *

`mpc` lets us write grammars in a more natural form too. Rather than using C functions that look less like a grammar, we can specify the whole thing in one long string. When using this method we don't have to worry about how to join or discard inputs, with functions such as `mpcf_strfold`, or `free`. All of that is done automatically for us.

Here is how we would recreate the previous examples using this method.

    mpc_parser_t* Adjective = mpc_new("adjective");
    mpc_parser_t* Noun      = mpc_new("noun");
    mpc_parser_t* Phrase    = mpc_new("phrase");
    mpc_parser_t* Doge      = mpc_new("doge");
    
    mpca_lang(MPCA_LANG_DEFAULT,
      "                                           \
        adjective : \"wow\" | \"many\"            \
                  |  \"so\" | \"such\";           \
        noun      : \"lisp\" | \"language\"       \
                  | \"book\" | \"build\" | \"c\"; \
        phrase    : <adjective> <noun>;           \
        doge      : <phrase>*;                    \
      ",
      Adjective, Noun, Phrase, Doge);
    
    /* Do some parsing here... */
    
    mpc_cleanup(4, Adjective, Noun, Phrase, Doge);
    

Without having an exact understanding of the syntax for that long string, it should be obvious how much _clearer_ the grammar is in this format. If we learn what all the special symbols mean we barely need to squint.

Another thing to notice is that the process is now in two steps. First we create and name several rules using `mpc_new` and then we define them using `mpca_lang`.

The first argument to `mpca_lang` are the options flags. For this we just use the defaults. The second is a long multi-line string in C. This is the _grammar_ specification. It consists of a number of _re-write rules_. Each rule has the name of the rule on the left, a colon `:`, and on the right its definition terminated with a semicolon `;`.

The special symbols used to define the rules on the right hand side work as follows.

`"ab"`

The string `ab` is required.

`'a'`

The character `a` is required.

`'a' 'b'`

First `'a'` is required, then `'b'` is required.

`'a' | 'b'`

Either `'a'` is required, or `'b'` is required.

`'a'*`

Zero or more `'a'` are required.

`'a'+`

One or more `'a'` are required.

`<abba>`

The rule called `abba` is required.

**Sounds familiar...**

Did you notice that the description of what the input string to `mpca_lang` should look like sounded like I was specifying a grammar? That's because it was. `mpc` uses itself internally to parse the input you give it to `mpca_lang`. It does it by specifying a _grammar_ in code using the previous method. How neat is that?

Using the table described above verify that what I've written above is equal to what we specified in code.

This method of specifying a grammar is what we are going to use in the following chapters. It might seem overwhelming at first. Grammars can be difficult to understand. But as we continue you will become much more familiar with how to create and edit them.

This chapter is about theory, so if you are going to try some of the bonus tasks, don't worry too much about correctness. Thinking in the right mindset is more important. Feel free to invent symbols and notation for certain concepts to make them simpler to write down. Some of the bonus task also might require cyclic or recursive grammar structures, so don't worry if you have to use these!

Reference
---------

* * *

#### [doge_code.c](#collapseOne)

    #include "mpc.h"
    
    int main(int argc, char** argv) {
    
      /* Build a parser 'Adjective' to recognize descriptions */
      mpc_parser_t* Adjective = mpc_or(4, 
        mpc_sym("wow"), mpc_sym("many"),
        mpc_sym("so"),  mpc_sym("such")
      );
    
      /* Build a parser 'Noun' to recognize things */
      mpc_parser_t* Noun = mpc_or(5,
        mpc_sym("lisp"), mpc_sym("language"),
        mpc_sym("book"), mpc_sym("build"), 
        mpc_sym("c")
      );
      
      mpc_parser_t* Phrase = mpc_and(2, mpcf_strfold, 
        Adjective, Noun, free);
      
      mpc_parser_t* Doge = mpc_many(mpcf_strfold, Phrase);
    
      /* Do some parsing here... */
      
      mpc_delete(Doge);
      
      return 0;
      
    }

#### [doge_grammar.c](#collapseTwo)

    #include "mpc.h"
    
    int main(int argc, char** argv) {
    
      mpc_parser_t* Adjective = mpc_new("adjective");
      mpc_parser_t* Noun      = mpc_new("noun");
      mpc_parser_t* Phrase    = mpc_new("phrase");
      mpc_parser_t* Doge      = mpc_new("doge");
    
      mpca_lang(MPCA_LANG_DEFAULT,
        "                                           \
          adjective : \"wow\" | \"many\"            \
                    |  \"so\" | \"such\";           \
          noun      : \"lisp\" | \"language\"       \
                    | \"book\" | \"build\" | \"c\"; \
          phrase    : <adjective> <noun>;           \
          doge      : <phrase>*;                    \
        ",
        Adjective, Noun, Phrase, Doge);
    
      /* Do some parsing here... */
    
      mpc_cleanup(4, Adjective, Noun, Phrase, Doge);
      
      return 0;
      
    }

Bonus Marks
-----------

* * *

*   › Write down some more examples of strings the `Doge` language contains.
*   › Why are there back slashes `\` in front of the quote marks `"` in the grammar?
*   › Why are there back slashes `\` at the end of the line in the grammar?
*   › Describe textually a grammar for decimal numbers such as `0.01` or `52.221`.
*   › Describe textually a grammar for web URLs such as `http://www.buildyourownlisp.com`.
*   › Describe textually a grammar for simple English sentences such as `the cat sat on the mat`.
*   › Describe more formally the above grammars. Use `|`, `*`, or any symbols of your own invention.
