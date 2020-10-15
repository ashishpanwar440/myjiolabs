import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default class Loader extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            percent: 0,
        }

        this.clearId = null

        this.reload = this.reload.bind (this)
        this.updatePercent = this.updatePercent.bind (this)
    }

    reload () {
        this.setState ({
            percent: 0,
        }, () => {
            setInterval (() => {
                this.clearId = setInterval (this.updatePercent, 20)       
            }, 1000)
        })
    }

    updatePercent () {
        if (this.state.percent < 100) {
            this.setState ({
                percent: this.state.percent + 1,
            })
        }
    }

    render () {

        let styleSheet = document.styleSheets[document.styleSheets.length - 1]
         
        let playingDot = `@-webkit-keyframes playingDot {
            0% {
                width: 30rem;
                transform: translateY(2rem);
                background: var(--logo-col-pink);
            } 50% {
                width: 2rem;
                transform: translateY(-1rem);
                background: var(--logo-col-pink);
            } 100% {
                width: 5px;
                transform: translateY(-8rem);
                background: var(--logo-col-jio);
            }
        }`
         
        let mainCircle = `@-webkit-keyframes mainCircle {
            to {
                stroke-dashoffset: 0px;
            }
        }`

        let loadingHead = `@-webkit-keyframes loadingHead {
            from {
                transform: translateY(8rem);
                opacity: 0;
            } to {
                transform: translateY(4rem);
                opacity: 1;
            } 
        }`

        let percent = `@-webkit-keyframes percent {
            0% {
                transform: translateY(0);
                opacity: 0;
            } 20% {
                transform: translateY(-3.5rem) translateX(5px);
                opacity: 1;
            } 85% {
                transform: translateY(-3.5rem) translateX(5px);
                opacity: 1;
            } 100% {
                transform: translateY(-5.5rem) translateX(5px);
                opacity: 0;
            }
        }`

        let loaded = `@-webkit-keyframes loaded {
            from {
                transform: translateY(0);
                opacity: 0;
            } to {
                transform: translateY(-3.5rem);
                opacity: 1;
            } 
        }`
    
        styleSheet.insertRule(playingDot, styleSheet.cssRules.length)
        styleSheet.insertRule(mainCircle, styleSheet.cssRules.length)
        styleSheet.insertRule(loadingHead, styleSheet.cssRules.length)
        styleSheet.insertRule(percent, styleSheet.cssRules.length)
        styleSheet.insertRule(loaded, styleSheet.cssRules.length)

        let loaderStyle = {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
        }

        let playingDotStyle = {
            position: 'absolute',
            width: '30rem',
            height: '5px',
            borderRadius: '5px',
            animation: 'playingDot 0.65s forwards',
        }

        let mainCircleStyle = {
            position: 'absolute',
            transform: 'translateY(calc(-8rem + 76px))',
        }

        let svgStyle = {
            stroke: 'var(--logo-col-jio)',
            strokeWidth: '5px',
            fill: 'none',
            animation: 'mainCircle 3s 1s forwards',
            transform: 'rotate(-90deg)',
            strokeDasharray: '600px',
            strokeDashoffset: '600px',
        }

        let loadingHeadStyle = {
            position: 'absolute',
            fontSize: '2.5rem',
            textTransform: 'uppercase',
            transform: 'translateY(4rem)',
            fontWeight: '500',
            opacity: '0',
            animation: 'loadingHead 0.35s 1s forwards',
        }

        let percentStyle = {
            position: 'absolute',
            fontSize: '2rem',
            textTransform: 'uppercase',
            color: 'var(--logo-col-pink)',
            opacity: '0',
            animation: 'percent 3s 0.65s forwards',
        }

        let loadedStyle = {
            position: 'absolute',
            fontSize: '3rem',
            color: 'var(--logo-col-pink)',
            opacity: '0',
            animation: 'loaded 0.35s 3.5s forwards',
        }

        return <div id = 'loader2' style = {loaderStyle}>
            
            <div id = 'playingDot' style = {playingDotStyle}></div>
            <div id = 'mainCircle' style = {mainCircleStyle}>
                <svg 
                    height = '150' 
                    width = '150'
                    style = {svgStyle}
                >
                    <circle 
                        cx = '75' 
                        cy = '75' 
                        r = '72' 
                    />
                </svg> 
            </div>
            <div id = 'percent' style = {percentStyle}>{this.state.percent}%</div>
            <div id = 'loadingHead' style = {loadingHeadStyle}>Loading</div>
            <FontAwesomeIcon icon = {faCheck} id = 'loaded' style = {loadedStyle} />

        </div>
    }

    componentDidMount () {
        this.reload ()
    }

    componentWillUnmount () {
        clearInterval (this.clearId)
    }
}
