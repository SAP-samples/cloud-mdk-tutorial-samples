    export default function SetExtensionValue(controlProxy) {
    	console.log("In SetExtensionValue");
    	let srcValue = controlProxy.getValue();
    	let targetCtrl = controlProxy.evaluateTargetPath("#Page:SampleExtensionPage/#Control:MyExtensionControlName");
    	targetCtrl.setValue(srcValue);
    }