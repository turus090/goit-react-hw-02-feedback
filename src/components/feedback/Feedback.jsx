import Button from "./button/Button"

const Feedback = (props) => {
    let Buttons = []
    for(const optionItem in props.options){ 
        Buttons.push(
            <Button
                key={optionItem}
                handleClick={ ()=>props.handleChangeOption(optionItem)}
                text={optionItem}
            />
        )
    }
    return (
        <div>
            <div>
               {Buttons}
            </div>
        </div>
    )
}

export default Feedback