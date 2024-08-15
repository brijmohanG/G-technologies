import {Component} from "react"
import "./index.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

class Home extends Component{

    componentDidMount() {
        AOS.init({
          duration: 1500, // Global duration for all animations
          once: true,     // Animation happens only once - while scrolling down
        });
      }

    render() {
        return(
            <div className="home-bgg-container">
                <div className="top-content-container">
                    <h1>Offshore Custom <span className="banner-heading-span">Software Development</span> Company</h1>
                    <p className="top-paragraph" data-aos="fade-in" data-aos-duration="1500">G Technologies is an offshore custom software development company based out of India. Our expertise lies in creating high-quality, innovative custom software solutions for businesses of all sizes.</p>
                </div>
                <div className="banner-container-first">
                    <div>
                        <img src ="https://res.cloudinary.com/dmr1euvhf/image/upload/v1723614844/G-technology-image_ohvpa2.png"  data-aos="zoom-in" data-aos-duration="2000" className="banner-image" alt = "banner-image"/>
                    </div>
                    <div>
                        <h1 className="brand" data-aos="zoom-in" data-aos-duration="2000">About <span className="brand-g"> G</span> <span className="brand-technologies">Technologies</span></h1>
                        <p className="banner-paragraph" data-aos="zoom-in" data-aos-duration="2000">G Technologies is a IT Consulting Company that excels in providing innovative software product development services. As a software development company, We offer solutions for helping small scale, medium-sized and large scale enterprises to navigate the digital revolution.<br/>

                        Our software development service is designed to address the unique challenges and goals of each client, ensuring that our solutions meet their specific requirements. At present we are a Robust Team having more than 1 years of diverse experience in technology and engaging with customers at a deeper level to provide cutting edge solutions.</p>
                    </div>
                </div>
                <div className="banner-container-second">
                    <div className="order-second">
                        <h1 className="brand" data-aos="zoom-in" data-aos-duration="2000">Professional Team innovative solutions</h1>
                        <p className="banner-paragraph" data-aos="zoom-in" data-aos-duration="2000">We believe in coming up with innovative ideas to DELIVER excellence in Software Product Development with a constant accent on quality and customer satisfaction to brighten your business among your competitors. We are a team of highly experienced Senior Developers, Designers and Digital Marketers who offer comprehensive software development services around the world. We shape your ideas and serve them in the form of a product to get your best returns. Also our dedicated market making team will help you in your product marketing and lead generation..</p>
                    </div>
                    <div className="order-first">
                        <img src="https://res.cloudinary.com/dmr1euvhf/image/upload/v1723623571/g-technology-two_csyv90.png" data-aos="zoom-in" data-aos-duration="2000" className="banner-image" alt="p"/>
                    </div>
                </div>
                <div className="card-main-bg-container">
                    <h1 className="card-main-heading">Let us familiarize you with some of our Qualities</h1>
                    <div className="card-bg-container" data-aos="zoom-in" data-aos-duration="2000">
                        <div className="card-container" data-aos="zoom-in" data-aos-duration="2000" >
                            <img src="https://res.cloudinary.com/dmr1euvhf/image/upload/v1723631688/customer-focus_swxtld.svg" alt = "customer-focus"/>
                            <div>
                                <h1 className="card-heading">Customer Focus/Centric</h1>
                                <p className="card-paragraph">we Keep our customer satisfaction as our top priority, we are prepared to go that extra mile to provide satisfaction. We do not compromise on quality and offer the best solutions for all of our clients.</p>
                            </div>
                        </div>
                        <div className="card-container" data-aos="zoom-in" data-aos-duration="2000">
                            <img src="https://res.cloudinary.com/dmr1euvhf/image/upload/v1723631673/timely-delivery_q9loc7.svg" alt = "customer-focus"/>
                            <div>
                                <h1 className="card-heading">Timely Delivery</h1>
                                <p className="card-paragraph">Not all mobile app development companies are committed to work with transparency. While we keep in close contact with our customers and provide regular reports. Our constant communication with them.</p>
                            </div>
                        </div>
                        <div className="card-container" data-aos="zoom-in" data-aos-duration="2000">
                            <img src="https://res.cloudinary.com/dmr1euvhf/image/upload/v1723631660/flexibility-yransparency_p7m9s9.svg" alt = "customer-focus"/>
                            <div>
                                <h1 className="card-heading">Flexibility & Transparency</h1>
                                <p className="card-paragraph">You deserve 24x7 services from your mobile app development company. Are you unsure about something? Don't worry. We are here to help you. We offer complete support to solve any issues that require solutions.</p>
                            </div>
                        </div>
                        <div className="card-container" data-aos="zoom-in" data-aos-duration="2000">
                            <img src="https://res.cloudinary.com/dmr1euvhf/image/upload/v1723631646/commitment_qao7xn.svg" alt = "customer-focus"/>
                            <div>
                                <h1 className="card-heading">Commitment</h1>
                                <p className="card-paragraph">When you begin your project we assign the project manager responsible for your mobile developers and every aspect of your custom software development project including development of mobile applications.</p>
                            </div>
                        </div>
                        <div className="card-container" data-aos="zoom-in" data-aos-duration="2000">
                            <img src="https://res.cloudinary.com/dmr1euvhf/image/upload/v1723631628/strict-dev_q90ezc.svg" alt = "customer-focus"/>
                            <div>
                                <h1 className="card-heading">Strict Development</h1>
                                <p className="card-paragraph">All successful mobile application development company's use an agile method of working that allows us to manage the scope, priorities, and lifecycle. We as your mobile app development company.</p>
                            </div>
                        </div>
                        <div className="card-container" data-aos="zoom-in" data-aos-duration="2000">
                            <img src="https://res.cloudinary.com/dmr1euvhf/image/upload/v1723631617/expert-team-1_ulpdot.svg" alt = "customer-focus"/>
                            <div>
                                <h1 className="card-heading">Expert Team</h1>
                                <p className="card-paragraph">As a top mobile company, we have inhouse team of 200+ mobile app developers. We take responsibility for each mobile application developer. If one of our clients has difficulties with a team member, we quickly react.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
