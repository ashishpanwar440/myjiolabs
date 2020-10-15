import React from 'react'

export class WorkCube extends React.Component {
    constructor (props) {
        super (props)
        
    }

    render () {
        return <div 
            className = {'workCube cube' + this.props.index + ' ' + this.props.type}
            id = {'workCube-' + this.props.index} 
        >
            {this.props.worksArr.map((work, index) => <div
                key={index}
                className={'face face' + index}
            >
                <div className = 'faceCont'>
                    <div className = 'workImgCont'>
                        <img 
                            src = {work.imgSrc}
                            alt = 'work-img'
                            className = 'workImg'
                        />
                    </div>
                    <div className = 'workHead'>
                        {work.head}
                    </div>
                    <div className = 'workHov'>
                        <a 
                            className = 'workLinkCont'
                            href = {work.src} 
                            target = '_blank'
                        >
                            <div className = 'workLink'>
                                View Project
                            </div>
                        </a>
                    </div>
                </div>
            </div>)}
        </div>
    }
}