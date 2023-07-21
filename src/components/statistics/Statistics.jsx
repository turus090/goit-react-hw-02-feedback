import Notification from "components/notification/Notification"
import StaticList from "./StaticList"
const Statistics = (props) => {
    const total = props.good + props.neutral + props.bad
    
return (
    <div>
        {total !== 0 ?
      <StaticList
      {...props}
      total={total}

      />
        : <Notification message="There is no feedback"/>
        }
    </div> 
)
}

export default Statistics