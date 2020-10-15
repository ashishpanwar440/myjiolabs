import React from 'react'
import './Services.css'

export class Services extends React.Component {
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
                head: 'Production & POST PRODUCTION',
                text: 'With a strong team of EP\'s, CP\'s, LP\'s,PM\'s and also on-roll directors and DOP\'s along with a 5000 sq. ft. shoot floor in the heart of Mumbai we know production like the back of our hand. With a post - production which can do Offline, Online, VFX, Art, 3D, Music & Art and an average experience of 12 years in the industry, we really do the best job at the most optimal cost.',
                imageSrc: './media/service3.png'
            }, {
                head: 'influencer Marketing',
                text: 'With an influencer outreach program of 2000+ and in-house managing more than 50 we can help create the most engaging influencer content that you can imagine. Also, if you are influencer we can help you build your digital so that you get the right leverage from it.',
                imageSrc: './media/service4.png'
            }, {
                head: 'Technology Content',
                text: 'VR / AR / MR, we help if you mix virtual into reality. With a team of CG artists and developers we can create everything which is XR',
                imageSrc: './media/service5.png'
            }, {
                head: 'IP\'s and branded content',
                text: 'Want tentpole properties, something which defines your brand and vice versa ? You have come to the right place',
                imageSrc: './media/service6.png'
            }
        ]
        this.currIndex = 0
    } 

    synchroniseScroll () {
        let heads = document.querySelector ('#serviceHeadCont')
        let texts = document.querySelector ('#serviceTextCont')
        let serviceImg = document.querySelector ('#serviceImg')

        heads.addEventListener ('scroll', () => {
        
            let fullHeadsHeight = heads.scrollHeight            
            let currScrollHeight = heads.scrollTop
            let blockHeight = fullHeadsHeight / this.services.length
            let index = parseInt((currScrollHeight + blockHeight / 2) / blockHeight)
            
            serviceImg.style.opacity = Math.sin((((currScrollHeight + blockHeight / 2) % blockHeight) / blockHeight) * 3.14)

            if (this.currIndex !== index) {
                serviceImg.src = this.services[index].imageSrc
                this.currIndex = index
            }

            let ratio = texts.scrollWidth / fullHeadsHeight
            texts.scrollLeft = heads.scrollTop * ratio
        })
    }

    render () {
        return <div 
            id = 'services'
            className = 'page'
        >
            <div id = 'servicesPageCont'>

                <div id = 'servicesHead'>Services</div>
                
                <div id = 'serviceImgCont'>
                    <img 
                        id = 'serviceImg'
                        src = './media/service1.png'
                        alt = 'service-img'
                    />
                </div>

                <div id = 'servicesCont'>
                    <div id = 'serviceHeadCont'>
                        {this.services.map ((service, index) => <div
                            key = {service.head}
                            className = 'serviceHead'
                            id = {'service-' + index}
                        >   
                            {service.head}
                        </div>)}
                    </div>
                    <div id = 'serviceTextCont'>
                        {this.services.map (service => <div
                            key = {service.head}
                            className = 'serviceText'
                        >
                            {service.text}
                        </div>)}
                    </div>
                </div>

            </div>
            
        </div>
    }

    componentDidMount () {
        this.synchroniseScroll ()
    }
}