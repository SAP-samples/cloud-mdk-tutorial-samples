export default function GetPetFindByStatus(context) {
    //appId Returns the App ID com.sap.mdk.demo of application in Mobile Services on SAP Cloud Platform.
    let appId = context.evaluateTargetPath('#Application/#ClientData/MobileServiceAppId');
    // GET "https://petstore.swagger.io/v2/pet/findByStatus?status=available" -H "accept: application/json"
    let destination = 'swagger.petstore';
    let relativePath = 'pet/findByStatus?status=available';
    let requestPath = destination + '/' + relativePath;
    let params = {
        'method': 'GET',
        'header': {
            'x-smp-appid': appId,
            'Accept': 'application/json'
        }
    };
    //sendRequest Client API is used to send a request to SAP Cloud Platform Mobile Services.
    return context.sendRequest(requestPath, params).then((response) => {
        if (response.statusCode == 200) {
            console.log(response.content.toString());
            // Parse and act on results
            let result = JSON.parse(response.content.toString());
            //result returns an array of objects and this result will be used in binding the Target in step 5.2
            return result;
        }
        else {
            alert('something went wrong');
        }
    });
}