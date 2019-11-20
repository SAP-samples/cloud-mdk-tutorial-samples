export default function CustomerOrderCount(sectionProxy) {
	//The following currentCustomer will retrieve the current customer record
	const currentCustomer = sectionProxy.getPageProxy().binding.CustomerId;

	//The following expression will retrieve the total count of the orders for a given customer
	return sectionProxy.count('/DemoSampleApp/Services/SampleServiceV2.service', 'SalesOrderHeaders',
		`$filter=CustomerId eq '${currentCustomer}'`).then((count) => {
		return count;
	});
}