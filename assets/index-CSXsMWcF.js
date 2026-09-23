import{c as o,r as n,j as e,s as g,a as b,b as u,d as f,i as c,k as v,m as l,p as d,t as j,o as y,q as w}from"./index-J2ZlUx8T.js";const r={Wrapper:o.div`
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
    `},C=()=>{const[a,p]=n.useState(!0),[x,s]=n.useState(""),h=n.useMemo(()=>[{key:"basic",title:"Basic rebase",hint:"Move your commits onto a new base",code:`# You are on feature branch
git checkout feature/login

# Update your feature branch with latest main using rebase
git fetch origin
git rebase origin/main

# Push after rebase (history changed)
git push --force-with-lease`},{key:"interactive",title:"Interactive rebase",hint:"Clean up commit history before PR",code:`# Rebase last 5 commits interactively
git rebase -i HEAD~5

# In editor:
# pick   keep commit
# reword change commit message
# squash combine with previous commit
# fixup  combine and drop message`},{key:"conflicts",title:"Rebase conflict flow",hint:"Resolve conflicts safely",code:`# During rebase, if conflict happens:
git status

# Fix conflicts in files, then:
git add .

# Continue rebase
git rebase --continue

# If you want to stop and go back:
git rebase --abort`},{key:"onto",title:"Rebase onto",hint:"Move a branch to a different base",code:`# Move feature commits from old-base to new-base
git rebase --onto new-base old-base feature/login

# Example idea:
# feature/login was based on main-old
# now you want it based on main-new`},{key:"autosquash",title:"Fixup commits with autosquash",hint:"Great for review feedback",code:`# Create a fixup commit for an earlier commit
git commit --fixup <commit-hash>

# Auto squash fixups during interactive rebase
git rebase -i --autosquash origin/main`},{key:"recover",title:"Recover after bad rebase",hint:"Reflog rescue",code:`# Find previous HEAD before rebase
git reflog

# Reset back to safe point
git reset --hard HEAD@{3}`}],[]),m=async(i,t)=>{try{await navigator.clipboard.writeText(i),s(t),window.setTimeout(()=>s(""),900)}catch{s("")}};return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Header,{onClick:()=>p(i=>!i),role:"button",tabIndex:0,children:[e.jsxs(r.Title,{children:[e.jsx(g,{}),"Rebase",e.jsx(r.Badge,{children:"Clean history - same code"})]}),e.jsx(r.Toggle,{"aria-hidden":"true",children:a?e.jsx(b,{}):e.jsx(u,{})})]}),!a&&e.jsxs(r.Preview,{children:[e.jsx(r.PreviewLine,{children:"Rebase takes your commits and replays them on top of another commit."}),e.jsx(r.PreviewLine,{children:"It is amazing for clean PRs, but dangerous on shared branches."})]}),a&&e.jsxs(r.Content,{children:[e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(f,{}),e.jsx("h3",{children:"What rebase does"})]}),e.jsx(r.Para,{children:"Rebase changes the base of your branch. It takes the commits from your branch and applies them again on top of a new base commit. The code ends up similar, but the commit hashes change because history is rewritten."}),e.jsxs(r.Note,{children:[e.jsx(c,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Beginner mental model"}),e.jsx(r.NoteText,{children:"Imagine you wrote 3 commits on feature branch. Main branch moved ahead. Rebase copies your 3 commits and attaches them to the new tip of main."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(v,{}),e.jsx("h3",{children:"Merge vs rebase"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"merge"})," - keeps history as it happened, creates a merge commit (or fast-forward)"]}),e.jsxs("li",{children:[e.jsx("b",{children:"rebase"})," - rewrites your branch history into a straight line, no merge commit"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"When rebase is preferred"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Before creating a PR - clean linear commits"}),e.jsx("li",{children:"While working alone on a feature branch - no one else depends on your history"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(l,{}),e.jsx("h3",{children:"The golden rule"})]}),e.jsxs(r.Warn,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Do not rebase shared branches"}),e.jsx(r.WarnText,{children:"If others pulled your branch, rebasing changes commit hashes and makes their history messy. Use merge or coordinate carefully."})]})]}),e.jsxs(r.Note,{children:[e.jsx(d,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Safe push after rebase"}),e.jsx(r.NoteText,{children:'Use "git push --force-with-lease" instead of "git push --force". It refuses to overwrite if remote changed unexpectedly.'})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(j,{}),e.jsx("h3",{children:"Interactive rebase - clean commits"})]}),e.jsx(r.Para,{children:"Interactive rebase lets you edit your last N commits. You can squash small commits, fix messages, and reorder commits. This is perfect before opening a PR."}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Common actions in rebase editor"}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"pick"})," - keep commit"]}),e.jsxs("li",{children:[e.jsx("b",{children:"reword"})," - change commit message"]}),e.jsxs("li",{children:[e.jsx("b",{children:"squash"})," - merge commit into previous and keep message"]}),e.jsxs("li",{children:[e.jsx("b",{children:"fixup"})," - merge commit into previous and drop message"]})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(y,{}),e.jsx("h3",{children:"Conflict handling flow"})]}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Rebase stops at the commit that caused conflict"}),e.jsx("li",{children:"You fix files, stage them, then continue"}),e.jsx("li",{children:"If things go wrong, abort and you are back to previous state"})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Commands during conflict"}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:`git status
# fix conflicts in files
git add .
git rebase --continue

# to cancel
git rebase --abort`})})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(d,{}),e.jsx("h3",{children:"Command playground"})]}),e.jsx(r.SnippetGrid,{children:h.map(i=>{const t=x===i.key;return e.jsxs(r.SnippetCard,{children:[e.jsxs(r.SnippetTop,{children:[e.jsxs("div",{children:[e.jsx(r.SnippetTitle,{children:i.title}),e.jsx(r.SnippetHint,{children:i.hint})]}),e.jsxs(r.CopyBtn,{type:"button",onClick:()=>m(i.code,i.key),title:t?"Copied":"Copy",children:[t?e.jsx(c,{}):e.jsx(w,{}),t?"Copied":"Copy"]})]}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:i.code})})]},i.key)})})]}),e.jsx(r.FooterNote,{children:"Rebase is like editing the story of your branch. It makes history clean, but you must use it responsibly."})]})]})};export{C as default};
