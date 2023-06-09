import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaMailBulk
} from "react-icons/fa";
import { socialprofiles } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofiles.twitter && (
          <li>
            <a href={socialprofiles.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofiles.instagram && (
          <li>
            <a href={socialprofiles.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofiles.github && (
          <li>
            <a href={socialprofiles.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofiles.facebook && (
          <li>
            <a href={socialprofiles.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofiles.linkedin && (
          <li>
            <a href={socialprofiles.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofiles.youtube && (
          <li>
            <a href={socialprofiles.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofiles.twitch && (
          <li>
            <a href={socialprofiles.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
        <li>
          <Link to="/contact">
            <FaMailBulk />
          </Link>
        </li>
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
