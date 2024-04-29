{
	"MainPage": "/MultiUserApp/Pages/Main.page",
	"OnLaunch": [
		"/MultiUserApp/Rules/Service/Initialize.js"
	],
	"OnWillUpdate": "/MultiUserApp/Rules/Application/OnWillUpdate.js",
	"OnDidUpdate": "/MultiUserApp/Rules/Service/Initialize.js",
	"OnUserSwitch": "/MultiUserApp/Actions/SampleServiceV4/Service/SyncStartedMessage.action",
	"Styles": "/MultiUserApp/Styles/Styles.less",
	"Version": "/MultiUserApp/Globals/Application/AppDefinition_Version.global",
	"Localization": "/MultiUserApp/i18n/i18n.properties",
	"_SchemaVersion": "24.4",
	"_Name": "MultiUserApp"
}