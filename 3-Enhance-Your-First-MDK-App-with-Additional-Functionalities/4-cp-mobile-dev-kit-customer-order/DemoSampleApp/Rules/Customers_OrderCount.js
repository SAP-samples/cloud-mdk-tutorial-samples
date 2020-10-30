export default function CustomerOrderCount(context) {
      //The following currentCustomer will retrieve the current customer record
    	const currentCustomer = context.getPageProxy().binding.CustomerId;
      //The following expression will retrieve the total count of the orders for a given customer
    	return context.count('/DemoSampleApp/Services/Sample.service', 'SalesOrderHeaders', `$filter=CustomerId eq '${currentCustomer}'`).then((count) => {
            return count;
        });
    }    