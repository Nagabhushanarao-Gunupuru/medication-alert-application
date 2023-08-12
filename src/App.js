import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MedicationHeader from './components/MedicationHeader'
import Medicine from './components/Medicine'
import MedicineDetails from './components/MedicineDetails'
import MorningRoute from './components/MorningRoute'
import AfternoonRoute from './components/AfternoonRoute'
import NightRoute from './components/NightRoute'
import InfoPopup from './components/InfoPopup'
import AboutPopup from './components/AboutPopup'

import './App.css'

class App extends Component {
  state = {isPopupOpen: false, isAboutPopupOpen: false}

  isOpen = () => {
    this.setState({isPopupOpen: true})
  }

  isAboutPopupOpen = () => {
    this.setState({isAboutPopupOpen: true})
  }

  isClose = () => {
    this.setState({isPopupOpen: false})
  }

  isAboutPopupClose = () => {
    this.setState({isAboutPopupOpen: false})
  }

  render() {
    const {isPopupOpen, isAboutPopupOpen} = this.state
    return (
      <div className="container">
        <BrowserRouter>
          <MedicationHeader
            isOpen={this.isOpen}
            isAboutPopupOpen={this.isAboutPopupOpen}
          />
          <hr className="horizontal" />
          <Switch>
            <Route exact path="/" component={Medicine} />
            <Route exact path="/medicine" component={Medicine} />
            <Route exact path="/medicine/:id" component={MedicineDetails} />
            <Route exact path="/morning" component={MorningRoute} />
            <Route exact path="/afternoon" component={AfternoonRoute} />
            <Route exact path="/night" component={NightRoute} />
          </Switch>
        </BrowserRouter>
        <ToastContainer position="top-right" autoClose={false} />
        {isPopupOpen && <InfoPopup isClose={this.isClose} />}
        {isAboutPopupOpen && (
          <AboutPopup isAboutPopupClose={this.isAboutPopupClose} />
        )}
      </div>
    )
  }
}

export default App
