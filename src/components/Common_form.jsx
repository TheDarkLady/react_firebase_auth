import React from "react";
import Common_input from "./Common_input";
const formElementTypes = {
  INPUT: "input",
  TEXTAREA: "textarea",
  SELECT: "select",
  CHECKBOX: "checkbox",
  RADIO: "radio",
};

export default function Common_form({
  formControls = [],
  buttonText,
  formData,
  setFormData,
  onSubmit,
}) {
  console.log(formControls, "formControls");
  console.log(formData, "formData");

  function renderFormElement(getCurrentFormControl, getFormData) {
    let element = null;
    console.log("Rendering form control:", getCurrentFormControl);
    console.log(
      "Current form data value:",
      getFormData[getCurrentFormControl.name]
    );

    // Make sure the value is not an object
    const value = getFormData[getCurrentFormControl.name] || "";
    console.log("getCurrentFormControl.name", getCurrentFormControl.name);
    console.log("getCurrentFormControl.type", getCurrentFormControl.type);
    console.log(
      "getCurrentFormControl.placeholder",
      getCurrentFormControl.placeholder
    );
    console.log("getCurrentFormControl.value", getCurrentFormControl.value);
    console.log(
      "getCurrentFormControl.className",
      getCurrentFormControl.className
    );

    switch (getCurrentFormControl.componentType) {
      case formElementTypes.INPUT:
        console.log("getCurrentFormControl.name", getCurrentFormControl.name);
        console.log("getCurrentFormControl.type", getCurrentFormControl.type);
        console.log(
          "getCurrentFormControl.placeholder",
          getCurrentFormControl.placeholder
        );
        console.log("getCurrentFormControl.value", getCurrentFormControl.value);
        console.log(
          "getCurrentFormControl.className",
          getCurrentFormControl.className
        );

        element = (
          <Common_input
            type={getCurrentFormControl.type}
            placeholder={getCurrentFormControl.placeholder}
            value={getCurrentFormControl.value}
            name={getCurrentFormControl.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getCurrentFormControl.name]: e.target.value,
              })
            }
            className={getCurrentFormControl.className}
            key={getCurrentFormControl.name} // Add unique key
          />
        );
        break;
      default:
        element = (
          <Common_input
            type={getCurrentFormControl.type}
            placeholder={getCurrentFormControl.placeholder}
            value={getCurrentFormControl.value}
            name={getCurrentFormControl.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getCurrentFormControl.name]: e.target.value,
              })
            }
            className={getCurrentFormControl.className}
            key={getCurrentFormControl.name} // Add unique key
          />
        );
        break;
    }
    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      {formControls.map((singleFormControl) =>
        renderFormElement(singleFormControl, formData)
      )}
      <button type="submit">{buttonText || "Submit"}</button>
    </form>
  );
}
