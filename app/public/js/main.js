


$(function(){
    $(".flexslider").flexslider({
        start: function () {
           // $(".flex-direction-nav").remove();
        },
        before: function () {
          //  $(".flex-direction-nav").remove();
        },
        animationSpeed:1200,
        slideshowSpeed:5000,
        directionNav:true,
        });
        $(".href_offer_sy.xii").on('click',function(){
            window.location.href="./offer_sy.html?type=3"
        })
        $(".href_offer_sy.jk").on('click',function(){
            window.location.href="./offer_sy.html?type=1"
        })
        $(".href_offer_sy.asb").on('click',function(){
            window.location.href="./offer_sy.html?type=0"
        })
        
})