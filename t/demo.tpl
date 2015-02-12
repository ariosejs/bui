{% extends "./parent.tpl" %}

{% block styles %}
{% parent %}
{% endblock %}

{% block content %}
<div class="wrap Demo bui">
	<h1>Demo</h1>
	<h2>Tips</h2>
	<div class="viewCode">
		<div class="example">
			<a href="javascript:;" class="tips" title="这里 tips">small</a>  <a href="javascript:;" class="tips" title="这里是个tips这里是个tips这里是个tips这里是个tips">tips</a>
		</div>
		<textarea disabled="disabled">
<a href="#" class="tips" title="small tips">small tips</a>
<a href="#" class="tips" title="这里是个tips这里是个tips这里是个tips这里是个tips">tips</a>
		</textarea>
		<i class="copyBtn icon i-copy"></i>
		<p>简介</p>
	</div>
	<h2>Dialog</h2>
	<div class="viewCode">
		<div class="example">
			
			<a href="#" class="btn btn-main" id="anxindu">安心度</a>
		</div>
		<textarea disabled="disabled">

		</textarea>
		<i class="copyBtn icon i-copy"></i>
		<p>简介</p>
	</div>

	<div class="cc">这里是个里是个tips这里是个</div>

</div>

<div class="dialog dialog-focus" id="testReport">
	<a href="javascript:;" class="close icon i-close"></a>
	<div class="dialog-content">
		<div class="testReportList">
			<ul>
				<li><img src="http://i0.chunboimg.com/group1/M00/00/83/Cv4IbFTaCTSAIDaNAANTAQEPaBQ74..jpg"></li>
				<li><img src="http://i1.chunboimg.com/group1/M00/00/83/Cv4IdVTaCUuAVRDJAASSz_JWsZA76..jpg"></li>
				<li><img src="http://i0.chunboimg.com/group1/M00/00/83/Cv4IbFTaCTSAHiH8AAT_9-q-VUY13..jpg"></li>
				<li><img src="http://i0.chunboimg.com/group1/M00/00/83/Cv4IdVTaCUyAYOglAATvDv-cJNM91..jpg"></li>
				<li><img src="http://i0.chunboimg.com/group1/M00/00/83/Cv4IbFTaCTWAPV3HAATJS8SZPi840..jpg"></li>
				<li><img src="http://i0.chunboimg.com/group1/M00/00/83/Cv4IdVTaCUyASow_AATh_3W62dE48..jpg"></li>
				<li><img src="http://i1.chunboimg.com/group1/M00/00/83/Cv4IbFTaCTaAfNmNAATjc7g6OnE15..jpg"></li>
				<li><img src="http://i1.chunboimg.com/group1/M00/00/83/Cv4IdVTaCU2AQ7WcAATqZZHzanM56..jpg"></li>
				<li><img src="http://i0.chunboimg.com/group1/M00/00/83/Cv4IbFTaCTeAD7H0AATPxWEpOxw81..jpg"></li>
				<li><img src="http://i0.chunboimg.com/group1/M00/00/83/Cv4IdVTaCU6ASWLGAATuFP0oDEo00..jpg"></li>
				<li><img src="http://i0.chunboimg.com/group1/M00/00/83/Cv4IbFTaCTiAfYRgAAROizsMR5Q67..jpg"></li>
				<li><img src="http://i0.chunboimg.com/group1/M00/00/83/Cv4IbFTaCTiAfYRgAAROizsMR5Q67..jpg"></li>
			</ul>
		</div>
		<div class="testReportList-page"></div>
		<a href="#" class="icon i-prev" id="testReport-prev"></a>
		<a href="#" class="icon i-next" id="testReport-next"></a>
	</div>
</div>

<script type="text/javascript" src="/r/j/ZeroClipboard.js"></script>



{% endblock %}

{% block scripts %}
{% parent %}
{% endblock %}
