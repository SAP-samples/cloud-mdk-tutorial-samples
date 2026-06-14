/**
 * Opens the SAP Mobile Start app based on the platform.
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

export default function OpenSAPMobileStart(context) {
    return context.executeAction('/mdkdeeplink/Actions/Confirmation.action').then((result) => {
        if (result.data) {
            // This will open the SAP Mobile Start app
            const url = Application.ios 
                ? "com.sap.mobile.start://"
                : "com.sap.mobile.apps.sapstart://";
            return openUrl(url);
        } else {
            return Promise.reject('User Deferred');
        }
    });
}