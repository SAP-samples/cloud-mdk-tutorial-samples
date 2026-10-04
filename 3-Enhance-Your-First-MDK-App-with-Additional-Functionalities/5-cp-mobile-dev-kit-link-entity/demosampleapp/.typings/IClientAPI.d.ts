/// version: MDK SDK 26.6

/**
 * A designer-facing interface that provides access to a context.
 * It can be passed to rules to provide access to the context for
 * that rule, i.e. the associated binding and UI element as well
 * as other useful data.
 */
 interface IClientAPI {
  /**
   * Provide a simple property access to the binding
   */
  binding: Object;
  /**
   * provide property for action results
   */
  actionResults: any;
  /**
   * Get the topmost page in the navigation stack
   */
   currentPage: any;
    /*
   * Returns a set of NativeScript Framework Modules that can be accessed using a well known property name.
  */
  nativescript: any;
   /**
   * Synchronously evaluate the target path and return the value from the resulting context.
   * 
   * @param path the target path to be evaluated
   * @returns the value from the resulting context. 
   * If an element is on the context, consider that the final value. Otherwise use binding.
   */
  evaluateTargetPath(path: string): any;
  /**
   * SynchronouslyeEvaluate the target path and return the ClientAPI instance which encapsulates the result
   * 
   * @param path the target path to be evaluated. Cannot be undefined or empty
   * @returns a ClientAPI instance holding the result of target path evaluation,
   * which can vary from a simple string to a view representation. 
   */
  evaluateTargetPathForAPI(path: string): IClientAPI;
/**
    * Client API to enable/override the DebugSettings during runtime. 
   * 
   * @param debugODataProvider boolean to add console logger to the OData provider set to Debug level
   * @param tracingEnabled boolean to turns on tracing (execution time) for rules, actions, and so on.
   * @param categories  array of tracing categories to enable the console log based on categories.
   */
 setDebugSettings(debugODataProvider: boolean, tracingEnabled: boolean, categories: string[]): void     
 /**
   * Execute an action. 
   * To ensure that the application waits for the action to complete, 
   * you must return the Promise returned by this method as the result of the rule.
   * Not doing this may cause the action binding and pressed item to be reset before the action completes.
   * @param actionPath the action path
   * @returns a promise as the result of the rule
   */
  executeAction(actionPath: string): Promise<IActionResult>;
  /**
   * This method is to format date object into locale Date string
   * 
   * @param date date value to be formatted into locale string.
   * Accepted values are datetime object, datetime in UTC string, timestamp number, datetimeoffset string
   * @param customLocale custom locale to be used in formatting the value
   * @param customTimeZone custom time zone to be used in formatting the value, must be a valid 
   * time zone name e.g. UTC, GMT+8, Europe/Berlin
   * @param customOptions custom options (in JSON object format) for formatting the value.
   * Currently, the supported key is 'format' with the following possible value: 
   * <ul>
   * <li>'short'</li>
   * <li>'medium'</li>
   * <li>'long'</li>
   * <li>'full'</li> 
   * </ul>
   * Default: medium
   * @return {string} formatted string
   * 
   */
  formatDate(date: Date, customLocale?: string, customTimeZone?: string, customOptions?: any): string;
  /**
   * This method is to format date object into locale DateTime string
   * 
   * @param date date value to be formatted into locale string.
   * Accepted values are datetime object, datetime in UTC string, timestamp number, datetimeoffset string
   * @param customLocale custom locale to be used in formatting the value
   * @param customTimeZone custom time zone to be used in formatting the value, 
   * must be a valid time zone name e.g. UTC, GMT+8, Europe/Berlin
   * @param customOptions custom options (in JSON object format) for formatting the value.
   * Currently, the supported key is 'format' with the following possible value: 
   * <ul>
   * <li>'short'</li>
   * <li>'medium'</li>
   * <li>'long'</li>
   * <li>'full'</li> 
   * </ul>
   * Default: medium (date), short (time)
   * @return {string} formatted string
   * 
   */
  formatDatetime(date: Date, customLocale?: string, customTimeZone?: string, customOptions?: any): string;
  /**
   * This method is to format number into currency display format according to selected locale
   * 
   * @param value numeric value to be formatted into currency display format
   * @param currencyCode currency code to format
   * @param customLocale custom locale to be used in formatting the value
   * @param customOptions custom options to be used in formatting the value. 
   * The available options are: 
   * <ul>
   * <li>minimumIntegerDigits: The number of integer digits allowed as output. Default is 1 (System default).</li>
   * <li>minimumFractionDigits: The minimum number of digits after the decimal separator allowed as output. Default is 0 (System default).</li>
   * <li>maximumFractionDigits: The maximum number of digits after the decimal separator allowed as output. The default is managed by system default based on currency code.</li>
   * <li>useGrouping: Determines whether the display should show the group separator. The default is managed by system default based on currency code.</li>
   * </ul>
   * <br />Example: \{maximumFractionDigits:2,useGrouping:true\}
   * @return {string} formatted number in currency display format
   */
  formatCurrency(value: number, currencyCode: string, customLocale?: string, customOptions?: any): string;
  /**
   * This method is to format number according to selected locale
   * 
   * @param value numeric value to be displayed in format according to selected locale
   * @param customLocale custom locale to be used in formatting the value
   * @param customOptions custom options to be used in formatting the value: 
   * The available options are: 
   * <ul>
   * <li>minimumIntegerDigits: The number of integer digits allowed as output. Default is 1 (System default).</li>
   * <li>minimumFractionDigits: The minimum number of digits after the decimal separator allowed as output. Default is 0 (System default).</li>
   * <li>maximumFractionDigits: The maximum number of digits after the decimal separator allowed as output. Default is 2 (MDK default).</li>
   * <li>useGrouping: Determines whether the display should show the group separator. Default is true (MDK default).</li>
   * </ul>
   * <br />Example: \{maximumFractionDigits:2,useGrouping:true\}
   * @return {string} formatted number
   */
  formatNumber(value: number, customLocale?: string, customOptions?: any): string;
  /**
   * This method is to format number to into percent display format
   * 
   * @param value numeric value to be formatted into percent display string
   * @param customLocale custom locale to be used in formatting the value
   * @param customOptions custom options to be used in formatting the value: 
   * The available options are: 
   * <ul>
   * <li>minimumIntegerDigits: The number of integer digits allowed as output. Default is 1 (System default).</li>
   * <li>minimumFractionDigits: The minimum number of digits after the decimal separator allowed as output. Default is 0 (System default).</li>
   * <li>maximumFractionDigits: The maximum number of digits after the decimal separator allowed as output. Default is 2 (MDK default).</li>
   * <li>useGrouping: Determines whether the display should show the group separator. Default is true (MDK default).</li>
   * </ul>
   * <br />Example: \{maximumFractionDigits:2,useGrouping:true\}
   * @return {string} formatted number in percentage
   */
  formatPercentage(value: number, customLocale?: string, customOptions?: any): string;
  /**
   * This method is to format scientific style number according to selected locale
   * 
   * @param value numeric value to be displayed in scientific style according to selected locale
   * @param customLocale custom locale to be used in formatting the value
   * @param customOptions custom options to be used in formatting the value: 
   * The available options are: 
   * <ul>
   * <li>minimumIntegerDigits: The number of integer digits allowed as output. Default is 1 (System default).</li>
   * <li>minimumFractionDigits: The minimum number of digits after the decimal separator allowed as output. Default is 0 (System default).</li>
   * <li>maximumFractionDigits: The maximum number of digits after the decimal separator allowed as output. Default is 2 (MDK default).</li>
   * <li>useGrouping: Determines whether the display should show the group separator. Default is true (MDK default).</li>
   * </ul>
   * <br />Example: \{maximumFractionDigits:2,useGrouping:true\}
   * @return {string} formatted number
   */
  formatScientific(value: number, customLocale?: string, customOptions?: any): string;
  /**
   * This method is to format date object into locale Time string
   * 
   * @param date date value to be formatted into locale string.
   * Accepted values are datetime object, datetime in UTC string, timestamp number, datetimeoffset string
   * @param customLocale custom locale to be used in formatting the value
   * @param customTimeZone custom time zone to be used in formatting the value, 
   * must be a valid time zone name e.g. UTC, GMT+8, Europe/Berlin
   * @param customOptions custom options (in JSON object format) for formatting the value.
   * Currently, the supported key is 'format' with the following possible value: 
   * <ul>
   * <li>'short'</li>
   * <li>'medium'</li>
   * <li>'long'</li>
   * <li>'full'</li>
   * </ul>
   * Default: short
   * @return {string} formatted string
   */
  formatTime(date: Date, customLocale?: string, customTimeZone?: string, customOptions?: any): string;
/** 
   * This method converts base64 string to binary data
   * @param base64 base64 string 
   * @returns a promise with a binary data once it is resolved
   */
  base64StringToBinary(base64: string): Promise<any>;
  /**
   * This method converts binary data to a base64 string.
   * @param binary - The binary data as a Uint8Array.
   * @returns a promise with a string once it is resolved
   */
  binaryToBase64String(binary: any): Promise<string>;
  /** 
   * This method formats MDK base64 string with content type
   * @param base64 base64 string
   * @param contentType base64 content type like "image/jpeg", "application/pdf"
   * @returns formatted base64 string. 
   */
  formatBase64String(base64: string, contentType: string): string;
  /**
   * Get the data which provides additional information about an app event, 
   * such as an app launch or exit, if such an event just occurred
   */
  getAppEventData(): any;
  /**
   * Gets the event data instance, which provides additional information about an event that's triggered, if such an event has occurred.
   * This function will return a proxy instance only when ClientAPI is an event; otherwise, it returns null.
   * Always check if this API returns null.
   * @example
   * ```ts
   * export default function OnLinkDataReceived(context) {
   *   const eventData = context.getEventData();
   *   if (eventData) {
   *     console.log(eventData.eventName); // e.g. 'OnLinkDataReceived'
   *     console.log(eventData.url);       // deep link URL
   *   }
   * }
   * ```
   */
  getEventData(): IBaseEventData;
  /**
   * Get the action result stored under the unique key
   */
  getActionResult(key: string): IActionResult;
  /**
   * Get the current context's binding object
   * @deprecated - use the new property getter
   */
  getBindingObject(): Object;
  /**
   * get the current context's binding's read link if any. Undefined otherwise
   * @param path target path into the binding
   */
  getReadLink(path: string): string;
  /**
   * Get the client data object. This starts out as a plain JavaScript object, 
   * and can be modified to hold application state.
   * Can only be accessed for IClientAPI instances associated with a UI element, 
   * because that guarantees that the data will last for the lifetime of that element.
   */
  getClientData(): Object;
  /**
   * Get the Application context client data object. This starts out as a plain JavaScript object, 
   * and can be modified to hold application state.
   * Can only be accessed for IClientAPI instances associated with a UI element, 
   * because that guarantees that the data will last for the lifetime of that element.
   */
   getAppClientData(): Object;
  /** 
   * Get the global definition for the specified path.
   */
  getGlobalDefinition(globalPath: string);
  /** 
   * Get Page metadata definition for the specified path as JSON object.
   */
   getPageDefinition(pagePath: string);
  /**
   * Converts a regular rectangular image into a circular one.
   * 
   * @param base64EncodedImageStr The Base64 image string which is to be made circular
   * @returns A Base64 string of the circular image, this image will be in PNG extensions.
   */
  getCircularImage(base64EncodedImageStr: string): string;
  /**
   * Creates an Image out of text provided in the iconText parameter.
   * A max of two letters can be displayed on the image.
   * 
   * @param iconText  Text that is to be used for generating the IconTextImage
   * @param width Width of the image
   * @param height Heght of the image 
   * @param isCircular Decides whether the image should be circular in shape
   * @param stylesJSON FontSize, FontColor and BackgroundColor can be given in a Json to style the IconTextImage
   * @returns a Base64 string of IconTextImage.
   */
  getIconTextImage(iconText: string, width: number, height: number, isCircular: true, stylesJSON?: string): string;
  /**
   * This method delgates to the AppSettingsManager to determine if the current
   * page has a pending download.
   * 
   * @param page page object path
   * @return returns a pending download for this page, which is a
   * JSON action binding associated with the download. Otherwise undefined
   */
  getPendingDownload(page: string): any;
  /**
   * Determine if the page is the topmost page in the navigation stack
   */
  isCurrentPage(pageName: string): boolean;
  /**
   * Get whether or not the media object for the supplied readLink is available in local
   * 
   * @param serviceName service name
   * @param entitySet entityset name
   * @param readLink readlnk name
   * @returns a promise with a boolean result once it is resolved
   */
  isMediaLocal(serviceName: string, entitySet: string, readLink: string): Promise<boolean>;
  /**
   * Perform a query on an entity set. Returns a Promise which resolves to the result of the operation
   * 
   * @param serviceName service name
   * @param entitySet entityset name
   * @param properties list of properties to be read
   * @param queryOptions query optins
   * @param headers request headers
   * @param requestOptions request options
   * @returns returns a Promise which resolves to the result of the operation
   */
  read(serviceName: string, entitySet: string, properties: string[], 
    queryOptions?: string, headers?: Object, requestOptions?: Object): Promise<any>;
/**
   * Perform an operation to create odata entity. Returns a Promise which resolves to the result of the operation.
   * @param serviceName service name
   * @param entitySet entityset name
   * @param properties an object to sotre the propterties object with key/value pair
   * @param createLinks list of readlinks
   * @param headers an object to sotre the header object with key/value pair
   */
  create(serviceName: string, entitySet: string, properties: {key: string, value: any}, 
    createLinks: ILinkSpecifierProxy[], headers?: {key: string, value: any}, 
    requestOptions?: { key: string, value: any }): Promise<any> ;
  /**
   * Return the value for given definition.
   * 
   * @param target : any valid definition like rule/action path/global path/binding/targetpath etc
   * @return Promise resolution.
   */
  getDefinitionValue(target: string): Promise<any>;
  /**
   * This method is to localize text
   * 
   * @param key key of text to be localized
   * @return {string} localized text
   */
  localizeText(key: string, dynamicParams?: string[]): string;
   /**
   * This method is to get current app language from app settings.
   * 
   * @return {string} app language
   */
  getLanguage(): string;
  /**
   * This method is to get current app region from app settings.
   * 
   * @return {string} app region
   */
  getRegion(): string;
  /**
   * This method is to get list of supported languages
   * 
   * @return {Object} list of supported languages in key value pairs
   */
  getSupportedLanguages(): Object;
  /**
   * This method is to get list of regions
   * 
   * @return {Object} list of regions in key value pairs
   */
  getRegions(): Object;
  /**
   * Get the versions of application, definitions, SDK and etc.
   * 
   * @returns It returns an array of key/value pairs 
   * to represent the versions for different components.
   * iOS app and Android app may have different components and versions.
   * 
   * iOS app may include the following keys:
   * <li> "Application Version": AppVersion from MDKProject.json
   * <li> "Definitions Version": Version from Application.app in the metadata
   * <li> "SAPMDC": MDK client version
   * <li> SDK libraries used by MDK: 
   * <ul>
   *   <li> "SAPCommon"
   *   <li> "SAPFiori"
   *   <li> "SAPFioriFlows"
   *   <li> "SAPFoundation"
   *   <li> "SAPOfflineOData"
   *   <li> "SAPOData"
   * </ul>
   * 
   * Android app may include the following keys:
   * <li> "Application Version": AppVersion from MDKProject.json
   * <li> "Definitions Version": Version from Application.app in the metadata
   * <li> "MDKClient Version": MDK client version
   * <li> SDK libraries used by MDK:
   * <ul>
   *   <li> "com.sap.cloud.android:foundation"
   *   <li> "com.sap.cloud.android:onboarding"
   *   <li> "com.sap.cloud.android:fiori"
   *   <li> "com.sap.cloud.android:odata"
   *   <li> "com.sap.cloud.android:offline-odata"
   * </ul>
   * 
   * Web application may include the following keys:
   * <li> "Definition Version": Version from Application.app in the metadata
   * <li> "WebClient Version": Web client version
   * <li> SDK libraries used by MDK:
   * <ul>
   *   <li> "@ui5/webcomponents Version"
   *   <li> "ui5-webcomponents-mdk Version"
   * </ul>
   */
  getVersionInfo(): Object;  
/**
   * Perform a count on an entity set. 
   *
   * @param serviceName service name
   * @param entitySet entityset name
   * @param queryOptions query options
   * @param headers request headers
   * @param requestOptions request options
   * @returns returns a Promise which resolves to the result of the operation
   */
  count(serviceName: string, entitySet: string, queryOptions?: string, 
    headers?: Object, requestOptions?: Object): Promise<number>;
  /**
   * Create LinkSpecifierProxy to be consumed by odata link action. one of queryOptions or readLink is required.
   * 
   * @param property property name
   * @param entitySet entityset name
   * @param queryOptions query options
   * @param readLink readlink name
   */
  createLinkSpecifierProxy(property: string, entitySet: string, queryOptions?: string,
    readLink?: string): ILinkSpecifierProxy;
 /**
   * Determine if a dowload is in progress for this readLink
   */
  downloadInProgressForReadLink(readLink: string): boolean;
  /**
   * Determine if a dowload is in progress for this page
   */
  downloadInProgressForPage(page: string): boolean;
  /**
   * Return Passcode Source. 
   *
   * 0 - no passcode or unknown, 1 - user, 2 - device(iOS Only) 3 - Device and User (Android Only)
   * Note: Android must always have a passcode for biometrics hence value 3
   */
  getPasscodeSource(): number;
  /**
   * Show activity indicator with specified text
   * @param text - The text to be shown
   * @return The id which can be used to dismiss the activity indicator
   */
  showActivityIndicator(text?: string): number;
  /**
   * This method is to set app language into app settings.
   * 
   * @param languageKey language key
   */
  setLanguage(language: string): void;
  /**
   * This method is to set app region into app settings. Different from the region specifier in 
   * SetLanguage, setRegion only affects formatting, e.g. date and number formats.
   * 
   * @param region region
   */
  setRegion(region: string): void;
  /**
   * This method is to enable or disable usage of in-app camera for Android Attachment form cell control.
   * The new value will be effective immediately.
   * Specifically for already rendered attachment formcell controls on the current page will only take effect after being resetted through control reset() API.
   * Do note that by calling control reset() API, the existing attachments would be discarded.
   *
   * @param value value to enable or disable usage of in-app camera for Android Attachment form cell control
   */
  setUseInAppCamera(value: boolean): void;
  /**
   * This method is to get the current state of usage of in-app camera for Android Attachment form cell control.
   *
   */
  getUseInAppCamera(): boolean;
  /**
   * This method is to get available themes in app settings.
   * 
   * @returns return available themes in array
   */
   getAvailableThemes(): string[];
   /**
    * This method is to get current theme from app settings.
    * 
    * @returns return the current theme
    */
   getTheme(): string;
   /**
    * This method is to set app Style Sheet into app settings.
    * 
    * @param newTheme theme name
    * @returns return set theme result in boolean
    */
   setTheme(newTheme: string): boolean;
   /**
    * This method is to get current ui appearance of the app.
    *
    * @returns return the current ui appearance as light or dark
    */
   getAppearanceMode(): 'light' | 'dark';
   /**
   * Dismiss activity indicator
   * @param id - The id of the activity indicator to be dismissed.
   * If no id is provided, the top activity indicator will be dismissed.
   * Using ids ensures that the right text will be shown at all times if
   * multiple indicators can be displayed, for example due to chained actions.
   */ 
  dismissActivityIndicator(id?: number): void;
  /**
   * Invoke an OData function import. Returns a Promise which resolves to the result(if existing) of the operation
   * @param serviceName service name
   * @param oFunction function name
   * @returns returns a Promise which resolves to the result(if existing) of the operation
   */
  callFunction(serviceName: string, oFunction: {Name: string, Parameters?: { key: string, value: any }}, headers?: Object): Promise<any>;
  /**
   * Update an existing progress banner with new text.  If no progress banner action is in progress, no banner will be 
   * displayed.
   * @param message - The text to show on the progress banner
   */
  updateProgressBanner(message: string): void;
   /**
   * Get the singleton instance of the LoggerManager.
   * If it has not been initialized yet, it throws exception
   */
  getLogger(): any;
  /**
   * Initializes the LoggerManager and adds the log file handlers
   * 
   * @param fileName Optional, File name of the local log file on the client device. 
   * If missing, default value is ClientLog.txt
   * @param maxFileSize Optional, Max file size before rollover of 
   * the local log file on the client device. If missing, default value is 5MB
   */
  initializeLogger(fileName: string, maxFileSize: number);
  /**
   * Determine if it is in demo mode
   */
  isDemoMode(): boolean;
  /**
   * Determine if the application is in single or multi user mode.
  */
  isAppInMultiUserMode(): boolean;
   /**
   * This method ensures the device meets compliance standards.
   * @returns true if the device is compliant, false otherwise.
   */
  isDeviceCompliant(): Boolean;
   /**
   * This method is to get AppId used for application in SAP Mobile Services.
   */
  getMobileServiceAppId(): string;
  /**
   * This method is to get Endpoint Url of connection to application in SAP Mobile Services
   */
  getMobileServiceEndpointUrl(): string;
   /**
   * This method is to get the value of _Name property for client application
   */
  getAppName(): string;
  /**
   * This method is to send a request to application's SAP Mobile Services.
   * 
   * * Example of the `params` parameter: <br/>
   * ```json
   * {
   *   "method": "<string>", 
   *   "header": {
   *     "<key1>": "<value as string>",
   *     "<key2>": "<and so on>",
   *   }, 
   *   "body": "<string>"
   * }
   * ```
   * 
   * @param path Relative path of request via application's SAP Mobile Services.
   * @param params Optional. An object consists of `method`, `header`, and `body` of request.<br/>
   * Note: If params is not given, request is set as GET method by default. See description above for the example.<br/>
   *   <li> `method` is string representing the HTTP Method to use. Supported value for methods are:
   * GET, HEAD, POST, PUT, DELETE, PATCH, CONNECT, OPTIONS, and TRACE.<br/>
   *   <li> `header` should be an object with key-value pair<br/>
   *   <li> `body` should be request body String, Binary, FormData, JSON object or Array.
   *   <li> - String should be a string converted from data payload based on the "Content-Type" set in `header`.
   *   <li> - Binary should be native data from file. The "Content-Type" in header should be set according to the content of file.
   *   <li> - FormData is converted to binary with the request body specially formatted as a series of "parts", separated with MIME boundaries. The "Content-Type" in header should be set to multipart/form-data.
   *   <li> - JSON Object or Array is converted to JSON string. The "Content-Type" in header is set to application/json by default.
   * @returns Returns a Http response object
   */
  sendRequest(path: string, params?: any): Promise<IHttpResponse>;
  /**
   * Send a request to application's SAP Mobile Services
   * @deprecated - use the new sendRequest API
   */
  sendMobileServiceRequest(path: string, params?: any): Promise<any>;
  /**
   * Get SAP Passport header value
   * 
   * @returns it returns a string 
   * of SAP Passport value to be used on request header.
   * The header name to be used is "SAP-PASSPORT"
   * 
   * @param componentName Name of the initial component. Default to 'MDK' if empty or null.
   * @param action Name of executed action. Default to null if empty.
   * @param traceFlag Trace configuration. Accepted values are: 
   * StatisticsOnly, SAPTraceLevel_SQL, SAPTraceLevel_Buffer, SAPTraceLevel_Enqueu, SAPTraceLevel_RFC, 
   * SAPTraceLevel_Permission, SAPTraceLevel_Free, SAPTraceLevel_CFunction, DSR_ABAP_Trace_Flag, 
   * SAPTraceLevel_ABAPCondens0, SAPTraceLevel_ABAPCondens1, DSR_SAT_Trace_Flag, ESP_WebService_Flag,
   * HTTP, TRCLVL_None, TRCLVL_Low, TRCLVL_Medium, TRCLVL_High
   * Default to 'TRCLVL_Low' if empty or null.
   * @param componentType Type of initial component. Accepted values are:
   * Undefined, Webas, J2EE, Trex, ICM, Gateway, CPIC, Browser, TraceLib, DotNet, Eclipse, PI_For_SAP_Sender,
   * SCP_For_NonSAP_Sender, PI_For_NonSAP_Sender, SAP_Partner, SCP_Request_Or_Determination_Later_In_Processing,
   * S4, SFSF, Ariba, Concur, Fieldglass, Callidus, BYD, IBP, Hybris, SMB_B1, Industry_Cloud, Leonardo,
   * Customer_Checkout, CoPilot
   * Default to 'Undefined' if empty or null.
   * @param prevComponentName Optional. Name of previous component. Default to initial component name if unspecified.
   * @param userId Optional. ID of user who is processing the request. Default to '<dummy>' if unspecified.
   */
  getSAPPassportHeaderValue(componentName: string, action: string, traceFlag: string, componentType: string, prevComponentName?: string, userId?: string): string;
  /**
   * Set the application icon badge number
   * Note: This function is for iOS only
   * 
   * @param badge the number to set
   */
  setApplicationIconBadgeNumber(badge: number);
    /**
   * Get OData provider based on service name
   * @param {serviceName} service name
   */
     getODataProvider(serviceName: string);
     /**
      * Returns Enum for specifying filterType in createFilterCriteria API.
      * Has two values, Filter and Sorter.
      */
     filterTypeEnum: typeof FilterType;
     /**
      * Create filter criteria for non-supported controls(except Filter & Sorter formcell) to be used in Filter page.
      * 
      * Example of how to get FilterType from createFilterCriteria: 
      * 
      *    let filterResult6 = clientAPI.createFilterCriteria(clientAPI.filterTypeEnum.Filter, undefined, undefined, result6, true);
      * @param filterType - filterTypeEnum value (Filter or Sorter).
      * @param name - Property name on which the filter is applied. If FilterCriteria is complex query, name will be used as CustomQueryGroup to match with FastFilter items in FilterFeedbackBar.
      * @param caption - Name of the control.
      * @param filterItems - Array of filter items.
      * @param isFilterItemsComplex - True if the filterItems contains logical/lambda operators, default is false. If set to true, name and caption properties are ignored.
      * @param label - label to be displayed beside display value when the item is being shown as selected item on filter feedback bar. Default is empty string.
      * @param filterItems - Array of display value of the filter items. Default is null.
      * 
      * @return {FilterCriteria} the created FilterCriteria
      */
     createFilterCriteria(filterType: FilterType, name: string, caption: string, filterItems: Array<object>, isFilterItemsComplex: boolean, label?, filterItemsDisplayValue?): FilterCriteria;
     /**
      * Convert array of FilterCriteria to JSON string, user can store it and restore back later using convertJSONStringToFilterCriteriaArray().
      * 
      * Example:
      * 
      *    let jsonString = clientAPI.convertFilterCriteriaArrayToJSONString(sectionedTable.filters);
      * @param filters - array of FilterCriteria, e.g. filters of the sectioned table.
      * 
      * @return {string} the JSON string
      */
     convertFilterCriteriaArrayToJSONString(filters: Array<FilterCriteria>): string
     /**
      * Convert JSON string to array of FilterCriteria, JSON string can be used the return value from convertFilterCriteriaArrayToJSONString().
      * 
      * Example: 
      * 
      *    sectionedTable.filters = clientAPI.convertJSONStringToFilterCriteriaArray(jsonString);
      * @param jsonString - JSON string returned from convertFilterCriteriaArrayToJSONString().
      * 
      * @return {Array<FilterCriteria>} the array of FilterCriteria
      */
     convertJSONStringToFilterCriteriaArray(jsonString: string): Array<FilterCriteria>;
     /**
      * Delete OData cache images
      * Note: This function is for iOS & Android only
      */
     deleteODataCacheImages(serviceFileName?: string, entityName?: string);
     /**
     * Get OData cache image path
     * @param {string} path OData direct image rendering path
     * @param {string} mimeType Mime Type
     * @returns {Promise<string>} returns OData cache image path
     * Note: This function is for iOS & Android only
     */
    getODataCacheImagePath(path: string, mimeType?: string): Promise<string>;
}

