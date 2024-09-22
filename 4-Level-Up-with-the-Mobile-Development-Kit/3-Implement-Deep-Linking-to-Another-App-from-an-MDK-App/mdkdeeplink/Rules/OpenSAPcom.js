/**
 * Describe this function...
* @param {IClientAPI} context
*/
export default function OpenSAPcom(context) {
    // Get the Nativescript Utils Module
    const utilsModule = context.nativescript.utilsModule;
    return context.executeAction('/mdkdeeplink/Actions/Confirmation.action').then((result) => {
        if (result.data) {
            //This will open SAP.com website
            return utilsModule.openUrl("https://www.sap.com");
        } else {
            return Promise.reject('User Deferred');
        }
    });
}
