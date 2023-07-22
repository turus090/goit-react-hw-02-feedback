import propTypes from 'prop-types'
const Button = ({handleClick, text}) => {
 return (
    <button onClick={handleClick}>
        {text}
    </button>)
}

Button.propTypes = {
    handleClick: propTypes.func,
    text: propTypes.string
}
export default Button 
