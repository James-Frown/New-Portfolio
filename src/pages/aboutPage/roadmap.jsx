import './roadmap.css';

const RoadMap = () => {
    return (
        <>
            <div className='roadmap__wrapper'>
                <div className='roadmap__content'>
                    <div className='content__title__wrapper'>
                        <h1 className='content__title'>
                            Some of my intrests are:
                        </h1>
                    </div>
                    <div className='content__icons__wrapper'>
                        <div className='icon__wrapper'>
                            <h3 className='icon__text'>
                                Responsive Design
                            </h3>
                        </div>
                        <div className='icon__wrapper'>
                            <h3 className='icon__text'>
                                Web-App Designer
                            </h3>
                        </div>
                        <div className='icon__wrapper'>
                            <h3 className='icon__text'>
                                Blockchain Technology
                            </h3>
                        </div>
                        <div className='icon__wrapper'>
                            <h3 className='icon__text'>
                                Web-App Developer
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoadMap;