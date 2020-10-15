import React from 'react'
import { NavItem } from './NavItem'
import { NavLink } from './NavLink'

export class SideNav extends React.Component {
    constructor (props) {
        super (props) 
        this.state = {

        }
    }

    render () {
        return <div id = 'sideNav'>
            <div id = 'navList'>
                {this.props.navItemsList.map (navItem => <NavItem
                    key = {navItem.text}
                    text = {navItem.text}
                    icon = {navItem.icon}
                    navigate = {this.props.navigate} 
                />)}
            </div>

            <div id = 'navLinks'>
                {this.props.navLinksList.map ((navLink, index) => <NavLink
                    key =  {index}
                    icon = {navLink.icon} 
                />)}
            </div> 
        </div>
    }
}