<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="handbook demo" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>[[ title ]]</title>

  <link rel="stylesheet" href="/components/bootstrap/dist/css/bootstrap.css" />
  <link rel="stylesheet" href="/css/dropdowns-enhancement.css" />
  <link rel="stylesheet" href="/components/nya-bootstrap-select/dist/css/nya-bs-select.css" />
  <link rel="stylesheet" href="/css/style.css">

  {% if ENV_DEVELOPMENT %}
    <script src="http://localhost:35729/livereload.js"></script>
  {% endif %}
</head>
<body data-spy="scroll" data-target=".scrollspy">

  {% block content %}{% endblock %}

  	<script src="/components/jquery/dist/jquery.min.js"></script>
  	<script src="/components/angular/angular.min.js"></script>
  	<script src="/components/angular-sanitize/angular-sanitize.min.js"></script>
  	<script src="/components/bootstrap/js/affix.js"></script>
	<script src="/components/bootstrap/js/alert.js"></script>
	<!-- // <script src="/components/bootstrap/js/dropdown.js"></script> -->
	<script src="/components/bootstrap/js/tooltip.js"></script>
	<script src="/components/bootstrap/js/modal.js"></script>
	<script src="/components/bootstrap/js/transition.js"></script>
	<script src="/components/bootstrap/js/button.js"></script>
	<script src="/components/bootstrap/js/popover.js"></script>
	<script src="/components/bootstrap/js/carousel.js"></script>
	<script src="/components/bootstrap/js/scrollspy.js"></script>
	<script src="/components/bootstrap/js/collapse.js"></script>
	<script src="/components/bootstrap/js/tab.js"></script>
	<script src="/components/nya-bootstrap-select/dist/js/nya-bs-select.js"></script>

	<script src="/js/dropdowns-enhancement.js"></script>
	<script src="/js/main.js"></script>

</body>
</html>
