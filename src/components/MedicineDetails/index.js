import {Component} from 'react'
import './index.css'

class MedicineDetails extends Component {
  state = {medicineList: []}

  componentDidMount() {
    this.getMedicineDetails()
  }

  onClickBack = () => {
    const {history} = this.props
    history.push('/')
  }

  getFormattedData = data => ({
    medicine: data.medicine,
    id: data.id,
    uses: data.uses,
    schedule: data.schedule,
  })

  getMedicineDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://64d1ae92f8d60b174360c7e0.mockapi.io/users/${id}`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const filterData = this.getFormattedData(data)
    this.setState({medicineList: filterData})
  }

  render() {
    const {medicineList} = this.state
    const {medicine, uses, schedule} = medicineList

    return (
      <div className="medicineContainer">
        <h1 className="medicineHeading">{medicine}</h1>
        <p className="usage">{uses}</p>
        <h1 className="time">{schedule}</h1>
        <button type="button" className="button" onClick={this.onClickBack}>
          Back
        </button>
      </div>
    )
  }
}

export default MedicineDetails
