{
	"_Name": "MDKOnlineApp",
	"Version": "/MDKOnlineApp/Globals/Application/AppDefinition_Version.global",
	"MainPage": "/MDKOnlineApp/Pages/Main.page",
	"OnLaunch": [
		"/MDKOnlineApp/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/MDKOnlineApp/Rules/Application/OnWillUpdate.js",
	"OnDidUpdate": "/MDKOnlineApp/Actions/Service/InitializeOnline.action",
	"Styles": "/MDKOnlineApp/Styles/Styles.less",
	"Localization": "/MDKOnlineApp/i18n/i18n.properties",
	"_SchemaVersion": "23.12"
}