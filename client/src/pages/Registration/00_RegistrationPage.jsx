import "./RegistrationPage.css";
import { useState } from "react";
import PersonalInfo from "./1_PersonalInfo";


export default function RegistrationPage(){

    const [page, setPage] = useState(0);
    const FormTitles = ["Personal Info", "Student Info", "Other"]

    return(
        <>
        <div className="header">
            <h1>{FormTitles[page]}</h1>
        </div>
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

        <PersonalInfo />
        
        </>
    )
}

