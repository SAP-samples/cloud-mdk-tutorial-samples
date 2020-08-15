export default function SetExtensionValue(controlProxy) {
    console.log("In SetExtensionValue");
    let srcValue = controlProxy.getValue();
    let targetCtrl = controlProxy.evaluateTargetPath("#Page:SliderExtension/#Control:MyExtensionControlName");
    targetCtrl.setValue(srcValue);
}