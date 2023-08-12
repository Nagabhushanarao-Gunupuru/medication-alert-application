import {GiCancel} from 'react-icons/gi'
import './index.css'

const AboutPopup = props => {
  const {isAboutPopupClose} = props

  const isCloseButton = () => {
    isAboutPopupClose()
  }

  return (
    <div className="aboutUsPopupContainer">
      <div className="aboutUsPopupContent">
        <h1 className="aboutUsHeading">About Us</h1>
        <p className="aboutUsPopupPara">
          Established in 2011, Kratin is a healthcare-focused company enabling
          transformative changes with wide spectrum of solutions across care
          continuum for care consumer and care team. Our team is passionate
          about bringing positive change to the peoples lives using their wide
          technical expertise and experience. Living with cutting edge
          technologies, we love to seek new challenges bringing growth
          opportunities for our clients with the right solutions.
        </p>
        <button
          type="button"
          onClick={isCloseButton}
          className="aboutUsCloseButton"
        >
          <GiCancel className="cancelIcon" />
        </button>
      </div>
    </div>
  )
}

export default AboutPopup
