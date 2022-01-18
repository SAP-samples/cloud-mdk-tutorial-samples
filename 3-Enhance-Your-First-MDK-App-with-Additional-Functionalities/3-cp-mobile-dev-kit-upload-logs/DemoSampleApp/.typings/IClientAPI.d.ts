/// version: MDK SDK 4.1

/**
 * A designer-facing interface that provides access to a context.
 * It can be passed to rules to provide access to the context for
 * that rule, i.e. the associated binding and UI element as well
 * as other useful data.
 */
interface IClientAPI {
  // provide a simple property access to the binding
  binding: Object;
  // provide property for action results
  actionResults: any;
  // Synchronously evaluate a target path and return the result as a value.
  evaluateTargetPath(path: string): any;
  // Synchronously evaluate a target path and return an IClientAPI instance which encapsulates the result.
  evaluateTargetPathForAPI(path: string): IClientAPI;
  // To ensure that the application waits for the action to complete, you
  // must return the Promise returned by this method as the result of the rule.
  // Not doing this may cause the action binding and pressed item to be reset before the action completes.
  executeAction(actionPath: string);
  // Display in date format
  formatDate(date: Date, customLocale?: string, customTimeZone?: string, customOptions?: any): string;
  // Display in datetime format
  formatDatetime(date: Date, customLocale?: string, customTimeZone?: string, customOptions?: any): string;
  // Display in currency format
  formatCurrency(value: number, currencyCode: string, customLocale?: string): string;
  // Display in number format
  formatNumber(value: number, customLocale?: string): string;
  // Display in percentage format
  formatPercentage(value: number, customLocale?: string): string;
  // Display in scientific notation format
  formatScientific(value: number, customLocale?: string, customOptions?: any): string;
  // Display in time format
  formatTime(date: Date, customLocale?: string, customTimeZone?: string, customOptions?: any): string;
  // Get the data which provides additional information about an app event, such as
  // an app launch or exit, if such an event just occurred.
  getAppEventData(): any;
  // Get the action result stored under the unique key
  getActionResult(key: string): IActionResult;
  // Returns the binding object
  // @deprecated - use the new property getter
  getBindingObject(): Object;
  // Return the current context's binding's read link if any. Undefined otherwise.
  // @param path - target path into the binding. Optional.
  getReadLink(path: string): string;
  // Get the client data object. This starts out as a plain
  // JavaScript object, and can be modified to hold application state.
  // Can only be accessed for IClientAPI instances associated with a UI element, because
  // that guarantees that the data will last for the lifetime of that element.
  getClientData(): Object;
  // Get the global definition for the specified path.
  getGlobalDefinition(globalPath: string);
  // returns a pending download for this page otherwise undefined 
  getPendingDownload(page: string): any;
  // Answers the question if the page is the topmost page in the navigation stack
  isCurrentPage(pageName: string): boolean;
  // Get whether or not the media object for the supplied readLink exists and is local
  isMediaLocal(serviceName: string, entitySet: string, readLink: string): Promise<boolean>;
  // Perform a query on an entity set. Returns a Promise which resolves to the result of the operation.
  read(serviceName: string, entitySet: string, properties: string[], queryOptions?: string): Promise<any>;
  // Perform create odata entity. Returns a Promise which resolves to the result of the operation.
  create(serviceName: string, entitySet: string, properties: {key: string, value: any}, 
                createLinks: ILinkSpecifierProxy[], headers: {key: string, value: any}): Promise<any> ;
  // Return the value for any given definition like rule/action path/global path/binding/targetpath etc
  getDefinitionValue(target: string): Promise<any>;
  // Localize text
  localizeText(key: string, dynamicParams?: string[]): string;
  // Get app language
  getLanguage(): string;
  // Get app region
  getRegion(): string;
  // Get supported language in key value pair
  getSupportedLanguages(): Object;
  // Get supported region in key value pair
  getRegions(): Object;
  // Get version of application, definitions, SDK & etc
  getVersionInfo(): Object;  
  // Perform a count on an entity set. Returns a Promise which resolves to the result of the operation.
  count(serviceName: string, entitySet: string, queryOptions?: string): Promise<number>;
  // create LinkSpecifierProxy to be consumed by odata link action. one of queryOptions or readLink is required.
  createLinkSpecifierProxy(property: string, entitySet: string, queryOptions?: string,
    readLink?: string): ILinkSpecifierProxy;
  // answers the question if a dowload is in progress for this readLink 
  downloadInProgressForReadLink(readLink: string): boolean;
  // answers the question if a dowload is in progress for this page 
  downloadInProgressForPage(page: string): boolean;
  // Return Passcode Source. Note: Android must always have a passcode for biometrics hence value 3.
  // 0 - no passcode or unknown, 1 - user, 2 - device(iOS Only) 3 - Device and User (Android Only)
  getPasscodeSource(): number;
  // Return the topmost page in the navigation stack
  currentPage(): any;
  /**
   * Show activity indicator with specified text
   * @param text - The text to be shown
   * @return The id which can be used to dismiss the activity indicator
   */
  showActivityIndicator(text?: string): number;
  // Set app language
  setLanguage(language: string): void;
  // Set app region
  setRegion(region: string): void;
  /**
   * Dismiss activity indicator
   * @param id - The id of the activity indicator to be dismissed.
   * If no id is provided, the top activity indicator will be dismissed.
   * Using ids ensures that the right text will be shown at all times if
   * multiple indicators can be displayed, for example due to chained actions.
   */ 
  dismissActivityIndicator(id?: number): void;
  // Invoke an OData function import. Returns a Promise which resolves to the result(if existing) of the operation.
  callFunction(serviceName: string, oFunction: {Name: string, Parameters?: { key: string, value: any }}): Promise<any>;
  /**
   * Update an existing progress banner with new text.  If no progress banner action is in progress, no banner will be 
   * displayed.
   * @param message - The text to show on the progress banner
   */
  updateProgressBanner(message: string): void;
}

