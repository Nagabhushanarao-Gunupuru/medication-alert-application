import {Component} from 'react'
import MedicineItem from '../MedicineItem'
import './index.css'

class NightRoute extends Component {
  state = {nightMedicationList: []}

  componentDidMount() {
    this.getNightMedication()
  }

  getNightMedication = async () => {
    const apiUrl = 'https://64d1ae92f8d60b174360c7e0.mockapi.io/users'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const fetchData = await response.json()
    const filteredData = fetchData.filter(each =>
      each.schedule.includes(' 21:00 '),
    )
    this.setState({nightMedicationList: filteredData})
  }

  render() {
    const {nightMedicationList} = this.state

    return (
      <div className="nightContainer">
        <ul className="listContainer">
          {nightMedicationList.map(each => (
            <MedicineItem key={each.id} medicineDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default NightRoute
