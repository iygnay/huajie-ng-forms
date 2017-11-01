import { Pipe, PipeTransform } from '@angular/core';
import { FormTexts } from './form-texts';
import { NgModel } from '@angular/forms';
import { getText } from './get-text';

/**
 * {{formTexts | ft: 'idCardNumber': 'required' }}
 * 
 * @export
 * @class FormTextPipe
 * @implements {PipeTransform}
 */
@Pipe({
    name: 'ft'
})
export class FormTextPipe implements PipeTransform {

    /**
     * todo(杨逸): 说明
     * 
     * @param {FormTexts} formTexts 
     * @param {(string | NgModel)} nameOrControl 
     * @param {string} [key] 
     * @returns {*} 
     * @memberof NamePipe
     */
    transform(formTexts: FormTexts, nameOrControl: string | NgModel, key?: string): any {
        return getText(formTexts, nameOrControl, key || '$label') || 'NONE';
    }
}