
import './about.css';

const Intrests = () => {
    return (
        <>
            <div className='Intrests__wrapper'>
                <div className='Intrests__content'>
                    <div className='content__text'>
                        <h1 className='content__icons__text'>
                            Some of my intrests are:
                        </h1>
                    </div>
                    <div className='content__icons__wrapepr'>
                        <div className='icons__wrapepr'>
                            <img src='' className='icons__selector' />
                            <h2 className='content__icons__text'>
                                Responsive Design
                            </h2>
                        </div>
                        <div className='icons__wrapepr'>
                            <img src='' className='icons__selector' />
                            <h2 className='content__icons__text'>
                                Web-App Designer
                            </h2>
                        </div>
                        <div className='icons__wrapepr'>
                            <img src='' className='icons__selector' />
                            <h2 className='content__icons__text'>
                                Blockchain Technology
                            </h2>
                        </div>
                        <div className='icons__wrapepr'>
                            <img src='' className='icons__selector' />
                            <h2 className='content__icons__text'>
                                Web-App Developer
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intrests;