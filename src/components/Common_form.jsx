import React from 'react'
import Common_input from './Common_input'
const formElementTypes = {
    INPUT : 'input',
    TEXTAREA : 'textarea',
    SELECT : 'select',
    CHECKBOX : 'checkbox',
    RADIO : 'radio'
}

export default function Common_form( {formControls = [], buttonText, formData, setFormData, onSubmit} ) {
    function renderFormElement(getCurrentFormControl, getFormData) {
        let element = null
        switch (getCurrentFormControl.componentType) {
            case formElementTypes.INPUT:
                element = <Common_input
                    type={getCurrentFormControl.type}
                    placeholder={getCurrentFormControl.placeholder}
                    value={getFormData[getCurrentFormControl.name]}
                    name={getCurrentFormControl.name}
                    onChange={(e) => setFormData({...formData, [getCurrentFormControl.name]: e.target.value})}
                    className={getCurrentFormControl.className}
                />
                break;
            default:
                element = <Common_input
                type={getCurrentFormControl.type}
                placeholder={getCurrentFormControl.placeholder}
                value={getFormData[getCurrentFormControl.name]}
                name={getCurrentFormControl.name}
                onChange={getCurrentFormControl.onChange}
                className={(e) => setFormData({...formData, [getCurrentFormControl.name]: e.target.value})}
            />
            break;


        }
        return element;
    }

  return (
    <form onSubmit={onSubmit}>
        {
            formControls.map((singleFormControl) => renderFormElement(singleFormControl, formData))
        }
      <button type="submit">{buttonText || 'Submit'}</button>
    </form>
  )
}
