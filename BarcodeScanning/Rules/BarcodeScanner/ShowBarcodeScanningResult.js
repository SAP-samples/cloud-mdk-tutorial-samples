
var clientAPI;

/**
 * Describe this function...
 */
export default function ShowBarcodeScanningResult(context) {
     var actionResult = context.getActionResult('BarcodeScanner');
  if (actionResult) {
    context.setActionBinding({
      'Result': actionResult.data,
    });
    return context.executeAction('/BarcodeScanning/Actions/Navigation/BarcodeScanner/NavToBarcodeScannerSuccessPage.action');
  }
}

