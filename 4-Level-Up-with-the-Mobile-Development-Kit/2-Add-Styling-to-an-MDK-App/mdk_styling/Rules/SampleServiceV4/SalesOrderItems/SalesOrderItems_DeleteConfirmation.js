/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/mdk_styling/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/mdk_styling/Actions/SampleServiceV4/SalesOrderItems/SalesOrderItems_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}