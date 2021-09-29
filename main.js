var autoScrolling = false;

$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    autoScrolling = true;

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 250, function() {
        autoScrolling = false;
    });
});

$(document).on('click', '.nav-link', function(event) {
    $('.nav-link').each(function() {
        $(this).removeClass('active');
    });

    $(this).addClass('active');
});

$(document).on("scroll", function(event) {
    if (autoScrolling) {
        return
    }
    
    $('.nav-link').each(function() {
        var scrollPos = $(document).scrollTop();
        var refElement = $($(this).attr('href'));

        if (refElement.offset().top - 1 <= scrollPos) {
            $('.nav-link').each(function() {
                $(this).removeClass('active');
            });

            $(this).addClass('active');
        }

        /*if ($(window).scrollTop() < $('#video-anchor').offset().top - 1) {
            $('.nav-link').each(function() {
                $(this).removeClass('active');
            });
        }*/

        if ($(window).scrollTop() < $('#video-anchor').offset().top - 1) {
            $('.nav-link').each(function() {
                $(this).removeClass('active');
            });
        }

        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 1) {
            $('.nav-link').each(function() {
                $(this).removeClass('active');
            });

            $('.nav-link:last').addClass('active');
        }
    });
});

$(document).on('click', '#submit-button', function(event) {
    $('#mce-success-response-custom').css('display', 'initial');
});

$(document).on('click', '.close', function(event) {
    $('#mce-success-response-custom').css('display', 'none');
});
