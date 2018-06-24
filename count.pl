#!/usr/bin/perl


use CGI;
$cgi    = new CGI;
$filename = $cgi->param('file');
#$filename=@ARGV[0];				#Meant for cmd line testing
$folder=currentdate();

unless (-d $folder) {
	mkdir $folder;
}

print $filename;
open (READ,"<$folder\/$filename.cnt");
$count=<READ>;
close (READ);

chomp $count;

$count++;

open (WRITE,">$folder\/$filename.cnt");
	print WRITE $count;
close (WRITE);

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
