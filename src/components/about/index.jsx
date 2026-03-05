import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiCloud,
    FiGitBranch,
    FiBox,
    FiServer,
    FiActivity,
} from "react-icons/fi";

const AboutDevOpsCloud = () => {
    const [open, setOpen] = useState(true);

    return (
        <Styled.Wrapper>
            <Styled.Header onClick={() => setOpen(!open)}>
                <Styled.Title>
                    <FiCloud />
                    DevOps and Cloud Core Notes
                </Styled.Title>

                <Styled.Toggle>
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.Paragraph>
                            Modern software is not only about writing code. It
                            is about building systems that can run reliably on
                            servers, scale for millions of users, and recover
                            from failures.
                        </Styled.Paragraph>

                        <Styled.Paragraph>
                            DevOps combines development and operations so that
                            applications move smoothly from a developer's laptop
                            to real production infrastructure.
                        </Styled.Paragraph>
                    </Styled.Section>

                    <Styled.Grid>
                        <Styled.Card>
                            <FiGitBranch />
                            <h3>Version Control</h3>
                            <p>
                                Git workflows, branching strategies, rebasing,
                                and merging that power collaborative
                                development.
                            </p>
                        </Styled.Card>

                        <Styled.Card>
                            <FiBox />
                            <h3>Containers</h3>
                            <p>
                                Docker containers package applications with
                                their dependencies so they run the same
                                everywhere.
                            </p>
                        </Styled.Card>

                        <Styled.Card>
                            <FiActivity />
                            <h3>CI and CD</h3>
                            <p>
                                Automated pipelines that test, build, and deploy
                                applications continuously.
                            </p>
                        </Styled.Card>

                        <Styled.Card>
                            <FiServer />
                            <h3>Cloud Infrastructure</h3>
                            <p>
                                Cloud platforms like AWS provide scalable
                                compute, storage, and networking for modern
                                systems.
                            </p>
                        </Styled.Card>
                    </Styled.Grid>

                    <Styled.Section>
                        <Styled.Paragraph>
                            This repository explains how real production systems
                            are built. From Git internals to container
                            orchestration and cloud architecture, the goal is to
                            understand how software actually runs on the
                            internet.
                        </Styled.Paragraph>

                        <Styled.Paragraph>
                            The focus is practical understanding. Concepts are
                            explained clearly with examples so developers can
                            reason about real infrastructure and deployment
                            workflows.
                        </Styled.Paragraph>
                    </Styled.Section>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default AboutDevOpsCloud;
