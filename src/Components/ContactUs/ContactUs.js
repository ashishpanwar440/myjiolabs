import React from 'react'
import './ContactUs.css'
import { wobbleCharacterListener } from '../Root/App'

export default class ContactUs extends React.Component {
    constructor (props) {
        super (props) 

        this.characters = 'We would love to talk..'
        this.would = 'would.'
        this.love = 'love'
        this.to = 'to'
        this.talk = 'talk..'

        this.animate = this.animate.bind (this)
    } 

    animate () {
        // characters Rubber Band Animation..
        let charactersList = document.querySelectorAll ('.contactHeadChar')
        let i = 0
        charactersList.forEach (character => {
            character.classList.remove ('introCharacter', 'fixCharacter', 'wobbleCharacter')
            character.removeEventListener ('mouseenter', wobbleCharacterListener)
            setTimeout (() => {
                character.classList.add ('introCharacter', 'fixCharacter')
                character.addEventListener ('mouseenter', wobbleCharacterListener)
            }, i)
            i += 30
        })

        // other blocks animation..
        let blocksList = document.querySelectorAll ('.formDiv, #formSubmitCont, #partnerShipHead, .otherContItem')
        blocksList.forEach (block => {
            block.classList.remove ('slideFromBottom')
            setTimeout (() => {
                block.classList.add ('slideFromBottom')
            }, i)
            i += 100
        })
    }

    render () {
        return <div 
            id = 'contact'
            className = 'page enter'
        >
            <div id = 'contactCont'>
                
                <div id = 'contactHead'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 1440 320"
                    >
                        <path 
                            fill="#0099ff" 
                            fillOpacity="1" 
                            d="M0,192L60,197.3C120,203,240,213,360,213.3C480,213,600,203,720,176C840,149,960,107,1080,80C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
                        </path>
                    </svg>
                    {this.characters.split(' ').map ((word, index) => <span 
                        key = {index}
                        className = 'contactHeadWord'>
                        {word.split('').map ((character, index) => <span
                            key = {index}
                            className = 'contactHeadChar' >
                            {character}
                        </span>)}
                    </span>)}
                </div>
                
                <div id = 'partnerShipCont'>
                    <div id = 'partnerShipHead'>Partnerships</div>
                    <div id = 'contactFormCont'>
                        
                        <div className = 'formDiv' >
                            <input
                                className = 'contactInput'
                                type = 'text'
                                placeholder = 'First Name' 
                                />
                            <input
                                className = 'contactInput'
                                type = 'text'
                                placeholder = 'Last Name' 
                            />
                        </div>

                        <div className = 'formDiv'>
                            <input
                                className = 'contactInput'
                                type = 'email'
                                placeholder = 'Email' 
                                />
                            <input
                                className = 'contactInput'
                                type = 'text'
                                placeholder = 'Subject' 
                            />
                        </div>
                        <div className = 'formDiv'>
                            <textarea
                                type = 'text'
                                placeholder = 'Leave a Message..' 
                                rows = '5'
                            ></textarea>
                        </div>
                        <div id = 'formSubmitCont'>
                            <button>
                                Send
                            </button>
                        </div>
                    </div>

                </div>

                <div id = 'otherContactCont'>
                    
                    <div 
                        id = 'salesCont' 
                        className = 'otherContItem'
                    >
                        <div className = 'otherContHead'>
                            Sales
                        </div>
                        <div className = 'otherContText'>
                            To inquire about our services please do reach out to 
                            <span className = 'contName'> Suraj Adhikari</span> - 
                            <span className = 'contPhone'> 9773451811</span>
                        </div>
                    </div>

                    <div 
                        id = 'jobsCont' 
                        className = 'otherContItem'
                    >
                        <div className = 'otherContHead'>
                            Jobs
                        </div>
                        <div className = 'otherContText'>
                            For career opportunities please send in your CV with your Cover Letter at 
                            <span className = 'contEmail'> foram@boideas.com</span>
                        </div>
                    </div>
                    
                    <div style = {{flex: '1'}}></div>

                    <div 
                        id = 'mapCont'
                        className = 'otherContItem'
                    >
                        <a href = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d33693.60427419045!2d72.83886190526422!3d19.04860724888611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb9b411464bc00f44!2sJio%20Studios!5e0!3m2!1sen!2sin!4v1595365325741!5m2!1sen!2sin'>    
                            © 2020 by Jio Creative Labs. 2nd Floor, 4th North Avenue, Maker Maxity, BKC 
                        </a>  

                        <div id = 'mapHovCont'>
                            <div>View Map</div>
                            <iframe 
                                id = 'map'
                                src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d33693.60427419045!2d72.83886190526422!3d19.04860724888611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb9b411464bc00f44!2sJio%20Studios!5e0!3m2!1sen!2sin!4v1595365325741!5m2!1sen!2sin" 
                                frameBorder="0" 
                                allowFullScreen="" 
                                aria-hidden="false" 
                                tabIndex="0" 
                            ></iframe>
                        </div>

                    </div>
                
                </div> 
            </div>
        </div>
    }

    componentDidMount () {
        this.animate ()
    }
}