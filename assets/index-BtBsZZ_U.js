import{c as i,r as n,j as e,O as h,a as u,b,P as g,i as a,z as m,y as j,m as f,Q as v,E as y,K as S,p as k,o as w,f as T,G as C,x as P,q as F}from"./index-ChJ3UoLf.js";const r={Wrapper:i.div`
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
    `},E=()=>{const[s,c]=n.useState(!0),[d,l]=n.useState(""),p=n.useMemo(()=>[{key:"concepts",title:"S3 core concepts",hint:"Bucket, object, key",code:`# S3 basics:
# - Bucket: top level container (must be globally unique name)
# - Object: the file you store
# - Key: object path/name inside bucket, example images/logo.png
# - Prefix: folder-like part of key, example images/
# - Metadata: extra info stored with object`},{key:"publicPrivate",title:"Public vs private",hint:"Default should be private",code:`# Private bucket:
# - only accessible using AWS auth (IAM)
# - best for app uploads and sensitive files

# Public bucket:
# - accessible over internet
# - used for public assets (with strict control)

# Biggest mistake:
# making bucket public accidentally`},{key:"staticWebsite",title:"Static website hosting idea",hint:"Serve HTML, CSS, JS",code:`# S3 can host static websites:
# - upload index.html, assets
# - enable static website hosting
# - set index and error document
# - allow public read or use CloudFront

# Good practice:
# use CloudFront in front for HTTPS and caching`},{key:"lifecycle",title:"Lifecycle policies",hint:"Auto move or delete old files",code:`# Lifecycle policy examples:
# - move logs to cheaper storage after 30 days
# - delete temporary uploads after 7 days
# - expire old backups after 180 days`},{key:"versioning",title:"Versioning",hint:"Protect against accidental deletes",code:`# Versioning keeps multiple versions of same key:
# - helps recover overwritten files
# - helps recover deleted files (delete marker)

# Cost note:
# more versions means more storage cost`},{key:"encryption",title:"Encryption",hint:"Data protection",code:`# Encryption options:
# - SSE-S3: AWS managed keys
# - SSE-KMS: KMS managed keys, more control and audit
# - client side encryption: you encrypt before upload

# Simple default:
# enable SSE-S3 or SSE-KMS`},{key:"presignedUrl",title:"Pre-signed URL concept",hint:"Temporary upload or download link",code:`# Pre-signed URL:
# - a temporary URL with signature
# - allows upload/download without making bucket public
# - expires after set time

# Common use:
# user uploads file directly to S3 from frontend`}],[]),x=async(o,t)=>{try{await navigator.clipboard.writeText(o),l(t),window.setTimeout(()=>l(""),900)}catch{l("")}};return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Header,{onClick:()=>c(o=>!o),role:"button",tabIndex:0,children:[e.jsxs(r.Title,{children:[e.jsx(h,{}),"S3",e.jsx(r.Badge,{children:"Object storage in AWS"})]}),e.jsx(r.Toggle,{"aria-hidden":"true",children:s?e.jsx(u,{}):e.jsx(b,{})})]}),!s&&e.jsxs(r.Preview,{children:[e.jsx(r.PreviewLine,{children:"S3 is object storage. You store files as objects inside buckets."}),e.jsx(r.PreviewLine,{children:"Learn buckets, objects, permissions, static hosting, versioning, lifecycle, and pre-signed URLs."})]}),s&&e.jsxs(r.Content,{children:[e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(g,{}),e.jsx("h3",{children:"What is S3"})]}),e.jsx(r.Para,{children:"S3 stands for Simple Storage Service. It is object storage used to store files like images, videos, backups, logs, and even static websites. You store objects inside buckets."}),e.jsxs(r.Note,{children:[e.jsx(a,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Beginner mental model"}),e.jsx(r.NoteText,{children:"Bucket is like a big hard drive folder in the cloud. Object is a file. Key is the file path name."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(m,{}),e.jsx("h3",{children:"Bucket, object, key, prefix"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Bucket"})," - top level container, name must be globally unique"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Object"})," - actual file content plus metadata"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Key"}),' - object name path, example "images/logo.png"']}),e.jsxs("li",{children:[e.jsx("b",{children:"Prefix"}),' - folder-like part, example "images/"']})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Example mapping"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:'Bucket: "my-app-assets"'}),e.jsx("li",{children:'Key: "avatars/user123.png"'}),e.jsx("li",{children:"Object: the png file stored at that key"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(j,{}),e.jsx("h3",{children:"Permissions - public vs private"})]}),e.jsx(r.Para,{children:"S3 security is mostly about access. Most production buckets should be private and accessed via IAM roles or pre-signed URLs."}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Private"})," - only accessible with AWS auth, safest default"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Public"})," - accessible from internet, used only for public assets"]})]}),e.jsxs(r.Warn,{children:[e.jsx(f,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Most famous S3 incident"}),e.jsx(r.WarnText,{children:"Misconfigured buckets accidentally made public. Always double check public access block settings and policies."})]})]}),e.jsxs(r.Note,{children:[e.jsx(v,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Safer pattern for public content"}),e.jsx(r.NoteText,{children:"Keep bucket private and put CloudFront in front. Then control access and caching at CDN layer."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(y,{}),e.jsx("h3",{children:"Static website hosting"})]}),e.jsx(r.Para,{children:"S3 can serve static files like HTML, CSS, JS. That means you can host a simple website without servers. For HTTPS and better performance, use CloudFront."}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"What works in S3 hosting"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Portfolio sites"}),e.jsx("li",{children:"Docs websites"}),e.jsx("li",{children:"Single page apps"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(S,{}),e.jsx("h3",{children:"Versioning"})]}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Stores multiple versions of the same key"}),e.jsx("li",{children:"Helps recover overwritten files"}),e.jsx("li",{children:"Delete creates a delete marker instead of permanent removal"})]}),e.jsxs(r.Note,{children:[e.jsx(k,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"When to enable"}),e.jsx(r.NoteText,{children:"Enable versioning for important buckets like backups and critical assets. Remember it increases storage usage."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(w,{}),e.jsx("h3",{children:"Lifecycle policies"})]}),e.jsx(r.Para,{children:"Lifecycle rules automatically transition objects to cheaper storage classes or delete them after a time. This keeps storage costs controlled."}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Move logs to cheaper tier after 30 days"}),e.jsx("li",{children:"Delete temporary uploads after 7 days"}),e.jsx("li",{children:"Expire older backup versions after 180 days"})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(T,{}),e.jsx("h3",{children:"Encryption"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"SSE-S3"})," - AWS managed keys, simple and common"]}),e.jsxs("li",{children:[e.jsx("b",{children:"SSE-KMS"})," - KMS managed keys, better audit and control"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Client side"})," - you encrypt before upload"]})]}),e.jsxs(r.Note,{children:[e.jsx(a,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Safe default"}),e.jsx(r.NoteText,{children:"Enable server-side encryption and block public access unless you have a specific reason."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(C,{}),e.jsx("h3",{children:"Pre-signed URLs"})]}),e.jsx(r.Para,{children:"Pre-signed URL is a time-limited signed link. It allows a user to upload or download an object without exposing the bucket publicly. This is a standard pattern for file uploads from frontend."}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Real use case"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"User requests upload URL from backend"}),e.jsx("li",{children:"Backend returns a pre-signed URL valid for 1 to 5 minutes"}),e.jsx("li",{children:"Frontend uploads file directly to S3"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(P,{}),e.jsx("h3",{children:"Cheat sheet playground"})]}),e.jsx(r.SnippetGrid,{children:p.map(o=>{const t=d===o.key;return e.jsxs(r.SnippetCard,{children:[e.jsxs(r.SnippetTop,{children:[e.jsxs("div",{children:[e.jsx(r.SnippetTitle,{children:o.title}),e.jsx(r.SnippetHint,{children:o.hint})]}),e.jsxs(r.CopyBtn,{type:"button",onClick:()=>x(o.code,o.key),title:t?"Copied":"Copy",children:[t?e.jsx(a,{}):e.jsx(F,{}),t?"Copied":"Copy"]})]}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:o.code})})]},o.key)})})]}),e.jsx(r.FooterNote,{children:"Treat S3 like a secure vault by default. Private buckets, least privilege access, encryption on, lifecycle rules for cost control."})]})]})};export{E as default};
