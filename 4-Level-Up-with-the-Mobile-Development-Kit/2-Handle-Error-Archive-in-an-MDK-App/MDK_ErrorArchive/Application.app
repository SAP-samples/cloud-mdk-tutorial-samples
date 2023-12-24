{
	"_Name": "MDK_ErrorArchive",
	"Version": "/MDK_ErrorArchive/Globals/Application/AppDefinition_Version.global",
	"MainPage": "/MDK_ErrorArchive/Pages/Main.page",
	"OnLaunch": [
		"/MDK_ErrorArchive/Actions/Service/InitializeOffline.action"
	],
	"OnWillUpdate": "/MDK_ErrorArchive/Rules/Application/OnWillUpdate.js",
	"OnDidUpdate": "/MDK_ErrorArchive/Actions/Service/InitializeOffline.action",
	"Styles": "/MDK_ErrorArchive/Styles/Styles.less",
	"Localization": "/MDK_ErrorArchive/i18n/i18n.properties",
	"_SchemaVersion": "23.12"
}