/**
 * A designer-facing interface that provides access to a control.
 * 
 * It is passed to rules to provide access to a control for
 * application specific customizations.
 */
interface IControlProxy extends IClientAPI {
  // Applies the validation view, if it's supported for the given control
  applyValidation();
  /**
   * Hides the validaiton view. Shorter version of:
   * clientAPI.setupValidationProperties('ValidationViewIsHidden', true).applyValidation();
   */
  clearValidation();
  // Workaround to BCP 1880677511: Hides the validaiton view while changing value. 
  clearValidationOnValueChange();
  // get the controls caption
  getCaption(): string;
  // get the controls name
  getName(): string;
  // Get the PageClientAPI associated with this control.
  getPageProxy(): IPageProxy;
  // Get the control's type.
  getType(): string;
  // Get the control's current value.
  getValue(): any;
  /**
   * Returns true if the control is a control container
   * @return {boolean}
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
  // To apply styles to a control
  // @param: styleClass: The name of the style class to be applied
  // @param: subView: The name of the subview to apply the 
  // style to. If this is '', the style is applied to the entire
  // control.
  // See Styles/ docs for details.
  setStyle(styleClass: string, subView: string);
  /**
   * Sets the validationProperties parameter of the underlying Observable.
   * Currently only the FormCell Observable is supported.
   *
   * This will not cause the UI to rerender. To redraw the form cell, use the applyValidation API.
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
   * 
   * @param {any} value - new control value 
   * @param {boolean} notify set notify flag to false to prevent triggering
   * onValueChange event of the control. Parameter notify is true by default.
   * @returns {IControlProxy} this - allows chaining
   */
  setValue(value: any, notify?: boolean): IControlProxy;
  /**
   * @deprecated - Use the 'visible' property on the FormCellControlProxy 
   * Sets the control's visible state
   * 
   * @param value visible state
   */
  setVisible(value: boolean);
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
  dataQueryBuilder(query: string): any;

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

  // Get collection of ListPicker Formcell, SegmentedControl  Formcell and Filter  Formcell
  getCollection(): { DisplayValue: string, ReturnValue: string }[];
}

/**
 * A designer-facing interface that provides access to a formcell's
 * target.
 * 
 * It is passed to rules to provide access to a formcell's target
 * for application specific customizations.
 */
