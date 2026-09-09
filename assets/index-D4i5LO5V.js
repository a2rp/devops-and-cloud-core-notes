import{c as o,r as n,j as e,u as h,a as g,b as f,d as u,i as l,v as b,k as v,m as j,s as y,p as c,q as w}from"./index-ChJ3UoLf.js";const r={Wrapper:o.div`
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
    `},S=()=>{const[s,d]=n.useState(!0),[m,a]=n.useState(""),x=n.useMemo(()=>[{key:"ff",title:"Fast-forward merge",hint:"No merge commit - just move pointer",code:`# If main has not moved, Git can fast-forward
git checkout main
git merge feature/login

# Result: main now points to the same commit as feature/login`},{key:"noff",title:"Merge commit",hint:"Keep branch history visible",code:`# Force a merge commit even if fast-forward is possible
git checkout main
git merge --no-ff feature/login

# Result: a new merge commit with 2 parents`},{key:"conflicts",title:"Merge conflict flow",hint:"Resolve and finish merge",code:`git checkout main
git merge feature/login

# If conflict happens
git status
# fix files manually

git add .
git commit

# If you want to cancel merge
git merge --abort`},{key:"squash",title:"Squash merge",hint:"Make one commit out of many",code:`# Combine feature branch changes into 1 commit on main
git checkout main
git merge --squash feature/login
git commit -m "Login feature"

# Note: This is not a real merge commit`},{key:"prMethods",title:"PR merge methods concept",hint:"GitHub merge options",code:`# Merge commit - keeps all commits, adds merge commit
# Squash and merge - makes 1 commit on main
# Rebase and merge - replays commits, no merge commit`},{key:"recover",title:"Undo a bad merge",hint:"Two common ways",code:`# If merge not pushed and you want to discard it
git reset --hard ORIG_HEAD

# If merge was pushed, use revert (safe)
git revert -m 1 <merge-commit-hash>`}],[]),p=async(i,t)=>{try{await navigator.clipboard.writeText(i),a(t),window.setTimeout(()=>a(""),900)}catch{a("")}};return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Header,{onClick:()=>d(i=>!i),role:"button",tabIndex:0,children:[e.jsxs(r.Title,{children:[e.jsx(h,{}),"Merge",e.jsx(r.Badge,{children:"Combine branches safely"})]}),e.jsx(r.Toggle,{"aria-hidden":"true",children:s?e.jsx(g,{}):e.jsx(f,{})})]}),!s&&e.jsxs(r.Preview,{children:[e.jsx(r.PreviewLine,{children:"Merge combines histories. It keeps the story of how branches actually happened."}),e.jsx(r.PreviewLine,{children:"Learn fast-forward, merge commits, squash merge, conflicts, and safe undo."})]}),s&&e.jsxs(r.Content,{children:[e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(u,{}),e.jsx("h3",{children:"What merge does"})]}),e.jsx(r.Para,{children:"Merge combines changes from one branch into another. You usually merge a feature branch into main. Git tries to bring both histories together without losing commits."}),e.jsxs(r.Note,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Beginner mental model"}),e.jsx(r.NoteText,{children:'Merge is like saying "take everything from feature branch and add it into main". Sometimes it just moves the pointer, sometimes it creates a special merge commit.'})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(b,{}),e.jsx("h3",{children:"Fast-forward vs merge commit"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Fast-forward merge"})," - main did not move, so Git just moves main pointer forward"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Merge commit"})," - both branches moved, so Git creates a new commit that has two parents"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Simple example"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Main is at commit A"}),e.jsx("li",{children:"Feature branch adds commits B and C"}),e.jsx("li",{children:"If main stayed at A, merge can fast-forward to C"}),e.jsx("li",{children:"If main also got commits, Git creates a merge commit"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(v,{}),e.jsx("h3",{children:"Merge strategies you will see"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Default merge"})," - Git decides fast-forward or merge commit based on history"]}),e.jsxs("li",{children:[e.jsx("b",{children:"--no-ff"})," - always create a merge commit (makes branch boundaries visible)"]}),e.jsxs("li",{children:[e.jsx("b",{children:"--squash"})," - combine all feature commits into one commit on main (not a real merge commit)"]})]}),e.jsxs(r.Warn,{children:[e.jsx(j,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Squash merge note"}),e.jsx(r.WarnText,{children:"Squash makes history clean, but it loses individual commit history from the feature branch on main. Great for small features. Not great if you need detailed commit trail."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(y,{}),e.jsx("h3",{children:"GitHub PR merge methods"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Merge commit"})," - keeps all commits and adds a merge commit"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Squash and merge"})," - makes one commit on main"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Rebase and merge"})," - replays commits, no merge commit, history is linear"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Quick selection rule"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Use merge commit when you want to preserve branch context"}),e.jsx("li",{children:"Use squash when you want one clean commit per PR"}),e.jsx("li",{children:"Use rebase and merge when team prefers linear history"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(c,{}),e.jsx("h3",{children:"Merge conflicts - what and why"})]}),e.jsx(r.Para,{children:"A merge conflict happens when Git cannot automatically combine changes. Usually both branches edited the same lines in the same file. Git stops and asks you to decide the final content."}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Conflict handling flow"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Run merge"}),e.jsx("li",{children:"Git shows conflicted files"}),e.jsx("li",{children:"Edit files to correct final version"}),e.jsx("li",{children:"git add ."}),e.jsx("li",{children:"git commit to finish merge"})]})]}),e.jsxs(r.Note,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Helpful tip"}),e.jsx(r.NoteText,{children:"Use git status to see exactly which files are conflicted. Solve one file at a time. Keep changes small."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(c,{}),e.jsx("h3",{children:"Command playground"})]}),e.jsx(r.SnippetGrid,{children:x.map(i=>{const t=m===i.key;return e.jsxs(r.SnippetCard,{children:[e.jsxs(r.SnippetTop,{children:[e.jsxs("div",{children:[e.jsx(r.SnippetTitle,{children:i.title}),e.jsx(r.SnippetHint,{children:i.hint})]}),e.jsxs(r.CopyBtn,{type:"button",onClick:()=>p(i.code,i.key),title:t?"Copied":"Copy",children:[t?e.jsx(l,{}):e.jsx(w,{}),t?"Copied":"Copy"]})]}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:i.code})})]},i.key)})})]}),e.jsx(r.FooterNote,{children:"Merge is the safest default for teams because it does not rewrite history. Rebase is cleaner, but merge is honest."})]})]})};export{S as default};
