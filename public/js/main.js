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
					"hbu": "NQ-New"
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
		'NQ': [],
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
						"content": "If Heritage Novell product then follow the NV Handbook, if Heritage NetIQ then follow the NetIQ handbook."
					},
					{
						"name": "After Hours",
						"content": "If Heritage Novell product then follow the NV Handbook, if Heritage NetIQ then follow the NetIQ handbook."
					},
					{
						"name": "Information to Include in your Service Request",
						"content": "WHAT is the problem?<ul><li>Which version of the product (or products) is having the problem?</li><li>Which support pack level is loaded?</li><li>What error messages (if any) are returned?</li><li>What troubleshooting steps have already been performed?</li></ul>WHERE does the problem occur?<ul><li>What is the environment?</li><li>On which sites, servers, directories or clients does the problem occur?</li><li>Where does the problem not occur?</li></ul>WHEN does the problem occur?<ul><li>When did the problem first occur?</li><li>Were changes made prior to the problem occurring? If so, what (installation of products, support pack, network changes, and so forth, for example)?</li></ul>WHAT is the extent of the problem?<ul><li>Is a workaround available?</li><li>What is the business impact of the problem?</li></ul>"
					}
				]
			},
			{
				"name": "",
				"content": "",
				"subsections": [
					{
						"name": "",
						"content": ""
					}
				]
			},
			{
				"name": "",
				"content": "",
				"subsections": [
					{
						"name": "",
						"content": ""
					}
				]
			},
			{
				"name": "",
				"content": "",
				"subsections": [
					{
						"name": "",
						"content": ""
					}
				]
			},
			{
				"name": "",
				"content": "",
				"subsections": [
					{
						"name": "",
						"content": ""
					}
				]
			},
			{
				"name": "",
				"content": "",
				"subsections": [
					{
						"name": "",
						"content": ""
					}
				]
			},
			{
				"name": "",
				"content": "",
				"subsections": [
					{
						"name": "",
						"content": ""
					}
				]
			},
			{
				"name": "",
				"content": "",
				"subsections": [
					{
						"name": "",
						"content": ""
					}
				]
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