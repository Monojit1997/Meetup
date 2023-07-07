import {Component} from 'react'
import Header from '../Header'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {name: '', topic: topicsList[0].id, error: false}

  submitForm = event => {
    event.preventDefault()
    const {name, topic} = this.state
    if (name === '') {
      this.setState({error: true})
    } else {
      const {history} = this.props
      history.replace('/')
    }
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeTopic = event => {
    this.setState({topic: event.target.value})
  }

  render() {
    const {name, error} = this.state
    return (
      <>
        <Header />
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <form onSubmit={this.submitForm}>
            <h1>Let us join</h1>
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              placeholder="Your name"
              id="name"
              onChange={this.onChangeName}
              value={name}
            />
            <label htmlFor="topics">TOPICS</label>
            <select id="topics" onChange={this.onChangeTopic}>
              {topicsList.map(eachTopic => (
                <option key={eachTopic.id} value={eachTopic.id}>
                  {eachTopic.displayText}
                </option>
              ))}
            </select>
            <button type="submit">Register Now</button>
            {error && <p>Please enter your name</p>}
          </form>
        </div>
      </>
    )
  }
}
export default Register
