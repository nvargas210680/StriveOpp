import React from "react";
import "./MultiSelectDropDown.css";
import CreatableSelect from "react-select/creatable";

const MultiSelectDropDown = () => {
    const options = [
        { value: "lgbtq", label: "LGBTQ+", color: "#FF8B00" },
        { value: "faculty-humanities", label: "Humanities", color: "#36B37E" },
        { value: "value500", label: "$500", color: "#0052CC" },
      ];

      const colorStyles = {
        control: (styles) => ({ ...styles, backgroundColor: "white" }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return { ...styles, color: data.color };
        },

        multiValue: (styles, { data }) => {
          return {
            ...styles,
            backgroundColor: data.color,
            color: "#eee",
            padding:"8px",
            margin:"5px",
            width:"fit-content"
          };
        },

        multiValueLabel: (styles, { data }) => {
          return {
            ...styles,
            color: "#eee"
          };
        },

        multiValueRemove: (styles, { data }) => {
          return {
            ...styles,
            color: "#eee",
            cursor: "pointer",
            ":hover": {
              color: "#eee",
            },
          };
        },
      };
      const handleChange = (selectedOption, actionMeta) => {
        console.log("handleChange", selectedOption, actionMeta);
      };
      const handleInputChange = (inputValue, actionMeta) => {
        console.log("handleInputChange", inputValue, actionMeta);
      };
      return (
        <div style={{width: '900px', marginBottom:'50px'}}>
            <CreatableSelect
            options={options}
            onChange={handleChange}
            onInputChange={handleInputChange}
            isMulti
            styles={colorStyles}
            />
        </div>
      );
    };

export default MultiSelectDropDown;