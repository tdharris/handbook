{% extends 'layout.swig' %}

{% block content %}
<div ng-app="handbook">
	<nav class="navbar navbar-fixed-top navbar-inverse">
	  <div class="container">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" href="#"><img src="img/mf_logo_white.png"></a>
	    </div>
	    <div id="navbar" class="collapse navbar-collapse">
	      <ul class="nav navbar-nav">
	        <li class="active"><a href="#">Demo</a></li>
	      </ul>
	    </div><!-- /.nav-collapse -->
	  </div><!-- /.container -->
	</nav><!-- /.navbar -->

	<div ng-controller="HandbookCtrl" ng-init="init()" class="container">

	  <div id="hb" class="col-xs-12 col-sm-9">
	    <p class="pull-right visible-xs">
	      <button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
	    </p>

	    <nav class="navbar navbar-default">
	      <div class="container-fluid">
	        <!-- Brand and toggle get grouped for better mobile display -->
	        <div class="navbar-header">
	          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	            <span class="sr-only">Toggle navigation</span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	          </button>
	          <a class="navbar-brand" href="#">Support Handbook</a>
	        </div>

	        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	          <form class="navbar-form navbar-left">
	            
	            <div id="select-portfolio" class="form-group">
	            	<label>Portfolio</label>
		            <ul class="nya-bs-select" ng-model="selectedPortfolio">
		            	<li nya-bs-option="(portfolioKey, value) in portfolios">
		            		<a>{{ portfolioKey }}</a>
		            	</li>
		            </ul>
	            </div>

	            <div id="select-product" class="form-group pull-right">
		            <label>Product</label>
		            <ul class="nya-bs-select" ng-model="selectedProduct">
		            	<li nya-bs-option="(productKey, value) in selectedPortfolio">
		            		<a>{{ productKey }}</a>
		            	</li>
		            </ul>
	            </div>

	          </form>
	          
	        </div>
	      </div>
	    </nav>

	    <div>
	      <p class="pull-right visible-xs">
	        <button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
	      </p>
	      <div id="content">
		      <div class="jumbotron" ng-show="selectedProduct">
		        <h1>{{selectedProduct.name}}</h1>
		      </div>

			<section id="{{sectionKey | spaceless}}" ng-repeat="(sectionKey, sectionValue) in contentList[selectedProduct.hbu]">
			  <h2><a href="#{{sectionKey | spaceless}}">{{sectionKey}}</a></h2>
			  <div class="sectionContent" ng-bind-html="sectionValue.content"></div>
			  <section id="{{subsectionKey | spaceless}}" class="subsection" ng-repeat="(subsectionKey, subsectionValue) in $parent.contentList[selectedProduct.hbu][sectionKey].subsections">
			    <h4><a href="#{{subsectionKey | spaceless}}">{{subsectionKey}}</a></h4>
			    <div class="sectionContent" ng-bind-html="subsectionValue.content"></div>
			  </section>
			  <hr>
			</section>

		    </div>
	    </div><!--/.col-xs-12.col-sm-9-->

	</div> <!-- END hb -->

    <div id="nav-wrapper" class="col-xs-6 col-sm-3 scrollspy">
      <ul id="nav" class="nav nav-pills nav-stacked nav-section" data-spy="affix">
        <li ng-repeat="(sectionKey, sectionValue) in contentList[selectedProduct.hbu]">
        	<a href="#{{sectionKey | spaceless}}">{{sectionKey}}</a>
        	<ul class="nav nav-subsection">
        		<li ng-repeat="(subsectionKey, subsectionValue) in $parent.contentList[selectedProduct.hbu][sectionKey].subsections"><a href="#{{subsectionKey | spaceless}}">{{subsectionKey}}</a></li>
        	</ul>
        </li>
      </ul>
    </div><!--/.sidebar-offcanvas-->

	</div><!--/.container-->
</div>
{% endblock %}
