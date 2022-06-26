import './navigation.styles.css';
import {Outlet} from 'react-router-dom';
import { Fragment ,useState,useEffect} from 'react';

export const Navigation = () => {
    const [show,handleShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 80){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar)
        return () => window.removeEventListener("scroll",transitionNavBar)
    },[]);

    return (
        <Fragment>
            <div className={`navigation ${ show && 'nav-black'}`}>
                <div className='nav-contents'>
                    <img className = "nav-logo" src="http://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="netflix logo"/>

                    <img className = "nav-avatar" src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg" alt="avatar"/>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}