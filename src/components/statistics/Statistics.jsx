import Notification from "components/notification/Notification"
const Statistics = (props) => {
    const total = props.good + props.neutral + props.bad
    const positiveFeedback=Math.round(props.good/(props.good + props.neutral + props.bad)*100)
return (
    <div>
        {total !== 0 ?
        <ul>
            <li>Good:{props.good}</li>
            <li>Neutral:{props.neutral}</li>
            <li>Bad:{props.bad}</li>
            <li>Total:{total}</li>
            <li>Positive feedback:{props.good !== 0 ? positiveFeedback : 0}%</li>
        </ul>
        : <Notification message="There is no feedback"/>
        }
    </div> 
)
}

export default Statistics