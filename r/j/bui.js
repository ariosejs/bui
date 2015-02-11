(function(){

	// tips start
	var tipsElem = $('.tips');
	var tipsBox;
	if(tipsElem.length > 0){
		(function(){
			tipsElem.each(function () {
				var tipsThis = $(this);
				var tipsTitle = tipsThis.attr('title');
				var tipsHtml = '<p class="tipsBox">'+tipsTitle+'<i></i></p>';
				tipsThis.hover(function(){
					if($('.tipsBox').length > 0){
						tipsBox.stop();
						$('body').find('p.tipsBox').remove();
					}
					$('body').append(tipsHtml);
					tipsThis.attr('title','');
					tipsBox = $('.tipsBox');
					tipsBox.css({top:tipsThis.offset().top - tipsBox.outerHeight(),left:tipsThis.offset().left - tipsBox.outerWidth()/2 + tipsThis.outerWidth()/2,'opacity':'0'});
					tipsBox.animate({top:tipsBox.offset().top - 10,opacity:1},200);
				},function(){
					tipsBox.stop();
					tipsThis.attr('title',tipsTitle);
					tipsBox.animate({top:tipsBox.offset().top + 5,opacity:0},100,function(){
						$('body').find('p.tipsBox').remove();
					});
				});
			});
		})();
	}
	// tips end

	

})();

//Mask start

var mask = {
	show : function(){
		$('body').append('<div class="mask"></div>');
		$('.mask').height($('body').height()).fadeIn();;
	},
	hide : function(){
		$('body').find('div.mask').fadeOut(function(){
			$(this).remove();
		})
	}
}

//Mask end

//dialog
var dialog = {
	show:function(){
		var d = $('.dialog');

	},
	hide:function(){

	}
}