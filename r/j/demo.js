$(function(){
	
	var tips = function(){
		var tipsItem = $('.tips');
		var tipsTitle = tipsItem.attr('title');
		var tipsHtml = '<p class="tipsBox">'+tipsTitle+'<i></i></p>';
		var tipsBox;
		tipsItem.hover(function(){
			$(this).attr('title','');
			if($('.tipsBox').length == 0){
				$('body').append(tipsHtml);
				tipsBox = $('.tipsBox');
				tipsBox.css({top:$(this).offset().top - tipsBox.outerHeight(),left:$(this).offset().left - tipsBox.outerWidth()/2 + $(this).outerWidth()/2,'opacity':'0'});
				tipsBox.animate({top:tipsBox.offset().top - 10,opacity:1},200);
			}
		},function(){
			tipsBox.stop();
			$(this).attr('title',tipsTitle);
			tipsBox.animate({top:tipsBox.offset().top + 5,opacity:0},100,function(){
				$('body').find('p.tipsBox').remove();
			});
			
		})
	}
	tips();

	function pD(){
		$('.bui a').on('click',function(e){
			e.preventDefault();
		});
	}
	function copy(){
		// 多个复制
		ZeroClipboard.config({ hoverClass: "btn-clipboard-hover" });
		$('i.copyBtn').each(function (i, o) {
			var client = new ZeroClipboard($(o));
			var text = $(o).prev('textarea').val();
			client.on("copy", function (event) {
				var clipboard = event.clipboardData;
				clipboard.setData("text/plain", text);
			}).on("aftercopy",function(event){
				$(event.target).addClass('copyDone');
				setTimeout(function(){
					$(event.target).removeClass('copyDone');
				},5e3);
			});
		});
	};
	pD();
	copy();


});


