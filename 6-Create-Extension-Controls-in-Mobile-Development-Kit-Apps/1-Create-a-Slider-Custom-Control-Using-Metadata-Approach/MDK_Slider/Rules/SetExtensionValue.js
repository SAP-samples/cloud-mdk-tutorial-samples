/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function SetExtensionValue(clientAPI) {
    console.log("In SetExtensionValue");
    let srcValue = clientAPI.getValue();
    let targetCtrl = clientAPI.evaluateTargetPath("#Page:Main/#Control:MyExtensionControlName");
    targetCtrl.setValue(srcValue);
}
