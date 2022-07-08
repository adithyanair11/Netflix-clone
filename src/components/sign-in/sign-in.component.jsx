import './sign-in.styles.css';
import { FormInput } from '../form-input/form-input.component';
import { Button } from '../custom-button/custom-button.component';
import { useState,Fragment} from 'react';
import {signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import { SignUp } from '../sign-up/sign-up.component';
import { useNavigate } from 'react-router-dom';
export const SignIn = () => {
    const navigate = useNavigate();
    const [getSignUp,setGetSignUp] = useState(false);

    const defaultFormFields = {
        email: '',
        password: ''
    }
    const [formFields,setFormFields] = useState(defaultFormFields)
    

    const {email,password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await signInAuthUserWithEmailAndPassword(email,password);
            resetFormFields();
            navigate('/');
        }catch(err){
            if(err.code === 'auth/wrong-password'){
                alert('wrong password')
            }else{
                console.log(err);
            }
        }
    }
    return(
        <Fragment>
            {
                getSignUp ?
                (<SignUp />)
                :
                (
                    <div className='sign-in-container'>
                    <h1>Sign in</h1>
                    <form onSubmit={handleSubmit}>
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
                        <Button
                        type="submit" buttonType="signIn">sign in</Button>
                        </form>
                        <span>New to Netflix? 
                        <span className='sign-up-now' onClick={() => setGetSignUp(true)}>
                            Sign up now
                        </span>
                    </span>
                    </div>  
                )
            }
        </Fragment>

    )
}