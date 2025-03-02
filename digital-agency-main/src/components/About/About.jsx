import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const aboutData = [

];

const About = () => {
    return (
        <>
            <span id="about"></span>
            <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
                <div className="container">
                    {/* Header */}
                    <div className="pb-12 text-center space-y-3">
                        <h1
                            data-aos="fade-up"
                            className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
                        >
                            About Us
                        </h1>
                        <p
                            data-aos="fade-up"
                            className="text-gray-600 dark:text-gray-400 text-md"
                        >
                            Your Digital Growth Partners.
                        </p>
                    </div>

                    {/* About cards */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div> */}
                    <div className="">
                        <div>
                            <p className="text-gray-600 dark:text-gray-400">
                                We believe every business deserves to shine online. At <b>Grow Sphere</b>, we’re passionate about helping businesses like yours unlock their full digital potential. Founded on the principles of innovation, creativity, and results-driven strategies, we’ve assembled a team of digital experts committed to your success.
                            </p>
                            <br />
                            <p className="text-gray-600 dark:text-gray-400">
                                We understand the challenges of building and maintaining a strong online presence. That's why we offer a comprehensive suite of services, including:
                            </p>
                            <br />
                            <ul className="list-disc text-gray-600 dark:text-gray-400 mx-24">
                                <li><b>Social Media Marketing:</b> We craft engaging content and targeted campaigns that build brand awareness and foster meaningful connections with your audience.</li>
                                <br />
                                <li><b>Digital Marketing: </b> From SEO and PPC to content marketing and email campaigns, we drive qualified traffic to your website and boost conversions.</li>
                                <br />
                                <li><b>Website Development: </b> We design and develop user-friendly, visually appealing websites that are optimized for performance and conversions, whether for marketing purposes or e-commerce.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="mt-20"/>
                </div>
            </div>
        </>
    );
};

export default About;
