#!/usr/bin/perl

use CGI;
$cgi    = new CGI;
$folder = $cgi->param('folder');
#$folder =@ARGV[0];			#Meant for cmd line testing
unless ($folder) {
	$folder=currentdate();
}
@folderlist=<2*>;


@countfiles=<$folder/*.cnt>;

print "Content-type: text/html\n\n";

print qq~<html>
<head>
<title>SimpleStat</title>
</head>
<body bgcolor="#FFFFF" text="#000000">
<h1>SimpleStats</h1>
<TABLE border=1>
<table width="400" border="1" bordercolor="#009900">
  <tr bgcolor="#FFFF99">
    <td width="316"><strong>Filename</strong></td>
    <td width="74"><strong>Count</strong></td>
  </tr>
~;

foreach $filename (@countfiles) {
	chomp $filename;
	open (READ,"<$filename");
		$count=<READ>;
	close(READ);
	$filename=~ s/$folder\///;
	$filename=~ s/.cnt//;
	if ($color==1) {
		$color=0;
		print "<TR><TD>$filename</TD><TD>$count</TD></TR>\n";

	}
	else { 
		$color =1;
		print "<TR bgcolor=\"#99CCFF\"><TD>$filename</TD><TD>$count</TD></TR>\n";
	}
}

print "</TABLE>\n";

foreach $foldername (@folderlist) {
	$foldernameDisp = $foldername;
	$foldernameDisp=~s/_/\//;
	print "<p><a href=\"stats.pl?folder=$foldername\">$foldernameDisp</a>"
}
print qq~
    </body>
    </html>
~;

sub currentdate{                        #This routine formats date and time
        ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst)=localtime;
        $year=$year+1900;
        $mon += 1;
        if ($mon < 10) {
                $mon="0$mon";
        }
        if ($hour < 10) {
                $hour="0$hour";
        }
        if ($mday < 10) {
                $mday="0$mday";
        }
        if ($sec < 10) {
                $sec="0$sec";
        }
        if ($min < 10) {
                $min="0$min";
        }
        $now="$year"."_"."$mon";
        print LOG "$year$mon$mday$hour$min$sec";
        return $now;
        }
