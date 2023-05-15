// importing profile image
import ProfileImage from "../../assets/images/ProfileImage.jpg";

// importing styling
import './summery.css';

const Summery = () => {
    return (
        <>
            <div className='summery__wrapper'>
                <div className='summery__image__wrapper'>
                    <img src={ProfileImage} className='image__selector'/>
                </div>
                <div className='summery__content__wrapper'>
                    <div className='content__text'>
                        <p className='text__selector'>
                            As a tech enthusiast with an entrepreneurial spirit, I am driven to innovate and create positive change. With my passion for learning and willingness to take calculated risks, I am constantly seeking opportunities to challenge myself and push beyond my limits. My hunger for knowledge fuels my creativity, resilience, and unwavering commitment to success.
                        </p>
                        <p className='text__selector'>
                            I am a self-starter and team player with excellent communication skills, and a strong drive to code. My diverse interests and experiences contribute to my ability to think outside the box and bring unique perspectives to my work. Furthermore, I am dedicated to leaving a lasting impact on the world through my work in the tech industry.
                        </p>
                        <p className='text__selector'>
                            I am currently seeking internship opportunities to further develop my skills and contribute to a tech organization. If given the opportunity, I am confident that I can bring my passion for innovation and ability to work well in a team to make meaningful contributions to the organization.
                        </p>
                    </div>
                    <div className='cta__wrapper'>
                        <a href="https://drive.google.com/file/d/1x-6Qrc-P0WaMp9GuWRJiViEYyHD2WAcn/view?usp=share_link" className="cta__button">
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Summery;