import "./RegistrationPage.css";
import React, { useState } from "react";
import PersonalInfo from "./1_PersonalInfo";
import StudentInfo from "./2_StudentInfo";
import OtherInfo from "./3_OtherInfo";


export default function RegistrationPage(){

    const [page, setPage] = useState(0);
    const FormTitles = ["Personal Info", "Student Info", "Other"]
    const PageDisplay = () =>{
        if (page === 0) {
            return <PersonalInfo />
        } else if (page=== 1) {
            return <StudentInfo />
        } else {
            return <OtherInfo />
        }
    }

    return(
        <>
        <div className="form">
            <div className="progressbar">
            <div style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }} />
            </div>

            {/* Buttons */}

            <div className="header">
                <h1 className="registration">{FormTitles[page]}</h1>
                
                <button
                        className="registration-prevnext"
                        disabled={page == 0}
                        onClick={() => {
                            setPage((currPage) => currPage -1);
                            }}>
                        Prev
                </button>

                <button
                        className="registration-prevnext"
                        disabled={page == FormTitles.length - 1}
                        onClick={() => {
                            setPage((currPage) => currPage +1);
                            }}>
                        Next
                </button>
            </div>

            {/* Form */}

            <div className="form-container">
                
                <div className="body">
                    {PageDisplay()}
                </div>

                </div>
            </div>
        </>
    )
}

