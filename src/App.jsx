// App.jsx
import React, { useRef } from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import GoToTop from "./components/goToTop";
import GitDeep from "./topics/gitDeep";
import Rebase from "./topics/rebase";
import Merge from "./topics/merge";
import Hooks from "./topics/hooks";
import Containers from "./topics/containers";
import Dockerfile from "./topics/dockerfile";
import Networking from "./topics/networking";
import CiCd from "./topics/ciCd";
import GitHubActions from "./topics/githubActions";
import CloudBasics from "./topics/cloudBasics";
import AwsEc2 from "./topics/awsEc2";
import S3 from "./topics/s3";
import Iam from "./topics/iam";
import LoadBalancer from "./topics/loadBalancer";
import ReverseProxy from "./topics/reverseProxy";
import Nginx from "./topics/nginx";

const App = () => {
    const scrollerRef = useRef(null);

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>

            <Styled.Main ref={scrollerRef}>
                <div className="contentWrapper">
                    <About />

                    <GitDeep />
                    <Rebase />
                    <Merge />
                    <Hooks />
                    <Containers />
                    <Dockerfile />
                    <Networking />
                    <CiCd />
                    <GitHubActions />
                    <CloudBasics />
                    <AwsEc2 />
                    <S3 />
                    <Iam />
                    <LoadBalancer />
                    <ReverseProxy />
                    <Nginx />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>

            <GoToTop scrollerRef={scrollerRef} />
        </Styled.Wrapper>
    );
};

export default App;
