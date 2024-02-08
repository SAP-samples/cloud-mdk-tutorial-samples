{
	"MainPage": "/MultiUserApp/Pages/Main.page",
	"OnLaunch": [
		"/MultiUserApp/Actions/Service/InitializeOffline.action"
	],
	"OnWillUpdate": "/MultiUserApp/Rules/Application/OnWillUpdate.js",
	"OnDidUpdate": "/MultiUserApp/Actions/Service/InitializeOffline.action",
	"OnUserSwitch": "/MultiUserApp/Actions/Service/SyncStartedMessage.action",
	"Styles": "/MultiUserApp/Styles/Styles.less",
	"Version": "/MultiUserApp/Globals/Application/AppDefinition_Version.global",
	"Localization": "/MultiUserApp/i18n/i18n.properties",
	"_SchemaVersion": "23.12",
	"_Name": "MultiUserApp"
}