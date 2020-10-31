export default function OpenUI5(context) {
    // Get the Nativescript UI Dialogs Module
    const dialogs = context.nativescript.uiDialogsModule;
    // Get the Nativescript Utils Module
    const utilsModule = context.nativescript.utilsModule;
    return dialogs.confirm("Do you want to leave the current app?").then((result) => {
        if (result === true) {
            //This will open Software Downloads app running in SAP Fiori Client
            return utilsModule.openUrl("com.sap.fiori.client.xcallbackurl://x-callback-url/openFioriUrl?url=https://launchpad.support.sap.com/#/softwarecenter");
        } else {
            return Promise.reject('User Deferred');
        }
    });
}