import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {auth, signInWithGoogle } from '../../firebase/firebase.utility';
import './sign-in.styles.scss';

const SignIn = () => {

    const [signInForm, setSignInForm] = useState({
        email: '',
        password: ''
    });

    const onInputChange = (e) => {
        const { value, name } = e.target
        setSignInForm(setFormState => ({ ...setFormState, [name] : value}))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const {email, password} = signInForm
        try{
            await auth.signInWithEmailAndPassword(email, password)
            setSignInForm({ email: '', password: ''})
        }catch(err){
            console.log(err)
        }
    }
    
    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form action="" method="" onSubmit={ onSubmit }>
                <FormInput 
                type="email" 
                name="email" 
                value={ signInForm.email } 
                onInputChange={ onInputChange } 
                label="email" 
                required
                />

                <FormInput 
                type="password" 
                name="password" 
                value={ signInForm.password } 
                onInputChange={ onInputChange } 
                label="password" 
                required
                />

                <div className="buttons">
                    <CustomButton type="submit" >Sign in</CustomButton>
                    <CustomButton type="button" onClick={ signInWithGoogle } isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;