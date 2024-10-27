/**
 * Describe this function...
 * @param {IClientAPI} context
 */
export default function CheckForSyncError(context) {
    context.count('/BarcodeScanning/Services/SampleServiceV4.service', 'ErrorArchive', '').then(errorCount => {
        if (errorCount > 0) {
            return context.getPageProxy().executeAction('/BarcodeScanning/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function() {
                return Promise.reject(false);
            });
        }
    });
}