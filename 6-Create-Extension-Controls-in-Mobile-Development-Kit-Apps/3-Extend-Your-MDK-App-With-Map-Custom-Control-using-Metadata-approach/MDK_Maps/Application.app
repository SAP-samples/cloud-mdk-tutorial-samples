{
	"_Name": "MDK_Maps",
	"Version": "/MDK_Maps/Globals/Application/AppDefinition_Version.global",
	"MainPage": "/MDK_Maps/Pages/Main.page",
	"OnLaunch": [
		"/MDK_Maps/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/MDK_Maps/Rules/Application/OnWillUpdate.js",
	"OnDidUpdate": "/MDK_Maps/Actions/Service/InitializeOnline.action",
	"Styles": "/MDK_Maps/Styles/Styles.less",
	"Localization": "/MDK_Maps/i18n/i18n.properties",
	"_SchemaVersion": "23.12"
}