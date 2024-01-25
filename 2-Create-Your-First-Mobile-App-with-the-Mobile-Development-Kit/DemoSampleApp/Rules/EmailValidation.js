/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function EmailValidation(clientAPI) {
    //The following evaluateTargetPath will retrieve the current value of the email control
    if ((clientAPI.evaluateTargetPath('#Control:FCEmail/#Value').indexOf('@')) === -1) {
        //If email value does not contain @ display a validation failure message to the end-user
        clientAPI.executeAction('/DemoSampleApp/Actions/ValidationFailure.action');
    } else {
        //If @ is present in the email value, return true to indicate validation is successful
        return true;
    }
}
