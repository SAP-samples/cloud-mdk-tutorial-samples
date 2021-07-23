
export default function BarcodeResult_OpenProductDetail(context) {
    let pageProxy = context.getPageProxy();
    var message = '';
    var actionResult = context.getActionResult('OpenBarcodeScanner');
    var scannedResult = actionResult.data;
    return context.read('/BarcodeScanning/Services/sample.service', 'Products', [], `$filter=ProductId eq '${scannedResult}'`).then((results) => {
        if (results && results.length > 0) {
            let prod = results.getItem(0);
            pageProxy.setActionBinding(prod);
            return pageProxy.executeAction('/BarcodeScanning/Actions/Products/NavToProduct_Detail.action');
        } else {
            message = `Product with ID (${scannedResult}) not found`;
            return context.executeAction({
                "Name": "/BarcodeScanning/Actions/GenericToastMessage.action",
                "Properties": {
                    "Message": message

                }
            });
        }
    });

}
