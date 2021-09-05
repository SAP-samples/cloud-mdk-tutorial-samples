{
	"_Name": "MDK_Maps",
	"Version": "/MDK_Maps/Globals/AppDefinition_Version.global",
	"MainPage": "/MDK_Maps/Pages/Customers/Customers_List.page",
	"OnLaunch": [
		"/MDK_Maps/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/MDK_Maps/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/MDK_Maps/Actions/Service/InitializeOnline.action",
	"Styles": "/MDK_Maps/Styles/Styles.less",
	"Localization": "/MDK_Maps/i18n/i18n.properties",
	"_SchemaVersion": "6.0"
}