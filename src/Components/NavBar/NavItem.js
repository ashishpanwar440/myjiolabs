import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
// import Link from 'react-router-dom'

export class NavItem extends React.Component {
    constructor (props) {
        super (props) 

    }

    render () {
        return (<Link 
            className = 'navItem'
            id = {'navItem-' + this.props.text}
            to = {this.props.text}
            // onClick = {() => {
            //     this.props.navigate (this.props.text)
            // }} 
            
        >
            <div className = 'navText'>
                {this.props.text}
            </div>    
            <div className = 'navIcon'>
                <FontAwesomeIcon icon = {this.props.icon} />
            </div>
        </Link>)
    }
}