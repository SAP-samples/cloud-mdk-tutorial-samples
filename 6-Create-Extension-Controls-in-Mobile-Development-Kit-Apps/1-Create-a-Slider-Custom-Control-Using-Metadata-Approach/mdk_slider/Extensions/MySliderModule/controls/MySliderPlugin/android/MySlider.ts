import { Observable } from '@nativescript/core/data/observable';
import {​​​​​​ Device, View, Utils }​​​​​​ from'@nativescript/core';
/*
  This is a way to keep iOS and Android implementation of your extension separate
  We will encapsulate the MySlider class definition inside a function called GetMySliderClass
  This is so that the class definition won't be executed when you load this javascript
  via require function.
  The class definition will only be executed when you execute GetMySliderClass
*/
declare var com: any;
declare var android: any;
export function GetMySliderClass() {
    /**
     * IMPLEMENT THE ANDROID VERSION OF YOUR PLUGIN HERE
     * In this sample you have 2 controls a label and a seekbar (slider)
     * You extends this control with Observable (View) class so that you can accept listeners
     *  and notify them when UI interaction is triggered
     */
    function getPadding() {
        // Return left & right padding in dp
        // For tablet you want 24dp, for other type you use 16dp
        return Device.deviceType === 'Tablet' ? 24 : 16;
    }

    class MySlider extends View {
        private _androidcontext;
        private _label;
        private _labelText = "";
        private _seekbar;
        private _layout;
        private _value = 0;
        private _min = 0; //Used to track min for API 25 or lower

        private updateText() {
            this._label.setText(this._labelText + "(" + this._value + ")")
        }

        public constructor(context: any) {
            super();
            this._androidcontext = context;
            this.createNativeView();
        }

        /**
         * Creates new native controls.
         */
        public createNativeView(): Object {
            //Create an Android label
            this._label = new android.widget.TextView(this._androidcontext);
            const labelBottomPaddingInPx = Utils.layout.round(Utils.layout.toDevicePixels(8)); // For top & bottom padding, always 16dp
            this._label.setPadding(0, 0, 0, labelBottomPaddingInPx);
            this._label.setLayoutParams(new android.view.ViewGroup.LayoutParams(-1, -2));

            //Create an Android seekbar
            this._seekbar = new android.widget.SeekBar(this._androidcontext);
            this._seekbar.setLayoutParams(new android.view.ViewGroup.LayoutParams(-1, -2));

            //Create a LinearLayout container to contain the label and seekbar
            this._layout = new android.widget.LinearLayout(this._androidcontext);
            this._layout.setOrientation(android.widget.LinearLayout.VERTICAL);
            this._layout.setLayoutParams(new android.view.ViewGroup.LayoutParams(-1, -1));

            const hortPaddingInPx = Utils.layout.round(Utils.layout.toDevicePixels(getPadding()));
            const vertPaddingInPx = Utils.layout.round(Utils.layout.toDevicePixels(16)); // For top & bottom padding, always 16dp
            this._layout.setPadding(hortPaddingInPx, vertPaddingInPx, hortPaddingInPx, vertPaddingInPx);
            this._layout.addView(this._label);
            this._layout.addView(this._seekbar);
            this.setNativeView(this._layout);
            return this._layout;
        }

        /**
         * Initializes properties/listeners of the native view.
         */
        initNativeView(): void {
            console.log("initNativeView called");
            // Attach the owner to nativeView.
            // When nativeView is tapped you get the owning JS object through this field.
            (<any>this._seekbar).owner = this;
            (<any>this._layout).owner = this;
            super.initNativeView();

            //Attach a listener to be notified whenever the native Seekbar is changed so that you can notify the MDK Extension
            this._seekbar.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
                onStartTrackingTouch(seekBar: any) {
                    // You do not have any use for this event, so do nothing here
                },
                //This handler function will be called when user let go of the handle
                // This is where you will trigger an event called "OnSliderValueChanged" to the MDK Extension Class
                onStopTrackingTouch(seekBar: any) {
                    var eventData = {
                        eventName: "OnSliderValueChanged",
                        object: seekBar.owner,
                        value: seekBar.owner._value
                    };
                    seekBar.owner.notify(eventData);
                },
                //This handler function will be called whenever the slider's value is changed
                // i.e. whenever user drag the slider's handle
                onProgressChanged(seekBar: any, progress: number, fromUser: boolean) {
                    seekBar.owner._value = progress;
                    seekBar.owner.updateText();
                }
            }));
        }

        /**
         * Clean up references to the native view and resets nativeView to its original state.
         * If you have changed nativeView in some other way except through setNative callbacks
         * you have a chance here to revert it back to its original state
         * so that it could be reused later.
         */
        disposeNativeView(): void {
            // Remove reference from native view to this instance.
            (<any>this._seekbar).owner = null;
            (<any>this._layout).owner = null;

            // If you want to recycle nativeView and have modified the nativeView
            // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
            // you have to reset it to its initial state here.
        }

        //Must return the native view of the control for MDK FormCell and Section Extension
        public getView(): any {
            return this._layout;
        }

        public setText(newText: string): void {
            if (newText != null && newText != undefined) {
                this._labelText = newText;
                this._label.setText(newText);
            }
        }

        public setValue(newVal: number): void {
            if (newVal != null && newVal != undefined) {
                this._value = newVal;
                this.updateText();
                if (this._seekbar.getProgress() < this._min) {
                    this._seekbar.setProgress(this._min);
                }
                else {
                    this._seekbar.setProgress(newVal);
                }
            }
        }

        public setMinValue(newMin: number): void {
            if (newMin != null && newMin != undefined) {
                if (Device.sdkVersion >= 26) { //setMin is only available in set API Level 26 or newer
                    this._seekbar.setMin(newMin);
                }
                else {
                    this._min = newMin;
                    if (this._seekbar.getProgress() < this._min) {
                        this._seekbar.setProgress(this._min);
                    }
                }
            }
        }

        public setMaxValue(newMax: number): void {
            if (newMax != null && newMax != undefined) {
                this._seekbar.setMax(newMax);
            }
        }
    }
    return MySlider;
}
