import{c as o,r as a,j as e,H as g,a as u,b as v,E as m,i as l,k as b,g as f,p as j,Q as y,m as c,f as k,t as T,y as S,x as w,q as P}from"./index-J2ZlUx8T.js";const r={Wrapper:o.div`
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
    `},F=()=>{const[s,d]=a.useState(!0),[p,n]=a.useState(""),x=a.useMemo(()=>[{key:"reverseVsForward",title:"Reverse proxy vs forward proxy",hint:"Direction matters",code:`# Reverse proxy:
# - sits in front of servers
# - clients talk to proxy
# - proxy forwards to backend servers

# Forward proxy:
# - sits in front of clients
# - clients talk to proxy to reach internet
# - used in offices, VPN, filtering`},{key:"routing",title:"Request routing",hint:"Path based routing idea",code:`# Reverse proxy can route requests like:
# - /api -> backend service
# - /admin -> admin service
# - / -> frontend static app`},{key:"tlsTermination",title:"TLS termination",hint:"HTTPS handled at proxy",code:`# TLS termination:
# - browser uses HTTPS with proxy
# - proxy decrypts traffic
# - forwards to backend on private network
# Benefit:
# - single place to manage certificates`},{key:"headers",title:"Important proxy headers",hint:"Real client IP and protocol",code:`# Common headers a reverse proxy sets:
# - X-Forwarded-For: original client IP
# - X-Forwarded-Proto: http or https
# - Host: original host

# Backend should trust these only if proxy is trusted`},{key:"caching",title:"Caching concept",hint:"Speed up repeated content",code:`# Reverse proxy can cache responses:
# - static files
# - images
# - GET API responses (careful)

# Benefit:
# - reduces backend load
# - improves latency`},{key:"rateLimit",title:"Rate limiting",hint:"Protect from abuse",code:`# Reverse proxy can limit requests:
# - requests per IP per minute
# - burst control

# Benefit:
# - helps against basic abuse and DDoS patterns`},{key:"compression",title:"Compression",hint:"Reduce bandwidth",code:`# Proxy can enable gzip or brotli:
# - compress HTML, CSS, JS, JSON
# - not useful for already compressed images
# Benefit:
# - faster page loads`}],[]),h=async(i,t)=>{try{await navigator.clipboard.writeText(i),n(t),window.setTimeout(()=>n(""),900)}catch{n("")}};return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Header,{onClick:()=>d(i=>!i),role:"button",tabIndex:0,children:[e.jsxs(r.Title,{children:[e.jsx(g,{}),"Reverse proxy",e.jsx(r.Badge,{children:"Routing, TLS, caching, protection"})]}),e.jsx(r.Toggle,{"aria-hidden":"true",children:s?e.jsx(u,{}):e.jsx(v,{})})]}),!s&&e.jsxs(r.Preview,{children:[e.jsx(r.PreviewLine,{children:"Reverse proxy sits in front of your backend services and forwards requests."}),e.jsx(r.PreviewLine,{children:"It helps with routing, HTTPS, caching, rate limiting, and hiding internal servers."})]}),s&&e.jsxs(r.Content,{children:[e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(m,{}),e.jsx("h3",{children:"What is a reverse proxy"})]}),e.jsx(r.Para,{children:"A reverse proxy is a server that accepts requests from clients and then forwards them to one or more backend servers. The client thinks it is talking to one server, but the proxy decides where to send the request."}),e.jsxs(r.Note,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Beginner mental model"}),e.jsx(r.NoteText,{children:"Reverse proxy is a front desk. Users talk to the front desk, and the front desk sends them to the correct room."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(b,{}),e.jsx("h3",{children:"Reverse proxy vs load balancer"})]}),e.jsx(r.Para,{children:"These often overlap. A reverse proxy can also load balance. A load balancer can also behave like a reverse proxy. The key idea is what features you enable."}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Reverse proxy focus"})," - routing, headers, TLS termination, caching, rate limiting"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Load balancer focus"})," - distribute traffic, health checks, high availability"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Common production setup"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Cloud load balancer at edge"}),e.jsx("li",{children:"Nginx reverse proxy inside VPC"}),e.jsx("li",{children:"Multiple backend services behind it"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(f,{}),e.jsx("h3",{children:"Routing requests"})]}),e.jsx(r.Para,{children:"Reverse proxy can route based on host and path. This allows multiple services to run behind one public domain."}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Host based routing - api.example.com goes to API service"}),e.jsx("li",{children:"Path based routing - /api goes to backend, / goes to frontend"})]}),e.jsxs(r.Note,{children:[e.jsx(j,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Why this is useful"}),e.jsx(r.NoteText,{children:"It hides internal services and gives a clean public entry point."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(y,{}),e.jsx("h3",{children:"TLS termination and SSL"})]}),e.jsx(r.Para,{children:"TLS termination means HTTPS is handled at the proxy. The proxy decrypts traffic and forwards it to backends. This makes certificate management easier."}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"One place to manage certificates"}),e.jsx("li",{children:"Backends can run HTTP inside private network"}),e.jsx("li",{children:"Proxy can enforce HTTPS redirects"})]}),e.jsxs(r.Warn,{children:[e.jsx(c,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Security note"}),e.jsx(r.WarnText,{children:"Trust forwarded headers only from your trusted proxy. Do not accept X-Forwarded-For from random clients."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(k,{}),e.jsx("h3",{children:"Headers and real client IP"})]}),e.jsx(r.Para,{children:"Because proxy sits between client and backend, backend needs headers to know original client IP and protocol. Common headers are X-Forwarded-For and X-Forwarded-Proto."}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Typical use"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Logging real client IP"}),e.jsx("li",{children:"Generating correct redirects based on https"}),e.jsx("li",{children:"Security checks and rate limiting"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(T,{}),e.jsx("h3",{children:"Caching and compression"})]}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Caching - store responses so backend is not hit every time"}),e.jsx("li",{children:"Compression - gzip or brotli to reduce payload size"}),e.jsx("li",{children:"Best for static assets and GET responses"})]}),e.jsxs(r.Note,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Good practice"}),e.jsx(r.NoteText,{children:"Cache public static content aggressively, but be careful caching personalized API responses."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(S,{}),e.jsx("h3",{children:"Protection features"})]}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Rate limiting - stop abuse by limiting requests per IP"}),e.jsx("li",{children:"Request size limits - block huge payload attacks"}),e.jsx("li",{children:"Basic WAF style rules - block suspicious patterns"})]}),e.jsxs(r.Warn,{children:[e.jsx(c,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Reality check"}),e.jsx(r.WarnText,{children:"Reverse proxy helps, but serious DDoS protection is usually handled by CDN or cloud edge services."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(w,{}),e.jsx("h3",{children:"Cheat sheet playground"})]}),e.jsx(r.SnippetGrid,{children:x.map(i=>{const t=p===i.key;return e.jsxs(r.SnippetCard,{children:[e.jsxs(r.SnippetTop,{children:[e.jsxs("div",{children:[e.jsx(r.SnippetTitle,{children:i.title}),e.jsx(r.SnippetHint,{children:i.hint})]}),e.jsxs(r.CopyBtn,{type:"button",onClick:()=>h(i.code,i.key),title:t?"Copied":"Copy",children:[t?e.jsx(l,{}):e.jsx(P,{}),t?"Copied":"Copy"]})]}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:i.code})})]},i.key)})})]}),e.jsx(r.FooterNote,{children:"Reverse proxy is your control layer between internet and your services. It makes routing clean, security tighter, and operations simpler."})]})]})};export{F as default};
