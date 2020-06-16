export default function GetPetFindByStatus(context) {
	//appId Returns the App ID com.sap.mdk.demo of application in Mobile Services on SAP Cloud Platform.
	let appId = context.evaluateTargetPath('#Application/#ClientData/#Property:MobileServiceAppId');
	// GET "https://petstore.swagger.io/v2/pet/findByStatus?status=available" -H "accept: application/json"
	let destination = 'com.sap.mdk.petstore';
	let relativePath = 'pet/findByStatus?status=available';
	let requestPath = destination + '/' + relativePath;
	let params = {
		'method': 'GET',
		'header': {
			'x-smp-appid': appId,
			'Accept': 'application/json'
		}
	};
	return context.sendMobileServiceRequest(requestPath, params).then((response) => {
		if (response.statusCode == 200) {
			console.log(response.content.toString());
			// Parse and act on results
			let result = JSON.parse(response.content.toString());
			return result;
		}
	});
}