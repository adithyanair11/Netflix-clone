import './form-input.styles.css';

export const FormInput = ({...otherProps}) => {
    return(
        <div className='group'>
            <input className='form-input' {...otherProps}/>
        </div>
    )
}