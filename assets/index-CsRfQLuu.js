import{c as r,r as n,j as e,p as h,a as m,b as g,t as f,i as c,w as u,x as v,m as b,y as k,z as j,q as y}from"./index-J2ZlUx8T.js";const o={Wrapper:r.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:r.div`
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
    `,Title:r.div`
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
    `,Badge:r.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:r.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:r.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:r.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:r.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:r.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:r.div`
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
    `,Para:r.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:r.ul`
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
    `,Example:r.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:r.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:r.div`
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
    `,Note:r.div`
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
    `,NoteTitle:r.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:r.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:r.div`
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
    `,WarnTitle:r.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:r.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:r.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:r.div`
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
    `,SnippetTop:r.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:r.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:r.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:r.button`
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
    `,FooterNote:r.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},S=()=>{const[s,l]=n.useState(!0),[d,a]=n.useState(""),p=n.useMemo(()=>[{key:"where",title:"Where hooks live",hint:".git folder local hooks",code:`# Git hooks exist inside your repo folder
# Path:
.git/hooks

# List sample hooks
ls .git/hooks`},{key:"precommitSimple",title:"Simple pre-commit hook",hint:"Block commits if checks fail",code:`# Create file:
# .git/hooks/pre-commit

#!/bin/sh
echo "Running pre-commit checks"

npm run lint
if [ $? -ne 0 ]; then
  echo "Lint failed - commit blocked"
  exit 1
fi

npm test
if [ $? -ne 0 ]; then
  echo "Tests failed - commit blocked"
  exit 1
fi

exit 0`},{key:"chmod",title:"Make hook executable",hint:"Important step",code:"chmod +x .git/hooks/pre-commit"},{key:"prepush",title:"Simple pre-push hook",hint:"Run tests before pushing",code:`# Create file:
# .git/hooks/pre-push

#!/bin/sh
echo "Running pre-push checks"

npm test
if [ $? -ne 0 ]; then
  echo "Tests failed - push blocked"
  exit 1
fi

exit 0`},{key:"commitmsg",title:"commit-msg hook",hint:"Enforce message format",code:`# Create file:
# .git/hooks/commit-msg

#!/bin/sh
MSG_FILE="$1"
MSG="$(cat "$MSG_FILE")"

# Example rule: minimum 10 chars
if [ "$(printf "%s" "$MSG" | wc -c)" -lt 10 ]; then
  echo "Commit message too short - add more detail"
  exit 1
fi

exit 0`},{key:"security",title:"Basic secret check idea",hint:"Block accidental key commits",code:`# Very simple check idea (not perfect)
# Look for common key patterns before commit

git diff --cached | grep -E "AKIA|BEGIN PRIVATE KEY|SECRET_KEY" >/dev/null
if [ $? -eq 0 ]; then
  echo "Possible secret detected in staged changes - commit blocked"
  exit 1
fi

exit 0`},{key:"share",title:"Sharing hooks with team",hint:".git/hooks not versioned",code:`# .git/hooks is not committed to git
# Team friendly approach:
# 1) keep hooks in a folder, example:
#    scripts/hooks/pre-commit
# 2) copy/install them during setup

# Example install script idea:
cp scripts/hooks/pre-commit .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit`}],[]),x=async(i,t)=>{try{await navigator.clipboard.writeText(i),a(t),window.setTimeout(()=>a(""),900)}catch{a("")}};return e.jsxs(o.Wrapper,{children:[e.jsxs(o.Header,{onClick:()=>l(i=>!i),role:"button",tabIndex:0,children:[e.jsxs(o.Title,{children:[e.jsx(h,{}),"Hooks",e.jsx(o.Badge,{children:"Automate checks in Git flow"})]}),e.jsx(o.Toggle,{"aria-hidden":"true",children:s?e.jsx(m,{}):e.jsx(g,{})})]}),!s&&e.jsxs(o.Preview,{children:[e.jsx(o.PreviewLine,{children:"Git hooks are scripts that run automatically on events like commit and push."}),e.jsx(o.PreviewLine,{children:"Use them to stop bad commits early - lint, tests, formatting, secret checks."})]}),s&&e.jsxs(o.Content,{children:[e.jsxs(o.Section,{children:[e.jsxs(o.SectionHead,{children:[e.jsx(f,{}),e.jsx("h3",{children:"What are Git hooks"})]}),e.jsx(o.Para,{children:"A Git hook is a script that Git runs automatically when a specific action happens. Example actions: before commit, after commit, before push, commit message validation."}),e.jsxs(o.Note,{children:[e.jsx(c,{}),e.jsxs("div",{children:[e.jsx(o.NoteTitle,{children:"Beginner mental model"}),e.jsx(o.NoteText,{children:'Hooks are like "automatic gatekeepers". If rules fail, they block the action. This prevents broken code from entering history.'})]})]})]}),e.jsxs(o.Section,{children:[e.jsxs(o.SectionHead,{children:[e.jsx(u,{}),e.jsx("h3",{children:"Common hooks you will use"})]}),e.jsxs(o.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"pre-commit"})," - run checks before commit is created"]}),e.jsxs("li",{children:[e.jsx("b",{children:"commit-msg"})," - validate commit message rules"]}),e.jsxs("li",{children:[e.jsx("b",{children:"pre-push"})," - run checks before pushing to remote"]})]}),e.jsxs(o.Example,{children:[e.jsx(o.ExampleTitle,{children:"Why hooks matter"}),e.jsxs(o.Bullets,{children:[e.jsx("li",{children:"Catch lint and formatting issues early"}),e.jsx("li",{children:"Stop commits that break tests"}),e.jsx("li",{children:"Prevent accidental secrets like API keys"}),e.jsx("li",{children:"Keep team standards consistent"})]})]})]}),e.jsxs(o.Section,{children:[e.jsxs(o.SectionHead,{children:[e.jsx(v,{}),e.jsx("h3",{children:"Where hooks live"})]}),e.jsx(o.Para,{children:'Git hooks live inside your repo at ".git/hooks". These files are local to your machine. That means hooks are not shared automatically when you push code to GitHub.'}),e.jsxs(o.Warn,{children:[e.jsx(b,{}),e.jsxs("div",{children:[e.jsx(o.WarnTitle,{children:"Important limitation"}),e.jsx(o.WarnText,{children:'".git/hooks" is not versioned. If you want the whole team to use hooks, keep hook scripts in a tracked folder and install them with a setup script.'})]})]})]}),e.jsxs(o.Section,{children:[e.jsxs(o.SectionHead,{children:[e.jsx(k,{}),e.jsx("h3",{children:"Practical hook rules (real world)"})]}),e.jsxs(o.Bullets,{children:[e.jsx("li",{children:"pre-commit - run lint, formatting, type checks"}),e.jsx("li",{children:"pre-push - run full test suite or critical tests"}),e.jsx("li",{children:"commit-msg - enforce message format, ticket id, minimum length"}),e.jsx("li",{children:"security - block common secret patterns"})]}),e.jsxs(o.Example,{children:[e.jsx(o.ExampleTitle,{children:"Performance tip"}),e.jsx(o.Para,{children:"Keep pre-commit fast. People commit often. Run light checks here. Keep heavy checks in pre-push or CI."})]})]}),e.jsxs(o.Section,{children:[e.jsxs(o.SectionHead,{children:[e.jsx(j,{}),e.jsx("h3",{children:"Command playground"})]}),e.jsx(o.SnippetGrid,{children:p.map(i=>{const t=d===i.key;return e.jsxs(o.SnippetCard,{children:[e.jsxs(o.SnippetTop,{children:[e.jsxs("div",{children:[e.jsx(o.SnippetTitle,{children:i.title}),e.jsx(o.SnippetHint,{children:i.hint})]}),e.jsxs(o.CopyBtn,{type:"button",onClick:()=>x(i.code,i.key),title:t?"Copied":"Copy",children:[t?e.jsx(c,{}):e.jsx(y,{}),t?"Copied":"Copy"]})]}),e.jsx(o.CodeBlock,{children:e.jsx("pre",{children:i.code})})]},i.key)})})]}),e.jsx(o.FooterNote,{children:"Hooks catch problems early, but CI is still the final guard. Use hooks for fast feedback and CI for full reliability."})]})]})};export{S as default};