/**
 * A designer-facing interface that provides access to a control.
 * 
 * It is passed to rules to provide access to a control for
 * application specific customizations.
 */
interface IControlProxy extends IClientAPI {
  /**
   * Applies the validation view, if it's supported for the given control
   * 
   * Note: We have Validation property to replace validationProperties in FormCell controls. 
   * If you are using new Validation property, you can call redraw() on control level to apply validation changes
   */
  applyValidation();
  /**
   * Hides the validaiton view. Shorter version of:
   * clientAPI.setupValidationProperties('ValidationViewIsHidden', true).applyValidation();
   * 
   * Note: We have Validation property to replace validationProperties in FormCell controls. 
   * If you are using new Validation property, you can call setVisible() API in FormCellValidationProxy
   */
  clearValidation();
  // Workaround to BCP 1880677511: Hides the validaiton view while changing value. 
  /**
   * Hides the validaiton view while changing value
   * 
   * Note: We have Validation property to replace validationProperties in FormCell controls. 
   * If you are using new Validation property, you can call setVisible() API in FormCellValidationProxy
   */
  clearValidationOnValueChange();
  /**
   * @return {string} the caption of the contol
   */
  getCaption(): string;
  /**
   * @return {string} the name of the contol
   */
  getName(): string;
  /**
   * @returns {IPageProxy} the Page, which the control belongs to 
   */
  getPageProxy(): IPageProxy;
  /**
   * @return {string} the type of the contol
   */
  getType(): string;
  /**
   * @return {any} the value of the contol
   */
  getValue(): any;
  /**
   * Determine if the control is a container control
   * @returns {boolean} returns true if the control is a container control. 
   * Otherwise, returns false. 
   */
  isContainer(): boolean;
  /**
   * Use this method to redraw the control.  In cases where a control
   * does not have redraw semantics the control's container will redraw
   */
  redraw();
  /**
   * Sets the controls editable state
   * 
   * @param {boolean} value - editable setting
   * @returns {IControlProxy} this - allows chaining
   */
  setEditable(value: boolean);
  /**  
   * To apply styles to a control
   * 
   * @param styleClass The name of the style class to be applied
   * @param subView The name of the subview to apply the style to.
   * If this is '', the style is applied to the entire control.
   * If the style format is nested controls, we could combine them with slash '/', such as
   * 'parent/child'.
   */
  setStyle(styleClass: string, subView: string);
  /**
   * Sets the validationProperties parameter of the underlying Observable.
   * Currently only the FormCell Observable is supported.
   *
   * This will not cause the UI to rerender. To redraw the form cell, use the applyValidation API.
   *
   * Note: We have Validation property to replace validationProperties in FormCell controls. 
   * If you are using new Validation property, you can set properties by calling APIs in FormCellValidationProxy
   * 
   * @param {string} key the key of the validaiton property
   * Available keys:
   * - SeparatorBackgroundColor (hex color as string e.g.: 'ffffff')
   * - SeparatorIsHidden (boolean)
   * - ValidationMessage (string)
   * - ValidationMessageColor (hex color as string e.g.: 'ffffff')
   * - ValidationViewBackgroundColor (hex color as string e.g.: 'ffffff')
   * - ValidationViewIsHidden (boolean)
   * @param {any} value the value of the validation property
   * @returns {ControlProxy} the current instance of the ControlProxy class
   */
  setValidationProperty(key: string, value: any): IControlProxy;
  /**
   * Set the value in the control
   * @param value value to be set
   * @param notify whether to send the notification
   * @returns {IControlProxy} this - allows chaining
   */
  setValue(value: any, notify?: boolean);
  /**
   * Sets the control's visible state with / without redraw
   * 
   * @param value visible state
   * @param redraw true if redraw after set the visible state
   */
  setVisible(value: boolean, redraw: boolean);
}

/**
 * A designer-facing interface that provides access to a element.
 * 
 * It is passed to rules to provide access to an element for
 * application specific customizations.
 */
interface IElementProxy extends IClientAPI {
  /**
   * @returns {IPageProxy} the Page, which the element belongs to 
   */
  getPageProxy(): IPageProxy;

  /**
  * Get element name
  * @return {string} the name of the button
  */
  getName(): string;

  /**
  * This method returns parent proxy
  * @return {any}
  */
  getParent(): any;

  /**
  * Get index
  * @return {number}
  */
  getIndex(): number;

  /**
   * This method returns type
   * @return {string}
   */
  getType(): string;
}

/**
 * A designer-facing interface that provides access to a card element.
 * 
 * It is passed to rules to provide access to a card element for
 * application specific customizations.
 * 
 * @example
 * ```javascript
 * // Access card element properties, as well as its section and page
 * export default function HandleCardPress(context) {
 *   // ElementCardProxy is the base class for card element proxies, the actual proxy depends on the card element
 *   const cardElementProxy = context;
 * 
 *   // Access methods that are also available in ElementProxy
 *   const cardName = cardElementProxy.getName();
 *   const cardIndex = cardElementProxy.getIndex();
 *   const pageProxy = cardElementProxy.getPageProxy();
 *   pageProxy.getClientData().LastCardPressed = cardName;
 * 
 *   // Access methods specific to ElementCardProxy
 *   const sectionProxy = cardElementProxy.getSectionProxy();
 *   sectionProxy.setVisible(false);
 * 
 *   return cardElementProxy.executeAction('/MyApp/Actions/CardToastMessage.action');
 * }
 * ```
 */
export interface ISectionRowElementProxy extends IElementProxy {
  /**
   * This method returns BindableSection proxy
   * @return {IBindableSectionProxy}
   * 
   * @example
   * ```javascript
   * const bindableSectionProxy = context.getSectionProxy();
   * bindableSectionProxy.redraw();
   * ```
   */
  getSectionProxy(): IBindableSectionProxy;
}

/*
* A designer-facing interface that provides access to FormCellValidation Proxy 
* in a FormCell control.
*/
interface IFormCellValidationProxy extends IElementProxy {
  /**
   * Returns parent control proxy
   * @returns {IFormCellProxy}
   */
  getParent(): IFormCellProxy;
  /**
   * Returns Message property value in Validation property
   * @returns {string}
   */
  getMessage(): string;
  /**
   * Set the Message value in Validation property
   * 
   * This will not cause the UI to rerender. To redraw the form cell, use redraw() on control proxy.
   * @param {string} message Message value to set
   * @returns {IFormCellValidationProxy}
   */
  setMessage(message: string): IFormCellValidationProxy
  /**
   * Returns Visible property value in Validation property 
   * @returns {boolean}
   */
  getVisible(): boolean;
  /**
   * Set the Visible value in Validation property
   * 
   * This will not cause the UI to rerender. To redraw the form cell, use redraw() on control proxy.
   * @param {boolean} visible Visible value to set
   * @returns {IFormCellValidationProxy}
   */
  setVisible(visible: boolean): IFormCellValidationProxy
  /**
   * Returns SeparatorVisible property value in Validation property. Only supported in iOS and WebClient.
   * @returns {boolean}
   */
  getSeparatorVisible(): boolean;
  /**
   * Set the SeparatorVisible value in Validation property. Only supported in iOS and WebClient.
   * 
   * This will not cause the UI to rerender. To redraw the form cell, use redraw() on control proxy.
   * @param {boolean} separatorVisible separatorVisible value to set
   * @returns {IFormCellValidationProxy}
   */
  setSeparatorVisible(separatorVisible: boolean): IFormCellValidationProxy
  /**
   * Returns Styles property value in Validation property 
   * @returns {any}
   */
  getStyles(): any;
  /**
   * Set the Styles value in Validation property
   * 
   * This will not cause the UI to rerender. To redraw the form cell, use redraw() on control proxy
   * @param {boolean} styles Styles value to set
   * @returns {IFormCellValidationProxy}
   */
  setStyles(styles: any): IFormCellValidationProxy
}

/**
 * A designer-facing interface that provides access to a control container.
 * 
 * It is passed to rules to provide access to a container for 
 * application specific customizations.
 */
interface IControlContainerProxy extends IClientAPI {
  /**
   * @return {string} designer specified caption or the empty string
   */
  getCaption(): string;
  /**
   * Gets the associated control by name.  This is a top-level
   * search and does not drill down into other containers.
   * 
   * @param {string} name The control name specified by the _Name
   * definition property.
   * 
   * @return {any} The control assocated with the name parameter
   */
  getControl(name: string): IControlProxy;
  /**
   * This method returns the top-level controls for this container
   * 
   * @return {IControlProxy[]} The controls for this container 
   */
  getControls(): IControlProxy[];
}

/**
 * A designer-facing interface that provides access to a resetable control container.
 * 
 * It is passed to rules to provide access to a resetable container for 
 * application specific customizations.
 */
 interface IResetableContainerProxy extends IControlContainerProxy {
  /**
   * Reset all FormCell controls in the FormCellContainer
   * @returns {Promise<any>}
   */
   reset(): Promise<any>;
 }


/**
 * A designer-facing interface that provides access to a DurationPicker FormCell
 * control.
 */
 interface IDurationPickerFormCellProxy extends IFormCellProxy {
  
  /**
   * Sets the MinuteInterval property of the FormCell's control.
   * Accepted values are: "Date", "Datetime", "Time"
   * @param {Integer} mode value to set.
   * @returns {Promise<any>}
   */
  setMinuteInterval(mode: number): Promise<any>;

  /**
   * Returns the MinuteInterval property value defined for the FormCell's control.
   * @return {Integer}
   */
  getMinuteInterval(): number;

  /**
   * Sets the Unit property of the FormCell's control.
   * Accepted values are: "Date", "Datetime", "Time"
   * @param mode value to set.
   * @returns {Promise<any>}
   */
  setUnit(mode: string): Promise<any>;

  /**
   * Returns the Unit property value defined for the FormCell's control.
   * @return {string}
   */
  getUnit(): string;
}

/**
 * A designer-facing interface that provides access to a DatePicker formcell
 * control.
 */
 interface IDatePickerFormCellProxy extends IFormCellProxy {
  
  /**
   * Sets the Mode property of the FormCell's control.
   * Accepted values are: "Date", "Datetime","Time"
   * @param mode value to set.
   * @returns {Promise<any>}
   */
  setMode(mode: string): Promise<any>;

  /**
   * Returns the Mode property value defined for the FormCell's control.
   * @return {string}
   */
  getMode(): string;
}

/**
 * A designer-facing interface that provides access to a formcell
 * control.
 * 
 * It is passed to rules to provide access to a formcell control
 * for application specific customizations.
 * 
 * In addition it provides access to the IControlProxy interface.
 */
interface IFormCellProxy extends IControlProxy {
  /**
   * Returns the user provided search string for a ListPicker FormCell
   */
  searchString: string;
  /**
   * Property for viewing and setting the current visible state of the control.
   */
  visible: boolean;
  /**
   * Factory method to construct an instance of DataQueryBuilder
   */
  dataQueryBuilder(query: string): DataQueryBuilder;
  /**
   * Gets the target specifier or undefined
   * 
   * @return {IFormCellTargetProxy}
   */
  getTargetSpecifier(): IFormCellTargetProxy;
  /**
   * Sets the target specifier and redraws the formcell
   * 
   * @param {IFormCellTargetProxy} target
   * @param {boolean} redraw whether to redraw formcell
   * @return {Promise<any>}
   * @throws {Error} if target is incomplete
   */
  setTargetSpecifier(target: IFormCellTargetProxy, redraw?: boolean): Promise<any>;
  /**
   * Get collection of ListPicker Formcell, SegmentedControl  Formcell and Filter  Formcell
   * based on the DisplayValue and ReturnValue
   */
  getCollection(): { DisplayValue: string, ReturnValue: string }[];
  /**
   * Set focus to the formcell (support Title Formcell / SimpleProperty Formcell / Note Formcell)
   * 
   * @param {string} keyboardVisibility This parameter allows you to either show or hide the on-screen keyboard (setting applies only to Android devices, iOS devices will ignore this setting).
   * Available values:
   * - Auto (Default value. Show the on-screen keyboard only if there is no physical or bluetooth keyboard attached to the device)
   * - AlwaysShow
   * - AlwaysHide
   */
  setFocus(keyboardVisibility: string): void;

  /**
   * Clear focus and close keyboard
   */
  clearFocus(): void;

  /**
   * Reset the FormCell control. The function will resolve the FormCell's properties and redraw it
   * The OnValueChange event of the FormCell will not be triggered when resetting the control
   * @returns {Promise<any>}
   */
   reset(): Promise<any>;
   
  /**
   * Sets the Editable property of the FormCell's control.
   * @param {boolean} isEditable true if this form cell is editable. False otherwise.
   * @returns {Promise<any>}
   */
  setEditable(isEditable: boolean): Promise<any>;

  /**
   * Returns the Editable property value defined for the control.
   * @return {boolean}
   */
  getEditable(): boolean;

  /**
   * Sets the Enable property of the FormCell's control.
   * @param {boolean} isEnable true enables and false disables.
   * @returns {Promise<any>}
   */
   setEnable(isEnable: boolean): Promise<any>;

   /**
   * Sets the Enabled property of the FormCell's control.
   * @param {boolean} isEnabled true enables and false disables.
   * @returns {Promise<any>}
   */
  setEnabled(isEnabled: boolean): Promise<any>;

  /**
   * Returns the Enable property value defined for the control.
   * @return {boolean}
   */
  getEnable(): boolean;

  /**
   * Returns the Enabled property value defined for the control.
   * @return {boolean}
   */
  getEnabled(): boolean;

  /**
   * Sets the Caption property of the FormCell's control.
   * @param {string} caption value to set.
   * @returns {Promise<any>}
   */
  setCaption(caption: string): Promise<any>;
  
  /**
   * Returns the Caption property value defined for the control.
   * @return {string}
   */
  getCaption(): string;

  /**
   * Sets the HelperText property of the FormCell's control.
   * @param {string}  helperText value to set.
   * @returns {Promise<any>}
   */
  setHelperText(helperText: string): Promise<any>;

  /**
   * Returns the HelperText property value defined for the control.
   * @return {string}
   */
  getHelperText(): string;

  /**
   * Gets the control's visible state.
   * @returns {boolean} returns true if the control is visible otherwise false. 
   */
  getVisible(): boolean;

  getValidation(): IFormCellValidationProxy;

     /**
   * Sets the RequiredIndicator property of the FormCell's control.
     * Can be either Boolean or a Character. 
     * Defaults to an asterisk `*` if a string longer than 1 character is passed in.
   * @param {string} indicator value to set.
   * @returns {Promise<any>}
   */
   setRequiredIndicator(indicator: string): Promise<any>;

   /**
    * Returns the RequiredIndicator property value defined for the FormCell's control.
    * Can be either Boolean or a String. 
    * @return {string}
    */
   getRequiredIndicator(): string;

   /**
   * Sets the Styles.RequiredIndicator property value defined for the FormCell's control.
   * @param {string} requiredIndicatorStyle Style's classname value to set.
   * @returns {Promise<any>}
   */
  setRequiredIndicatorStyle(requiredIndicatorStyle: string): Promise<any>;

  /**
   * Returns the Styles.RequiredIndicator property value defined for the FormCell's control.
   * @return {string}
   */
  getRequiredIndicatorStyle(): string;

  /**
   * Create an object for attachment entry
   * Note: This function is for iOS & Android only
   *
   * @param attachmentPath the path for the attachment file
   * @param entitySet entity set name
   * @param property the property of the entity set
   * @param readLink readlink string
   * @param service service name
   * @param encodeURI whether the URI need to be encoded, default value is true
   *
   * @returns an object with all information for the attachment entry or undefined if the attachment is invalid
   */
  createAttachmentEntry(attachmentPath: string, entitySet: string, property: string, readLink: string, service: string, encodeURI: boolean): any;
}

/**
 * IMultiSorterFormCellProxy is a developer-facing interface that provides access to a
 * Note control and allows customizations.
 * In addition it provides access to the IFormCellProxy interface.
 */
interface IMultiSorterFormCellProxy extends IFormCellProxy {
  
}

/**
 * NoteFormCellControlProxy is a developer-facing interface that provides access to a
 * Note control and allows customizations.
 * In addition it provides access to the IFormCellProxy interface.
 */
 interface INoteFormCellProxy extends IFormCellProxy {
  
  /**
   * Sets the MaxNumberOfLines property of the FormCell's control.
   * @param {number} maxNumberOfLines value to set.
   * @returns {Promise<any>}
   */
  setMaxNumberOfLines(MaxNumberOfLines: number): Promise<any>;

  /**
   * Returns the MaxNumberOfLines property value defined for the FormCell's control.
   * @return {number}
   */
  getMaxNumberOfLines(): number;

  /**
   * Sets the MinNumberOfLines property of the FormCell's control.
   * @param {number} minNumberOfLines  value to set.
   * @returns {Promise<any>}
   */
  setMinNumberOfLines(minNumberOfLines: number): Promise<any>;

  /**
   * Returns the MinNumberOfLines property value defined for the FormCell's control.
   * @return {number}
   */
  getMinNumberOfLines(): number;

  /**
   * Sets the PlaceHolder property of the FormCell's FormCell's control.
   * @param {string} placeHolder {string} value to set.
   * @returns {Promise<any>}
   */
  setPlaceHolder(title: string): Promise<any>;

  /**
   * Returns the PlaceHolder property value defined for the FormCell's control.
   * @return {string}
   */
  getPlaceHolder(): string 
}

/**
 * InlineSignatureCaptureFormCellProxy is a developer-facing interface that provides access to a
 * InlineSignatureCapture control and allows customizations.
 * In addition it provides access to the IFormCellProxy interface.
 */
 interface IInlineSignatureCaptureFormCellProxy extends IFormCellProxy {

  /**
   * Sets the InitialStatusText property of the FormCell's control.
   * @param {string} initialStatusText  value to set.
   * @returns {Promise<any>}
   */
  setInitialStatusText(initialStatusText: string): Promise<any>;

  /**
   * Returns the InitialStatusText property value defined for the FormCell's control.
   * @return {string}
   */
  getInitialStatusText(): string;

  /**
   * Sets the ShowTimestampInImage property of the FormCell's FormCell's control.
   * On iOS not supported.
   * @param {boolean} showTimestampInImage value to set.
   * @returns {Promise<any>}
   */
  setShowTimestampInImage(showTimestampInImage: boolean): Promise<any>;

  /**
   * Returns the ShowTimestampInImage property value defined for the FormCell's control.
   * On iOS not supported.
   * @return {boolean}
   */
  getShowTimestampInImage(): boolean;

  /**
   * Sets the ShowUnderline property of the FormCell's FormCell's control.
   * On iOS not supported.
   * @param {boolean} showUnderline value to set.
   * @returns {Promise<any>}
   */
  setShowUnderline(Underline: boolean): Promise<any>;

  /**
   * Returns the ShowUnderline property value defined for the FormCell's control.
   * On iOS not supported.
   * @return {boolean}
   */
  getShowUnderline(): boolean;

  /**
   * Sets the ShowXMark property of the FormCell's FormCell's control.
   * On iOS not supported.
   * @param {boolean} showXMark value to set.
   * @returns {Promise<any>}
   */
  setShowXMark(showXMark: boolean): Promise<any>;

  /**
   * Returns the ShowXMark property value defined for the FormCell's control.
   * On iOS not supported.
   * @return {boolean}
   */
  getShowXMark(): boolean

  /**
   * Sets the TimestampFormatter property of the FormCell's control.
   * @param {string} timestampFormatter  value to set.
   * @returns {Promise<any>}
   */
  setTimestampFormatter(timestampFormatter: string): Promise<any>;

  /**
   * Returns the TimestampFormatter property value defined for the FormCell's control.
   * @return {string}
   */
  getTimestampFormatter(): string;

  /**
   * Sets the WatermarkText property of the FormCell's control.
   * @param {string} watermarkText  value to set.
   * @returns {Promise<any>}
   */
  setWatermarkText(watermarkText: string): Promise<any>;

  /**
   * Returns the WatermarkText property value defined for the FormCell's control.
   * @return {string}
   */
  getWatermarkText(): string;

  /**
   * Sets the WatermarkTextMaxLines property of the FormCell's control.
   * @param {number} watermarkTextMaxLines value to set.
   * @returns {Promise<any>}
   */
  setWatermarkTextMaxLines(watermarkTextMaxLines: number): Promise<any>;

  /**
   * Returns the WatermarkTextMaxLines property value defined for the FormCell's control.
   * @return {number}
   */
  getWatermarkTextMaxLines(): number;

}


/**
 * SignatureCaptureFormCellProxy is a developer-facing interface that provides access to a
 * SignatureCapture control and allows customizations.
 * In addition it provides access to the IFormCellProxy interface.
 */
interface ISignatureCaptureFormCellProxy extends IFormCellProxy {

  /**
   * Sets the CapturedStatusText property of the FormCell's control.
   * @param {string} capturedStatusText value to set.
   * @returns {Promise<any>}
   */
  setCapturedStatusText(capturedStatusText: string): Promise<any>;

  /**
   * Returns the CapturedStatusText property value defined for the FormCell's control.
   * @return {string}
   */
  getCapturedStatusText(): string;

  /**
   * Sets the InitialStatusText property of the FormCell's control.
   * @param {string} initialStatusText  value to set.
   * @returns {Promise<any>}
   */
  setInitialStatusText(initialStatusText: string): Promise<any>;

  /**
   * Returns the InitialStatusText property value defined for the FormCell's control.
   * @return {string}
   */
  getInitialStatusText(): string;

  /**
   * Sets the ShowTimestampInImage property of the FormCell's FormCell's control.
   * @param {boolean} showTimestampInImage value to set.
   * @returns {Promise<any>}
   */
  setShowTimestampInImage(showTimestampInImage: boolean): Promise<any>;

  /**
   * Returns the ShowTimestampInImage property value defined for the FormCell's control.
   * @return {boolean}
   */
  getShowTimestampInImage(): boolean;

  /**
   * Sets the ShowUnderline property of the FormCell's FormCell's control.
   * @param {boolean} showUnderline value to set.
   * @returns {Promise<any>}
   */
  setShowUnderline(Underline: boolean): Promise<any>;

  /**
   * Returns the ShowUnderline property value defined for the FormCell's control.
   * @return {boolean}
   */
  getShowUnderline(): boolean;

  /**
   * Sets the ShowXMark property of the FormCell's FormCell's control.
   * @param {boolean} showXMark value to set.
   * @returns {Promise<any>}
   */
  setShowXMark(showXMark: boolean): Promise<any>;

  /**
   * Returns the ShowXMark property value defined for the FormCell's control.
   * @return {boolean}
   */
  getShowXMark(): boolean

  /**
   * Sets the TimestampFormatter property of the FormCell's control.
   * @param {string} timestampFormatter  value to set.
   * @returns {Promise<any>}
   */
  setTimestampFormatter(timestampFormatter: string): Promise<any>;

  /**
   * Returns the TimestampFormatter property value defined for the FormCell's control.
   * @return {string}
   */
  getTimestampFormatter(): string;

  /**
   * Sets the WatermarkText property of the FormCell's control.
   * @param {string} watermarkText  value to set.
   * @returns {Promise<any>}
   */
  setWatermarkText(watermarkText: string): Promise<any>;

  /**
   * Returns the WatermarkText property value defined for the FormCell's control.
   * @return {string}
   */
  getWatermarkText(): string;

  /**
   * Sets the WatermarkTextMaxLines property of the FormCell's control.
   * @param {number} watermarkTextMaxLines value to set.
   * @returns {Promise<any>}
   */
  setWatermarkTextMaxLines(watermarkTextMaxLines: number): Promise<any>;

  /**
   * Returns the WatermarkTextMaxLines property value defined for the FormCell's control.
   * @return {number}
   */
  getWatermarkTextMaxLines(): number;

}

