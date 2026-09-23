import{c as o,r as a,j as e,J as h,a as u,b as m,t as g,i as l,k as b,K as v,p as f,y as j,m as y,I as w,o as k,x as C,q as S}from"./index-J2ZlUx8T.js";const r={Wrapper:o.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:o.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition: background 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:o.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:o.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:o.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:o.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:o.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:o.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:o.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:o.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:o.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:o.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,Example:o.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:o.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:o.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Note:o.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:o.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:o.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:o.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:o.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:o.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:o.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:o.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:o.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:o.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:o.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:o.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,FooterNote:o.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},H=()=>{const[s,c]=a.useState(!0),[d,n]=a.useState(""),p=a.useMemo(()=>[{key:"viteCi",title:"CI for Vite React",hint:"Lint and build on PR and push",code:`# .github/workflows/ci.yml
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
        run: npm run build`},{key:"deployPages",title:"Deploy to GitHub Pages",hint:"Build and publish dist",code:`# .github/workflows/pages.yml
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
        uses: actions/deploy-pages@v4`},{key:"matrix",title:"Matrix strategy",hint:"Test multiple Node versions",code:`# Example snippet inside a job
strategy:
  matrix:
    node: ["18", "20", "22"]

steps:
  - uses: actions/setup-node@v4
    with:
      node-version: \${{ matrix.node }}`},{key:"cache",title:"Caching dependencies",hint:"Speed up builds",code:`# setup-node cache handles npm cache automatically
- uses: actions/setup-node@v4
  with:
    node-version: "20"
    cache: "npm"

# For pnpm or yarn, change cache value accordingly`},{key:"secrets",title:"Secrets usage",hint:"Do not hardcode tokens",code:`# Use secrets in workflow
env:
  MY_TOKEN: \${{ secrets.MY_TOKEN }}

# Then in a step:
- run: echo "Token exists"
# Never print secrets in logs`},{key:"schedule",title:"Scheduled workflow",hint:"Nightly checks",code:`on:
  schedule:
    - cron: "0 2 * * *"  # daily at 02:00 UTC`},{key:"artifacts",title:"Upload artifacts",hint:"Store build output or reports",code:`- name: Upload test report
  uses: actions/upload-artifact@v4
  with:
    name: test-report
    path: reports/`}],[]),x=async(i,t)=>{try{await navigator.clipboard.writeText(i),n(t),window.setTimeout(()=>n(""),900)}catch{n("")}};return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Header,{onClick:()=>c(i=>!i),role:"button",tabIndex:0,children:[e.jsxs(r.Title,{children:[e.jsx(h,{}),"GitHub Actions",e.jsx(r.Badge,{children:"CI and automation inside GitHub"})]}),e.jsx(r.Toggle,{"aria-hidden":"true",children:s?e.jsx(u,{}):e.jsx(m,{})})]}),!s&&e.jsxs(r.Preview,{children:[e.jsx(r.PreviewLine,{children:"GitHub Actions runs workflows when events happen like push, PR, schedule, release."}),e.jsx(r.PreviewLine,{children:"Learn workflows, jobs, steps, runners, caching, secrets, artifacts, and Pages deploy."})]}),s&&e.jsxs(r.Content,{children:[e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(g,{}),e.jsx("h3",{children:"What is GitHub Actions"})]}),e.jsx(r.Para,{children:`GitHub Actions is GitHub's built-in automation system. You write workflow YAML files inside ".github/workflows". GitHub then runs them on a runner (a machine) when triggers happen.`}),e.jsxs(r.Note,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Beginner mental model"}),e.jsx(r.NoteText,{children:"Workflow is the full pipeline. Job is a machine doing work. Step is a single command or action."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(b,{}),e.jsx("h3",{children:"Core building blocks"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"workflow"})," - YAML file that defines automation"]}),e.jsxs("li",{children:[e.jsx("b",{children:"trigger"})," - when it runs, example push, pull_request, schedule"]}),e.jsxs("li",{children:[e.jsx("b",{children:"job"})," - runs on a runner, can have multiple steps"]}),e.jsxs("li",{children:[e.jsx("b",{children:"step"})," - a command or a reusable action"]}),e.jsxs("li",{children:[e.jsx("b",{children:"runner"})," - machine that executes jobs, example ubuntu-latest"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Common triggers"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"push - run CI when code is pushed"}),e.jsx("li",{children:"pull_request - run checks for PR"}),e.jsx("li",{children:"workflow_dispatch - manual run button"}),e.jsx("li",{children:"schedule - nightly builds"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(v,{}),e.jsx("h3",{children:"Caching and speed"})]}),e.jsx(r.Para,{children:'CI becomes slow when it installs dependencies from scratch every time. Caching saves time. For Node projects, "actions/setup-node" can cache npm automatically.'}),e.jsxs(r.Note,{children:[e.jsx(f,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Practical advice"}),e.jsx(r.NoteText,{children:'Use "npm ci" in CI. It is faster and uses lockfile strictly, which makes builds repeatable.'})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(j,{}),e.jsx("h3",{children:"Secrets management"})]}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Secrets are stored in GitHub repo settings"}),e.jsxs("li",{children:['Use "\\$',"{ secrets.NAME }",'" in workflow']}),e.jsx("li",{children:"Do not print secrets in logs"})]}),e.jsxs(r.Warn,{children:[e.jsx(y,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Security warning"}),e.jsx(r.WarnText,{children:"Never hardcode tokens in workflow files. Anyone with read access to repo can see them."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(w,{}),e.jsx("h3",{children:"Artifacts and deployments"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Artifact"})," - file output saved from workflow, example dist, reports, logs"]}),e.jsx("li",{children:"Artifacts help debugging and also power deployments like GitHub Pages"})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"GitHub Pages flow"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"build job produces dist"}),e.jsx("li",{children:"upload pages artifact"}),e.jsx("li",{children:"deploy job publishes it"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(k,{}),e.jsx("h3",{children:"When Actions is not enough"})]}),e.jsx(r.Para,{children:"Actions is great for CI and simple deploys. For advanced production workflows, you might add environment approvals, separate deploy repos, infra as code, and monitoring."})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(C,{}),e.jsx("h3",{children:"Workflow playground"})]}),e.jsx(r.SnippetGrid,{children:p.map(i=>{const t=d===i.key;return e.jsxs(r.SnippetCard,{children:[e.jsxs(r.SnippetTop,{children:[e.jsxs("div",{children:[e.jsx(r.SnippetTitle,{children:i.title}),e.jsx(r.SnippetHint,{children:i.hint})]}),e.jsxs(r.CopyBtn,{type:"button",onClick:()=>x(i.code,i.key),title:t?"Copied":"Copy",children:[t?e.jsx(l,{}):e.jsx(S,{}),t?"Copied":"Copy"]})]}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:i.code})})]},i.key)})})]}),e.jsx(r.FooterNote,{children:"GitHub Actions is your automation robot living next to your repo. Keep workflows simple, fast, and safe with caching and secrets."})]})]})};export{H as default};
