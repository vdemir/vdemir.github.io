---
layout: post
title:  C STANDARD LIBRARY[stdlib.h kitaplık]
date:   2018-01-04 13:52:00
tags:   C Programlama
comments: False
---

{{ page.title }}
================

<p class="meta">7 Ocak 2018 - Türkiye</p>


<p class="myParagraph">
The <strong>stdio.h header file</strong> includes C standard library functions to perform input and output operation. It contains functions performing input and output operations on  stdin, stdout and stderr as well as on file. It contains functions defined specifically for a particular data type like getchar and generic functions like printf and scanf.
</p>
<hr/>
<!-- Striped Table HTML Starts here -->
<h2 id="myH2">List of stdio.h Library Functions</h2>
Click on function names below to see detailed description of functions.
<table class="table table-bordered table-striped">
   <caption><h3 class="text-left myTableHeader"></h3></caption>
   <thead>
      <tr>
         <th class="text-center">Function</th>
         <th class="text-center">Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
     <!-- use width="25%" on td for customizing width -->
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/clearerr-stdio-c-library-function.html">clearerr</a></td>
         <td class="myStripedTableItems" width="75%">Clears error indicators associated with a given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fclose-stdio-c-library-function.html">fclose</a></td>
        <td class="myStripedTableItems" width="75%">Closes the stream and flushes buffers associated with the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/feof-stdio-c-library-function.html">feof</a></td>
        <td class="myStripedTableItems" width="75%">Checks the end-of-file indicator of the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/ferror-stdio-c-library-function.html">ferror</a></td>
        <td class="myStripedTableItems" width="75%">Checks the error indicator of the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fflush-stdio-c-library-function.html">fflush</a></td>
        <td class="myStripedTableItems" width="75%">Flushes the content of the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fgetc-stdio-c-library-function.html">fgetc</a></td>
        <td class="myStripedTableItems" width="75%">Gets the next character from the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fgetpos-stdio-c-library-function.html">fgetpos</a></td>
        <td class="myStripedTableItems" width="75%">Gets current position of the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fgets-stdio-c-library-function.html">fgets</a></td>
        <td class="myStripedTableItems" width="75%">Reads a line from given stream and stores it into a character array.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fopen-stdio-c-library-function.html">fopen</a></td>
        <td class="myStripedTableItems" width="75%">Opens a file in the given mode.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fprintf-stdio-c-library-function.html">fprintf</a></td>
        <td class="myStripedTableItems" width="75%">Writes formatted output to a stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fputc-stdio-c-library-function.html">fputc</a></td>
        <td class="myStripedTableItems" width="75%">Writes a character to the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fputs-stdio-c-library-function.html">fputs</a></td>
        <td class="myStripedTableItems" width="75%">Writes a string to the given stream excluding the null terminating character.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fread-stdio-c-library-function.html">fread</a></td>
        <td class="myStripedTableItems" width="75%">Reads data from the given stream and stores it into an array.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/freopen-stdio-c-library-function.html">freopen</a></td>
        <td class="myStripedTableItems" width="75%">Reopens a stream with different file or mode.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fscanf-stdio-c-library-function.html">fscanf</a></td>
        <td class="myStripedTableItems" width="75%">Read formatted data from given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fseek-stdio-c-library-function.html">fseek</a></td>
        <td class="myStripedTableItems" width="75%">Changes the position indicator of the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fsetpos-stdio-c-library-function.html">fsetpos</a></td>
        <td class="myStripedTableItems" width="75%">Sets the position indicator of the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/ftell-stdio-c-library-function.html">ftell</a></td>
        <td class="myStripedTableItems" width="75%">Returns the current position of the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fwrite-stdio-c-library-function.html">fwrite</a></td>
        <td class="myStripedTableItems" width="75%">Writes data from an array to the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/getc-stdio-c-library-function.html">getc</a></td>
        <td class="myStripedTableItems" width="75%">Gets the next character from the given stream and increments the position indicator.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/getchar-stdio-c-library-function.html">getchar</a></td>
        <td class="myStripedTableItems" width="75%">Returns a character from stdin stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/gets-stdio-c-library-function.html">gets</a></td>
        <td class="myStripedTableItems" width="75%">Reads a line from stdin and stores it into given character array.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/perror-stdio-c-library-function.html">perror</a></td>
        <td class="myStripedTableItems" width="75%">Prints an error message to stderr.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/printf-stdio-c-library-function.html">printf</a></td>
        <td class="myStripedTableItems" width="75%">Print formatted data to stdout.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/putc-stdio-c-library-function.html">putc</a></td>
        <td class="myStripedTableItems" width="75%">Writes a character to the given stream and increment the position indicator.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/putchar-stdio-c-library-function.html">putchar</a></td>
        <td class="myStripedTableItems" width="75%">Writes a character to stdout stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/puts-stdio-c-library-function.html">puts</a></td>
        <td class="myStripedTableItems" width="75%">Writes a string to stdout stream excluding null terminating character.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/remove-stdio-c-library-function.html">remove</a></td>
        <td class="myStripedTableItems" width="75%">Deletes a file.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/rename-stdio-c-library-function.html">rename</a></td>
        <td class="myStripedTableItems" width="75%">Changes the name of an existing file.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/rewind-stdio-c-library-function.html">rewind</a></td>
        <td class="myStripedTableItems" width="75%">Reset the position indicator to the beginning of the file.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/scanf-stdio-c-library-function.html">scanf</a></td>
        <td class="myStripedTableItems" width="75%">Reads formatted data from stdin.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/setbuf-stdio-c-library-function.html">setbuf</a></td>
        <td class="myStripedTableItems" width="75%">Sets buffer for the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/setvbuf-stdio-c-library-function.html">setvbuf</a></td>
        <td class="myStripedTableItems" width="75%">Sets buffer for the given stream with various buffering modes.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/sprintf-stdio-c-library-function.html">sprintf</a></td>
        <td class="myStripedTableItems" width="75%">Writes formatted data to given string.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/sscanf-stdio-c-library-function.html">sscanf</a></td>
        <td class="myStripedTableItems" width="75%">Reads formatted data from given string.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/tmpfile-stdio-c-library-function.html">tmpfile</a></td>
        <td class="myStripedTableItems" width="75%">Creates a temporary file having unique file name.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/tmpnam-stdio-c-library-function.html">tmpnam</a></td>
        <td class="myStripedTableItems" width="75%">Generates and unique and valid temporary filename.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/ungetc-stdio-c-library-function.html">ungetc</a></td>
        <td class="myStripedTableItems" width="75%">Pushes a character back to the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/vfprintf-stdio-c-library-function.html">vfprintf</a></td>
        <td class="myStripedTableItems" width="75%">Writes formatted data to a stream using an argument list.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/vprintf-stdio-c-library-function.html">vprintf</a></td>
        <td class="myStripedTableItems" width="75%">Print formatted data to stdout using an argument list.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/vsprintf-stdio-c-library-function.html">vsprintf</a></td>
        <td class="myStripedTableItems" width="75%">Writes formatted data to a string using an argument list.</td>
      </tr>
   </tbody>
</table>
<!-- Striped Table HTML Ends here -->
<hr/>
<!-- Striped Table HTML Starts here -->
<h2 id="myH2">Data Types in stdio.h Library</h2>
<table class="table table-bordered table-striped">
   <caption><h3 class="text-left myTableHeader"></h3></caption>
   <thead>
      <tr>
         <th class="text-center">Types</th>
         <th class="text-center">Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><strong>fpos_t</strong></td>
         <td class="myStripedTableItems" width="75%">An object used for storing any position within a file.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><strong>FILE</strong></td>
         <td class="myStripedTableItems" width="75%">An object containing information of a file or stream.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><strong>size_t</strong></td>
         <td class="myStripedTableItems" width="75%">An unsigned integral type.</td>
      </tr>
   </tbody>
</table>
<!-- Striped Table HTML Ends here -->
