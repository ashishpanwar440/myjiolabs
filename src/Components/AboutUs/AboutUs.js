import React from 'react'
import './AboutUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { wobbleCharacterListener } from '../Root/App'

export default class AboutUs extends React.Component {
    constructor (props) {
        super (props) 
        this.state = {

        }

        this.characters = 'Transforming Brands..'

        this.team = [
            {
                imgSrc: './media/team1.jpg',
                name: 'Sushmita Sen',
                pos: 'Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            }, {
                imgSrc: './media/team2.jpg',
                name: 'Shah Rukh Khan',
                pos: 'Managing Director',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            }, {
                imgSrc: './media/team3.jpg',
                name: 'Amitabh Bachchan',
                pos: 'Chief Operating Officer',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            }, {
                imgSrc: './media/team4.jpg',
                pos: 'Chief Technical Officer',
                name: 'Robert Downey Jr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            }
        ]

        this.about = [
            {
                imgSrc: './media/about1.jpg',
                text: 'We, at Jio Creative Labs, have been curating effective communication for companies to inspire business growth across industries.',
            }, {
                imgSrc: './media/about2.jpg',
                text: 'Based in the city of Mumbai, we serve brands globally with a footprint in every major continent. JCL is a powerhouse of creative ideas and astute execution that believes in the power of its people and communities and strives constantly to nurture them.',
            }, {
                imgSrc: './media/about3.jpg',
                text: 'At Jio Creative Labs, we believe in creating legacies. With this philosophy, we constantly keep reinventing the wheel and create new and interesting properties.',
            }
        ]
        
        this.abtQueue = []
        this.rotateIntervalId = null

        this.animate = this.animate.bind (this)
        this.rotateAbout = this.rotateAbout.bind (this)
    } 

    animate () {
        this.rotateAbout ()
    }

    rotateAbout () {

        let abtItem0 = document.getElementById ('aboutItem-0')
        let abtItem1 = document.getElementById ('aboutItem-1')
        let abtItem2 = document.getElementById ('aboutItem-2')
        let abtImg0 = document.getElementById ('aboutImg-0')
        let abtImg1 = document.getElementById ('aboutImg-1')
        let abtImg2 = document.getElementById ('aboutImg-2')

        abtItem0.classList.add('leftAbout')
        abtItem1.classList.add('frontAbout')
        abtItem2.classList.add('rightAbout')
        abtImg0.classList.add('hideAbtImg')
        abtImg1.classList.add('showAbtImg')
        abtImg2.classList.add('hideAbtImg')

        this.abtQueue = [[abtItem0, abtImg0], [abtItem1, abtImg1], [abtItem2, abtImg2]]

        this.rotateIntervalId = setInterval (() => {
            
            // rotating the queue..
            this.abtQueue.push (this.abtQueue.shift())

            // toggling classes..
            let left = this.abtQueue[0]
            let front = this.abtQueue[1]
            let right = this.abtQueue[2]

            left[0].classList.remove ('rightAbout', 'frontAbout')
            left[0].classList.add ('leftAbout')
            front[0].classList.remove ('rightAbout', 'leftAbout')
            front[0].classList.add ('frontAbout')
            right[0].classList.remove ('leftAbout', 'frontAbout')
            right[0].classList.add ('rightAbout')

            left[1].classList.remove ('showAbtImg')
            left[1].classList.add ('hideAbtImg')
            front[1].classList.add ('showAbtImg')
            front[1].classList.remove ('hideAbtImg')
            right[1].classList.remove ('showAbtImg')
            right[1].classList.add ('hideAbtImg')

        }, 3000)
    }

    render () {
        return <div 
            id = 'about'
            className = 'page enter'
        >
            <div id = 'aboutCont'>

                <div id = 'transformingBrands'>
                    
                    <div id = 'aboutHead'>
                        About Us
                    </div>
                    
                    <div id = 'aboutRestCont'>
                        <div id = 'aboutGridCont'>
                            {this.about.map ((abt, index) => <div
                                key = {index}
                                className = 'aboutItem'
                                id = {'aboutItem-' + index}
                            >
                                <div 
                                    className = 'aboutText'
                                >
                                    {abt.text}
                                </div>
                            </div>)}
                            
                            <div className = 'aboutItem pseudoAbtItem'>
                                <div 
                                    className = 'aboutText'
                                >
                                    Based in the city of Mumbai, we serve brands globally 
                                    with a footprint in every major continent. JCL is a 
                                    powerhouse of creative ideas and astute execution that 
                                    believes in the power of its people and communities and 
                                    strives constantly to nurture them.
                                </div>
                            </div>
                        
                        </div>
                                        
                        <div id = 'meetTeamCont'>
                            <a href = '#teamCont'>
                                <div id = 'meetTeamHead'>
                                    Meet The Team 
                                </div>   
                                <FontAwesomeIcon icon = {faChevronDown} />
                            </a> 
                        </div>

                    </div>
                    
                    {this.about.map ((abt, index) => <div
                        className = 'aboutImgCont'
                        key = {index}
                        id = {'aboutImg-' + index}
                    >
                        <img
                            src = {abt.imgSrc}
                            className = 'aboutImg'
                            alt = 'abt-img'
                        />
                    </div>)}
                
                </div>

                <div id = 'teamCont'>
                    
                    <div id = 'teamsHead'>
                        Our Team
                    </div>

                    <div id = 'teamGrid'>
                        {this.team.map ((mem, index) => <div
                            key = {index}
                            className = 'teamItem'
                            id = {'mem-' + index}
                        >
                            <div 
                                className = 'memImgCont'
                                id = {'memImg-' + index}
                            >
                                <img 
                                    src = {mem.imgSrc}
                                    alt = 'team-member'
                                    className = 'memImg'
                                />
                            </div>

                            <div
                                className = 'memDetCont'
                                id = {'mem-' + index}
                            >
                                <div className = 'memName'>
                                    {mem.name}
                                </div>
                                <div className = 'memPos'>
                                    {mem.pos}
                                </div>
                                <div className = 'memDesc'>
                                    {mem.desc}
                                </div>
                                <div className = 'memLinks'>
                                    <FontAwesomeIcon icon = {['fab', 'facebook-f']} />
                                    <FontAwesomeIcon icon = {['fab', 'twitter']} />
                                    <FontAwesomeIcon icon = {['fab', 'instagram']} />
                                    <FontAwesomeIcon icon = {['fab', 'linkedin-in']} />
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>   
        </div>
    }

    componentDidMount () {
        setTimeout (() => {
            this.animate ()
        }, 0)
    }
}