/**
* Describe this function...
* @param {IClientAPI} context
*/
export default function CustomerOrderCount(context) {
    //The following currentCustomer will retrieve the current customer record
    const currentCustomer = context.getPageProxy().binding.CustomerID;
    //The following expression will retrieve the total count of the orders for a given customer
    return context.count('/DemoSampleApp/Services/SampleServiceV4.service', 'SalesOrderHeaders', `$filter=CustomerID eq ${currentCustomer}`).then((count) => {
        return count;
    });
}
