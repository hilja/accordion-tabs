/**
 * Author styles
 */

$(document).ready(function() {
    
    /**
     * Initialize lazyload
     */
    
    $(".bg").unveil(200);

    /**
     * Stellar
     */
    
    $(window).stellar();

    /**
     * Measure window size
     */

    var winWidth  = $(window).width();
    var winHeight = $(window).height();
    var navBar    = 40;

    // $(window).resize(function() {
    //     var winWidth  = $(window).width();
    //     var winHeight = $(window).height();
    //     //$('#width').text(winWidth + " x " + winHeight + ' px');
    // });

    $('.block').css("height", winHeight - navBar);
    $('#bg1').css({
        "position": "fixed",
        "top": "-100px"
    });

    /**
     * Smooth scrolling
     */

    // function goToByScroll(dataslide) {
    //     htmlbody.animate({
    //         scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
    //     }, 2000, 'easeInOutQuint');
    // }
    
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top -navBar
                    }, 500);
                    return false;
                }
            }
        });
    });

    $(".menu a").on("click", function() {
        $('html, body').animate({
            scrollTop:$(this.hash).offset().top + -navBar
        }, 500);
    });


});