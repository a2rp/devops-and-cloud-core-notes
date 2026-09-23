import{c as o,r as s,j as e,U as f,a as b,b as y,E as j,i as l,z as k,g as w,H as C,m as c,t as S,p as T,y as z,x as p,q as x}from"./index-J2ZlUx8T.js";const r={Wrapper:o.div`
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
    `,CmdGrid:o.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,CmdCard:o.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
    `,CmdTop:o.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,CmdTitle:o.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
    `,FooterNote:o.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},N=()=>{const[n,h]=s.useState(!0),[g,a]=s.useState(""),m=s.useMemo(()=>[{key:"static",title:"Serve static files",hint:"Basic web server",code:`# Example concept:
# - Nginx listens on port 80
# - serves files from a folder

server {
  listen 80;
  server_name example.com;

  root /var/www/site;
  index index.html;
}`},{key:"reverseProxy",title:"Reverse proxy to Node app",hint:"proxy_pass basics",code:`# Proxy incoming traffic to backend running on 3000

server {
  listen 80;
  server_name api.example.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
  }
}`},{key:"forwardHeaders",title:"Forward important headers",hint:"Real IP and protocol",code:`# Common proxy headers for backend apps

location / {
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;

  proxy_pass http://127.0.0.1:3000;
}`},{key:"loadBalance",title:"Load balancing",hint:"Multiple backends",code:`# Upstream group of servers
upstream app_backend {
  server 10.0.1.10:3000;
  server 10.0.1.11:3000;
  server 10.0.1.12:3000;
}

server {
  listen 80;

  location / {
    proxy_pass http://app_backend;
  }
}`},{key:"gzip",title:"Gzip compression",hint:"Reduce payload size",code:`# Enable gzip for text responses

gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
gzip_min_length 1024;`},{key:"rateLimit",title:"Rate limiting",hint:"Basic abuse protection",code:`# Limit requests per IP

limit_req_zone $binary_remote_addr zone=perip:10m rate=10r/s;

server {
  location / {
    limit_req zone=perip burst=20 nodelay;
    proxy_pass http://127.0.0.1:3000;
  }
}`},{key:"health",title:"Health check endpoint",hint:"Simple monitoring",code:`# Serve a health response without touching backend

location = /health {
  add_header Content-Type text/plain;
  return 200 "ok";
}`}],[]),v=s.useMemo(()=>[{key:"installUbuntu",title:"Install on Ubuntu",code:`sudo apt update
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx`},{key:"status",title:"Check status",code:"sudo systemctl status nginx"},{key:"testConfig",title:"Test config",code:"sudo nginx -t"},{key:"reload",title:"Reload safely",code:"sudo systemctl reload nginx"},{key:"logs",title:"View logs",code:`# access log
sudo tail -f /var/log/nginx/access.log

# error log
sudo tail -f /var/log/nginx/error.log`}],[]),d=async(i,u)=>{try{await navigator.clipboard.writeText(i),a(u),window.setTimeout(()=>a(""),900)}catch{a("")}},t=i=>g===i;return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Header,{onClick:()=>h(i=>!i),role:"button",tabIndex:0,children:[e.jsxs(r.Title,{children:[e.jsx(f,{}),"Nginx",e.jsx(r.Badge,{children:"Web server and reverse proxy"})]}),e.jsx(r.Toggle,{"aria-hidden":"true",children:n?e.jsx(b,{}):e.jsx(y,{})})]}),!n&&e.jsxs(r.Preview,{children:[e.jsx(r.PreviewLine,{children:"Nginx is a high performance web server used for static hosting, reverse proxy, and load balancing."}),e.jsx(r.PreviewLine,{children:"Learn server blocks, proxy_pass, headers, gzip, rate limiting, and safe reload workflow."})]}),n&&e.jsxs(r.Content,{children:[e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(j,{}),e.jsx("h3",{children:"What is Nginx"})]}),e.jsx(r.Para,{children:"Nginx is a web server and reverse proxy. It can serve static files, forward requests to backend apps, load balance across servers, and act as a control layer between internet and your services."}),e.jsxs(r.Note,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Beginner mental model"}),e.jsx(r.NoteText,{children:"Nginx is the gatekeeper at the edge. It receives requests, then either serves files or forwards traffic to your app."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(k,{}),e.jsx("h3",{children:"Key terms"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"server block"})," - a virtual host config for a domain or port"]}),e.jsxs("li",{children:[e.jsx("b",{children:"location"})," - routing rules inside a server block"]}),e.jsxs("li",{children:[e.jsx("b",{children:"root"})," - folder path used for static files"]}),e.jsxs("li",{children:[e.jsx("b",{children:"proxy_pass"})," - forwards request to backend"]}),e.jsxs("li",{children:[e.jsx("b",{children:"upstream"})," - group of backend servers for load balancing"]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(w,{}),e.jsx("h3",{children:"Serve static files"})]}),e.jsx(r.Para,{children:"Static hosting means Nginx directly serves files from disk. This is very fast for HTML, CSS, JS, images."}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Typical use cases"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Documentation sites"}),e.jsx("li",{children:"Frontend build output, example Vite dist folder"}),e.jsx("li",{children:"Serving images and downloads"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(C,{}),e.jsx("h3",{children:"Reverse proxy to backend"})]}),e.jsx(r.Para,{children:"Reverse proxy means Nginx forwards the request to your backend app running on another port or another server. This allows you to keep backend private and expose only Nginx to internet."}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Backend can run on 127.0.0.1:3000"}),e.jsx("li",{children:"Nginx listens on 80 and 443"}),e.jsx("li",{children:"Nginx adds headers and manages TLS"})]}),e.jsxs(r.Warn,{children:[e.jsx(c,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Common bug"}),e.jsx(r.WarnText,{children:"If you do not set forwarded headers, backend may not know the real client IP or that request was https."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(S,{}),e.jsx("h3",{children:"Compression and caching"})]}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Gzip compresses text content like HTML, JS, JSON"}),e.jsx("li",{children:"Improves load times and reduces bandwidth"}),e.jsx("li",{children:"Caching can reduce backend load for repeat content"})]}),e.jsxs(r.Note,{children:[e.jsx(T,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Quick rule"}),e.jsx(r.NoteText,{children:"Compress text. Do not compress already compressed files like jpg, png, mp4."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(z,{}),e.jsx("h3",{children:"Rate limiting and safety"})]}),e.jsx(r.Para,{children:"Nginx can throttle abusive traffic. This is not full DDoS protection, but it helps for basic patterns."}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Limit requests per IP"}),e.jsx("li",{children:"Block huge payload sizes"}),e.jsx("li",{children:"Return fast response for health checks"})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(p,{}),e.jsx("h3",{children:"Commands you will use daily"})]}),e.jsx(r.CmdGrid,{children:v.map(i=>e.jsxs(r.CmdCard,{children:[e.jsxs(r.CmdTop,{children:[e.jsx(r.CmdTitle,{children:i.title}),e.jsxs(r.CopyBtn,{type:"button",onClick:()=>d(i.code,i.key),title:t(i.key)?"Copied":"Copy",children:[t(i.key)?e.jsx(l,{}):e.jsx(x,{}),t(i.key)?"Copied":"Copy"]})]}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:i.code})})]},i.key))})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(p,{}),e.jsx("h3",{children:"Config cheat sheet"})]}),e.jsx(r.SnippetGrid,{children:m.map(i=>e.jsxs(r.SnippetCard,{children:[e.jsxs(r.SnippetTop,{children:[e.jsxs("div",{children:[e.jsx(r.SnippetTitle,{children:i.title}),e.jsx(r.SnippetHint,{children:i.hint})]}),e.jsxs(r.CopyBtn,{type:"button",onClick:()=>d(i.code,i.key),title:t(i.key)?"Copied":"Copy",children:[t(i.key)?e.jsx(l,{}):e.jsx(x,{}),t(i.key)?"Copied":"Copy"]})]}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:i.code})})]},i.key))}),e.jsxs(r.Warn,{style:{marginTop:12},children:[e.jsx(c,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Always test config before reload"}),e.jsx(r.WarnText,{children:'Run "nginx -t" first. Reload only if test passes. This prevents accidental downtime.'})]})]})]}),e.jsx(r.FooterNote,{children:"Nginx is popular because it is fast and stable. Learn server blocks, proxy headers, and safe reload workflow and you can run real production setups."})]})]})};export{N as default};
