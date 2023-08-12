import {GiCancel} from 'react-icons/gi'
import './index.css'

const InfoPopup = props => {
  const {isClose} = props

  const isCloseButton = () => {
    isClose()
  }

  return (
    <div className="popupContainer">
      <div className="popupContent">
        <h1 className="infoHeading">Info</h1>
        <p className="popupPara">
          This is a Medication Alert (or) Reminder Application designed for 65+
          years old. For example in this case we have a women called Sunita
          Sharma who is a diabatic and have a herat related diseases. For help
          her this application contains required medication details like
          medicine name, their uses and scheduled time details to take their
          medicine. It reminds people like Sunita Sharma to take their medicine
          on time, So that they can manage their daily medication without
          care-givers.
        </p>
        <button type="button" onClick={isCloseButton} className="closeButton">
          <GiCancel className="cancelIcon" />
        </button>
      </div>
    </div>
  )
}

export default InfoPopup
