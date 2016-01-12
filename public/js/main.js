var myApp = angular.module('handbook', ['nya.bootstrap.select', 'ngSanitize']);

myApp.controller('HandbookCtrl', ['$scope', '$sce', function ($scope,$sce) {

	$scope.init = function() {
		$scope.displayedProducts = "";
		$scope.content = "";
        $scope.selectedPortfolio = "";
        $scope.selectedProduct = "";
	};

	// Data below (instead of using a db)
	$scope.portfolios = {
        "Access": {
            "Access Manager": {
                "name": "Access Manager",
                "hbu": "NQ-New",
                "heritage": "NQ"
            },
            "xAccess": {
                "name": "xAccess",
                "hbu": "NQ-New"
            },
            "PUM": {
                "name": "PUM",
                "hbu": "NQ-New"
            },
            "Secure Login": {
                "name": "Secure Login",
                "hbu": "NQ-New"
            },
            "NAAF": {
                "name": "NAAF",
                "hbu": "NQ-New"
            },
            "SSPR": {
                "name": "SSPR",
                "hbu": "NQ-New"
            },
            "IdentityAccess": {
                "name": "IdentityAccess",
                "hbu": "NQ-New"
            },
            "Account Mgmt Service": {
                "name": "Account Mgmt Service",
                "hbu": "NQ-New"
            }
        },
        "MF Cobol": {
            "MF COBOL": {
                "name": "MF COBOL",
                "hbu": "MF"
            },
            "ACUCOBOL": {
                "name": "ACUCOBOL",
                "hbu": "MF"
            },
            "RM/COBOL": {
                "name": "RM/COBOL",
                "hbu": "MF"
            },
            "XCBC": {
                "name": "XCBC",
                "hbu": "",
                "heritage": "MF"
            },
            "Visual COBOL": {
                "name": "Visual COBOL",
                "hbu": "MF"
            }
        },
        "MF Enterprise": {
            "MF EEE": {
                "name": "MF EEE",
                "hbu": "MF"
            },
            "Enterprise Server": {
                "name": "Enterprise Server",
                "hbu": "MF"
            },
            "Enterprise Developer": {
                "name": "Enterprise Developer",
                "hbu": "MF"
            },
            "Enterprise Test Server": {
                "name": "Enterprise Test Server",
                "hbu": "MF"
            },
            "Data Express": {
                "name": "Data Express",
                "hbu": "MF"
            },
            "Enterprise Analyzer": {
                "name": "Enterprise Analyzer",
                "hbu": "MF"
            },
            "Enterprise View": {
                "name": "Enterprise View",
                "hbu": "MF"
            },
            "Revolve": {
                "name": "Revolve",
                "hbu": "MF"
            }
        },
        "Niche": {
            "Together": {
                "name": "Together",
                "hbu": "MF"
            },
            "DevPartner": {
                "name": "DevPartner",
                "hbu": "MF"
            },
            "QADirector": {
                "name": "QADirector",
                "hbu": "MF"
            },
            "QALoad": {
                "name": "QALoad",
                "hbu": "MF"
            },
            "TestPartner": {
                "name": "TestPartner",
                "hbu": "MF"
            },
            "Other/Old Silk": {
                "name": "Other/Old Silk",
                "hbu": "MF"
            },
            "Team Define": {
                "name": "Team Define",
                "hbu": "MF"
            },
            "Optimal Trace": {
                "name": "Optimal Trace",
                "hbu": "MF"
            }
        },
        "CORBA": {
            "VisiBroker": {
                "name": "VisiBroker",
                "hbu": "MF"
            },
            "AppServer": {
                "name": "AppServer",
                "hbu": "MF"
            },
            "TAO": {
                "name": "TAO",
                "hbu": "MF"
            },
            "JacORB": {
                "name": "JacORB",
                "hbu": "MF"
            },
            "CORBA-Services": {
                "name": "CORBA-Services",
                "hbu": "MF"
            },
            "Security": {
                "name": "Security",
                "hbu": "MF"
            },
            "RTOrb Java": {
                "name": "RTOrb Java",
                "hbu": "MF"
            },
            "RTOrb Ada": {
                "name": "RTOrb Ada",
                "hbu": "MF"
            },
            "Artix": {
                "name": "Artix",
                "hbu": "MF"
            },
            "Orbacus": {
                "name": "Orbacus",
                "hbu": "MF"
            },
            "Orbiz": {
                "name": "Orbiz",
                "hbu": "MF"
            },

        },
        "Borland": {
            "Caliber Atlas": {
                "name": "Caliber Atlas",
                "hbu": "MF"
            },
            "StarTeam": {
                "name": "StarTeam",
                "hbu": "MF"
            },
            "AccuRev": {
                "name": "AccuRev",
                "hbu": "MF"
            },
            "GitCentric": {
                "name": "GitCentric",
                "hbu": "MF"
            },
            "AccuReplica": {
                "name": "AccuReplica",
                "hbu": "MF"
            },
            "AccuWork": {
                "name": "AccuWork",
                "hbu": "MF"
            },
            "AccuSync": {
                "name": "AccuSync",
                "hbu": "MF"
            },
            "AccuBridge": {
                "name": "AccuBridge",
                "hbu": "MF"
            },
            "ClearCase": {
                "name": "ClearCase",
                "hbu": "MF"
            },
            "Adapater": {
                "name": "Adapater",
                "hbu": "MF"
            },
            "Migration": {
                "name": "Migration",
                "hbu": "MF"
            },
            "SilkCentral Test Manager": {
                "name": "SilkCentral Test Manager",
                "hbu": "MF"
            },
            "Silk Mobile": {
                "name": "Silk Mobile",
                "hbu": "MF"
            },
            "SilkPerformer": {
                "name": "SilkPerformer",
                "hbu": "MF"
            },
            "SilkPerformer Cloudburst": {
                "name": "SilkPerformer Cloudburst",
                "hbu": "MF"
            },
            "SilkPerformer Diagnostics": {
                "name": "SilkPerformer Diagnostics",
                "hbu": "MF"
            },
            "SilkTest": {
                "name": "SilkTest",
                "hbu": "MF"
            },
            "TM ART": {
                "name": "TM ART",
                "hbu": "MF"
            },
            "SilkCentral Connect": {
                "name": "SilkCentral Connect",
                "hbu": "MF"
            }
        },
        "ZENWorks": {
            "ZENworks Configuration Manager": {
                "name": "ZENworks Configuration Manager",
                "hbu": "NV"
            },
            "ZENworks Patch Management": {
                "name": "ZENworks Patch Management",
                "hbu": "NV"
            },
            "ZENworks Asset Management": {
                "name": "ZENworks Asset Management",
                "hbu": "NV"
            },
            "ZENworks Application Virtulization": {
                "name": "ZENworks Application Virtulization",
                "hbu": "NV"
            },
            "ZENworks Endpoint Security Management": {
                "name": "ZENworks Endpoint Security Management",
                "hbu": "NV"
            },
            "ZENworks Full Disk Encryption": {
                "name": "ZENworks Full Disk Encryption",
                "hbu": "NV"
            },
            "ZENworks Mobile Management": {
                "name": "ZENworks Mobile Management",
                "hbu": "NV"
            },
            "Novell Service Desk": {
                "name": "Novell Service Desk",
                "hbu": "NV"
            },
            "ALA/SLA Bundle-ZENworks": {
                "name": "ALA/SLA Bundle-ZENworks",
                "hbu": "NV"
            },
        },
        "Host Connectivity": {
            "Verastream": {
                "name": "Verastream",
                "hbu": "AQ"
            },
            "Databridge": {
                "name": "Databridge",
                "hbu": "AQ"
            },
            "FileXpress": {
                "name": "FileXpress",
                "hbu": "AQ"
            },
            "Reflection": {
                "name": "Reflection",
                "hbu": "AQ"
            },
            "Reflection Security Gateway": {
                "name": "Reflection Security Gateway",
                "hbu": "AQ"
            },
            "Reflection ZFE": {
                "name": "Reflection ZFE",
                "hbu": "AQ"
            },
            "Reflection for Secure IT": {
                "name": "Reflection for Secure IT",
                "hbu": "AQ"
            },
            "Extra!": {
                "name": "Extra!",
                "hbu": "AQ"
            },
            "InfoConnect": {
                "name": "InfoConnect",
                "hbu": "AQ"
            },
            "Rumba": {
                "name": "Rumba",
                "hbu": "AQ"
            },
            "EnterpriseLink": {
                "name": "EnterpriseLink",
                "hbu": "AQ"
            },
            "OnWeb": {
                "name": "OnWeb",
                "hbu": "AQ"
            },
            "ViewNow": {
                "name": "ViewNow",
                "hbu": "AQ"
            },
            "Web-to-Host": {
                "name": "Web-to-Host",
                "hbu": "AQ"
            }
        },
        "Nov/Attm Other": {
            "Border Manager": {
                "name": "Border Manager",
                "hbu": "NV"
            },
            "Legacy/Royalties": {
                "name": "Legacy/Royalties",
                "hbu": "NV"
            },
            "Nest/Unix Related": {
                "name": "Nest/Unix Related",
                "hbu": "NV"
            },
            "Luminet": {
                "name": "Luminet",
                "hbu": "AQ"
            }
        },
        "Collaboration": {
            "GroupWise": {
                "name": "GroupWise",
                "hbu": "NV"
            },
            "Vibe": {
                "name": "Vibe",
                "hbu": "NV"
            }
        },
        "File and Networking": {
            "OES": {
                "name": "OES",
                "hbu": "NV"
            },
            "Filr": {
                "name": "Filr",
                "hbu": "NV"
            },
            "iPrint": {
                "name": "iPrint",
                "hbu": "NV"
            },
            "Cluster Services/BCC": {
                "name": "Cluster Services/BCC",
                "hbu": "NV"
            },
            "NetWare": {
                "name": "NetWare",
                "hbu": "NV"
            },
            "NOWS/NOWS SBE": {
                "name": "NOWS/NOWS SBE",
                "hbu": "NV"
            },
            "File Management Suite": {
                "name": "File Management Suite",
                "hbu": "NV"
            },
            "File Reporter": {
                "name": "File Reporter",
                "hbu": "NV"
            },
            "Storage Manager": {
                "name": "Storage Manager",
                "hbu": "NV"
            },
            "Dynamic File Services": {
                "name": "Dynamic File Services",
                "hbu": "NV"
            },
            "ALA/SLA Bundle": {
                "name": "ALA/SLA Bundle",
                "hbu": "NV"
            }
        },
        "Security": {
            "Config Manager": {
                "name": "Config Manager",
                "hbu": "NQ"
            },
            "Sentinel": {
                "name": "Sentinel",
                "hbu": "NV"
            },
            "Change Guardian": {
                "name": "Change Guardian",
                "hbu": "NQ"
            },
            "CMP": {
                "name": "CMP",
                "hbu": "NQ"
            },
            "iSeries": {
                "name": "iSeries",
                "hbu": "NQ"
            }
        },
        "Workload & Virtualization": {
            "Cloud Manager": {
                "name": "Cloud Manager",
                "hbu": "NV"
            },
            "Forge": {
                "name": "Forge",
                "hbu": "NQ"
            },
            "Migrate": {
                "name": "Migrate",
                "hbu": "NQ"
            },
            "Protect": {
                "name": "Protect",
                "hbu": "NQ"
            },
            "Recon": {
                "name": "Recon",
                "hbu": "NQ"
            }
        },
        "Data Center": {
            "AppManager": {
                "name": "AppManager",
                "hbu": "NQ"
            },
            "Unix": {
                "name": "Unix",
                "hbu": "NQ"
            },
            "VoIP": {
                "name": "VoIP",
                "hbu": "NQ"
            },
            "Aegis": {
                "name": "Aegis",
                "hbu": "NQ"
            },
            "Operations Center": {
                "name": "Operations Center",
                "hbu": "NQ"
            }
        },
        "Identity": {
            "IDM Advanced Edition": {
                "name": "IDM Advanced Edition",
                "hbu": "NQ-New"
            },
            "IDM Standard Edition": {
                "name": "IDM Standard Edition",
                "hbu": "NQ-New"
            },
            "Other IDM": {
                "name": "Other IDM",
                "hbu": "NQ-New"
            },
            "ALA/SLA Bundle - Identity": {
                "name": "ALA/SLA Bundle - Identity",
                "hbu": "NQ-New"
            },
            "DRA": {
                "name": "DRA",
                "hbu": "NQ"
            },
            "eDir": {
                "name": "eDir",
                "hbu": "NQ-New"
            },
            "Access Governance": {
                "name": "Access Governance",
                "hbu": "NQ-New"
            },
            "Access Review": {
                "name": "Access Review",
                "hbu": "NQ-New"
            }
        }
    };

	$scope.contentList = {
        'AQ': {
            "Leveraging Self Help Resources": {
                "content": "\"Attachmate\" uses Internal Forum ",
                "subsections": {
                    "Search the Knowledgebase": {
                        "content": "<p>The support knowledgebase is a valuable troubleshooting and how-to resource, providing access to rich database of technical articles, Technical Notes, Documentation and Product Support Lifecycle Version status.  Use the range of support information and tools available to you to troubleshoot issues before escalating to us.</p><p><i>In self help resources, regarding knowledgebase technical documents, AQ uses \"Tech Note\" (vs. NV uses “Support TID” =Technical Information Document). Also, AQ offers browse-friendly “Technical Resources” pages so customers are not forced to search.</i></p>"
                    },
                    "Subscribe to Patch Notifications": {
                        "content": "<p>Through customized email notifications, you can receive the information you need to keep your systems optimized and secure. Keep your products current with the latest patches services packs and product version updates. Many known issues can be avoided by effectively managing patch releases and ensuring your products are kept up-to-date. Be familiar with our Product Support Lifecycle to be aware of how long we will patch and maintain your product. If a defect is found in an older service pack or patch, you may be asked to update to the current release as part of the troubleshooting process. If you need to receive technical support beyond the General Support phase, consider the Extended Support Service Request Package.</p>"
                    }
                }
            },
            "Using Customer Center to access Technical Support": {
                "content": "",
                "subsections": {
                    "Create a Login and Activate your Subscriptions": {
                        "content": "<p><b>Add to or Update Authorized Contacts</b></p> <p>Each contact in your organization needs their own unique user id and password in order to access technical support, training and patches. To add or update authorized contacts, the primary contact should follow these steps:</p> <ul> <li>Log in to mysupport.attachmate.com</li> <li>My Account&#;s Authorized Contacts</li> <li>Select VPA number</li> <li>Add/Remove/Edit contact details</li> <li>Submit</li> <li>Once we receive the information a User ID and Password will be generated.</li> </ul> <p>If you have any issues updating your contacts, please email us at EMEASupport@microfocus.com Requesting a new contact: http://support.attachmate.com/techdocs/0202.html#My_Accounts_Authorized_Contacts</p>"
                    },
                    "Add to or Update Authorized Contacts": {
                        "content": "<p>Select your account and VPA to view the associated authorized contacts. If you are the primary contact, you can also make changes.</p>"
                    },
                    "Manage Products and Services": {
                        "content": "<p>The My Account's Maintenance Plans link  provides you with your complete account and VPA history, allowing you to  view the associated product licensing and maintenance entitlement.  You can easily view your entitled product upgrades and service packs by clicking on the download link.</p>"
                    },
                    "Open a Service Request": {
                        "content": "<p>When you open a service incident through the Web, by email or phone, we verify your eligibility to receive technical support, assign a number to your issue, and forward your request to a support engineer for handling.</p>"
                    },
                    "After Hours": {
                        "content": "<p><b>Total Care</b></p> <p>Total Care Maintenance and Support Plan subscribers in North America and EMEA may elect to purchase 24x7 protection, which is designed for large organizations that need to ensure round-the-clock service for their mission-critical applications. The Total Care 24x7 Add-On provides after-hours access to Technical Support for Severity 1 (Critical) issues. The features and benefits of the Total Care 24x7 Add-On are described on our support site: http://www.attachmate.com/Support/programs/elite24x7-maintenance-add-on.htm. When you contact us after-hours, the Technical Support Engineer on call will make a reasonable effort to resolve the issue as soon as possible. (For support office hours and contact information for your location, visit our support site: http://support.attachmate.com/contact/.)</p> <p><i>Note: Micro Focus Technical Support does not guarantee that we can resolve all technical issues reported. However, we will provide reasonable effort using generally accepted industry standards and practices to resolve the situation or find an acceptable workaround. There will be situations where we are unable to resolve your problem. There will also be situations where the best solution is to upgrade to the most current version of a software product.</i></p>"
                    },
                    "Information to Include in your Service Request": {
                        "content": "<p><b>Before You Contact Support</b><p> <p>If you determine that you need to contact Micro Focus for technical support, be ready to provide the following information in the online service request form or over the phone to our Micro Focus Customer Care Representative. In general, if you don’t have a Maintenance and Support Plan on the software for which you are calling, you will be directed to a Sales Representative.</p> <p>Maintenance and Support entitlement information:</p> <ul> <li>Web: User ID and password</li> <li>Phone: VPA number</li> <li>Service Incident number (if you’re calling on an existing case)</li> <li>Contact name</li> <li>Company name</li> <li>Having the following additional information readily available when you contact us improves your Technical Support Engineer’s ability to quickly diagnose and resolve your issue.</li> <li>Product</li> <li>Which version of the product (or products) is having the problem?</li> <li>Are there any hotfixes or service packs installed?</li> <li>What operating system are you using it with?</li> <li>Installation</li> <li>When did the problem first occur?</li> <li>Were changes made prior to the problem occurring? If so, what (installation of products, support pack, network changes, and so forth, for example)?</li> <li>Is it a local or network installation?</li> <li>Has it ever worked? If so, when did it stop working?</li> <li>Connection</li> <li>What type of connection are you using (for example, Telnet, SNA, SSH)?</li> <li>What are the connection details (such as adapter, gateway, network, etc.)?</li> <li>Error Message</li> <li>What is displayed on the screen? Can you provide a screenshot?</li> <li>What error messages (if any) are returned?</li> <li>Under what circumstances do the errors occur?</li> <li>Can the errors be cleared?</li> <li>Symptom</li> <li>Is the symptom reproducible?</li> <li>Is the symptom intermittent?</li> <li>What seems to make the symptom (temporarily) go away?</li> </ul>"
                    },
                    "Checking the Status of Open or Resolved Service Requests": {
                        "content": "<p>After you log in, a list of your service incidents and the current status of each is made available. You can also view the status of your organisations service incidents.  Select one to view its details (which can include current status and detailed descriptions of the actions taken by the support engineer).</p>"
                    },
                    "Closing a Service Request": {
                        "content": "<p>Unless otherwise agreed upon, Service Incidents are closed as soon as you confirm that the issue is resolved to your satisfaction. In the event that we receive no feedback on the solution and the assigned customer care engineer is unable to contact you then an email will be sent to you indicating that the Service Incident is  going to be closed but can be reopen or referenced at a future date if needed.</p>"
                    }
                }
            },
            "How to Escalate a Service Request": {
                "content": "",
                "subsections": {
                    "Escalation": {
                        "content": ""
                    }
                }
            },
            "Resolving Multi-Vendor Issues": {
                "content": "",
                "subsections": {
                    "Multi-Vendor": {
                        "content": "<p>As an active member of the Technical Support Alliance Network (TSANet)—a global, vendor-neutral, not-for-profit industry support alliance. This organization creates an industry infrastructure, allowing members to collaborate and work on multi-vendor customer issues without “finger pointing.” TSANet follows industry-standard support policies and obligates members to collaborate on issues to isolation or resolution (or both). This process gives the customer a seamless interface in solving complex multi-vendor problems among two or more vendors.  TSANet allows the assigned engineer to work directly with an engineer from another vendor to solve support issues. Think of it as a behind-the-scenes mechanism that expedites resolution, often without the customer even being aware of it being engaged. TSANet is a direct vendor-to-vendor contact; however, customers should have appropriate support entitlement with both vendors prior to the interaction. TSANet allows its members to work on your behalf and not waste time duplicating support incidents with multiple vendors. More information on TSANet, including a list of participating members, is available at: <a href=\"www.tsanet.org\">www.tsanet.org</a></p>"
                    }
                }
            },
            "How to Report a Software Defect, request a Product Enhancement or Report a Security Vulnerability": {
                "content": "",
                "subsections": {
                    "Software Defects": {
                        "content": "<p>Defects are features or functions that do not work as documented. You can report what you consider to be a product defect by opening a service request. We will accept and record defects reported against currently supported versions of Attachmate products and investigate them at our discretion.  Defective media should be returned to the point of purchase for an exchange. Exchanges can be made only for current, commercially available products</p>"
                    },
                    "Product Enhancement Requests": {
                        "content": "<p>You can suggest a change, improvement, or new feature for the Attachmate product you are using by opening a service incident We will evaluate all product enhancement requests as candidates for future product releases. All product enhancement requests become the property of Attachmate.</p>"
                    },
                    "Security Vulnerabilities": {
                        "content": "TODO"
                    }
                }
            },
            "Support Delivery Information": {
                "content": "",
                "subsections": {
                    "Product Support Lifecycle": {
                        "content": "<p>Your product's version determines its product support lifecycle phase and the level of support that is provided. We strongly recommend that you upgrade to current releases of Attachmate software as they become available. To maintain consistently high levels of expertise within our worldwide support staff, we devote the majority of our support resources to supporting current versions of Attachmate software.   The Attachmate Product Support Lifecycle defines the phases, from Current to Discontinued (<a href=\"http://support.attachmate.com/programs/lifecycle/phases-page.html\">http://support.attachmate.com/programs/lifecycle/phases-page.html</a>), and the levels of support that you can expect to receive as your products move through their lifecycle.  The Product Support Lifecycle version status for each product is listed on the Attachmate support site, <a href=\"http://support.attachmate.com/programs/lifecycle/\">http://support.attachmate.com/programs/lifecycle/</a>.  <i>Note: Attachmate reserves the right to change our product support guidelines or our product classifications without notice at any time.</i></p>"
                    },
                    "Hours of Coverage and Target Response Times": {
                        "content": "<p>Sev 1 - 1 hour.  Sev 2 - 3 hours.  Sev 3 - Next business day.</p>"
                    },
                    "Hours of Coverage and Response Time Targets for Premium Service Engineers": {
                        "content": "<p>Sev 1 - 1 hour.  Sev 2 - 3 hours.  Sev 3 - Next business day.</p>"
                    },
                    "Severity Level Definitions": {
                        "content": "<p><b>Severity 1 (High)</b></p><p>The operation is in production and is mission critical to the business. The product is inoperable and the situation is resulting in a total disruption of work. There is no workaround available.</p> <p><b>Severity 2 (Medium)<b></p><p>Operations are severely restricted. Important features are unavailable, although work can continue in a limited fashion. A workaround is available and allowing the company to operate in some manner. The product does not work as designed resulting in a minor loss of usage.</p> <p><b>Severity 3 (Low)<b></p><p>There is no loss of service. This may be a request for documentation, general information, product enhancement request, etc.; or the product has a workaround that keeps the business functioning near normal levels.</p>"
                    },
                    "Number of Authorized Support Contacts": {
                        "content": "<p>4 - 1 Primary and 3 additional contacts for Standard Care Maintenance, 8 - 1 Primary and 7 additional contacts for Total Care Maintenance.</p>"
                    },
                    "Support Level Definitions": {
                        "content": "<p>The following are the plan levels as we don't define by support level definitions, 1st, 2nd etc.   The Attachmate Maintenance and Support Program includes a range of benefits and access to our industry-leading technical support. To meet the requirements of various IT environments, Attachmate offers two Maintenance and Support Plans, Standard Care and Total Care, as well as Total Care 24x7 Add-On. The Standard Care Maintenance and Support Plan is designed to handle the needs of most IT environments, while the Total Care Maintenance and Support Plan and the Total Care 24x7 Add-On are designed for customers with larger, more complex environments, or for customers that need quick access to technical support for their mission-critical applications. You can see a comparison of the plans on our support site: <a href=\"http://www.attachmate.com/support/programs/overview.htm\">http://www.attachmate.com/support/programs/overview.htm</a>.</p>"
                    },
                    "Customer Data": {
                        "content": "<p>Customers and partners acknowledge that we may need access to certain software, hardware, data, third party software or other information or material to adequately troubleshoot and test issues. Lack of access to reproduce a customer’s environment may prevent us from reproducing and isolating an issue.</p> <p>Customers and partners will take responsibility for all data provided to us. We assume to have consent and permission to troubleshoot with data provided. Customers and partners will not provide data that is alleged to be confidential or proprietary.</p> <p>Customers and partners acknowledge that data provided may be altered or damaged in the course of testing and troubleshooting, and will take all appropriate measures to back-up the applicable data prior to providing it to us.</p>"
                    }
                }
            },
            "Customer Satisfaction Surveys": {
                "content": "",
                "subsections": {
                    "Survey": {
                        "content": "<p>At the closure of each service incident, you will receive an invitation to complete a survey regarding your experience.  The survey measures your satisfaction with the overall service incident process, as well as in specific areas such as resolution effectiveness, our product quality and support engineer performance.  We encourage your participation in completing this survey to detail your experience on each opened service incident. Rest assured, we take customer satisfaction and feedback seriously, and we use this information to determine where improvements can be made.</p>"
                    }
                }
            },
            "Additional Support Options Available": {
                "content": "",
                "subsections": {
                    "Premium Service": {
                        "content": "<p>The Total Care Maintenance and Support Plan emphasizes proactive support and personalized service, giving you quick and direct access to a designated Technical Account Manager (TAM) who is familiar with your IT environment. In North America and EMEA, if you purchase the Standard Care Maintenance and Support Plan for all licenses of a product, you can qualify to purchase the Total Care Maintenance and Support Plan. Total Care Maintenance and Support Plan subscribers in North America and EMEA may elect to purchase 24x7 protection, which is designed for large organizations that need to ensure round-the-clock service for their mission-critical applications. The Total Care 24x7 Add-On provides after-hours access to Technical Support for Severity 1 issues. </p> <p>The features and benefits of the Total Care 24x7 Add-On are described on our support site: http://www.attachmate.com/Support/programs/elite24x7-maintenance-add-on.htm. When you contact us after-hours, the Technical Support Engineer on call will make a reasonable effort to resolve the issue as soon as possible. (For support office hours and contact information for your location, visit our support site: http://support.attachmate.com/contact/.) Please keep in mind that Attachmate development resources are not available outside of normal Attachmate business hours, 8:00 a.m. to 5:00 p.m. Monday through Friday, Pacific Time. </p> <p><i>Note: Attachmate Technical Support does not guarantee that we can resolve all technical issues reported. However, we will provide reasonable effort using generally accepted industry standards and practices to resolve the situation or find an acceptable workaround. There will be situations where we are unable to resolve your problem. There will also be situations where the best solution is to upgrade to the most current version of a software product.</i></p>"
                    },
                    "Long Term Service Pack Support": {
                        "content": "<p>If you need support for older versions while you plan your migration to the latest version, Attachmate offers the Lifeline Support Program (LSP). LSP enables maintained customers to buy interactive technical support and limited product defect support, consisting of commercially reasonable effort using generally accepted industry standards and practices to resolve the situation or find an acceptable workaround. LSP is available on Retired or Discontinued eligible product versions of EXTRA!, INFOConnect, and Reflection.</p>"
                    },
                    "Technical Subscriptions": {
                        "content": "<p>Technical Notes are published on www.attachmate.com on a regular basis</p>"
                    },
                    "Consulting": {
                        "content": "<p>For issues and projects outside the scope of Technical Support, you can engage our technical experts to help you implement solutions quickly and affordably. Whether your project would benefit from an on-site consultant or a remotely-based consultant, we can help you design and implement cost-effective and secure solutions that meet your business priorities. We also offer custom training to meet your specific knowledge-transfer needs.</p>"
                    },
                    "Training": {
                        "content": "<p>Product experts provide an in-depth understanding of the features and functions of Attachmate products for administrators and users and how to apply them in your environment.  For information about training, please contact your Sales Representative, or visit our web site at <a href=\"http://www.attachmate.com/Support/services/Training.htm\">http://www.attachmate.com/Support/services/Training.htm</a>.</p>"
                    }
                }
            }
        },
        'MF': {
            "Leveraging Self Help Resources": {
                "content": "",
                "subsections": {
                    "Search the Knowledgebase": {
                        "content": "<p>The Micro Focus Knowledgebase is part of the Community http://community.microfocus.com/. The site is organised by product, so you can perform a very specific search. Select ‘Micro Focus’ or ‘Borland’ from the title bar and select the relevant product. You’ll find the Knowledgebase under the Wiki tab.  With approximately 25,000 articles already on the site and more being added daily, it’s an excellent resource. Why not have a look today?</p>"
                    },
                    "Participate in Support Forums": {
                        "content": ""
                    },
                    "Subscribe to Patch Notifications": {
                        "content": "<p>[Some products post on Community, no common MF policy]</p>"
                    },
                }
            },
            "Using Customer Center to access Technical Support": {
                "content": "",
                "subsections": {
                    "Create a Login and Activate your Subscriptions": {
                        "content": "<p>[Login can only be created automatically if the customer enters: serial number, name, address and Company Name]</p>"
                    },
                    "Add to or Update Authorized Contacts": {
                        "content": "<p>[No limit on the number of Authorized Contacts]</p>"
                    },
                    "Open a Service Request": {
                        "content": " <p>Do you have a critical issue? Call us for an immediate response (http://www.microfocus.com/about/contact/support/assistance.aspx). For anything else, contact us through the web portal (http://supportline.microfocus.com/xmlloader.asp?type=home). You’ll enjoy all these benefits...</p> <p><b>Benefits of using the web portal:</b></p> <ul> <li>Immediate email confirmation of your Support Incident number</li> <li>Add your own reference numbers for easier issue management</li> <li>Real-time tracking of your company’s incidents via the web</li> <li>Immediate contact with your dedicated support engineer via the web</li> <li>Run Excel reports on incidents for internal management of outstanding issues</li> <li>A constantly-updated knowledgebase of more than 25,000 articles by technical experts</li> <li>The latest product documentation</li> <li>Demos and utilities – user tips that help you get maximum value from your product</li> <li>Product updates and some upgrades. Check out the Product Update video (http://youtu.be/z4FXvD9_HWM).</li> </ul> <p><b>Registering for the SupportLine web portal</b></p> <p>To register, you’ll need your product serial number, typically a 12 digit string starting with ‘59’ or ‘60’. It’s on the Electronic Product Delivery (EPD) web page (http://supportline.microfocus.com/supportresources/ProductDownloadTutorials.aspx) if the product arrived electronically or on the product packaging if not. Did you receive your product directly via EPD? Then you have already been registered. Just add your product serial numbers to your Product Portfolio. Need more? Check out the Web Login video.(http://youtu.be/gOlB5RU_uzI)</p>"
                    },
                    "After Hours": {
                        "content": "<b>Products supported 24x7 *</b> <p>See below for a list of Micro Focus Enterprise, Borland and CORBA products eligible for 24x7 support coverage:</p> <ul> <li>Application Server</li> <li>Artix</li> <li>Caliber</li> <li>COBOL 2010 runtime</li> <li>COBOL Server</li> <li>Enterprise Link</li> <li>Enterprise Server</li> <li>Enterprise Developer – Team Edition</li> <li>Enterprise Test Server</li> <li>Mainframe Express Enterprise Edition</li> <li>Net Express</li> <li>Net Express with .NET</li> <li>Net Express for Eclipse</li> <li>Optimal Trace</li> <li>Orbacus</li> <li>Orbix</li> <li>Revolve Enterprise Edition</li> <li>Server Express</li> <li>Server Express for Eclipse</li> <li>Server Enterprise Edition</li> <li>Server for .NET</li> <li>Server for COBOL</li> <li>Silk QALoad</li> <li>Silk TestPartner</li> <li>Studio Enterprise Edition</li> <li>Studio for COBOL developers</li> <li>TrackRecord</li> <li>Visual COBOL 2010</li> <li>Visual COBOL for Visual Studio</li> <li>Visual COBOL for Eclipse</li> </ul> <p><i>* High priority issues only.</i></p>"
                    },
                    "Information to Include in your Service Request": {
                        "content": "<b>Reporting an issue</b> <p>The quality of the initial reporting will reflect the time it takes to achieve resolution. A high quality Support Incident should have:</p> <ul> <li>An accurate – but short – description of the symptom</li> <li>A complete summary of the circumstances and context of the failure</li> <li>As much detail as possible – if in doubt, include it!</li> <li>Important details such as chronology, symptoms, configuration, workload levels and 3rd party software involved</li> <li>Where possible, step-by- step instructions of how to reproduce the error.</li> <li>Attach the source, application, log files (not screen shots of log files) and any applicable projects. If possible, zip them to minimize attachment size.</li> <li>Populate the User Sort field with any free-form value that helps you to sort your company’s incidents in a meaningful way – your internal issue tracking number, for example.</li> </ul> <p>For further diagnostic information specifically related to the Micro Focus Enterprise product suite, please refer to the Troubleshooting and Diagnostic Guide (http://supportline.microfocus.com/000/MFTroubleShootingAndDiagnostics.pdf).</p> <p>We strongly recommend managing any incidents via the SupportLine web portal to ensure any updates are delivered immediately to the Support Engineer managing the issue. Our Reporting an Incident video has more (http://youtu.be/gzgH-lq5XKc).</p>"
                    },
                    "Checking the Status of Open or Resolved Service Requests": {
                        "content": "<p>Login to the SupportLine web portal to view or update existing Support Incidents</p>"
                    },
                    "Closing a Service Request": {
                        "content": "<p>We will only close a Support Incident once you have confirmed that the issue has been satisfactorily resolved. On closure, we will ask you to complete a web-based Customer Satisfaction survey.This important feedback helps us to maintain our high levels of service. For any other feedback, please email supportline@microfocus.com.</p>"
                    }
                }
            },
            "How to Report a Software Defect, request a Product Enhancement or Report a Security Vulnerability": {
                "content": "",
                "subsections": {
                    "Software Defects": {
                        "content": "<p>RPI is opened with Dev team via support incident</p>"
                    },
                    "Product Enhancement Requests": {
                        "content": "<p>Contact support to raise an incident.</p>"
                    },
                    "Security Vulnerabilities": {
                        "content": "<p>RPI is opened with Dev team via support incident</p>"
                    }
                }
            },
            "Support Delivery Information": {
                "content": "",
                "subsections": {
                    "Product Support Lifecycle": {
                        "content": "http://supportline.microfocus.com/prodavail.aspx"
                    },
                    "Hours of Coverage and Target Response Times": {
                        "content": "No SLA's published"
                    },
                    "Hours of Coverage and Response Time Targets for Premium Service Engineers": {
                        "content": "Don't offer this service"
                    },
                    "Number of Authorized Support Contacts": {
                        "content": "No limit on the number of Authorized Contacts"
                    },
                    "Support Level Definitions": {
                        "content": "No definitions listed"
                    },
                    "Customer Data": {
                        "content": ""
                    }
                }
            },
            "Customer Satisfaction Surveys": {
                "content": "",
                "subsections": {
                    "Survey": {
                        "content": "Surveys were translated into the lang support we offer but this has yet to be implemented"
                    }
                }
            }
        },
        'NQ': {
            "Leveraging Self Help Resources": {
                "content": "<p>Support Forums are available at no cost and allow you to interact with our company and other industry experts, as well as your industry peers, to resolve technical issues, build individual expertise and enhance the collective store of information.</p>",
                "subsections": {
                    "Search the Knowledgebase": {
                        "content": "<ol> <li>Go to <a href=\"www.netiq.com/support/\">www.netiq.com/support/</a></li> <li>Type in the question in the Search Knowledgebase field</li> <li>To narrow your search further, you may select a product from the Products drop-down menu</li> <li>Click Search</li> </ol> <p>Customers with current maintenance can access the additional web-based tools below in locked areas of the support site. These areas also contain tools designed to enhance your support experience.</p>"
                    },
                    "Subscribe to Patch Notifications": {
                        "content": "<p><b>Other Online Services</b></p> <p>Additional resources are available on a product-by-product basis. Some of these resources are freely available; others require current maintenance to access: White Papers - Best Practices, Specific technology and environments, integration and a host of topics relevant to your NetIQ product deployments.</p> <p>Documentation - Product specific documentation including release notes, Installation Guides, User Guides, and Administration Guides among others.</p> <p>Knowledge Depot - The Knowledge Depot (does not apply to all products) features Knowledge Scripts, Reports, and Operator Console plug-ins that address specific needs. Most were developed and contributed by NetIQ customers. Refer to the NetIQ Qmunity for more details.</p> <p>Diagnostic Tools - Product specific diagnostic tools (does not apply to all products) that gather log files, environment specific information, registry settings, etc.</p> <p>Hotfixes - The latest information and downloads for product specific Hotfixes.</p> <p>Upgrades - The latest information and downloads for product specific Service Packs, Upgrades and Releases.</p>"
                    }
                },
            },
            "Using Customer Center to access Technical Support": {
                "content": "",
                "subsections": {
                    "Create a Login and Activate your Subscriptions": {
                        "content": "<p>You may need to re-create your account before logging in.</p> <p>As part of ongoing integration (see why this is necessary) designed to improve your online experience with us, it may be necessary for you to re-create your login account. You will fall into one of two categories:</p> <ul><li>Category 1: You have a login account with NetIQ's affiliate, Novell. If you already have a login account with Novell, simply log in with this account now which will also then become your NetIQ login. It is critical that the email address on your Novell account matches the email address on your myNetIQ account. This will sync both accounts resulting in a single login for both Novell and NetIQ environments. If your emails don't match, please see our FAQ.</li> <li>Category 2: You do not have a login account with NetIQ's affiliate, Novell. In this case you will need to create a new login account. It is critical that you use the same email address from your myNetIQ account (your myNetIQ username) to create the new account. Once your new account is created, simply log in and your account will be synced.</li></ul> <p>The purpose of this single sign-on account is solely to allow easier access via a single-sign on to the Novell, SUSE and NetIQ sites. For more information, including how NetIQ, Novell and SUSE uses your registration data, please see our list of Frequently Asked Questions, NetIQ's Privacy Policy or contact NetIQ Customer Support for North America or EMEA.</p>"
                    },
                    "Add to or Update Authorized Contacts": {
                        "content": "<p>Use this form to request that your myNetIQ account be enabled to access Locked Resources. You can request access for other individuals in your organization, but they will also need to create a myNetIQ account using their email address. We will process your request within two business days.</p><p>Please answer the following questions and click the Submit button. Fields marked with a red asterisk (*) are required.</p>"
                    },
                    "Manage Products and Services": {
                        "content": "<p>Use this form to request that your myNetIQ account be enabled to access Locked Resources. You can request access for other individuals in your organization, but they will also need to create a myNetIQ account using their email address. We will process your request within two business days.</p><p>Please answer the following questions and click the Submit button. Fields marked with a red asterisk (*) are required.</p>"
                    },
                    "Open a Service Request": {
                        "content": "<p><b>Service Request Manager (SRM)</b></p> <ul><li>Login to myNetIQ</li> <li>Choose \"Open a Service Request\"</li></ul> <p><b>By Phone:</b></p> <p>To ensure that we can address your issue quickly and efficiently, please have the following available:</p> <ul><li>NetIQ product registration numbers.</li> <li>Service Request number if you are calling about an existing case.</li> <li>Access and permissions to the computer where the affected product is running.</li></ul> <p><i>Note: Standard Maintenance provides technical support access 12x5, excluding weekends and local holidays. Priority Maintenance provides technical support access 24x7x365.</i></p> <p><b>North America (NA)</b></p> <ul><li>Priority Maintenance Customers (24x7) The number to call is provided to you in your Priority support package. Both toll and toll-free numbers are available.</li> <li>Standard Maintenance Customers (12x5) 1-713-418-5555 Monday through Friday from 7:00 a.m. to 7:00 p.m. CST, excluding holidays (\"Normal Hours\").</li></ul> <p><b>Europe, Middle East and Africa (EMEA)</b></p> <ul><li>Priority Maintenance Customers - (24x7) The number to call is provided to you in your Priority support package. Both toll and toll free numbers are available.</li> <li>Standard Maintenance Customers (12x5) +353 (0) 91 782 677 Monday through Friday from 8:00 a.m. to 8:00 p.m. CET, excluding holidays (\"Normal Hours\").</li></ul> <p><b>Asia-Pacific (APAC)</b></p> <ul><li>Priority Customers - (24x7) The number to call is provided to you in your Priority support package. Both toll and toll-free numbers are available.</li> <li>Standard Maintenance Customers (12x5) +1-713-418-5540 Monday through Friday from 8:00 a.m. to 8:00 p.m. GMT, excluding holidays (\"Normal Hours\").</li></ul>"
                    },
                    "After Hours": {
                        "content": "<p>If you experience a Severity 1 (Critical) issue outside business hours, and have access to 24-hour coverage, it is recommended that you telephone for support (rather than logging a service request through Customer Center).</p> <p><i>Note: Scheduled Standby is a chargeable service that can be pre-arranged in blocks of four hours during and outside business hours. This service gives you direct access to a engineer on a standby basis. When you have a scheduled product upgrade or network maintenance task for which you’d like some added insurance, you can have an experienced support engineer standing by. We require a minimum of three business days of notice to arrange for this service.</i></p>"
                    },
                    "Information to Include in your Service Request": {
                        "content": "WHAT is the problem?<ul><li>Which version of the product (or products) is having the problem?</li><li>Which support pack level is loaded?</li><li>What error messages (if any) are returned?</li><li>What troubleshooting steps have already been performed?</li></ul>WHERE does the problem occur?<ul><li>What is the environment?</li><li>On which sites, servers, directories or clients does the problem occur?</li><li>Where does the problem not occur?</li></ul>WHEN does the problem occur?<ul><li>When did the problem first occur?</li><li>Were changes made prior to the problem occurring? If so, what (installation of products, support pack, network changes, and so forth, for example)?</li></ul>WHAT is the extent of the problem?<ul><li>Is a workaround available?</li><li>What is the business impact of the problem?</li></ul>"
                    },
                    "Checking the Status of Open or Resolved Service Requests": {
                        "content": "<p>Service Request Manager (SRM):</p> <ul> <li>Login to myNetIQ</li> <li>Manage your open service requests</li> </ul>"
                    },
                    "Closing a Service Request": {
                        "content": "<p>We have a policy of closing service requests only upon mutual agreement with you. Unless otherwise agreed upon, service requests are closed as soon as you confirm the issue is resolved to your satisfaction. Service requests with no customer response for 2 weeks may also be closed.</p>"
                    }
                },
            },
            "How to Escalate a Service Request": {
                "content": ""
            },
            "Resolving Multi-Vendor Issues": {
                "content": ""
            },
            "How to Report a Software Defect, request a Product Enhancement or Report a Security Vulnerability": {
                "content": "",
                "subsections": {
                    "Software Defects": {
                        "content": ""
                    },
                    "Product Enhancement Requests": {
                        "content": "Not part of the support handbook but can be accessed via <a href=\"https://www.novell.com/products/enhancement-request.html\">https://www.novell.com/products/enhancement-request.html</a>"
                    },
                    "Security Vulnerabilities": {
                        "content": "<p>NetIQ is committed to providing secure enterprise software to its customers. While we employ secure product development practices in our engineering process, we recognize that not all vulnerabilities may be avoided. We are committed to providing a quick response for potential vulnerabilities reported from the field.</p> <p>Potential vulnerability reports can be submitted directly to NetIQ via <a href=\"mailto:security@netiq.com\">security@netiq.com</a> or through TippingPoint's Zero Day Initiative. When submitting a report please include the product name, version, and general description of the potential vulnerability.</p> <p>NetIQ’s policy is to respond to all potential vulnerability reports within 5 business days. Once an initial response is provided, NetIQ will continue a dialog with the submitter until the potential issue has been analyzed and resolved. For vulnerabilities that are found to be legitimate, credit will be given to the submitter when a remedy for the vulnerability is made available to the public.</p>"
                    }
                },
            },
            "Support Delivery Information": {
                "content": "",
                "subsections": {
                    "Product Support Lifecycle": {
                        "content": "<p>The lifecycle phase of a particular product determines the level of technical support available for that product. The current support status information for each product may be found here: /Support/versionsupport.asp</p> <p>All products go through the following lifecycle phases; the length of each phase may vary according to the specific product:</p> <ul> <li>Beta</li> <li>Current - General Availability (GA)</li> <li>Supported - Continued Support</li> <li>Withdrawn - Sunset</li> </ul> <p><b>Beta</b></p> <p>During a product beta, NetIQ may provide support during normal working hours for the product - see your sales representative for additional details. Beta code is only available to customers with current maintenance and is provided on an \"as-is\" basis.</p> <p><b>Current</b></p> <p>For all products in this phase of the lifecycle, NetIQ will provide support and maintenance offerings, which will allow you to choose the most appropriate level of support for your organization. Maintenance offerings may consist of maintenance releases, service packs and/or hotfixes. Hotfixes and service packs are not available for all products. Support services include, but are not limited to Knowledgebase, online support, and phone support during business hours; 24x7 support is available to customers who have purchased Priority maintenance.</p> <p><b>Supported</b></p> <p>Once a product version enters the Supported lifecycle phase, NetIQ will no longer actively develop new fixes or service packs for that version. Technical support reserves the right to request that the customer upgrade to the current version.</p> <p>NetIQ may offer limited support on that version for an additional 12 months answering usage questions only. Providing technical support during this period does not imply that NetIQ will fix software defects or make changes to the software.</p> <p><b>Withdrawn</b></p> <p>When a product version enters the Withdrawn lifecycle phase, NetIQ will no longer provide support for that product version. Knowledgebase articles will remain available for a period beyond this withdrawal date.</p> <p>Providing technical support during any phase of the product lifecycle does not imply that NetIQ will fix software defects or make changes to the software. Please contact your local NetIQ sales representative if you have questions regarding products in this phase: <a href=\"www.netiq.com/about_netiq/contactus.asp\">www.netiq.com/about_netiq/contactus.asp</a></p>"
                    },
                    "Hours of Coverage and Target Response Times": {
                        "content": "<p>Access - 12x5 (Standard) or 24x7 (Priority)</p> <p>Response Time (Standard) - Sev 1 = 2 hours, Sev 2 = 4 hours, Sev 3 = Next Business Day, Sev 4 = Next Business day</p> <p>Response Time (Priority) - Sev 1 = 1 hour, Sev 2 = 2 hours, Sev 3 = 4 hours, Sev 4 = Next Business day</p>"
                    },
                    "Hours of Coverage and Response Time Targets for Premium Service Engineers": {
                        "content": "<p>If you have a Premium Service Engineer (ASE, PSE, or DSE) or Advantage Service Requests, you may contact the engineer by telephone for any level of severity, not just Severity 1 issues. You may also use Customer Center to open a service request with your engineer via chat or email for any severity except Severity 1.</p> <p>There is a table here showing Program, Hours of Coverage, and Target Response Time:</p> <ol> <li>Standard or Priority maintenance or partner program required before purchasing these services.</li> <li>The target response time applies to the period when support is available. For example, a Standard maintenance Severity service request logged at p.m. will have a target response time of before a.m. the following business day.</li> <li>Although the Advantage team and Assigned support Engineers (ASEs) are only available x, customers with Priority maintenance (x coverage) may open service requests after hours, and partners without a Priority maintenance may use one of the Advantage or ASE Service Requests after hours. In both cases, the service request will be assigned to a Technical Support Engineer in the Support Center, but upon request may be transitioned to the ASE or Advantage team during normal business hours.</li> <li>Customers with Standard maintenance receive x hours of coverage for their PSE or DSE. Customers with Priority maintenance receive x hours of coverage for their PSE or DSE. Partners receive x hours of coverage. You may contact your PSE or DSE for Severity issues or occasional special projects that are scheduled in advance. PSEs and DSEs are GEO based resources and do not respond to global requests.</li> </ol>"
                    },
                    "Severity Level Definitions": {
                        "content": "<p>The severity of a service request is defined when created, and can be set up electronically by the customer creating the service request, or by a customer service representative over the telephone. We have defined four severity levels:</p> <ul> <li><b>Severity (Critical)</b> - The operation is in production and is mission critical to the business. The product is inoperable and the situation is resulting in a total disruption of work. There is no workaround available.</li> <li><b>Severity (High)</b> - Operations are severely restricted. Important features are unavailable, although work can continue in a limited fashion. A workaround is available.</li> <li><b>Severity (Medium)</b> - The product does not work as designed resulting in a minor loss of usage.</li> <li><b>Severity (Low)</b> - There is no loss of service. This may be a request for documentation, general information, product enhancement request, etc.</li> </ul>"
                    },
                    "Number of Authorized Support Contacts": {
                        "content": "<p>The severity of a service request is defined when created, and can be set up electronically by the customer creating the service request, or by a customer service representative over the telephone. We have defined four severity levels:</p> <ul> <li><b>Severity (Critical)</b> - The operation is in production and is mission critical to the business. The product is inoperable and the situation is resulting in a total disruption of work. There is no workaround available.</li> <li><b>Severity (High)</b> - Operations are severely restricted. Important features are unavailable, although work can continue in a limited fashion. A workaround is available.</li> <li><b>Severity (Medium)</b> - The product does not work as designed resulting in a minor loss of usage.</li> <li><b>Severity (Low)</b> - There is no loss of service. This may be a request for documentation, general information, product enhancement request, etc.</li> </ul>"
                    },
                    "Support Level Definitions": {
                        "content": "<p><b>Level 1</b>: Problem determination, including provision of compatibility information, installation assistance, usage support, on-going maintenance and basic troubleshooting.</p> <p><b>Level 2</b>: Problem isolation, including efforts to duplicate customer problems, isolate a problem area and provide resolution for problems not resolved by Level 1 Support. Resolution may include reasonable work-arounds.</p> <p><b>Level 3</b>: Problem resolution, which means to resolve complex problems identified by Level 2 Support. Resolution means closure of the issue giving rise to the service request, and may include configuration changes, implementation of a workaround, or creation of a software modification that when installed cures an Error. Resolution is not possible in all circumstances.</p>"
                    },
                    "Customer Data": {
                        "content": "<p>Customers and partners acknowledge that NetIQ may need access to certain software, hardware, data, third party software or other information or material to adequately troubleshoot and test issues. Lack of access to reproduce a customer's environment may prevent NetIQ from reproducing and isolating an issue.</p> <p>Customers and partners will take responsibility for all data provided to NetIQ. NetIQ assumes to have consent and permission to troubleshoot with data provided. Customers and partners will not provide data that is alleged to be confidential or proprietary.</p> <p>Customers and partners acknowledge that data provided may be altered or damaged in the course of testing and troubleshooting, and will take all appropriate measures to back-up the applicable data prior to providing it to NetIQ.</p>"
                    }
                },
            },
            "Customer Satisfaction Surveys": {
                "content": "",
                "subsections": {
                    "Survey": {
                        "content": "<p>At the closure of each service incident, you will receive an invitation to complete a survey regarding your experience.  The survey measures your satisfaction with the overall service incident process, as well as in specific areas such as resolution effectiveness, our product quality and support engineer performance.  We encourage your participation in completing this survey to detail your experience on each opened service incident. Rest assured, we take customer satisfaction and feedback seriously, and we use this information to determine where improvements can be made.</p>"
                    }
                },
            },
            "Additional Support Options Available": {
                "content": "",
                "subsections": {
                    "Premium Service": {
                        "content": "<p>When your IT environment is truly business-critical, you need to be sure you can get help quickly from people who understand your environment and business needs. You can get that extra assurance with Premium Service, available to help you get the most from your IT investment.</p> <p>Premium Service Engineers - Assigned, Primary or Dedicated Support Engineers (ASE, PSE, DSE) give you access to a named engineer with faster response times and increased levels of dedicated support; includes Service Account Management</p> <p>Advantage Service Request Packs - Access to a team of senior in-region support engineers for business-hours access to technical support (note: may not be available in all countries)</p> <p>On-site Support - Services to assist with technical issues at your site</p> <p>Scheduled Stand-by - Remote assistance with scheduled work such as upgrades and migrations; sold in four-hour blocks and includes one planning call</p> <p>Health Checks - A proactive, in-depth analysis of your environment by a senior engineer to provide you with feedback on how to optimize your system and ensure a stable, well-managed environment.</p>"
                    },
                    "Long Term Service Pack Support": {
                        "content": ""
                    },
                    "Technical Subscriptions": {
                        "content": ""
                    },
                    "Consulting": {
                        "content": ""
                    },
                    "Training": {
                        "content": "<p>Get the most from your product investment by training your staff to leverage features that will help you stay ahead of the competition, and by ensuring your environment is optimized and stable when managed by knowledgeable staff.</p>"
                    }
                },
            },
            "For More Information": {
                "content": "<p>If you have a question, view Frequently Asked Questions to see if we have an answer. For more information about technical support, training and consulting, contact your local sales representative or partner, or visit: <a href=\"www.netiq.com/services\">www.netiq.com/services</a></p> <p>All Technical Support packages expire 12 months after date of purchase.</p>",
            },

        },
        'NQ-New': {
            "Leveraging Self Help Resources": {
                "content": "Support Forums are available at no cost and allow you to interact with our company and other industry experts, as well as your industry peers, to resolve technical issues, build individual expertise and enhance the collective store of information.",
                "subsections": {
                    "Search the Knowledgebase": {
                        "content": "The support knowledgebase is a valuable troubleshooting and how-to resource, providing access to a rich database of technical articles, Technical Information Documents (TIDs), white papers, read-me documents and more. Through the comprehensive search capability, you can find the most recent patches for products, look for product documentation, search for TIDs, find tips and tricks, access technical articles and download free tools. Use the range of support information and tools available to you to troubleshoot issues before escalating to us."
                    },
                    "Subscribe to Patch Notifications": {
                        "content": "Through RSS feeds and customized email notifications, you can receive the information you need to keep your systems optimized and secure. Keep your products current with the latest patches, services packs and product version updates. Many known issues can be avoided by effectively managing patch releases and ensuring your products are kept up-to-date. Be familiar with our Product Support Lifecycle to be aware of how long we will patch and maintain your product. If a defect is found in an older service pack or patch, you may be asked to update to the current release as part of the troubleshooting process. If you need to receive technical support beyond the General Support phase, consider the Extended Support Service Request Package."
                    }
                }
            },
            "Using Customer Center to access Technical Support": {
                "content": "",
                "subsections": {
                    "Create a Login and Activate your Subscriptions": {
                        "content": "<p>When you purchase products or support, the primary contact for your organization will receive a confirmation email containing a unique contact ID number, which you use to activate and manage your maintenance account and benefits.</p><p>If you have an existing login account, all product licenses and support entitlements will be activated automatically, provided the email address used to place your order matches the address in your login account. To check or update your email address, log in at Customer Center and select from the navigation menu My Profile and then select Login Profile.</p><p>If you do not already have a login account, you can click the Installation link in the confirmation email. This will take you to a web page that steps you through the process of creating a login account. After you access the customer center, you will receive an email confirming and explaining your support and training entitlements.</p>"
                    },
                    "Add to or Update Authorized Contacts": {
                        "content": "Each contact in your organization needs their own unique contact ID number in order to access technical support, training and patches. To add or update authorized contacts, follow these steps:<ol><li>Log in to Customer Center at: www.novell.com/customercenter/</li><li>Select My Products /Products from the left navigation menu</li><li>Select the product for which you would like to manage support contacts in the Product Family list, and then double-click the product’s maintenance line to get to the Product Detail page</li><li>Click the User Access tab. Here you will see a list of current contacts that includes information about whether or not they are entitled to support or training</li><li>To add a new contact, click the + button below the list of contacts. Enter the contact’s email address and select one or more of the following check boxes: Support, Training or Patch & Update.</li><li>Click Add.</li></ol><p>If you have any issues updating your contacts, please email us at SupportSetup@novell.com</p><p>Ensure that authorized contact information is current and accurate, and the individuals have the appropriate level of technical ability.</p>"
                    },
                    "Manage Products and Services": {
                        "content": "Customer Center provides your complete order history – products, maintenance and other services. You can easily evaluate and manage your current resources and effectively plan for the future. Through Customer Center, you can access the valuable support services provided through your maintenance. These resources help you get the most from our solutions and products. All the information and resources you need are right at your fingertips. Customer Center can help you simplify and reduce costs associated with managing the resources that are so critical to your business."
                    },
                    "Open a Service Request": {
                        "heritage": "true",
                        "content": "If Heritage Novell product then follow the NV Handbook, if Heritage NetIQ then follow the NetIQ handbook."
                    },
                    "After Hours": {
                        "heritage": "true",
                        "content": "If Heritage Novell product then follow the NV Handbook, if Heritage NetIQ then follow the NetIQ handbook."
                    },
                    "Information to Include in your Service Request": {
                        "content": "WHAT is the problem?<ul><li>Which version of the product (or products) is having the problem?</li><li>Which support pack level is loaded?</li><li>What error messages (if any) are returned?</li><li>What troubleshooting steps have already been performed?</li></ul>WHERE does the problem occur?<ul><li>What is the environment?</li><li>On which sites, servers, directories or clients does the problem occur?</li><li>Where does the problem not occur?</li></ul>WHEN does the problem occur?<ul><li>When did the problem first occur?</li><li>Were changes made prior to the problem occurring? If so, what (installation of products, support pack, network changes, and so forth, for example)?</li></ul>WHAT is the extent of the problem?<ul><li>Is a workaround available?</li><li>What is the business impact of the problem?</li></ul>"
                    },
                    "Checking the Status of Open or Resolved Service Requests": {
                        "heritage": "true",
                        "content": "If Heritage Novell product then follow the NV Handbook, if Heritage NetIQ then follow the NetIQ handbook."
                    },
                    "Closing a Service Request": {
                        "content": "We have a policy of closing service requests only upon mutual agreement with you. Unless otherwise agreed upon, service requests are closed as soon as you confirm the issue is resolved to your satisfaction. Service requests with no customer response for 2 weeks may also be closed."
                    }
                }
            },
            "How to Escalate a Service Request": {
                "content": "Critical Situation Handling Process",
                "subsections": {
                    "Critical Situation Handling Process": {
                        "content": ""
                    }
                }
            },
            "Resolving Multi-Vendor Issues": {
                "content": "",
                "subsections": {
                    "Multi-Vendor": {
                        "content": ""
                    }
                }
            },
            "How to Report a Software Defect, request a Product Enhancement or Report a Security Vulnerability": {
                "content": "",
                "subsections": {
                    "Software Defects": {
                        "content": ""
                    },
                    "Product Enhancement Requests": {
                        "content": ""
                    },
                    "Security Vulnerabilities": {
                        "content": "<p>NetIQ is committed to providing secure enterprise software to its customers. While we employ secure product development practices in our engineering process, we recognize that not all vulnerabilities may be avoided. We are committed to providing a quick response for potential vulnerabilities reported from the field.</p><p>Potential vulnerability reports can be submitted directly to NetIQ via security@netiq.com or through TippingPoint's Zero Day Initiative. When submitting a report please include the product name, version, and general description of the potential vulnerability.</p><p>NetIQ’s policy is to respond to all potential vulnerability reports within 5 business days. Once an initial response is provided, NetIQ will continue a dialog with the submitter until the potential issue has been analyzed and resolved.For vulnerabilities that are found to be legitimate, credit will be given to the submitter when a remedy for the vulnerability is made available to the public.</p>"
                    },
                }
            },
            "Support Delivery Information": {
                "content": "",
                "subsections": {
                    "Product Support Lifecycle": {
                        "content": ""
                    },
                    "Hours of Coverage and Target Response Times": {
                        "content": ""
                    },
                    "Hours of Coverage and Response Time Targets for Premium Service Engineers": {
                        "content": "<p>If you have a Premium Service Engineer (ASE, PSE, or DSE) or Advantage Service Requests, you may contact the engineer by telephone for any level of severity, not just Severity 1 issues. You may also use Customer Center to open a service request with your engineer via chat or email for any severity except Severity 1.</p><i>There is a table here showing Program, Hours of Coverage, and Target Response Time</i><ol><li>Standard or Priority maintenance or partner program required before purchasing these services.</li><li>The target response time applies to the period when support is available. For example, a Standard maintenance Severity  service request logged at p.m. will have a target response time of before  a.m. the following business day.</li><li>Although the Advantage team and Assigned support Engineers (ASEs) are only available x, customers with Priority maintenance (x coverage) may open service requests after hours, and partners without a Priority maintenance may use one of the Advantage or ASE Service Requests after hours. In both cases, the service request will be assigned to a Technical Support Engineer in the Support Center, but upon request may be transitioned to the ASE or Advantage team during normal business hours.</li><li>Customers with Standard maintenance receive x hours of coverage for their PSE or DSE. Customers with Priority maintenance receive x hours of coverage for their PSE or DSE. Partners receive x hours of coverage. You may contact your PSE or DSE for Severity  issues or occasional special projects that are scheduled in advance. PSEs and DSEs are GEO based resources and do not respond to global requests.</li></ol>"
                    },
                    "Severity Level Definitions": {
                        "content": "<p>The severity of a service request is defined when created, and can be set up electronically by the customer creating the service request, or by a customer service representative over the telephone. We have defined four severity levels:</p><ul><li>Severity  (Critical) - The operation is in production and is mission critical to the business. The product is inoperable and the situation is resulting in a total disruption of work. There is no workaround available.</li><li>Severity  (High) - Operations are severely restricted. Important features are unavailable, although work can continue in a limited fashion. A workaround is available.</li><li>Severity  (Medium) - The product does not work as designed resulting in a minor loss of usage.</li><li>Severity  (Low) - There is no loss of service. This may be a request for documentation, general information, product enhancement request, etc.</li></ul>"
                    },
                    "Number of Authorized Support Contacts": {
                        "content": "<p>Academic Service Request Packs, Advantage Service Request Packs, and Standard Maintenance: 3</p><p>Priority maintenance, MLA Advanced 1: 5</p><p>Technology Partners: 10</p><p>MLA Advanced 2, Enterprise 1, Enterprise 2, ASE, PSE, DSE: No limit</p>"
                    },
                    "Support Level Definitions": {
                        "content": "<ul><li>Level 1: Problem determination, including provision of compatibility information, installation assistance, usage support, on-going maintenance and basic troubleshooting.</li><li>Level 2: Problem isolation, including efforts to duplicate customer problems, isolate a problem area and provide resolution for problems not resolved by Level 1 Support. Resolution may include reasonable work-arounds.</li><li>Level 3: Problem resolution, which means to resolve complex problems identified by Level 2 Support. Resolution means closure of the issue giving rise to the service request, and may include configuration changes, implementation of a workaround, or creation of a software modification that when installed cures an Error. Resolution is not possible in all circumstances.</li>"
                    },
                    "Customer Data": {
                        "content": "<p>Customers and partners acknowledge that we may need access to certain software, hardware, data, third party software or other information or material to adequately troubleshoot and test issues. Lack of access to reproduce a customer’s environment may prevent us from reproducing and isolating an issue.</p><p>Customers and partners will take responsibility for all data provided to us. We assume to have consent and permission to troubleshoot with data provided. Customers and partners will not provide data that is alleged to be confidential or proprietary.</p><p>Customers and partners acknowledge that data provided may be altered or damaged in the course of testing and troubleshooting, and will take all appropriate measures to back-up the applicable data prior to providing it to us.</p>"
                    }
                }
            },
            "Customer Satisfaction Surveys": {
                "content": "",
                "subsections": {
                    "Survey": {
                        "content": "<p>At the closure of each service incident, you will receive an invitation to complete a survey regarding your experience.  The survey measures your satisfaction with the overall service incident process, as well as in specific areas such as resolution effectiveness, our product quality and support engineer performance.  We encourage your participation in completing this survey to detail your experience on each opened service incident. Rest assured, we take customer satisfaction and feedback seriously, and we use this information to determine where improvements can be made.<p>"
                    }
                }
            },
            "Additional Support Options Available": {
                "content": "",
                "subsections": {
                    "Premium Service": {
                        "content": "<p>When your IT environment is truly business-critical, you need to be sure you can get help quickly from people who understand your environment and business needs. You can get that extra assurance with Premium Service, available to help you get the most from your IT investment.</p><p>Premium Service Engineers - Assigned, Primary or Dedicated Support Engineers (ASE, PSE, DSE) give you access to a named engineer with faster response times and increased levels of dedicated support; includes Service Account Management</p><p>Advantage Service Request Packs - Access to a team of senior in-region support engineers for business-hours access to technical support (note: may not be available in all countries)</p><p>On-site Support - Services to assist with technical issues at your site</p><p>Scheduled Stand-by - Remote assistance with scheduled work such as upgrades and migrations; sold in four-hour blocks and includes one planning call</p><p>Health Checks - A proactive, in-depth analysis of your environment by a senior engineer to provide you with feedback on how to optimize your system and ensure a stable, well-managed environment.</p>"
                    },
                    "Long Term Service Pack Support": {
                        "content": "Extended Support Service Request Packs are available on some products."
                    },
                    "Technical Subscriptions": {
                        "content": ""
                    },
                    "Consulting": {
                        "content": ""
                    },
                    "Training": {
                        "content": ""
                    }
                }
            },
            "For More Information": {
                "content": "<p>If you have a question, view Frequently Asked Questions to see if we have an answer. For more information about technical support, training and consulting, contact your local sales representative or partner, or visit: www.novell.com/services</p><p>All Technical Support packages expire 12 months after date of purchase.</p>"
            }
        },
        'NV': {
            "Leveraging Self Help Resources": {
                "content": "<p>Support Forums are available at no cost and allow you to interact with our company and other industry experts, as well as your industry peers, to resolve technical issues, build individual expertise and enhance the collective store of information.</p>",
                "subsections": {
                    "Search the Knowledgebase": {
                        "content": "<p>The support knowledgebase is a valuable troubleshooting and how-to resource, providing access to a rich database of technical articles, Technical Information Documents (TIDs), white papers, read-me documents and more. Through the comprehensive search capability, you can find the most recent patches for products, look for product documentation, search for TIDs, find tips and tricks, access technical articles and download free tools. Use the range of support information and tools available to you to troubleshoot issues before escalating to us.</p>"
                    },
                    "Subscribe to Patch Notifications": {
                        "content": "<p>Through RSS feeds and customized email notifications, you can receive the information you need to keep your systems optimized and secure. Keep your products current with the latest patches, services packs and product version updates. Many known issues can be avoided by effectively managing patch releases and ensuring your products are kept up-to-date. Be familiar with our Product Support Lifecycle to be aware of how long we will patch and maintain your product. If a defect is found in an older service pack or patch, you may be asked to update to the current release as part of the troubleshooting process. If you need to receive technical support beyond the General Support phase, consider the Extended Support Service Request Package.</p>"
                    }
                }
            },
            "Using Customer Center to access Technical Support": {
                "content": "",
                "subsections": {
                    "Create a Login and Activate your Subscriptions": {
                        "content": "<p>When you purchase products or support, the primary contact for your organization will receive a confirmation email containing a unique contact ID number, which you use to activate and manage your maintenance account and benefits.</p> <p>If you have an existing login account, all product licenses and support entitlements will be activated automatically, provided the email address used to place your order matches the address in your login account. To check or update your email address, log in at Customer Center and select from the navigation menu My Profile and then select Login Profile.</p> <p>If you do not already have a login account, you can click the Installation link in the confirmation email. This will take you to a web page that steps you through the process of creating a login account. After you access the customer center, you will receive an email confirming and explaining your support and training entitlements.</p>"
                    },
                     "Add to or Update Authorized Contacts": {
                        "content": "<p>Each contact in your organization needs their own unique contact ID number in order to access technical support, training and patches. To add or update authorized contacts, follow these steps:</p> <ol> <li>Log in to Customer Center at: <a href=\"www.novell.com/customercenter/\">www.novell.com/customercenter/</a></li> <li>Select My Products /Products from the left navigation menu</li> <li>Select the product for which you would like to manage support contacts in the Product Family list, and then double-click the product’s maintenance line to get to the Product Detail page</li> <li>Click the User Access tab. Here you will see a list of current contacts that includes information about whether or not they are entitled to support or training</li> <li>To add a new contact, click the + button below the list of contacts. Enter the contact’s email address and select one or more of the following check boxes: Support, Training or Patch & Update.</li> <li>Click Add.</li> </ol> <p>If you have any issues updating your contacts, please email us at <a href=\"mailto:SupportSetup@novell.com\">SupportSetup@novell.com</a></p> <p>Ensure that authorized contact information is current and accurate, and the individuals have the appropriate level of technical ability.</p>"
                    },
                    "Manage Products and Services": {
                        "content": "<p>Customer Center provides your complete order history – products, maintenance and other services. You can easily evaluate and manage your current resources and effectively plan for the future. Through Customer Center, you can access the valuable support services provided through your maintenance. These resources help you get the most from your our solutions and products. All the information and resources you need are right at your fingertips. Customer Center can help you simplify and reduce costs associated with managing the resources that are so critical to your business.</p>"
                    },
                    "Open a Service Request": {
                        "content": "<p>A Service Incident is defined as assistance with one issue, problem, or question relating to the use of installation of our product, regardless of the number of communications required.</p> <p><i>Note: Severity 1: Open a Service Request by telephone. A severity 1 issue is defined as a severe issue with an operation that is in production and is mission critical to the business. The product is inoperable and the situation is resulting in a total disruption of work. There is no workaround available. In this situation, you must log the service request by phone.</i></p> <p><i>Note: Severities 2-4: Open a Service Request through the Customer Center First, login with your username and password, then select \"Submit New SR\" and follow the on-screen instructions. You will need to enter your contact ID the first time you setup your account. This number will then be stored for future logins.</i></p> <p><b>Select your preferred method of contact</b></p> <ul><li>Chat | Features | How to use<br> Get real-time access to support engineers and have the option to allow your support engineer to connect to your system for improved troubleshooting and easier walk-through directions. You can even grant full control of your desktop or server so that your support engineer can work directly on your problem with you. Chat support is available in English, German, French, Italian and Spanish.</li> <li><b>Email</b><br> <p>We will contact you according to times and hours of access defined in your program or maintenance level. Please provide as much detail as possible using the guidelines provided in the section Information to include in your Service Request.</p></li> <li><b>Callback</b><br> <p>We will contact you according to the response times and hours of access defined in your program or maintenance level. Please provide as much detail as possible using the guidelines provided in the section Information to include in your Service Request.</p></li></ul> <p><b>Americas</b></p> <ol> <li>In the USA and Canada, contact the North America Support Center at --- within the United States or --- outside the United States. The North America Support Center is located in Provo, Utah and operates x. (TTY/TDD --).</li> <li>In all countries in Spanish speaking Latin America, contact the Latin America Support Center at +--. The Latin America Support Center is located in Buenos Aires, Argentina and operates x.</li> <li>In Brazil, contact the Brazilian Support Center at + -. The Brazilian Support Center is located in Sao Paulo, Brazil and operates x for electronic service requests and x for severity exclusively by phone.</li> </ol> <p><b>Asia Pacific</b></p> <p>Please call the number for your country listed below to submit a service request by phone:</p> <p>Australia: 1800 631 733<br> China, Northern: 0086 800 810 6500<br> China, Southern: 0086 800 810 6500<br> Hong Kong: 800 933 225<br> India: +91 80 400 22990<br> Indonesia: 0018 036 1686<br> Japan: +81-3-5206-9370<br> Korea: 0030 861 0051<br> Macau: 1080 0610 0292<br> Malaysia: 1800 801 925<br> New Zealand: 0800 445 060<br> Philippines: 1800 1651 0505<br> Singapore: 800 616 1448<br> Taiwan: 0080 1611 333<br> Thailand: 001800 611 2781<br> For any country not listed call (USA) +1-801-861-4000</p> <p><b>Europe, Middle East and Africa</b></p> <p>Please call the number for your language listed below to submit a service request by phone:</p> <p>English: +420 28 408 4051<br> French: +420 28 408 4054<br> German: +49 211 5632 1849<br> Italian: +420 28 408 4055<br> Polish: +48 22 537 50 97 (8am-6pm CET)<br> Spanish: +420 28 408 4052</p>"
                    },
                    "After Hours": {
                        "content": "<p>If you experience a Severity 1 (Critical) issue outside business hours, and have access to 24-hour coverage, it is recommended that you telephone for support (rather than logging a service request through Customer Center).</p><p><i>Note: Scheduled Standby is a chargeable service that can be pre-arranged in blocks of four hours during and outside business hours. This service gives you direct access to a engineer on a standby basis. When you have a scheduled product upgrade or network maintenance task for which you’d like some added insurance, you can have an experienced support engineer standing by. We require a minimum of three business days of notice to arrange for this service.</i></p>"
                    },
                    "Information to Include in your Service Request": {
                        "content": "WHAT is the problem?<ul><li>Which version of the product (or products) is having the problem?</li><li>Which support pack level is loaded?</li><li>What error messages (if any) are returned?</li><li>What troubleshooting steps have already been performed?</li></ul>WHERE does the problem occur?<ul><li>What is the environment?</li><li>On which sites, servers, directories or clients does the problem occur?</li><li>Where does the problem not occur?</li></ul>WHEN does the problem occur?<ul><li>When did the problem first occur?</li><li>Were changes made prior to the problem occurring? If so, what (installation of products, support pack, network changes, and so forth, for example)?</li></ul>WHAT is the extent of the problem?<ul><li>Is a workaround available?</li><li>What is the business impact of the problem?</li></ul>"
                    },
                    "Checking the Status of Open or Resolved Service Requests": {
                        "content": "<p>You can access the most current information on your service requests from the Customer Center at <a href=\"https://secure-www.novell.com/center/eservice/\">https://secure-www.novell.com/center/eservice/</a>. After you log in, a list of your service requests and the current status of each is made available. Select one to view its details (which can include current status and detailed descriptions of the actions taken by the support engineer). To display all service requests created under your account(s) (by yourself or other authorized contacts), click the All SRs table.</p> <p>Get Help Creating and Managing Service Requests in Customer Center</p>"
                    },
                    "Closing a Service Request": {
                        "content": "<p>We have a policy of closing service requests only upon mutual agreement with you. Unless otherwise agreed upon, service requests are closed as soon as you confirm the issue is resolved to your satisfaction. Service requests with no customer response for 2 weeks may also be closed.</p>"
                    }
                }
            },
            "How to Escalate a Service Request": {
                "content": "",
                "subsections": {
                    "Escalation": {
                        "content": "<p>If you have logged a service request, but are not satisfied with the support or advice provided, you may request escalation assistance by contacting:</p> <ul><li>A customer service representative (CSR) via the support center telephone numbers</li> <li>Your Service Account Manager (SAM), if your support agreement provides for one</li></ul>"
                    },
                    "Critical Situation Handling Process": {
                        "content": "<p>In exception circumstances, where a mission critical component is down, causing a major business impact, we can declare a critical situation. We define a critical situation as “…one or more support Service Requests whose timely resolution will minimize or prevent a major financial loss to one of our customers . “A critical situation is the highest level of escalation, raising the service request visibility to the executive levels within the company.</p> <p>When you have an issue involving our products that is creating a major, adverse impact to your business, we want to ensure that the proper resources are quickly involved so we can resolve the issue in a timely manner. We have internal escalation procedures that involve specialized and focused levels of technical and management personnel working together to speed resolution.</p> <p>There are several things you can do during a critical situation that will enable us to help you more effectively. Please follow these guidelines when reporting a critical situation:</p> <ul> <li>Please contact us as early as possible</li> <li>Have an authorized contact open the service request by phone. Do not use email or the Customer Center to open a critical service request</li> <li>At the beginning of your initial call, indicate the critical nature of the situation. If the issue did not start out as critical, but has since become such, notify us with a phone call. Information on the level of impact the particular critical situation is having on your business operations is extremely helpful. Be ready to provide us with all relevant information: contact ID, product versions, patch levels, configuration, troubleshooting steps performed, and so forth. (It may be helpful for you to call from the site where the critical situation is occurring.)</li> <li>If you have a SAM, notify him or her as soon as possible regarding the critical situation. This is a vital step in ensuring that the appropriate resources are ready to help you.</li> </ul> <p>Should a service request become critical, authorized contacts should notify their support engineer, ASE, PSE, or DSE; and/or SAM to make them aware of the business impact. The support engineer will be able to coordinate all of the relevant technical resources needed to progress a problem to a resolution. Where additional escalation assistance is required, the SAM can help facilitate this process. Following this communication process will ensure that relevant resources from our company are engaged and that you are updated regularly on the resolution progress.</p> <p>After they are approved, critical situations are reviewed on a daily basis by the Technical Support team, which will initiate regular action plan updates from the assigned support engineer (or SAM) to all appropriate management contacts within your organization until the critical situation is resolved.</p>"
                    }
                }
            },
            "Resolving Multi-Vendor Issues": {
                "content": "",
                "subsections": {
                    "Multi-Vendor": {
                        "content": "<p>We are a founding sponsor and remain an active member of the Technical Support Alliance Network (TSANet)—a global, vendor-neutral, not-for-profit industry support alliance. This organization creates an industry infrastructure, allowing members to collaborate and work on multi-vendor customer issues without “finger pointing.” TSANet follows industry-standard support policies and obligates members to collaborate on issues to isolation or resolution (or both). This process gives the customer a seamless interface in solving complex multi-vendor problems among two or more vendors. </p> <p>TSANet allows the assigned engineer to work directly with an engineer from another vendor to solve support issues. Think of it as a behind-the-scenes mechanism that expedites resolution, often without the customer even being aware of it being engaged. TSANet is a direct vendor-to-vendor contact; however, customers should have appropriate support entitlement with both vendors prior to the interaction. TSANet allows its members to work on your behalf and not waste time duplicating support incidents with multiple vendors. More information on TSANet, including a list of participating members, is available at: <a href=\"www.tsanet.org\">www.tsanet.org</a>.</p>"
                    }
                }
            },
            "How to Report a Software Defect, request a Product Enhancement or Report a Security Vulnerability": {
                "content": "",
                "subsections": {
                    "Software Defects": {
                        "content": "<p>You may report a software defect either through our free bug tool, or by opening a Service Request.</p> <p>When you report a software defect using our free bug tool, you will not receive a call back from a support engineer, as this tool is not an avenue for technical support. Any fixes made from these reports will be added to the next service pack release or patch update and announced through the regular maintenance notification.</p> <p>If you choose to report the bug by opening a service request, you will be able to talk to a support engineer, and if the issue is corrected, you could receive a program temporary fix (PTF). Although most customers are entitled to unlimited support, if you are a partner or academic institution with limited service requests, a service request will be decremented from your count if your support agreement has a limit on service requests. You may request us to credit the service request if the problem is determined to be a software defect for which information has not previously published as a Technical Information Document (TID) in the Support Knowledgebase, or documented in our release notes or maintenance notifications.</p> <p>For this purpose of this document, a software defect is either:</p> <ul> <li>During the General Support phase of the product support lifecycle, an error in a product’s functionality that results in the software’s failure to perform substantially in accordance with its specifications and for which our company is responsible; or</li> <li>A critical security defect in a product that is in the Extended Support phase.</li> </ul> <p>Report a Bug (this is a link to report the bug/defect)</p>"
                    },
                    "Product Enhancement Requests": {
                        "content": "<p>We are committed to creating highly functional, user-friendly software. Listening to our customers is an integral part of that commitment. Please help us improve our products by submitting your feedback and requests. If you have already opened a service request to report an issue that is a feature change, we will open an Enhancement Request in your behalf.</p><p>Submit an Enhancement Request (this is a link to report the enhancement request)</p>"
                    },
                    "Security Vulnerabilities": {
                        "content": "<p>Our presence in the software security field is continuously contributing to the high degree of trust and confidence that users value in our software. Do your part to contribute to the unprecedented reputation of our product by reporting any observed vulnerabilities.</p><p>Report a Security Vulnerability (this is a link to report the Security Vulnerability)</p>"
                    }
                }
            },
            "Support Delivery Information": {
                "content": "",
                "subsections": {
                    "Product Support Lifecycle": {
                        "content": "<p>We provide technical support on products for the time period specified in the Product Support Lifecycle. The Product Support Lifecycle defines the duration and levels of support customers can expect to receive as products mature. If you need to extend your support coverage, consider Extended Support Service Request Package</p>"
                    },
                    "Hours of Coverage and Target Response Times": {
                        "content": "<p>When registering service requests, We have defined targets for maximum response time to respond when a service request is logged. A response is defined as the time between creation of the service request and the initial communication between the assigned engineer and your company. Response times vary according to the maintenance level, Premium Service program or Partner program you have:</p> <p>There is a table here showing program levels, hours of coverage, Severity Level, and Target Response Time</p> <p>*If you have purchased a Premium Service Engineer, refer to the response times in the Premium Service programs table. ** Local 12x5 Support Center hours are as follows: Americas 6 a.m.—6 p.m. MT, APAC 7 a.m.—7 p.m. from your local country, EMEA 8 a.m.—8 p.m. CET, LATAM 8 a.m.—5 p.m. UTC-3 (Argentina time zone). *** The target response time applies to the period when support is available. For example, a Standard maintenance Severity 1 service request logged at 6 p.m. will have a target response time of before 10 a.m. the following business day.</p>"
                    },
                    "Hours of Coverage and Response Time Targets for Premium Service Engineers": {
                        "content": "<p>If you have a Premium Service Engineer (ASE, PSE, or DSE) or Advantage Service Requests, you may contact the engineer by telephone for any level of severity, not just Severity 1 issues. You may also use Customer Center to open a service request with your engineer via chat or email for any severity except Severity 1.</p> <p>There is a table here showing Program, Hours of Coverage, and Target Response Time</p> <ol> <li>Standard or Priority maintenance or partner program required before purchasing these services.</li> <li>The target response time applies to the period when support is available. For example, a Standard maintenance Severity service request logged at p.m. will have a target response time of before a.m. the following business day.</li> <li>Although the Advantage team and Assigned support Engineers (ASEs) are only available x, customers with Priority maintenance (x coverage) may open service requests after hours, and partners without a Priority maintenance may use one of the Advantage or ASE Service Requests after hours. In both cases, the service request will be assigned to a Technical Support Engineer in the Support Center, but upon request may be transitioned to the ASE or Advantage team during normal business hours.</li> <li>Customers with Standard maintenance receive x hours of coverage for their PSE or DSE. Customers with Priority maintenance receive x hours of coverage for their PSE or DSE. Partners receive x hours of coverage. You may contact your PSE or DSE for Severity issues or occasional special projects that are scheduled in advance. PSEs and DSEs are GEO based resources and do not respond to global requests.</li> </ol>"
                    },
                    "Severity Level Definitions": {
                        "content": "<p>The severity of a service request is defined when created, and can be set up electronically by the customer creating the service request, or by a customer service representative over the telephone. We have defined four severity levels:</p> <ul> <li><b>Severity (Critical)</b> - The operation is in production and is mission critical to the business. The product is inoperable and the situation is resulting in a total disruption of work. There is no workaround available.</li> <li><b>Severity (High)</b> - Operations are severely restricted. Important features are unavailable, although work can continue in a limited fashion. A workaround is available.</li> <li><b>Severity (Medium)</b> - The product does not work as designed resulting in a minor loss of usage.</li> <li><b>Severity (Low)</b> - There is no loss of service. This may be a request for documentation, general information, product enhancement request, etc.</li> </ul>"
                    },
                    "Number of Authorized Support Contacts": {
                        "content": "<p>Academic Service Request Packs, Advantage Service Request Packs, and Standard Maintenance: 3</p> <p>Priority maintenance, MLA Advanced 1: 5</p> <p>Technology Partners: 10</p> <p>MLA Advanced 2, Enterprise 1, Enterprise 2, ASE, PSE, DSE: No limit</p>"
                    },
                    "Support Level Definitions": {
                        "content": "<p><b>Level 1</b>: Problem determination, including provision of compatibility information, installation assistance, usage support, on-going maintenance and basic troubleshooting.</p> <p><b>Level 2</b>: Problem isolation, including efforts to duplicate customer problems, isolate a problem area and provide resolution for problems not resolved by Level 1 Support. Resolution may include reasonable work-arounds.</p> <p><b>Level 3</b>: Problem resolution, which means to resolve complex problems identified by Level 2 Support. Resolution means closure of the issue giving rise to the service request, and may include configuration changes, implementation of a workaround, or creation of a software modification that when installed cures an Error. Resolution is not possible in all circumstances.</p>"
                    },
                    "Customer Data": {
                        "content": "<p>Customers and partners acknowledge that we may need access to certain software, hardware, data, third party software or other information or material to adequately troubleshoot and test issues. Lack of access to reproduce a customer’s environment may prevent us from reproducing and isolating an issue.</p> <p>Customers and partners will take responsibility for all data provided to us. We assume to have consent and permission to troubleshoot with data provided. Customers and partners will not provide data that is alleged to be confidential or proprietary.</p> <p>Customers and partners acknowledge that data provided may be altered or damaged in the course of testing and troubleshooting, and will take all appropriate measures to back-up the applicable data prior to providing it to us.</p>"
                    }
                }
            },
            "Customer Satisfaction Surveys": {
                "content": "",
                "subsections": {
                    "Survey": {
                        "content": "<p>At the closure of each service request, you will receive an invitation to complete a survey regarding your experience (unless your survey requests are serviced by an ASE, PSE, or DSE, in which case surveys may be conducted less frequently). The survey measures your satisfaction with the overall service request process, as well as in specific areas such as resolution effectiveness, our product quality and support engineer performance. Surveys are delivered in one of eight languages, as specified during the service agreement setup. We encourage your participation in completing this survey to detail your experience on each opened service request. Rest assured, we take customer satisfaction and feedback seriously, and we use this information to determine where improvements can be made.</p>"
                    }
                }
            },
            "Additional Support Options Available": {
                "content": "",
                "subsections": {
                    "Premium Service": {
                        "content": "<p>When your IT environment is truly business-critical, you need to be sure you can get help quickly from people who understand your environment and business needs. You can get that extra assurance with Premium Service, available to help you get the most from your IT investment.</p> <p><b>Premium Service Engineers</b> - Assigned, Primary or Dedicated Support Engineers (ASE, PSE, DSE) give you access to a named engineer with faster response times and increased levels of dedicated support; includes Service Account Management</p> <p><b>Advantage Service Request Packs</b> - Access to a team of senior in-region support engineers for business-hours access to technical support (note: may not be available in all countries)</p> <p><b>On-site Support</b> - Services to assist with technical issues at your site</p> <p><b>Scheduled Stand-by</b> - Remote assistance with scheduled work such as upgrades and migrations; sold in four-hour blocks and includes one planning call</p> <p><b>Health Checks</b> - A proactive, in-depth analysis of your environment by a senior engineer to provide you with feedback on how to optimize your system and ensure a stable, well-managed environment.</p>"
                    },
                    "Long Term Service Pack Support": {
                        "content": "<p>Extended Support Service Request Packs are available on some products.</p>"
                    },
                    "Technical Subscriptions": {
                        "content": "<p>Technical subscriptions are the ultimate resource for IT professionals. A comprehensive collection of the technical resources you need to keep your systems updated, get training on your products, and troubleshoot even the toughest of technical issues. Technical Subscriptions are delivered monthly on CDs and DVDs, providing you access anytime, anywhere. You can also access the same resources anytime through the Subscriber portal. Compare available subscriptions, activate your subscription, manage usage, and access the subscriber portal to make the most of this valuable resource.</p> <p>Purchase technical support, in 5 Service Request increments, for a product that has moved out of General Support to the Extended Support product support lifecycle phase. You must be current on your maintenance coverage for the replacement product in order to purchase.</p>"
                    },
                    "Consulting": {
                        "content": "<p>By engaging Consulting and our partners, you can leverage your investment, meet budgetary constraints and stay ahead of the competition. The Consulting team can ensure your solution works the best way possible for your business needs, using industry best practices, so that you have fewer support issues.</p>"
                    },
                    "Training": {
                        "content": "<p>Get the most from your product investment by training your staff to leverage features that will help you stay ahead of the competition, and by ensuring your environment is optimized and stable when managed by knowledgeable staff.</p>"
                    }
                }
            },
            "For More Information": {
                "content": "<p>If you have a question, view Frequently Asked Questions to see if we have an answer. For more information about technical support, training and consulting, contact your local sales representative or partner, or visit: <a href=\"www.novell.com/services\">www.novell.com/services</a></p><p>All Technical Support packages expire 12 months after date of purchase.</p>"
            }
        }
    };

}]);

myApp.filter('spaceless',function() {
    return function(input) {
        if (input) {
            return input.replace(/\s+/g, '-');    
        }
    }
});