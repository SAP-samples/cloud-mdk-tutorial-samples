export default function BarcodeScanResult(context) {
    var actionResult = context.getActionResult('BarcodeScanner');
    var scannedResult = actionResult.data;
    //alert(scannedResult);
     var noteFormCell = context.evaluateTargetPath("#Page:BarcodeScannerResult/#Control:FormCellNote0");
    /*if (actionResult) {
        context.setActionBinding({
            'Result': actionResult.data,
        });
        return context.executeAction({
            "Name": "/BarcodeScanning/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": `{Result}`
            }
        })
    }*/
   
  noteFormCell.setValue(scannedResult);
}



