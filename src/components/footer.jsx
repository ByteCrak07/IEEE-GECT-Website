import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { faBuilding, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faInstagram,
  faLinkedin,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons"

import { Link } from "gatsby"

const Footer = () => {
  return (
    <>
      <div className="relative mt-5 bottom-0 bg-black opacity-80  w-full p-2 md:p-5 md:pt-3 h-52 md:p-11 md:pt-2  md:h-40  text-white ">
        <div className="md:bg-white md:inset-x-0 md:h-0.5 md:-top-2 d-none md:d-block"></div>
        <div className="grid grid-cols-12 gap-5 md:gap-2 lg:gap-0 p-3 opacity-100">
          <div className="col-start-1 col-end-10 md:col-start-1 md:col-end-5 text-xs md:text-sm  h-full ">
            <span>
              <p className="font-bold mb-2">
                <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon> CONTACT US
                &nbsp;
              </p>
              <p>IEEE Student Branch</p>
              <p>Government Engineering College</p>
              <p>
                Thrissur-680009, Kerala, India
                <span className="absolute bg-white md:h-3 md:w-3 md:mt-3 md:ml-10 md:mr-0 rounded-full transform -translate-y-1/2"></span>{" "}
                <span className="absolute  d-none md:d-block md:w-4/5 bg-white md:h-0.5 -mt-3 md:mt-3  md:ml-10"></span>
              </p>
              <p>
                {" "}
                <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> COLLEGE :
                0487-233 4144{" "}
              </p>{" "}
              <div className="absolute d-block md:d-none inset-x-5 md:w-0 bg-white h-0.5 mt-4 md:h-0 shadow-2xl"></div>
            </span>
          </div>
          <div className="col-start-10 col-end-13  text-5xl  md:border-none md:text-5xl text-center h-full  mt-2 md:col-start-5 md:col-end-6   md:mt-3">
            <Link
              target="_blank"
              to="https://www.google.com/maps/place/Government+Engineering+College/@11.6217633,74.3149485,8z/data=!4m5!3m4!1s0x3ba7eee301ff400f:0x8851e3d8fc9c94f0!8m2!3d10.5545108!4d76.22466"
            >
              {" "}
              <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>{" "}
            </Link>
          </div>
          <div className="col-start-1 col-end-4 text-3xl md:border-none md:text-5xl text-center h-full  mt-2 md:col-start-6 md:col-end-8   md:mt-3">
            <a href="mailto:ieeesb@gectcr.ac.in" target="_blank">
              {" "}
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
            </a>
            <div className="absolute d-none md:d-block md:h-10 md:w-1 bg-white "></div>
          </div>
          <div className="col-start-4 col-end-7  text-3xl  md:border-none md:text-5xl text-center h-full  mt-2 md:col-start-8 md:col-end-10  md:mt-3">
            <Link to="https://www.instagram.com/ieeesbgect/" target="_blank">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>{" "}
            </Link>
            <div className="absolute d-none md:d-block md:h-10 md:w-1 bg-white "></div>
          </div>{" "}
          <div className="col-start-7 col-end-10 text-3xl md:border-none md:text-5xl text-center h-full  mt-2 md:col-start-10 md:col-end-12  md:mt-3">
            <Link to="https://www.facebook.com/ieeesbgectcr/" target="_blank">
              <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>{" "}
            </Link>
            <div className="absolute d-none md:d-block md:h-10 md:w-1 bg-white "></div>
          </div>{" "}
          <div className="col-start-10 col-end-13 text-3xl md:border-none md:text-5xl text-center md:text-right lg:text-center h-full  mt-2 md:col-start-12 md:col-end-13  md:mt-3">
            <Link
              to="https://www.linkedin.com/in/ieee-sb-gec-thrissur-9b93041a8/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>{" "}
            </Link>
            <div className="absolute d-none md:d-block md:h-10 md:w-1 bg-white "></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer
