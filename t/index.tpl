{% extends "./parent.tpl" %}

{% block styles %}
{% parent %}
{% endblock %}

{% block content %}
<div class="wrap Demo">
<!-- 
	<h1>Button</h1>
	<h2>Button States</h2>
	<div class="viewCode">
		<div class="example">
			x
		</div>
		<textarea disabled="disabled">x</textarea>
		<i class="copyBtn icon i-copy"></i>
		<p>简介</p>
	</div>

 -->
	<h1>Button</h1>
	<h2>Button States</h2>
	<div class="viewCode">
		<div class="example">
			<a href="#" class="btn">a</a> <input type="button" class="btn" value="input"> <button class="btn">button</button>
		</div>
		<textarea disabled="disabled">x</textarea>
		<i class="copyBtn icon i-copy"></i>
		<p>简介</p>
	</div>
	<h1>Button</h1>
	<h2>Button States</h2>
	<div class="viewCode">
		<div class="example">
			x
		</div>
		<textarea disabled="disabled">x</textarea>
		<i class="copyBtn icon i-copy"></i>
		<p>简介</p>
	</div>
 	<h1>Button</h1>
	<h2>Button States</h2>
	<div class="viewCode">
		<div class="example">
			xx
		</div>
		<textarea disabled="disabled">xx</textarea>
		<i class="copyBtn icon i-copy"></i>
		<p>简介</p>
	</div>

</div>

<script type="text/javascript" src="/r/j/ZeroClipboard.js"></script>

{% endblock %}

{% block scripts %}
{% parent %}
{% endblock %}
