import{c as i,r as n,j as e,F as h,a as g,b as u,E as m,i as l,L as b,k as v,y as j,m as f,M as y,f as k,p as w,x as C,q as S}from"./index-ChJ3UoLf.js";const r={Wrapper:i.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:i.div`
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
    `,Title:i.div`
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
    `,Badge:i.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:i.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:i.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:i.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:i.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:i.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:i.div`
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
    `,Para:i.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:i.ul`
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
    `,Example:i.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:i.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:i.div`
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
    `,Note:i.div`
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
    `,NoteTitle:i.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:i.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:i.div`
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
    `,WarnTitle:i.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:i.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:i.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:i.div`
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
    `,SnippetTop:i.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:i.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:i.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:i.button`
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
    `,FooterNote:i.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},z=()=>{const[a,d]=n.useState(!0),[c,t]=n.useState(""),p=n.useMemo(()=>[{key:"sharedResponsibility",title:"Shared responsibility model",hint:"Who secures what",code:`# Cloud provider responsibilities:
# - physical data centers
# - hardware and networking
# - base infrastructure availability

# Your responsibilities:
# - your app code
# - your data
# - access control (IAM)
# - OS patching (for VMs)
# - configuration and secrets`},{key:"regionsAz",title:"Regions and availability zones",hint:"High availability idea",code:`# Region - a geographic area, example ap-south-1
# Availability Zone (AZ) - separate data centers inside a region

# High availability idea:
# run servers in 2+ AZs so one AZ failure does not kill your app`},{key:"computeStorageNetwork",title:"Compute vs storage vs networking",hint:"The 3 big building blocks",code:`# Compute - run code
# Example: virtual machines, containers, serverless

# Storage - store data
# Example: object storage, block storage, managed databases

# Networking - move data
# Example: VPC, subnets, routing, load balancers, DNS`},{key:"pricing",title:"Pay as you go pricing",hint:"Costs come from usage",code:`# Common cost drivers:
# - compute time (per second or per hour)
# - storage size (GB per month)
# - requests (API calls)
# - data transfer out (egress)
# - managed services premium`},{key:"iam",title:"Identity and access",hint:"Least privilege",code:`# Good practice:
# - create roles, not shared root credentials
# - give minimum permissions needed
# - rotate keys
# - enable MFA where possible`},{key:"envs",title:"Dev, staging, prod",hint:"Keep environments separate",code:`# Common approach:
# - dev for experiments
# - staging for production-like testing
# - prod for users

# Good rule:
# never test directly in prod`}],[]),x=async(o,s)=>{try{await navigator.clipboard.writeText(o),t(s),window.setTimeout(()=>t(""),900)}catch{t("")}};return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Header,{onClick:()=>d(o=>!o),role:"button",tabIndex:0,children:[e.jsxs(r.Title,{children:[e.jsx(h,{}),"Cloud basics",e.jsx(r.Badge,{children:"Regions, AZ, pricing, responsibility"})]}),e.jsx(r.Toggle,{"aria-hidden":"true",children:a?e.jsx(g,{}):e.jsx(u,{})})]}),!a&&e.jsxs(r.Preview,{children:[e.jsx(r.PreviewLine,{children:"Cloud is renting compute, storage, and networking from a provider."}),e.jsx(r.PreviewLine,{children:"Learn regions, availability zones, shared responsibility, and how pricing works."})]}),a&&e.jsxs(r.Content,{children:[e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(m,{}),e.jsx("h3",{children:"What is cloud"})]}),e.jsx(r.Para,{children:"Cloud means you do not buy physical servers. You rent infrastructure from a provider and spin it up on demand. The provider runs data centers. You focus on building and operating your application."}),e.jsxs(r.Note,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Beginner mental model"}),e.jsx(r.NoteText,{children:"Cloud is like renting a fully managed building. You choose rooms, power, and security rules. The landlord handles the building itself."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(b,{}),e.jsx("h3",{children:"Regions and availability zones"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Region"})," - a large geographic area with multiple data centers"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Availability Zone"})," - separate data center group inside a region"]}),e.jsxs("li",{children:[e.jsx("b",{children:"High availability"})," - deploy across 2 or more AZs"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Why AZ matters"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"If one data center has an outage, your app stays alive in another AZ"}),e.jsx("li",{children:"Load balancer can send traffic to healthy AZ"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(v,{}),e.jsx("h3",{children:"Compute, storage, networking"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Compute"})," - where code runs, example VMs, containers, serverless functions"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Storage"})," - where data lives, example object storage, block disks, databases"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Networking"})," - how traffic moves, example VPC, subnets, routing, load balancers"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Simple web app mapping"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Compute - your backend servers"}),e.jsx("li",{children:"Storage - images and database"}),e.jsx("li",{children:"Networking - DNS, load balancer, private network"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(j,{}),e.jsx("h3",{children:"Shared responsibility model"})]}),e.jsx(r.Para,{children:"Cloud security is shared. Provider secures the underlying infrastructure. You secure your configuration, identities, data, and application."}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Provider handles"})," - data center security, hardware, base networking, service availability"]}),e.jsxs("li",{children:[e.jsx("b",{children:"You handle"})," - IAM permissions, secrets, application security, data access rules"]})]}),e.jsxs(r.Warn,{children:[e.jsx(f,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Biggest real world mistake"}),e.jsx(r.WarnText,{children:"People assume cloud is secure by default. Wrong. Misconfigured permissions and public buckets cause most incidents."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(y,{}),e.jsx("h3",{children:"Pricing basics"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Pay as you go"})," - you pay for usage, not ownership"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Compute time"})," - cost per hour or per second"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Storage size"})," - cost per GB per month"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Requests"})," - API calls, function invocations"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Data transfer"})," - outgoing internet traffic can cost a lot"]})]}),e.jsxs(r.Note,{children:[e.jsx(k,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Cost control habit"}),e.jsx(r.NoteText,{children:"Always set budgets and alerts. Clean up unused resources. Egress charges can surprise you."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(w,{}),e.jsx("h3",{children:"Core good practices"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Least privilege"})," in IAM - grant minimum permissions"]}),e.jsx("li",{children:"Separate dev, staging, production"}),e.jsx("li",{children:"Use encryption for sensitive data"}),e.jsx("li",{children:"Backups and disaster recovery plan"}),e.jsx("li",{children:"Monitoring and logs for everything important"})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(C,{}),e.jsx("h3",{children:"Cheat sheet playground"})]}),e.jsx(r.SnippetGrid,{children:p.map(o=>{const s=c===o.key;return e.jsxs(r.SnippetCard,{children:[e.jsxs(r.SnippetTop,{children:[e.jsxs("div",{children:[e.jsx(r.SnippetTitle,{children:o.title}),e.jsx(r.SnippetHint,{children:o.hint})]}),e.jsxs(r.CopyBtn,{type:"button",onClick:()=>x(o.code,o.key),title:s?"Copied":"Copy",children:[s?e.jsx(l,{}):e.jsx(S,{}),s?"Copied":"Copy"]})]}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:o.code})})]},o.key)})})]}),e.jsx(r.FooterNote,{children:"Cloud is powerful because everything is programmable. Treat infrastructure like code, keep permissions tight, and always watch costs."})]})]})};export{z as default};
