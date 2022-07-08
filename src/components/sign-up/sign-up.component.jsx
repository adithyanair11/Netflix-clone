import './sign-up.styles.css';
import { FormInput } from '../form-input/form-input.component';
import { Button } from '../custom-button/custom-button.component';
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { useNavigate } from 'react-router-dom';
export const SignUp = () => {
    const navigate = useNavigate();
    const defaultFormFields = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [formFields,setFormFields] = useState(defaultFormFields)
    

    const {userName,email,password,confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(password === confirmPassword){
            try{
                const {user} = await createAuthUserWithEmailAndPassword(email,password);
                await createUserDocumentFromAuth(user,{userName});
                resetFormFields();
                navigate('/profile');
            }catch(err){
                if(err.code === 'auth/email-already-in-use'){
                    alert('email already in use');
                }else{
                    console.log(err);
                }
            }
        }else{
            alert('passwords do not match');
        }
    }
    return(
        <div className='sign-up-container'>
            <h1>SIGN UP</h1>
            <form onSubmit={handleSubmit}>
                <FormInput 
                type="text"
                required
                placeholder="username"
                onChange={handleChange}
                name="userName"
                value={userName}
                />
                <FormInput 
                type="email"
                required
                placeholder="email"
                onChange={handleChange}
                name="email"
                value={email}
                />
                <FormInput 
                type="password"
                required
                placeholder="password"
                onChange={handleChange}
                name="password"
                value={password}
                />
                <FormInput 
                type="password"
                required
                placeholder="confirm password"
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
                />
                <Button type="submit" buttonType="signIn">Sign up</Button>
            </form>
        </div>
    )
}