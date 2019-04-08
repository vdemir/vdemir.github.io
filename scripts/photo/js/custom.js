(function(){
    
    var homeSlider = $('#home-slider').bxSlider({        
        auto: true,
        pager:false,
        pause: 5000,
        speed: 800
    });
    
    $('#work-slider').bxSlider({
        auto: true,
        pager:true,
        pause: 5000,
        speed: 800
    });

    $('.card').hover(
        function(){
            $this = $(this);                    
            $this.find('.card-image').addClass('hovered');
        },
        function() { 
            $this = $(this);                    
            $this.find('.card-image').removeClass('hovered');
        }
    );

    window.sr = ScrollReveal({easing: 'linear', mobile:false, vFactor: 0.10});
    sr.reveal('.animated');

})()