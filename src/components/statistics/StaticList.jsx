const StaticList = (props) => {
    const positiveFeedback=Math.round(props.good/(props.good + props.neutral + props.bad)*100)
    return (
        <ul>
        <li>Good:{props.good}</li>
        <li>Neutral:{props.neutral}</li>
        <li>Bad:{props.bad}</li>
        <li>Total:{props.total}</li>
        <li>Positive feedback:{props.good !== 0 ? positiveFeedback : 0}%</li>
    </ul>
    )
}

export default StaticList