/**
 * AttachmentFormCellProxy is a developer-facing interface that provides access to a
 * Attachment control and allows customizations.
 * In addition it provides access to the IFormCellProxy interface.
 */
 interface IAttachmentFormCellProxy extends IFormCellProxy {
  
   /** 
   * This method is for setting the title of the attachment container, i.e. for changing 
   * the value of the AttachmentTitle property. The default value is 'Attachment (%d)', where %d
   * is substituted by tha actual count of the attachments.
   * @param {string} title value to set.
   * @returns {Promise<any>}
   */
    setAttachmentTitle(title: string): Promise<any>;
  
    /**
     * Returns the AttachmentTitle property value defined for the FormCell's control.
     * @return {string}
     */
    getAttachmentTitle(): string;
  
    /**
     * This method is for setting the title bar of the add attachment menu, i.e. for 
     * changing the value of the AttachmentAddTitle property. The default value is 'Add Attachment'.
     * @param {string} addTitle value to set.
     * @returns {Promise<any>}
     */
    setAttachmentAddTitle(addTitle: string): Promise<any>;
  
    /**
     * Returns the AttachmentAddTitle property value defined for the FormCell's control.
     * @return {string}
     */
    getAttachmentAddTitle(): string;
  
    /**
     * This method is for setting the title of the cancel button on the add attachment menu, i.e. for changing 
     * the value of the AttachmentCancelTitle property. The default value is 'Cancel'.
     * @param {string} cancelTitle value to set.
     * @returns {Promise<any>}
     */
    setAttachmentCancelTitle(cancelTitle: string): Promise<any>;
  
    /**
     * Returns the AttachmentCancelTitle property value defined for the FormCell's control.
     * @return {string}
     */
    getAttachmentCancelTitle(): string;
  
    /**
     * This method is for setting the attachment action types, i.e. for changing 
     * the value of the AttachmentActionType property. Currently just the photo library and the camera
     * are supported as attachment sources, so the value can contain just the values 'AddPhoto'
     * and/or "TakePhoto" and/or "SelectFile".
     * @param {string[]} fileType value to set.
     * @returns {Promise<any>}
     */
    setAttachmentActionType(actionType: [string]): Promise<any>;
  
    /**
     * Returns the AttachmentActionType property value defined for the FormCell's control.
     * @return {string[]}
     */
    getAttachmentActionType(): string[];
  
    /**
     * This method is for setting the attachment allowed file types, i.e.  
     * If no specified value for this the AllowedFileTypes property, it allow user select any type of file;
     * this property can contain the values just like ["pdf","jpg", "..."].
     * @param {string[]} fileType value to set.
     * @returns {Promise<any>}
     */
    setAllowedFileTypes(fileType: [string]): Promise<any>;
  
    /**
     * Returns the AllowedFileTypes property value defined for the FormCell's control.
     * @return {string[]}
     */
    getAllowedFileTypes(): string[];

    /**
    * Sets the maximum number of attachments that can be uploaded.
    * @returns {Promise<any>}
    */
   setMaxAttachments(maxNumber: number): Promise<any>;

  /**
   * Returns the maximum number of attachments that can be uploaded.
   * @return {number}
   */
   getMaxAttachments(): number;

   /**
   * Sets the maximum file size (in megabytes) allowed for each attachment.
   * @returns {Promise<any>}
   */
   setMaxFileSize(maxNumber: number): Promise<any>;

   /**
   * Returns the maximum file size (in megabytes) allowed for each attachment.
   * @return {number}
   */
   getMaxFileSize(): number;

    /**
     * Open the item of the specified attachment at given index
     * @param index The index of the item
     */
    openAttachmentItem(index: number);

    /**
     * Set the item's value in the attachment control.
     * The value should be generated from: [FormCellControlProxy.createAttachmentEntry()](../../../reference/apidoc/classes/formcellcontrolproxy.html#createattachmententry) or [AttachmentEntryProxy.createAttachmentEntry()](../../../reference/apidoc/classes/attachmententryproxy.html#createattachmententry)
     * @param value value to be set
     * @param index The index of the item
     * @param notify whether to send the notification
     * @returns {IControlProxy} this - allows chaining
     */
    setValueByIndex(value: any, index: number, notify?: boolean);
}

/**
 * A designer-facing interface that provides access to an item of attachmen control.
 */
interface IAttachmentEntryProxy extends IElementProxy {
  /**
   * Get item value (Read-Only).
   * The value is in accordance with the interface [IAttachment](../../../reference/apidoc/interfaces/iattachment.html) definition.
   * @return {any} the value of the item
   */
  getValue(): any;

  /**
   * Set the new value in the item.
   * The value should be generated from: [FormCellControlProxy.createAttachmentEntry()](../../../reference/apidoc/classes/formcellcontrolproxy.html#createattachmententry) or [AttachmentEntryProxy.createAttachmentEntry()](../../../reference/apidoc/classes/attachmententryproxy.html#createattachmententry)
   * @param value value to be set
   * @param notify whether to send the notification
   * @returns {IControlProxy} this - allows chaining
   */
  setValue(value: any, notify?: boolean);

  /**
   * This method returns AttachmentFormCell proxy
   * @return {IAttachmentFormCellProxy}
   */
  getParent(): IAttachmentFormCellProxy;

  /**
   * Get index
   * @return {number}
   */
  getIndex(): number;

  /**
   * @returns {IPageProxy} the Page, which the control belongs to 
   */
  getPageProxy(): IPageProxy;

  /**
   * Open the item of the specified attachment
   */
  open(): void;

  /**
   * Create an object for attachment entry
   * Note: This function is for iOS & Android only
   *
   * @param attachmentPath the path for the attachment file
   * @param entitySet entity set name
   * @param property the property of the entity set
   * @param readLink readlink string
   * @param service service name
   * @param encodeURI whether the URI need to be encoded, default value is true
   *
   * @returns an object with all information for the attachment entry or undefined if the attachment is invalid
   */
  createAttachmentEntry(attachmentPath: string, entitySet: string, property: string, readLink: string, service: string, encodeURI: boolean): any;
}

/**
 * ButtonFormCellControlProxy is a developer-facing interface that provides access to a
 * button control and allows customizations.
 * In addition it provides access to the IFormCellProxy interface.
 */
 interface IButtonFormCellProxy extends IFormCellProxy {
  
  /**
   * Sets the ButtonType property of the FormCell's control.
   * Accepted values are: "Button", "Normal".
   * @param {string} type value to set.
   * @returns {Promise<any>}
   */
  setButtonType(type: string): Promise<any>;

  /**
   * Returns the ButtonType property value defined for the FormCell's control.
   * @return {string}
   */
  getButtonType(): string;

  /**
   * Sets the TextAlignment property of the FormCell's control.
   * Accepted values are: "left", "right", "center".
   * @param {string} alignment  value to set.
   * @returns {Promise<any>}
   */
  setTextAlignment(alignment: string): Promise<any>;

  /**
   * Returns the TextAlignment property value defined for the FormCell's control.
   * @return {string}
   */
  getTextAlignment(): string;

  /**
   * Sets the Title property of the FormCell's FormCell's control.
   * @param {string} title {string} value to set.
   * @returns {Promise<any>}
   */
  setTitle(title: string): Promise<any>;

  /**
   * Returns the Title property value defined for the FormCell's control.
   * @return {string}
   */
  getTitle(): string 

  /**
   * Sets the Image property of the Button FormCell's   control.
   * @param {string} image {string} value to set.
   * @returns {Promise<any>}
   */
  setImage(image: string): Promise<any>;

  /**
   * Returns the Image property value defined for the FormCell's control.
   * @return {string}
   */
  getImage(): string;
 
  /**
   * Sets the Semantic property of the Button FormCell's control.
   * @param {string} semantic {string} value to set.
   * @returns {Promise<any>}
   */
  setSemantic(semantic: string): Promise<any>;
 
  /**
   * Returns the Semantic property value defined for the Button FormCell's control.
   * @return {string}
   */
  getSemantic(): string;
 
  /**
   * Sets the ImagePosition property of the Button FormCell's control.
   * @param {string} imagePosition {string} value to set.
   * @returns {Promise<any>}
   */
  setImagePosition(imagePosition: string): Promise<any>;
 
  /**
   * Returns the ImagePosition property value defined for the Button FormCell's control.
   * @return {string}
   */
  getImagePosition(): string;

  /**
   * Sets the ImageSize property of the Button FormCell's control.
   * @param {Object} imageSize {Object} value to set.
   * @returns {Promise<any>}
   */
  setImageSize(imageSize: Object): Promise<any>;

  /**
   * Returns the ImageSize property value defined for the Button FormCell's control.
   * @return {Object}
   */
  getImageSize(): Object;
}


/**
 * ITitleFormCellProxy is a developer-facing interface that provides access to a
 * Title control and allows customizations.
 * In addition it provides access to the IFormCellProxy interface.
 */
interface ITitleFormCellProxy extends IFormCellProxy {
  
  /**
   * Sets the PlaceHolder property value defined for the FormCell's control.
   * @param {string} placeHolder value to set.
   * @returns {Promise<any>}
   */
  setPlaceHolder(placeHolder: string): Promise<any>;

  /**
   * Returns the PlaceHolder property value defined for the FormCell's control.
   * @return {string}
   */
  getPlaceHolder(): string;
}

/**
 * A designer-facing interface that provides access to a Extension control and allows customizations.
 * In addition it provides access to the IFormCellProxy interface.
 */
interface IExtensionFormCellProxy extends IFormCellProxy {
  /**
   * Returns the instance of extension that this control is using.
   * @return {IView}
   */
  getExtension(): IView;
}

/**
 * SimplePropertyFormCellControlProxy is a developer-facing interface that provides access to a
 * SimpleProperty control and allows customizations.
 * In addition it provides access to the IFormCellProxy interface.
 */
interface ISimplePropertyFormCellProxy extends IFormCellProxy {
  
  /**
   * Sets the AlternateInput property of the FormCell's control.
   * Accepted values are: "None", "Barcode".
   * @param {string} alternateInput value to set.
   * @returns {Promise<any>}
   */
   setAlternateInput(alternateInput: string): Promise<any>;

  /**
   * Returns the AlternateInput property value defined for the FormCell's control.
   * @return {string}
   */
   getAlternateInput(): string;

  /**
   * Sets the KeyboardType property of the FormCell's control.
   * Accepted values are:  "DateTime", "Default", "Email", "Number", "Phone", "Url","Password", "NumberPassword"
   * @param {string} keyboardType  value to set.
   * @returns {Promise<any>}
   */
   setKeyboardType(keyboardType: string): Promise<any>;

  /**
   * Returns the KeyboardType property of the FormCell's FormCell's control.
   * @param {string}
   */
   getKeyboardType(): void;

  /**
   * Sets the PlaceHolder property value defined for the FormCell's control.
   * @param {string} placeHolder value to set.
   * @returns {Promise<any>}
   */
  setPlaceHolder(placeHolder: string): Promise<any>;

  /**
   * Returns the PlaceHolder property value defined for the FormCell's control.
   * @return {string}
   */
  getPlaceHolder(): string;
}

/**
 * SegmentedFormCellControlProxy is a developer-facing interface that provides access to a
 * Segmented control and allows customizations.
 * In addition it provides access to the IFormCellProxy interface.
 */
interface ISegmentedFormCellProxy extends IFormCellProxy {
  
  /**
   * Sets the ApportionsSegmentWidthsByContent property of the FormCell's control.
   * @param {boolean} apportionsSegmentWidthsByContent value to set.
   * @returns {Promise<any>}
   */
  setApportionsSegmentWidthsByContent(apportionsSegmentWidthsByContent: boolean): Promise<any>;

  /**
   * Returns the ApportionsSegmentWidthsByContent property value defined for the FormCell's control.
   * @return {boolean}
   */
  getApportionsSegmentWidthsByContent(): boolean;

  /**
   * Sets the Segments property of the FormCell's control.
   * @param {any} segments  value to set.
   * @returns {Promise<any>}
   */
  setSegments(segments: any): Promise<any>;

  /**
   * Returns the Segments property of the FormCell's FormCell's control.
   * @param {any}
   */
  getSegments(): any;

  /**
   * Sets the CaptionPosition property of the FormCell's control.
   * @param {string} captionPosition value to set.
   * @returns {Promise<any>}
   */
  setCaptionPosition(captionPosition: string): Promise<any>;

  /**
   * Returns the CaptionPosition property value defined for the FormCell's control.
   * @return {string}
   */
  getCaptionPosition(): string;
}

/**
 * A designer-facing interface that provides access a target.
 * 
 * It is passed to rules to provide access to a target
 * for application specific customizations.
 */
interface ITargetProxy {
  /**
   * Get the target EntitySet name
   * @return {string} 
   */
  getEntitySet(): string;
  /**
   * Get the target Function name.
   * @return {any} 
   */
  getFunction(): any;
  /** 
   * Get the target OutputPath.
   * @return {string} 
   */
   getOutputPath(): string;
   /**
    * Get the target path.
    * @return {string} 
    */
   getPath(): string;
  /**
   * Get the target QueryOptions.
   * @return {string}
   */
  getQueryOptions(): string;
    /**
   * Get the target ReadLink.
   * @return {string}
   */
     getReadLink(): string;
     /**
      * Get the target RequestProperties.
      * @return {any} 
      */
     getRequestProperties(): any;
  /**
   * Get the target ServerSidePaging.
   * @return {boolean}
   */
  getServerSidePaging(): boolean;
  /**  
   * Get the target Service name.
   * @return {string}
   */
  getService(): string;
  /**
   * set the target EntitySet
   * @param {string} value the target EnittySet name
   * @return {ITargetProxy} this - allows chaining
   */
  setEntitySet(value: string);
  /**
   * @param {any} value the target Function name
   * @return {ITargetProxy} this - allows chaining
   */
  setFunction(value: any);
  /**
   * @param {string} value the target OutputPath
   * @return {ITargetProxy} this - allows chaining
   */
   setOutputPath(value: string);
   /**
    * @param {string} value the target Path
    * @return {ITargetProxy} this - allows chaining
    */
   setPath(value: string);
   /**
    * @param {string} value the target QueryOptions
    * @return {ITargetProxy} this - allows chaining
   */
  setQueryOptions(value: string);
  /**
   * @param {string} value the target ReadLink
   * @return {ITargetProxy} this - allows chaining
   */
   setReadLink(value: string);
   /**
    * @param {any} value the target RequestProperties
    * @return {ITargetProxy} this - allows chaining
    */
   setRequestProperties(value: any);
   /**
    * @param {boolean} value the target ServerSidePaging
    * @return {ITargetProxy} this - allows chaining
   */
  setServerSidePaging(value: boolean);
    /**
   * @param {string} value the target Service name
   * @return {ITargetProxy} this - allows chaining
   */
     setService(value: string);
}

/**
 * A designer-facing interface that provides access to a formcell's target.
 * It is passed to rules to provide access to a formcell's target
 * for application specific customizations.
 */
 interface IFormCellTargetProxy extends ITargetProxy {
  /**
   * @return {string}
   */
  getDisplayValue(): string;
  /**
   * @return {string}
   */
  getReturnValue(): string;
  /**
   * @param {string}
   */
  setDisplayValue(value: string);
  /**
   * @param {string} 
   */
  setReturnValue(value: string);
}

interface IListPickerFormCellTargetProxy extends IFormCellTargetProxy {
  /**
   * @return {any}
   */
  getObjectCell(): any;
  /**
   * @param {any}
   */
  setObjectCell(value: any);
}

/**
 * ListPickerFormCellProxy is a developer-facing interface that provides access to a
 * ListPicker control and allows customizations.
 * In addition it provides access to the IFormCellProxy interface.
 */

 interface IListPickerFormCellProxy extends IFormCellProxy {

  /**
   * Sets the AllowDefaultValueIfOneItem property of the FormCell's control.
   * @param {boolean} allowDefaultValueIfOneItem value to set.
   * @returns {Promise<any>}
   */
  setAllowDefaultValueIfOneItem(allowDefaultValueIfOneItem: boolean): Promise<any>;

  /**
   * Returns the AllowDefaultValueIfOneItem property value defined for the FormCell's control.
   * @return {boolean}
   */
  getAllowDefaultValueIfOneItem(): boolean;

  /**
   * Sets the AllowEmptySelection property of the FormCell's control.
   * @param {boolean} allowEmptySelection value to set.
   * @returns {Promise<any>}
   */
  setAllowEmptySelection(allowEmptySelection: boolean): Promise<any>;

  /**
   * Returns the AllowEmptySelection property value defined for the FormCell's control.
   * @return {boolean}
   */
  getAllowEmptySelection(): boolean;

  /**
   * Sets the AllowMultipleSelection property of the FormCell's control.
   * @param {boolean} allowMultipleSelection value to set.
   * @returns {Promise<any>}
   */
  setAllowMultipleSelection(allowMultipleSelection: boolean): Promise<any>;

  /**
   * Returns the AllowMultipleSelection property value defined for the FormCell's control.
   * @return {boolean}
   */
  getAllowMultipleSelection(): boolean;

  /**
   * Sets the DataPaging property of the FormCell's control.
   * @param {Object} dataPaging value to set.
   * @returns {Promise<any>}
   */
  setDataPaging(dataPaging: Object): Promise<any>;

  /**
   * Returns the DataPaging property value defined for the FormCell's control.
   * @return {Object}
   */
  getDataPaging(): Object;

  /**
   * Sets the FilterProperty property of the FormCell's control.
   * @param {string} filterProperty value to set.
   * @returns {Promise<any>}
   */
  setFilterProperty(filterProperty: string): Promise<any>;

  /**
   * Returns the FilterProperty property value defined for the FormCell's control.
   * @return {string}
   */
  getFilterProperty(): string;

  /**
   * Sets the FilterValue property of the FormCell's control.
   * @param {string[]} filterValue value to set.
   * @returns {Promise<any>}
   */
  setFilterValue(filterValue: string[]): Promise<any>;

  /**
   * Returns the FilterValue property value defined for the FormCell's control.
   * @return {string[]}
   */
  getFilterValue(): string[];

  /**
   * Sets the IsPickerDismissedOnSelection property of the FormCell's control.
   * @param {boolean} isPickerDismissedOnSelection value to set.
   * @returns {Promise<any>}
   */
  setIsPickerDismissedOnSelection(isPickerDismissedOnSelection: boolean): Promise<any>;

  /**
   * Returns the IsPickerDismissedOnSelection property value defined for the FormCell's control.
   * @return {boolean}
   */
  getIsPickerDismissedOnSelection(): boolean;

  /**
   * Sets the IsSearchCancelledAfterSelection property of the FormCell's control.
   * @param {boolean} isSearchCancelledAfterSelection value to set.
   * @returns {Promise<any>}
   */
  setIsSearchCancelledAfterSelection(alternateInput: boolean): Promise<any>;

  /**
   * Returns the IsSearchCancelledAfterSelection property value defined for the FormCell's control.
   * @return {boolean}
   */
  getIsSearchCancelledAfterSelection(): boolean;

  /**
   * Sets the IsSelectedSectionEnabled property of the FormCell's control.
   * @param {boolean} isSelectedSectionEnabled value to set.
   * @returns {Promise<any>}
   */

  setIsSelectedSectionEnabled(isSelectedSectionEnabled: boolean): Promise<any>;

  /**
   * Returns the IsSelectedSectionEnabled property value defined for the FormCell's control.
   * @return {boolean}
   */
  getIsSelectedSectionEnabled(): boolean;

  /**
   * Sets the PickerItems property of the FormCell's control.
   * @param {any} pickerItems value to set.
   * @returns {Promise<any>}
   */
  setPickerItems(pickerItems: any): Promise<any>;

  /**
   * Returns the PickerItems property value defined for the FormCell's control.
   * @return {any}
   */
  getPickerItems(): any;

  /**
   * Sets the PickerPrompt property of the FormCell's control.
   * @param {string} pickerPrompt value to set.
   * @returns {Promise<any>}
   */
  setPickerPrompt(pickerPrompt: string): Promise<any>;

  /**
   * Returns the PickerPrompt property value defined for the FormCell's control.
   * @return {string}
   */
  getPickerPrompt(): string;

  /**
   * Sets the PlaceHolder property of the FormCell's FormCell's control.
   * @param {string} placeHolder {string} value to set.
   * @returns {Promise<any>}
   */
  setPlaceHolder(title: string): Promise<any>;

  /**
   * Returns the PlaceHolder property value defined for the FormCell's control.
   * @return {string}
   */
  getPlaceHolder(): string

  /**
   * Sets the Search property of the FormCell's control.
   * @param {ISearch} search value to set.
   * @returns {Promise<any>}
   */
  setSearch(search: ISearch): Promise<any>;

  /**
   * Returns the Search property value defined for the FormCell's control.
   * @return {ISearch}
   */
  getSearch(): ISearch;

  /**
   * Returns the list of selected items as JavaScript Objects, each with ReturnValue and DisplayValue properties. 
   * If the ListPicker is bound to an entity set, 
   * each item will have a BindingObject property containing the full associated binding object.
   * @return {Object[]}
   */
  getValue(): Object[];
}

/**
 * AIFeedbackFormCellProxy is a developer-facing interface that provides access to an
 * AIFeedback control and allows customizations. In addition, it provides access
 * to the IFormCellProxy interface.
 *
 * @example
 * ```javascript
 * // Basic usage - React to vote changes and apply styling based on the current value
 * export default function OnAIFeedbackValueChange(context) {
 *   const currentValue = context.getValue(); // "None", "Up", or "Down"
 *
 *   if (currentValue === 'Up') {
 *     context.setCaption('Thanks for your positive feedback!');
 *     context.setStyle('aiFeedbackPositive', 'VoteButtons');
 *   } else if (currentValue === 'Down') {
 *     context.setCaption('Sorry to hear that. How can we improve?');
 *     context.setStyle('aiFeedbackNegative', 'VoteButtons');
 *   } else {
 *     context.setCaption('Was this response helpful?');
 *     context.setStyle('aiFeedbackDefault', 'VoteButtons');
 *   }
 * }
 * ```
 */
export interface IAIFeedbackFormCellProxy extends IFormCellProxy {

  /**
   * Returns the Caption property value defined for the AIFeedback FormCell's control.
   * @return {string}
   *
   * @example
   * ```javascript
   * const caption = context.getCaption();
   * console.log(caption); // e.g. "Was this response helpful?"
   * ```
   */
  getCaption(): string;

  /**
   * Sets the Caption property of the AIFeedback FormCell's control.
   * @param {string} caption value to set.
   * @returns {Promise<any>}
   *
   * @example
   * ```javascript
   * context.setCaption('Rate this AI response');
   * ```
   */
  setCaption(caption: string): Promise<any>;

  /**
   * Returns the current value of the AIFeedback FormCell's control.
   * Possible values are: "None", "Up", "Down".
   * @return {string}
   *
   * @example
   * ```javascript
   * const vote = context.getValue();
   * console.log(vote); // e.g. "None", "Up", or "Down"
   * ```
   */
  getValue(): string;

  /**
   * Sets the value of the AIFeedback FormCell's control.
   * Accepted values are: "None", "Up", "Down" (case-sensitive).
   * If an invalid value is provided (e.g. "Upp" or "up"), it will be
   * silently reset to "None".
   * @param {string} value value to set.
   * @param {boolean} notify whether to trigger the OnValueChange event on the FormCell's control.
   *
   * @example
   * ```javascript
   * // Set vote to "Up" and trigger OnValueChange
   * context.setValue('Up', true);
   * // Set vote to "Down" without triggering OnValueChange
   * context.setValue('Down', false);
   * // Invalid values fall back to "None"
   * context.setValue('up', true); // treated as "None" (case-sensitive)
   * ```
   */
  setValue(value: string, notify?: boolean);

  /**
   * Returns the current style classes applied to the AIFeedback FormCell's control.
   * @return {string}
   *
   * @example
   * ```javascript
   * const style = context.getStyle();
   * console.log(style); // e.g. '{"Background":"bgClass","Caption":"capClass","VoteButtons":"btnClass"}'
   * ```
   */
  getStyle(): string;

  /**
   * Sets the style of the AIFeedback FormCell's control.
   * Supported target values are: "Background", "Caption", "VoteButtons".
   * When no target is specified, the style is applied to the entire control.
   * @param {string} styleClass the style class name or JSON string.
   * @param {string} target optional target sub-view to apply the style to.
   *
   * @example
   * ```javascript
   * // Apply style to specific sub-view
   * context.setStyle('feedbackCaption', 'Caption');
   * // Apply style to the entire control
   * context.setStyle('feedbackContainer');
   * ```
   */
  setStyle(styleClass: string, target?: string);
}

/**
 * LabelFormCellProxy is a developer-facing interface that provides access to a
 * Label control and allows customizations.
 * In addition it provides access to the IFormCellProxy interface.
 */
interface ILabelFormCellProxy extends IFormCellProxy {

  /**
   * Returns the text value of the Label FormCell.
   * @return {string}
   */
  getText(): string;

  /**
   * Sets the text value of the Label FormCell.
   * @param {string} text value to set.
   * @returns {Promise<any>}
   */
  setText(text: string): Promise<any>;

  /**
   * Returns the textWrap property value of the Label FormCell.
   * @return {boolean}
   */
  getTextWrap(): boolean;

  /**
   * Sets the textWrap property of the Label FormCell.
   * @param {boolean} textWrap value to set.
   * @returns {Promise<any>}
   */
  setTextWrap(textWrap: boolean): Promise<any>;

  /**
   * Returns the maxLines property value of the Label FormCell.
   * @return {number}
   */
  getMaxLines(): number;

  /**
   * Sets the maxLines property of the Label FormCell.
   * @param {number} maxLines value to set.
   * @returns {Promise<any>}
   */
  setMaxLines(maxLines: number): Promise<any>;

  /**
   * Returns the style class value of the Label FormCell.
   * @return {string}
   */
  getStyle(): string;

  /**
   * Sets the style class of the Label FormCell.
   * @param {string} styleClass value to set.
   */
  setStyle(styleClass: string);
}

export interface IStepperFormCellProxy extends IFormCellProxy {

  /**
   * Returns the numeric value of the Stepper FormCell.
   * @return {number}
   */
  getValue(): number;

  // /**
  //  * Sets the numeric value of the Stepper FormCell.
  //  * @param {number} value to set.
  //  * @returns {Promise<any>}
  //  */
  // setValue(value: number): this;

  /**
   * Returns the minimum property value of the Stepper FormCell.
   * @return {boolean}
   */
  getMinValue(): number

  /**
   * Sets the minValue property of the Stepper FormCell.
   * @param {number} minValue value to set.
   * @returns {Promise<any>}
   */
  setMinValue(maxValue: number): Promise<any>;

  /**
   * Returns the maximum property value of the Stepper FormCell.
   * @return {number}
   */
  getMaxValue(): number

    /**
   * Sets the maxValue property of the Stepper FormCell.
   * @param {number} step value to set.
   * @returns {Promise<any>}
   */
  setMaxValue(maxValue: number): Promise<any>;

  /**
   * Returns the step property value of the Stepper FormCell.
   * @return {number}
   */
  getStepValue(): number

    /**
   * Sets the step property of the Stepper FormCell.
   * @param {number} step value to set.
   * @returns {Promise<any>}
   */
  setStepValue(step: number): Promise<any>;

  /**
   * Returns the incrementIcon property value of the Stepper FormCell.
   * @return {string}
   */
  getIncrementIcon(): string

