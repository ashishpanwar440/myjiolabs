import React from 'react'
import './Home.css'
import { wobbleCharacterListener } from '../Root/App'

export default class Home extends React.Component {
    constructor (props) {
        super (props) 
        this.state = {

        }

        this.creative = 'creative'
        this.labs = 'labs'
    }

    animate () {

        // characters Intro Animation..
        let charactersList = document.querySelectorAll ('.character')
        let i = 0
        charactersList.forEach (character => {
            character.classList.remove ('introCharacter', 'fixCharacter', 'wobbleCharacter')
            character.removeEventListener ('mouseenter', wobbleCharacterListener)
            setTimeout (() => {
                character.classList.add ('introCharacter', 'fixCharacter')
                character.addEventListener ('mouseenter', wobbleCharacterListener)
            }, i)
            i += 100
        })

        // Jio SVG Animation..
        let jioLogoText = document.querySelector('.jioLogoText')
        let jioLogoCircle = document.querySelector('.jioLogoCircle')
        jioLogoText.classList.add ('animateSVG')
        jioLogoCircle.classList.add ('animateSVG')

        // Creative and Labs Fix..
        let creative = document.querySelector ('#home #creative')
        let labs = document.querySelector ('#home #labs')
        creative.classList.add ('fixCreative')
        labs.classList.add ('fixLabs')

        // Video Animation..
        let background = document.querySelector ('#background')
        background.classList.add ('homeVideoAnimate')
        
        // Playing the video after the animation ends..
        let video = document.querySelector ('#homeVideo')
        setTimeout (() => {
            video.classList.add('fadeIn')
            video.play ()
        }, 2500)
    }

    render () {
        return <div 
            id = 'home'
            className = 'page enter'
        >
            <div id = 'background'>
                
                <div id = 'backImgCont'>
                    <img 
                        src = './media/homeBack.jpg'
                        id = 'backImg'
                    />
                </div>

                <video 
                    muted = {true} 
                    loop = {true}
                    id = 'homeVideo' 
                    preload = 'auto'
                >
                    <source src="./media/jioFrontVideo.mp4" type="video/mp4" />
                    Sorry, your browser does not support the video.
                </video>

            </div>
            <div id = 'welcomeNote'>
                <div id = 'brand'>
                    
                    <div className = 'jioSVGCont'>
                        <svg className = 'jioSVG'
                            xmlns="http://www.w3.org/2000/svg" 
                            enableBackground="new 0 0 64 64" 
                            viewBox="0 0 64 64">
                            <g transform="matrix(.13 0 0 -.13 0 72.5)">
                                <path 
                                    className = 'jioLogoCircle' 
                                    fill="#ee2736" 
                                    fillRule="evenodd" 
                                    d="M254.1,515.8c105.9,0,191.8-85.9,191.8-191.8S360,132.3,254.1,132.3
                                        c-105.9,0-191.8,85.9-191.8,191.8S148.2,515.8,254.1,515.8" 
                                    clipRule="evenodd" 
                                />
                                <path 
                                    className = 'jioLogoText' 
                                    fill="#fff" 
                                    fillRule="evenodd" 
                                    d="M162.7,389.7c1.5,20.4,41.2,24.5,46,0v-76.5c0-97.9-156.1-54.8-92.8-4.5
                                        c14.8-20.5,43.2-19.2,46.3,1.1L162.7,389.7z M339.7,374.3c33.7,0,61.1-26.7,61.1-59.5c0-32.9-27.3-59.6-61.1-59.6
                                        c-33.7,0-61.1,26.7-61.1,59.6C278.6,347.6,305.9,374.3,339.7,374.3z M339.7,340c13.2,0,24-11.3,24-25.3c0-14-10.7-25.3-24-25.3
                                        c-13.2,0-23.9,11.3-23.9,25.3C315.7,328.7,326.4,340,339.7,340z M240.1,424h8.6c9.9,0,18.1-8.2,18.1-18.1v-4.5
                                        c0-9.9-8.2-18.1-18.1-18.1h-8.6c-10,0-18.1,8.1-18.1,18.1v4.5C222,415.9,230.2,424,240.1,424z M240.4,371.5h8
                                        c10.1,0,18.4-8.3,18.4-18.4V276c0-10.1-8.3-18.4-18.4-18.4h-8c-10.1,0-18.4,8.3-18.4,18.4v77.1C222,363.3,230.3,371.5,240.4,371.5" 
                                    clipRule="evenodd" 
                                />
                            </g>
                        </svg>
                    </div>

                    <img
                        src = './media/jioLogo.png'
                        alt = 'jio-logo'
                        id = 'jio' 
                    />

                    <div id = 'creative'>
                        {this.creative.split('').map ((character, index) => <span 
                            key = {index}
                            className = 'character' >
                            {character}
                        </span>)}
                    </div>

                    <div id = 'labs'>
                        {this.labs.split('').map ((character, index) => <span 
                            key = {index}
                            className = 'character' >
                            {character}
                        </span>)}
                    </div>
                
                </div>
            </div>

        </div>
    }

    componentDidMount () {
        this.animate()
    }
}