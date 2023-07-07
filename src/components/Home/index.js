import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <h1>Welcome to Meetup</h1>
          <p>Please register for the topic</p>
          <Link to="/register">
            <button type="button">Register</button>
          </Link>

          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </div>
      </>
    )
  }
}

export default Home
