import './custom-button.styles.css';


const BUTTON_TYPES_CLASSES = {
    bannerButton: 'banner-button',
    signInButton: 'sign-in-button'
}

export const Button = ({children,buttonType,...otherProps}) => {
    return(
        <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
}