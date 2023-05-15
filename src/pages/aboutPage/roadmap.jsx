import './roadmap.css';

const RoadMap = () => {
    return (
        <>
            <div className='roadmap__wrapper'>
                <div className='roadmap__content'>
                    <div className='content__title__wrapper'>
                        <h1 className='content__title'>
                            My Road-Map
                        </h1>
                    </div>
                    <div className='content__wrapper'>
                        <div className='text__wrapper'>
                            <h3 className='heading__text'>
                                InterAction Design
                            </h3>
                            <p className='body__text'>
                                Interaction design is the process of creating digital products or services that are intuitive and easy to use. It involves designing the interface, user flow, and overall user experience to ensure that people can interact with technology in a natural and efficient way. Interaction designers consider factors such as usability, accessibility, and human-computer interaction to create engaging interfaces that meet the needs of users. Good interaction design is critical for creating products that are not only functional but also enjoyable to use.
                            </p>
                        </div>
                        <div className='text__wrapper'>
                            <h3 className='heading__text'>
                                HTML & CSS
                            </h3>
                            <p className='body__text'>
                                HTML and CSS are two fundamental technologies used for building websites. HTML, which stands for HyperText Markup Language, is the markup language used to create the structure and content of web pages. CSS, or Cascading Style Sheets, is a stylesheet language used to define the presentation and layout of web pages. By using HTML and CSS together, web developers can create visually appealing websites that are also well-structured and easy to navigate. HTML is used to define the content of a web page, such as text, images, and multimedia elements, while CSS is used to control how that content is displayed, including elements such as font, color, layout, and animation.
                            </p>
                        </div>
                        <div className='text__wrapper'>
                            <h3 className='heading__text'>
                                Java & JavaScript
                            </h3>
                            <p className='body__text'>
                                Java is a general-purpose programming language used for developing desktop, server-side, and Android applications. JavaScript is a client-side scripting language used for creating interactive and dynamic web pages. While Java is known for its robustness and reliability, JavaScript is used in conjunction with HTML and CSS to create responsive web applications. Although they share a similar name, Java and JavaScript are two distinct programming languages with different purposes and syntax. Java is compiled while JavaScript is interpreted by the browser.
                            </p>
                        </div>
                        <div className='text__wrapper'>
                            <h3 className='heading__text'>
                                React & Routes
                            </h3>
                            <p className='body__text'>
                                React is a JavaScript library used to build reusable user interface components and efficiently manage the state of an application. Routes are used to map specific URLs to components, enabling users to navigate a single-page application without needing to load a new page. React and Routes together provide a flexible and powerful framework for building dynamic and responsive web applications.
                            </p>
                        </div>
                        <div className='text__wrapper'>
                            <h3 className='heading__text'>
                                Firebase & API's
                            </h3>
                            <p className='body__text'>
                                Firebase is a Google platform that provides pre-built services for web and mobile application development. APIs allow developers to programmatically access and interact with Firebase services, making it easy to integrate Firebase functionality into applications. Together, Firebase and APIs provide a powerful toolset for building highly customized and scalable applications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoadMap;