export default function DeleteConfirmation(clientAPI) {
	let dialogs = clientAPI.nativescript.uiDialogsModule;
	return dialogs.confirm("Delete current record?").then((result) => {
		if (result === true) {
			return clientAPI.executeAction('/DemoSampleApp/Actions/Customers_DeleteEntity.action').then(
				(success) => Promise.resolve(success),
				(failure) => Promise.reject('Delete entity failed ' + failure));
		} else {
			return Promise.reject('User Deferred');
		}
	});
}