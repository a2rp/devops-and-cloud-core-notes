import{c as o,r as a,j as e,e as h,a as m,b as g,k as u,i as l,A as v,y as b,m as f,B as j,C as y,p as k,x as w,q as C}from"./index-J2ZlUx8T.js";const r={Wrapper:o.div`
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
    `},T=()=>{const[t,c]=a.useState(!0),[d,s]=a.useState(""),p=a.useMemo(()=>[{key:"whatIs",title:"What is a container",hint:"Process with isolation",code:`# A container is not a VM
# It is a process running on your host OS
# With isolation and limits

# View running containers
docker ps`},{key:"lifecycle",title:"Container lifecycle",hint:"run, stop, start, rm",code:`# Run a container
docker run --name demo-nginx -p 8080:80 nginx

# Stop and start
docker stop demo-nginx
docker start demo-nginx

# Remove (container must be stopped)
docker rm demo-nginx`},{key:"execLogs",title:"Inspect, logs, exec",hint:"Debug like a pro",code:`# See logs
docker logs demo-nginx

# Enter container shell
docker exec -it demo-nginx sh

# Inspect config
docker inspect demo-nginx | head`},{key:"resources",title:"Resource limits",hint:"CPU and memory limits",code:`# Limit CPU and memory
docker run --name limited   --cpus="0.5"   --memory="256m"   -p 8081:80 nginx`},{key:"volumes",title:"Volumes",hint:"Persist data outside container",code:`# Named volume
docker volume create app-data

docker run --name demo-db   -v app-data:/var/lib/data   alpine sh -c "echo hello > /var/lib/data/file.txt && sleep 9999"

# Data stays even if container is removed`},{key:"networks",title:"Networking basics",hint:"Container to container communication",code:`# Create a user network
docker network create app-net

# Run two containers on same network
docker run -d --name api --network app-net nginx
docker run -it --rm --network app-net alpine sh

# From alpine shell you can hit:
# wget -qO- http://api`},{key:"cleanup",title:"Cleanup commands",hint:"Remove unused stuff safely",code:`# Remove stopped containers
docker container prune

# Remove unused images
docker image prune

# Remove unused networks
docker network prune`}],[]),x=async(i,n)=>{try{await navigator.clipboard.writeText(i),s(n),window.setTimeout(()=>s(""),900)}catch{s("")}};return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Header,{onClick:()=>c(i=>!i),role:"button",tabIndex:0,children:[e.jsxs(r.Title,{children:[e.jsx(h,{}),"Containers",e.jsx(r.Badge,{children:"Isolation without a VM"})]}),e.jsx(r.Toggle,{"aria-hidden":"true",children:t?e.jsx(m,{}):e.jsx(g,{})})]}),!t&&e.jsxs(r.Preview,{children:[e.jsx(r.PreviewLine,{children:"Containers are lightweight isolated environments for running apps."}),e.jsx(r.PreviewLine,{children:"They are processes with isolation and resource limits, not full virtual machines."})]}),t&&e.jsxs(r.Content,{children:[e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(u,{}),e.jsx("h3",{children:"What is a container"})]}),e.jsx(r.Para,{children:"A container is a process running on your host operating system, but it feels like its own small machine. It gets isolation for filesystem, network, and process view. It can also have CPU and memory limits."}),e.jsxs(r.Note,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Beginner mental model"}),e.jsx(r.NoteText,{children:"A container is like a sandbox for an app. Same host kernel, but separated view and controlled resources."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(v,{}),e.jsx("h3",{children:"Why containers are fast"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"No full OS per app"})," - containers share the host kernel"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Small images"})," - ship only what app needs"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Quick start"})," - starting a process is faster than booting a VM"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"VM vs container (simple)"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"VM - includes full guest OS, slower boot, heavier"}),e.jsx("li",{children:"Container - uses host OS kernel, fast start, lighter"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(b,{}),e.jsx("h3",{children:"Isolation basics"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Process isolation"})," - container sees its own processes"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Filesystem isolation"})," - container gets its own file tree"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Network isolation"})," - container has its own network namespace"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Resource limits"})," - container can be limited to specific CPU and RAM"]})]}),e.jsxs(r.Warn,{children:[e.jsx(f,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Security note"}),e.jsx(r.WarnText,{children:"Containers are not perfect security boundaries like VMs. Use least privilege, avoid running as root, and keep images minimal."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(j,{}),e.jsx("h3",{children:"Data persistence - volumes"})]}),e.jsx(r.Para,{children:"Containers are designed to be disposable. If you remove a container, its internal writable layer is gone. For data you want to keep, use volumes."}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Volume concept"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Without volume - data disappears when container is deleted"}),e.jsx("li",{children:"With volume - data stays on host-managed storage"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(y,{}),e.jsx("h3",{children:"Networking - how containers talk"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Port mapping"})," - expose container port to host, example -p 8080:80"]}),e.jsxs("li",{children:[e.jsx("b",{children:"User networks"})," - containers can resolve each other by name"]}),e.jsxs("li",{children:[e.jsx("b",{children:"DNS inside Docker"})," - container name becomes hostname on the same network"]})]}),e.jsxs(r.Note,{children:[e.jsx(k,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Common beginner confusion"}),e.jsx(r.NoteText,{children:'"localhost" inside a container means the container itself, not your host machine.'})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(w,{}),e.jsx("h3",{children:"Command playground"})]}),e.jsx(r.SnippetGrid,{children:p.map(i=>{const n=d===i.key;return e.jsxs(r.SnippetCard,{children:[e.jsxs(r.SnippetTop,{children:[e.jsxs("div",{children:[e.jsx(r.SnippetTitle,{children:i.title}),e.jsx(r.SnippetHint,{children:i.hint})]}),e.jsxs(r.CopyBtn,{type:"button",onClick:()=>x(i.code,i.key),title:n?"Copied":"Copy",children:[n?e.jsx(l,{}):e.jsx(C,{}),n?"Copied":"Copy"]})]}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:i.code})})]},i.key)})})]}),e.jsx(r.FooterNote,{children:"Think of containers as a repeatable runtime package. If your app runs in a container, it becomes much easier to deploy the same way everywhere."})]})]})};export{T as default};
