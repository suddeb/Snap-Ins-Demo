<style type='text/css'>
    .embeddedServiceHelpButton .helpButton .uiButton {
        background-color: #005290;
        font-family: "Salesforce Sans", sans-serif;
    }

    .embeddedServiceHelpButton .helpButton .uiButton:focus {
        outline: 1px solid #005290;
    }

    @font-face {
        font-family: 'Salesforce Sans';
        src: url('https://www.sfdcstatic.com/system/shared/common/assets/fonts/SalesforceSans/SalesforceSans-Regular.woff') format('woff'), url('https://www.sfdcstatic.com/system/shared/common/assets/fonts/SalesforceSans/SalesforceSans-Regular.ttf') format('truetype');
    }
</style>
<script type='text/javascript' src='https://service.force.com/embeddedservice/3.0/esw.min.js'></script>
<script type='text/javascript'>
    var initESW = function(gslbBaseURL) {
        embedded_svc.settings.displayHelpButton = true; //Or false
        embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'

        //embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
        //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

        //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
        //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

        // Settings for Live Agent
        embedded_svc.settings.avatarImgURL = '';
        embedded_svc.settings.prechatBackgroundImgURL = '';
        embedded_svc.settings.waitingStateBackgroundImgURL = '';
        embedded_svc.settings.smallCompanyLogoImgURL = '';

        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';

        embedded_svc.init('https://mlc--DEV20.cs12.my.salesforce.com', 'https://dev20-manulife-cdn.cs12.force.com/testsnapins', gslbBaseURL, '00DV0000006tKJa', 'Demo_Snap_In_Deployment', {
            baseLiveAgentContentURL: 'https://c.la1-c2cs-dfw.salesforceliveagent.com/content',
            deploymentId: '572V00000008Oev',
            buttonId: '573V00000008PEQ',
            baseLiveAgentURL: 'https://d.la1-c2cs-dfw.salesforceliveagent.com/chat',
            eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04IV0000000000QMAQ_15ede6fbfb0'
        });
    };
    if (!window.embedded_svc) {
        var s = document.createElement('script');
        s.setAttribute('src', 'https://mlc--DEV20.cs12.my.salesforce.com/embeddedservice/3.0/esw.min.js');
        s.onload = function() {
            initESW(null);
        };
        document.body.appendChild(s);
    } else {
        initESW('https://mlc--DEV20.cs12.my.salesforce.com');
    }
</script>