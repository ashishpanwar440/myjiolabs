import React from 'react'
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class Services extends React.Component {
    constructor (props) {
        super (props) 

        this.services = [
            {
                head: 'Advertising',
                text: '30 second TVC\'s to Radio Spots to Print to OOH, from giving blockbuster campaign lines to writing short and quirky scripts we do it all. We also can create eye catching hoardings and print ads if you need them.',
                imageSrc: './media/service1.png'
            }, {
                head: 'Digital Communication',
                text: 'From building your identity to creating a legacy, at JCL we have capabilities to manage and execute everything digital. From creating assets to deploying them to generating some customers, we can do it all.',
                imageSrc: './media/service2.png'
            }, {
                head: 'Production & Post Production',
                text: 'With a strong team of EP\'s, CP\'s, LP\'s,PM\'s and also on-roll directors and DOP\'s along with a 5000 sq. ft. shoot floor in the heart of Mumbai we know production like the back of our hand. With a post - production which can do Offline, Online, VFX, Art, 3D, Music & Art and an average experience of 12 years in the industry, we really do the best job at the most optimal cost.',
                imageSrc: './media/service3.png'
            }, {
                head: 'Influencer Marketing',
                text: 'With an influencer outreach program of 2000+ and in-house managing more than 50 we can help create the most engaging influencer content that you can imagine. Also, if you are influencer we can help you build your digital so that you get the right leverage from it.',
                imageSrc: './media/service4.png'
            }, {
                head: 'Technology Content',
                text: 'VR / AR / MR, we help if you mix virtual into reality. With a team of CG artists and developers we can create everything which is XR',
                imageSrc: './media/service5.png'
            }, {
                head: 'IP\'s & Branded Content',
                text: 'Want tentpole properties, something which defines your brand and vice versa ? You have come to the right place',
                imageSrc: './media/service6.png'
            }
        ]

        this.scrollTo = this.scrollTo.bind (this)
        this.scrollListener = this.scrollListener.bind (this)

        this.characters = 'Services'
        this.currIndex = 0
        this.clipHeightArr = ['39% 26%', '28% 32%', '30% 43%', '40% 52%', '37% 63%', '28% 72%']
    } 
    
    animate () {

        let images = document.querySelectorAll('.serImgCont')        
        let texts = document.querySelectorAll('.serviceText')        
        let heads = document.querySelectorAll('.serviceHead')        

        images.forEach (img => {
            img.classList.remove('normalizeImg')
        })
        texts.forEach (text => {
            text.classList.remove('normalizeTex')
        })
        heads.forEach (head => {
            head.classList.remove('selectedServiceHead')
        })

        let servicesGrid = document.querySelector ('#servicesGrid')
        let servicesNav = document.querySelector('.serviceNavCont') 
        servicesGrid.scrollTop = 0
        servicesNav.style.clipPath = 'polygon(100% 0px, 80% 0px, 39% 26%, 70% 100%, 100% 100%)'
        
        let fstimg = document.querySelector ('#serviceItem-0 .serImgCont')
        let fsttext = document.querySelector ('#serviceItem-0 .serviceText')
        let fsthead = document.querySelector ('#serviceHead-0')

        fstimg.classList.add('normalizeImg')
        fsttext.classList.add('normalizeTex')
        fsthead.classList.add('selectedServiceHead')
    }

    scrollTo (index) {

        let servicesGrid = document.querySelector ('#servicesGrid')
        
        if (this.currIndex !== index) {
            
            let itemHeight = servicesGrid.scrollHeight / this.services.length
            servicesGrid.scrollTop = itemHeight * index
        }
    }

    scrollListener () {
        let servicesGrid = document.querySelector ('#servicesGrid')
        let servicesNav = document.querySelector ('.serviceNavCont')

        servicesGrid.addEventListener ('scroll', () => {
            let itemHeight = servicesGrid.scrollHeight / this.services.length
            let index = parseInt ((servicesGrid.scrollTop + itemHeight / 2) / itemHeight)

            if (this.currIndex !== index) {

                let arr = document.getElementById ('serScrollArrow')
                arr.style.display = 'none'

                let prevImg = document.querySelector ('#serviceItem-' + this.currIndex + ' .serImgCont')
                let prevText = document.querySelector ('#serviceItem-' + this.currIndex + ' .serviceText')
                let prevHead = document.querySelector ('#serviceHead-' + this.currIndex )
                
                prevImg.classList.remove('normalizeImg')
                prevText.classList.remove('normalizeTex')
                prevHead.classList.remove('selectedServiceHead')

                let newImg = document.querySelector ('#serviceItem-' + index + ' .serImgCont')
                let newText = document.querySelector ('#serviceItem-' + index + ' .serviceText')
                let newHead = document.querySelector ('#serviceHead-' + index )
                
                newImg.classList.add('normalizeImg')
                newText.classList.add('normalizeTex')
                newHead.classList.add('selectedServiceHead')

                servicesNav.style.clipPath = 'polygon(100% 0, 80% 0, ' + this.clipHeightArr[index] + ', 70% 100%, 100% 100%)'
                
                this.currIndex = index
            }
        })
    }

    render () {
        return <div 
            id = 'services'
            className = 'page enter'
        >
            <div id = 'servicesPageCont'>

                <div id = 'servicesHead'>
                    {this.characters.split(' ').map ((word, index) => <span 
                        key = {index}
                        className = 'servicesHeadWord'>
                        {word.split('').map ((character, index) => <span
                            key = {index}
                            className = 'servicesHeadChar' >
                            {character}
                        </span>)}
                    </span>)}
                </div>
                
                <div id = 'servicesGrid'>
                    {this.services.map ((service, index) => <div
                        key = {service.head}
                        className = 'serviceItem'
                        id = {'serviceItem-' + index}
                    >
                        <div className = 'serImgCont'>
                            <img
                                className = 'serviceImg'
                                alt = 'service-img'
                                src = {service.imageSrc}
                            />
                        </div>
                        {/* <div className = 'serviceHead'>
                            {service.head}
                        </div> */}
                        <div className = 'serviceText'>
                            {service.text}
                        </div>
                    </div>)}
                </div>

                <div className = 'serviceNavCont'>
                    {this.services.map ((service, index) => <div
                        className = 'serviceHead'
                        key = {index}
                        id = {'serviceHead-' + index}
                        onClick = {() => {
                            this.scrollTo (index)
                        }}
                    >{service.head}</div>)}
                </div>

                <FontAwesomeIcon icon = {faChevronDown} id = 'serScrollArrow' />

            </div>
        </div>
    }

    componentDidMount () {
        this.scrollListener ()
        this.animate ()
    }
}