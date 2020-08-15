import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums";
export default function GetCoordinates(context) {
    var logger = context.getLogger();
    console.log("Current Log Level: " + logger.getLevel());
    // check if geolocation is not enabled
    if (!geolocation.isEnabled()) {
        // request for the user to enable it
        geolocation.enableLocationRequest();
    }
    // Get current location with high accuracy
    return geolocation.getCurrentLocation({
        desiredAccuracy: Accuracy.high, //This will return the finest location available
        updateDistance: 5, //Update distance filter in meters.
        timeout: 11000 //How long to wait for a location in ms.
    }).then(function (loc) {
        if (loc) {
            console.log(loc);
            console.log('\nCurrent Location: (' + loc.latitude + ',' + loc.longitude + ')');
            logger.log(loc.toString());

            var locMessage = '(' + "Latitude:" + loc.latitude + ',' + "Longitude:" + loc.longitude + ')';
            logger.log('Current Location: ' + locMessage, 'INFO');
            return locMessage;
        }
    }, function (e) {
        logger.log(e.message, 'ERROR');
    });
}