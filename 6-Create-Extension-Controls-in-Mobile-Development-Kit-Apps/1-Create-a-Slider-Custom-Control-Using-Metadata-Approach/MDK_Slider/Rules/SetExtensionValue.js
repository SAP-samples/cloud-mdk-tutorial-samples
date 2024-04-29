/**
* Describe this function...
* @param {IClientAPI} context
*/
export default function SetExtensionValue(context) {
    console.log("In SetExtensionValue");
    let srcValue = context.getValue();
    let targetCtrl = context.evaluateTargetPath("#Page:Main/#Control:MyExtensionControlName");
    targetCtrl.setValue(srcValue);
}
