import "./projects.css";

const ProjectCard = (props) => {

    // eslint-disable-next-line react/prop-types
    var title = props.title;
    // eslint-disable-next-line react/prop-types
    var link = props.link;
    // eslint-disable-next-line react/prop-types
    var description = props.description;
    // eslint-disable-next-line react/prop-types
    var thumbnail = props.thumbnail;

    return (
        <>
            <div className="project_card_container">
                <a
                    className="project_card_wrapper"
                    href={link}
                    target="blank_"
                    rel="none">
                    <div
                        className="project_card_thumbnail">
                        <img
                            className="image_selector"
                            src={thumbnail}
                            alt="Project Thumbnail" />
                    </div>
                    <div
                        className="project_card_content">
                        <h2
                            className="project_card_title">
                            {title}
                        </h2>
                        <p
                            className="project_card_description">
                            {description}
                        </p>
                    </div>
                </a>
            </div>
        </>
    )
}

export default ProjectCard;