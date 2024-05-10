export default function BarcodeScanResult(context) {
    var actionResult = context.getActionResult('BarcodeScanner');
    var scannedResult = actionResult.data;
     var noteFormCell = context.evaluateTargetPath("#Page:BarcodeScannerResult/#Control:FormCellNote0");
     //setting the scannedResult into Note FormCell control
    noteFormCell.setValue(scannedResult);
}



