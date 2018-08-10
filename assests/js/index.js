

$("li").click(function() {
    $(this).toggleClass("color_lineThrough");
});

$("span").click(function() {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
});