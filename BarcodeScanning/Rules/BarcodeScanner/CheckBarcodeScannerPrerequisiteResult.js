
/**
* Describe this function...
* @param {IClientAPI} context
*/
export default function CheckBarcodeScannerPrerequisiteResult(context) {
    var actionResult = context.getActionResult('CheckCamera');
  if (actionResult) {
    context.setActionBinding({
      'IsCameraReady': actionResult.data,
    });
   
     return context.executeAction('/BarcodeScanning/Actions/BarcodeScanner/NavToBarcodeScannerPage.action');
  
  }
}
