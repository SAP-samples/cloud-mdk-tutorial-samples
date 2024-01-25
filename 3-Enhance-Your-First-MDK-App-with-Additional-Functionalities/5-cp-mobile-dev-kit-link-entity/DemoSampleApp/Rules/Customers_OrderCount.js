/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function CustomerOrderCount(clientAPI) {
    //The following currentCustomer will retrieve the current customer record
    const currentCustomer = clientAPI.getPageProxy().binding.CustomerID;
    //The following expression will retrieve the total count of the orders for a given customer
    return clientAPI.count('/DemoSampleApp/Services/SampleServiceV4.service', 'SalesOrderHeaders', `$filter=CustomerID eq ${currentCustomer}`).then((count) => {
        return count;
    });
}
