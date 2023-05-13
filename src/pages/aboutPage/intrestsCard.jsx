import './about.css';

const IntrestsCard = (Title, Icon) => {

    const icon = Icon;

    const title = Title;

    return (
        <>
            <div className='content__icons__wrapepr'>
                {/* <img src={icon} className='icons__selector' /> */}
                <link rel="icon" type="image/svg+xml" href={icon} className='icons__selector' />
                <h2 className='content__icons__text'>
                    {title}
                </h2>
            </div>
        </>
    );
};

export default IntrestsCard;