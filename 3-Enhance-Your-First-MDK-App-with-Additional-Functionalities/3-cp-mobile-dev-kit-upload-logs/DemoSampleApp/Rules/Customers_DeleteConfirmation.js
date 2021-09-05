    export default function DeleteConfirmation(context) {
    	let dialogs = context.nativescript.uiDialogsModule;
    	return dialogs.confirm("Delete current record?").then((result) => {
    		if (result === true) {
    			return context.executeAction('/DemoSampleApp/Actions/Customers_DeleteEntity.action').then(
    				(success) => Promise.resolve(success),
    				(failure) => Promise.reject('Delete entity failed ' + failure));
    		} else {
    			return Promise.reject('User Deferred');
    		}
    	});
    }