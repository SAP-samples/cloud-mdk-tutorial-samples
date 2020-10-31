export default function OpenSAPMobileCards(context) {
    // Get the Nativescript UI Dialogs Module
    const dialogs = context.nativescript.uiDialogsModule;
    // Get the Nativescript Utils Module
    const utilsModule = context.nativescript.utilsModule;
    return dialogs.confirm("Do you want to leave the current app?").then((result) => {
        if (result === true) {
            //This will open SAP Mobile Cards app
            return utilsModule.openUrl("com.sap.content2go://");
        } else {
            return Promise.reject('User Deferred');
        }
    });
}