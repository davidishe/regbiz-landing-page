import { Component, ElementRef, forwardRef, Input, ViewChild } from "@angular/core";
import {
  ControlValueAccessor,
  Validator,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  AbstractControl,
  ValidationErrors,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-binary-input",
  styleUrls: ['./binary-input.component.scss'],
  templateUrl: './binary-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BinaryInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: BinaryInputComponent,
      multi: true
    }
  ]
})
export class BinaryInputComponent implements ControlValueAccessor, Validator {
  @ViewChild("inputField") inputField: ElementRef;
  @Input() formControl?: FormControl;
  @Input() label?: string;

  _value: string = null;
  _decimal: number = 0;

  validationEnabled = true;

  private binaryNumberRegex = new RegExp("[0, 1]$");

  private _onChange = _ => {};
  private _onTouched = () => {};
  private _onValidatorChange = () => {};

  constructor() {}

  // ControlValueAccessor Interface

  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.inputField.nativeElement.disabled = isDisabled;
  }

  writeValue(value: string) {
    this._value = value;
    this._onChange(this._value);
    this.updateDecimalValue();
  }

  // Our methods

  private updateDecimalValue() {
    this._decimal = parseInt(this._value, 2);
  }

  onBlur() {
    this._onTouched();
  }

  // Validator interface

  validate(control: AbstractControl): ValidationErrors {
    const value = control.value;
    if (
      this.validationEnabled &&
      (!value || !this.binaryNumberRegex.test(value))
    ) {
      return { wrongFormat: "Number is not binary" };
    }
    return {};
  }

  registerOnValidatorChange(fn: () => void): void {
    this._onValidatorChange = fn;
  }

  switchValidationOnOff() {
    this.validationEnabled = !this.validationEnabled;
    this._onValidatorChange();
  }
}
