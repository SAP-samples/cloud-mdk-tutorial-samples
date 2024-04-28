    /**
    * Describe this function...
    * @param {IClientAPI} context
    */
    export default function OpenSAPMobileStart(context) {
        // Get the Nativescript Utils Module
        const utilsModule = context.nativescript.utilsModule;
        // Get the Nativescript Platform Module
        const platformModule = context.nativescript.platformModule;
        return context.executeAction('/MDKDeepLink/Actions/Confirmation.action').then((result) => {
            if (result.data) {
                //This will open SAP Mobile Start app
                if (platformModule.isIOS) {
                    return utilsModule.openUrl("com.sap.mobile.start://");
                } else if (platformModule.isAndroid) {
                    return utilsModule.openUrl("com.sap.mobile.apps.sapstart://");
                }
            } else {
                return Promise.reject('User Deferred');
            }
        });
    }