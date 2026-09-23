import{c as i,r as a,j as e,z as h,a as g,b as m,e as u,i as l,k as b,m as v,p as f,t as j,D as y,x as k,q as C}from"./index-J2ZlUx8T.js";const r={Wrapper:i.div`
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
    `},T=()=>{const[t,d]=a.useState(!0),[c,s]=a.useState(""),p=a.useMemo(()=>[{key:"simpleNode",title:"Simple Node app Dockerfile",hint:"Good beginner start",code:`# Dockerfile

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]`},{key:"prodNode",title:"Production Node build",hint:"Build once, run light",code:`# Dockerfile (production style)

FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`},{key:"dockerIgnore",title:".dockerignore example",hint:"Smaller builds, faster",code:`# .dockerignore

node_modules
dist
.git
.vscode
.env
npm-debug.log`},{key:"buildRun",title:"Build and run commands",hint:"Use these every time",code:`# Build image
docker build -t my-app:1.0 .

# Run container
docker run --name my-app -p 8080:80 my-app:1.0

# See logs
docker logs my-app`},{key:"cmdEntry",title:"CMD vs ENTRYPOINT",hint:"Common interview question",code:`# CMD sets default command
CMD ["node", "server.js"]

# ENTRYPOINT makes container behave like a fixed executable
ENTRYPOINT ["node", "server.js"]

# If you use both, ENTRYPOINT is fixed and CMD becomes default args`},{key:"env",title:"ENV and ARG",hint:"Build time vs runtime",code:`# Build time variable
ARG NODE_ENV=production

# Runtime variable
ENV NODE_ENV=$NODE_ENV

# Use:
# docker build --build-arg NODE_ENV=production -t app .`}],[]),x=async(o,n)=>{try{await navigator.clipboard.writeText(o),s(n),window.setTimeout(()=>s(""),900)}catch{s("")}};return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Header,{onClick:()=>d(o=>!o),role:"button",tabIndex:0,children:[e.jsxs(r.Title,{children:[e.jsx(h,{}),"Dockerfile",e.jsx(r.Badge,{children:"Build images the right way"})]}),e.jsx(r.Toggle,{"aria-hidden":"true",children:t?e.jsx(g,{}):e.jsx(m,{})})]}),!t&&e.jsxs(r.Preview,{children:[e.jsx(r.PreviewLine,{children:"A Dockerfile is a step-by-step recipe to build a Docker image."}),e.jsx(r.PreviewLine,{children:"Learn layers, caching, COPY vs ADD, CMD vs ENTRYPOINT, and multi-stage builds."})]}),t&&e.jsxs(r.Content,{children:[e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(u,{}),e.jsx("h3",{children:"What is a Dockerfile"})]}),e.jsx(r.Para,{children:"A Dockerfile is a text file that contains instructions to build a Docker image. Each instruction creates a layer. Docker caches layers, so rebuilds can be fast when written correctly."}),e.jsxs(r.Note,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Beginner mental model"}),e.jsx(r.NoteText,{children:"Dockerfile is like a cooking recipe. Image is the prepared dish. Container is the dish being served and running."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(b,{}),e.jsx("h3",{children:"Layers and caching"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Each line"})," in Dockerfile becomes a layer"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Docker caches"})," layers if inputs did not change"]}),e.jsxs("li",{children:["Put ",e.jsx("b",{children:"stable steps first"})," to reuse cache"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Best practice example"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Copy package.json first"}),e.jsx("li",{children:"Install dependencies"}),e.jsx("li",{children:"Copy remaining files"})]})]}),e.jsxs(r.Warn,{children:[e.jsx(v,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Common beginner mistake"}),e.jsx(r.WarnText,{children:"If you copy the full project before installing dependencies, any file change breaks cache and makes builds slow."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(f,{}),e.jsx("h3",{children:"Important instructions"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"FROM"})," - base image, example node:20-alpine"]}),e.jsxs("li",{children:[e.jsx("b",{children:"WORKDIR"})," - sets working directory inside image"]}),e.jsxs("li",{children:[e.jsx("b",{children:"COPY"})," - copies files into image (use this most of the time)"]}),e.jsxs("li",{children:[e.jsx("b",{children:"RUN"})," - runs commands during build time"]}),e.jsxs("li",{children:[e.jsx("b",{children:"EXPOSE"})," - documents the port (does not publish port by itself)"]}),e.jsxs("li",{children:[e.jsx("b",{children:"CMD"})," - default command to run when container starts"]}),e.jsxs("li",{children:[e.jsx("b",{children:"ENTRYPOINT"})," - fixed executable behavior"]})]}),e.jsxs(r.Note,{children:[e.jsx(j,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"COPY vs ADD"}),e.jsx(r.NoteText,{children:"Use COPY. ADD has extra features (like auto extracting archives) and is rarely needed."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(y,{}),e.jsx("h3",{children:"Multi-stage builds"})]}),e.jsx(r.Para,{children:"Multi-stage builds let you build your app in one stage and copy only the final output into a smaller runtime image. This keeps production images small and safer."}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Why it matters"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Smaller image size"}),e.jsx("li",{children:"Faster deploy and pull"}),e.jsx("li",{children:"Less attack surface"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(k,{}),e.jsx("h3",{children:"Command playground"})]}),e.jsx(r.SnippetGrid,{children:p.map(o=>{const n=c===o.key;return e.jsxs(r.SnippetCard,{children:[e.jsxs(r.SnippetTop,{children:[e.jsxs("div",{children:[e.jsx(r.SnippetTitle,{children:o.title}),e.jsx(r.SnippetHint,{children:o.hint})]}),e.jsxs(r.CopyBtn,{type:"button",onClick:()=>x(o.code,o.key),title:n?"Copied":"Copy",children:[n?e.jsx(l,{}):e.jsx(C,{}),n?"Copied":"Copy"]})]}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:o.code})})]},o.key)})})]}),e.jsx(r.FooterNote,{children:"Write Dockerfiles like you write clean code. Good ordering gives fast builds. Multi-stage gives small and secure production images."})]})]})};export{T as default};
