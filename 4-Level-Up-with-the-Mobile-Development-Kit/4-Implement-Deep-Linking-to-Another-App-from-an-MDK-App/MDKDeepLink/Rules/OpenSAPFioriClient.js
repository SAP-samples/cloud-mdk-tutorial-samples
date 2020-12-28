    export default function OpenSAPFioriClient(context) {
        // Get the Nativescript UI Dialogs Module
        const dialogs = context.nativescript.uiDialogsModule;
        // Get the Nativescript Utils Module
        const utilsModule = context.nativescript.utilsModule;
        return dialogs.confirm("Do you want to leave the current app?").then((result) => {
            if (result === true) {
                //This will open SAP Fiori Client App
                return utilsModule.openUrl("com.sap.fiori.client.xcallbackurl://x-callback-url");
            } else {
                return Promise.reject('User Deferred');
            }
        });
    }