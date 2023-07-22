import { Component } from "react"
import Feedback from "./feedback/Feedback"
import Statistics from "./statistics/Statistics"
import SectionTitle from "./sectionTitle/SectionTitle"
import Notification from "./notification/Notification"

class App extends Component {
  state = {
    good:0,
    neutral:0,
    bad:0,
  }
  handleChangeOption = (option) => {
    this.setState(prevState => {
      return prevState[option] = prevState[option] + 1
    })
  }

  render(){
    const positiveFeedback=Math.round(this.state.good/(this.state.good + this.state.neutral + this.state.bad)*100)
    const total = this.state.good + this.state.neutral + this.state.bad
    return(
      <>
       <SectionTitle title="Please leave feedback">
       <Feedback
          options={Object.keys(this.state)}
           handleChangeOption = {this.handleChangeOption}
          />
      </SectionTitle>
       <SectionTitle title="Statistics">
        {
          total === 0 ? 
          <Notification message="There is no feedback"/> :
          <Statistics
            positiveFeedback={positiveFeedback}
            total={total}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        }
       
        </SectionTitle>
      </>
    )
    }

}

export default App