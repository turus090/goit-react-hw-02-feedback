import propTypes from 'prop-types'
import StaticList from "./StaticList"
const Statistics = ({positiveFeedback,total,good,neutral,bad}) => {
  
    
return (
    <div>
      
      <StaticList
     positiveFeedback={positiveFeedback}
     total={total}
     good={this.good}
     neutral={this.neutral}
     bad={this.bad}

      />
     
        
    </div> 
)
}

Statistics.propTypes ={
    positiveFeedback: propTypes.number,
            total: propTypes.number,
            good: propTypes.number,
            neutral: propTypes.number,
            bad: propTypes.number,
}
export default Statistics