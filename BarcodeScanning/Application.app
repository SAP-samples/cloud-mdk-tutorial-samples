{
	"_Name": "BarcodeScanning",
	"Version": "/BarcodeScanning/Globals/AppDefinition_Version.global",
	"MainPage": "/BarcodeScanning/Pages/Main.page",
	"OnLaunch": [
		"/BarcodeScanning/Actions/Service/InitializeOffline.action"
	],
	"OnWillUpdate": "/BarcodeScanning/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/BarcodeScanning/Actions/Service/InitializeOffline.action",
	"Styles": "/BarcodeScanning/Styles/Styles.less",
	"Localization": "/BarcodeScanning/i18n/i18n.properties",
	"_SchemaVersion": "23.4"
}