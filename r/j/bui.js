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
		$('.mask').height($(window).height()).fadeIn();

	},
	hide : function(){
		$('body').find('div.mask').fadeOut(function(){
			$(this).remove();
		})
	}
}


//Mask end

//dialog
$.fn.dialog = function(options){
	var winMinWidth = 880,
		winMinHeight = 630,
		winMaxWidth = 1040,
		winMaxHeight = 745;
	var dMinWidth = 840,
		dMinHeight = 600,
		dMaxWidth = 1000,
		dMaxHeight = 715;
	var winWidth = $(window).width(),
		winHeight = $(window).height();
	// if(winWidth > winMaxWidth && winHeight > winMaxHeight){
	// 	this.width(dMaxWidth);
	// 	this.height(dMaxHeight);
	// 	this.css('margin-left',-dMaxWidth/2)
	// }else{
	// 	this.width(dMinWidth);
	// 	this.height(dMinHeight);
	// 	this.css('margin-left',-dMinWidth/2)
	// }
	option = {
		width:840,
		height:500
	};

	_show = function(e){
		mask.show();
		e.show();
		e.animate({top:30,opacity:1},300);
		$('.mask,.close').click(function(){
			_close(e);
		});
		new dialogFocus();
	};
	_hide = function(e){
		e.animate({top:0,opacity:0},200,function(){
			e.hide();
		});
	};
	_resize = function(e){

	};
	_close = function(e){
		mask.hide();
		_hide(e);
	}
	
	_show(this);
}

// dialog.prototype.show = function(e){
// 	mask.show();
// 	e.show();
// 	e.animate({top:30,opacity:1},300);
// 	$('.mask').click(function(){
// 		mask.hide();
// 		hide(e);
// 	});
// 	$(window).resize(function(){
// 		var ww = $(window).width(),
// 			wh = $(window).height();
// 		if(ww > winMinWidth && ww < winMaxWidth && wh > winMinHeight && wh < winMaxHeight){
// 			console.log(ww,wh);
// 			// e.width(ww-40);
// 			// e.height(wh-30);
// 		}
		

// 	});
// }
// dialog.prototype.hide = function(e){
// 	e.animate({top:0,opacity:0},200,function(){
// 		e.hide();
// 	});

// }

// dialog-focus start
var dialogFocus = function(){
	$('body').off('click','#testReport-prev,#testReport-next');
	$('.testReportList-page').html('');
	var reportList = $('.testReportList ul');
	var reportItem = $('.testReportList li');
	var movieOnce = reportItem.outerWidth() + 20;
	var listWidth = reportItem.length * movieOnce;
	var reportPos = 0;
	reportList.css({'width':listWidth,'left':0});
	for(var i = 0; i < reportItem.length / 2; i++){
		$('.testReportList-page').append('<i></i>');
	}
	var pageNum = 0;
	var changePageNum = function (num){
		var pageI = $('.testReportList-page i');
		pageI.removeClass('on');
		pageI.eq(num).addClass('on');
	};
	changePageNum(pageNum);
	
	$('body').on('click','#testReport-prev,#testReport-next',function(e){
		e.preventDefault();
		if($(this).hasClass('i-prev')){
			reportPos = reportPos + movieOnce*2;
			if(reportPos > 0){
				reportPos = -listWidth + movieOnce*2;
				reportList.animate({left:reportPos},200);
				pageNum = reportItem.length / 2 - 1;
				changePageNum(pageNum)
			}else{
				reportList.animate({left:reportPos},200);
				pageNum--;
				changePageNum(pageNum);
			}
		}else{
			reportPos = reportPos - movieOnce*2;
			if(reportPos > -listWidth){
				reportList.animate({left:reportPos},200);
				pageNum++;
				changePageNum(pageNum);
			}else{
				reportPos = 0;
				reportList.animate({left:reportPos},200);
				pageNum = 0;
				changePageNum(pageNum)
			}
		}
	});
	


};
	




// dialog-focus end

