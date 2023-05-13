import IntrestsCard from './intrestsCard';
import './about.css';

const Intrests = () => {
    return (
        <>
            <div className='Intrests__wrapper'>
                <div className='Intrests__content'>
                    <div className='content__text'>
                        <p>
                            Some of my intrests are:
                        </p>
                    </div>
                    <div className='content__icons__wrapepr'>
                        <IntrestsCard Title="Responsive Design" />
                        <IntrestsCard Title="Web-App Designer" />
                        <IntrestsCard Title="Blockchain Technology" />
                        <IntrestsCard Title="Web-App Developer" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intrests;