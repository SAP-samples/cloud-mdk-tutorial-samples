## MDK iOS branding customization

### Welcome Screen Logo:
* The Welcome screen's logo can be customized in Branding.nss and replacing custom_logo.png with your own custom logo

### App Icon and Launch (Splash) Screen  
In your /App_Resources/iOS/Assets.xcassets you will find the following sub-folders:
* The App launcher icon is set in AppIcon.appiconset
  * AppIcon.appiconset: The resource that holds the images for your AppIcons (all iOS versions).
  * NOTE: You need to make sure the resolution of the images and icons are correct. 
* The Splashscreen images is in:
  * LaunchImage.launchimage: The resource that holds the images for your launch screen images (for iOS 7 and lower versions).
  * **LaunchScreen.AspectFill.imageset**: The resource that holds the **background image** for your LaunchScreen.storyboard (for iOS versions 8+).
  * **LaunchScreen.Center.imageset**: The resource that holds the **centered image** for your LaunchScreen.storyboard (for iOS versions 8+).

* Tips: You can open Assets.xcassets in Xcode to verify the AppIcon.appiconset resolution are all correct.
* Important: Make sure you have provided all required images or your app wil be rejected from publishing in the App Store.