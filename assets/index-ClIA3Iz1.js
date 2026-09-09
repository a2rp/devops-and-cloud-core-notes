import{c as t,r as l,j as e,d as g,a as m,b as f,h as b,i as c,k as j,l as v,m as u,n as y,o as k,p as s,q as w}from"./index-ChJ3UoLf.js";const r={Wrapper:t.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:t.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition:
            background 140ms ease,
            border-color 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:t.div`
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
    `,Badge:t.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:t.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:t.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:t.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:t.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:t.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:t.div`
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
    `,Para:t.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:t.ul`
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
    `,Example:t.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:t.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:t.div`
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
    `,Note:t.div`
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
    `,NoteTitle:t.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:t.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:t.div`
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
    `,WarnTitle:t.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:t.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:t.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:t.div`
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
    `,SnippetTop:t.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:t.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:t.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:t.button`
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
    `,FooterNote:t.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},E=()=>{const[a,d]=l.useState(!0),[h,n]=l.useState(""),x=l.useMemo(()=>[{key:"objects",title:"Git objects - blob, tree, commit",hint:"Core internals",code:`# See raw object type + content
git cat-file -t <hash>
git cat-file -p <hash>

# Find objects reachable from refs
git rev-list --objects --all | head`},{key:"head",title:"HEAD, refs, and branches",hint:"What you are pointing at",code:`# What HEAD points to
cat .git/HEAD

# Show refs (branches and tags)
git show-ref --heads --tags

# Resolve a name to a hash
git rev-parse HEAD
git rev-parse main`},{key:"staging",title:"Working tree vs staging area vs commit",hint:"The 3 states",code:`# What changed but not staged
git diff

# What is staged
git diff --staged

# Stage a file and inspect staged diff
git add file.txt
git diff --staged`},{key:"reflog",title:"Reflog - undo almost anything",hint:"Your safety net",code:`# Show recent HEAD movements
git reflog

# Recover a lost commit by checking out or resetting
git checkout <hash>
git reset --hard <hash>`},{key:"resetRevert",title:"reset vs revert",hint:"Local rewrite vs safe history",code:`# Move HEAD and branch pointer (can rewrite history)
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1

# Create a new commit that undoes changes (safe for shared branches)
git revert <commit-hash>`},{key:"stashCherry",title:"stash and cherry-pick",hint:"Park work and pick commits",code:`# Stash work in progress
git stash push -m "wip - debugging"
git stash list
git stash pop

# Copy a commit onto current branch
git cherry-pick <commit-hash>`}],[]),p=async(o,i)=>{try{await navigator.clipboard.writeText(o),n(i),window.setTimeout(()=>n(""),900)}catch{n("")}};return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Header,{onClick:()=>d(o=>!o),role:"button",tabIndex:0,children:[e.jsxs(r.Title,{children:[e.jsx(g,{}),"Git Deep",e.jsx(r.Badge,{children:"Internals + real workflows"})]}),e.jsx(r.Toggle,{"aria-hidden":"true",children:a?e.jsx(m,{}):e.jsx(f,{})})]}),!a&&e.jsxs(r.Preview,{children:[e.jsx(r.PreviewLine,{children:'Git is a content-addressed database with a nice UI called "git".'}),e.jsx(r.PreviewLine,{children:'Understand objects, refs, HEAD, index, reflog, and the common "save me" commands.'})]}),a&&e.jsxs(r.Content,{children:[e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(b,{}),e.jsx("h3",{children:"What is Git, really"})]}),e.jsx(r.Para,{children:'Git is not a "file diff tool". Git stores snapshots of your project. Internally it behaves like a database where content is saved and referenced by hashes.'}),e.jsxs(r.Note,{children:[e.jsx(c,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Beginner mental model"}),e.jsx(r.NoteText,{children:"A branch is just a name that points to a commit. A commit points to a snapshot (a tree). Trees point to folders. Blobs point to file content."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(j,{}),e.jsx("h3",{children:"Git objects - blob, tree, commit"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"blob"})," - file content (only bytes of the file, not file name)"]}),e.jsxs("li",{children:[e.jsx("b",{children:"tree"})," - folder listing (names + permissions + pointers to blobs or other trees)"]}),e.jsxs("li",{children:[e.jsx("b",{children:"commit"})," - points to a tree + includes parent commit(s) + author info + message"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Example"}),e.jsx(r.Para,{children:"When you commit, Git creates a new commit object. That commit points to a tree. That tree points to blobs. If a file did not change, Git reuses the same blob hash. This is why Git is fast and efficient."})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(v,{}),e.jsx("h3",{children:"Refs, branches, and HEAD"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"ref"})," - a name that points to a commit hash (example: refs/heads/main)"]}),e.jsxs("li",{children:[e.jsx("b",{children:"branch"})," - just a ref (a movable pointer)"]}),e.jsxs("li",{children:[e.jsx("b",{children:"HEAD"})," - tells Git what you currently have checked out"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Two common HEAD states"}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Normal"})," - HEAD points to a branch name (example: main)"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Detached HEAD"})," - HEAD points directly to a commit hash (easy to forget work here)"]})]})]}),e.jsxs(r.Warn,{children:[e.jsx(u,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Detached HEAD beginner trap"}),e.jsx(r.WarnText,{children:"If you checkout a commit hash and start committing, you might lose the branch pointer. Fix: create a branch from that point: git checkout -b rescue-branch"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(y,{}),e.jsx("h3",{children:"The 3 states - working tree, staging area, commit"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Working tree"})," - your actual files on disk"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Staging area (index)"})," - what will go into the next commit"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Commit"})," - saved snapshot in Git history"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Example flow"}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:`# Edit file.txt

# See changes in working tree
git diff

# Stage changes
git add file.txt

# See staged snapshot difference
git diff --staged

# Create commit snapshot
git commit -m "Update file.txt"`})})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(k,{}),e.jsx("h3",{children:"Reflog - the secret undo history"})]}),e.jsx(r.Para,{children:'Reflog records where HEAD and branch refs have been. Even if you reset and "lose" commits, reflog can help you recover them.'}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Typical rescue"}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:`# Find the previous state
git reflog

# Reset back to a good state
git reset --hard HEAD@{3}`})})]}),e.jsxs(r.Note,{children:[e.jsx(s,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Rule of thumb"}),e.jsx(r.NoteText,{children:'If you think "I lost my commit", check reflog first.'})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(s,{}),e.jsx("h3",{children:"reset vs revert"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"reset"})," - moves branch pointer and optionally changes files (can rewrite history)"]}),e.jsxs("li",{children:[e.jsx("b",{children:"revert"})," - creates a new commit that undoes an old commit (safe on shared branches)"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"When to use what"}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:["Use ",e.jsx("b",{children:"reset"})," when the branch is local and not shared yet"]}),e.jsxs("li",{children:["Use ",e.jsx("b",{children:"revert"})," when the branch is already pushed and others may have pulled it"]})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(s,{}),e.jsx("h3",{children:"stash and cherry-pick"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"stash"})," - park unfinished work temporarily (clean working tree fast)"]}),e.jsxs("li",{children:[e.jsx("b",{children:"cherry-pick"})," - copy a specific commit onto your current branch"]})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Beginner friendly example"}),e.jsx(r.Para,{children:"You are fixing a bug but suddenly need to switch branches. Use stash to save your work without committing, switch branches, then pop it later."})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(s,{}),e.jsx("h3",{children:"Command playground"})]}),e.jsx(r.SnippetGrid,{children:x.map(o=>{const i=h===o.key;return e.jsxs(r.SnippetCard,{children:[e.jsxs(r.SnippetTop,{children:[e.jsxs("div",{children:[e.jsx(r.SnippetTitle,{children:o.title}),e.jsx(r.SnippetHint,{children:o.hint})]}),e.jsxs(r.CopyBtn,{type:"button",onClick:()=>p(o.code,o.key),title:i?"Copied":"Copy",children:[i?e.jsx(c,{}):e.jsx(w,{}),i?"Copied":"Copy"]})]}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:o.code})})]},o.key)})})]}),e.jsx(r.FooterNote,{children:"Git feels scary until you realize it is just pointers and snapshots. Once you get objects, refs, and reflog, you stop fearing mistakes."})]})]})};export{E as default};
