var current_item = 0;
var section_hide_time = 700;
var section_show_time = 700;
jQuery(document).ready(function($) {
    $("a", '.navbar').click(function() {
        if (!$(this).hasClass('active')) {
            current_item = this;

            $('.section:visible').fadeOut(section_hide_time, function() {
                $('a', '.navbar').removeClass('active');
                $(current_item).addClass('active');
                var new_section = $($(current_item).attr('href'));
                new_section.fadeIn(section_show_time);
            });
        }
        return false;
    });
});

$(document).ready(function() {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});
