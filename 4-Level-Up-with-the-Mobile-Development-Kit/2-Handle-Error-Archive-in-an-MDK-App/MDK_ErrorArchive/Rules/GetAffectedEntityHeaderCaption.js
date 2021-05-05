export default function GetAffectedEntityHeaderCaption(context) {
 //Current binding's root is the errorArchiveEntity:
 //Get the affectedEntity object out of it
 let affectedEntityType = "Unknown EntitySet";
 let affectedEntity = context.getPageProxy().binding.AffectedEntity;
 let id = affectedEntity["@odata.id"];
 if (id.indexOf("(") > 0) {
   affectedEntityType = id.substring(0, id.indexOf("("));
 }
 return "Affected Entity: " + affectedEntityType;
}