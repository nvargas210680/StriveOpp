import "./RegistrationPage.css";
import React from "react";

export default function StudentInfo(){
    return(
        <>
        <main className="registration-container">
            <form className="registration-container">
                <div class="registration-image">
                    <img className="registration-image" src="https://i.imgur.com/FJKM0Vz.jpg"/>
                </div>

                <div className="registration-form1">
                    <h1><i>Let's get to know you! 👋</i></h1>
                

                {/* Input Fields */}

                <label>Given Name</label>
                    <input 
                        type="text" 
                        name="first-name" 
                        // value={name}
                        // onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Given Name..." />

                <label>Surname</label>
                    <input 
                        type="text" 
                        name="surname" 
                        // value={name}
                        // onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Surname..." />  

                <label>Post-Secondary Institution</label>
                    <input 
                        type="text" 
                        name="college" 
                        // value={name}
                        // onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Name of Post-Secondary Institution..." /> 

                <label>Nationality</label>
                    <input 
                        type="text" 
                        name="nationality" 
                        // value={name}
                        // onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Nationality" />

                <label>Ethnicity (Optional)</label>
                    <input 
                        type="text" 
                        name="ethicity" 
                        // value={name}
                        // onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Ethnicity" />

                <label>Age (Optional)</label>
                    <input 
                        type="number" 
                        name="age" 
                        // value={name}
                        // onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Age" />
                </div>
            </form>
        </main>
        </>
    )
    }