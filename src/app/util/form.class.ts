import {
    AbstractControlOptions,
    AsyncValidator,
    AsyncValidatorFn,
    FormControl,
    FormGroup,
    ValidatorFn,
    Validators,
} from '@angular/forms';

export class ConfigForms {
    email(required = true, value = '') {
        return new FormControl(
            value,
            Validators.compose([
                ...(required ? [Validators.required] : []),
                Validators.pattern(configPatterns.email),
            ])
        );
    }
    name(required = true, minLength = 2, value = '') {
        return new FormControl(
            value,
            Validators.compose([
                ...(required ? [Validators.required] : []),
                Validators.minLength(minLength),
                Validators.pattern(configPatterns.name),
            ])
        );
    }
    boolean(required = false, value = false) {
        return new FormControl(value, required ? [Validators.required] : []);
    }
    username(required = true, minLength = 3, maxLength = 10, value = '') {
        return new FormControl(value, [
            ...(required ? [Validators.required] : []),
            Validators.minLength(minLength),
            Validators.maxLength(maxLength),
            Validators.pattern(configPatterns.username),
        ]);
    }
    default(
        value?: any,
        validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions,
        asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]
    ) {
        return new FormControl(value, validatorOrOpts, asyncValidator);
    }
    number(required = false, value = null, maxLength = 100000) {
        return new FormControl(value, [
            ...(required ? [Validators.required] : []),
            Validators.pattern(configPatterns.number),
            Validators.maxLength(maxLength),
        ]);
    }
    integer(required = true, value = null, maxLength = 100000) {
        return new FormControl(value, [
            ...(required ? [Validators.required] : []),
            Validators.pattern(configPatterns.integer),
            Validators.maxLength(maxLength),
        ]);
    }
    phone(required = true, value = '') {
        return new FormControl(value, [
            ...(required ? [Validators.required] : []),
            Validators.minLength(11),
            Validators.pattern(configPatterns.phone),
        ]);
    }
    requiredMinLength(length: number, value = '') {
        return new FormControl(value, [
            Validators.required,
            Validators.minLength(length),
        ]);
    }
    requiredMinMaxLength(min: number, max: number) {
        return new FormControl('', [
            Validators.required,
            Validators.minLength(min),
            Validators.maxLength(max),
        ]);
    }
    required(value = null) {
        return new FormControl(value, Validators.required);
    }
    minLength(length = 3, value = '') {
        return new FormControl(value, [
            Validators.minLength(length),
            Validators.required,
        ]);
    }
}
export const configForms = new ConfigForms();
export const configPatterns = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
    integer: /^[0-9]+$/,
    name: /^[a-zA-Z0-9- ]+$/,
    number: /^-?[0-9,\.]+$/,
    phone: /^[+]*[0-9]+$/,
    postal: /^([0-9]{5})([\-]{1}[0-9]{4})?$|^([0-9]{6})?$/,
    url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
    username: /^[a-zA-Z0-9-]+$/,
};
