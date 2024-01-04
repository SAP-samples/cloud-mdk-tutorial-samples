{
	"MainPage": "/DeepLinkIntoMDKApp/Pages/Main.page",
	"OnLaunch": [
		"/DeepLinkIntoMDKApp/Actions/Service/InitializeOffline.action"
	],
	"OnWillUpdate": "/DeepLinkIntoMDKApp/Rules/Application/OnWillUpdate.js",
	"OnDidUpdate": "/DeepLinkIntoMDKApp/Actions/Service/InitializeOffline.action",
	"OnLinkDataReceived": "/DeepLinkIntoMDKApp/Rules/LinkDataReceived.js",
	"Styles": "/DeepLinkIntoMDKApp/Styles/Styles.less",
	"Version": "/DeepLinkIntoMDKApp/Globals/Application/AppDefinition_Version.global",
	"Localization": "/DeepLinkIntoMDKApp/i18n/i18n.properties",
	"_SchemaVersion": "23.12",
	"_Name": "DeepLinkIntoMDKApp"
}