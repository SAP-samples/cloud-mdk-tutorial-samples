    export default function DecideWhichEditPage(context) {
      //Current binding's root is the errorArchiveEntity:
      let errorArchiveEntity = context.binding;
      //Get the affectedEntity object out of it
      let affectedEntity = errorArchiveEntity.AffectedEntity;
      console.log("Affected Entity Is:");
      console.log(affectedEntity);

      let targetAction = null;
      let id = affectedEntity["@odata.id"]; //e.g. PurchaseOrderHeaders(12345)
      let affectedEntityType = "Unknown Entity Set"; //By default it's unknown type
      if (id.indexOf("(") > 0) {
        //Extracting the entity set type from @odata.id e.g. PurchaseOrderHeaders
        var patt = /\/?(.+)\(/i;
       var result = id.match(patt);
       affectedEntityType = result[1];
      }
      console.log("Affected Entity Type Is:");
      console.log(affectedEntityType);
      //Here we decide which action to call depends on which affectedEntityType is the affectedEntity
      // You can add more complex decision logic if needed
      switch (affectedEntityType) {
        case "PurchaseOrderHeaders":
            targetAction = "/MDK_ErrorArchive/Actions/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Edit.action";
          break;
        default:
            //Save the affected Entity's type in client data so that it can be displayed by the toast
            context.getPageProxy().getClientData().AffectedEntityType = affectedEntityType;
            // Show a toast for affectedEntityType that we do not handle yet
            return context.executeAction("/MDK_ErrorArchive/Actions/UnknownAffectedEntityMessage.action");
      }

      if (targetAction) {
        let pageProxy = context.getPageProxy();
        //Set the affectedEntity object to root the binding context.
        pageProxy.setActionBinding(affectedEntity);
        //Note: doing 'return' here is important to chain the current context to the action.
        // Without the return the ActionBinding will not be passed to the action because it will consider
        // you are executing this action independent of the current context.
        return context.executeAction(targetAction);
      }
    }