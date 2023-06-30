import Button from "./button/Button"

const Feedback = (props) => {
    const options = ['good','neutral', 'bad']
    const btnsChange = options.map(btnName=> {
        return (
            <Button
                key={btnName}
                handleClick={ ()=>props.handleChangeOption(btnName)}
                text={btnName}
            />
        )
    })
    return (
        <div>
            <div>
               {btnsChange}
            </div>
        </div>
    )
}

export default Feedback 