// call by $(this).devTip();
(function($){ 
    $.fn.extend({
        devTip: function(options){
            var defaults = {
                backgroundColor:'#fff',
                borderColor:'#eee'
            };
            var options = $.extend(defaults, options);
            return this.each(function(){
                // assign shortcut
                var o = options; 
                var obj = $(this);

                // assign variables
                var title = obj .attr('title');
                var img = obj .attr('rel');

                obj .hover(function() {
                    obj .css('position','relative').prepend('<div class="devTip"></div>')
                    .removeAttr('title'); 

// todo if no title but image than single image
                    // if has title than add p
                    if( title != null ) {
                        obj .find('.devTip').prepend('<p>'+title+'</p>');
                    }

// todo if has title but no image than hide image
                    // if has img than add the image field
                    if( img != null ) {
                        obj .find('p').prepend('<img src="'+img+'"/>');
                    }

                    // remove title attribute to prevent default tooltip
                }, function() {
                    obj .find('.devTip').remove();

                    //adds back title attribute for next round
                    obj .attr('title');
                })
            });
        }
    });
})(jQuery);
