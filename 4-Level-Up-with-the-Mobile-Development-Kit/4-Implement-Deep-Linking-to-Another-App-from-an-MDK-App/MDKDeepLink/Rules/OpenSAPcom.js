/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OpenSAPcom(clientAPI) {
    // Get the Nativescript Utils Module
    const utilsModule = clientAPI.nativescript.utilsModule;
    return clientAPI.executeAction('/MDKDeepLink/Actions/Confirmation.action').then((result) => {
        if (result.data) {
            //This will open SAP.com website
            return utilsModule.openUrl("https://www.sap.com");
        } else {
            return Promise.reject('User Deferred');
        }
    });
}