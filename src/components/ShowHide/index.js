// Write your code here
import {Component} from 'react'
import './index.css'

const Button = props => {
  const {onClick, name, className} = props
  return (
    <button onClick={onClick} className={className} type="submit">
      {' '}
      {name}
    </button>
  )
}

class ShowHide extends Component {
  state = {clickedFirstName: false, clickedLastName: false}

  isClickedFirstName = () => {
    const {clickedFirstName} = this.state
    if (clickedFirstName === false) {
      this.setState({clickedFirstName: true})
    } else {
      this.setState({clickedFirstName: false})
    }
  }

  isClickedLastName = () => {
    const {clickedLastName} = this.state
    if (clickedLastName === false) {
      this.setState({clickedLastName: true})
    } else {
      this.setState({clickedLastName: false})
    }
  }

  render() {
    const {clickedFirstName, clickedLastName} = this.state
    console.log(this.state)
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <div className="joe-container">
            <Button
              onClick={this.isClickedFirstName}
              name="Show/Hide Firstname"
              className="btn"
            />
            {clickedFirstName && (
              <div className="joe">
                <p>Joe</p>
              </div>
            )}
          </div>

          <div className="jonas-container">
            <Button
              onClick={this.isClickedLastName}
              name="Show/Hide Lastname"
              className="btn"
            />
            {clickedLastName && (
              <div className="jonas">
                <p>Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
