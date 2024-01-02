{
	"_Name": "MDK_Annotations",
	"Version": "/MDK_Annotations/Globals/Application/AppDefinition_Version.global",
	"MainPage": "/MDK_Annotations/Pages/Main.page",
	"OnLaunch": [
		"/MDK_Annotations/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/MDK_Annotations/Rules/Application/OnWillUpdate.js",
	"OnDidUpdate": "/MDK_Annotations/Actions/Service/InitializeOnline.action",
	"Styles": "/MDK_Annotations/Styles/Styles.less",
	"Localization": "/MDK_Annotations/i18n/i18n.properties",
	"_SchemaVersion": "23.12"
}