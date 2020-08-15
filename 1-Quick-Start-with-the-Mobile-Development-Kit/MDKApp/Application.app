{
	"_Name": "MDKApp",
	"Version": "/MDKApp/Globals/AppDefinition_Version.global",
	"MainPage": "/MDKApp/Pages/Main.page",
	"OnLaunch": [
		"/MDKApp/Actions/Service/InitializeOffline.action"
	],
	"OnWillUpdate": "/MDKApp/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/MDKApp/Actions/Service/InitializeOffline.action",
	"Styles": "/MDKApp/Styles/Styles.less",
	"Localization": "/MDKApp/i18n/i18n.properties"
}
