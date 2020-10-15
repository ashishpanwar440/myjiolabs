import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class NavLink extends React.Component {
    constructor (props) {
        super (props) 
    }

    render () {
        return <div className = 'navLinkItem'>
            <FontAwesomeIcon icon = {this.props.icon} />
        </div>
    }
}