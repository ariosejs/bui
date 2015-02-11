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
			<a href="#" class="tips" title="这里是个tips这里是个tips这里是个tips这里是个tips">tips</a>
		</div>
		<textarea disabled="disabled"></textarea>
		<i class="copyBtn icon i-copy"></i>
		<p>简介</p>
	</div>
	
</div>

<script type="text/javascript" src="/r/j/ZeroClipboard.js"></script>



{% endblock %}

{% block scripts %}
{% parent %}
{% endblock %}
