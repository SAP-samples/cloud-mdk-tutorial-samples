export default function DeleteConfirmation(clientAPI) {
	return clientAPI.executeAction('/MDK_Annotations/Actions/DeleteConfirmation.action').then((result) => {
		if (result.data) {
			return clientAPI.executeAction('/MDK_Annotations/Actions/Product/Product_DeleteEntity.action').then(
				(success) => Promise.resolve(success),
				(failure) => Promise.reject('Delete entity failed ' + failure));
		} else {
			return Promise.reject('User Deferred');
		}
	});
}