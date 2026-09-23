import React from "react";
import {
    FaCodepen,
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
    FaPatreon,
    FaYoutube,
} from "react-icons/fa";
import { FiCoffee, FiGlobe, FiHeart, FiMail } from "react-icons/fi";
import { Styled } from "./styled";

const links = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FiGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aashishranjan",
        icon: FaLinkedinIn,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/theash.ashish/",
        icon: FaFacebookF,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
        icon: FaYoutube,
    },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
    {
        label: "Support",
        href: "https://a2rp-donation-page.netlify.app/",
        icon: FiHeart,
    },
    {
        label: "Buy Me a Coffee",
        href: "https://buymeacoffee.com/a2rp",
        icon: FiCoffee,
    },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FaPatreon },
];

const Footer = () => (
    <Styled.Wrapper>
        <div className="copyright">
            Copyright © {new Date().getFullYear()} {" "}
            <a
                href="https://www.ashishranjan.net/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Ashish Ranjan
            </a>
        </div>

        <nav className="links" aria-label="Footer links">
            {links.map(({ label, href, icon: Icon }) => (
                <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    aria-label={label}
                    title={label}
                >
                    <Icon aria-hidden="true" />
                </a>
            ))}
        </nav>
    </Styled.Wrapper>
);

export default Footer;