    /**
   * Sets the incrementIcon property of the Stepper FormCell.
   * @param {string} step value to set.
   * @returns {Promise<any>}
   */
  setIncrementIcon(icon: string): Promise<any>;

  /**
   * Returns the decimalPlacesSupported property value of the Stepper FormCell.
   * @return {number}
   */
  getDecimalPlacesSupported(): number;

    /**
   * Sets the decimalPlacesSupported property of the Stepper FormCell.
   * @param {number} decimalPlaces value to set.
   * @returns {Promise<any>}
   */
  setDecimalPlacesSupported(decimalPlaces: number):  Promise<any>;

  /**
   * Returns the style class value of the Label FormCell.
   * @return {string}
   */
  getStyle(): string;

  /**
   * Sets the style class of the Label FormCell.
   * @param {string} styleClass value to set.
   */
  setStyle(styleClass: string);
}

/**
 * ClientAPI used if the current context is a page.
 */
interface IPageProxy extends IControlContainerProxy {
  /**
   * Set the binding that is being used by the current action
   */
  getActionBinding(): any;
  /**
   * return the control, toolbar item or action bar item that was most recently pressed on this page.
   */
  getPressedItem(): PressedItem;

  /**
   * return the name passed into this page.
   */
  getName(): string;

  /**
   * return the most recently swipe item on this page.
   */
   getExecutedContextMenuItem(): ContextItem;

  /**
   * After running a CheckRequiredFields action, 
   * this method is to return a list of any controls whose value were found to be missing when required.
   */
  getMissingRequiredControls(): Object[];
  /** 
   * Set the binding to be used by the current action.  For example, a navigation would set this to pass on 
   * the binding for the next page which is navigated to.
   */ 
  setActionBinding(binding: Object);
  /**
   * @param {string} caption new caption value
   */
  setCaption(caption: string);
  /**
   * Get the global side drawer control proxy
   */
   getGlobalSideDrawerControlProxy(): ISideDrawerControlProxy;
   /**
    * Apply styles to a control
    * 
    * @param styleClass The name of the style class to be applied
    * @param subControl The name of the control to apply the style to. 
    * It could be either 'ActionBar' or 'ToolBar'.
    * If this is '', the style is applied to the entire page.
    * @returns this for chaining
    * 
    * See Styles/ docs for details.
    */
  setStyle(styleClass: string, subControl: string);
  /**
   * Asynchronously apply a new caption to a toolbar item on page
   * 
   * @param toolbarItemName the name of the item to modify caption 
   * @param newCaption  the new caption
   */
  setToolbarItemCaption(toolbarItemName: string, newCaption: string): Promise<any>;
  /**
   * 
   * @returns {IToolbarProxy} return the ToolbarProxy instance
   * of the associated toolbar of that page
   */
  getToolbar(): IToolbarProxy;
  /**
   * 
   * @returns {IToolbarProxy} return the ToolbarProxy instance
   * of the associated toolbar of that page
   */
  getFioriToolbar(): IFioriToolbarProxy;
  /**
   * 
   * @returns {IActionBarProxy} return the ActionBarProxy instance
   * of the associated actionbar of that page
   */
  getActionBar(): IActionBarProxy;
  /**
   * Set specified actionBar item on page to visible/hidden
   * 
   * @param item either an number or a string 
   * the number is the position of the item.(zero based, first item on actionBar is 0 and second is 1 etc.) 
   * the string is the _Name parameter of the action item
   * @param visibleFlag if true set item to visible else hidden.
   */
  setActionBarItemVisible(item: number, visibleFlag: boolean);
  /**
   * Redraw the page
   */
  redraw();
  /**
   * @returns {IPageProxy} the Page self 
   */
  getPageProxy(): IPageProxy;

  /**
   * Executes rule specified as page level custom event.
   * @param eventType can be used to describe the current event.
   * @param eventData Data that is passed to the associated rule.
   * @returns {Promise<any>}
   */
   executeCustomEvent(eventType: string, eventData: any);
}

/**
 * A designer-facing interface that provides access to a actionbar
 * control.
 * 
 * It is passed to rules to provide access to a actionbar control
 * for application specific customizations.
 * 
 * In addition it provides access to the IControlProxy interface.
 */
interface IActionBarProxy extends IControlProxy {
  /**
   * This method returns the top-level controls of ActionBar Items for this container
   *
   * @return {IActionBarItemProxy[]} The actionbar items controls for this container
   */
  getItems(): IActionBarItemProxy[];

  /**
   * 
   * @param itemName takes in _Name property of the actionbar item
   * @returns {IActionBarItemProxy} returns the ActionBarItemProxy
   * instance of the item by the name
   */
  getItem(itemName: string): IActionBarItemProxy;

  /**
   * Determine if the actionbar control is a container.
   *
   * @returns {boolean} true/false.
   */
  isContainer(): boolean;

  /**
   * Sets the caption property of the actionbar control.
   * @param {string} caption {string} value to set.
   */
  setCaption(caption: string): void;

  /**
   * Returns the Caption property value defined for the actionbar control.
   * @return {string}
   */
  getCaption(): string;

  /**
   * Sets the subhead property of the actionbar control.
   * @param {string} subhead {string} value to set.
   */
  setSubhead(subhead: string): void;

  /**
   * Returns the Subhead property value defined for the actionbar control.
   * @return {string}
   */
  getSubhead(): string;

  /**
   * Sets the prefersLargeCaption property of the actionbar control.
   * @deprecated - use the [setPreferredCaptionSize] instead
   * @param {boolean} prefersLargeCaption {boolean} value to set.
   */
  setPrefersLargeCaption(prefersLargeCaption: boolean): void;

  /**
   * Returns the prefersLargeCaption property value defined for the actionbar control.
   * @deprecated - use the [setPreferredCaptionSize] instead
   * @return {boolean}
   */
  getPrefersLargeCaption(): boolean;

  /**
   * Sets the PreferredCaptionSize property of the actionbar control.
   * @param {string} preferredCaptionSize {string} value to set.
   */
  setPreferredCaptionSize(preferredCaptionSize: string): void;

  /**
   * Returns the PrefersLargeCaption property value defined for the actionbar control.
   * @return {boolean}
   */
  getPreferredCaptionSize(): string;
  
  /**
   * Android only. Sets the captionAlignment property of the actionbar control.
   * Accepted values are: "Left", "Center".
   * @param {string} captionAlignment {string} value to set.
   */
  setCaptionAlignment(captionAlignment: string): void;

  /**
   * Android only. Returns the captionAlignment property value defined for the actionbar control.
   * @return {string}
   */
  getCaptionAlignment(): string;

  /**
   * iOS only. Sets the OverflowIcon property of the fiori actionbar control.
   * @param {string} overflowIcon {string} value to set.
   */
  setOverflowIcon(overflowIcon: string): void;

  /**
   * iOS only. Returns the Image property value defined for the control.
   * @return {string}
   */
  getOverflowIcon(): string;

  /**
   * Sets the logo property of the fiori toolbar control.
   * @param {string} logo {string} value to set.
   */
  setLogo(logo: string): void;

  /**
   * Returns the Logo property value defined for the control.
   * @return {string}
   */
  getLogo(): string;

   /**
   * Sets the DataSubscriptions property of the toolbar control.
   * @param {string[]} dataSubscriptions {string[]} value to set.
   */
   setDataSubscriptions(dataSubscriptions: string[]): void;

   /**
    * Returns the DataSubscriptions property value defined for the toolbar control.
    * @return {string[]}
    */
   getDataSubscriptions(): string[];

   /**
   * Reset ActionBar and its items
   * @returns {Promise<any>}
   */
  reset(): Promise<any>;

  /**
    * Returns the style property value defined for the actionbar control.
    * @return {any}
    */
  getStyle(): any;
}

interface IActionBarItemProxy extends IControlProxy {
  /**
   * This method returns actionbar container control
   * 
   * @return {IActionBarProxy} The control of the actionbar container 
   * 
   */
  getParent(): IActionBarProxy;

/**
   * Gets the page that contains this actionbar item's parent actionbar.
   * @returns {IPageProxy} the page, which the element belongs to
   * 
   * @example
   * ```javascript
   * // Get the page proxy from an actionbar item
   * const pageProxy = actionBarItem.getPageProxy();
   * 
   * // Use page proxy to access other controls on the page
   * const sectionedTable = pageProxy.getControl('CustomerTable');
   * if (sectionedTable) {
   *   sectionedTable.redraw();
   * }
   */
  getPageProxy(): IPageProxy;
    /**
   * Returns the Width property value defined for the control.
   * @return {number}
   *
   * @example
   * ```javascript
   * // Get the current width of the action bar item icon
   * const actionBarItem = actionBarProxy.getItem('IconButton');
   * const currentWidth = actionBarItem.getWidth();
   * console.log('Current width:', currentWidth);
   * ```
   */
  getWidth(): number;

  /**
   * Sets the Width property of the control.
   * @param {number} width value to set.
   *
   * @example
   * ```javascript
   * // Set width for actionbar item icon
   * const actionBarItem = actionBarProxy.getItem('IconButton');
   * actionBarItem.setWidth(24);
   * ```
   */
  setWidth(width: number): void;

  /**
   * Sets the Enabled property of the control.
   * @param {boolean} isEnabled true enables and false disables.
   */
  setEnabled(isEnabled: boolean): void;

  /**
   * Returns the Enabled property value defined for the control.
   * @return {boolean}
   */
  getEnabled(): boolean;

  /**
   * Gets the control's visible state.
   * @returns {boolean} returns true if the control is visible otherwise false. 
   */
  getVisible(): boolean;

  /**
   * Sets the Position property of the control.
   * @param {string} position {string} value to set.
   */
  setPosition(position: string): void;

  /**
   * Returns the Position property value defined for the control.
   * @return {string}
   */
  getPosition(): string;

  /**
   * Sets the Caption property of the control.
   * @param {string} caption {string} value to set.
   */
  setCaption(caption: string): void;

  /**
   * Returns the Caption property value defined for the control.
   * @return {string}
   */
  getCaption(): string;

  /**
   * Sets the SystemItem property of the control.
   * @param {string} systemItem {string} value to set.
   */
  setSystemItem(systemItem: string): void;

  /**
   * Returns the SystemItem property value defined for the control.
   * @return {string}
   */
  getSystemItem(): string;

  /**
   * Sets the Icon property of the control.
   * @param {string} icon {string} value to set.
   */
  setIcon(icon: string): void;

  /**
   * Returns the Icoon property value defined for the control.
   * @return {string}
   */
  getIcon(): string;

  /**
   * Sets the IsIconCircular property of the control.
   * @param {boolean} isIconCircular {boolean} value to set.
   */
  setIsIconCircular(isIconCircular: boolean): void;

  /**
   * Returns the IsIconCircular property value defined for the control.
   * @return {boolean}
   */
  getIsIconCircular(): boolean;

  /**
   * Sets the IconText property of the control.
   * @param {string} iconText {string} value to set.
   */
  setIconText(iconText: string): void;

  /**
   * Returns the IconText property value defined for the control.
   * @return {string}
   */
  getIconText(): string;

  /**
    * Returns the style property value defined for the control.
    * @return {string}
    */
  getStyle(): string;

  /**
   * Reset ActionBar item
   * @returns {Promise<any>}
   */
  reset(): Promise<any>;
}

/**
 * A designer-facing interface that provides access to a sectioned table
 * 
 * It is passed to rules to provide access to a section
 * for application specific customizations.
 */
interface ISectionedTableProxy extends IControlProxy {
  sections: ISectionProxy[];
  /**
   * Get or set the user provided search string for this section table. Modifying this property will cause the search field's value to change and the search functionality will be executed. It does not do anything if the search is not enabled for any of the UI controls in the SectionedTable.
   */
  searchString: string;
  /**
   * Get or set the current filters for this Sectioned Table. Modifying this property will cause the filters to be applied on the Sectioned Table.
   */
     filters: FilterCriteria[];
  /**
   * Factory method to construct an instance of DataQueryBuilder
   */
  dataQueryBuilder(query: string): DataQueryBuilder;
   /**
   * Gets the associated section by name.  This searches
   * section in SectionedTable.
   * 
   * @param {string} name The section name specified by the _Name
   * definition property.
   * 
   * @return {any} The section assocated with the name parameter
   */
    getSection(name: string): ISectionProxy;
  /**
   * Get all of the sections that the table contains.
   */
  getSections(): ISectionProxy[];
  /**
   * Gets the associated control by name.  This searches
   * controls in FormCell sections.
   * 
   * @param {string} name The control name specified by the _Name
   * definition property.
   * 
   * @return {any} The control assocated with the name parameter
   */
  getControl(name: string): IControlProxy;
  /**
   * This method returns the controls in all FormCell sections for this section table
   * 
   * @return {IControlProxy[]} The controls for this container 
   */
  getControls(): IControlProxy[];
  /**
   * This method returns filter query string of the FilterCriteria for the section table
   * 
   * @return {string} Resolved OData $filter query string of the FilterCriteria for the section table
   */
  getFilterActionResult(): string;
  /**
   * This method returns sorter query string of the FilterCriteria for the section table
   * 
   * @return {string} Resolved OData $orderby query string of the FilterCriteria for the section table
   */
  getSorterActionResult(): string;
}

/**
 * A designer-facing interface that provides access to a section in a sectioned table
 * 
 * It is passed to rules to provide access to a section
 * for application specific customizations.
 */
interface ISectionProxy {
  /**
   * Get the searchString property for this section.
   */
  searchString: string;
  /**
   * Get or set the dataSubscriptions property for this section.
   * The dataSubScriptions array contains entitySets names or services names
   */
   dataSubscriptions: string[];
   /**
    * Get the section visible property
    * @returns {boolean}
    */
  getVisible(): boolean;
  /**
   * Sets the section's visible state with / without redraw
   * 
   * @param value visible state
   * @param redraw whether redraw after setting the visible state, the default value is true.
   * @returns {Promise<any>}
   */
   setVisible(value: boolean, redraw?: boolean): Promise<any>;
   /**
    * Get the section name
    * @returns {string}
    */
  getName(): string;
  /**
   * Get the PageClientAPI associated with this section.
   * @returns {IPageProxy} 
   */
  getPageProxy(): IPageProxy;
  /**
   * Get the property name being bound, one of the property names
   * in a section definition
   * @returns {string}
   */
  getProperty(): string;
  /**
   * Get the section type
   * @returns {string}
   */
  getType(): string;
  /**
   * The bound object type, if true binding object is definition
   * @returns {boolean}
   */
  isStaticSection(): boolean;
  /**
   * Returns the extensions the section is using. Deprecated and will always return an empty array.
   * @returns {IView[]}
   */
  getExtensions(): IView[];
  /**
   * Get the section header proxy of associated section
   * @returns {ISectionHeaderProxy} Returns the section header proxy of associated section
   */
  getHeader(): ISectionHeaderProxy;
  /**
   * Sets the interacte object cell indicator's state in the section
   * 
   * @param {string} newState the new state of the indicator (possible values: toDownload, inProgress, open)
   * @param {PressedItem} pressedItem the pressed object cell in the section
   */
  setIndicatorState(newState: string, pressedItem: PressedItem);
  /**
   * Gets the associated control by name.  This searches
   * controls in this section if it is a FormCell section.
   * 
   * @param {string} name The control name specified by the _Name
   * definition property.
   * 
   * @return {any} The control assocated with the name parameter
   */
  getControl(name: string): IControlProxy;
  /**
   * This method returns the controls in this section if it is FormCell section
   * 
   * @return {IControlProxy[]} The controls for this container 
   */
  getControls(): IControlProxy[];
  /**
   * This method returns the group header in this section if it is ObjectTable section
   * 
   * @return {IGroupHeaderProxy} The group header for this container 
   */
  getGroupHeader(): IGroupHeaderProxy;
  /**
   * Redraw the section
   * 
   * @param fullSection false whether redraw full section or redraw on update items only
   * @returns {Promise<any>}
   */
   redraw(fullSection: boolean): Promise<any> ;
   /**
   * This method returns the number of items in the section
   * @returns {number}
   */
   getLoadedItemsCount(): number;
  }
  
  /**
 * A IBindableSectionProxy can get/set the section's target. 
 * If a section doesn't have a section target, it doesn't support the interface
 * 
 * It is passed to rules to provide access to a section's target
 * for application specific customizations.
 */
export interface IBindableSectionProxy extends ISectionProxy {
   /**
  * Get a target specifier from this section
   * 
   * @return {ITargetProxy}
   */
  getTargetSpecifier(): ITargetProxy;

  /**
  * Set the section target specifier
   * 
  * @param {ITargetProxy} specifier target specifier for the section
  * @param {boolean} redraw whether to redraw the section
   * @return {Promise<any>}
  * @throws {Error} if specifier is incomplete
   */
  setTargetSpecifier(specifier: ITargetProxy, redraw?: boolean): Promise<any>;

  /**
   * Get a filter bar from this section
   * @returns {IFilterBarProxy}
   */
  getFilterBar(): IFilterBarProxy;

  /**
    * This method returns the filter query options based on filter bar selections
    * @return {string}
    */
  get filterBarFilterQuery(): string;

  /**
   * This method returns the sorter query options based on filter bar selections
   * @return {string}
   */
  get filterBarSorterQuery(): string;

  /**
   * This method returns the filter selections based on filter bar selections
   * @return {FilterSelection[]}
   * 
   * @example
   * ```javascript
   * // Access filter bar selections from a bindable section proxy
   * const filters = bindableSectionProxy.filters;
   * 
   * console.log(`Total controls with filter applied in the filter bar: ${filters.length}`);
   * ```
   */
  get filters(): FilterSelection[];

  /**
   * This method sets and overrides the currently applied filters
   * @param {FilterSelection[]} newFilters - An array of filter selection objects to be applied to the filter bar. Each entry should include the control name, and value.
   * @return {Promise<any>}
   * 
   * @example
   * ```javascript
   * // Access filter bar sections from a table section proxy
   * context.setFilters([context.createFilterSelection('StatusControl', 'Completed')]);
   * const filters = context.filters;
   * 
   * console.log(`Total controls with filter applied in the filter bar: ${filters.length}`);
   * ```
   */
  setFilters(newFilters: FilterSelection[]): Promise<any>;

}

/**
 * A designer-facing interface that provides access to card.
 */
interface ICardProxy extends ISectionRowElementProxy {
  /**
   * This method returns CardCollection proxy
   * @return {ICardCollectionProxy}
   */
  getParent(): ICardCollectionProxy;

  /**
   * This method returns card header proxy
   * @return {ICardHeaderProxy}
   */
  getHeader(): ICardHeaderProxy;

  /**
   * This method returns card media proxy
   * @return {ICardMediaProxy}
   */
  getMedia(): ICardMediaProxy;

  /**
   * This method returns card footer proxy
   * @return {ICardFooterProxy}
   */
  getFooter(): ICardFooterProxy;
}

/**
 * A designer-facing interface that provides access to action button in card.
 */
interface ICardHeaderActionButtonProxy extends ISectionRowElementProxy {
  /**
   * This method returns card header proxy
   * @return {ICardHeaderProxy}
   */
  getParent(): ICardHeaderProxy;

  /**
   * This method returns card action button overflow items proxy
   * @return {ICardHeaderActionButtonOverflowButtonProxy[]}
   */
  getOverflowItems(): ICardHeaderActionButtonOverflowButtonProxy[];
}

/**
 * A designer-facing interface that provides access to overflow button in card action button.
 */
interface ICardHeaderActionButtonOverflowButtonProxy extends ISectionRowElementProxy {
  /**
   * Get button title
   * @return {string} the title of the button
   */
  getTitle(): string;

  /**
   * This method returns card action button proxy
   * @return {ICardHeaderActionButtonProxy}
   */
  getParent(): ICardHeaderActionButtonProxy;

  /**
   * Get item index
   * @return {number}
   */
  getItemIndex(): number;
}

/**
 * A designer-facing interface that provides access to a button in card footer.
 */
interface ICardFooterButtonProxy extends ISectionRowElementProxy {
  /**
   * Get button title
   * @return {string} the title of the button
   */
  getTitle(): string;

  /**
   * This method returns card footer proxy
   * @return {ICardFooterProxy}
   */
  getParent(): ICardFooterProxy;
}

/**
 * A designer-facing interface that provides access to card header properties.
 */
interface ICardHeaderProxy extends ISectionRowElementProxy {
  /**
   * Get header title
   * @return {string} the title of the header
   */
  getTitle(): string;

  /**
   * This method returns CardProxy
   * @return {ICardProxy}
   */
  getParent(): ICardProxy;

  /**
   * This method returns CardHeaderActionButton proxy
   * @return {ICardHeaderActionButtonProxy}
   */
  getActionButton(): ICardHeaderActionButtonProxy;

  /**
   * This method returns array of CardHeaderExtendedHeader proxy
   * @return {ICardHeaderExtendedHeaderProxy[]}
   */
  getExtendedHeaders(): ICardHeaderExtendedHeaderProxy[];
}


/**
 * A designer-facing interface that provides access to card header extended header properties.
 */
interface ICardHeaderExtendedHeaderProxy extends ISectionRowElementProxy {
  /**
   * This method returns CardHeaderProxy
   * @return {ICardHeaderProxy}
   */
  getParent(): ICardHeaderProxy;

  /**
   * This method returns array of card header extended header item proxy
   * @return {ICardHeaderExtendedHeaderItemProxy[]}
   */
  getItems(): ICardHeaderExtendedHeaderItemProxy[];

  /**
   * Get item index
   * @return {number}
   */
  getItemIndex(): number;
}


/**
 * A designer-facing interface that provides access to card header extended header item properties.
 */
interface ICardHeaderExtendedHeaderItemProxy extends ISectionRowElementProxy {
  /**
   * This method returns CardHeaderExtendedHeaderProxy
   * @return {ICardHeaderExtendedHeaderProxy}
   */
  getParent(): ICardHeaderExtendedHeaderProxy;

  /**
   * Get item index
   * @return {number}
   */
  getItemIndex(): number;
}


/**
 * A designer-facing interface that provides access to card header KPI view properties.
 */
interface ICardHeaderKPIViewProxy extends ISectionRowElementProxy {
  /**
   * This method returns CardHeaderProxy
   * @return {ICardHeaderProxy}
   */
  getParent(): ICardHeaderProxy;
}

/**
 * A designer-facing interface that provides access to card header properties.
 */
interface ICardBodyProxy extends ISectionRowElementProxy {

  /**
   * This method returns CardProxy
   * @return {ICardProxy}
   */
  getParent(): ICardProxy;

  /**
   * This method returns CardBodySeparators proxy
   * @return {ICardBodySeparatorsProxy}
   */
  getSeparators(): ICardBodySeparatorsProxy;

  /**
   * This method returns array of CardBodyContent proxy
   * @return {ICardBodyContentProxy[]}
   */
  getContents(): ICardBodyContentProxy[];

}

/**
 * A designer-facing interface that provides access to body separators in card.
 */
interface ICardBodySeparatorsProxy extends ISectionRowElementProxy {
  /**
   * This method returns card body proxy
   * @return {ICardBodyProxy}
   */
  getParent(): ICardBodyProxy;

  /**
   * This method returns card body header separator boolean value
   * @return {boolean}
   */
  getHeaderSeparator(): boolean;

  /**
   * This method returns card body content separator boolean value
   * @return {boolean}
   */
  getBodySeparator(): boolean;

  /**
   * This method returns card body footer separator boolean value
   * @return {boolean}
   */
  getFooterSeparator(): boolean;

}

/**
 * A designer-facing interface that provides access to card body content properties.
 */
interface ICardBodyContentProxy extends ICardElementProxy {
  /**
   * Sets the Enabled property of the button.
   * @param {boolean} isEnabled - Set to `true` to enable the button or `false` to disable it.
   * @param {boolean} redraw - Set to `true` to redraw the button after setting the enabled state.
   */
  setEnabled(isEnabled: boolean, redraw?: boolean): void;

  /**
   * Returns the Enabled property value of the button.
   * @return {boolean}
   */
  getEnabled(): boolean;

  /**
   * Returns the Visible property value of the button.
   * @return {boolean}
   */
  getVisible(): boolean;

  /**
   * This method returns CardBodyProxy
   * @return {ICardBodyProxy}
   */
  getParent(): ICardBodyProxy;

  /**
   * Get item index
   * @return {number}
   */
  getItemIndex(): number;

}

/**
 * A designer-facing interface that provides access to card body content item properties.
 */
interface ICardBodyContentItemProxy extends ICardElementProxy {

  /**
   * This method returns CardBodyContentProxy
   * @return {ICardBodyContentProxy}
   */
  getParent(): ICardBodyContentProxy;

  /**
   * Get item index
   * @return {number}
   */
  getItemIndex(): number;

}

/**
 * A designer-facing interface that provides access to card body content item properties.
 * 
 * @example
 * ```javascript
 * // Example rule bound to the Image property of a label bar item
 * export default function GetLabelBarItemImage(context) {
 *   const cardBodyContentLabelBarItemProxy = context;
 *   
 *   // Access parent label bar
 *   const labelBarProxy = cardBodyContentLabelBarItemProxy.getParent();
 *   const hasItemSeparator = labelBarProxy.getItemSeparator();
 *   
 *   // Access section
 *   const sectionProxy = cardBodyContentLabelBarItemProxy.getSectionProxy();
 *   const sectionName = sectionProxy.getName();
 *   
 *   // Get item position
 *   const itemIndex = cardBodyContentLabelBarItemProxy.getItemIndex();
 *   
 *   // Return different icons based on item position
 *   return itemIndex === 0 ? 'sap-icon://warning' : 'sap-icon://information';
 * }
 * ```
 */
export interface ICardBodyContentLabelBarItemProxy extends ISectionRowElementProxy {

  /**
   * This method returns CardBodyContentProxy
   * @return {ICardBodyContentProxy}
   * 
   * @example
   * ```javascript
   * // Access parent label bar
   * const labelBarProxy = cardBodyContentLabelBarItemProxy.getParent();
   * const layout = labelBarProxy.getLayout();
   * const layoutType = layout.getLayoutType();
   * ```
   */
  getParent(): ICardBodyContentProxy;

  /**
   * This method returns CardCollection proxy
   * @return {ICardCollectionProxy}
   * 
   * @example
   * ```javascript
   * // Access section proxy
   * const sectionProxy = cardBodyContentLabelBarItemProxy.getSectionProxy();
   * const sectionName = sectionProxy.getName();
   * ```
   */
  getSectionProxy();

