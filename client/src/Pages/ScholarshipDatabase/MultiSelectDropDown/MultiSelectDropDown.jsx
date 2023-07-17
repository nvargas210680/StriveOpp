import React from "react";
import "./MultiSelectDropDown.css";
import { Helmet } from "react-helmet-async";

const MultiSelectDropDown = () => {
    return(
        <>
        {/* <Helmet>
            <title>MultiSelectDropDownMenu</title>
            <link rel="canonical" href="./Assets/multiselect-dropdown.js"/>
        </Helmet> */}

        <script src="./Assets/multiselect-dropdown.js" type="module"></script>

        <div className="multiselectdropdown">
            <form>
                <select 
                    name="select" 
                    multiple className="multiselect" 
                    multiselct-search="true"
                    multiselect-select-all="true"
                    multiselect-max-items="15">
                        <option>First</option>
                        <option>Second</option>
                        <option>Third</option>
                        <option>Fourth</option>
                </select>
            </form>
        </div>
        </>
    )
}

export default MultiSelectDropDown;