const StaticList = (props) => {
    
    return (
        <ul>
        <li>Good:{props.good}</li>
        <li>Neutral:{props.neutral}</li>
        <li>Bad:{props.bad}</li>
        <li>Total:{props.total}</li>
        <li>Positive feedback:{props.good !== 0 ? props.positiveFeedback : 0}%</li>
    </ul>
    )
}

export default StaticList