/**
* Describe this function...
* @param {IClientAPI} context
*/
export default function CustomerOrderCount(context) {
    // Retrieves the current customer's information from the context
    const currentCustomer = context.getPageProxy().binding['@odata.readLink'];
    // Counts the number of sales orders associated with the current customer.
    return context.count('/demosampleapp/Services/com_sap_edm_sampleservice_v4.service', currentCustomer + '/SalesOrders', '').then((count) => {
        return count;
    });
}
