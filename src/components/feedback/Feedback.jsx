import propTypes from 'prop-types';
import Button from "./button/Button"

const Feedback = ({options, handleChangeOption}) => {
    
        return (
            <div>
                <div>
                   {options.map(option =>    <Button
                    key={option}
                    handleClick={ ()=>handleChangeOption(option)}
                    text={option}
                />)}
                </div>
            </div>
    )
}

Feedback.propTypes = {
    option: propTypes.array,
    handleChangeOption: propTypes.func,
}
export default Feedback
