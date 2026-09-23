import{c as o,r as t,j as e,s as m,a as v,b,E as g,i as l,g as c,k as u,T as f,f as j,p as y,A as k,m as T,y as w,x as S,q as L}from"./index-J2ZlUx8T.js";const r={Wrapper:o.div`
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
    `},H=()=>{const[a,d]=t.useState(!0),[p,n]=t.useState(""),x=t.useMemo(()=>[{key:"whyLb",title:"Why load balancing exists",hint:"Core problems it solves",code:`# Load balancer helps with:
# - scale: distribute traffic across multiple servers
# - reliability: remove unhealthy servers automatically
# - performance: avoid one server becoming hotspot
# - upgrades: deploy new versions without downtime`},{key:"l4l7",title:"Layer 4 vs Layer 7",hint:"TCP vs HTTP understanding",code:`# Layer 4 load balancer (L4)
# - works at TCP or UDP level
# - routes based on IP and port
# - fast, simple, protocol agnostic

# Layer 7 load balancer (L7)
# - works at HTTP level
# - can route based on host, path, headers, cookies
# - can do TLS termination and redirects`},{key:"healthChecks",title:"Health checks",hint:"How LB detects broken servers",code:`# Health check:
# - LB sends periodic request to backend
# - if fails N times, backend removed from rotation
# - when it recovers, backend re-added

# Example:
# GET /health -> 200 OK`},{key:"algorithms",title:"Common balancing algorithms",hint:"How traffic is distributed",code:`# Common algorithms:
# - round robin: cycle through servers
# - least connections: choose server with fewest active connections
# - ip hash: same client IP goes to same backend (sticky-ish)`},{key:"stickySessions",title:"Sticky sessions",hint:"When you need same server",code:`# Sticky sessions:
# - keep a user on same backend
# - done using cookies or hashing

# Better practice:
# keep app stateless and store sessions in shared store (redis, db)`},{key:"ha",title:"High availability setup",hint:"Avoid single point of failure",code:`# Good HA pattern:
# - multiple backend servers
# - deploy across multiple AZs
# - load balancer across AZs
# - autoscaling group for backends`},{key:"tlsTermination",title:"TLS termination",hint:"HTTPS handling",code:`# TLS termination:
# - client uses HTTPS to load balancer
# - load balancer decrypts traffic
# - forwards to backend via HTTP or HTTPS

# Benefit:
# - simpler cert management
# - offload CPU from backend`}],[]),h=async(i,s)=>{try{await navigator.clipboard.writeText(i),n(s),window.setTimeout(()=>n(""),900)}catch{n("")}};return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Header,{onClick:()=>d(i=>!i),role:"button",tabIndex:0,children:[e.jsxs(r.Title,{children:[e.jsx(m,{}),"Load balancer",e.jsx(r.Badge,{children:"Distribute traffic and add reliability"})]}),e.jsx(r.Toggle,{"aria-hidden":"true",children:a?e.jsx(v,{}):e.jsx(b,{})})]}),!a&&e.jsxs(r.Preview,{children:[e.jsx(r.PreviewLine,{children:"Load balancer sits in front of servers and spreads traffic across them."}),e.jsx(r.PreviewLine,{children:"Learn L4 vs L7, health checks, routing, TLS termination, and high availability patterns."})]}),a&&e.jsxs(r.Content,{children:[e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(g,{}),e.jsx("h3",{children:"What is a load balancer"})]}),e.jsx(r.Para,{children:"A load balancer is a system that receives incoming traffic and forwards it to one of multiple backend servers. It helps your app scale and stay online when some servers fail."}),e.jsxs(r.Note,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Beginner mental model"}),e.jsx(r.NoteText,{children:"Load balancer is like a traffic police officer. It directs each incoming request to a healthy server."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(c,{}),e.jsx("h3",{children:"Why load balancing is needed"})]}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"One server cannot handle infinite traffic"}),e.jsx("li",{children:"If one server crashes, your app should still work"}),e.jsx("li",{children:"You want to deploy updates without downtime"}),e.jsx("li",{children:"You want better latency by spreading load"})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Simple example"}),e.jsx(r.Para,{children:"Without load balancer, all users hit one server. If it dies, website is down. With load balancer, users are routed to many servers."})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(u,{}),e.jsx("h3",{children:"Layer 4 vs Layer 7"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Layer 4"})," - routes based on TCP or UDP info like IP and port"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Layer 7"})," - understands HTTP and can route by host, path, headers"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Routing examples"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:'L7 - "/api" goes to backend service, "/images" goes to static service'}),e.jsx("li",{children:'L7 - "admin.example.com" goes to admin servers'}),e.jsx("li",{children:"L4 - any TCP connection on port 443 gets forwarded to a backend"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(f,{}),e.jsx("h3",{children:"Health checks"})]}),e.jsx(r.Para,{children:"Health checks are periodic checks done by the load balancer to confirm a backend server is alive. Unhealthy servers are removed from traffic automatically."}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Health endpoint should be fast and stable"}),e.jsx("li",{children:"Return 200 when healthy"}),e.jsx("li",{children:"Do not run heavy DB queries inside health check"})]}),e.jsxs(r.Note,{children:[e.jsx(j,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Production habit"}),e.jsx(r.NoteText,{children:'Use "readiness" checks for traffic readiness and "liveness" checks for process alive. Keep them separate when possible.'})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(y,{}),e.jsx("h3",{children:"Balancing algorithms"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Round robin"})," - request goes to next server in order"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Least connections"})," - choose server with fewer active connections"]}),e.jsxs("li",{children:[e.jsx("b",{children:"IP hash"})," - consistent mapping based on client IP"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"When least connections helps"}),e.jsx(r.Para,{children:"If some requests are slow, least connections avoids sending more traffic to already busy servers."})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(k,{}),e.jsx("h3",{children:"Sticky sessions"})]}),e.jsx(r.Para,{children:"Sticky sessions means the same user is sent to the same backend server repeatedly. It helps when your app stores session in memory, but it reduces flexibility."}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Works using cookies or hashing"}),e.jsx("li",{children:"Can cause uneven load if some users are heavy"}),e.jsx("li",{children:"Better approach is stateless app and shared session store"})]}),e.jsxs(r.Warn,{children:[e.jsx(T,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Scaling trap"}),e.jsx(r.WarnText,{children:"If your app depends on sticky sessions, autoscaling and rolling deploys become harder. Prefer stateless design."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(w,{}),e.jsx("h3",{children:"TLS termination and security"})]}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Load balancer can handle HTTPS certificates"}),e.jsx("li",{children:"Backends can run plain HTTP inside private network"}),e.jsx("li",{children:"Centralized TLS makes cert rotation easier"})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Security note"}),e.jsx(r.Para,{children:"Even if you use HTTP from load balancer to backend, keep it inside private network only. For sensitive systems, use HTTPS all the way."})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(c,{}),e.jsx("h3",{children:"High availability pattern"})]}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Run multiple backend servers"}),e.jsx("li",{children:"Spread backends across multiple AZs"}),e.jsx("li",{children:"Use autoscaling group to replace unhealthy servers"}),e.jsx("li",{children:"Use load balancer to route only healthy targets"})]}),e.jsxs(r.Note,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Key idea"}),e.jsx(r.NoteText,{children:"Load balancer removes single server as a single point of failure."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(S,{}),e.jsx("h3",{children:"Cheat sheet playground"})]}),e.jsx(r.SnippetGrid,{children:x.map(i=>{const s=p===i.key;return e.jsxs(r.SnippetCard,{children:[e.jsxs(r.SnippetTop,{children:[e.jsxs("div",{children:[e.jsx(r.SnippetTitle,{children:i.title}),e.jsx(r.SnippetHint,{children:i.hint})]}),e.jsxs(r.CopyBtn,{type:"button",onClick:()=>h(i.code,i.key),title:s?"Copied":"Copy",children:[s?e.jsx(l,{}):e.jsx(L,{}),s?"Copied":"Copy"]})]}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:i.code})})]},i.key)})})]}),e.jsx(r.FooterNote,{children:"Load balancer is your reliability and scaling gate. If your app is stateless and health checks are solid, scaling becomes easy."})]})]})};export{H as default};
