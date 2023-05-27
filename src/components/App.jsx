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
    total:0
  }
  paramsChanger = () =>{
    this.setState({
      ...this.state,
      total: this.state.good + this.state.neutral + this.state.bad,
      positiveFeedback:Math.round(this.state.good/(this.state.good + this.state.neutral + this.state.bad)*100)
    })
  }
  handleGood = () => {
    this.setState({
      ...this.state,
      good: this.state.good+1
    },this.paramsChanger)
  }
   handleNeutral = () => {
    this.setState({
      ...this.state,
      neutral: this.state.neutral+1
    }, this.paramsChanger)
  }
  handleBad = () => {
    this.setState({
      ...this.state,
      bad: this.state.bad+1
    }, this.paramsChanger)
  }
  render(){
  const setFeedback = () => (
    <Feedback
    handleGood={this.handleGood}
    handleNeutral={this.handleNeutral}
    handleBad={this.handleBad}
    />
   )
    const setStatics = () => {
      if(this.state.total !==0){
        return (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positiveFeedback={this.state.positiveFeedback}
        />
        )
      } else {
        return (<Notification message="There is no feedback"/>)
      }
    }
    return(
      <>
       <SectionTitle title="Please leave feedback" children={setFeedback()}/>
       <SectionTitle title="Statistics" children={setStatics()}/>
      </>
    )
    }

}
export default App