import { NgForm } from '@angular/forms';

/**
 * 将表单中的所有控件都标记为`touched`
 * 
 * @export
 * @param {NgForm} form 
 */
export function markFormAsTouched(form: NgForm) {
    if (!form)
        throw new Error('!form');

    for (let name of Object.keys(form.controls)) {
        let control = form.controls[name];
        control.markAsTouched();
    }
}