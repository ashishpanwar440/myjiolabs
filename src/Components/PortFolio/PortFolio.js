import React from 'react'
import './PortFolio.css'

export default class PortFolio extends React.Component {
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

        this.currIndex = 0
        this.characters = 'Portfolio'

        this.showWork = this.showWork.bind (this)
        this.animate = this.animate.bind (this)        

    } 

    animate () {

        let video = document.querySelector ('#workVideo-' + 0) 
        let item = document.querySelector ('#workItem-' + 0) 
        let detItem = document.querySelector ('#workDet-' + 0) 
        let videoFile = document.querySelector ('#workVideoFile-' + 0) 
        
        setTimeout (() => {
            video.classList.add ('showVideoRight')
            video.classList.remove ('hideVideoRight')
            item.classList.add ('selectedWorkItem')
            detItem.classList.remove ('hideWorkDetRight', 'hideWorkDetLeft') 
            detItem.classList.add ('showWorkDetRight')
        }, 500)
        
        setTimeout (() => {
            videoFile.play () 
        }, 2000)        
    }

    showWork (index) {
        if (this.currIndex !== index) {
            
            let oldIndex = this.currIndex

            let prevVideo = document.querySelector ('#workVideo-' + oldIndex) 
            let prevItem = document.querySelector ('#workItem-' + oldIndex) 
            let prevDetItem = document.querySelector ('#workDet-' + oldIndex) 
            let prevVideoFile = document.querySelector ('#workVideoFile-' + oldIndex) 
            prevVideoFile.pause () 

            setTimeout (() => {
                prevVideo.classList.remove ('showVideoRight', 'showVideoLeft') 
                prevDetItem.classList.remove ('showWorkDetRight', 'showWorkDetLeft') 
                prevItem.classList.remove ('selectedWorkItem')
                
                if (oldIndex > index) {
                    prevVideo.classList.add ('hideVideoRight') 
                    prevDetItem.classList.add ('hideWorkDetRight') 
                } else {
                    prevVideo.classList.add ('hideVideoLeft') 
                    prevDetItem.classList.add ('hideWorkDetLeft') 
                }
            }, 100)

            let newVideo = document.querySelector ('#workVideo-' + index) 
            let newItem = document.querySelector ('#workItem-' + index) 
            let newDetItem = document.querySelector ('#workDet-' + index) 
            let newVideoFile = document.querySelector ('#workVideoFile-' + index) 
            
            setTimeout (() => {
                newVideo.classList.remove ('hideVideoRight', 'hideVideoLeft')            
                newDetItem.classList.remove ('hideWorkDetLeft', 'hideWorkDetRight') 
                newItem.classList.add ('selectedWorkItem')
                
                
                if (oldIndex > index) {
                    newVideo.classList.add ('showVideoLeft')            
                    newDetItem.classList.add ('showWorkDetLeft') 
                } else {
                    newVideo.classList.add ('showVideoRight')            
                    newDetItem.classList.add ('showWorkDetRight') 
                }
                
            }, 10)

            setTimeout (() => {
                newVideoFile.play ()
            }, 2000)
            
            this.currIndex = index
        }
    }

    render () {
        return <div 
            id = 'work'
            className = 'page enter'
        >
            <div id = 'worksPageCont'>

                <div id = 'workLayout'>

                    <div id = 'workTop'>

                        <div id = 'videoArea'>
                            
                            {/* <div id = 'allVidsCont'> */}
                                {this.works.map ((work, index) => <div
                                    key = {index}
                                    className = 'videoCont'
                                    id = {'workVideo-' + index}
                                >
                                    <video 
                                        poster = {work.imgSrc}
                                        preload = 'metadata'
                                        loop = {false}
                                        muted = {false}
                                        id = {'workVideoFile-' + index}
                                        controls = 'controls'
                                    >
                                        <source 
                                            src = {work.videoSrc}
                                            type = 'video/mp4'
                                        />
                                        Sorry, your browser does not support the video.
                                    </video>
                                </div>)}
                            {/* </div> */}

                        </div>
                        
                        <div id = 'workDetGrid'>
                            {this.works.map ((work, index) => <div
                                className = 'workDetItem'
                                key = {index}
                                id = {'workDet-' + index}
                            >
                                <div className = 'workHead'>
                                    {work.head}
                                </div>
                                <div className = 'workDesc'>
                                    {work.desc}
                                </div>
                                <div className = 'workLinkCont'>
                                    <a
                                        className = 'workLink'
                                        href = {work.src}
                                        target = '_blank'
                                    >
                                        Watch Full Video
                                    </a>
                                </div>
                            </div>)}
                        </div>
                    
                    </div>

                    <div id = 'workGrid'>
                        {this.works.map ((work, index) => <div
                            key = {index}
                            className = 'workItem'
                            id = {'workItem-' + index}
                            onClick = {() => {
                                this.showWork (index)
                            }}    
                        >
                            <div className = 'workImgCont'>
                                <img 
                                    src = {work.imgSrc}
                                    alt = 'work-img'
                                    className = 'workListImg'
                                />
                            </div>
                            <div className = 'workHead'>
                                {work.head}
                            </div>
                        </div>)}
                    </div>
                
                </div>
            </div>
        </div>
    }

    componentDidMount () {
        this.animate ()
    }

    componentWillUnmount () {
        let videoFile = document.querySelector ('#workVideoFile-' + this.currIndex) 
        videoFile.pause ()
        for (let i = 0; i < this.works.length; i ++) {
            let video = document.querySelector ('#workVideo-' + i) 
            let item = document.querySelector ('#workItem-' + i) 
            let detItem = document.querySelector ('#workDet-' + i) 
            video.classList.remove ('showVideoRight', 'showVideoLeft', 'hideVideoLeft', 'hideVideoRight')
            item.classList.remove ('selectedWorkItem')
            detItem.classList.remove ('hideWorkDetRight', 'hideWorkDetLeft', 'showWorkDetRight', 'showWorkDetLeft') 
        }
    }
}