import { NgForm } from '@angular/forms';
import { FormTexts } from './form-text/form-texts';

/**
 * 获取表单错误信息列表.
 * 
 * @export
 * @param {NgForm} form 
 * @param {FormTexts} source 
 * @returns 
 */
export function getFormErrors(form: NgForm, source: FormTexts) {

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
            let message = info[errorName];
            if (!message) {
                if (errorName === 'required') {
                    message = `需要${label}`;
                } else {
                    message = `${label}格式不正确`;
                }
            }
            result.push(message);
        }
    }

    return result;
}