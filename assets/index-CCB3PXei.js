import{c as o,r as a,j as e,R as m,a as u,b as g,E as b,i as l,k as v,y as j,m as c,Q as y,N as f,p as w,S as k,z as S,x as A,q as C}from"./index-J2ZlUx8T.js";const r={Wrapper:o.div`
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
    `},I=()=>{const[t,d]=a.useState(!0),[p,n]=a.useState(""),x=a.useMemo(()=>[{key:"iamParts",title:"IAM building blocks",hint:"User, group, role, policy",code:`# IAM basics:
# - User: a person or app identity (long lived)
# - Group: a collection of users
# - Role: a temporary identity that can be assumed
# - Policy: permissions written in JSON
# - Permission boundary: max allowed permissions
# - MFA: extra login security`},{key:"leastPrivilege",title:"Least privilege rule",hint:"Give minimum access",code:`# Least privilege means:
# - allow only actions required
# - allow only specific resources
# - deny everything else by default

# Bad:
# Action: "*"
# Resource: "*"`},{key:"policyExample",title:"Policy example idea",hint:"Read only S3 bucket",code:`# Example policy intent:
# - allow listing bucket
# - allow reading objects
# - only for one bucket

# In real JSON this looks like:
# Effect: Allow
# Action: s3:ListBucket, s3:GetObject
# Resource: arn:aws:s3:::my-bucket and arn:aws:s3:::my-bucket/*`},{key:"roles",title:"Why roles are powerful",hint:"Temporary credentials",code:`# Roles are assumed:
# - by services (EC2, Lambda)
# - by users (switch role)
# - by external identity (OIDC, SSO)

# Benefit:
# - no hardcoded long lived keys in servers`},{key:"mfa",title:"MFA and root account",hint:"Protect the crown jewels",code:`# Best practice:
# - enable MFA on root account
# - never use root for daily work
# - create admin role/user for operations
# - store root credentials safely`},{key:"accessKeys",title:"Access keys basics",hint:"Programmatic access",code:`# Access keys:
# - used by CLI and SDK
# - should be rotated
# - should not be stored in code
# - should be limited by policy

# Better:
# use roles and instance profiles where possible`},{key:"commonMistakes",title:"Common mistakes",hint:"How incidents happen",code:`# Common IAM mistakes:
# - too broad permissions
# - sharing one IAM user among team
# - leaving unused keys active
# - no MFA
# - public S3 policies
# - hardcoding keys in repo`}],[]),h=async(i,s)=>{try{await navigator.clipboard.writeText(i),n(s),window.setTimeout(()=>n(""),900)}catch{n("")}};return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Header,{onClick:()=>d(i=>!i),role:"button",tabIndex:0,children:[e.jsxs(r.Title,{children:[e.jsx(m,{}),"IAM",e.jsx(r.Badge,{children:"Identity and access control"})]}),e.jsx(r.Toggle,{"aria-hidden":"true",children:t?e.jsx(u,{}):e.jsx(g,{})})]}),!t&&e.jsxs(r.Preview,{children:[e.jsx(r.PreviewLine,{children:"IAM controls who can do what in AWS. It is the security foundation."}),e.jsx(r.PreviewLine,{children:"Learn users, groups, roles, policies, least privilege, and common mistakes."})]}),t&&e.jsxs(r.Content,{children:[e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(b,{}),e.jsx("h3",{children:"What is IAM"})]}),e.jsx(r.Para,{children:"IAM stands for Identity and Access Management. It controls permissions in AWS. It answers two questions: who are you and what are you allowed to do."}),e.jsxs(r.Note,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Beginner mental model"}),e.jsx(r.NoteText,{children:"IAM is the security gatekeeper. Every AWS action checks IAM before it runs."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(v,{}),e.jsx("h3",{children:"Core building blocks"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"User"})," - identity for a person or app"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Group"})," - collection of users to attach permissions easily"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Role"})," - temporary identity that can be assumed"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Policy"})," - JSON document defining allowed or denied actions"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Simple example"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:'Create group "developers"'}),e.jsx("li",{children:"Attach policy that allows read access to logs"}),e.jsx("li",{children:'Add users to "developers"'})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(j,{}),e.jsx("h3",{children:"Least privilege principle"})]}),e.jsx(r.Para,{children:"Least privilege means you should grant the minimum permissions required to do the job. This reduces blast radius if a credential is leaked."}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:'Restrict actions - do not use "*" unless truly needed'}),e.jsx("li",{children:"Restrict resources - allow only specific buckets, instances, tables"}),e.jsx("li",{children:"Prefer roles with temporary credentials"})]}),e.jsxs(r.Warn,{children:[e.jsx(c,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Danger pattern"}),e.jsx(r.WarnText,{children:"AdministratorAccess everywhere is easy but unsafe. It is common in early projects, but it should not stay."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(y,{}),e.jsx("h3",{children:"Policies - how permissions are written"})]}),e.jsx(r.Para,{children:"Policies are JSON documents. They contain statements with an effect (Allow or Deny), actions (like s3:GetObject), and resources (like a bucket ARN)."}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Policy statement fields"}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Effect"})," - Allow or Deny"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Action"}),' - what operation is allowed, example "s3:GetObject"']}),e.jsxs("li",{children:[e.jsx("b",{children:"Resource"})," - what object it applies to, example one bucket"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Condition"})," - optional rules, example allow only from certain IP"]})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(f,{}),e.jsx("h3",{children:"Roles - why they matter"})]}),e.jsx(r.Para,{children:"Roles are the best way to avoid hardcoding keys. Services like EC2 can assume a role using an instance profile, and then call AWS APIs with temporary credentials."}),e.jsxs(r.Note,{children:[e.jsx(w,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Real world pattern"}),e.jsx(r.NoteText,{children:"EC2 instance needs S3 access. Attach an IAM role to EC2. No access keys stored on disk."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(k,{}),e.jsx("h3",{children:"Users and groups in teams"})]}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Each developer should have their own identity"}),e.jsx("li",{children:"Use groups for shared permissions"}),e.jsx("li",{children:"Enable MFA for human users"}),e.jsx("li",{children:"Remove access quickly when someone leaves"})]}),e.jsxs(r.Warn,{children:[e.jsx(c,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Team mistake"}),e.jsx(r.WarnText,{children:"Sharing one IAM user across the whole team kills accountability and makes incidents harder to investigate."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(S,{}),e.jsx("h3",{children:"Root account rules"})]}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Do not use root for daily work"}),e.jsx("li",{children:"Enable MFA on root immediately"}),e.jsx("li",{children:"Create admin role or admin user for operations"}),e.jsx("li",{children:"Store root credentials safely"})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(A,{}),e.jsx("h3",{children:"Cheat sheet playground"})]}),e.jsx(r.SnippetGrid,{children:x.map(i=>{const s=p===i.key;return e.jsxs(r.SnippetCard,{children:[e.jsxs(r.SnippetTop,{children:[e.jsxs("div",{children:[e.jsx(r.SnippetTitle,{children:i.title}),e.jsx(r.SnippetHint,{children:i.hint})]}),e.jsxs(r.CopyBtn,{type:"button",onClick:()=>h(i.code,i.key),title:s?"Copied":"Copy",children:[s?e.jsx(l,{}):e.jsx(C,{}),s?"Copied":"Copy"]})]}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:i.code})})]},i.key)})})]}),e.jsx(r.FooterNote,{children:"IAM is the difference between safe cloud and chaos cloud. Keep permissions small, prefer roles, enable MFA, and never hardcode keys."})]})]})};export{I as default};
