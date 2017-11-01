import { NgModel } from '@angular/forms';
import { FormTexts } from './form-texts';

/**
 * todo: 获取指定的文本.
 * 
 * @export
 * @param {FormTexts} source 
 * @param {(string | NgModel)} nameOrControl 
 * @param {string} key 
 * @returns 
 */
export function getText(source: FormTexts, nameOrControl: string | NgModel, key: string) {
    let name = typeof (nameOrControl) === 'string' ? nameOrControl : nameOrControl.name;
    return source[name] && source[name][key];
}