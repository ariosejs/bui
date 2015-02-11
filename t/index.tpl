{% extends "./parent.tpl" %}

{% block styles %}
{% parent %}
{% endblock %}

{% block content %}
<div class="wrap Demo bui">
	<h1>Button</h1>
	<h2>Button Type</h2>
	<div class="viewCode">
		<div class="example"></div>
		<textarea disabled="disabled"></textarea>
		<i class="copyBtn icon i-copy"></i>
		<p>简介</p>
	</div>
	<h2>Button States</h2>
	<div class="viewCode">
		<div class="example"></div>
		<textarea disabled="disabled"></textarea>
		<i class="copyBtn icon i-copy"></i>
		<p>简介</p>
	</div>
	<h2>Button States</h2>
	<div class="viewCode">
		<div class="example"></div>
		<textarea disabled="disabled"></textarea>
		<i class="copyBtn icon i-copy"></i>
		<p>简介</p>
	</div>
	<h1>Content</h1>
	<h2>Headings & Paragraph</h2>
	<div class="viewCode">
		<div class="example"></div>
		<textarea disabled="disabled"></textarea>
		<i class="copyBtn icon i-copy"></i>
		<p>简介</p>
	</div>
	<h2>Lines</h2>
	<div class="viewCode">
		<div class="example"></div>
		<textarea disabled="disabled"></textarea>
		<i class="copyBtn icon i-copy"></i>
		<p>简介</p>
	</div>
	<h2>paginator</h2>
	<div class="viewCode">
		<div class="example"></div>
		<textarea disabled="disabled"></textarea>
		<i class="copyBtn icon i-copy"></i>
		<p>简介</p>
	</div>

</div>

<script type="text/javascript" src="/r/j/ZeroClipboard.js"></script>

<div class="paginator">
	<a href="#" class="prev">&laquo;&nbsp;上一页</a>
	<a href="#" class="on">1</a>
	<a href="#">2</a>
	<a href="#">3</a>
	<a href="#">4</a>
	<a href="#">5</a>
	<a href="#" class="next">下一页&nbsp;&raquo;</a>
</div>


{% endblock %}

{% block scripts %}
{% parent %}
{% endblock %}
