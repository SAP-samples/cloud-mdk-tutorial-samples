/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function CustomerOrderCount(clientAPI) {
    //The following currentCustomer will retrieve the current customer record
    const currentCustomer = clientAPI.getPageProxy().binding.CustomerId;
    //The following expression will retrieve the total count of the orders for a given customer
    return clientAPI.count('/DemoSampleApp/Services/SampleServiceV2.service', 'SalesOrderHeaders', `$filter=CustomerId eq '${currentCustomer}'`).then((count) => {
        return count;
    });
}
