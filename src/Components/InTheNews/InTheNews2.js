import React from 'react'
import './InTheNews2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'

export default class InTheNews extends React.Component {
    constructor (props) {
        super (props) 
        this.state = {

        }
        
        this.featured = {
            text: 'Aditya Bhat, head of Jio Creative Labs, speaks on new campaigns',
            imgSrc: './media/news5.png',
            link: 'https://www.thehindubusinessline.com/catalyst/changing-face-of-campaigns-new-narratives-for-the-new-normal/article31693967.ece',
        }

        this.news = [
            {
                head: 'Campaign India',
                text: 'Reliance has unveiled Jio Creative Labs. The agency works with a set of clients which includes Reliance Jio and Reliance Retail and also with the Government, Private and Public Sector. The agency was set up by Aditya Bhat in 2011 and was called Business of Ideas. In 2016 it merged with Reliance as its advertising and marketing arm as Jio Studios...',
                imgSrc: './media/news4.png',
                link: 'https://www.campaignindia.in/article/reliance-lines-advertising-and-communication-services-under-jio-creative-labs/461059',
            }, {
                head: 'Social Samosa',
                text: 'Jio Creative Labs started out as “Business Of Ideas” which was set up by Aditya Bhat in the year 2011 which merged with Reliance in 2016 as their advertising and marketing arm as JIO Studios. Parallelly, the name was also used by Reliance for their film division as well. To avoid confusion, the Apex decided to demarcate the advertising and marketing arm to have an individual...',
                imgSrc: './media/news1.png',
                link: 'https://www.socialsamosa.com/2020/05/jio-studios-am-arm-renamed-to-jio-creative-labs/',
            }, {
                head: 'AdGully',
                text: '"JeetaRaheMera India" is a tribute to the resilient spirit of India in the fight against Corona. It is an ode to the Frontline Warriors and salutes their extraordinary efforts. The film covers an array of activities such as scientific research, testing, hospitals, domestic manufacturing of PPRs, Anna Seva to caregivers and the needy and keeping data & food supply...',
                imgSrc: './media/news2.png',
                link: 'https://www.adgully.com/jio-creative-labs-creates-ril-s-film-inspired-by-coronahaaregaindiajeetega-93136.html',
            }, {
                head: 'Social Samosa',
                text: 'Jio Creative Labs continues to work with a wide set of clients from Reliance such as Reliance JIO and Reliance Retail and also with the Government, Private and Public Sector. With the vision of being the most versatile creative house for brands and individualsJCL has also equipped itself with inhouse production and post-production capabilities.',
                imgSrc: './media/news3.png',
                link: 'https://www.socialsamosa.com/2020/05/jio-studios-am-arm-renamed-to-jio-creative-labs/',
            }
        ]

        this.legacies = [
            {
                head: 'School of Learning & Experience',
                text: "An upcoming cooperative education program from Jio Creative Labs which will help us student breath, see and live Marketing, Advertising & communication.", 
                imgSrc: './media/news9.png',
                link: 'https://abhinav127.wixsite.com/mysite',
            }, {
                head: 'Kiska Brand Bajega',
                text: "Kiska Brand Bajega is the biggest marketing show on Indian Television which airs on India's most prestigious business news channel CNBC TV-18. Already in it's season two, the show has seen some of the top names from various industries coming together to discuss marketing, advertising and communication. Conceptualized and Produced by the team at Jio Creative Labs. ", 
                imgSrc: './media/news6.png',
                link: 'https://www.youtube.com/channel/UC7ARwtqlWiH-JkmHLj5atQg',
            }, {
                head: 'India\'s Best Marketing Minds',
                text: "The top marketing podcast in the country, IBMM tries to unravel the mysteries of marketing & brings to the light the stories behind the growth of some of the most successful brands in the country. Listen to it only on JioSaavn. Conceptualized and Produced by the team at Jio Creative Labs.", 
                imgSrc: './media/news7.png',
                link: 'https://bit.ly/3eA5lJA',
            }, {
                head: 'Systematic Training & Enhancement Program',
                text: "An extensive learning & development program from Jio Creative Labs which will help fresh post-graduates of 2020 who are looking to up skill themselves in these tough times.", 
                imgSrc: './media/news8.png',
                link: 'https://abhinav127.wixsite.com/mysite',
            }
        ]
    } 

    render () {
        return <div 
            id = 'buzz'
            className = 'page enter'
        >
            <div id = 'newsPageCont'>  

                <div id = 'legacyCont'>
                    <div id = 'legacyHead'>
                        Legacy
                    </div>

                    <div id = 'legacyGrid'>
                    
                        {this.legacies.map ((legacy, index) => <div
                            className = 'legacyItem'
                            index = {index}
                            key = {index}
                        >
                            <div className = 'legacyImgCont'>
                                <img 
                                    className = 'legacyImg'
                                    src = {legacy.imgSrc}
                                    alt = 'legacy-img'
                                />
                            </div>

                            <div className = 'onHoverLeg'>  
                                View More                          
                            </div>

                            <div className = 'legacyDetCont'>
                                <div className = 'legacyTitle'>
                                    {legacy.head}
                                </div>

                                <div className = 'legacyText'>
                                    {legacy.text}
                                    <a 
                                        href = {legacy.link}
                                        target = '_blank'
                                        className = 'legacyLink'
                                    >
                                        Visit Website
                                    </a>
                                </div>
                            </div>
                            
                        </div>)}                    
                    </div>
                    
                    <a href = '#newsCont' id = 'inTheNewsLink'>
                        <FontAwesomeIcon icon = {faChevronDown} />
                    </a>
                </div> 

                <div id = 'newsCont'>
                    <div id = 'newsHead'>
                        In The Media
                    </div>

                    <div id = 'newsGrid'>
                    
                        {this.news.map ((news, index) => <div
                            className = 'newsItem'
                            index = {index}
                            key = {index}
                        >
                            <div className = 'newsImgCont'>
                                <img 
                                    className = 'newsImg'
                                    src = {news.imgSrc}
                                    alt = 'news-img'
                                />
                            </div>

                            <div className = 'onHoverNews'>  
                                View More                          
                            </div>

                            <div className = 'newsDetCont'>
                                <div className = 'newsTitle'>
                                    {news.head}
                                </div>

                                <div className = 'newsText'>
                                    {news.text}
                                    <a 
                                        href = {news.link}
                                        target = '_blank'
                                        className = 'newsLink'
                                    >
                                        Visit Website
                                    </a>
                                </div>
                            </div>
                            
                        </div>)}                    
                    </div>

                </div> 

            </div>
        </div>
    }
}