  /**
   * Get item index
   * @return {number}
   * 
   * @example
   * ```javascript
   * // Access item position
   * const position = cardBodyContentLabelBarItemProxy.getItemIndex();
   * console.log(`This is item #${position} in the label bar`);
   * ```
   */
  getItemIndex(): number;

}

/**
 * A designer-facing interface that provides access to card body content label bar layout properties.
 */
interface ICardBodyContentLabelBarLayoutProxy extends ISectionRowElementProxy {

  /**
   * This method returns CardBodyContentProxy
   * @return {ICardBodyContentProxy}
   */
  getParent(): ICardBodyContentProxy;

  /**
   * Get content layout type
   * @return {string}
   */
  getLayoutType(): string;

}

/**
 * A designer-facing interface that provides access to card media properties.
 */
interface ICardMediaProxy extends ISectionRowElementProxy {
  /**
   * This method returns CardProxy
   * @return {ICardProxy}
   */
  getParent(): ICardProxy;

  /**
   * Get row index
   * @return {number}
   */
  getIndex(): number;

}


/**
 * A designer-facing interface that provides access to card footer properties.
 */
interface ICardFooterProxy extends ISectionRowElementProxy {
  /**
   * This method returns CardProxy
   * @return {ICardProxy}
   */
  getParent(): ICardProxy;

  /**
   * This method returns card footer button proxy
   * @return {ICardFooterButtonProxy}
   */
  getPrimaryAction(): ICardFooterButtonProxy;

  /**
   * This method returns card footer button proxy
   * @return {ICardFooterButtonProxy}
   */
  getSecondaryAction(): ICardFooterButtonProxy;
}
  interface IButtonTableProxy extends ISectionProxy {
    /**
     * This method returns buttons for this section
     *
     * @return {IButtonTableButtonProxy[]} The buttons for this section
     */
    getButtons(): IButtonTableButtonProxy[];
  
    /**
     * 
     * @param name takes in _Name property of the button
     * @returns {IButtonTableButtonProxy} returns the ButtonTableButtonProxy
     * instance of the item by the name
     */
    getButton(name: string): IButtonTableButtonProxy;
  }
  /**
 * A ICalendarProxy can get/set the section's calendar dates, as well as scroll to a given date.
 */
interface ICalendarProxy extends ISectionProxy {
  /**
   * Returns the calendar type
   * 
   * @return {string}
   */
  getCalendarType(): string;
  /**
   * Returns the selected date based on device's local time zone via JavaScript Date Object
   * 
   * @return {Date}
   */
  getSelectedDate(): Date;
  /**
   * Changes the selected date in the calendar based on device's local time zone.
   * Accepted inputs: date string in "yyyy-MM-dd" or "yyyy-MM-ddThh:mm:ss" format, JavaScript Date Object.
   * @param {any} dateInput
   */
  setSelectedDate(dateInput: any);
  /**
   * Returns the selected date range based on device's local time zone via JavaScript Date Object
   * 
   * @return {Date}
   */
  getSelectedDateRange(): any;
  /**
   * Changes the selected date range in the calendar based on device's local time zone.
   * Accepted inputs: date string in "yyyy-MM-dd" or "yyyy-MM-ddThh:mm:ss" format, JavaScript Date Object.
   * @param {any} startDate
   * Accepted inputs: date string in "yyyy-MM-dd" or "yyyy-MM-ddThh:mm:ss" format, JavaScript Date Object.
   * @param {any} endDate
   */
  setSelectedDateRange(startDate: any, endDate: any);
  /**
   * Scrolls the calendar to the specified date based on device's local time zone.
   * Accepted values: date string in "yyyy-MM-dd" or "yyyy-MM-ddThh:mm:ss" format, JavaScript Date Object.
   * @param {any} dateInput
   */
  scrollToDate(dateInput: any);
  /**
   * 
   * @returns {number} returns number of months before and after the currently selected month to load events. This is used to optimize the loading of events in the calendar. For example, if set to 1, events for the current month, the previous month, and the next month will be loaded. If set to 2, events for the current month, the two previous months, and the two next months will be loaded. This property is only applicable when `CalendarType` is set to `Month`. If set to 0, all events will be loaded..
   */
  getEventLoadRange(): number;
   /**
   * @returns {any[]} return array of all events displayed on the calendar.
   */
  getEvents(): any[];
  /**
   * @returns {any} return event of selected date if any.
   */
  getEventsOfSelectedDate(): any;
  /**
   * @returns {any[]} return array of events within selected date range.
   */
  getEventsOfSelectedDateRange(): any[];
  /**
   * @returns {any[]} return array of indicators displayed on the calendar.
   */
  getIndicators(): any[];
  /**
   * @returns {any[]} return array of targets to be used for the calendar section. Each target is represented by a binding or rule that returns an array of data items. The calendar will use these targets to populate the events and execute the rules defined in the `Event/IndicatorName` to determine the events in the calendar.
   */
  getTargets(): any[];
}
  
  /*
  * SelectableSectionProxy is mainly for selection operations when enable the Multiple section for list.
  */
  interface ISelectableSectionProxy extends IBindableSectionProxy {
    /**
     * Set the section selection mode
     * @param value None or Multiple 
     */
    setSelectionMode(mode: string);
  
    /**
     * Get the current section selected items when selection mode is active. Otherwise an empty array will be returned.
     */
    getSelectedItems(): [SelectedItem];
  
    /**
     * Get selection mode for the current section.
     * The return value is None or Multiple
     */
    getSelectionMode(): string;
  
    /**
     * Get the last selected or deselected item.
     */
    getSelectionChangedItem(): ChangedItem;

    /**
     * Select all items of the section if it is in multiple selection mode.
     * Only items that are loaded and rendered will be selected. Items that are subsequently loaded via data paging will not be selected.
     */
    selectAllItems(): void;

    /**
     * Deselect all items of the section if it is in multiple selection mode.
     */
    deselectAllItems(): void;

    /**
     * Get the number of loaded items of section.
     * @returns {number}
     */
    getSelectedItemsCount(): number;
  }

  /*
* ObjectTableProxy is mainly for ObjectTable operations.
*/
interface IObjectTableProxy extends ISelectableSectionProxy {
  //
}

  /*
* ObjectCardCollectionProxy is mainly for ObjectCard operations.
*/
interface IObjectCardCollectionProxy extends IBindableSectionProxy {

}

/*
* DataTableProxy is mainly for DataTable operations.
*/
interface IDataTableProxy extends IBindableSectionProxy {
  /**
   * Get edit mode.
   * The return value is None or Inline
   */
  getEditMode(): string;

  /**
   * Set the edit mode. The data changes are reset when set to none.
   * @param value None or Inline 
   */
  setEditMode(editMode: string): void;

  /**
   * Get the data changes. This is only apply to the value that bind to a valid Property name.
   * @returns {Array<object>} list of row changes
   */
  getChanges(): Array<IChangedObject>;

  /**
   * Reset the data changes
   */
  reset(): void;

  /**
   * Get the cell
   * @param rowIndex 
   * @param columnIndex 
   * @returns {IDataTableCellProxy} returns the DataTableCellProxy
   */
  getCell(rowIndex: number, columnIndex: number): IDataTableCellProxy;
}

/**
 * A designer-facing interface that provides access to a ExtensionSection in a sectioned table.
 * 
 * It is passed to rules to provide access to a ExtensionSection 
 * for application-specific customizations.
 */
interface IExtensionSectionProxy extends IBindableSectionProxy {
  /**
   * Returns the instance of extension that this section is using.
   * @returns {IView}
   */
  getExtension(): IView;
}

/**
 * A designer-facing interface that provides access to a ObjectCollection in a sectioned table.
 * 
 * It is passed to rules to provide access to a ObjectCollection 
 * for application-specific customizations.
 */
interface IObjectCollectionProxy extends IBindableSectionProxy  {
  /**
   * This method returns an array holding the instances of extensions that this section is using. 
   * Each element in the array represents the instance of an extension bound to the row corresponding to the index.
   * @returns {IView[]}
   */
  getExtensions(): IView[];
}

/**
 * A designer-facing interface that provides access to a ObjectHeader in a sectioned table.
 * 
 * It is passed to rules to provide access to a ObjectHeader 
 * for application-specific customizations.
 */
interface IObjectHeaderProxy extends IBindableSectionProxy {
  
  /**
   * This method returns an array holding the instances of extensions that this section is using. 
   * Currently it will always contain at most one extension.
   * @returns {IView[]}
   */
  // Will be moved to DetailContentContainerProxy in the future
  getExtensions(): IView[];
}  
  /**
   * An IResetableSectionProxy can reset the controls in the section. 
   * 
   * It is passed to rules to provide access to a resetable section
   * for application specific customizations.
   */
   interface IResetableSectionProxy extends ISectionProxy {
    /**
    * Reset all FormCell controls in the section
    * @returns {Promise<any>}
    */
     reset(): Promise<any>;
  }

/*
 * CardCollectionProxy is mainly for CardCollection operations. 
*/
interface ICardCollectionProxy extends IBindableSectionProxy {
  //
}

/*
 * SimplePropertyCollectionProxy is mainly for SimplePropertyCollection operations. 
*/
interface ISimplePropertyCollectionProxy extends IBindableSectionProxy {
  //
}

/*
 * KeyValueCollectionProxy is mainly for KeyValueCollection operations. 
*/
interface IKeyValueCollectionProxy extends IBindableSectionProxy {
  //
}

/**
 * A designer-facing interface that construct a Link object to be used by Odata create or update entity
 * 
 */
interface ILinkSpecifierProxy {
  /**
   * @return {} link object that odata link action expects
   */
  getSpecifier(): {};
  /**
   * @return {string}
   */
  getProperty(): string;
  /**
   * @return {string} 
   */
  getEntitySet(): string;
  /**
   * @return {string}
   */
  getQueryOptions(): string;
  /**
   * @return {string}
   */
  getReadLink(): string;
  /**
   * @return {string}
   */
  setProperty(value: string);
  /**
   * @param {string} 
   */
  setEntitySet(value: string);
  /**
   * @param {string} 
   */
  setQueryOptions(value: string);
  /**
   * @param {string} 
   */
  setReadLink(value: string);
}

/**
 * A designer-facing interface that provides access to a toolbar
 * control.
 * 
 * It is passed to rules to provide access to a toolbar control
 * for application specific customizations.
 * 
 * In addition it provides access to the IControlProxy interface.
 */
interface IToolbarProxy extends IControlProxy {
  /**
   * This method returns the top-level controls of Toolbar Items for this container
   * 
   * @return {IToolbarItemProxy[]} The controls for this container 
   */
  getToolbarItems(): IToolbarItemProxy[];
  /**
   * 
   * @param itemName takes in _Name property of the toolbar item
   * @returns {IToolbarItemProxy} returns the ToolbarItemProxy
   * instance of the item by the name
   */
  getToolbarItem(itemName: string): IToolbarItemProxy;
  /**
   * This method returns the NativeScript objects of Toolbar Items for this container
   * 
   * @return {ToolBarItem[]} The controls for this container 
   */
  getToolbarControls(): ToolBarItem[];
  /**
   * Sets the control's visible state with / without redraw
   * 
   * @param value visible state
   * @param redraw true if redraw after setting the visible state
   */
  setVisible(value: boolean, redraw: boolean);

    /**
   * Determine if the toolbar control is a container.
   *
   * @returns {boolean}
   */
  isContainer(): boolean;
  /**
   * @returns {boolean} true/false
   */
  getVisible(): boolean;
}

/**
 * A designer-facing interface that provides access to a toolbar item
 * control.
 * 
 * It is passed to rules to provide access to a toolbar item control
 * for application specific customizations.
 * 
 * In addition it provides access to the IControlProxy interface.
 */
interface IToolbarItemProxy extends IControlProxy {
  /**
   * This method returns the top-level controls for this container
   * 
   * @return {IControlProxy[]} The controls for this container 
   * @deprecated - use new ToolbarProxy API: getParent().getToolbarControls()
   */
  getToolbarControls(): IControlProxy[];
  /**
   * This method returns toolbar container control
   * 
   * @return {IToolbarProxy} The control of the toolbar container 
   */
  getParent(): IToolbarProxy;
  /**
   * Sets the control's visible state with / without redraw
   * 
   * @param value visible state
   * @param redraw true if redraw after setting the visible state
   */
  setVisible(value: boolean, redraw: boolean);
  /**
   * @returns {boolean} true/false
   */
  getVisible(): boolean
}

/**
 * A designer-facing interface that provides access to a toolbar
 * control.
 * 
 * It is passed to rules to provide access to a toolbar control
 * for application specific customizations.
 * 
 * In addition it provides access to the IControlProxy interface.
 */
interface IFioriToolbarProxy extends IControlProxy {
  /**
   * This method returns the top-level controls of Toolbar Items for this container
   *
   * @return {IFIoriToolbarItemProxy[]} The toolbar items controls for this container
   */
  getItems(): IFioriToolbarItemProxy[];

  /**
   * 
   * @param itemName takes in _Name property of the toolbar item
   * @returns {IToolbarItemProxy} returns the ToolbarItemProxy
   * instance of the item by the name
   */
  getItem(itemName: string): IFioriToolbarItemProxy;

  /**
   * Sets the toolbar's visible state with / without redraw
   *
   * @param value visible state
   * @param redraw true if redraw after setting the visible state
   */
  setVisible(value: boolean, redraw: boolean);

  /**
   * Determine if the toolbar control is a container.
   *
   * @returns {boolean} true/false.
   */
  isContainer(): boolean;

    /**
   * 
   * @returns {boolean} true/false
   */
  getVisible(): boolean;

  /**
   * Sets the OverflowIcon property of the fiori toolbar control.
   * @param {string} overflowIcon {string} value to set.
   */
  setOverflowIcon(overflowIcon: string): void;

  /**
   * Returns the Image property value defined for the control.
   * @return {string}
   */
  getOverflowIcon(): string;

  /**
   * Sets the HelperText property of the toolbar control.
   * @param {string} helperText {string} value to set.
   */
  setHelperText(helperText: string): void;

  /**
   * Returns the HelperText property value defined for the toolbar control.
   * @return {string}
   */
  getHelperText(): string;

  /**
   * Sets the DataSubscriptions property of the toolbar control.
   * @param {string[]} dataSubscriptions {string[]} value to set.
   */
  setDataSubscriptions(dataSubscriptions: string[]): void;

  /**
   * Returns the DataSubscriptions property value defined for the toolbar control.
   * @return {string[]}
   */
  getDataSubscriptions(): string[];

  /**
   * Reset FioriToolbar and its items
   * @returns {Promise<any>}
   */
  reset(): Promise<any>;
}

interface IFioriToolbarItemProxy extends IControlProxy {
  /**
   * This method returns toolbar container control
   * 
   * @return {IFioriToolbarProxy} The control of the toolbar container 
   * 
   */
  getParent(): IFioriToolbarProxy;

  /**
   * Sets the Enabled property of the control.
   * @param {boolean} isEnabled true enables and false disables.
   */
  setEnabled(isEnabled: boolean): void;

  /**
   * Returns the Enabled property value defined for the control.
   * @return {boolean}
   */
  getEnabled(): boolean;

  /**
   * Gets the control's visible state.
   * @returns {boolean} returns true if the control is visible otherwise false. 
   */
  getVisible(): boolean;
}

/**
 * FioriToolbarButtonProxy is a developer-facing interface that provides access to a
 * button control and allows customizations.
 * In addition it provides access to the IFioriToolbarItemProxy interface.
 */
interface IFioriToolbarButtonProxy extends IFioriToolbarItemProxy {
  
  /**
   * Sets the ButtonType property of the control.
   * Accepted values are: "Button", "Normal".
   * @param {string} type value to set.
   */
  setButtonType(type: string) 

  /**
   * Returns the ButtonType property value defined for the control.
   * @return {string}
   */
  getButtonType(): string;

  /**
   * Sets the Title property of the control.
   * @param {string} title {string} value to set.
   */
  setTitle(title: string): void;

  /**
   * Returns the Title property value defined for the control.
   * @return {string}
   */
  getTitle(): string 

  /**
   * Sets the Image property of the Button control.
   * @param {string} image {string} value to set.
   */
  setImage(image: string): void;

  /**
   * Returns the Image property value defined for the control.
   * @return {string}
   */
  getImage(): string;
 
  /**
   * Sets the Semantic property of the Button control.
   * @param {string} semantic {string} value to set.
   */
  setSemantic(semantic: string): void;
 
  /**
   * Returns the Semantic property value defined for the Button control.
   * @return {string}
   */
  getSemantic(): string;
 
  /**
   * Sets the ImagePosition property of the Button control.
   * @param {string} imagePosition {string} value to set.
   */
  setImagePosition(imagePosition: string): void;
 
  /**
   * Returns the ImagePosition property value defined for the Button control.
   * @return {string}
   */
  getImagePosition(): string;
 }

/**
 * A designer-facing interface that provides access to a bottomnavigation and tabs control
 * 
 * It is passed to rules to provide access to a tab items
 * for application specific customizations.
 */
interface ITabControlProxy extends IControlProxy {
  /**
   * @returns {IControlProxy[]} list of items in the tab control
   */
  tabItems: IControlProxy[];
  /**
   * Set tab item caption by item name
   */
  setItemCaption(tabItemName: string, newCaption: string);
  /**
   * Set selected tab item by name for tab control
   */
  setSelectedTabItemByName(tabItemName: string);
  /**
   * Set selected tab item by index for tab control
   */
  setSelectedTabItemByIndex(tabItemIndex: number);
  /**
   * @returns {string} tab item caption based on tab item name
   */
  getItemCaption(tabItemName: string): string;
  /**
   * @returns {string} selected tab item name
   */
  getSelectedTabItemName(): number;
  /**
   * @returns {number} selected tab item index
   */
  getSelectedTabItemIndex(): number;
}

/**
 * A designer-facing interface that provides access to a tab item.
 * 
 * It is passed to rules to provide access to a tab item
 * for application specific customizations.
 * 
 * In addition it provides access to the IControlProxy interface.
 */
interface ITabItemProxy extends IControlProxy {
  /**
   * Set item caption
   */
  setCaption(newCaption: string);
}

/**
 * A designer-facing interface that provides access to a button item in a button section
 * 
 * It is passed to rules to provide access to a button item
 * for application specific customizations.
 */
interface IButtonTableButtonProxy extends IControlProxy {
  /**
   * Redraw control is not supported. Instead, the parent section redraw is triggered.
   */
  redraw(): Promise<any>;
}

/**
 * A designer-facing interface that provides access to a key value item in a KeyValueCollection
 * 
 * It is passed to rules to provide access to a key value item
 * for application specific customizations.
 */
interface IKeyValueItemProxy extends IControlProxy {
  /**
   * Redraw control is not supported. Instead, the parent section redraw is triggered.
   */
  redraw(): Promise<any>;
}

/**
 * A designer-facing interface that provides access to the section footer in a section
 * 
 * It is passed to rules to provide access to a section footer
 * for application specific customizations.
 */
interface ISectionFooterProxy extends IControlProxy {
  /**
   * Redraw control is not supported. Instead, the parent section redraw is triggered.
   */
  redraw(): Promise<any>;
}

/**
 * A designer-facing interface that provides access to the section header in a section
 * 
 * It is passed to rules to provide access to a section header
 * for application specific customizations.
 */
interface ISectionHeaderProxy extends IControlProxy {
  /**
   * This method returns the items for the section header
   *
   * @return {ISectionHeaderItemProxy[]} The items for this section header
   */
  getItems(): ISectionHeaderItemProxy[];

  /**
   * 
   * @param name takes in _Name property of the section header item
   * @returns {ISectionHeaderItemProxy} returns the SectionHeaderItemProxy
   * instance of the item by the name
   */
  getItem(name: string): ISectionHeaderItemProxy;

  /**
   * Redraw control is not supported. Instead, the parent section redraw is triggered.
   */
  redraw(): Promise<any>;
}

/**
 * A designer-facing interface that provides access to a section header item
 * 
 * It is passed to rules to provide access to a section header item
 * for application specific customizations.
 */
interface ISectionHeaderItemProxy extends IControlProxy {
  /**
   * Redraw control is not supported. Instead, the parent section redraw is triggered.
   */
  redraw(): Promise<any>;
  /**
   * Returns the visible property value of the SectionHeaderItem.
   * @return {boolean} returns true if the SectionHeaderItem is visible otherwise false.
   */
  getVisible(): boolean;


  /**
   * Sets the SectionHeaderItem's visible state with redraw
   * @param value visible state
   * @param redraw true if redraw after set the visible state
   */
  setVisible(value: boolean, redraw: boolean);
}

/**
 * A designer-facing interface that provides access to a section header button item
 * 
 * It is passed to rules to provide access to a section header button item
 * for application specific customizations.
 */
interface ISectionHeaderButtonProxy extends ISectionHeaderItemProxy {
  /**
   * Returns the enabled property value of the SectionHeaderButtonItem.
   * @return {boolean} returns true if the SectionHeaderButtonItem is enabled otherwise false.
   */
  getEnabled(): boolean;

  /**
   * Sets the SectionHeaderItem's enabled state with redraw.
   * @param {boolean} isEnabled true enables and false disables.
   */
  setEnabled(isEnabled: boolean);
}

/**
 * A designer-facing interface that provides access to a section header icon item
 * 
 * It is passed to rules to provide access to a section header icon item
 * for application specific customizations.
 */
interface ISectionHeaderIconProxy extends ISectionHeaderItemProxy {
}

/**
 * A designer-facing interface that provides access to a section header label item
 * 
 * It is passed to rules to provide access to a section label label item
 * for application specific customizations.
 */
interface ISectionHeaderLabelProxy extends ISectionHeaderItemProxy {
}
/**
 * A designer-facing interface that that provides access to action results 
 */
interface IActionResult {
  /**
   * Data from the action.  Depending on the action, it may or may not be set.  It can be set for any action type
   */
   data: any;
   /**
    * An error thrown during the execution of a failed or invalid action. The error.message contains the error message.
    * For an online OData action or a REST service action, the error object may contain the error information from the backend. 
    * In this case, the error.responseCode and error.responseBody contain the HTTP status code and the JSON string of the error response 
    * returned by the backend respectively. See the [example](../../../reference/schemadoc/Rule.html#actionresult-examples).
    */
   error: any;
   /** 
    * The status of the action.
    */ 
   status: ActionExecutionStatus;
   /**
    * Whether or not the action is enabled.
    */
  enabled: boolean;
}

/**
 * A designer-facing interface that provides access to side drawer.
 * 
 * It is passed to rules to provide access to the side drawer
 * for application specific customizations.
 * 
 * In addition it provides access to the IControlProxy interface.
 */
 interface ISideDrawerControlProxy extends IControlProxy {
  /**
   * @returns {IControlProxy[]} list of items in the side drawer control
   */
  menuItems: Array<ISideDrawerMenuItemProxy[]>;

  /**
   * @returns {ISideDrawerMenuItemProxy} a single SideDrawerMenuItemProxy instance of the menu item that's identified by the provided name (which is based on the _Name property)
   */
  getMenuItem(name: String): ISideDrawerMenuItemProxy;

  /**
   * @returns {string[]} list of section captions in the side drawer control
   */
  sections: string[];

  /**
   * @returns {number} selected menu item indexPath
   */
  getSelectedMenuItemIndexPath(): [number, number];

  /**
   * @returns {string} selected menu item name
   */
  getSelectedMenuItemName(): string ;

  /**
   * Set side drawer icon
   */
  setSideDrawerButton(iconPath: string);

  /**
   * Set selected menu item by name for side drawer control
   */
  setSelectedMenuItemByName(name: string);

  /**
   * Set selected menu item by indexPath for side drawer control
   */
  setSelectedMenuItemByIndexPath(indexPath: [number, number]);

  /**
   * Get menu items at section index for side drawer control
   */
  getMenuItemsAtSection(sectionIndex: number) : ISideDrawerMenuItemProxy[]

  /**
   * Get menu items at section index for side drawer control
   */
  setSectionVisibilityAtIndex(sectionIndex: number, visibility: boolean);
}

/**
 * A designer-facing interface that provides access to a menu item.
 * 
 * It is passed to rules to provide access to a menu item
 * for application specific customizations.
 * 
 * In addition it provides access to the IClientAPI interface.
 */
interface ISideDrawerMenuItemProxy extends IClientAPI {

  /**
   * @return {string} the caption of the menu item
   */
  getTitle(): string;

  /**
   * Set menu item caption
   */
  setTitle(title: string);

  /**
   * Set menu item visibility
   */
  setVisibility(visibility: boolean);

  /**
   * Reset the SideDrawerMenuItem's navigation stack.
   * If the selected sideDrawer menu item is active, it navigates to the initial page configured in the PageToOpen attribute.
   * 
   * Example:
   * 
   *   sideDrawerMenuItemProxy.reset().then((currentPageProxy) => {
   *       var currentPageCaption = currentPageProxy.getCaption();
   *       ...
   *   });
   * 
   * @return {Promise<any>} the pageProxy of the current page after reset
   */
  reset(): Promise<any>;
}

/**
 * A designer-facing interface that provides access to a odata provider.
 */
interface IODataProviderProxy {
  /**
   * Determine whether the data provider is offline enabled
   * @return {boolean}
   */
  isOfflineEnabled(): boolean;

  /**
   * Determine whether the data provider is initialized
   * @return {boolean}
   */
  isInitialized(): boolean;

  /**
   * Determine whether the entitySet is draft enabled
   * @return {boolean}
   */
  isDraftEnabled(entitySet: string): boolean;

  /**
   * Returns the proxy of the $metadata associated with the data provider if available. Otherwise, it will be null.
   * Any $metadata changes happening on the backend server after initializing the data service for the first time
   * will not be reflected unless the users restart the application or call the refreshMetadata API.
   * @return {ICsdlDocumentProxy}
   */
  getMetadata(): ICsdlDocumentProxy;
  
  /**
   * Reloads the latest $metadata from the backend server.
   * It checks the compatibility between the current $metadata and the $metadata from the backend server, 
   * then updates the $metadata associated with the data provider if there is no conflict.
   * @return {Promise<boolean>} a promise with a boolean result indicating whether the $metadata was updated successfully.
   */
  refreshMetadata(): Promise<boolean>;