interface IFormCellTargetProxy {
  /**
   * @return {string}
   */
  getDisplayValue(): string;
  /**
   * @return {string} 
   */
  getEntitySet(): string;
  /**
   * @return {any} 
   */
  getFunction(): any;
  /**
   * @return {string}
   */
  getQueryOptions(): string;
  /**
   * @return {string}
   */
  getReturnValue(): string;
  /**
   * @return {string}
   */
  getService(): string;
  /**
   * @param {string}
   */
  setDisplayValue(value: string);
  /**
   * @param {string} 
   */
  setEntitySet(value: string);
  /**
   * @param {any} 
   */
  setFunction(value: any);
  /**
   * @param {string} 
   */
  setQueryOptions(value: string);
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
 * ClientAPI used if the current context is a page.
 */
interface IPageProxy extends IControlContainerProxy {
  /**
   * Set the binding that is being used by the current action
   */
  getActionBinding(): any;
  // Get the control, toolbar item or action bar item that was most recently pressed on this page.
  getPressedItem(): any;
  // After running a CheckRequiredFields action, this method returns
  // a list of any controls which were found to be missing.
  getMissingRequiredControls(): Object[];
  // Set the binding to be used by the current action.  For example, a navigation would set this to pass on 
  // the binding for the next page which is navigated to.
  setActionBinding(binding: Object);
  /**
   * @param {string} caption new caption value
   */
  setCaption(caption: string);
  // To apply styles to a page
  // @param: styleClass: The name of the css style class to be applied
  // @param: subControl: The name of the sub-control to apply the 
  // style to. If this is '', the style is applied to the entire
  // page.
  // See Styles/ docs for details.
  setStyle(styleClass: string, subControl: string);
  // To apply a new caption to a toolbar item on page
  // @param: toolbarItemName: The name of the item to modify caption
  // @param: newCaption: The new caption 
  //
  setToolbarItemCaption(toolbarItemName: string, newCaption: string): Promise<any>;
  // To set specified actionBar item on page to visible/hidden.
  // @param: item: The position of the item.(zero based, first item on actionBar is 0 and second is 1 etc.)
  // @param: visibleFlag: if true set item to visible else hidden. 
  //
  setActionBarItemVisible(item: number, visibleFlag: boolean);
  // To redraw page components like the ActionBar and Toolbar
  redraw();
  /**
   * @returns {IPageProxy} the Page self 
   */
  getPageProxy(): IPageProxy;
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
   * Returns the user provided search string for this section table
   */
  searchString: string;
  /**
   * Factory method to construct an instance of DataQueryBuilder
   */
  dataQueryBuilder(query: string): any;
  /**
   * Get all of the sections that the table contains.
   */
  getSections(): ISectionProxy[];
}

interface ISectionProxy {
  /**
   * Returns the user provided search string for this section
   */
  searchString: string;
  /**
   * The section name
   */
  getName(): string;
  /**
   * Get the PageClientAPI associated with this section.
   */
  getPageProxy(): IPageProxy;
  /**
   * Get the property name being bound, one of the property names
   * in a section definition
   */
  getProperty(): string;
  /**
   * The section type
   */
  getType(): string;
  /**
   * The bound object type, if true binding object is definition
   */
  isStaticSection(): boolean;
  /**
   * Returns the extensions the section is using.
   */
  getExtensions(): any[];
  /**
   * Sets the interacte object cell indicator's state in the section
   * 
   * @param {string} newState the new state of the indicator (possible values: toDownload, inProgress, open)
   * @param {PressedItem} pressedItem the pressed object cell in the section
   */
  setIndicatorState(newState: string, pressedItem: any);
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
   * This method returns the top-level controls for this container
   * 
   * @return {IControlProxy[]} The controls for this container 
   */
  getToolbarControls(): IControlProxy[];
}

/**
 * A designer-facing interface that that provides access to action results 
 */
interface IActionResult {
  /// Data from the action.  Depending on the action, may or may not be set.  Can be set for any action type.
  data: any;
  /// Any error thrown in the action execution.  Can be set for Failed and Invalid actions.
  error: any;
  /// The status of the action.
  status: any;
  /// Whether or not the action is enabled.
  enabled: boolean;
}
