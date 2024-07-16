import React, { useState } from "react";

const Home = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };
  return (
    <div>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>
      <nav className="site-nav dark mb-5 site-navbar-target">
        <div className="container">
          <div className="site-navigation">
            <a href="index.html" className="logo m-0">
              Rohi<span className="text-primary">.</span>
            </a>
            <ul className="js-clone-nav d-none d-lg-inline-none site-menu float-right site-nav-wrap">
              <li>
                <a href="#home-section" className="nav-link active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about-section" className="nav-link">
                  About
                </a>
              </li>{" "}
              <li>
                <a href="#skill-section" className="nav-link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#mywork-section" className="nav-link">
                  My works
                </a>
              </li>
              <li>
                <a href="#certificate-section" className="nav-link">
                  Certificate
                </a>
              </li>
              <li>
                <a href="#contact-section" className="nav-link">
                  Contact us
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-inline-block"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span />
            </a>
          </div>
        </div>
      </nav>
      <div className="untree_co-section pb-0" id="home-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-7">
              <h1 className="heading gsap-reveal-hero mb-3">
                <strong>
                  ROHAN&nbsp;
                  <span
                    className="text-primary-1"
                    style={{ color: "red" }}
                  ></span>
                  ITALIYA
                </strong>
              </h1>
              <h2 className="subheading gsap-reveal-hero mb-4">
                Hi there! I build stuff from scratch. Whether it's creating apps
                or websites.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio-single-holder" />

      <div className="untree_co-section pb-0" id="about-section">
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div className="col-lg-7 mx-auto text-center author-wrap">
              <img
                src="images/myimage.svg"
                alt="Image"
                className="img-fluid rounded-circle mb-3"
              />
              <h3 className="text-black h5 font-weight-bold mb-2 gsap-reveal-hero">
                App and Web Developer
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <section id="cd-timeline" className="cd-container ">
                <div className="cd-timeline-block ">
                  <div className="cd-timeline-img cd-picture"></div>
                  <div className="cd-timeline-content ">
                    <h2 className="gsap-reveal-hero">Rutilant Technology</h2>
                    <div
                      className="timeline-content-info "
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <span className="timeline-content-info-title gsap-reveal-hero">
                        <i className="fa fa-certificate" aria-hidden="true" />
                        React Native
                      </span>
                      <span className="timeline-content-info-date gsap-reveal-hero">
                        <i className="fa fa-calendar" aria-hidden="true" />
                        Feb 2024 - Jun 2024
                      </span>
                    </div>
                    <p className="gsap-reveal-hero">
                      I built a government weather app using React Native,
                      delivering timely weather forecasts to users. I analyzed a
                      dataset containing customer demographics, purchase
                      history, and website interaction data for an e-commerce
                      company. The objective was to segment customers into
                      distinct groups based on their behavior and
                      characteristics.
                    </p>
                    <ul className="content-skills">
                      <li className="gsap-reveal-hero">React Native</li>
                      <li className="gsap-reveal-hero">React Js</li>
                      <li className="gsap-reveal-hero">Wordpress</li>
                      <li className="gsap-reveal-hero">PHP</li>
                    </ul>
                  </div>
                </div>

                <div className="cd-timeline-block">
                  <div className="cd-timeline-img cd-movie"></div>
                  <div className="cd-timeline-content">
                    <h2 className="gsap-reveal-hero">Codilite</h2>
                    <div
                      className="timeline-content-info"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <span className="timeline-content-info-title gsap-reveal-hero">
                        <i className="fa fa-certificate" aria-hidden="true" />
                        Android Developer
                      </span>
                      <span className="timeline-content-info-date gsap-reveal-hero">
                        <i className="fa fa-calendar" aria-hidden="true" />
                        May 2023 - Jan 2024
                      </span>
                    </div>
                    <p className="gsap-reveal-hero">
                      Proficient in decompiling and reverse engineering Android
                      applications in Java and Kotlin. Integrated customizable
                      battery charging animations which provide an engaging user
                      experience during charging. Decode and redesign game
                      application, to enhance language, spelling, numbers, and
                      handwriting skills for aged between 2 and 7.
                    </p>
                    <ul className="content-skills">
                      <li className="gsap-reveal-hero">Java</li>
                      <li className="gsap-reveal-hero">Kotlin</li>
                      <li className="gsap-reveal-hero">RESTful APIs</li>
                      <li className="gsap-reveal-hero">Material Design</li>
                      <li className="gsap-reveal-hero">Firebase</li>
                    </ul>
                  </div>
                </div>

                <div className="cd-timeline-block">
                  <div className="cd-timeline-img cd-picture"></div>
                  <div className="cd-timeline-content">
                    <h2 className="gsap-reveal-hero">Meritorious Infotech</h2>
                    <div
                      className="timeline-content-info "
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <span className="timeline-content-info-title gsap-reveal-hero">
                        <i className="fa fa-certificate" aria-hidden="true" />
                        Internship Trainee
                      </span>
                      <span className="timeline-content-info-date gsap-reveal-hero">
                        <i className="fa fa-calendar" aria-hidden="true" />
                        Nov 2022 - Jan 2023
                      </span>
                    </div>
                    <p className="gsap-reveal-hero">
                      Developed a pregnancy tracker and water drink reminder
                      application from scratch using SQL database technology.
                      Designed the database structure to store user's pregnancy
                      information such as due date, week of pregnancy, water
                      intake history, and reminders. Utilized SQL to manage the
                      data, including inserting, updating, and retrieving
                      information as needed to provide a seamless and
                      personalized user experience.
                    </p>
                    <ul className="content-skills">
                      <li className="gsap-reveal-hero">C</li>
                      <li className="gsap-reveal-hero">C++</li>
                      <li className="gsap-reveal-hero">SQL</li>
                      <li className="gsap-reveal-hero">HTML</li>
                      <li className="gsap-reveal-hero">CSS</li>
                      <li className="gsap-reveal-hero">JavaScript</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="untree_co-section-1 pb-0" id="skill-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-7 text-center mx-auto">
              <h2 className="section-heading gsap-reveal-hero mb-0">
                <strong>My Skillset</strong>
              </h2>
              <div className="wave ">
                <svg>
                  <path d="M10,10 L50,100 L90,50" stroke="#abc4ff" />
                </svg>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3 text-center"
              data-aos="fade-up"
              data-aos-delay={0}
            >
              <div className="progressbar" data-animate="false">
                <div className="circle" data-percent={98}>
                  <div className="number" />
                  <p className="caption">Android</p>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3 text-center"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="progressbar" data-animate="false">
                <div className="circle" data-percent={95}>
                  <div className="number" />
                  <p className="caption">Java</p>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3 text-center"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="progressbar" data-animate="false">
                <div className="circle" data-percent={88}>
                  <div className="number" />
                  <p className="caption">Python</p>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3 text-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="progressbar" data-animate="false">
                <div className="circle" data-percent={85}>
                  <div className="number" />
                  <p className="caption">JavaScript</p>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3 text-center"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="progressbar" data-animate="false">
                <div className="circle" data-percent={88}>
                  <div className="number" />
                  <p className="caption">Power BI</p>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3 text-center"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="progressbar" data-animate="false">
                <div className="circle" data-percent={85}>
                  <div className="number" />
                  <p className="caption">React Js</p>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3 text-center"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="progressbar" data-animate="false">
                <div className="circle" data-percent={70}>
                  <div className="number" />
                  <p className="caption">Wordpress</p>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3 text-center"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="progressbar" data-animate="false">
                <div className="circle" data-percent={70}>
                  <div className="number" />
                  <p className="caption">php</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="untree_co-section-1 pb-0" id="mywork-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-7 text-center mx-auto">
              <h2 className="section-heading  mb-0">
                <strong>My Works</strong>
              </h2>
              <div className="wave ">
                <svg>
                  <path d="M10,10 L50,100 L90,50" stroke="#abc4ff" />
                </svg>
              </div>
            </div>
          </div>
          <div class="row">
            <div className=" col-md-6 col-lg-4 mb-4">
              <div class="card">
                <h4>Customer Segmentation for an E-commerce Company</h4>
                <p>
                  Utilizing machine learning techniques to segment customers can
                  provide valuable insights for targeted marketing strategies
                  and personalized customer experiences. In this project, I
                  analyzed a dataset containing customer demographics, purchase
                  history, and website interaction data for an e-commerce
                  company. The objective was to segment customers into distinct
                  groups based on their behavior and characteristics.
                </p>
              </div>
            </div>
            <div className=" col-md-6 col-lg-4 mb-4">
              <div class="card">
                <h4>Weather Data</h4>
                <p>
                  I worked on an application offering a comprehensive week-long
                  forecast, alongside personalized climate input features and
                  region-specific details. Integrated functionality allows users
                  to upload videos and images for weather understanding.
                  Additionally, provided detailed weather information for
                  specific states and cities, ensuring accurate and localized
                  forecasts.
                </p>
              </div>
            </div>
            <div className=" col-md-6 col-lg-4 mb-4">
              <div class="card">
                <h4>Vehicle Tracking</h4>
                <p>
                  Developed a vehicle tracking application using React Native,
                  enabling detailed monitoring of mileage, idle times, and exact
                  locations. This solution offers insights into the distance
                  traveled, durations of stops, and precise coordinates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="untree_co-section-2 pb-0" id="certificate-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-7 text-center mx-auto">
              <h2 className="section-heading  mb-0">
                <strong>Certificate</strong>
              </h2>
              <div className="wave ">
                <svg>
                  <path d="M10,10 L50,100 L90,50" stroke="#abc4ff" />
                </svg>
              </div>
            </div>
          </div>
          <div className="row">
            {[1, 2, 6, 3, 4, 8, 5, 7, 10].map((item, index) => (
              <div
                key={index}
                className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
              >
                <div className="overlay-effect effects clearfix">
                  <div className="img">
                    <img
                      className="grayscale img-fluid"
                      src={`images/certificate_${item}.jpg`}
                      alt="Portfolio Item"
                      onClick={() =>
                        openModal(`images/certificate_${item}.jpg`)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="site-footer" id="contact-section">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-3">
              <div className="widget">
                <h3>Home</h3>
                <ul className="list-unstyled float-left links">
                  <li>
                    <a href="#">Untree.co</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="widget">
                <h3>Projects</h3>
                <ul className="list-unstyled float-left links">
                  <li>
                    <a href="#">HTML5</a>
                  </li>
                  <li>
                    <a href="#">CSS3</a>
                  </li>
                  <li>
                    <a href="#">Untree.co</a>
                  </li>
                  <li>
                    <a href="#">Free Templates</a>
                  </li>
                  <li>
                    <a href="#">WordPress Themes</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="widget">
                <h3>Services</h3>
                <ul className="list-unstyled float-left links">
                  <li>
                    <a href="#">Untree.co</a>
                  </li>
                  <li>
                    <a href="#">jQuery</a>
                  </li>
                  <li>
                    <a href="#">Bootstrap</a>
                  </li>
                  <li>
                    <a href="#">Freebies</a>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-lg-6">
              <div className="widget">
                <h3>Contact</h3>
                <address>
                  74/D, 74B, Rushikesh Society, Magar Nagar, Vishal Nagar,
                  Surat, Gujarat 395004
                </address>
                <ul className="list-unstyled links mb-4">
                  {/* <li>
                    <a href="tel://11234567890">+1(123)-456-7890</a>
                  </li> */}
                  <li>
                    <a href="tel://91577337766">+91 9157733766</a>
                  </li>
                  <li>
                    <a href="mailto:ritaliya7@gmail.com">ritaliya7@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="widget">
                <h3>Connect</h3>
                <ul
                  className="list-unstyled social "
                  style={{
                    display: "flex",
                  }}
                >
                  <li>
                    <a href="#">
                      <span className="icon-instagram" />
                    </a>
                  </li>
                  <li style={{ marginLeft: "35px" }}>
                    <a href="#">
                      <span className="icon-twitter" />
                    </a>
                  </li>
                </ul>
                <ul
                  className="list-unstyled social "
                  style={{
                    display: "flex",
                  }}
                >
                  <li>
                    <a href="#">
                      <span className="icon-linkedin" />
                    </a>
                  </li>
                  <li style={{ marginLeft: "35px" }}>
                    <a href="#">
                      <span className="icon-pinterest" />
                    </a>
                  </li>
                </ul>

                <ul
                  className="list-unstyled social "
                  style={{
                    display: "flex",
                  }}
                >
                  <li>
                    <a href="#">
                      <span className="icon-dribbble" />
                    </a>
                  </li>
                  <li style={{ marginLeft: "35px" }}>
                    <a href="#">
                      <span className="icon-facebook" />
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div id="overlayer" />
      <div className="loader">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Modal Image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
