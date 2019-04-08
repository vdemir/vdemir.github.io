(function()
{
    $('#contact-form').validate();
    $('.contact-header-row').gmap3({
        marker:{
          address: "",
          data: "Pisi Linux"            
        },
        map:{
          options:{
              scrollwheel: false,
            zoom: 14
          }
        }
    });
})()
