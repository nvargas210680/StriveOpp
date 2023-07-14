import "./RegistrationPage.css";
import React from 'react';
import { useState } from "react";

export default function PersonalInfo(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    return(
        <>
        <main className="registration-container">
            <form 
                className="registration-container"
                // onSubmit={(e)=>handleSubmit(e)}
                >

                <div class="registration-image">
                <img className="registration-image" src="https://i.imgur.com/BXy8rRd.png"/>
                </div>

                <div className="registration-form1">
                    <h1><i>Let's get started! 👋</i></h1>
                    <p className="registration-intro">Join our scholarship platform today and 
                        unlock over 750+ scholarships and other digital assets 
                        ready to download.
                    </p>

                    {/* Input Fields - Name */}

                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name..." />

                    {/* Input Fields - Email */}

                    <label>Email</label>
                    <input
                        type="email" 
                        name="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email..." />

                    {/* Input Fields - Field */}                        

                    <label>Province of Study</label>
                    <select
                        onChange={e => handleProvinceChange(e)}>
                        <option>Alberta</option>
                        <option>British Columbia</option>
                        <option>Manitoba</option>
                        <option>New Brunswick</option>
                        <option>Newfoundland and Labrador</option>
                        <option>Northwest Territories</option>
                        <option>Nova Scotia</option>
                        <option>Nunavut</option>
                        <option>Ontario</option>
                        <option>Prince Edward Island</option>
                        <option>Quebec</option>
                        <option>Saskatchewan</option>
                        <option>Yukon</option>
                    </select>

                    {/* Input Fields - Terms of Service */}                    

                    <label><b>Terms of Service</b></label>
                    <div className="termsofservice">
                    <input 
                        type="checkbox" 
                        name="terms" 
                        value="checked" 
                        className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                    />
                    <p>I agree to the Terms and Services...</p>
                    </div>

                    {/* Button */}

                    <button type="submit" className="registration">Start your scholarship search today!</button>
                </div>
            </form>
        </main>
        </>
    )
}