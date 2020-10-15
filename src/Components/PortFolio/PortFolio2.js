import React from 'react'
import './PortFolio2.css'
import { WorkCube } from './WorkCube'

export default class PortFolio2 extends React.Component {
    constructor (props) {
        super (props)
        
        this.works = [
            {
                src: 'https://youtu.be/owJ52xKsK20',
                head: 'Jeeta Rahe Mera India',
                imgSrc: 'media/work1.png',
                videoSrc: 'media/jioFrontVideo.mp4',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            }, {
                src: 'https://youtu.be/-bGpO6H5Xwo',
                head: 'Ceiling Nahi Feeling Hai',
                imgSrc: 'media/work2.png',
                videoSrc: 'media/jio2.mp4',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            }, {
                src: 'https://youtu.be/_P1bH77WySs',
                head: 'New Strong Move - 4 In 1',
                imgSrc: 'media/work3.png',
                videoSrc: 'media/moov.mp4',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            }, {
                src: 'https://youtu.be/77xaEK2Elz4',
                head: 'Jio Dhan Dhana Dhan',
                imgSrc: 'media/work4.png',
                videoSrc: 'media/jio.mp4',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            }, {
                src: 'https://youtu.be/2v7jUPucV64',
                head: 'Jio Ft Deepika Padukone',
                imgSrc: 'media/work5.png',
                videoSrc: 'media/jio2.mp4',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            }, {
                src: 'https://youtu.be/Fe341SX8TFw',
                head: 'Navratna Television Commercial',
                imgSrc: 'media/work6.png',
                videoSrc: 'media/moov.mp4',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            }, {
                src: 'https://youtu.be/M-ACYtUg38g',
                head: 'Family is Forever - Reliance Jio',
                imgSrc: 'media/work7.png',
                videoSrc: 'media/jio.mp4',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            }
        ]
        
        this.cubes = [
            [
                this.works[0],            
                this.works[4],            
                this.works[1],            
                this.works[5],            
            ], [
                this.works[1],            
                this.works[5],            
                this.works[2],              
                this.works[6],              
            ], [
                this.works[2],            
                this.works[6],               
                this.works[3],            
                this.works[0],            
            ], [
                this.works[3],            
                this.works[0],            
                this.works[4],            
                this.works[1],                
            ],

        ]

        this.currId = 0
        this.currFaces = [0, 0, 0, 0]

        this.changeFaces = this.changeFaces.bind (this)
        this.interval = null
    } 

    changeFaces () {

        // get the new incremented id..
        let newId = this.currId
        
        // get the current cube..
        let cube = document.getElementById ('workCube-' + newId)
        
        // get current face of the cube..
        let newFace = (this.currFaces[newId] + 1) % 4

        // determine the new animation name..
        let animation = 'showFace'
        if (newId % 2) {
            // horizontal cube..
            animation += 'Hor' + newFace + ' 0.5s forwards'
        } else {
            // vertical cube..
            animation += 'Ver' + newFace + ' 0.5s forwards'
        }

        // apply the animation..
        cube.style.animation = animation

        // confirm the changes..
        this.currId = (newId + 1) % 4
        this.currFaces[newId] = newFace

    }


    render () {
        return <div 
            id = 'work'
            className = 'page'
        >
            <div id = 'worksPageCont'>

                <div id = 'worksGrid'>
                    {this.cubes.map ((workArr, index) => <div
                        key = {index}
                        className = 'workCubeCont'
                    >   
                        <WorkCube 
                            worksArr = {workArr}
                            index = {index}
                            type = {index % 2 ? 'horizontal' : 'vertical'}
                        />
                    </div>)}
                </div>
            </div>
        </div>
    }

    componentDidMount () {
        setTimeout (() => {
            this.interval = setInterval (this.changeFaces, 2000)
        }, 1500)
    }

    componentWillUnmount () {
        clearInterval (this.interval)
    }
}