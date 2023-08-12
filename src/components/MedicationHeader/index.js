import {Link} from 'react-router-dom'
import {FaNotesMedical} from 'react-icons/fa'
import {BsFillCloudSunFill, BsSunFill} from 'react-icons/bs'
import {IoMdMoon} from 'react-icons/io'
import './index.css'

const MedicationHeader = props => {
  const {isOpen, isAboutPopupOpen} = props

  const isOpenButton = () => {
    isOpen()
  }

  const isOpenLogo = () => {
    isAboutPopupOpen()
  }

  return (
    <>
      <nav className="nav-header">
        <div className="header-container">
          <h1 className="app-title">Medication Alert App</h1>
        </div>

        <div className="nav-header-container">
          <img
            src="https://res.cloudinary.com/dsnbihsqy/image/upload/v1691544381/Image_iralsq.png"
            alt="alert"
            className="nav-image"
            onClick={isOpenButton}
          />
          <img
            src="https://res.cloudinary.com/dsnbihsqy/image/upload/v1691490416/kratin_Logo_o9pskc.jpg"
            alt="kratin logo"
            className="nav-image"
            onClick={isOpenLogo}
          />
        </div>
        <ul className="icon-menu">
          <li>
            <Link to="/medicine">
              <FaNotesMedical className="icon" />
            </Link>
          </li>

          <li>
            <Link to="/morning">
              <BsFillCloudSunFill className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/afternoon">
              <BsSunFill className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/night">
              <IoMdMoon className="icon" />
            </Link>
          </li>
        </ul>
      </nav>

      <div className="main-container">
        <div className="heading">
          <h1 className="app-title">Medication Alert App</h1>
        </div>

        <div className="header-content">
          <img
            src="https://res.cloudinary.com/dsnbihsqy/image/upload/v1691544381/Image_iralsq.png"
            alt="alert"
            className="medication-image"
            onClick={isOpenButton}
          />
          <div className="detailed-container">
            <Link to="/medicine">
              <h1 className="text">Medicine</h1>
            </Link>
            <Link to="/morning">
              <h1 className="text">Morning</h1>
            </Link>
            <Link to="/afternoon">
              <h1 className="text">Afternoon</h1>
            </Link>
            <Link to="/night">
              <h1 className="text">Night</h1>
            </Link>
            <img
              src="https://res.cloudinary.com/dsnbihsqy/image/upload/v1691490416/kratin_Logo_o9pskc.jpg"
              alt="kratin logo"
              className="company-logo"
              onClick={isOpenLogo}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default MedicationHeader
