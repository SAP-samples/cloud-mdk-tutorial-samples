/**
 * Describe this function...
* @param {IClientAPI} context
*/
import { Application, Utils } from "@nativescript/core";
function openUrl(location) {
	if (Application.ios) {
		const url = NSURL.URLWithString(location.trim());
		if (UIApplication.sharedApplication.canOpenURL(url)) {
			return UIApplication.sharedApplication.openURLOptionsCompletionHandler(url, null, null);
		} else {
			return false;
		}
	} else {
		return Utils.openUrl(location);
	}
}
export default function OpenSAPcom(context) {
    return context.executeAction('/mdkdeeplink/Actions/Confirmation.action').then((result) => {
        if (result.data) {
            //This will open SAP.com website
            openUrl("https://www.sap.com");
        } else {
            return Promise.reject('User Deferred');
        }
    });
}


