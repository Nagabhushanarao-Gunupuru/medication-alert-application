import {Link} from 'react-router-dom'
import './index.css'

const MedicineItem = props => {
  const {medicineDetails} = props
  const {medicine, id} = medicineDetails

  return (
    <li>
      <Link to={`/medicine/${id}`} className="link-user">
        <img
          src="https://res.cloudinary.com/dsnbihsqy/image/upload/v1691577750/tablet_in_the_hand.png_pa1zjd.png"
          alt="tablet"
          className="tabletImage"
        />
        <h1>{medicine}</h1>
      </Link>
    </li>
  )
}

export default MedicineItem
