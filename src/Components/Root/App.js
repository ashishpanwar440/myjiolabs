import React, { Suspense } from 'react'
import './App.css'
import './Root.css'
import './PageTransitions.css'
import Loader2 from '../Loader/Loader2'
import { NavBar } from '../NavBar/NavBar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookF, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHome, faVideo, faInfoCircle, faNewspaper, faCog, faPhoneAlt, faUser, faGlobeAfrica, faGlobeAmericas, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Switch, Route, Link} from "react-router-dom"

const Home = React.lazy (() => import ('../Home/Home'))
const AboutUs = React.lazy (() => import ('../AboutUs/AboutUs'))
const ContactUs = React.lazy (() => import ('../ContactUs/ContactUs'))
const PortFolio = React.lazy (() => import ('../PortFolio/PortFolio'))
const PortFolio2 = React.lazy (() => import ('../PortFolio/PortFolio2'))
// const InTheNews = React.lazy (() => import ('../InTheNews/InTheNews'))
const InTheNews2 = React.lazy (() => import ('../InTheNews/InTheNews2'))
const Services = React.lazy (() => import ('../Services/Services'))

library.add (fab, faHome, faVideo, faInfoCircle, faNewspaper, faCog, faPhoneAlt)
library.add (faUser, faGlobeAmericas, faBullhorn)
library.add (faFacebookF, faTwitter, faLinkedinIn, faInstagram)

export default class App extends React.Component {
    constructor (props) {
        super (props) 
        this.state = {
            currentPage: 'home',
        }

        this.navigate = this.navigate.bind (this)
    } 

    navigate (page) {
        if (this.state.currentPage !== page) {

            document.getElementById (this.state.currentPage).classList.remove ('enter')
            document.getElementById (this.state.currentPage).classList.add ('fadeOut')

            setTimeout (() => {
                // update the state..
                this.setState ({
                    currentPage: page
                })
            }, 400)
        }
    }

    render () {
        return <div id = 'app'>
            <BrowserRouter>
                <NavBar 
                    navigate = {this.navigate} 
                    currentPage = {this.state.currentPage}
                />

                <div id = 'content'>
                    <Switch>
                        <Route path = '/' exact>
                            <Suspense fallback = {<Loader2 load = {true} />}>
                                <Home 
                                    homeAnimation = {this.homeAnimation}
                                    navigate = {this.navigate}
                                />
                            </Suspense> 
                        </Route>
                        <Route path = '/home'>
                            <Suspense fallback = {<Loader2 load = {true} />}>
                                <Home 
                                    homeAnimation = {this.homeAnimation}
                                    navigate = {this.navigate}
                                />
                            </Suspense> 
                        </Route>
                        <Route path = '/about'>
                            <Suspense fallback = {<Loader2 load = {true} />}>
                                {/* <Loader2 /> */}
                                <AboutUs />
                            </Suspense>
                        </Route>
                        <Route path = '/services'>
                            <Suspense fallback = {<Loader2 load = {true} />}>
                                <Services />
                            </Suspense>
                        </Route>
                        <Route path = '/work'>
                            <Suspense fallback = {<Loader2 load = {true} />}>
                                <PortFolio2 />
                            </Suspense>
                        </Route>
                        <Route path = '/buzz'>
                            <Suspense fallback = {<Loader2 load = {true} />}>
                                <InTheNews2 />
                            </Suspense>
                        </Route>
                        <Route path = '/contact'>
                            <Suspense fallback = {<Loader2 load = {true} />}>
                                <ContactUs />
                            </Suspense>
                        </Route>
                    </Switch>
                    
                </div> 
            </BrowserRouter> 
        </div>
    }
}

export function wobbleCharacterListener () {
    this.classList.remove ('wobbleCharacter', 'introCharacter')
    void this.offsetWidth
    this.classList.add ('wobbleCharacter')
}
