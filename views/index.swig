{% extends 'layout.swig' %}

{% block content %}
<div ng-app="handbook">
	<nav class=" navbar-fixed-top navbar-mf">
	  <div class="container">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" href="#"><img src="img/mf_logo.png"></a>
	    </div>
	    <div id="navbar" class="collapse navbar-collapse">
	      <ul class="nav navbar-nav">
	        {# <li class="active"><a href="#">Demo</a></li> #}
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
	          <a class="navbar-brand" href="" ng-click="clearDropdowns()">Support Handbook</a>
	        </div>
	        
	        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	          {# Select by Handbook #}
	          <form class="navbar-form navbar-right">
	            <div id="select-product" class="form-group">
		            <ul class="nya-bs-select" ng-model="selectedHandbook" title="Select Handbook" data-live-search="true" size="20">
		            	<li nya-bs-option="handbook in handbooks">
		            		<a ng-click="selectHandbook(handbook)">{{ handbook.name }}</a>
		            	</li>
		            </ul>
	            </div>
	            <p>OR</p>
	            {# Select by Product #}
	            <div id="select-product" class="form-group">
		            <ul class="nya-bs-select" ng-model="selectedProduct" title="Select Product" data-live-search="true" size="20">
		            	<li nya-bs-option="product in products | orderBy:'portfolio' group by product.portfolio">
		            		<span class="dropdown-header">{{$group}}</span>
		            		<a ng-click="selectProduct(product)">{{ product.name }}</a>
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
		      <div class="jumbotron" ng-show="selectedProduct || selectedHandbook">
		        <h1>{{selectedProduct.name || selectedHandbook.name }}</h1>
		      </div>

		    <div ng-if="!selectedProduct && !selectedHandbook" class="container" style="width:70%;">
		    	{# <h3 class="welcomeTitle">Welcome to Micro Focus Customer Care</h3>
		    	<br> #}
		    	{# <p>Thank you for choosing Micro Focus.</p>
		    	<p>A key component of any Micro Focus product is the level of support you will enjoy going forward. This document will help you get the most of that support.</p>
		    	<p>Micro Focus is committed to maintaining the highest level of customer satisfaction by providing quality solutions to customer issues at all levels. And there are many ways to access this support.</p>
		    	<p>Our experienced and dedicated engineers will provide comprehensive technical support, usually in local languages, in your region.</p>
		    	<p>To ensure we maintain the highest levels of performance, the final step with every incident closed is an email survey. It is your opportunity to provide feedback on our performance. In the unusual event of a low score, we follow up to help us improve our service.</p>
		    	<p>We are here to help ensure your success, every step of the way.</p><br>
		    	<p>
		    		Kind regards,<br>
		    		<span style="font-size:2em; font-family: 'Allura', cursive;">Owen Finn</span><br>
		    		Owen Finn<br>
					VP, Worldwide Maintenance Renewals & Customer Care<br>
		    	</p> #}
		    </div>

		    {# Content #}
			{# <section id="{{sectionKey | spaceless}}" ng-repeat="(sectionKey, sectionValue) in contentList[selectedProduct.hbu]">
			  <h2><a href="#{{sectionKey | spaceless}}">{{sectionKey}}</a></h2>
			  <div class="sectionContent" ng-bind-html="sectionValue.content"></div>
			  <section id="{{subsectionKey | spaceless}}" class="subsection.heritage" ng-switch="subsectionValue.heritage" ng-repeat="(subsectionKey, subsectionValue) in $parent.contentList[selectedProduct.hbu][sectionKey].subsections">
			    <div ng-switch-when="true">
			    	<h4><a href="#{{subsectionKey | spaceless}}">{{subsectionKey}}</a></h4>
			    	<div class="sectionContent" ng-bind-html="$parent.contentList[selectedProduct.heritage][sectionKey].subsections[subsectionKey].content"></div>
			    </div>
			    <div ng-switch-default>
			    	<h4><a href="#{{subsectionKey | spaceless}}">{{subsectionKey}}</a></h4>
			    	<div class="sectionContent" ng-bind-html="subsectionValue.content"></div>
			    </div>
			  </section>
			  <hr>
			</section> #}

			{# Same Content section as above, but with xeditable feature (permitting users to update content sections live within the site) #}
			<section id="{{sectionKey | spaceless}}" ng-repeat="(sectionKey, sectionValue) in contentList[selectedProduct.hbu || selectedHandbook.key]">
				{# Add a section #}
				<div class='addSection'>
					<button type="button" class="btn btn-outline-success" ng-click="addSection(sectionKey, selectedProduct.hbu || selectedHandbook.key)">
						<i class="fa fa-plus" aria-hidden="true"></i>
						<span>Add Section</span>
					</button>
				</div>
				<h2>
					<a href="#{{sectionKey | spaceless}}" ng-bind-html="sectionKey" editable-text="sectionKey" ng-init="oldValue=sectionKey" onaftersave="changeSectionName($data, oldValue, selectedProduct.hbu || selectedHandbook.key)"></a>
					<i class="clickable fa fa-trash-o" aria-hidden="true" ng-click="deleteSection(sectionKey, selectedProduct.hbu || selectedHandbook.key)"></i>
				</h2>
				<div class="sectionContent" ng-bind-html="sectionValue.content || ' ... '" editable-textarea="sectionValue.content" e-rows="10" e-cols="80" onaftersave="updateContentData()"></div>
				{# Add a subsection #}
				<div class='addSection addMinorSection'>
					<button type="button" class="btn btn-outline-secondary" ng-click="addSubsection(null, selectedProduct.hbu || selectedHandbook.key, sectionKey)">
						<i class="fa fa-plus" aria-hidden="true"></i>
						<span>Add Subsection</span>
					</button>
				</div>
				<section id="{{subsectionKey | spaceless}}" class="subsection.heritage" ng-switch="subsectionValue.heritage" ng-repeat="(subsectionKey, subsectionValue) in $parent.contentList[selectedProduct.hbu || selectedHandbook.key][sectionKey].subsections">
					<div ng-switch-when="true">
						<h4>
							<a href="#{{subsectionKey | spaceless}}" ng-bind-html="subsectionKey" editable-text="subsectionKey" ng-init="oldValue=subsectionKey" onaftersave="changeSubsectionName($data, oldValue, selectedProduct.hbu || selectedHandbook.key, sectionKey)"></a>
							<i class="clickable fa fa-trash-o" aria-hidden="true" ng-click="deleteSubsection(subsectionKey, sectionKey, selectedProduct.hbu || selectedHandbook.key)"></i>
						</h4>
						<div class="sectionContent" editable-textarea="$parent.contentList[selectedProduct.heritage][sectionKey].subsections[subsectionKey].content" e-rows="10" e-cols="80" onaftersave="updateContentData()" ng-bind-html="$parent.contentList[selectedProduct.heritage][sectionKey].subsections[subsectionKey].content || ' ... '"></div>
					</div>
					<div ng-switch-default>
						<h4>
							<a href="#{{subsectionKey | spaceless}}" ng-bind-html="subsectionKey" editable-text="subsectionKey" ng-init="oldValue=subsectionKey" onaftersave="changeSubsectionName($data, oldValue, selectedProduct.hbu || selectedHandbook.key, sectionKey)"></a>
							<i class="clickable fa fa-trash-o" aria-hidden="true" ng-click="deleteSubsection(subsectionKey, sectionKey, selectedProduct.hbu || selectedHandbook.key)"></i>
						</h4>
						<div class="sectionContent" editable-textarea="subsectionValue.content" e-rows="10" e-cols="80" onaftersave="updateContentData()" ng-bind-html="subsectionValue.content || ' ... '"></div>
					</div>
					{# Add a subsection #}
					<div class='addSection addMinorSection'>
						<button type="button" class="btn btn-outline-secondary" ng-click="addSubsection(subsectionKey, selectedProduct.hbu || selectedHandbook.key, sectionKey)">
							<i class="fa fa-plus" aria-hidden="true"></i>
							<span>Add Subsection</span>
						</button>
					</div>
				</section>
				<hr>
			</section>
			{# Add a section (end) #}
			<div ng-if="selectedProduct || selectedHandbook.key" class='addSection'>
				<button type="button" class="btn btn-outline-success" ng-click="addEndSection(selectedProduct.hbu || selectedHandbook.key)">
					<i class="fa fa-plus" aria-hidden="true"></i>
					<span>Add Section</span>
				</button>
			</div>
			

		    </div>
	    </div><!--/.col-xs-12.col-sm-9-->

	</div> <!-- END hb -->
	<div id="incident" class="hide">
		<i>Support Incident, Service Incident, Service Request</i><p>Assistance with one issue, problem, or question relating to the use or installation of a Micro Focus product or product component, regardless of the number of communications required. A single incident is a problem that cannot be broken down into subordinate problems. If a problem consists of subordinate problems, each is considered a separate incident. Micro Focus considers access to a support engineer at least one incident.</p>
	</div>

    <div id="nav-wrapper" class="col-xs-6 col-sm-3 scrollspy">
      <ul id="nav" class="nav nav-pills nav-stacked nav-section" data-spy="affix">
        <li ng-repeat="(sectionKey, sectionValue) in contentList[selectedProduct.hbu || selectedHandbook.key]">
        	<a href="#{{sectionKey | spaceless}}">{{sectionKey}}</a>
        	<ul class="nav nav-subsection">
        		<li ng-repeat="(subsectionKey, subsectionValue) in $parent.contentList[selectedProduct.hbu || selectedHandbook.key][sectionKey].subsections"><a href="#{{subsectionKey | spaceless}}">{{subsectionKey}}</a></li>
        	</ul>
        </li>
      </ul>
    </div><!--/.sidebar-offcanvas-->

	</div><!--/.container-->
</div>
{% endblock %}
