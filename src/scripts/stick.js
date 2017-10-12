$(window).resize(function() {
    if($(window).width() > 768) {
        $(".source:not(.source-row):not(.source-connections-1)").stick_in_parent();
        $(".group-wrapper:not(:first-child)").hide();
    }
});