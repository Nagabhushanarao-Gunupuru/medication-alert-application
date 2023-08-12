import {Component} from 'react'

import MedicineItem from '../MedicineItem'
import './index.css'

class Medicine extends Component {
  state = {medicationList: []}

  componentDidMount() {
    this.getMedications()
  }

  getMedications = async () => {
    const apiUrl = 'https://64d1ae92f8d60b174360c7e0.mockapi.io/users'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    this.setState({medicationList: data})
  }

  render() {
    const {medicationList} = this.state

    return (
      <div className="appContainer">
        <ul className="listContainer">
          {medicationList.map(each => (
            <MedicineItem key={each.id} medicineDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Medicine
