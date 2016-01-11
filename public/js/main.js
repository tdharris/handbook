var myApp = angular.module('handbook', ['nya.bootstrap.select', 'ngSanitize']);

myApp.controller('HandbookCtrl', ['$scope', '$sce', function ($scope,$sce) {

	$scope.init = function() {
		$scope.displayedProducts = "";
		$scope.content = "";
	};
  	
  	$scope.selectProductUpdateSections = function(item) {
  		$scope.contentList[name]
	    $scope.content = ($scope.content = $scope.contentList[name]); 
	};

  	$scope.selectPortfolio = function(portfolio) {
  		// $scope.displayedProducts = $scope.portfolios[portfolio].products;
  	};

	$scope.showSelectedPortfolio = function() {
		console.log($scope.selectedPortfolio);
	};

	// Data below (instead of using a db)
	$scope.portfolios = [
		{ 
			"name": "Access",
			"products": [
				{
					"name": "Access Manager",
					"hbu": "NQ-New",
					"heritage": "NQ"
				},
				{
					"name": "xAccess",
					"hbu": ""
				},
				{
					"name": "PUM",
					"hbu": ""
				},
				{
					"name": "Secure Login",
					"hbu": ""
				},
				{
					"name": "NAAF",
					"hbu": ""
				},
				{
					"name": "SSPR",
					"hbu": ""
				},
				{
					"name": "IdentityAccess",
					"hbu": ""
				},
				{
					"name": "Account Mgmt Service",
					"hbu": ""
				}
			]
		},
		{ 
			"name": "portfolio 2",
			"products": [
				{
					"name": "product 2",
					"hbu": ""
				}
			]
		}
	];

	$scope.contentList = {
		'AQ': [],
		'MF': [],
		'NQ': [
			{
				"name": "Using Customer Center to access Technical Support",
				"content": "",
				"subsections": [
					{
						"name": "Open a Service Request",
						"content": "Tyler's Test"
					}
				]
			}
		],
		'NQ-New': [
			{
				"name": "Leveraging Self Help Resources",
				"content": "Support Forums are available at no cost and allow you to interact with our company and other industry experts, as well as your industry peers, to resolve technical issues, build individual expertise and enhance the collective store of information.",
				"subsections": [
					{
						"name": "Search the Knowledgebase",
						"content": "The support knowledgebase is a valuable troubleshooting and how-to resource, providing access to a rich database of technical articles, Technical Information Documents (TIDs), white papers, read-me documents and more. Through the comprehensive search capability, you can find the most recent patches for products, look for product documentation, search for TIDs, find tips and tricks, access technical articles and download free tools. Use the range of support information and tools available to you to troubleshoot issues before escalating to us."
					},
					{
						"name": "Subscribe to Patch Notifications",
						"content": "Through RSS feeds and customized email notifications, you can receive the information you need to keep your systems optimized and secure. Keep your products current with the latest patches, services packs and product version updates. Many known issues can be avoided by effectively managing patch releases and ensuring your products are kept up-to-date. Be familiar with our Product Support Lifecycle to be aware of how long we will patch and maintain your product. If a defect is found in an older service pack or patch, you may be asked to update to the current release as part of the troubleshooting process. If you need to receive technical support beyond the General Support phase, consider the Extended Support Service Request Package."
					}
				]
			},
			{
				"name": "Using Customer Center to access Technical Support",
				"content": "",
				"subsections": [
					{
						"name": "Create a Login and Activate your Subscriptions",
						"content": "<p>When you purchase products or support, the primary contact for your organization will receive a confirmation email containing a unique contact ID number, which you use to activate and manage your maintenance account and benefits.</p><p>If you have an existing login account, all product licenses and support entitlements will be activated automatically, provided the email address used to place your order matches the address in your login account. To check or update your email address, log in at Customer Center and select from the navigation menu My Profile and then select Login Profile.</p><p>If you do not already have a login account, you can click the Installation link in the confirmation email. This will take you to a web page that steps you through the process of creating a login account. After you access the customer center, you will receive an email confirming and explaining your support and training entitlements.</p>"
					},
					{
						"name": "Add to or Update Authorized Contacts",
						"content": "Each contact in your organization needs their own unique contact ID number in order to access technical support, training and patches. To add or update authorized contacts, follow these steps:<ol><li>Log in to Customer Center at: www.novell.com/customercenter/</li><li>Select My Products /Products from the left navigation menu</li><li>Select the product for which you would like to manage support contacts in the Product Family list, and then double-click the product’s maintenance line to get to the Product Detail page</li><li>Click the User Access tab. Here you will see a list of current contacts that includes information about whether or not they are entitled to support or training</li><li>To add a new contact, click the + button below the list of contacts. Enter the contact’s email address and select one or more of the following check boxes: Support, Training or Patch & Update.</li><li>Click Add.</li></ol><p>If you have any issues updating your contacts, please email us at SupportSetup@novell.com</p><p>Ensure that authorized contact information is current and accurate, and the individuals have the appropriate level of technical ability.</p>"
					},
					{
						"name": "Manage Products and Services",
						"content": "Customer Center provides your complete order history – products, maintenance and other services. You can easily evaluate and manage your current resources and effectively plan for the future. Through Customer Center, you can access the valuable support services provided through your maintenance. These resources help you get the most from our solutions and products. All the information and resources you need are right at your fingertips. Customer Center can help you simplify and reduce costs associated with managing the resources that are so critical to your business."
					},
					{
						"name": "Open a Service Request",
						"heritage": "true",
						"content": "If Heritage Novell product then follow the NV Handbook, if Heritage NetIQ then follow the NetIQ handbook."
					},
					{
						"name": "After Hours",
						"content": "If Heritage Novell product then follow the NV Handbook, if Heritage NetIQ then follow the NetIQ handbook."
					},
					{
						"name": "Information to Include in your Service Request",
						"content": "WHAT is the problem?<ul><li>Which version of the product (or products) is having the problem?</li><li>Which support pack level is loaded?</li><li>What error messages (if any) are returned?</li><li>What troubleshooting steps have already been performed?</li></ul>WHERE does the problem occur?<ul><li>What is the environment?</li><li>On which sites, servers, directories or clients does the problem occur?</li><li>Where does the problem not occur?</li></ul>WHEN does the problem occur?<ul><li>When did the problem first occur?</li><li>Were changes made prior to the problem occurring? If so, what (installation of products, support pack, network changes, and so forth, for example)?</li></ul>WHAT is the extent of the problem?<ul><li>Is a workaround available?</li><li>What is the business impact of the problem?</li></ul>"
					},
					{
						"name": "Checking the Status of Open or Resolved Service Requests",
						"content": "If Heritage Novell product then follow the NV Handbook, if Heritage NetIQ then follow the NetIQ handbook."
					},
					{
						"name": "Closing a Service Request",
						"content": "We have a policy of closing service requests only upon mutual agreement with you. Unless otherwise agreed upon, service requests are closed as soon as you confirm the issue is resolved to your satisfaction. Service requests with no customer response for 2 weeks may also be closed."
					}
				]
			},
			{
				"name": "How to Escalate a Service Request",
				"content": "Critical Situation Handling Process",
				"subsections": [
					{
						"name": "Critical Situation Handling Process",
						"content": ""
					}
				]
			},
			{
				"name": "Resolving Multi-Vendor Issues",
				"content": "",
				"subsections": [
					{
						"name": "Multi-Vendor",
						"content": ""
					}
				]
			},
			{
				"name": "How to Report a Software Defect, request a Product Enhancement or Report a Security Vulnerability",
				"content": "",
				"subsections": [
					{
						"name": "Software Defects",
						"content": ""
					},
					{
						"name": "Product Enhancement Requests",
						"content": ""
					},
					{
						"name": "Security Vulnerabilities",
						"content": "<p>NetIQ is committed to providing secure enterprise software to its customers. While we employ secure product development practices in our engineering process, we recognize that not all vulnerabilities may be avoided. We are committed to providing a quick response for potential vulnerabilities reported from the field.</p><p>Potential vulnerability reports can be submitted directly to NetIQ via security@netiq.com or through TippingPoint's Zero Day Initiative. When submitting a report please include the product name, version, and general description of the potential vulnerability.</p><p>NetIQ’s policy is to respond to all potential vulnerability reports within 5 business days. Once an initial response is provided, NetIQ will continue a dialog with the submitter until the potential issue has been analyzed and resolved.For vulnerabilities that are found to be legitimate, credit will be given to the submitter when a remedy for the vulnerability is made available to the public.</p>"
					},
				]
			},
			{
				"name": "Support Delivery Information",
				"content": "",
				"subsections": [
					{
						"name": "Product Support Lifecycle",
						"content": ""
					},
					{
						"name": "Hours of Coverage and Target Response Times",
						"content": ""
					},
					{
						"name": "Hours of Coverage and Response Time Targets for Premium Service Engineers",
						"content": "<p>If you have a Premium Service Engineer (ASE, PSE, or DSE) or Advantage Service Requests, you may contact the engineer by telephone for any level of severity, not just Severity 1 issues. You may also use Customer Center to open a service request with your engineer via chat or email for any severity except Severity 1.</p><i>There is a table here showing Program, Hours of Coverage, and Target Response Time</i><ol><li>Standard or Priority maintenance or partner program required before purchasing these services.</li><li>The target response time applies to the period when support is available. For example, a Standard maintenance Severity  service request logged at p.m. will have a target response time of before  a.m. the following business day.</li><li>Although the Advantage team and Assigned support Engineers (ASEs) are only available x, customers with Priority maintenance (x coverage) may open service requests after hours, and partners without a Priority maintenance may use one of the Advantage or ASE Service Requests after hours. In both cases, the service request will be assigned to a Technical Support Engineer in the Support Center, but upon request may be transitioned to the ASE or Advantage team during normal business hours.</li><li>Customers with Standard maintenance receive x hours of coverage for their PSE or DSE. Customers with Priority maintenance receive x hours of coverage for their PSE or DSE. Partners receive x hours of coverage. You may contact your PSE or DSE for Severity  issues or occasional special projects that are scheduled in advance. PSEs and DSEs are GEO based resources and do not respond to global requests.</li></ol>"
					},
					{
						"name": "Severity Level Definitions",
						"content": "<p>The severity of a service request is defined when created, and can be set up electronically by the customer creating the service request, or by a customer service representative over the telephone. We have defined four severity levels:</p><ul><li>Severity  (Critical) - The operation is in production and is mission critical to the business. The product is inoperable and the situation is resulting in a total disruption of work. There is no workaround available.</li><li>Severity  (High) - Operations are severely restricted. Important features are unavailable, although work can continue in a limited fashion. A workaround is available.</li><li>Severity  (Medium) - The product does not work as designed resulting in a minor loss of usage.</li><li>Severity  (Low) - There is no loss of service. This may be a request for documentation, general information, product enhancement request, etc.</li></ul>"
					},
					{
						"name": "Number of Authorized Support Contacts",
						"content": "<p>Academic Service Request Packs, Advantage Service Request Packs, and Standard Maintenance: 3</p><p>Priority maintenance, MLA Advanced 1: 5</p><p>Technology Partners: 10</p><p>MLA Advanced 2, Enterprise 1, Enterprise 2, ASE, PSE, DSE: No limit</p>"
					},
					{
						"name": "Support Level Definitions",
						"content": "<ul><li>Level 1: Problem determination, including provision of compatibility information, installation assistance, usage support, on-going maintenance and basic troubleshooting.</li><li>Level 2: Problem isolation, including efforts to duplicate customer problems, isolate a problem area and provide resolution for problems not resolved by Level 1 Support. Resolution may include reasonable work-arounds.</li><li>Level 3: Problem resolution, which means to resolve complex problems identified by Level 2 Support. Resolution means closure of the issue giving rise to the service request, and may include configuration changes, implementation of a workaround, or creation of a software modification that when installed cures an Error. Resolution is not possible in all circumstances.</li>"
					},
					{
						"name": "Customer Data",
						"content": "<p>Customers and partners acknowledge that we may need access to certain software, hardware, data, third party software or other information or material to adequately troubleshoot and test issues. Lack of access to reproduce a customer’s environment may prevent us from reproducing and isolating an issue.</p><p>Customers and partners will take responsibility for all data provided to us. We assume to have consent and permission to troubleshoot with data provided. Customers and partners will not provide data that is alleged to be confidential or proprietary.</p><p>Customers and partners acknowledge that data provided may be altered or damaged in the course of testing and troubleshooting, and will take all appropriate measures to back-up the applicable data prior to providing it to us.</p>"
					}
				]
			},
			{
				"name": "Customer Satisfaction Surveys",
				"content": "",
				"subsections": [
					{
						"name": "Survey",
						"content": "<p>At the closure of each service incident, you will receive an invitation to complete a survey regarding your experience.  The survey measures your satisfaction with the overall service incident process, as well as in specific areas such as resolution effectiveness, our product quality and support engineer performance.  We encourage your participation in completing this survey to detail your experience on each opened service incident. Rest assured, we take customer satisfaction and feedback seriously, and we use this information to determine where improvements can be made.<p>"
					}
				]
			},
			{
				"name": "Additional Support Options Available",
				"content": "",
				"subsections": [
					{
						"name": "Premium Service",
						"content": "<p>When your IT environment is truly business-critical, you need to be sure you can get help quickly from people who understand your environment and business needs. You can get that extra assurance with Premium Service, available to help you get the most from your IT investment.</p><p>Premium Service Engineers - Assigned, Primary or Dedicated Support Engineers (ASE, PSE, DSE) give you access to a named engineer with faster response times and increased levels of dedicated support; includes Service Account Management</p><p>Advantage Service Request Packs - Access to a team of senior in-region support engineers for business-hours access to technical support (note: may not be available in all countries)</p><p>On-site Support - Services to assist with technical issues at your site</p><p>Scheduled Stand-by - Remote assistance with scheduled work such as upgrades and migrations; sold in four-hour blocks and includes one planning call</p><p>Health Checks - A proactive, in-depth analysis of your environment by a senior engineer to provide you with feedback on how to optimize your system and ensure a stable, well-managed environment.</p>"
					},
					{
						"name": "Long Term Service Pack Support",
						"content": "Extended Support Service Request Packs are available on some products."
					},
					{
						"name": "Technical Subscriptions",
						"content": ""
					},
					{
						"name": "Consulting",
						"content": ""
					},
					{
						"name": "Training",
						"content": ""
					}
				]
			},
			{
				"name": "For More Information",
				"content": "<p>If you have a question, view Frequently Asked Questions to see if we have an answer. For more information about technical support, training and consulting, contact your local sales representative or partner, or visit: www.novell.com/services</p><p>All Technical Support packages expire 12 months after date of purchase.</p>"
			}
		],
		'NV': [],
		'Yes': [],
		'No': []
	};

}]);

myApp.filter('spaceless',function() {
    return function(input) {
        if (input) {
            return input.replace(/\s+/g, '-');    
        }
    }
});