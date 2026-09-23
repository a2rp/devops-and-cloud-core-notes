import{c as o,r as s,j as e,C as g,a as m,b as u,E as b,i as c,n as v,m as l,e as k,G as f,p as j,y as w,x as y,q as S}from"./index-J2ZlUx8T.js";const r={Wrapper:o.div`
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
    `},C=()=>{const[i,d]=s.useState(!0),[p,a]=s.useState(""),x=s.useMemo(()=>[{key:"ports",title:"Ports and port mapping",hint:"Host port to container port",code:`# Run nginx in container and expose to host
docker run --name web -p 8080:80 nginx

# Now open in browser
# http://localhost:8080

# Format:
# -p <hostPort>:<containerPort>`},{key:"bridge",title:"Bridge network",hint:"Default Docker network type",code:`# See Docker networks
docker network ls

# Inspect default bridge
docker network inspect bridge | head`},{key:"userNet",title:"User defined network",hint:"Best for multi containers",code:`docker network create app-net

docker run -d --name api --network app-net nginx
docker run -d --name web --network app-net nginx

# Containers on same user network can reach by name:
# http://api
# http://web`},{key:"dns",title:"DNS inside containers",hint:"Name becomes hostname",code:`# Start a shell container on the same network
docker run -it --rm --network app-net alpine sh

# Inside shell, resolve name:
# ping api
# wget -qO- http://api`},{key:"localhostTrap",title:"The localhost confusion",hint:"Inside container, localhost is the container",code:`# Inside container:
# localhost means the container itself, not your host

# To reach host from container (Docker Desktop):
# host.docker.internal

# Example inside container:
# curl http://host.docker.internal:5173`},{key:"inspect",title:"Inspect IP and networks",hint:"Find container IP quickly",code:`# Container IP address
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' api

# View all networks attached
docker inspect api | head`},{key:"curlTools",title:"Useful network tools",hint:"Quick debugging commands",code:`# Host machine tools
curl -I http://localhost:8080
ping 8.8.8.8
nslookup google.com

# In linux containers you may need:
# apk add curl bind-tools iputils`}],[]),h=async(n,t)=>{try{await navigator.clipboard.writeText(n),a(t),window.setTimeout(()=>a(""),900)}catch{a("")}};return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Header,{onClick:()=>d(n=>!n),role:"button",tabIndex:0,children:[e.jsxs(r.Title,{children:[e.jsx(g,{}),"Networking",e.jsx(r.Badge,{children:"Ports - DNS - container links"})]}),e.jsx(r.Toggle,{"aria-hidden":"true",children:i?e.jsx(m,{}):e.jsx(u,{})})]}),!i&&e.jsxs(r.Preview,{children:[e.jsx(r.PreviewLine,{children:"Networking is where most Docker confusion happens."}),e.jsx(r.PreviewLine,{children:"Learn ports, bridge networks, container to container communication, and DNS."})]}),i&&e.jsxs(r.Content,{children:[e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(b,{}),e.jsx("h3",{children:"Networking basics in containers"})]}),e.jsx(r.Para,{children:"Containers have their own network namespace. That means they get their own IP address, routing table, and ports. Docker then connects containers using networks (bridge, host, overlay)."}),e.jsxs(r.Note,{children:[e.jsx(c,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Beginner mental model"}),e.jsx(r.NoteText,{children:"Each container is like a small computer on a private network. Docker is the router that connects them."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(v,{}),e.jsx("h3",{children:"Ports and port mapping"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Container port"})," - port used inside container"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Host port"})," - port on your laptop or server"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Port mapping"})," - connects host port to container port"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Example"}),e.jsx(r.Para,{children:'If nginx listens on port 80 inside container, and you want to access it from host on 8080, you do "-p 8080:80".'})]}),e.jsxs(r.Warn,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Common beginner mistake"}),e.jsx(r.WarnText,{children:'EXPOSE in Dockerfile does not publish ports. It is only documentation. You still need "-p" while running.'})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(k,{}),e.jsx("h3",{children:"Bridge network vs user defined network"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"bridge"})," - default network, basic isolation"]}),e.jsxs("li",{children:[e.jsx("b",{children:"user defined network"})," - recommended for multi-container apps"]}),e.jsx("li",{children:"user networks provide automatic DNS resolution by container name"})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Why user network is better"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:'Containers can reach each other by name like "api"'}),e.jsx("li",{children:"More predictable networking for microservices"}),e.jsx("li",{children:"Easier debugging and separation"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(f,{}),e.jsx("h3",{children:"Container to container communication"})]}),e.jsx(r.Para,{children:'If two containers are on the same Docker network, they can talk to each other using container name as hostname. Example: web container can call api container using "http://api".'}),e.jsxs(r.Note,{children:[e.jsx(j,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Port mapping not needed internally"}),e.jsx(r.NoteText,{children:"Containers talking to each other on the same network use container ports directly. Port mapping is mainly for host to container access."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(w,{}),e.jsx("h3",{children:"The localhost confusion"})]}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:'Inside a container, "localhost" means the container itself'}),e.jsx("li",{children:"Your host machine is a different network namespace"}),e.jsx("li",{children:'On Docker Desktop, use "host.docker.internal" to reach host'})]}),e.jsxs(r.Warn,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Typical bug"}),e.jsx(r.WarnText,{children:'App inside container tries to call "http://localhost:5000" but backend is running on host. Fix: use "http://host.docker.internal:5000" (Docker Desktop) or run both containers on same network.'})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(y,{}),e.jsx("h3",{children:"Command playground"})]}),e.jsx(r.SnippetGrid,{children:x.map(n=>{const t=p===n.key;return e.jsxs(r.SnippetCard,{children:[e.jsxs(r.SnippetTop,{children:[e.jsxs("div",{children:[e.jsx(r.SnippetTitle,{children:n.title}),e.jsx(r.SnippetHint,{children:n.hint})]}),e.jsxs(r.CopyBtn,{type:"button",onClick:()=>h(n.code,n.key),title:t?"Copied":"Copy",children:[t?e.jsx(c,{}):e.jsx(S,{}),t?"Copied":"Copy"]})]}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:n.code})})]},n.key)})})]}),e.jsx(r.FooterNote,{children:"In container networking, always ask two questions: where is the process running and which network namespace is calling it. Once you answer that, ports and hostnames become obvious."})]})]})};export{C as default};
