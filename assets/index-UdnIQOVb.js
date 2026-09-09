import{c as o,r as t,j as r,F as n,a as i,b as l,d,e as c,f as p,g as x}from"./index-ChJ3UoLf.js";const e={Wrapper:o.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:o.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 20px;
        cursor: pointer;
        user-select: none;
        transition: background 120ms ease;

        &:hover {
            background: var(--color-surface-2);
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
    `,Toggle:o.div`
        font-size: 20px;
        color: var(--color-text-muted);
    `,Content:o.div`
        padding: 22px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:o.div`
        margin-bottom: 20px;
    `,Paragraph:o.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
    `,Grid:o.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        margin-bottom: 20px;
    `,Card:o.div`
        border: 1px solid var(--color-border);
        border-radius: 12px;
        padding: 16px;
        background: var(--color-surface);
        transition:
            transform 120ms ease,
            border-color 120ms ease;

        svg {
            font-size: 20px;
            color: var(--color-accent);
            margin-bottom: 8px;
        }

        h3 {
            font-size: 15px;
            margin-bottom: 6px;
        }

        p {
            font-size: 14px;
            color: var(--color-text-secondary);
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-primary);
        }
    `},u=()=>{const[a,s]=t.useState(!0);return r.jsxs(e.Wrapper,{children:[r.jsxs(e.Header,{onClick:()=>s(!a),children:[r.jsxs(e.Title,{children:[r.jsx(n,{}),"DevOps and Cloud Core Notes"]}),r.jsx(e.Toggle,{children:a?r.jsx(i,{}):r.jsx(l,{})})]}),a&&r.jsxs(e.Content,{children:[r.jsxs(e.Section,{children:[r.jsx(e.Paragraph,{children:"Modern software is not only about writing code. It is about building systems that can run reliably on servers, scale for millions of users, and recover from failures."}),r.jsx(e.Paragraph,{children:"DevOps combines development and operations so that applications move smoothly from a developer's laptop to real production infrastructure."})]}),r.jsxs(e.Grid,{children:[r.jsxs(e.Card,{children:[r.jsx(d,{}),r.jsx("h3",{children:"Version Control"}),r.jsx("p",{children:"Git workflows, branching strategies, rebasing, and merging that power collaborative development."})]}),r.jsxs(e.Card,{children:[r.jsx(c,{}),r.jsx("h3",{children:"Containers"}),r.jsx("p",{children:"Docker containers package applications with their dependencies so they run the same everywhere."})]}),r.jsxs(e.Card,{children:[r.jsx(p,{}),r.jsx("h3",{children:"CI and CD"}),r.jsx("p",{children:"Automated pipelines that test, build, and deploy applications continuously."})]}),r.jsxs(e.Card,{children:[r.jsx(x,{}),r.jsx("h3",{children:"Cloud Infrastructure"}),r.jsx("p",{children:"Cloud platforms like AWS provide scalable compute, storage, and networking for modern systems."})]})]}),r.jsxs(e.Section,{children:[r.jsx(e.Paragraph,{children:"This repository explains how real production systems are built. From Git internals to container orchestration and cloud architecture, the goal is to understand how software actually runs on the internet."}),r.jsx(e.Paragraph,{children:"The focus is practical understanding. Concepts are explained clearly with examples so developers can reason about real infrastructure and deployment workflows."})]})]})]})};export{u as default};
