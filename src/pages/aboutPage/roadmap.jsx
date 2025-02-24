// Importing styling
import "./roadmap.css";

const RoadMap = () => {
  return (
    <>
      <div className="roadmap__wrapper">
        <div className="roadmap__content">
          <div className="content__title__wrapper">
            <h1 className="content__title">My Roadmap (2020 - 2026)</h1>
          </div>
          <div className="content__wrapper">
            <div className="text__wrapper">
              <div className="text_heading_wrapper">
                <h3 className="heading__text">The Beginning</h3>
                <h3 className="heading__text">2020</h3>
              </div>
              <ul className="body__text">
                <li>Matriculated from St. Andrew’s College, Grahamstown.</li>
                <li>Knew I wanted a mix of creativity and technical skills.</li>
                <li>Chose to study Interaction Design at CTCA in Cape Town.</li>
              </ul>
            </div>
            <div className="text__wrapper">
              <div className="text_heading_wrapper">
                <h3 className="heading__text">Building the Foundation</h3>
                <h3 className="heading__text">2021 - 2023</h3>
              </div>
              <ul className="body__text">
                <li>Developed a strong foundation in HTML & CSS.</li>
                <li>Learned JavaScript for dynamic web interactions.</li>
                <li>
                  Worked on projects combining UX, UI, and interaction design.
                </li>
                <li>
                  Got comfortable with React, building reusable components and
                  using React Router.
                </li>
              </ul>
            </div>
            <div className="text__wrapper">
              <div className="text_heading_wrapper">
                <h3 className="heading__text">Exploring the World</h3>
                <h3 className="heading__text">2023 - 2024</h3>
              </div>
              <ul className="body__text">
                <li>Traveled and experienced different cultures.</li>
                <li>
                  Gained insights into interaction design in public spaces and
                  digital interfaces.
                </li>
                <li>
                  Strengthened my passion for creating intuitive digital
                  experiences.
                </li>
                <li>
                  Learned more about the retail world and sales, grew my
                  background to include personal selling and sales!
                </li>
              </ul>
            </div>
            <div className="text__wrapper">
              <div className="text_heading_wrapper">
                <h3 className="heading__text">Leveling Up</h3>
                <h3 className="heading__text">2024</h3>
              </div>
              <ul className="body__text">
                <li>
                  Focused on improving technical skills in Next.js and
                  TypeScript.
                </li>
                <li>
                  Learned best practices for performance, scalability, and
                  maintainability.
                </li>
                <li>Explored APIs and Firebase for backend integration.</li>
                <li>
                  Actively expanding skills through FreeCodeCamp and full-stack
                  development certification.
                </li>
              </ul>
            </div>
            <div className="text__wrapper">
              <div className="text_heading_wrapper">
                <h3 className="heading__text">
                  Exploring Backend & Interaction Design
                </h3>
                <h3 className="heading__text">2025</h3>
              </div>
              <ul className="body__text">
                <li>
                  Aiming to master Node.js, backend development, and databases.
                </li>
                <li>Exploring Python & Django for more robust applications.</li>
                <li>
                  Diving deeper into product design and advanced UX principles.
                </li>
                <li>
                  Focusing on creating seamless and engaging digital
                  experiences.
                </li>
              </ul>
            </div>
            <div className="text__wrapper">
              <div className="text_heading_wrapper">
                <h3 className="heading__text">Full-Stack & Design Synergy</h3>
                <h3 className="heading__text">2026</h3>
              </div>
              <ul className="body__text">
                <li>
                  Fully immersed in full-stack development with React, Next.js,
                  TypeScript, and backend technologies.
                </li>
                <li>
                  Refining interaction design skills with microinteractions and
                  immersive experiences.
                </li>
                <li>
                  Open to freelancing, innovative projects, and open-source
                  contributions.
                </li>
                <li>
                  Committed to continuous learning and pushing creative &
                  technical boundaries.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
