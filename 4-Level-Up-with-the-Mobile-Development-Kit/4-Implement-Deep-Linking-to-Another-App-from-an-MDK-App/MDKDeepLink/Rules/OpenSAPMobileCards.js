export default function OpenSAPMobileCards(context) {
    // Get the Nativescript Utils Module
    const utilsModule = context.nativescript.utilsModule;
    // Get the Nativescript Platform Module
    const platformModule = context.nativescript.platformModule;
    return context.executeAction('/MDKDeepLink/Actions/Confirmation.action').then((result) => {
        if (result.data) {
            //This will open SAP Mobile Cards app
            if (platformModule.isIOS) {
                return utilsModule.openUrl("com.sap.content2go://");
            } else if (platformModule.isAndroid) {
                return utilsModule.openUrl("https://mobileservices.cloud.sap/mobilecards");
            }

        } else {
            return Promise.reject('User Deferred');
        }
    });
}
