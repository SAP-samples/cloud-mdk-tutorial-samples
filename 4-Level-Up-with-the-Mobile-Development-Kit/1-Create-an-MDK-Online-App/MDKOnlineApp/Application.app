{
	"_Name": "MDKOnlineApp",
	"Version": "/MDKOnlineApp/Globals/AppDefinition_Version.global",
	"MainPage": "/MDKOnlineApp/Pages/Main.page",
	"OnLaunch": [
		"/MDKOnlineApp/Actions/Service/CreateService.action"
	],
	"OnWillUpdate": "/MDKOnlineApp/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/MDKOnlineApp/Actions/Service/CreateService.action",
	"Styles": "/MDKOnlineApp/Styles/Styles.less",
	"Localization": "/MDKOnlineApp/i18n/i18n.properties"
}