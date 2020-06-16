export default function PostPet(context) {
	let appId = context.evaluateTargetPath('#Application/#ClientData/#Property:MobileServiceAppId');
	// POST "https://petstore.swagger.io/v2/pet" -H "accept: application/json" -H "Content-Type: application/json"
	let destination = 'com.sap.mdk.petstore';
	let relativePath = 'pet';
	let requestPath = destination + '/' + relativePath;
	let requestBodyJSON = {
		"category": {
			"name": "Terrier"
		},
		"name": "pet-test",
		"tags": [{
			"name": "Labrador"
		}],
		"status": "available"
	}
	let params = {
		'method': 'POST',
		'header': {
			'x-smp-appid': appId,
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		'body': JSON.stringify(requestBodyJSON)
	};
	return context.sendMobileServiceRequest(requestPath, params).then((response) => {
		if (response.statusCode == 200) {
			alert(response.content.toString());
		} else {
			alert('didnt work');
		}

	});
}