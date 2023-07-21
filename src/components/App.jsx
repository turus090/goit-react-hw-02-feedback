import { Component } from "react"
import Feedback from "./feedback/Feedback"
import Statistics from "./statistics/Statistics"
import SectionTitle from "./sectionTitle/SectionTitle"

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
    return(
      <>
       <SectionTitle title="Please leave feedback">
          <Feedback
          options={this.state}
           handleChangeOption = {this.handleChangeOption}
          />
      </SectionTitle>
       <SectionTitle title="Statistics">
        <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
          />
        </SectionTitle>
      </>
    )
    }

}

export default App