{
	"MainPage": "/multiuserapp/Pages/Main.page",
	"OnLaunch": [
		"/multiuserapp/Rules/Service/Initialize.js"
	],
	"OnWillUpdate": "/multiuserapp/Rules/Application/OnWillUpdate.js",
	"OnDidUpdate": "/multiuserapp/Rules/Service/Initialize.js",
	"OnUserSwitch": "/multiuserapp/Actions/SampleServiceV4/Service/SyncStartedMessage.action",
	"Styles": "/multiuserapp/Styles/Styles.less",
	"Version": "/multiuserapp/Globals/Application/AppDefinition_Version.global",
	"Localization": "/multiuserapp/i18n/i18n.properties",
	"_SchemaVersion": "24.7",
	"_Name": "multiuserapp"
}