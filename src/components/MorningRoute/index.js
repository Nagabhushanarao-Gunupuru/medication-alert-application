import {Component} from 'react'
import MedicineItem from '../MedicineItem'
import './index.css'

class MorningRoute extends Component {
  state = {morningMedicineList: []}

  componentDidMount() {
    this.getMorningMedication()
  }

  getMorningMedication = async () => {
    const apiUrl = 'https://64d1ae92f8d60b174360c7e0.mockapi.io/users'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const fetchData = await response.json()
    const filteredData = fetchData.filter(each =>
      each.schedule.includes(' 09:00 '),
    )
    this.setState({morningMedicineList: filteredData})
  }

  render() {
    const {morningMedicineList} = this.state

    return (
      <div className="morningContainer">
        <ul className="listContainer">
          {morningMedicineList.map(each => (
            <MedicineItem key={each.id} medicineDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default MorningRoute
