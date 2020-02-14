export default function EmailValidation(atSign) {

	//The following evaluateTargetPath will retrieve the current value of the email control
	if ((atSign.evaluateTargetPath('#Control:FCEmail/#Value').indexOf('@')) === -1) {

		//If email value does not contain @ display a validation failure message to the end-user
		atSign.executeAction('/DemoSampleApp/Actions/ValidationFailure.action');
	} else {

		//If @ is present in the email value, return true to indicate validation is successful
		return true;
	}
}