import { useState } from "react";

const useInputField = (defaultValue) =>{
    const [fieldValue, setFieldValue] = useState(defaultValue);
    const handelFieldOnChange = (e) => {
        setFieldValue(e.target.value);
    }
    return[fieldValue, handelFieldOnChange];
}
export default useInputField;