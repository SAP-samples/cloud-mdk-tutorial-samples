{
	"_Name": "mdk_maps",
	"Version": "/mdk_maps/Globals/AppDefinition_Version.global",
	"MainPage": "/mdk_maps/Pages/Main.page",
	"OnLaunch": [
		"/mdk_maps/Actions/Service/CreateService.action"
	],
	"OnWillUpdate": "/mdk_maps/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/mdk_maps/Actions/Service/CreateService.action",
	"Styles": "/mdk_maps/Styles/Styles.less",
	"Localization": "/mdk_maps/i18n/i18n.properties"
}