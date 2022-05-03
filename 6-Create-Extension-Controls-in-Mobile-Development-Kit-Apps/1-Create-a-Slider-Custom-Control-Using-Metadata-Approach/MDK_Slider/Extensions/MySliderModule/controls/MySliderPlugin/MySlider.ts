import * as application from '@nativescript/core/application';
export let MySlider;
let MySliderModule;
/*
This is a sample of how to implement iOS and Android codes separately in a metadata extension.
Because all ts files in metadata Extensions folder will be bundled together using webpack,
if you execute any iOS codes in Android vice versa, it will likely cause issue such as crash.

By splitting the implementation into different files and encapsulate them in a function, it allows
us to load only the required module for the platform at runtime.
*/
if (!MySlider) {
    //Here you will check what platform the app is in at runtime.
    if (application.ios) {
        //if app is in iOS platform, load the MySlider module from ios folder
        MySliderModule = require('./ios/MySlider');
    } else {
        //otherise, assume app is in Android platform, load the MySlider module from android folder
        MySliderModule = require('./android/MySlider');
    }
    // calling GetMySliderClass() will return MySlider class for the correct platform.
    //  See the MySlider.ts in ios/andrid folder for details
    MySlider = MySliderModule.GetMySliderClass();
}
