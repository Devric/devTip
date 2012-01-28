// call by $(this).devTip();
(function($){ 
    $.fn.extend({
        devTip: function(options){
            var defaults = {
                backgroundColor:'#fff',
                borderColor:'#eee',
                width:270,
                align:'left',
                devTipPosition:-25
            };
            var options = $.extend(defaults, options);
            return this.each(function(){
                // assign shortcut
                var o = options,
                    obj = $(this),
                    devTip = obj.find('.devTip');

                // assign variables
                var title = obj .attr('title'),
                    img = obj .attr('rel');

                obj .hover(function() {

                    // calculate for flip if reach the end
                    var windowWidth = $(window).width(),
                        tipWidth = o.width;
                        tipPosition = $(this).position(),
                        tipCalc = tipWidth + tipPosition.left;
                    
                        if (tipCalc >= windowWidth){
                            var flip = 'right',
                                flipPosition = 'right:'+o.devTipPosition+'px';
                        } else {
                            var flip = 'left',
                                flipPosition = 'left:'+o.devTipPosition+'px';
                        }

                        // add top class for flip to bottom
                        // if this obj located less than current viewport scroll + 300px
                        // top = top, else default on top
                        if ( obj.position().top < $(window).scrollTop() + 120 ) {
                            var top = 'bottom';
                        } else {
                            var top = 'top';
                        }

                    // add tooltip div
                    obj .css('position','relative')
                        .prepend('<div class="devTip '+ top + ' ' + flip +'" style="'+flipPosition+'; width:'+o.width+'px; text-align:'+o.align+'"></div>')

                    .removeAttr('title');

                    // todo if no title but image than single image
                    // if has title than add p
                    if( title != null ) {
                        obj .find('.devTip').prepend(title);
                    }

                    // todo if has title but no image than hide image
                    // if has img than add the image field
                    if( img != null ) {
                        obj .find('.devTip').prepend('<img src="'+img+'"/>');
                    }

                    // end mouseover
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
