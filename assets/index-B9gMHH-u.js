import{c as o,r as a,j as e,H as h,a as u,b as g,t as m,i as l,I as v,m as b,k as y,d as f,p as j,y as k,f as C,x as S,q as w}from"./index-J2ZlUx8T.js";const r={Wrapper:o.div`
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
    `},z=()=>{const[s,c]=a.useState(!0),[d,n]=a.useState(""),p=a.useMemo(()=>[{key:"pipelineStages",title:"Typical pipeline stages",hint:"Concept only",code:`# CI and CD pipeline usually looks like:

# 1) Checkout code
# 2) Install dependencies
# 3) Lint and typecheck
# 4) Run tests
# 5) Build artifacts
# 6) Security scans (optional but common)
# 7) Deploy to staging
# 8) Smoke tests
# 9) Deploy to production`},{key:"buildArtifact",title:"Build artifacts idea",hint:"What CD deploys",code:`# Artifact is the output of build stage
# Examples:
# - dist folder for React apps
# - Docker image tag like myapp:1.2.0
# - compiled binary for Go or Rust
# - zip package for serverless functions`},{key:"rollback",title:"Rollback idea",hint:"Production safety",code:`# A good CD setup supports rollback
# Examples:
# - deploy previous Docker image tag
# - switch load balancer traffic to old version
# - revert release in Kubernetes
# - redeploy previous build artifact`},{key:"envs",title:"Environments",hint:"dev, staging, prod",code:`# Common flow:
# dev - local machine
# staging - production like testing environment
# prod - real users

# Good practice:
# same build artifact should go through staging then prod`},{key:"secrets",title:"Secrets handling",hint:"Never hardcode",code:`# Secrets belong in CI secret store
# Examples:
# - API keys
# - deploy tokens
# - cloud credentials

# Never commit secrets in code or .env in repo`},{key:"qualityGates",title:"Quality gates",hint:"Block bad builds",code:`# Quality gates are rules that must pass
# Examples:
# - lint must pass
# - tests must pass
# - coverage minimum
# - security scan no high vulnerabilities
# - formatting check`}],[]),x=async(i,t)=>{try{await navigator.clipboard.writeText(i),n(t),window.setTimeout(()=>n(""),900)}catch{n("")}};return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Header,{onClick:()=>c(i=>!i),role:"button",tabIndex:0,children:[e.jsxs(r.Title,{children:[e.jsx(h,{}),"CI CD",e.jsx(r.Badge,{children:"Automation from commit to deploy"})]}),e.jsx(r.Toggle,{"aria-hidden":"true",children:s?e.jsx(u,{}):e.jsx(g,{})})]}),!s&&e.jsxs(r.Preview,{children:[e.jsx(r.PreviewLine,{children:"CI builds and tests your code automatically. CD deploys it automatically."}),e.jsx(r.PreviewLine,{children:"Learn pipeline stages, artifacts, environments, and safe deployment habits."})]}),s&&e.jsxs(r.Content,{children:[e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(m,{}),e.jsx("h3",{children:"What is CI"})]}),e.jsx(r.Para,{children:"CI means Continuous Integration. Every time code is pushed, an automated pipeline runs to make sure the code is healthy. Typical CI jobs are linting, tests, type checks, and build."}),e.jsxs(r.Note,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Beginner mental model"}),e.jsx(r.NoteText,{children:"CI is like an automatic reviewer. It runs the same checks every time so humans do not miss mistakes."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(v,{}),e.jsx("h3",{children:"What is CD"})]}),e.jsx(r.Para,{children:"CD usually means Continuous Delivery or Continuous Deployment. Both automate the deployment steps, but the difference is who clicks the final button."}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Continuous Delivery"})," - deployment is always ready, but production release may need manual approval"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Continuous Deployment"})," - every successful pipeline automatically goes to production"]})]}),e.jsxs(r.Warn,{children:[e.jsx(b,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Real world note"}),e.jsx(r.WarnText,{children:"Many teams start with Continuous Delivery and add approvals for production. Fully automatic production is possible, but requires strong testing and monitoring."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(y,{}),e.jsx("h3",{children:"Pipeline stages (typical)"})]}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Checkout code"}),e.jsx("li",{children:"Install dependencies"}),e.jsx("li",{children:"Lint and formatting checks"}),e.jsx("li",{children:"Run tests"}),e.jsx("li",{children:"Build artifacts"}),e.jsx("li",{children:"Deploy to staging"}),e.jsx("li",{children:"Smoke test"}),e.jsx("li",{children:"Deploy to production"})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Smoke test meaning"}),e.jsx(r.Para,{children:"A smoke test is a quick check to ensure the deployment is not totally broken. Example: call health endpoint and check status 200."})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(f,{}),e.jsx("h3",{children:"Branch strategy example"})]}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"PR to main triggers CI only"}),e.jsx("li",{children:"Merge to main triggers CI and deploy to staging"}),e.jsx("li",{children:"Tag a release triggers production deployment"})]}),e.jsxs(r.Note,{children:[e.jsx(j,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Why tags are useful"}),e.jsx(r.NoteText,{children:"A tag is a stable point in history. Production deployments often use tags so you can identify exactly what version is running."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(k,{}),e.jsx("h3",{children:"Secrets and configuration"})]}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Secrets should be stored in CI secret manager"}),e.jsx("li",{children:"Never commit credentials in repository"}),e.jsx("li",{children:"Use environment based configuration - staging and production"})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Common secrets"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"AWS access keys"}),e.jsx("li",{children:"GitHub deploy tokens"}),e.jsx("li",{children:"Docker registry credentials"}),e.jsx("li",{children:"Database connection strings"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(C,{}),e.jsx("h3",{children:"Monitoring and rollback"})]}),e.jsx(r.Para,{children:"CD without monitoring is risky. After deployment, you should track errors, latency, and traffic. Rollback should be fast and predictable."}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Keep previous artifacts available"}),e.jsx("li",{children:"Use health checks"}),e.jsx("li",{children:"Enable fast rollback path"}),e.jsx("li",{children:"Prefer gradual rollout for big changes"})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(S,{}),e.jsx("h3",{children:"Cheat sheet playground"})]}),e.jsx(r.SnippetGrid,{children:p.map(i=>{const t=d===i.key;return e.jsxs(r.SnippetCard,{children:[e.jsxs(r.SnippetTop,{children:[e.jsxs("div",{children:[e.jsx(r.SnippetTitle,{children:i.title}),e.jsx(r.SnippetHint,{children:i.hint})]}),e.jsxs(r.CopyBtn,{type:"button",onClick:()=>x(i.code,i.key),title:t?"Copied":"Copy",children:[t?e.jsx(l,{}):e.jsx(w,{}),t?"Copied":"Copy"]})]}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:i.code})})]},i.key)})})]}),e.jsx(r.FooterNote,{children:"CI catches mistakes early. CD makes releases repeatable. Together they reduce manual work and increase reliability."})]})]})};export{z as default};
