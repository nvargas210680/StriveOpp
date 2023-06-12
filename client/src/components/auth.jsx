import { auth, googleProvider } from "../config/firebase";
import { 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    signOut } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.photoURL)

const signIn = async () => {
        try {
    await createUserWithEmailAndPassword(auth, email, password);
        } catch(err) {
            console.error(err);
        }
};

const signInWithGoogle = async () => {
    try {
await signInWithPopup(auth, googleProvider);
    } catch(err) {
        console.error(err);
    }
};

const logout = async () => {
    try {
await signOut(auth);
    } catch(err) {
        console.error(err);
    }
};

return(
/* Template from https://codepen.io/Mohuth/pen/QWgrPvp */

<div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login">
                {/* Login Field: Email */}
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input
                    class="login__input"
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                    />
				</div>

                {/* Login Field: Password */}
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input
                    class="login__input"
                    placeholder="Password" 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
				</div>
                <br />

            {/* Buttons - Native Login */}

				<button class="button login__submit" onClick={signIn}>
					<span class="button__text">Login</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>

            {/* Buttons - Social Login */}

			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-media">
					<button
                        class="social-icons"
                        onClick={signInWithGoogle} 
                        >Google
                        </button>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
        )
    }