  /**
   * @ignore
   * Sets the maximum number of concurrent stream operations allowed for this service.
   *
   * @param count The maximum number of concurrent stream operations to allow.
   */
  setMaxConcurrentStreams(count: number): void;

  /**
   * @ignore
   * Gets the maximum number of concurrent stream operations allowed for this service.
   *
   * @return {number} The maximum number of concurrent stream operations allowed for this service.
   */
  getMaxConcurrentStreams(): number;
}

/**
 * A designer-facing interface that provides access to the $metadata of a odata provider.
 */
interface ICsdlDocumentProxy {
  /**
   * Returns the original $metadata content as a minified XML string with unnecessary information removed if 
   * `retainOriginalText` in the [CSDLOptions](../../../reference/schemadoc/definitions/CSDLOptions.schema.html) is enabled. 
   * Otherwise, an error message indicating the missing CSDL option will be returned.
   * @return {string}
   */
  getCompactXML(): string;

  /**
   * Returns the original $metadata content as a XML string if 
   * `retainOriginalText` in the [CSDLOptions](../../../reference/schemadoc/definitions/CSDLOptions.schema.html) is enabled. 
   * Otherwise, an error message indicating the missing CSDL option will be returned.
   * @return {string}
   */
  getOriginalText(): string;
  
  /**
   * Returns the resolved $metadata content as a XML string, with inline references and expanded aliases, if 
   * `retainResolvedText` in the [CSDLOptions](../../../reference/schemadoc/definitions/CSDLOptions.schema.html) is enabled. 
   * Otherwise, an error message indicating the missing CSDL option will be returned.
   * @return {string}
   */
  getResolvedText(): string;

  /**
   * Returns code for the OData version, e.g. 400. If the OData version is considered as a decimal number (e.g. 4.0), 
   * then multiplying by 100 will give the code (e.g. 400).
   * @return {number}
   */
  getVersionCode(): number;

  /**
   * Returns text for the OData version, e.g. "4.0".
   * @return {string}
   */
  getVersionText(): string;
}

/**
 * A designer-facing interface that provides access to a offline odata provider.
 */
interface IOfflineODataProviderProxy extends IODataProviderProxy {
  /**
   * Gets the offline parameters object
   * @return {boolean}
   */
  getOfflineParameters(): IOfflineODataParametersProxy;  

  /** 
   * Checks whether or not, there are any pending requests stored in the request 
   * queue that have not yet been uploaded.
   * @return {boolean}
   */
  isRequestQueueEmpty(): boolean;
    
  /** 
   * Whether or not there is a pending download (a download that was cancelled either 
   * explicitly or because the provider was closed). It may be possible to continue 
   * the download by triggering a new download.
   * @return {boolean}
   */
  hasPendingDownload(): boolean;
  
  /**
   * Whether or not there is a pending upload (a upload that was cancelled either explicitly
   * or because the provider was closed). It may be possible to continue the upload by triggering 
   * a new upload.
   * @returns {boolean}
   */
  hasPendingUpload(): boolean;

  /**
   * Gets the list of defining requests
   * @return {Object}
   */
  getDefiningRequests(): Array<IDefiningRequest>;
}

/**
 * A designer-facing interface that provides access to a offline odata parameters.
 */
interface IOfflineODataParametersProxy {
  /**
   * Gets the value of parameter
   * @param {string} name
   * @return {any}
   */
  get(name: string): any;

  /**
   * Gets the custom HTTP request headers
   * @return {boolean}
   */
  getCustomHeaders(): Object;  

  /**
   * Sets the custom HTTP request headers
   * @param {headers} custom HTTP request headers
   * @return {void}
   */
  setCustomHeaders(headers: Object): void;

}

/**
* A designer-facing interface that provides HTTP response content helper functions
*/
interface IHttpResponseContent {
  /**
   * Gets the response body
   * @return {any}
   */
  getData(): any;

  /**
   * Gets the response body as file
   * Note: This function is for iOS & Android only
   * @return {File}
   */
  toFile(destinationFilePath?: string): File;

  /**
   * Gets the response body as native image object
   * Note: This function is for iOS & Android only
   * @return {any}
   */
  toImage(): any;

  /**
   * Gets the response body as string
   * @return {string}
   */
  toString(): string;
}

/**
* A designer-facing interface that encapsulates HTTP response information
*/
interface IHttpResponse {
  /**
   * Gets the response headers with key/value pair
   */
  headers: Object;
  
  /**
   * Gets the mime type
   */
  mimeType: string;

  /**
   * Gets the HTTP status code
   */
  statusCode: number;

  /**
   * Gets the response content
   */
  content: IHttpResponseContent;
}

/**
 * Represents the interface for the changed object.
 */
interface IChangedObject {
  /**
   * Get the target ReadLink.
   */
  readLink: string;

  /**
   * Get the list of changed properties with key/value pair
   */
  changedProperties: object;

  /**
   * Get the list of original properties with key/value pair
   */
  originalProperties: object;
}

/**
 * A designer-facing interface that provides access to a data table cell.
 */
interface IDataTableCellProxy extends IClientAPI {
  /**
   * Get cell value
   * @return {string} the value of the cell
   */
  getValue(): string;

  /**
   * Set the value in the cell
   * @param value value to be set
   */
  setValue(value: string): void;

  /**
   * This method returns DataTableRow proxy
   * @return {IDataTableRowProxy}
   */
  getParent(): IDataTableRowProxy;

  /**
   * Get row index
   * @return {number}
   */
  getRowIndex(): number;

  /**
   * Get column index
   * @return {number}
   */
  getColumnIndex(): number;

  /**
   * This method returns DataTableCell Type
   * @return {string}
   */
  getType(): string 

  /**
   * Get data table cell name
   * @return {string} the name of the cell
   */
  getName(): string 

  /**
   * @returns {IPageProxy} the Page, which the element belongs to
   */
  getPageProxy(): IPageProxy
}

/**
 * A designer-facing interface that provides access to a data table cell.
 */
interface IDataTableListPickerCellProxy extends IDataTableCellProxy {
  /**
   * @return {string} the caption of the cell
   */
  getCaption(): string;

  /**
   * Set the caption property of the cell
   * @param {string} caption value to set.
   */
  setCaption(caption: string): void;

  /**
   * Get a target specifier from this cell
   * @returns {ITargetProxy}
   */
  getTargetSpecifier(): IFormCellTargetProxy;

  /**
   * Set the target specifier
   * @param {ITargetProxy} specifier specifier for the cell
   */
  setTargetSpecifier(specifier: IFormCellTargetProxy): Promise<any>;
}

/**
 * FilterBarProxy is mainly for FilterBar operations.
 * 
 * @remarks
 * Use this proxy to read FilterBar sections and navigate to their controls.
 *
 * @example
 * ```javascript
 * // Access filter bar from a table or collection section
 * export default function OnFilterBarAction(context) {
 *   const sectionedTable = context.getPageProxy().getControl('SectionedTable');
 *   const tableSectionProxy = sectionedTable.getSection('Section');
 *   const filterBarProxy = tableSectionProxy.getFilterBar();
 *   const sectionCount = filterBarProxy.getSections()?.length ?? 0;
 *   console.log(`FilterBar sections: ${sectionCount}`);
 * }
 * ```
 */
export interface IFilterBarProxy extends ISectionRowElementProxy {

  /**
   * Get the parent section proxy for this FilterBar.
   * @return {IBindableSectionProxy}
   *
   * @remarks
   * The parent is the section that owns the FilterBar.
   * 
   * @example
   * ```javascript
   * const filterBarProxy = context;
   * const sectionProxy = filterBarProxy.getParent();
   * console.log(`Parent section type: ${sectionProxy.getType()}`);
   * ```
   */
  getParent(): IBindableSectionProxy;

  /**
   * Get all sections of this FilterBar.
   * @return {IFilterBarSectionProxy[]}
   *
   * @remarks
   * Each section contains a group of FilterBar controls.
   * 
   * @example
   * ```javascript
   * const filterBarProxy = context;
   * const sections = filterBarProxy.getSections() || [];
   * const totalControls = sections
   *   .map(section => section.getControls()?.length ?? 0)
   *   .reduce((sum, count) => sum + count, 0);
   * console.log(`Total FilterBar controls: ${totalControls}`);
   * ```
   */
  getSections(): IFilterBarSectionProxy[];

  /**
   * Get the active filter query string generated from current FilterBar selections.
   * @return {string}
   *
   * @remarks
   * Returns the query expression that is currently applied as filter criteria.
   *
   * @example
   * ```javascript
   * const filterBarProxy = context;
   * const filterQuery = filterBarProxy.filterBarFilterQuery;
   * console.log(`Current FilterBar filter query: ${filterQuery}`);
   * ```
   */
  get filterBarFilterQuery(): string;

  /**
   * Get the active sorter query string generated from current FilterBar selections.
   * @return {string}
   *
   * @remarks
   * Returns the orderBy expression that is currently applied.
   *
   * @example
   * ```javascript
   * const filterBarProxy = context;
   * const sorterQuery = filterBarProxy.filterBarSorterQuery;
   * console.log(`Current FilterBar sorter query: ${sorterQuery}`);
   * ```
   */
  get filterBarSorterQuery(): string;

  /**
   * Get current filter selections represented by the FilterBar controls.
   * @return {FilterSelection[]}
   *
   * @remarks
   * Includes only controls that currently contribute a selection.
   *
   * @example
   * ```javascript
   * const filterBarProxy = context;
   * const filters = filterBarProxy.filters;
   * console.log(`Selected filter count: ${filters.length}`);
   * ```
   */
  get filters(): FilterSelection[];

  /**
   * This method sets and overrides the currently applied filters
   * @param {FilterSelection[]} newFilters - An array of filter selection objects to be applied to the filter bar. Each entry should include the control name, and value.
   * @returns {Promise} A promise that resolves when the filters have been applied and the filter bar has been updated.
   * @example
   * ```javascript
   * // Access filter bar sections from a FilterBarProxy
   * const tableSectionProxy = context;
   * const filterBarProxy = tableSectionProxy.getFilterBar();
   * filterBarProxy.setFilters([context.createFilterSelection('StatusControl', 'Completed')]);
   * const filters = filterBarProxy.filters;
   * 
   * console.log(`Total controls with filter applied in the filter bar: ${filters.length}`);
   * ```
   */
  setFilters(newFilters: FilterSelection[]): Promise<any>;
}

/**
 * FilterBarSectionProxy is mainly for operations of section controls on a FilterBar.
 * 
 * @remarks
 * Use this proxy to access controls in the section and navigate upward.
 *
 * @example
 * ```javascript
 * export default function InspectFilterBarSection(context) {
 *   const sectionProxy = context;
 *   const controls = sectionProxy.getControls() || [];
 *   console.log(`Controls in section: ${controls.length}`);
 * }
 * ```
 */
export interface IFilterBarSectionProxy extends ISectionRowElementProxy {

  /**
   * Get the parent FilterBar proxy.
   * @return {IFilterBarProxy}
   *
   * @remarks
   * This is the FilterBar that owns the current section.
   * 
   * @example
   * ```javascript
   * const sectionProxy = context;
   * const filterBarProxy = sectionProxy.getParent();
   * console.log(`FilterBar name: ${filterBarProxy.getName()}`);
   * ```
   */
  getParent(): IFilterBarProxy;

  /**
   * Get the section container proxy that owns this FilterBar.
   * @return {IBindableSectionProxy}
   *
   * @remarks
   * Useful when rule logic needs both FilterBar and section context.
   * 
   * @example
   * ```javascript
   * const filterBarSectionProxy = context;
   * const sectionProxy = filterBarSectionProxy.getSectionProxy();
   * console.log(`Owning section: ${sectionProxy.getName()}`);
   * ```
   */
  getSectionProxy(): IBindableSectionProxy;

  /**
   * Get all controls in this FilterBar section.
   * @return {IFilterBarControlProxy[]}
   *
   * @remarks
   * Returned controls can be cast by type to use specialized APIs.
   * 
   * @example
   * ```javascript
   * const sectionProxy = context;
   * const controls = sectionProxy.getControls() || [];
   * controls.forEach(control => {
   *   console.log(`Control: ${control.getName()}, value: ${control.getValue()}`);
   * });
   * ```
   */
  getControls(): IFilterBarControlProxy[];
}

/**
 * FilterBarControlProxy is mainly for operations of controls on a FilterBar.
 * 
 * @remarks
 * This is the base proxy for all FilterBar control types.
 *
 * @example
 * ```javascript
 * export default function InspectFilterBarControl(context) {
 *   const control = context;
 *   console.log(`Control ${control.getName()} query: ${control.getFilterQuery()}`);
 * }
 * ```
 */
export interface IFilterBarControlProxy extends ISectionRowElementProxy {

  /**
   * Get the parent FilterBar section proxy.
   * @return {IFilterBarSectionProxy}
   *
   * @remarks
   * The parent section groups related FilterBar controls.
   * 
   * @example
   * ```javascript
   * const control = context;
   * const sectionProxy = control.getParent();
   * console.log(`Sibling controls: ${sectionProxy.getControls().length}`);
   * ```
   */
  getParent(): IFilterBarSectionProxy;

  /**
   * Get the section proxy that owns this FilterBar.
   * @return {IBindableSectionProxy}
   *
   * @remarks
   * This is the table/collection section where the FilterBar is defined.
   * 
   * @example
   * ```javascript
   * const control = context;
   * const sectionProxy = control.getSectionProxy();
   * console.log(`Owning section type: ${sectionProxy.getType()}`);
   * ```
   */
  getSectionProxy(): IBindableSectionProxy;

  /**
   * Get current control value.
   * @return {any} the current value
   *
   * @remarks
   * Value type depends on control type and metadata definition.
   * 
   * @example
   * ```javascript
   * const control = context;
   * const value = control.getValue();
   * console.log(`Current value: ${value}`);
   * ```
   */
  getValue(): any;

  /**
   * Get whether this control should appear on the FilterBar header.
   * @return {boolean} whether the control is shown on the bar
   *
   * @remarks
   * This flag is metadata-driven and may default to true.
   *
   * @example
   * ```javascript
   * const control = context;
   * if (control.getDisplayOnBar()) {
   *   console.log('Displayed on bar');
   * }
   * ```
   */
  getDisplayOnBar(): boolean;

  /**
   * Get the simple query configuration associated with this control.
   * @return {any} the simple query object
   *
   * @remarks
   * Returns the metadata-defined simple query object (for example property/operator) used for query generation.
   *
   * @example
   * ```javascript
   * const control = context;
   * const simpleQuery = control.getSimpleQuery();
   * console.log(`Simple query: ${JSON.stringify(simpleQuery)}`);
   * ```
   */
  getSimpleQuery(): any;

   /**
   * Get control label.
   * @return {string} control label
   */
  getLabel(): string;
}

/**
 * A designer-facing interface that provides access to base picker controls in a FilterBar.
 *
 * @remarks
 * This interface exposes shared picker behavior for FilterBar picker controls.
 * Use these APIs to inspect selection capabilities and configured picker items.
 *
 * @example
 * ```javascript
 * const control = context;
 * const allowEmpty = control.getAllowEmptySelection();
 * const allowMultiple = control.getAllowMultipleSelection();
 * const items = control.getItems();
 * console.log(`Allow empty: ${allowEmpty}, allow multiple: ${allowMultiple}, items: ${items?.length ?? 0}`);
 * ```
 */
export interface IFilterBarBasePickerControlProxy extends IFilterBarControlProxy {
  /**
   * Get whether empty selection is allowed.
   * @return {boolean} whether empty selection is allowed
   */
  getAllowEmptySelection(): boolean;

  /**
   * Get whether multiple selection is allowed.
   * @return {boolean} whether multiple selection is allowed
   */
  getAllowMultipleSelection(): boolean;

  /**
   * Get configured items.
   * @return {any} configured items
   */
  getItems(): any;
}

/**
 * A designer-facing interface that provides access to Segmented controls in a FilterBar.
 *
 * @remarks
 * Use this interface when the FilterBar control type is Segmented.
 *
 * @example
 * ```javascript
 * const control = context;
 * const items = control.getItems();
 * console.log(`Segmented items: ${items?.length ?? 0}`);
 * ```
 */
export interface IFilterBarSegmentedControlProxy extends IFilterBarBasePickerControlProxy {
  /**
   * Get segmented items.
   * @return {any} segmented items
   */
  getItems(): any;
}

/**
 * A designer-facing interface that provides access to Sorter controls in a FilterBar.
 *
 * @remarks
 * Sorter controls expose selectable sort definitions.
 *
 * @example
 * ```javascript
 * const control = context;
 * const items = control.getItems();
 * console.log(`Sorter items: ${items?.length ?? 0}`);
 * ```
 */
export interface IFilterBarSorterControlProxy extends IFilterBarBasePickerControlProxy {
  /**
   * Get sorter items.
   * @return {any} sorter items
   */
  getItems(): any;
}

/**
 * A designer-facing interface that provides access to ListPicker controls in a FilterBar.
 *
 * @remarks
 * ListPicker controls expose picker-specific item collections via getPickerItems().
 *
 * @example
 * ```javascript
 * const control = context;
 * const pickerItems = control.getPickerItems();
 * console.log(`ListPicker items: ${pickerItems?.length ?? 0}`);
 * ```
 */
export interface IFilterBarListPickerControlProxy extends IFilterBarBasePickerControlProxy {
  /**
   * Get ListPicker items.
   * @return {any} picker items
   */
  getPickerItems(): any;
}

/**
 * A designer-facing interface that provides access to MultiSorter controls in a FilterBar.
 *
 * @remarks
 * MultiSorter controls expose helper text and sortable item definitions.
 *
 * @example
 * ```javascript
 * const control = context;
 * const helperText = control.getHelperText();
 * const items = control.getItems();
 * console.log(`MultiSorter helper: ${helperText}, items: ${items?.length ?? 0}`);
 * ```
 */
export interface IFilterBarMultiSorterControlProxy extends IFilterBarControlProxy {
  /**
   * Get helper text.
   * @return {string} helper text
   */
  getHelperText(): string;

  /**
   * Get multi-sorter items.
   * @return {any} multi-sorter items
   */
  getItems(): any;
}

/**
 * A designer-facing interface that provides access to Switch controls in a FilterBar.
 *
 * @remarks
 * Switch controls expose helper text in addition to the shared base control APIs.
 *
 * @example
 * ```javascript
 * const control = context;
 * const helperText = control.getHelperText();
 * console.log(`Switch helper text: ${helperText}`);
 * ```
 */
export interface IFilterBarSwitchControlProxy extends IFilterBarControlProxy {
  /**
   * Get switch helper text.
   * @return {string} switch helper text
   */
  getHelperText(): string;
}

/**
 * A designer-facing interface that provides access to Slider controls in a FilterBar.
 *
 * @remarks
 * Slider controls provide helper text, range, step, and precision metadata.
 *
 * @example
 * ```javascript
 * const control = context;
 * const min = control.getMinValue();
 * const max = control.getMaxValue();
 * const step = control.getStep();
 * const decimals = control.getDecimalPlaces();
 * console.log(`Range: ${min} - ${max}, step: ${step}, decimals: ${decimals}`);
 * ```
 */
export interface IFilterBarSliderControlProxy extends IFilterBarControlProxy {
  /**
   * Get slider helper text.
   * @return {string} slider helper text
   */
  getHelperText(): string;

  /**
   * Get slider minimum value.
   * @return {number} minimum value
   */
  getMinValue(): number;

  /**
   * Get slider maximum value.
   * @return {number} maximum value
   */
  getMaxValue(): number;

  /**
   * Get slider decimal places.
   * @return {number} decimal places
   */
  getDecimalPlaces(): number;
}

 declare enum SortOrder {
  Ascending = "asc",
  Descending = "desc"
}
declare type FilterTerm = (FilterBuilder | string);
interface IFilterTerm {
  group: FilterTerm[];
  op: string;
  property: string;
  rhs: string;
}
 declare class FilterBuilder extends BaseDataBuilder implements IDebuggable {
  constructor(context: IContext, ...terms: FilterTerm[]);
  readonly terms: IFilterTerm[];
  readonly debugString: string;
  and(...terms: FilterTerm[]): this;
  equal(property: string, rhs: any): this;
  greaterThan(property: string, rhs: any): this;
  lessThan(property: string, rhs: any): this;
  lessThanOrEqual(property: string, rhs: any): this;
  not(...terms: FilterTerm[]): this;
  notEqual(property: string, rhs: any): this;
  or(...terms: FilterTerm[]): this;
  build(): Promise<any>;
}
 declare class MDKSearchBuilder extends FilterBuilder {
  constructor(context: IContext, terms: FilterTerm[], searchString: string);
  readonly debugString: string;
  build(): Promise<any>;
}

 declare class DataQueryBuilder extends BaseDataBuilder implements IDebuggable {
  static systemQueryOptions: {
      Expand: string;
      Filter: string;
      OrderBy: string;
      Select: string;
      Skip: string;
      Top: string;
  };
  constructor(context: IContext, queryOptions?: string);
  readonly expandOption: string[];
  readonly filterOption: FilterBuilder;
  readonly orderByOption: string[];
  readonly originalQueryOptions: Object;
  readonly selectOption: string[];
  readonly skipOption: (number | string);
  readonly topOption: (number | string);
  readonly userFilter: string;
  readonly userOrderBy: string;
  readonly hasExpand: boolean;
  readonly hasFilter: boolean;
  readonly hasMDKSearch: boolean;
  readonly hasOrderBy: boolean;
  readonly hasSelect: boolean;
  readonly hasSkip: boolean;
  readonly hasTop: boolean;
  readonly debugString: string;
  build(): Promise<any>;
  expand(...expandOptions: string[]): this;
  filter(...terms: FilterTerm[]): FilterBuilder;
  filterTerm(...terms: FilterTerm[]): FilterBuilder;
  mdkSearch(searchString: string): MDKSearchBuilder;
  orderBy(...orderByOptions: string[]): this;
  select(...selectOptions: string[]): this;
  skip(skip: number | string): this;
  top(top: number | string): this;
  updateQueryOptionsForUniqueRecord(): this;
}

 declare class BaseDataBuilder implements IBuilder {
  constructor(_context: IContext);
  build(): Promise<any>;
  readonly data: any;
}

 interface ISearchContext {
  filter?: string;
  orderBy?: string;
  searchKeys?: string[];
  service?: ITargetServiceSpecifier;
}
 interface IContext {
  binding?: any;
  clientAPI: IClientAPI;
  clientAPIProps: IClientAPIProps;
  clientData: IClientData;
  element?: any;
  searchContext?: ISearchContext;
  readonly readLink: string;
  resetClientAPIProps(): void;
}
 interface IClientAPIProps {
  actionBinding?: any;
  appEventData?: any;
  bindingProperty?: string;
  cancelPendingActions?: boolean;
  filter?: IFilterable;
  missingRequiredControls?: Array<any>;
  newControlValue?: any;
  pressedItem?: PressedItem;
}
 interface IClientData {
  actionResults?: any;
  DeletedAttachments?: any;
  UserId?: string;
}
 declare function setFromPageFunction(func: () => IContext): void;
 declare function fromPage(): IContext;

 interface IDebuggable {
  readonly debugString: string;
}

 interface IBuilder {
  data: any;
  build(): Promise<any>;
}

/**
 * Represent and flatten Target metadata.
 */
 interface ITargetSpecifier {
  /**
   * Defining the entity set
   */
  entitySet: string;
  /**
   * Defining the query
   */
  queryOptions?: string;
  /**
   * Defining the query builder object
   */
  queryBuilder?: object;
  /**
   * Defining the readlink
   */
  readLink?: string;
  /**
   * Defining the editlink
   */
  editLink?: string;
  /**
   * Defining the ID type
   */
  uniqueIdType: UniqueIdType;
}

/**
 * Represent and flatten Target Service metadata.
 * @ignore 
 */
 interface ITargetServiceSpecifier extends ITargetSpecifier {
  function?: {Name: string, Parameters?: {key: string, value: any}};
  keyProperties?: string[] | { key: string, value: any };
  serviceUrl: string;
  offlineEnabled: boolean;
  // The "properties" property can be either an array or a dictionary.
  properties: string[] | { key: string, value: any };
  requestOptions?: { key: string, value: any };
  statefulService?: boolean;
}

/**
 * Represent and flatten Target Link metadata.
 * @ignore
 */
 interface ITargetLinkSpecifier extends ITargetSpecifier {
  property: string;
}

/**
 * Represent and flatten Media metadata.
 * @ignore
 */
 interface IMediaSpecifier {
  content: any;
  contentType: string;
  url?: string;
}

/**
 * Represent and flatten Defining Request.
 * @ignore
 */
 interface IDefiningRequest {
  Name: string;
  Query: string;
  AutomaticallyRetrievesStreams: boolean;
}

/**
 * Represent and flatten Parent metadata.
 * @ignore
 */
 interface IParentLinkSpecifier {
  entitySet: string;
  queryOptions?: string;
  readLink?: string;
  navigationProperty: string;
}

 declare enum UniqueIdType {
  String = 0,
  Integer = 1
}
 declare function isUniqueIdTypeInteger(type: UniqueIdType): boolean;
 declare function isUniqueIdTypeString(type: UniqueIdType): boolean;
 declare function stringToUniqueIdType(uniqueIdType: string): UniqueIdType;

 interface IFilterable {
  getSorterCriteria(name: string): FilterCriteria;
  getFilterCriteria(name: string, values: Array<object>): FilterCriteria;
  setFilterResult(result: Array<FilterCriteria>): any;
  getSelectedValues(): Array<FilterCriteria>;
}
 declare enum FilterType {
  Filter = 1,
  Sorter = 2
}
 declare class FilterActionResult {
  constructor(filter: string, sorter: string);
  readonly filter: string;
  readonly sorter: string;
}
 declare class FilterCriteria {
  constructor(type: FilterType, name: string, caption: string, filterItems: Array<object>);
  isFilter(): boolean;
  isSorter(): boolean;
  readonly name: string;
  readonly caption: string;
  readonly filterItems: Array<object>;
}

declare enum QueryOperator {
  eq = "eq",
  ne = "ne",
  lt = "lt",
  le = "le",
  gt = "gt",
  ge = "ge",
}

