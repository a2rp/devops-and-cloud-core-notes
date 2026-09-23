import React, { useEffect, useMemo, useState } from "react";
import { FiCloud, FiLayers, FiMoon, FiSun } from "react-icons/fi";
import { Styled } from "./styled";

const THEME_LS_KEY = "devops-and-cloud-core-notes-theme";
const logo = `${import.meta.env.BASE_URL}logo.png`;

const Header = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem(THEME_LS_KEY) || "dark";
        setTheme(storedTheme);
    }, []);

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }

        localStorage.setItem(THEME_LS_KEY, theme);
    }, [theme]);

    const nextTheme = useMemo(
        () => (theme === "light" ? "dark" : "light"),
        [theme],
    );

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div className="leftSide">
                    <div className="logoNameWrapper">
                        <div className="logoWrapper">
                            <img
                                src={logo}
                                alt="DevOps and Cloud Core Notes logo"
                            />
                        </div>

                        <div className="nameWrapper">
                            <div className="title">
                                devops-and-cloud-core-notes
                            </div>
                            <div className="subTitle">
                                Git, containers, CI/CD, cloud infrastructure
                            </div>
                        </div>

                        <div className="pillRow">
                            <div className="stat">
                                <span className="sIcon">
                                    <FiCloud aria-hidden="true" />
                                </span>
                                <span>Cloud</span>
                            </div>
                            <div className="stat">
                                <span className="sIcon">
                                    <FiLayers aria-hidden="true" />
                                </span>
                                <span>Core Notes</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rightSide">
                    <button
                        type="button"
                        className="themeToggleBtn"
                        onClick={() => setTheme(nextTheme)}
                        aria-label={`Switch to ${nextTheme} theme`}
                        title={`Switch to ${nextTheme}`}
                    >
                        <span className="icon" aria-hidden="true">
                            {theme === "light" ? <FiMoon /> : <FiSun />}
                        </span>
                        <span className="label">
                            {theme === "light" ? "Light" : "Dark"}
                        </span>
                    </button>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
