// src/topics/ciCd/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiRepeat,
    FiChevronDown,
    FiChevronUp,
    FiCheckCircle,
    FiAlertTriangle,
    FiTool,
    FiLayers,
    FiZap,
    FiPackage,
    FiGitBranch,
    FiActivity,
    FiCopy,
    FiTerminal,
    FiShield,
} from "react-icons/fi";

const CiCd = () => {
    const [open, setOpen] = useState(true);
    const [copiedKey, setCopiedKey] = useState("");

    const snippets = useMemo(() => {
        return [
            {
                key: "pipelineStages",
                title: "Typical pipeline stages",
                hint: "Concept only",
                code: `# CI and CD pipeline usually looks like:

# 1) Checkout code
# 2) Install dependencies
# 3) Lint and typecheck
# 4) Run tests
# 5) Build artifacts
# 6) Security scans (optional but common)
# 7) Deploy to staging
# 8) Smoke tests
# 9) Deploy to production`,
            },
            {
                key: "buildArtifact",
                title: "Build artifacts idea",
                hint: "What CD deploys",
                code: `# Artifact is the output of build stage
# Examples:
# - dist folder for React apps
# - Docker image tag like myapp:1.2.0
# - compiled binary for Go or Rust
# - zip package for serverless functions`,
            },
            {
                key: "rollback",
                title: "Rollback idea",
                hint: "Production safety",
                code: `# A good CD setup supports rollback
# Examples:
# - deploy previous Docker image tag
# - switch load balancer traffic to old version
# - revert release in Kubernetes
# - redeploy previous build artifact`,
            },
            {
                key: "envs",
                title: "Environments",
                hint: "dev, staging, prod",
                code: `# Common flow:
# dev - local machine
# staging - production like testing environment
# prod - real users

# Good practice:
# same build artifact should go through staging then prod`,
            },
            {
                key: "secrets",
                title: "Secrets handling",
                hint: "Never hardcode",
                code: `# Secrets belong in CI secret store
# Examples:
# - API keys
# - deploy tokens
# - cloud credentials

# Never commit secrets in code or .env in repo`,
            },
            {
                key: "qualityGates",
                title: "Quality gates",
                hint: "Block bad builds",
                code: `# Quality gates are rules that must pass
# Examples:
# - lint must pass
# - tests must pass
# - coverage minimum
# - security scan no high vulnerabilities
# - formatting check`,
            },
        ];
    }, []);

    const copyToClipboard = async (text, key) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedKey(key);
            window.setTimeout(() => setCopiedKey(""), 900);
        } catch {
            setCopiedKey("");
        }
    };

    return (
        <Styled.Wrapper>
            <Styled.Header
                onClick={() => setOpen((v) => !v)}
                role="button"
                tabIndex={0}
            >
                <Styled.Title>
                    <FiRepeat />
                    CI CD
                    <Styled.Badge>
                        Automation from commit to deploy
                    </Styled.Badge>
                </Styled.Title>

                <Styled.Toggle aria-hidden="true">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {!open && (
                <Styled.Preview>
                    <Styled.PreviewLine>
                        CI builds and tests your code automatically. CD deploys
                        it automatically.
                    </Styled.PreviewLine>
                    <Styled.PreviewLine>
                        Learn pipeline stages, artifacts, environments, and safe
                        deployment habits.
                    </Styled.PreviewLine>
                </Styled.Preview>
            )}

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiZap />
                            <h3>What is CI</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            CI means Continuous Integration. Every time code is
                            pushed, an automated pipeline runs to make sure the
                            code is healthy. Typical CI jobs are linting, tests,
                            type checks, and build.
                        </Styled.Para>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Beginner mental model
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    CI is like an automatic reviewer. It runs
                                    the same checks every time so humans do not
                                    miss mistakes.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiPackage />
                            <h3>What is CD</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            CD usually means Continuous Delivery or Continuous
                            Deployment. Both automate the deployment steps, but
                            the difference is who clicks the final button.
                        </Styled.Para>

                        <Styled.Bullets>
                            <li>
                                <b>Continuous Delivery</b> - deployment is
                                always ready, but production release may need
                                manual approval
                            </li>
                            <li>
                                <b>Continuous Deployment</b> - every successful
                                pipeline automatically goes to production
                            </li>
                        </Styled.Bullets>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Real world note
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    Many teams start with Continuous Delivery
                                    and add approvals for production. Fully
                                    automatic production is possible, but
                                    requires strong testing and monitoring.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiLayers />
                            <h3>Pipeline stages (typical)</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>Checkout code</li>
                            <li>Install dependencies</li>
                            <li>Lint and formatting checks</li>
                            <li>Run tests</li>
                            <li>Build artifacts</li>
                            <li>Deploy to staging</li>
                            <li>Smoke test</li>
                            <li>Deploy to production</li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Smoke test meaning
                            </Styled.ExampleTitle>
                            <Styled.Para>
                                A smoke test is a quick check to ensure the
                                deployment is not totally broken. Example: call
                                health endpoint and check status 200.
                            </Styled.Para>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiGitBranch />
                            <h3>Branch strategy example</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>PR to main triggers CI only</li>
                            <li>
                                Merge to main triggers CI and deploy to staging
                            </li>
                            <li>
                                Tag a release triggers production deployment
                            </li>
                        </Styled.Bullets>

                        <Styled.Note>
                            <FiTool />
                            <div>
                                <Styled.NoteTitle>
                                    Why tags are useful
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    A tag is a stable point in history.
                                    Production deployments often use tags so you
                                    can identify exactly what version is
                                    running.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiShield />
                            <h3>Secrets and configuration</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                Secrets should be stored in CI secret manager
                            </li>
                            <li>Never commit credentials in repository</li>
                            <li>
                                Use environment based configuration - staging
                                and production
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Common secrets
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>AWS access keys</li>
                                <li>GitHub deploy tokens</li>
                                <li>Docker registry credentials</li>
                                <li>Database connection strings</li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiActivity />
                            <h3>Monitoring and rollback</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            CD without monitoring is risky. After deployment,
                            you should track errors, latency, and traffic.
                            Rollback should be fast and predictable.
                        </Styled.Para>

                        <Styled.Bullets>
                            <li>Keep previous artifacts available</li>
                            <li>Use health checks</li>
                            <li>Enable fast rollback path</li>
                            <li>Prefer gradual rollout for big changes</li>
                        </Styled.Bullets>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiTerminal />
                            <h3>Cheat sheet playground</h3>
                        </Styled.SectionHead>

                        <Styled.SnippetGrid>
                            {snippets.map((s) => {
                                const isCopied = copiedKey === s.key;
                                return (
                                    <Styled.SnippetCard key={s.key}>
                                        <Styled.SnippetTop>
                                            <div>
                                                <Styled.SnippetTitle>
                                                    {s.title}
                                                </Styled.SnippetTitle>
                                                <Styled.SnippetHint>
                                                    {s.hint}
                                                </Styled.SnippetHint>
                                            </div>

                                            <Styled.CopyBtn
                                                type="button"
                                                onClick={() =>
                                                    copyToClipboard(
                                                        s.code,
                                                        s.key,
                                                    )
                                                }
                                                title={
                                                    isCopied ? "Copied" : "Copy"
                                                }
                                            >
                                                {isCopied ? (
                                                    <FiCheckCircle />
                                                ) : (
                                                    <FiCopy />
                                                )}
                                                {isCopied ? "Copied" : "Copy"}
                                            </Styled.CopyBtn>
                                        </Styled.SnippetTop>

                                        <Styled.CodeBlock>
                                            <pre>{s.code}</pre>
                                        </Styled.CodeBlock>
                                    </Styled.SnippetCard>
                                );
                            })}
                        </Styled.SnippetGrid>
                    </Styled.Section>

                    <Styled.FooterNote>
                        CI catches mistakes early. CD makes releases repeatable.
                        Together they reduce manual work and increase
                        reliability.
                    </Styled.FooterNote>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default CiCd;

