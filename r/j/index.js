$(function(){
	$('a').on('click',function(e){
		e.preventDefault();
	});

});
var code01 = '&lt;ul&gt;&lt;li&gt;1&lt;/li&gt;&lt;/ul&gt;';
$('#code01').html(code01);
(function(){

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
})();


