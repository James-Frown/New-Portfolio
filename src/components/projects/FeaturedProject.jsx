import "./projects.css";

const FeaturedProject = (props) => {
  // eslint-disable-next-line react/prop-types
  var title = props.title;
  // eslint-disable-next-line react/prop-types
  var subtitle = props.subtitle;
  // eslint-disable-next-line react/prop-types
  var link = props.link;
  // eslint-disable-next-line react/prop-types
  var description = props.description;
  // eslint-disable-next-line react/prop-types
  var thumbnail = props.thumbnail;

  return (
    <>
      <div className="featured_card_container">
        <div className="featured_card_thumbnail">
          <img
            className="featured_image_selector"
            src={thumbnail}
            alt="Project Thumbnail"
          />
        </div>
        <div className="project_card_content">
          <h2 className="featured_card_title">{title}</h2>
          <h3 className="featured_card_subtitle">{subtitle}</h3>
          <p className="featured_card_description">{description}</p>
          <a
            className="featured_card_Link"
            href={link}
            target="blank_"
            rel="none"
          >Lets See !</a>
        </div>
      </div>
    </>
  );
};

export default FeaturedProject;