declare class FilterSelection {
  constructor(type: FilterType, name: string, values: Array<object>);
  isFilter(): boolean;
  isSorter(): boolean;
  readonly type: FilterType;
  readonly name: string;
  readonly values: Array<object>;
  readonly queryProperty: string | undefined;
  readonly queryOperator: QueryOperator | undefined;
  readonly isComplexQuery: boolean;
}

 declare class PressedItem extends PressedItemBase {
    static WithControlView(controlView: any): PressedItem;
    static WithToolbarItem(toolbarItem: any): PressedItem;
    static WithActionItem(actionItem: any): PressedItem;
    isControlView(): boolean;
    isToolbarItem(): boolean;
    isActionItem(): boolean;
    getControlView(): any;
    getToolbarItem(): any;
    getActionItem(): any;
}

 declare class PressedItemBase {
  static WithControlView(controlView: any): PressedItem;
  static WithToolbarItem(toolbarItem: any): PressedItem;
  static WithActionItem(actionItem: any): PressedItem;
  isControlView(): boolean;
  isToolbarItem(): boolean;
  isActionItem(): boolean;
  getControlView(): any;
  getToolbarItem(): any;
  getActionItem(): any;
}

 declare abstract class IView {
    context: IContext;
    abstract view(): any;
    initialize(controlData: IControlData): void;
    definition(): any;
    onDisplayingModal(isFullPage: boolean): void;
    onDismissingModal(): void;
    onNavigatedTo(initialLoading: boolean): void;
    onNavigatedFrom(pageExists: boolean): void;
    onNavigatingTo(initialLoading: boolean): void;
    onNavigatingFrom(pageExists: boolean): void;
    onPageUnloaded(pageExists: boolean): void;
    onPress(...args: any[]): void;
    onPageLoaded(initialLoading: boolean): void;
    valueResolver(): typeof ValueResolver;
    setStyle(): void;
    viewIsNative(): boolean;
    androidContext(): any;
}

 declare class ValueResolver {
  static resolveValue(sValue: any, context?: IContext, recursive?: boolean): Promise<any>;
  static canRecursive(sValue: any, value: any): boolean;
  static canResolve(sValue: any): boolean;
  static resolveKeyValues(definitionObj: any, context?: IContext): Promise<{
      key: string;
      value: any;
  }>;
  static resolveArrayOfKeyValues(definitionObjArray: any, context?: IContext): Promise<{
      key: string;
      value: string;
  }[]>;
  static parseBinding(value: string, context?: IContext): any;
}

 interface IControlData {
  page: MDKPage;
  context: Context;
  container: ContainerDefinition;
  definition: any;
  dataService?: IDataService;
}
 declare function asControlData(page: MDKPage, context: Context, container: ContainerDefinition, definition: any): IControlData;
 declare class MDKPage extends Page implements IMDKPage, IODataEventListener {
  static resetNavigateFlags(): void;
  static setResetActionInProgress(flag: boolean): void;
  static garbageCollect(): void;
  static setDisplayingExternalPage(display: any): void;
  context: Context;
  staleDataListeners: Set<IODataEventListener>;
  previousPage: MDKPage;
  isResuming: boolean;
  _isClearHistoryNavigation: boolean;
  constructor(pageDefinition: PageDefinition);
  progressBar: ProgressBar;
  progressBarVisible: boolean;
  addChildControl(control: IControl): void;
  objectHeader: boolean;
  profileHeader: boolean;
  dismissModalPage(canceled: boolean, onModalComplete: Function, onModalCancel: Function): Promise<void>;
  waitUntilModalDismissed(): Promise<any>;
  dismissPopover(): void;
  displayModalPage(modalPage: MDKPage, context: Context, closeCallback: Function, isPopover: boolean, isFullPage?: boolean): void;
  readonly controls: IControl[];
  readonly debugString: string;
  readonly isMDKPage: boolean;
  isPopover: boolean;
  readonly definition: PageDefinition;
  modalFrame: ModalFrame;
  caption: string;
  readonly isNavigating: boolean;
  readonly isBackNavigation: boolean;
  isExternalNavigating: boolean;
  readonly filter: IFilterable;
  getToolbar(): Promise<ToolbarContainer>;
  updateProgressBar(): void;
  onLoaded(): void;
  findFormCellContainerOnPage(): FormCellContainer;
  initialize(context: Context, isModal: boolean): void;
  onDataChanged(action: ODataAction, result: any): void;
  _redrawActionBar(): void;
  _redrawToolbar(): void;
  redraw(): void;
  onUnloaded(): void;
  unregisterDataListeners(): void;
  readonly isCurrentPage: boolean;
  redrawStaleDataListeners(allowIndicator?: boolean): void;
  onLayout(left: number, top: number, right: number, bottom: number): void;
  isModal(): boolean;
  updateSearchIconVisibility(): void;
  runOnLoadedEvent(): Promise<any>;
  finishedCheckingWithErrors(newValue: string): void;
  finishedScanningWithResults: (results: any) => void;
  errorScanningWithMessage: (message: any) => void;
  readonly searchField: TextField;
  finishedCheckingWithResults(result: boolean): void;
  androidSearchbarUISetupHelper(initialSetup: boolean): void;
}

 declare class Context implements IContext {
  binding?: any;
  element?: any;
  static fromPage(): IContext;
  clientAPIProps: IClientAPIProps;
  constructor(binding?: any, element?: any);
  resetClientAPIProps(): void;
  readonly clientData: IClientData;
  readonly clientAPI: IClientAPI;
  readonly readLink: string;
}

 declare class ContainerDefinition extends BaseJSONDefinition {
  constructor(path: any, data: any);
  getCaption(): any;
  getControls(): any;
  isValidControl(type: any): boolean;
}

 declare class BaseJSONDefinition extends BaseDefinition {
  constructor(path: any, data: any);
  readonly name: string;
  readonly data: any;
  getName(): string;
}

 declare class BaseDefinition {
  path: string;
  constructor(path: any, data: any);
  getName(): string;
}

 declare abstract class IDataService {
  static setInstance(provider: IDataService): void;
  static instance(): IDataService;
  static isValid(): boolean;
  abstract createService(serviceUrl: string, online: boolean, csdlOptions: string[], serviceOptions: any, mdkOptions: any): Promise<any>;
  abstract openService(serviceUrl: string, password: string, username: string): Promise<any>;
  abstract downloadMedia(service: ITargetServiceSpecifier): Promise<any>;
  abstract isMediaLocal(service: ITargetServiceSpecifier): Promise<boolean>;
  abstract downloadOfflineOData(params: any): Promise<any>;
  abstract initializeOfflineStore(params: any): Promise<any>;
  abstract clearOfflineStore(params: any): Promise<any>;
  abstract closeOfflineStore(params: any): Promise<any>;
  abstract uploadOfflineOData(params: any): Promise<any>;
  abstract read(service: ITargetServiceSpecifier): Promise<ObservableArray<any>>;
  abstract readFromService(service: ITargetServiceSpecifier): Promise<ObservableArray<any>>;
  abstract update(service: ITargetServiceSpecifier, createLinks: ITargetLinkSpecifier[], updateLinks: ITargetLinkSpecifier[], deleteLinks: ITargetLinkSpecifier[], headers: Object): Promise<any>;
  abstract create(service: ITargetServiceSpecifier, createLinks: ITargetLinkSpecifier[], headers: Object): Promise<any>;
  abstract createRelated(service: ITargetServiceSpecifier, parent: IParentLinkSpecifier, headers: Object): Promise<any>;
  abstract createMedia(service: ITargetServiceSpecifier, headers: Object, media: IMediaSpecifier[], isOnlineRequest: boolean): Promise<any>;
  abstract createRelatedMedia(service: ITargetServiceSpecifier, parent: IParentLinkSpecifier, headers: Object, media: IMediaSpecifier[], isOnlineRequest: boolean): Promise<any>;
  abstract beginChangeSet(service: ITargetServiceSpecifier): Promise<any>;
  abstract cancelChangeSet(service: ITargetServiceSpecifier): Promise<any>;
  abstract commitChangeSet(service: ITargetServiceSpecifier): Promise<any>;
  abstract isOnChangeSet(): boolean;
  abstract delete(service: ITargetServiceSpecifier, headers: Object): Promise<any>;
  abstract deleteMedia(service: ITargetServiceSpecifier): Promise<any>;
  abstract urlForServiceName(serviceName: string): string;
  abstract count(service: ITargetServiceSpecifier, context: IContext): Promise<number>;
  abstract offlineEnabled(serviceName: string): boolean;
  abstract callFunction(service: ITargetServiceSpecifier, headers: Object): Promise<ObservableArray<any>>;
  abstract getPropertyType(serviceName: string, entitySet: string, propertyName: string): string;
  abstract getVersion(serviceUrl: string): number;
  abstract getOfflineStoreStatus(serviceName: string): string;
  abstract uploadStream(service: ITargetServiceSpecifier, headers: Object): Promise<any>;
  abstract downloadStream(service: ITargetServiceSpecifier, headers: Object): Promise<any>;
  abstract undoPendingChanges(service: ITargetServiceSpecifier): Promise<any>;
}

 interface IMDKPage {
  isMDKPage: boolean;
  context: Context;
  controls: IControl[];
  definition: PageDefinition;
  findFormCellContainerOnPage(): IControl;
  initialize(context: Context, isModal: boolean): any;
}

 declare abstract class IControl extends IView {
  readonly builder: IBuilder;
  abstract observable(): IObservable;
  formatRule(): any;
  container(): ContainerDefinition;
  page(): any;
  getValue(): any;
  abstract setContainer(container: IControl): any;
  abstract setValue(value: any, notify: boolean, isTextValue?: boolean): Promise<any>;
  setStyle(cssClassName?: string): void;
  viewIsNative(): boolean;
  setValidationProperty(key: string, value: any): void;
  redraw(): void;
  onDataChanged(action: any, result: any): void;
  readonly controlProxy: IControlProxy;
  readonly isControl: boolean;
  readonly isFormCell: boolean;
  readonly type: string;
}

 declare class PageDefinition extends ContainerDefinition {
  constructor(path: any, data: any);
  getActionBarItems(): any;
  getToolbar(): ToolbarDefinition;
  getOnLoadedEvent(): any;
  getOnReturningEvent(): any;
  getOnResumeEvent(): any;
  getOnUnLoadedEvent(): any;
  getOnActivityBackPressedEvent(): any;
  getResult(): any;
  readonly dataSubscriptions: Array<any>;
}

 declare class ToolbarDefinition extends ContainerDefinition {
  constructor(path: any, data: any);
  getCaption(): void;
  getPosition(): any;
  isValidControl(type: any): boolean;
}

 declare class ProgressBar extends View {
  show(): void;
  hide(): void;
}

 declare class ModalFrame extends Frame {
  static isModal(frame: Frame): boolean;
  static isTopMostModal(): boolean;
  static close(page: MDKPage, canceled?: boolean, allowIndicator?: boolean): void;
  _dialogFragment: any;
  constructor(_parentPage: MDKPage, _isFullPage: boolean);
  readonly isFullPage: boolean;
  onUnloaded(): void;
  parentPage: MDKPage;
}

 declare class ToolbarContainer extends BaseControl {
  constructor(page: Page, definition: ToolbarDefinition, containerContext: Context);
  view(): ToolBar;
  setStyle(cssClassName?: string): void;
  getPosition(): ToolbarPosition;
  getToolbarItems(): Array<ToolbarItem>;
  setItemCaption(toolbarItemName: string, newCaption: string): Promise<any>;
  addToolbarItemWithName(name: string, onPressAction?: string, caption?: string, image?: string, systemItem?: string, enabled?: boolean, width?: number, clickable?: boolean, itemType?: string): Promise<any>;
  addToolbarItem(newItemDef: ToolbarItemDefinition): Promise<any>;
  addToolbarItems(newItemDefs: any): Promise<any>;
  removeToolbarItem(name: string): void;
  enableToolbarItem(name: string, enable: boolean): void;
  redraw(): void;
}
 declare enum ToolbarPosition {
  bottom = 1,
  top = 2
}

 declare class ToolbarItem extends BaseControl {
  static getItemStyle(selector: any, cssClassName: any): Object;
  constructor();
  readonly isBindable: boolean;
  initialize(controlData: IControlData): void;
  view(): ToolBarItem;
  readonly clickable: boolean;
  readonly name: string;
  readonly enabled: boolean;
  readonly caption: string;
  readonly visibility: Visibility;
  readonly width: number;
  readonly systemItem: string;
  readonly itemType: string;
  setCaption(caption: string): Promise<any>;
  setEnabled(enabled: boolean): Promise<any>;
  setStyle(cssClassName?: string): void;
  setImage(img: string): void;
  setVisibility(visibility: Visibility): void;
  setWidth(width: number): void;
  setSystemItem(systemItem: string): void;
  setItemType(itemType: string): void;
  createToolBarItem(def: ToolbarItemDefinition): Promise<any>;
  redraw(): void;
}

 declare class ToolbarItemObservable extends BaseObservable {
  constructor(oControl: IControl, oControlDef: ToolbarItemDefinition, oPage: Page);
  getBindingTarget(): string;
}
 declare class BaseControl extends IControl {
  readonly isBindable: boolean;
  parent: IControl;
  bind(): Promise<any>;
  initialize(controlData: IControlData): void;
  setContainer(container: IControl): void;
  getContainer(): IControl;
  setView(view: any): void;
  view(): any;
  observable(): BaseObservable;
  setValue(value: any, notify: boolean, isTextValue?: boolean): Promise<any>;
  onPageUnloaded(pageExists: boolean): void;
  readonly binding: any;
}

 declare class FormCellContainer extends BaseControl {
  bind(): Promise<any>;
  initialize(controlData: IControlData): void;
  viewIsNative(): boolean;
  setStyle(style: string): void;
  redraw(builtData?: any): Promise<void>;
  readonly controls: BaseFormCell[];
  updateCell(control: BaseFormCell): void;
  updateCellByProperties(control: BaseFormCell, data: any): void;
  onLoaded(): void;
}

 declare class BaseFormCell extends BaseControl {
  readonly builder: FormCellDataBuilder;
  readonly isBindable: boolean;
  readonly isFormCell: boolean;
  readonly searchString: string;
  visible: boolean;
  createFormCellModel(builtData: any): Promise<MDKFormCellModel>;
  getTargetSpecifier(): any;
  build(): Promise<any>;
  bind(): Promise<any>;
  redraw(): Promise<any>;
  updateFormCellModel(redraw?: boolean): Promise<any>;
  setEditable(isEditable: boolean): void;
  setStyle(style?: string, target?: string): any;
  setValidationProperty(key: string, value: any): void;
  clearValidation(): void;
  clearValidationOnValueChange(): void;
  setTargetSpecifier(specifier: any, redraw?: boolean): Promise<any>;
  setValue(value: any, notify: boolean, isTextValue?: boolean): Promise<any>;
  setVisible(isVisible: boolean): void;
  onLoaded(): Promise<any>;
}

 declare abstract class ODataAction extends BaseAction {
  constructor(definition: ODataServiceActionDefinition);
  onSuccess(actionResult: IActionResult): Promise<IActionResult>;
  getEntitySet(): string;
  getResolvedEntitySet(): string;
  getService(): string;
}

 declare class ODataServiceActionDefinition extends BaseActionDefinition {
  getService(): string;
  getEntitySet(): string;
  getProperties(): {
      key: string;
      value: any;
  };
  getForce(): boolean;
  getDefiningRequests(): Array<Object>;
  getHeaders(): Object;
}

 declare class BaseActionDefinition extends BaseJSONDefinition {
  static type: {
      ApplicationUpdate: string;
      BannerMessage: string;
      ChangeSet: string;
      ChangeUserPasscode: string;
      CheckBarcodeScannerPrerequisite: string;
      CheckRequiredFields: string;
      ClearOfflineOData: string;
      CloseOfflineOData: string;
      ClosePage: string;
      CreateODataEntity: string;
      CreateODataMedia: string;
      CreateODataRelatedEntity: string;
      CreateODataRelatedMedia: string;
      CreateODataService: string;
      DeleteODataEntity: string;
      DeleteODataMedia: string;
      DownloadMediaOData: string;
      DownloadOfflineOData: string;
      DownloadStreamOData: string;
      Filter: string;
      InitializeOfflineOData: string;
      LoggingLogMessage: string;
      LoggingSetLevel: string;
      LoggingSetState: string;
      LoggingUpload: string;
      Logout: string;
      Message: string;
      Navigation: string;
      ODataCallFunction: string;
      OpenBarcodeScanner: string;
      OpenDocument: string;
      OpenODataService: string;
      PopoverMenu: string;
      ProgressBanner: string;
      PushNotificationRegister: string;
      PushNotificationUnregister: string;
      ReadODataService: string;
      SetLanguage: string;
      SetRegion: string;
      ToastMessage: string;
      UndoPendingChanges: string;
      UpdateODataEntity: string;
      UploadOfflineOData: string;
      UploadStreamOData: string;
  };
  constructor(path: string, data: any);
  readonly failureAction: string;
  readonly invalidAction: string;
  readonly successAction: string;
  readonly type: string;
  readonly validationRule: string;
  getOnSuccessLog(): LogDetail;
  getOnFailureLog(): LogDetail;
  getOnInvalidLog(): LogDetail;
  readonly showActivityIndicator: boolean;
  readonly activityIndicatorText: string;
  readonly actionResult: any;
}
 declare class LogDetail {
  constructor(detailDefinition: any);
  getMessage(): string;
  getLevel(): string;
}

 declare class BaseAction implements IAction {
  definition: BaseActionDefinition;
  constructor(definition: BaseActionDefinition);
  readonly enabled: Promise<IActionResult>;
  readonly name: string;
  readonly type: string;
  readonly valid: Promise<IActionResult>;
  readonly defaultIndicatorText: string;
  setDefaultIndicatorText(defaultIndicatorText: string): void;
  execute(): Promise<IActionResult>;
  onCompletion(result: IActionResult): Promise<IActionResult>;
  onFailure(result: IActionResult): Promise<any>;
  onInvalid(result: IActionResult): Promise<IActionResult>;
  onSuccess(result: IActionResult): Promise<IActionResult>;
  context(): IContext;
}

 interface IAction {
  
  definition: BaseActionDefinition;
  // Return whether or not the action is enabled.
  // @return Boolean
  enabled: Promise<IActionResult>;

  name: string;

  type: string;
  
  // Return whether or not the action is valid.
  // @return Boolean
  valid: Promise<IActionResult>;
  
  defaultIndicatorText: string;
  // Return the action's context
  // @return IContext
  context(): IContext;
  
  // Main execution, returns a Promise indicating whether this succeded/failed
  execute(): Promise<IActionResult>;

  // If the action was invalid, run this code, and abort.
  onInvalid(result: IActionResult): Promise<IActionResult>;

  // Code to run on success. Rest of action chain will continue after this is finished.
  onSuccess(result: IActionResult): Promise<IActionResult>;

  // Code to run on failure. Rest of action chain will be aborted.
  onFailure(result: IActionResult): Promise<IActionResult>;

  // Code to run when the action and all chained success, invalid or failure actions are complete.
  onCompletion(result: IActionResult): Promise<IActionResult>;
}

 declare class ValidationPropertiesBuilder extends BaseDataBuilder {
  constructor(context: IContext);
  setMessage(message: string): this;
  setMessageColor(color: string): this;
  setSeparatorBackgroundColor(color: string): this;
  setSeparatorIsHidden(state: boolean): this;
  setValidationViewBackgroundColor(color: string): this;
  setValidationViewIsHidden(state: boolean): this;
}
 declare class FormCellDataBuilder extends BaseFormCellDataBuilder {
  constructor(context: IContext, definition: BaseControlDefinition);
  build(): Promise<any>;
  fromJSON(definition: BaseControlDefinition): this;
  setCaption(caption: string): this;
  setEditable(state: boolean): this;
  setOnValueChange(handler: string): this;
  setName(name: string): this;
  setStyle(style: string, target: string): this;
  setValue(value: any): this;
  setBuildDataPropertyValue(prop: string, value: any): this;
  setValidationProperties(validationProperties: any): this;
  setVisible(state: boolean): this;
  readonly builtData: any;
  readonly validationProperties: ValidationPropertiesBuilder;
}

 declare class BaseFormCellDataBuilder extends BaseDataBuilder {
  constructor(context: IContext, definition: BaseControlDefinition);
  readonly definition: BaseControlDefinition;
}

 declare class BaseControlDefinition extends BaseJSONDefinition {
  static type: {
      Extension: string;
      FormCellAttachment: string;
      FormCellButton: string;
      FormCellContainer: string;
      FormCellDatePicker: string;
      FormCellDurationPicker: string;
      FormCellExtension: string;
      FormCellFilter: string;
      FormCellListPicker: string;
      FormCellNote: string;
      FormCellSegmentedControl: string;
      FormCellSimpleProperty: string;
      FormCellSorter: string;
      FormCellSwitch: string;
      FormCellTitle: string;
      ListPickerFragmentContainer: string;
      SectionedTable: string;
      ToolbarItem: string;
  };
  constructor(path: any, data: any, parent: any);
  readonly type: string;
  getPage(): BaseControlDefinition;
  getType(): string;
  getValue(): any;
  getOnValueChange(): any;
  readonly search: any;
  readonly dataSubscriptions: Array<any>;
  getIsEditable(): any;
  isKeyBindable(key: string): boolean;
}

 declare class BaseFormCellObservable extends BaseObservable implements IFormCellCallback {
  readonly builder: IBuilder;
  readonly searchString: string;
  bindValue(data: any): Promise<any>;
  cellValueChange(newValue: Map<String, any>): Promise<any>;
  loadMoreItems(): void;
  searchUpdated(searchText: string): void;
  setValue(value: any, notify: boolean, isTextValue?: boolean): Promise<any>;
  getTargetSpecifier(): any;
  setTargetSpecifier(specifier: any): Promise<any>;
  setEditable(isEditable: boolean): void;
  setStyle(style: string, target: string): void;
  setValidationProperties(validationProperties: any): void;
}

 declare class BaseObservable extends Observable implements IObservable {
  constructor(oControl: IControl, oControlDef: BaseControlDefinition, oPage: Page);
  readonly control: IControl;
  readonly context: IContext;
  readonly isPageVisible: boolean;
  onDataChanged(action: ODataAction, result: any): void;
  redraw(): void;
  unregisterDataListeners(): void;
  bindValue(data: any): Promise<any>;
  getBindingTarget(): string;
  formatValue(value: any): any;
  setValue(value: any, notify: boolean, isTextValue?: boolean): Promise<any>;
  getValue(): any;
  readonly debugString: string;
  readonly parent: IControl;
}

 interface IFormCellCallback {
  cellValueChange?(value: any): any;
}

 declare class MDKFormCellModel {
  constructor(model: any);
  readonly model: any;
  update(data: any): void;
}

declare class Page extends ContentView {
  /**
   * String value used when hooking to navigatingTo event.
   */
  public static navigatingToEvent: string;

  /**
   * String value used when hooking to navigatedTo event.
   */
  public static navigatedToEvent: string;

  /**
   * String value used when hooking to navigatingFrom event.
   */
  public static navigatingFromEvent: string;

  /**
   * String value used when hooking to navigatedFrom event.
   */
  public static navigatedFromEvent: string;

  /**
   * Gets or sets whether page background spans under status bar.
   */
  public backgroundSpanUnderStatusBar: boolean;

  /**
   * Gets or sets the style of the status bar.
   */
  public statusBarStyle: "light" | "dark";

  /**
   * Gets or sets the color of the status bar in Android.
   */
  public androidStatusBarBackground: Color;

  /**
   * Used to hide the Navigation Bar in iOS and the Action Bar in Android.
   */
  public actionBarHidden: boolean;

  /**
   * Used to control if swipe back navigation in iOS is enabled. This property is iOS specific. Default value: true
   */
  public enableSwipeBackNavigation: boolean;

  /**
   * Returns a CSS keyframe animation with the specified name, if it exists.
   */
  public getKeyframeAnimationWithName(animationName: string): KeyframeAnimationInfo;

  /**
   * A property that is used to pass a data from another page (while navigate to).
   */
  public navigationContext: any;

  /**
   * Gets the Frame object controlling this instance.
   */
  public frame: Frame;

  /**
   * Gets the ActionBar for this page.
   */
  public actionBar: ActionBar;

  /**
   * A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
   * @param eventNames - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change").
   * @param callback - Callback function which will be executed when event is raised.
   * @param thisArg - An optional parameter which will be used as `this` context for callback execution.
   */
  public on(eventNames: string, callback: (data: EventData) => void, thisArg?: any): void;

  /**
   * Raised when navigation to the page has started.
   */
  public on(event: "navigatingTo", callback: (args: NavigatedData) => void, thisArg?: any): void;

  /**
   * Raised when navigation to the page has finished.
   */
  public on(event: "navigatedTo", callback: (args: NavigatedData) => void, thisArg?: any): void;

  /**
   * Raised when navigation from the page has started.
   */
  public on(event: "navigatingFrom", callback: (args: NavigatedData) => void, thisArg?: any): void;

  /**
   * Raised when navigation from the page has finished.
   */
  public on(event: "navigatedFrom", callback: (args: NavigatedData) => void, thisArg?: any): void;
  
}

declare class ContentView extends View implements AddChildFromBuilder {
  /**
   * Gets or sets the single child of the view.
   */
  content: View;

  

  _addChildFromBuilder(name: string, value: any): void;

  layoutView: View;
}

 interface AddChildFromBuilder {
  /**
   * Called for every child element declared in xml.
   * This method will add a child element (value) to current element.
   * @param name - Name of the element.
   * @param value - Value of the element.
   */
  _addChildFromBuilder(name: string, value: any): void;
}

 interface NavigatedData extends EventData {
  /**
   * The navigation context (optional, may be undefined) passed to the page navigation events method.
   */
  context: any;

  /**
   * Represents if a navigation is forward or backward.
   */
  isBackNavigation: boolean;
}

 interface EventData {
  /**
   * The name of the event.
   */
  eventName: string;
  /**
   * The Observable instance that has raised the event.
   */
  object: Observable;
}

declare class ToolBar extends View {
  ios: any;
  barItems: ToolBarItems;
  barPosition: number;
  itemDisabledStyle: any;
  containedItemStyle: any;
  containedItemDisabledStyle: any;
  android: any;
  update(): any;
}

declare class ToolBarItems {
  addItem(item: ToolBarItem): void;
  removeItem(item: ToolBarItem): void;
  getItems(): Array<ToolBarItem>;
  getItemAt(index: number): ToolBarItem;
}

