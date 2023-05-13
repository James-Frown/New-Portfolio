import './about.css';

const IntrestsCard = (Props) => {

    const title = Props.Title;

    return (
        <>
            <div className='content__icons__wrapepr'>
                <img src='' className='icons__selector' />
                <h2 className='content__icons__text'>
                    {title}
                </h2>
            </div>
        </>
    );
};

export default IntrestsCard;