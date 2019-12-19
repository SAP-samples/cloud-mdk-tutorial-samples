import app = require('tns-core-modules/application/application');
import { BaseObservable } from '../../../observables/BaseObservable';
import { BaseControl } from '../../../controls/BaseControl';
import { MySlider } from 'my-nativescript-plugin'; //Import MySlider NS Plugin


export class MySliderExtension extends BaseControl {
  private _slider: MySlider;
  private _minVal: number = 0;
  private _maxVal: number = 100;

  public initialize(props) {
    super.initialize(props);

    //Create the Slider plugin control
    this.createSlider();
    //Assign the slider's native view as the main view of this extension
    this.setView(this._slider.getView());
  }

  private createSlider() {
    //Create MySlider and initialize its native view
    this._slider = new MySlider(this.androidContext());
    this._slider.initNativeView();

    //Set the slider's properties if "ExtensionProperties" is defined
    let extProps = this.definition().data.ExtensionProperties;
    if (extProps) {
      this._slider.setText(extProps.Title);
      this._minVal = extProps.MinValue ? extProps.MinValue : this._minVal;
      this._maxVal = extProps.MaxValue ? extProps.MaxValue : this._maxVal;
    }
    
    this._slider.setMinValue(this._minVal);
    this._slider.setMaxValue(this._maxVal);
    
    //Set the slider's value if "Value" is defined
    if (this.definition().data.Value) {
      this.setValue(this.definition().data.Value, false, false);
    }

    //Set up listener for MySlider's OnSliderValueChanged event that will be triggered when user let of the slider's handle
    // It's eventData object contain a property 'value' that will contain the value of the slider
    this._slider.on("OnSliderValueChanged", function(eventData){
      //We will call the setValue
      this.setValue(eventData.value, true, false);
    }.bind(this));
  }

  public setValue(value: any, notify: boolean, isTextValue?: boolean): Promise<any> {
    //Check the value and make sure it's a valid number
    if (value != null && value != undefined && !isNaN(value)) {
      if (typeof value == "string" && value.trim() == "") {
        return Promise.reject("Error: Value is not a number");
      }
      let val = Number.parseInt(value);
      //Don't let value go lower than permitted minimum or higher than permitted maximum
      val = val < this._minVal ? this._minVal : val;
      val = val > this._maxVal ? this._maxVal : val;
        
      if (this._slider) {
        //Set the slider's value
        this._slider.setValue(val);
      }
      //Store the value. The observable will trigger "OnValueChange" to the MDK app
      // MDK app can register to this event in the metadata with property "OnValueChange"
      return this.observable().setValue(val, notify, isTextValue);
    } else if (isNaN(value)) {
      return Promise.reject("Error: Value is not a number");
    }
    return Promise.resolve();
  }

  public viewIsNative() {
    return true;
  }
}
