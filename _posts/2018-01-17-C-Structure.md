---
layout: post
title:  C'de Struct Yapıları
date:   2018-01-16 13:52:00
tags:   Struct
comments: False
---

{{ page.title }}
================
{% include CSS.html %}

<p class="meta">16 Ocak 2018 - Türkiye</p>

## C Programlamada Struct Yapılar

Bu yazıda, C programlamasındaki struct yapılar hakkında bilgi edineceksiniz; Nedir, nasıl tanımlanır ve programınızda nasıl kullanılır gibi.

<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="/images/1737096_orig.jpg" alt="programs" class="img-responsive" width="217px" height="240px"/>
  <p><small>Yapı &bull; Vitamin C.</small></p>
</div>

Struct Yapı, tek bir isim altında farklı data tipinden değişkenlerin bir koleksiyonudur.

**For example:** You want to store some information about a person: his/her name, citizenship number and salary. You can easily create different variables name, citNo, salary to store these information separately.

However, in the future, you would want to store information about multiple persons. Now, you'd need to create different variables for each information per person: name1, citNo1, salary1, name2, citNo2, salary2

You can easily visualize how big and messy the code would look. Also, since no relation between the variables (information) would exist, it's going to be a daunting task.

A better approach will be to have a collection of all related information under a single name `Person`, and use it for every person. Now, the code looks much cleaner, readable and efficient as well.

This collection of all related information under a single name `Person` is a structure.

Structure Definition in C
-------------------------

Keyword `struct` is used for creating a structure.

### Syntax of structure

struct structure_name 
{
    data_type member1;
    data_type member2;
    .
    .
    data_type memeber;
};

**Note**: Don't forget the semicolon `};` in the ending line.

We can create the structure for a person as mentioned above as:

struct person
{
    char name\[50\];
    int citNo;
    float salary;
};

This declaration above creates the derived data type **`struct person`**.

Structure variable declaration
------------------------------

When a structure is defined, it creates a user-defined type but, no storage or memory is allocated.

For the above structure of a person, variable can be declared as:

struct person
{
    char name\[50\];
    int citNo;
    float salary;
};

int main()
{
    struct person person1, person2, person3\[20\];
    return 0;
}

Another way of creating a structure variable is:

struct person
{
    char name\[50\];
    int citNo;
    float salary;
} person1, person2, person3\[20\];

In both cases, two variables person1, person2 and an array person3 having 20 elements of type **struct person** are created.

Accessing members of a structure
--------------------------------

There are two types of operators used for accessing members of a structure.

1.  Member operator(.)
2.  Structure pointer operator(->) (is discussed in [structure and pointers tutorial](/c-programming/c-structures-pointers "Structure and Pointer"))

Any member of a structure can be accessed as:

structure\_variable\_name.member_name

Suppose, we want to access salary for variable person2. Then, it can be accessed as:

person2.salary

### Example of structure

**Write a C program to add two distances entered by user. Measurement of distance should be in inch and feet. (Note: 12 inches = 1 foot)**

    #include <stdio.h>
    struct Distance
    {
        int feet;
        float inch;
    } dist1, dist2, sum;
    
    int main()
    {
        printf("1st distance\n");
    
        // Input of feet for structure variable dist1
        printf("Enter feet: ");
        scanf("%d", &dist1.feet);
    
        // Input of inch for structure variable dist1
        printf("Enter inch: ");
        scanf("%f", &dist1.inch);
    
        printf("2nd distance\n");
    
        // Input of feet for structure variable dist2
        printf("Enter feet: ");
        scanf("%d", &dist2.feet);
    
        // Input of feet for structure variable dist2
        printf("Enter inch: ");
        scanf("%f", &dist2.inch);
    
        sum.feet = dist1.feet + dist2.feet;
        sum.inch = dist1.inch + dist2.inch;
    
        if (sum.inch > 12) 
        {
          	//If inch is greater than 12, changing it to feet.
            ++sum.feet;
            sum.inch = sum.inch - 12;
        }
    
        // printing sum of distance dist1 and dist2
        printf("Sum of distances = %d\'-%.1f\"", sum.feet, sum.inch);
        return 0;
    }
    

**Output**

1st distance
Enter feet: 12
Enter inch: 7.9
2nd distance
Enter feet: 2
Enter inch: 9.8
Sum of distances = 15'-5.7"

### Keyword typedef while using structure

Writing `struct structure_name variable_name;` to declare a structure variable isn't intuitive as to what it signifies, and takes some considerable amount of development time.

So, developers generally use `typedef` to name the structure as a whole. For example:

typedef struct complex
{
  int imag;
  float real;
} comp;

int main()
{
  comp comp1, comp2;
}

Here, `typedef` keyword is used in creating a type comp (which is of type as **`struct complex`**).

Then, two structure variables comp1 and comp2 are created by this comp type.

Structures within structures
----------------------------

Structures can be nested within other structures in C programming.

struct complex
{
 int imag_value;
 float real_value;
};

struct number
{
   struct complex comp;
   int real;
} num1, num2;

Suppose, you want to access imag_value for num2 structure variable then, following structure member is used.

num2.comp.imag_value

Passing structures to a function
--------------------------------

There are mainly two ways to pass structures to a function:

1.  Passing by value
2.  Passing by reference

It has been covered in detail in: [Passing structures to a function](/c-programming/c-structure-function "How to pass structures to a function").
