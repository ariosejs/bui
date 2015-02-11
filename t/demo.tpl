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
			<div class="dialog dialog-focus">
				<a href="javascript:;" class="close i-close"></a>
				<div class="dialog-content">
					<ul>
						<li><img src="" alt=""></li>
						<li><img src="" alt=""></li>
						<li><img src="" alt=""></li>
						<li><img src="" alt=""></li>
						<li><img src="" alt=""></li>
					</ul>
					<a href="#" class="i-prev"></a>
					<a href="#" class="i-next"></a>
				</div>
			</div>
			<a href="#" class="btn btn-main" id="anxindu">安心度</a>
		</div>
		<textarea disabled="disabled">

		</textarea>
		<i class="copyBtn icon i-copy"></i>
		<p>简介</p>
	</div>

	<div class="cc">这里是个里是个tips这里是个</div>

</div>

<script type="text/javascript" src="/r/j/ZeroClipboard.js"></script>



{% endblock %}

{% block scripts %}
{% parent %}
{% endblock %}
