## MDK Android branding customization

* **drawable** folders: In your /App_Resources/Android folder you will find a number of subfolders named drawable-X (where x is the different DPI for the different devices) These folders will store your properly scaled images for your app icons, launch screens and in welcome screen/Onboarding pages icons. Here is the full list of your drawable resources folders.
  * **drawable-ldpi**: Resources for low-density (ldpi) screens (~120dpi).
  * **drawable-mdpi**: Resources for medium-density (mdpi) screens (~160dpi). (This is the baseline density.)
  * **drawable-hdpi**: Resources for high-density (hdpi) screens (~240dpi).
  * **drawable-nodpi**: Resources for all densities. These are density-independent resources. The system does not scale resources tagged with this qualifier, regardless of the current screen's density.
  *Important*: In NativeScript this is the folder that holds splash_screen.xml – the file that creates your launch screen.
  * **drawable-xdpi**: Resources for extra-high-density (xhdpi) screens (~320dpi).
  * **drawable-xxdpi**: Resources for extra-extra-high-density (xxhdpi) screens (~480dpi).
  * **drawable-xxxdpi**: Resources for extra-extra-extra-high-density (xxxhdpi) uses (~640dpi).
  * You can use this tool to calculate what's the size your logo/images should be in different dpi: https://pixplicity.com/dp-px-converter
  * More info on screen density: https://developer.android.com/training/multiscreen/screendensities

### Welcome Screen & Onboarding Pages Logo:
* **sap_logo.png**: is the image filename for Welcome Screen and Onboarding Pages. Replace it with your own version. The filename MUST BE "sap_logo".
* Note: the logo will be auto-scaled to 24dp in height in the welcome screen and onboarding pages.

### App Icon:
* **icon.png** is the image file for the app launcher icon. The filename must be "icon".

### Splashscreen
* The Splashscreen logo and background image is set in drawable-nodpi/splash_screen.xml
  * The Splashscreen logo is currently set as @drawable/splash_logo (you can change it if you wish)
  * The Splashscreen background image is currently set as @drawable/background (it's stored in the **drawable** folder)