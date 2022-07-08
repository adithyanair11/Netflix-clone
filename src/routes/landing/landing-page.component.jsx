import './landing-page.styles.css'
import { Outlet } from "react-router-dom"
import { Button } from '../../components/custom-button/custom-button.component'
import { Fragment, useState} from 'react';
import {SignIn} from '../../components/sign-in/sign-in.component'
export const LandingPage = () => {
    const [getSignIn,setGetSignIn] = useState(false);
    return(
        <Fragment>
        <div className="landing-page">
        {
            getSignIn ?
            (<SignIn />)
            :
            (<div className='getting-started'>
            <h2>Unlimited films, TV Programmes and more.</h2>
            <p>Watch anywhere. Cancel at any time.</p>
            <span>Ready to watch? Click below to create an account and start your membership.</span>
            <Button buttonType="signIn" onClick={() => setGetSignIn(true)}>GET STARTED</Button>
            </div>)
        }
        </div>
        <div className='landing-page-overlay'/>
        </Fragment>
    )
}