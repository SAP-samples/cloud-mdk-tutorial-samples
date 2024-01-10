/**
* Describe this function...
* @param {IClientAPI} context
*/

export default function LinkDataReceived(context) {
    context.getLogger().log(`Link Data Received Triggered`,'Info');
    let linkData = context.getAppEventData();
    let data;

    try {
        data = JSON.parse(linkData);
    } catch (error) {
        return null;
    }

    let splitURL = data.URL.split('/');
    let action = splitURL[3];
    let entity = splitURL.length > 4 ? splitURL[4] : '';

    switch (action) {
        case 'search':
            if (entity === 'product') {
                return openProductListWithFilter(context, data.Parameters);
            }
            break;
        case 'product':
            if (data.Parameters && data.Parameters.id) {
                return openProductByID(context, data.Parameters.id);
            }
            break;
        default:
            context.getLogger().log(`Unrecognized Link Path ${data.URL}`,'Error');
            break;
    }
}

function openProductByID(context, id) {
    context.getLogger().log(`ID: ${id}`,'Debug');
    return context.read('/DeepLinkIntoMDKApp/Services/SampleServiceV4.service', `Products(${id})`, [], null).then(function (result) {
        if (result.length) {
            context.getPageProxy().setActionBinding(result.getItem(0));
            return context.getPageProxy().executeAction('/DeepLinkIntoMDKApp/Actions/Products/NavToProducts_Detail.action');
        }
    });
}

function openProductListWithFilter(context, parametersObj) {
    let pageData = context.getPageProxy().getPageDefinition('/DeepLinkIntoMDKApp/Pages/Products/Products_List.page');
    var filterQO = '$filter=';
    for (var key in parametersObj) {
        var value = parametersObj[key];
        filterQO += `${key} eq '${value}' and `;
    }
    if (filterQO.slice(-5) === ' and ') {
        filterQO = filterQO.slice(0, filterQO.length - 5);
    }
    context.getLogger().log(`${filterQO}`,'Debug');
    pageData.Controls[0].Sections[0].Target.QueryOptions = filterQO;
    return context.getPageProxy().executeAction({
        "Name": '/DeepLinkIntoMDKApp/Actions/Products/NavToProducts_List.action',
        "Properties": {
            "PageMetadata": pageData
        }
    });
}
