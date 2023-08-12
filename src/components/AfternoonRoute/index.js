import {Component} from 'react'
import MedicineItem from '../MedicineItem'
import './index.css'

class AfternoonRoute extends Component {
  state = {afternoonMedicationList: []}

  componentDidMount() {
    this.getAfternoonMedication()
  }

  getAfternoonMedication = async () => {
    const apiUrl = 'https://64d1ae92f8d60b174360c7e0.mockapi.io/users'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const fetchData = await response.json()
    const filteredData = fetchData.filter(each =>
      each.schedule.includes(' 12:00 '),
    )
    this.setState({afternoonMedicationList: filteredData})
  }

  render() {
    const {afternoonMedicationList} = this.state

    return (
      <div className="afternoonContainer">
        <ul className="listContainer">
          {afternoonMedicationList.map(each => (
            <MedicineItem key={each.id} medicineDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default AfternoonRoute
