import { useState } from "react";

function InputText({ labelTitle, labelStyle, type, containerStyle, value, placeholder, updateFormValue, updateType }) {
    const [inputValue, setInputValue] = useState(value || "");

    const updateInputValue = (val) => {
        setInputValue(val);
        if (typeof updateFormValue === 'function') {
            updateFormValue({ updateType: updateType, value: val });
        }
    };

    return (
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
            </label>
            <input type={type || "text"} value={inputValue} placeholder={placeholder || ""} onChange={(e) => updateInputValue(e.target.value)} className="input input-bordered w-full" />
        </div>
    );
}

export default InputText;
