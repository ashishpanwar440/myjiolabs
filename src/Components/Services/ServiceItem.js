import React from 'react'

export class ServiceItem extends React.Component {
    constructor (props) {
        super (props)

    }

    render () {
        return <div className = 'serviceItem'>
            <div className = 'serviceHead'>
                {this.props.head}
            </div>
            <div className = 'serviceText'>
                {this.props.text}
            </div>

        </div>
    }
}