import "./RegistrationPage.css";

export default function RegistrationPage(){
    return(
        <>
        <main className="registration-container">
            <form className="registration-container">

                <div class="registration-image">
                <img className="registration-image" src="https://i.imgur.com/SrLr8tD.png"/>
                </div>

                <div className="registration-form1">
                    <h1><i>Let's get started! 👋</i></h1>
                    <p className="registration-intro">Join our scholarship platform today and 
                        unlock over 750+ scholarships and other digital assets 
                        ready to download.
                    </p>

                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" />
                    <label>Email</label>
                    <input type="email" name="email" placeholer="Email" />
                    <label>Province of Study</label>
                    <select>
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

                    <label><b>Terms of Service</b></label>
                    <input type="checkbox" value="checked" />
                    <p>I agree to the Terms and Services...</p>

                    <button type="submit" className="registration">Start your scholarship search today!</button>
                </div>
            </form>
        </main>
        </>
    )
}