declare class ToolBarItem extends View {
  static tapEvent: string;
  itemStyle: any;
  text: string;
  icon: string;
  visibility: Visibility;
  enabled: boolean;
  clickable: boolean;
  tag: number;
  width: number;
  systemItem: string;
  itemType: string;
  name: string;
  actionView: View;
  spacingActionView: View;
  toolBar: ToolBar;
  android: any;
  on(eventNames: string, callback: (data: EventData) => void): any;
  on(event: 'tap', callback: (args: EventData) => void): any;
}

 declare class ToolbarItemDefinition extends BaseControlDefinition {
  constructor(path: string, item: any, parent: any);
  getType(): string;
  readonly name: string;
  readonly systemItem: string;
  readonly caption: string;
  readonly image: string;
  readonly action: string;
  readonly enabled: any;
  readonly visible: boolean;
  readonly width: number;
  readonly clickable: boolean;
  readonly itemType: string;
}

 interface IObservable {
  bindValue(value: any): Promise<any>;
  formatValue(value: any);
  setValue(value: any, notify: boolean, isTextValue?: boolean): Promise<any>;
  getValue(): any;
  onDataChanged(action: any, result: any);
}

 interface IODataEventListener extends IDebuggable {
  onDataChanged(action: ODataAction, result: any);
  redraw(): void;
}

declare class ObservableArray<T> extends Observable {
  /**
   * String value used when hooking to change event.
   */
  public static changeEvent: string;

  /**
   * A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
   * @param eventNames - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
   * @param callback - Callback function which will be executed when event is raised.
   * @param thisArg - An optional parameter which will be used as `this` context for callback execution.
   */
  on(eventNames: string, callback: (data: EventData) => void, thisArg?: any);

  /**
   * Raised when a change occurs.
   */
  on(event: "change", callback: (args: any) => void, thisArg?: any);

  /**
   * Create ObservableArray<T> with specified length.
   */
  constructor(arrayLength?: number);

  /**
   * Create ObservableArray<T> from source Array<T>.
   */
  constructor(items: T[]);

  /**
   * Create ObservableArray<T> from T items.
   */
  constructor(...items: T[]);

  /**
   * Returns item at specified index.
   */
  getItem(index: number): T;
  /**
   * Sets item at specified index.
   */
  setItem(index: number, value: T): void;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  toLocaleString(): string;
  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  concat<U extends T[]>(...items: U[]): T[];
  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  concat(...items: T[]): T[];
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Removes the last element from an array and returns it.
   */
  pop(): T;
  /**
   * Appends new elements to an array, and returns the new length of the array.
   * @param items New elements of the Array.
   */
  push(items: T[]): number;
  /**
   * Appends new elements to an array, and returns the new length of the array.
   * @param items New elements of the Array.
   */
  push(...items: T[]): number;

  /**
   * Reverses the elements in an Array. 
   */
  reverse(): T[];
  /**
   * Removes the first element from an array and returns it.
   */
  shift(): T;
  /** 
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): T[];

  /**
   * Sorts an array.
   * @param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
   */
  sort(compareFn?: (a: T, b: T) => number): T[];

  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the array from which to start removing elements.
   */
  splice(start: number): T[];

  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the array from which to start removing elements.
   * @param deleteCount The number of elements to remove.
   * @param items Elements to insert into the array in place of the deleted elements.
   */
  splice(start: number, deleteCount: number, ...items: T[]): T[];

  /**
   * Inserts new elements at the start of an array.
   * @param items  Elements to insert at the start of the Array.
   */
  unshift(...items: T[]): number;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: T, fromIndex?: number): number;

  /**
   * Returns the index of the last occurrence of a specified value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
   */
  lastIndexOf(searchElement: T, fromIndex?: number): number;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. 
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. 
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

  /**
   * Returns the elements of an array that meet the condition specified in a callback function. 
   * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. 
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): T[];

  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

  /** 
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. 
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
  /** 
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. 
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

  /**
   * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
   */
  length: number;
}

 declare class Observable {

  /**
   * Please note that should you be using the `new Observable({})` constructor, it is **obsolete** since v3.0,
   * and you have to migrate to the "data/observable" `fromObject({})` or the `fromObjectRecursive({})` functions.
   */
  constructor();

  /**
   * String value used when hooking to propertyChange event.
   */
  public static propertyChangeEvent: string;

  /**
   * A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
   * @param eventNames - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
   * @param callback - Callback function which will be executed when event is raised.
   * @param thisArg - An optional parameter which will be used as `this` context for callback execution.
   */
  on(eventNames: string, callback: (data: EventData) => void, thisArg?: any);

  /**
   * Raised when a propertyChange occurs.
   */
  on(event: "propertyChange", callback: (data: EventData) => void, thisArg?: any);

  /**
   * Adds one-time listener function for the event named `event`.
   * @param event Name of the event to attach to.
   * @param callback A function to be called when the specified event is raised.
   * @param thisArg An optional parameter which when set will be used as "this" in callback method call.
   */
  once(event: string, callback: (data: EventData) => void, thisArg?: any);

  /**
   * Shortcut alias to the removeEventListener method.
   */
  off(eventNames: string, callback?: any, thisArg?: any);

  /**
   * Adds a listener for the specified event name.
   * @param eventNames Comma delimited names of the events to attach the listener to.
   * @param callback A function to be called when some of the specified event(s) is raised.
   * @param thisArg An optional parameter which when set will be used as "this" in callback method call.
   */
  addEventListener(eventNames: string, callback: (data: EventData) => void, thisArg?: any);

  /**
   * Removes listener(s) for the specified event name.
   * @param eventNames Comma delimited names of the events the specified listener is associated with.
   * @param callback An optional parameter pointing to a specific listener. If not defined, all listeners for the event names will be removed.
   * @param thisArg An optional parameter which when set will be used to refine search of the correct callback which will be removed as event listener.
   */
  removeEventListener(eventNames: string, callback?: any, thisArg?: any);

  /**
   * Updates the specified property with the provided value.
   */
  set(name: string, value: any): void;

  /**
   * Gets the value of the specified property.
   */
  get(name: string): any;

  /**
   * Notifies all the registered listeners for the event provided in the data.eventName.
   * @param data The data associated with the event.
   */
  notify<T extends EventData>(data: T): void;

  /**
   * Notifies all the registered listeners for the property change event.
   */
  notifyPropertyChange(propertyName: string, value: any, oldValue?: any): void;

  /**
   * Checks whether a listener is registered for the specified event name.
   * @param eventName The name of the event to check for.
   */
  hasListeners(eventName: string): boolean;

  
}
declare class View {

}

declare class Frame {

}

declare class TextField {}
type Visibility = "visible" | "hidden" | "collapse";

 declare class Color {
  constructor(knownColor: string);
  constructor(hex: string);
  constructor(argb: number);
  constructor(alpha: number, red: number, green: number, blue: number);

  /**
   * Gets the Alpha component (in the [0, 255] range) of this color. This is a read-only property.
   */
  public a: number;

  /**
   * Gets the Red component (in the [0, 255] range) of this color. This is a read-only property.
   */
  public r: number;

  /**
   * Gets the Green component (in the [0, 255] range) of this color. This is a read-only property.
   */
  public g: number;

  /**
   * Gets the Blue component (in the [0, 255] range) of this color. This is a read-only property.
   */
  public b: number;

  /**
   * Gets the Hexadecimal string representation of this color. This is a read-only property.
   */
  public hex: string;

  /**
   * Gets the Argb Number representation of this color where each 8 bits represent a single color component. This is a read-only property.
   */
  public argb: number;

  /**
   * Gets the known name of this instance. Defined only if it has been constructed from a known color name - e.g. "red". This is a read-only property.
   */
  public name: string;

  /**
   * Gets the android-specific integer value representation. Same as the Argb one. This is a read-only property.
   */
  android: number;

  /**
   * Gets the iOS-specific UIColor value representation. This is a read-only property.
   */
  ios: any /* UIColor */;

  /**
   * Specifies whether this Color is equal to the Color parameter.
   * @param value The Color to test.
   */
  public equals(value: Color): boolean;

  /**
   * Compares two Color instances.
   * @param value1 A Color to compare.
   * @param value2 A Color to compare.
   */
  public static equals(value1: Color, value2: Color): boolean;

  /**
   * Validates if a value can be converted to color.
   * @param value Input string.
   */
  public static isValid(value: any): boolean;
}

 declare class KeyframeAnimationInfo {

  /**
   * Return animation keyframes.
   */
  keyframes: Array<KeyframeInfo>;

  /**
   * The animation name.
   */
  name?: string;

  /**
   * The length of the animation in milliseconds. The default duration is 300 milliseconds.
   */
  duration?: number;

  /**
   * The amount of time, in milliseconds, to delay starting the animation.
   */
  delay?: number;

  /**
   * Specifies how many times the animation should be played. Default is 1.
   * iOS animations support fractional iterations, i.e. 1.5.
   * To repeat an animation infinitely, use Number.POSITIVE_INFINITY
   */
  iterations?: number;

  /**
   * An optional animation curve. Possible values are contained in the [AnimationCurve enumeration](../modules/_ui_enums_.animationcurve.html).
   * Alternatively, you can pass an instance of type UIViewAnimationCurve for iOS or android.animation.TimeInterpolator for Android.
   */
  curve?: any;

  /**
   * Determines whether the animation values will be applied on the animated object after the animation finishes.
   */
  isForwards: boolean;

  /**
   * If true the animation will be played backwards.
   */
  isReverse?: boolean;
}

 interface KeyframeDeclaration {
  property: string;
  value: any;
}

 interface KeyframeInfo {
  duration: number;
  declarations: Array<KeyframeDeclaration>;
  curve?: any;
}

declare class ActionBar {}
declare class ContextItem {
  public getBinding(): object;
  public setLeadingItems(items: string[]);
  public setTrailingItems(items: string[]);
}

declare class SelectedItem {
  binding: any;
  cell: any;
}

declare class ChangedItem {
  public selected: boolean;
}

declare enum ActionExecutionStatus {
  /**
   * Action has been completed with a failure
   */ 
  Failed = -1,
  /**
   * Action has been completed successfully
   */
  Success,
  /**
   * Action is not executed because it is invalid
   */
  Invalid,
  /**
   * Action is valid
   */ 
  Valid,
  /**
   * Action is currently executing
   */
  Pending,
  /**
   * Action was canceled
   */
  Canceled,
}

interface ISearch {
  AdditionalProperties?: string[];
  BarcodeScanner?: boolean;
  Delay?: number;
  Enabled?: boolean;
  MinimumCharacterThreshold?: number;
  Placeholder?: string;
  Options?: ISearchOptions;
}

interface ISearchOptions {
  CaseSensitive?: boolean;
  NumberSearch?: INumberSearch;
  UseSearchOverFilter: IUseSearchOverFilter;
}

interface INumberSearch {
  ConversionMethod: ConversionMethod;
  Enabled?: boolean;
}

declare enum ConversionMethodEnum {
  NoConversion = 'NoConversion',
  UseCast = 'UseCast',
  UseConcat = 'UseConcat'
}

declare type ConversionMethod = `${ConversionMethodEnum}`

interface IUseSearchOverFilter {
  Enabled?: boolean;
}

/**
 * A designer-facing interface that provides access to SimplePropertyCell.
 */
interface ISimplePropertyCellProxy extends IElementProxy  {
}

/**
 * A designer-facing interface that provides access to a element.
 * 
 * It is passed to rules to provide access to an element for
 * application specific customizations.
 */
interface IRowProxy extends IClientAPI {
  /**
   * @returns {IPageProxy} the Page, which the element belongs to 
   */
  getPageProxy(): IPageProxy;

  /**
  * Get element name
  * @return {string} the name of the button
  */
  getName(): string;

  /**
  * This method returns parent proxy
  * @return {any}
  */
  getParent(): any;

  /**
  * Get index
  * @return {number}
  */
  getIndex(): number;

  /**
   * This method returns type
   * @return {string}
   */
  getType(): string 
}

/**
 * A designer-facing interface that provides access to DataTableRow.
 */
interface IDataTableRowProxy extends IRowProxy {
  /**
   * Get a specific cell from row given indexes. 
   * This method accepts 2 calling method, either passing in the columnIndex ONLY or passing in both row and column indexes.
   * 
   * getCell(colIndex):
   * 
   * - If only column index is passed in, the first parameter will be treated as the column index used to retrieve the DataTableCellProxy, and the second parameter must be undefined. 
   * 
   * 
   * @deprecated getCell(rowIndex, colIndex):
   * 
   * - If both indexes are used in the order of (rowIndex, columnIndex), the first parameter will be treated as the row index, and the second parameter must be the column index. 
   * 
   * - Implemented to allow backwards compatibility. 
   * @param rowOrColIndex - Can either be row index or column index, depending on calling method. 
   * @param columnIndex - Either column index or undefined. 
   * @returns {IDataTableCellProxy} returns the DataTableCellProxy
   */
  getCell(rowIndex: number, columnIndex: number): IDataTableCellProxy;
}

/**
 * A designer-facing interface that provides access to ObjectCell.
 */
interface IObjectCellProxy extends IElementProxy  {
}

/**
 * A designer-facing interface that provides access to ObjectCellContextMenu.
 */
interface IObjectCellContextMenuProxy extends IElementProxy  {
  /**
   * Sets the leading items of the ObjectCellContextMenu
   * @param {string[]} items the items to be set
  */
  setLeadingItems(items: string[]): void

  /**
   * Sets the trailing items of the ObjectCellContextMenu
   * @param {string[]} items the items to be set
  */
  setTrailingItems(items: string[]): void
}

/**
 * A designer-facing interface that provides access to ObjectCellContextMenuItem.
 */
interface IObjectCellContextMenuItemProxy extends IElementProxy  {
  /**
   * This method returns binding
   * @return {string}
  */
  getBinding(): object
}

/**
 * A designer-facing interface that provides access to ObjectCard.
 */
interface IObjectCardProxy extends IElementProxy  {
}

/**
 * A designer-facing interface that provides access to ObjectCardActionitem.
 */
interface IObjectCardActionItemProxy extends IElementProxy  {
}

/**
 * A designer-facing interface that provides access to ObjectCardOverflowButton.
 */
interface IObjectCardOverflowButtonProxy extends IElementProxy  {
}

/*
 * GroupHeaderProxy is mainly for Group Header operations.
 */
interface IGroupHeaderProxy {
  /**
   * This method returns all the grouping properties
   * @return {string[]}
  */
  getGroupingProperties(): string[];

  /**
   * This method returns all the items
   * @return {IGroupHeaderItemProxy[]}
  */
  getItems(): IGroupHeaderItemProxy[];
}

/*
 * GroupHeaderItemProxy is mainly for Group Header Item operations.
 */
interface IGroupHeaderItemProxy {
  /**
   * This method returns title
   * @return {string}
  */
  getTitle(): string;
}

/**
 * Base interface for all event data proxies.
 * Provides the `eventName` property that identifies which event triggered the rule.
 * @example
 * ```ts
 * export default function MyEventHandler(context) {
 *   const eventData = context.getEventData();
 *   if (eventData) {
 *     console.log(eventData.eventName); // e.g. 'OnLaunch', 'OnLinkDataReceived'
 *   }
 * }
 * ```
 */
export interface IBaseEventData {
  /**
   * The name of the event that triggered this data (e.g. 'OnLinkDataReceived', 'OnLaunch', etc.)
   * @example
   * ```ts
   * const name = context.getEventData().eventName; // e.g. 'OnLaunch', 'OnResume'
   * ```
   */
  readonly eventName: string;
}

/**
 * Provides event data for app lifecycle events, including: OnLaunch, OnResume, OnSuspend, OnExit, and OnUnCaughtError.
 * @example
 * ```ts
 * // OnResume rule
 * export default function OnResume(context) {
 *   const eventData = context.getEventData();
 *   if (eventData) {
 *     console.log(eventData.eventName); // 'OnResume'
 *     console.log(eventData.data);      // raw NativeScript ApplicationEventData
 *   }
 * }
 * ```
 */
export interface IAppEventData extends IBaseEventData {
  /**
   * The raw NativeScript ApplicationEventData object.
   * @example
   * ```ts
   * const rawData = context.getEventData().data;
   * ```
   */
  readonly data: any;
}

/**
 * Provides event data for OnLinkDataReceived.
 * Provides parsed deep link URL components.
 * @example
 * ```ts
 * // OnLinkDataReceived rule
 * export default function OnLinkDataReceived(context) {
 *   const eventData = context.getEventData();
 *   if (eventData) {
 *     console.log(eventData.eventName);   // 'OnLinkDataReceived'
 *     console.log(eventData.url);         // 'test'
 *     console.log(eventData.urlScheme);   // 'seamclient'
 *     console.log(eventData.parameters);  // { param1: 'hello', param2: 'world' }
 *     console.log(eventData.hash);        // 'section1'
 *     console.log(eventData.originalURL); // 'seamclient://test?param1=hello&param2=world#section1'
 *   }
 * }
 * ```
 */
export interface ILinkDataReceivedEventData extends IBaseEventData {
  /**
   * Retrieves the host and path portion of the deep link URL.
   * @example
   * ```ts
   * const url = context.getEventData().url; // e.g. 'test'
   * ```
   */
  readonly url: string;
  /**
   * Retrieves the URL scheme, such as 'https' or 'myapp'.
   * @example
   * ```ts
   * const scheme = context.getEventData().urlScheme; // e.g. 'seamclient'
   * ```
   */
  readonly urlScheme: string;
  /**
   * Retrieves key-value pairs of query parameters.
   * @example
   * ```ts
   * const params = context.getEventData().parameters; // e.g. { param1: 'hello', param2: 'world' }
   * ```
   */
  readonly parameters: { [key: string]: string };
  /**
   * Retrieves the hash fragment of the URL , such as '#section1'.
   * @example
   * ```ts
   * const hash = context.getEventData().hash; // e.g. 'section1'
   * ```
   */
  readonly hash: string;
  /**
   * Retrieves the original, undecoded URL string.
   * @example
   * ```ts
   * const original = context.getEventData().originalURL; // e.g. 'seamclient://test?param1=hello#section1'
   * ```
   */
  readonly originalURL: string;
}

/**
 * Provides event data for push notification events, such as:
 * OnReceiveForegroundNotification, OnReceiveNotificationResponse, OnReceiveFetchCompletion.
 * @example
 * ```ts
 * // OnReceiveForegroundNotification rule
 * export default function OnPushNotification(context) {
 *   const eventData = context.getEventData();
 *   if (eventData) {
 *     console.log(eventData.eventName); // 'OnReceiveForegroundNotification'
 *     console.log(eventData.title);     // 'Notification Title'
 *     console.log(eventData.body);      // 'Notification body text'
 *     console.log(eventData.payload);   // full notification payload object
 *   }
 * }
 * ```
 */
export interface IPushNotificationEventData extends IBaseEventData {
  /**
   * Retrieves the notification title.
   * @example
   * ```ts
   * const title = context.getEventData().title; // e.g. 'New Order'
   * ```
   */
  readonly title: string;
  /**
   * Retrieves the notification body text.
   * @example
   * ```ts
   * const body = context.getEventData().body; // e.g. 'Order #1234 has been placed'
   * ```
   */
  readonly body: string;
  /**
   * Retrieves the full notification payload.
   * @example
   * ```ts
   * const payload = context.getEventData().payload; // full notification payload object
   * ```
   */
  readonly payload: any;
  /**
   * Retrieves the completion handler callback, if available.
   * @example
   * ```ts
   * const handler = context.getEventData().completionHandler;
   * if (handler) {
   *   handler();
   * }
   * ```
   */
  readonly completionHandler: any;
}

/**
 * Provides event data for OnActivityBackPressed, the Android page-level back button.
 * @example
 * ```ts
 * // OnActivityBackPressed rule
 * export default function OnBackPressed(context) {
 *   const eventData = context.getEventData();
 *   if (eventData) {
 *     console.log(eventData.eventName); // 'OnActivityBackPressed'
 *     console.log(eventData.cancel);    // false (default)
 *     eventData.cancel = true;          // prevent default back navigation
 *   }
 * }
 * ```
 */
export interface IActivityBackPressedEventData extends IBaseEventData {
  /**
   * Set to true to cancel the default back navigation.
   * @example
   * ```ts
   * const isCancelled = context.getEventData().cancel; // false by default
   * context.getEventData().cancel = true; // prevent back navigation
   * ```
   */
  cancel: boolean;
  /**
   * Provides the raw Android back-pressed event arguments.
   * @example
   * ```ts
   * const args = context.getEventData().data;
   * ```
   */
  readonly data: any;
}

/**
 * Provides event data for OnCustomEventDataReceived, handling page-level custom events via `executeCustomEvent()`.
 * @example
 * ```ts
 * // Rule that fires the custom event
 * export default function FireCustomEvent(context) {
 *   return context.getPageProxy().executeCustomEvent('RefreshData', { category: 'orders', page: 1 });
 * }
 *
 * // OnCustomEventDataReceived handler
 * export default function OnCustomEvent(context) {
 *   const eventData = context.getEventData();
 *   if (eventData) {
 *     console.log(eventData.eventName); // 'OnCustomEventDataReceived'
 *     console.log(eventData.eventType); // 'RefreshData'
 *     console.log(eventData.eventData); // { category: 'orders', page: 1 }
 *   }
 * }
 * ```
 */
export interface ICustomEventData extends IBaseEventData {
  /**
   * Retrieves the custom event type string passed to `executeCustomEvent()`.
   * @example
   * ```ts
   * const type = context.getEventData().eventType; // e.g. 'RefreshData'
   * ```
   */
  readonly eventType: string;
  /**
   * Retrieves the custom event data object passed to `executeCustomEvent()`.
   * @example
   * ```ts
   * const data = context.getEventData().eventData; // e.g. { category: 'orders', page: 1 }
   * ```
   */
  readonly eventData: any;
}

/**
 * Provides event data for OnOfflineProgressUpdate.
 * @example
 * ```ts
 * // OnOfflineProgressUpdate rule
 * export default function OnOfflineProgress(context) {
 *   const eventData = context.getEventData();
 *   if (eventData) {
 *     console.log(eventData.eventName);         // 'OnOfflineProgressUpdate'
 *     console.log(eventData.step);              // e.g. 'DownloadingEntityStore'
 *     console.log(eventData.currentStepNumber); // e.g. 3
 *     console.log(eventData.totalStep);         // e.g. 10
 *     console.log(eventData.message);           // progress message
 *     console.log(eventData.messageParam1);     // additional parameter
 *   }
 *   return eventData.message; // return custom message to display
 * }
 * ```
 */
export interface IOfflineProgressUpdateEventData extends IBaseEventData {
  /**
   * Retrieves the current step name.
   * @example
   * ```ts
   * const step = context.getEventData().step; // e.g. 'DownloadingEntityStore'
   * ```
   */
  readonly step: string;
  /**
   * Retrieves the current step number.
   * @example
   * ```ts
   * const current = context.getEventData().currentStepNumber; // e.g. 3
   * ```
   */
  readonly currentStepNumber: number;
  /**
   * Retrieves the total number of steps.
   * @example
   * ```ts
   * const total = context.getEventData().totalStep; // e.g. 10
   * ```
   */
  readonly totalStep: number;
  /**
   * Retrieves the progress message.
   * @example
   * ```ts
   * const msg = context.getEventData().message; // e.g. 'Downloading data...'
   * ```
   */
  readonly message: string;
  /**
   * Retrieves the first message parameter.
   * @example
   * ```ts
   * const param1 = context.getEventData().messageParam1;
   * ```
   */
  readonly messageParam1: any;
  /**
   * Retrieves the second message parameter.
   * @example
   * ```ts
   * const param2 = context.getEventData().messageParam2;
   * ```
   */
  readonly messageParam2: any;
}

/**
 * @ignore
 * Provides event data for OnJouleClientDataAction.
 * @example
 * ```ts
 * // OnJouleClientDataAction rule
 * export default function OnJouleDataAction(context) {
 *   const eventData = context.getEventData();
 *   if (eventData) {
 *     console.log(eventData.eventName); // 'OnJouleClientDataAction'
 *     console.log(eventData.action);    // Joule action object
 *   }
 * }
 * ```
 */
export interface IJouleClientDataActionEventData extends IBaseEventData {
  /**
   * Retrieves the Joule action object.
   * @example
   * ```ts
   * const action = context.getEventData().action;
   * ```
   */
  readonly action: any;
}

/**
 * @ignore
 * Provides event data for OnJouleNavigation.
 * @example
 * ```ts
 * // OnJouleNavigation rule
 * export default function OnJouleNav(context) {
 *   const eventData = context.getEventData();
 *   if (eventData) {
 *     console.log(eventData.eventName); // 'OnJouleNavigation'
 *     console.log(eventData.target);    // Joule navigation target object
 *   }
 * }
 * ```
 */
export interface IJouleNavigationEventData extends IBaseEventData {
  /**
   * Retrieves the Joule navigation target object.
   * @example
   * ```ts
   * const target = context.getEventData().target;
   * ```
   */
  readonly target: any;
}

/**
 * @ignore
 * Provides event data for OnJouleOpenURL.
 * @example
 * ```ts
 * // OnJouleOpenURL rule
 * export default function OnJouleOpenURL(context) {
 *   const eventData = context.getEventData();
 *   if (eventData) {
 *     console.log(eventData.eventName); // 'OnJouleOpenURL'
 *     console.log(eventData.url);       // URL string Joule wants to open
 *   }
 * }
 * ```
 */
export interface IJouleOpenURLEventData extends IBaseEventData {
  /**
   * Retrieves the URL that Joule wants to open.
   * @example
   * ```ts
   * const url = context.getEventData().url;
   * ```
   */
  readonly url: string;
}

/**
 * @ignore
 * Provides event data for OnJouleGetApplicationContext.
 * @example
 * ```ts
 * // OnJouleGetApplicationContext rule
 * export default function OnJouleContext(context) {
 *   const eventData = context.getEventData();
 *   if (eventData) {
 *     console.log(eventData.eventName);     // 'OnJouleGetApplicationContext'
 *     console.log(eventData.assistantName); // name of the Joule assistant
 *   }
 *   return JSON.stringify({ currentPage: 'MainPage', user: 'admin' });
 * }
 * ```
 */
export interface IJouleGetApplicationContextEventData extends IBaseEventData {
  /**
   * Retrieves the name of the Joule assistant.
   * @example
   * ```ts
   * const name = context.getEventData().assistantName;
   * ```
   */
  readonly assistantName: string;
}
