/**
 * @name: jQLabel
 * @version:1.0.2
 * @Author: Hasin Hayder [hasin@leevio.com]
 * @date: 14th Feb, 2011
 *
 * Use jQLabel to create labels like Gmail on the fly.
 * jQLabel searches for the text inside an element, and by matching its pattern
 * in a given array. If found, it makes it look like a Gmail Label.
 *
 * usage: see demo.html
 * usage: $(".label").jQLabel({"labels":{"Overdue":"#C73B0B","Expiring Today":"#978E43"}});
 *
 * changelog
 * March 03, 2011: Added support to convert spans with a particular class look like a label
 * $(".important").jQLabel();
 */
(function($){
    var opts;
    $.fn.jQLabel = function(options){
        var defaults = {
            pointer:false,
            backgroundColor:"#CE0000", /* this will only be used if labels are not supplied */
            color:"#FEFEFE"
        }
        opts = $.extend(defaults, options);
        var labels={}
        for(j in opts['labels']){
            labels[j.toLowerCase()]=opts['labels'][j];
        }
        if($.isEmptyObject(opts['labels'])){
            $(this).addClass("jq-base");
            $(this).css("backgroundColor",opts['backgroundColor']);
            if(opts['pointer']) $(this).css("cursor","pointer");
            $(this).css("color",opts['color']);
        }else{
            $(this).each(function(){
                var key = $(this).text().toLowerCase();
                if(labels[key]) {
                    $(this).addClass("jq-base");
                    $(this).css("backgroundColor",labels[key]);
                    if(opts['pointer']) $(this).css("cursor","pointer");
                    $(this).css("color",opts['color']);
                }
            })
        }
    }

})(jQuery);