/**
 * 定义表单文本集合.
 * 
 * @export
 * @interface FormTexts
 */
export interface FormTexts {
    [name: string]: {
        $label: string,
        [errorName: string]: string,
    }
}