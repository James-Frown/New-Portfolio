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
                        <IntrestsCard Title="BlockChain" Icon="'./vite.svg'" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intrests;