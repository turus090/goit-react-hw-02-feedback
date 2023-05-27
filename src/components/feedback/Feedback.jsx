import Button from "./button/Button"

const Feedback = (props) => {
    return (
        <div>
            <div>
                <Button
                    handleClick={props.handleGood}
                 text='Good'
                 />
                <Button 
                    handleClick={props.handleNeutral}
                text='Neutral'/>
                <Button 
                    handleClick={props.handleBad}
                text='Bad'/>
            </div>
        </div>
    )
}

export default Feedback 