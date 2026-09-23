import React, { useEffect, useRef } from "react";
import { FiBookOpen } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import AppRoutes, { items } from "./AppRoutes";
import { Styled } from "./App.styled";
import Footer from "./components/footer";
import GoToTop from "./components/goToTop";
import Header from "./components/header";

const App = () => {
    const mainRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        mainRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [location.pathname]);

    const getNavClass = ({ isActive }) =>
        `topicLink${isActive ? " active" : ""}`;

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>

            <Styled.Main ref={mainRef}>
                <aside className="studyNav" aria-label="Study guide">
                    <div className="studyNavLabel">Study guide</div>
                    <nav>
                        {items.map(([path, label]) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={getNavClass}
                            >
                                <FiBookOpen aria-hidden="true" />
                                <span>{label}</span>
                            </NavLink>
                        ))}
                    </nav>
                    <p>Select a topic to open its notes.</p>
                </aside>

                <div className="contentWrapper">
                    <AppRoutes />
                    <Footer />
                </div>

                <GoToTop scrollerRef={mainRef} />
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
