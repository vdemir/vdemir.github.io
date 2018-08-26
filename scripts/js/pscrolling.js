$(document).ready(function () {
    var myInterval = false;
    myInterval = setInterval(AutoScroll, 5000);

    function AutoScroll() {
        var iScroll = $(window).scrollTop();
        iScroll = iScroll + 10;
        $('html, body').animate({
            scrollTop: iScroll
        }, 1000);
    }
    
    $(window).scroll(function () {
        var iScroll = $(window).scrollTop();
        if (iScroll == 0) {
            myInterval = setInterval(AutoScroll, 5000);
        }
        if (iScroll + $(window).height() == $(document).height()) {
            clearInterval(myInterval);
        }
    });
});
