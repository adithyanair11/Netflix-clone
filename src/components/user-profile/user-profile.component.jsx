import './user-profile.styles.css';
import { Button } from '../custom-button/custom-button.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { useNavigate } from 'react-router-dom';
export const UserProfile = () => {
    const navigate = useNavigate();
    const navigateOnsignOut = () => {
        signOutUser();
        navigate('/landing');
    }
    return(
        <div className='user-profile-container'>
            <h1>Edit Profile</h1>
            <div className='profile-contents'>
            <img className = "user-avatar" src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg" alt="avatar"/>
            <div className='user-details'>
                <div className='user-email'>
                    abcd@gmail.com
                </div>
                <h3>Plans (Current plan: <span className='plan'>Premium)</span></h3>
                <span className='renewal-date'>
                    Renewal date: 04/03/2022
                </span>
                <div className='subscription-details'>
                    <div className='subscription'>
                        <div className='subscription-type'>
                            <span className='type'>Netflix Standard</span>
                            <span className='quality'>1040p</span>
                        </div>
                        <Button>subscribe</Button>
                    </div>
                    <div className='subscription'>
                        <div className='subscription-type'>
                            <span className='type'>Netflix Basic</span>
                            <span className='quality'>480p</span>
                        </div>
                        <Button>subscribe</Button>
                    </div>
                    <div className='subscription'>
                        <div className='subscription-type'>
                            <span className='type'>Netflix Premium</span>
                            <span className='quality'>4K+HDR</span>
                        </div>
                        <Button>subscribe</Button>
                    </div>
                </div>
                <Button onClick={navigateOnsignOut}>sign out</Button>
            </div>
            </div>
        </div>
    )
}