import { NgForm } from '@angular/forms';
import { FormTexts } from './form-text/form-texts';

/**
 * 获取表单错误信息列表
 * 
 * @param form 
 * @param source 
 * @param options 
 */
export function getFormErrors(form: NgForm, source: FormTexts, options?: { multi?: boolean, falsyKey?: boolean }) {
    options = options || { 
        multi: false,
        falsyKey: false,
    };

    if (!form)
        throw new Error('!form');

    let result: string[] = [];

    for (let name of Object.keys(form.controls)) {
        let control = form.controls[name];
        if (control.errors == null) {
            continue;
        }

        let info: any = source[name] || {};
        let label = info.$label || name;

        for (const errorName of Object.keys(control.errors)) {
            let errorData = control.errors[errorName];
            if (!errorData && !options.falsyKey) {
                continue;
            }

            let errorMessage: string = null;
            if (errorData && typeof (errorData) === 'string') {
                errorMessage = info[errorName + '.' + errorData];
            }

            if (!errorMessage 
                && errorData 
                && errorData.name
                && typeof (errorData.name) === 'string') {
                errorMessage = info[errorName + '.' + errorData.name];
            }

            if (!errorMessage) {
                errorMessage = info[errorName];
            }

            if (!errorMessage) {
                if (errorName === 'required') {
                    errorMessage = `需要${label}`;
                } else {
                    errorMessage = `${label}格式不正确`;
                }
            }
            result.push(errorMessage);

            if (!options.multi) {
                break;
            }
        }
    }

    return result;
}