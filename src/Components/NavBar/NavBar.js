import React from 'react'
import './NavBar.css'
import { NavItem } from './NavItem'
import { NavLink } from './NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export class NavBar extends React.Component {
    constructor (props) {
        super (props)
              
        this.navItemsList = [
            {
                text: 'home',
                icon: 'home',
            }, {
                text: 'about',
                icon: 'user',
            }, {
                text: 'work',
                icon: 'video',
            }, {
                text: 'buzz',
                icon: 'bullhorn',
            }, {
                text: 'services',
                icon: 'cog',
            }, {
                text: 'contact',
                icon: 'phone-alt',
            }
        ]

        this.navLinksList = [
            {
                icon: ['fab', 'facebook-f'],
            }, {
                icon: ['fab', 'twitter'],
            }, {
                icon: ['fab', 'instagram'],
            }, {
                icon: ['fab', 'linkedin-in'],
            }
        ]
    } 

    render () {
        return <div id = 'navBar'>
            <div id = 'navLogo'>
                <img
                    src = './media/jioLogo.png'
                    alt = 'jio-logo'
                    id = 'jio' 
                />
                <div id = 'navLogoTextCont'>
                    <div id = 'creative'>Creative</div>
                    <div id = 'labs'>Labs</div>
                </div>
            </div>

            <div id = 'navList'>
                {this.navItemsList.map (navItem => <NavItem
                    key = {navItem.text}
                    text = {navItem.text}
                    icon = {navItem.icon}
                    navigate = {this.props.navigate} 
                />)}
            </div>

            <div id = 'navLinks'>
                {this.navLinksList.map ((navLink, index) => <NavLink
                    key =  {index}
                    icon = {navLink.icon} 
                />)}
            </div>
        </div>
    }
}