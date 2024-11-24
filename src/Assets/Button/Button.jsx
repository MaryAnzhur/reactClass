import './Button.css'

function Button({onDelete}) {
    return(
        <button className='deleteBtn' onClick={onDelete}>Delete</button>
    )
}

export default Button