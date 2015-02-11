$(function(){
	
	

	$.get('/index.json',function(data){
		var d = $.parseJSON(data);
		console.log(d)
		$('.viewCode').each(function(i,o){
			console.log(i,o)
			var f = $(o);
			var code = decodeURIComponent(d[i].code)
			var text = d[i].text;
			f.children('div').html(code);
			f.children('textarea').html(code);
			f.children('p').html(text);
		});

		pD();
		copy();
	});

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
});




