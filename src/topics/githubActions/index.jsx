// src/topics/githubActions/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiPlayCircle,
    FiChevronDown,
    FiChevronUp,
    FiGitBranch,
    FiLayers,
    FiTool,
    FiZap,
    FiShield,
    FiPackage,
    FiClock,
    FiCheckCircle,
    FiAlertTriangle,
    FiCopy,
    FiTerminal,
    FiRefreshCcw,
} from "react-icons/fi";

const GitHubActions = () => {
    const [open, setOpen] = useState(true);
    const [copiedKey, setCopiedKey] = useState("");

    const snippets = useMemo(() => {
        return [
            {
                key: "viteCi",
                title: "CI for Vite React",
                hint: "Lint and build on PR and push",
                code: `# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: ["main"]
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Use Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install
        run: npm ci

      - name: Lint
        run: npm run lint --if-present

      - name: Build
        run: npm run build`,
            },
            {
                key: "deployPages",
                title: "Deploy to GitHub Pages",
                hint: "Build and publish dist",
                code: `# .github/workflows/pages.yml
name: Deploy Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Use Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4`,
            },
            {
                key: "matrix",
                title: "Matrix strategy",
                hint: "Test multiple Node versions",
                code: `# Example snippet inside a job
strategy:
  matrix:
    node: ["18", "20", "22"]

steps:
  - uses: actions/setup-node@v4
    with:
      node-version: \${{ matrix.node }}`,
            },
            {
                key: "cache",
                title: "Caching dependencies",
                hint: "Speed up builds",
                code: `# setup-node cache handles npm cache automatically
- uses: actions/setup-node@v4
  with:
    node-version: "20"
    cache: "npm"

# For pnpm or yarn, change cache value accordingly`,
            },
            {
                key: "secrets",
                title: "Secrets usage",
                hint: "Do not hardcode tokens",
                code: `# Use secrets in workflow
env:
  MY_TOKEN: \${{ secrets.MY_TOKEN }}

# Then in a step:
- run: echo "Token exists"
# Never print secrets in logs`,
            },
            {
                key: "schedule",
                title: "Scheduled workflow",
                hint: "Nightly checks",
                code: `on:
  schedule:
    - cron: "0 2 * * *"  # daily at 02:00 UTC`,
            },
            {
                key: "artifacts",
                title: "Upload artifacts",
                hint: "Store build output or reports",
                code: `- name: Upload test report
  uses: actions/upload-artifact@v4
  with:
    name: test-report
    path: reports/`,
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
                    <FiPlayCircle />
                    GitHub Actions
                    <Styled.Badge>CI and automation inside GitHub</Styled.Badge>
                </Styled.Title>

                <Styled.Toggle aria-hidden="true">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {!open && (
                <Styled.Preview>
                    <Styled.PreviewLine>
                        GitHub Actions runs workflows when events happen like
                        push, PR, schedule, release.
                    </Styled.PreviewLine>
                    <Styled.PreviewLine>
                        Learn workflows, jobs, steps, runners, caching, secrets,
                        artifacts, and Pages deploy.
                    </Styled.PreviewLine>
                </Styled.Preview>
            )}

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiZap />
                            <h3>What is GitHub Actions</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            GitHub Actions is GitHub's built-in automation
                            system. You write workflow YAML files inside
                            ".github/workflows". GitHub then runs them on a
                            runner (a machine) when triggers happen.
                        </Styled.Para>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Beginner mental model
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Workflow is the full pipeline. Job is a
                                    machine doing work. Step is a single command
                                    or action.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiLayers />
                            <h3>Core building blocks</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>workflow</b> - YAML file that defines
                                automation
                            </li>
                            <li>
                                <b>trigger</b> - when it runs, example push,
                                pull_request, schedule
                            </li>
                            <li>
                                <b>job</b> - runs on a runner, can have multiple
                                steps
                            </li>
                            <li>
                                <b>step</b> - a command or a reusable action
                            </li>
                            <li>
                                <b>runner</b> - machine that executes jobs,
                                example ubuntu-latest
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Common triggers
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>push - run CI when code is pushed</li>
                                <li>pull_request - run checks for PR</li>
                                <li>workflow_dispatch - manual run button</li>
                                <li>schedule - nightly builds</li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiRefreshCcw />
                            <h3>Caching and speed</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            CI becomes slow when it installs dependencies from
                            scratch every time. Caching saves time. For Node
                            projects, "actions/setup-node" can cache npm
                            automatically.
                        </Styled.Para>

                        <Styled.Note>
                            <FiTool />
                            <div>
                                <Styled.NoteTitle>
                                    Practical advice
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Use "npm ci" in CI. It is faster and uses
                                    lockfile strictly, which makes builds
                                    repeatable.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiShield />
                            <h3>Secrets management</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>Secrets are stored in GitHub repo settings</li>
                            <li>Use "\${`{ secrets.NAME }`}" in workflow</li>
                            <li>Do not print secrets in logs</li>
                        </Styled.Bullets>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Security warning
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    Never hardcode tokens in workflow files.
                                    Anyone with read access to repo can see
                                    them.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiPackage />
                            <h3>Artifacts and deployments</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Artifact</b> - file output saved from
                                workflow, example dist, reports, logs
                            </li>
                            <li>
                                Artifacts help debugging and also power
                                deployments like GitHub Pages
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                GitHub Pages flow
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>build job produces dist</li>
                                <li>upload pages artifact</li>
                                <li>deploy job publishes it</li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiClock />
                            <h3>When Actions is not enough</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Actions is great for CI and simple deploys. For
                            advanced production workflows, you might add
                            environment approvals, separate deploy repos, infra
                            as code, and monitoring.
                        </Styled.Para>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiTerminal />
                            <h3>Workflow playground</h3>
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
                        GitHub Actions is your automation robot living next to
                        your repo. Keep workflows simple, fast, and safe with
                        caching and secrets.
                    </Styled.FooterNote>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default GitHubActions;

