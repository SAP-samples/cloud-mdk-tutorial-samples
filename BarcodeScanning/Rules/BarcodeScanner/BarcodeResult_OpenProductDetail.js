
export default function BarcodeResult_OpenProductDetail(context) {
    let pageProxy = context.getPageProxy();
    var message = '';
    var actionResult = context.getActionResult('BarcodeScanner');
    var scannedResult = actionResult.data;
    return context.read('/BarcodeScanning/Services/SampleServiceV4.service', 'Products', [], `$filter=ProductID eq ${scannedResult}`).then((results) => {
        if (results && results.length > 0) {
            let prod = results.getItem(0);
            pageProxy.setActionBinding(prod);
            return pageProxy.executeAction('/BarcodeScanning/Actions/SampleServiceV4/Products/NavToProducts_Detail.action');
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
