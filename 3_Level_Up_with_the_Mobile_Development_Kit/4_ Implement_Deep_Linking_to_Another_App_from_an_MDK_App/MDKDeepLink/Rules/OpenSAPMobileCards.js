export default function openurl(clientAPI) {
	// Get the Nativescript UI Dialogs Module
	const dialogs = clientAPI.nativescript.uiDialogsModule;
	// Get the Nativescript Utils Module
	const utilsModule = clientAPI.nativescript.utilsModule;
	return dialogs.confirm("Do you want to leave the current app?").then((result) => {
		if (result === true) {
			//This will open SAP Mobile Cards app
			return utilsModule.openUrl("com.sap.content2go://").then(
				(success) => Promise.resolve(success),
				(failure) => Promise.reject('The requested app or page is not available ' + failure));
		} else {
			return Promise.reject('User Deferred');
		}
	});
}