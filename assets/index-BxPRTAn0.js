import{c as i,r as a,j as e,g as h,a as m,b as g,E as b,i as l,k as v,N as j,m as c,y as f,p as y,B as S,C as w,A as k,f as C,x as T,q as P}from"./index-ChJ3UoLf.js";const r={Wrapper:i.div`
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
    `},H=()=>{const[n,d]=a.useState(!0),[p,s]=a.useState(""),x=a.useMemo(()=>[{key:"launchChecklist",title:"EC2 launch checklist",hint:"What you choose during create",code:`# When creating an EC2 instance you choose:
# - AMI (OS image) - Ubuntu, Amazon Linux, etc
# - Instance type - t3.micro, t3.small, etc
# - Key pair - for SSH login
# - Network - VPC and subnet
# - Security group - firewall rules
# - Storage - EBS volume size
# - User data - startup script (optional)`},{key:"ssh",title:"SSH into EC2",hint:"Most common access method",code:`# Make key file readable only by you
chmod 400 my-key.pem

# SSH (Ubuntu AMI usually uses user "ubuntu")
ssh -i my-key.pem ubuntu@<public-ip>

# Amazon Linux often uses user "ec2-user"
ssh -i my-key.pem ec2-user@<public-ip>`},{key:"securityGroup",title:"Security group rules",hint:"Firewall basics",code:`# Typical inbound rules:
# - SSH 22 from your IP only
# - HTTP 80 from anywhere (0.0.0.0/0)
# - HTTPS 443 from anywhere (0.0.0.0/0)

# Bad practice:
# - SSH 22 open to world 0.0.0.0/0`},{key:"installNginx",title:"Install nginx on Ubuntu",hint:"Quick web server test",code:`sudo apt update
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx

# Check
curl -I http://localhost`},{key:"userData",title:"User data script example",hint:"Auto setup at boot",code:`#!/bin/bash
apt update
apt install -y nginx
systemctl enable nginx
systemctl start nginx

echo "<h1>Hello from EC2</h1>" > /var/www/html/index.html`},{key:"privatePublic",title:"Public vs private IP",hint:"Understand routing",code:`# Private IP
# - used inside VPC
# - does not work directly from internet

# Public IP
# - internet reachable if security group allows
# - may change if you stop and start (unless Elastic IP)`},{key:"health",title:"Health check idea",hint:"How LBs and monitoring see it",code:`# A simple health endpoint idea:
# - return 200 OK
# - lightweight
# - no heavy DB work

# Example:
# GET /health -> 200 OK`}],[]),u=async(o,t)=>{try{await navigator.clipboard.writeText(o),s(t),window.setTimeout(()=>s(""),900)}catch{s("")}};return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Header,{onClick:()=>d(o=>!o),role:"button",tabIndex:0,children:[e.jsxs(r.Title,{children:[e.jsx(h,{}),"AWS EC2",e.jsx(r.Badge,{children:"Virtual machines in AWS"})]}),e.jsx(r.Toggle,{"aria-hidden":"true",children:n?e.jsx(m,{}):e.jsx(g,{})})]}),!n&&e.jsxs(r.Preview,{children:[e.jsx(r.PreviewLine,{children:"EC2 is AWS service for running virtual machines (servers) in the cloud."}),e.jsx(r.PreviewLine,{children:"Learn AMI, instance types, SSH, security groups, storage, and user data scripts."})]}),n&&e.jsxs(r.Content,{children:[e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(b,{}),e.jsx("h3",{children:"What is EC2"})]}),e.jsx(r.Para,{children:"EC2 stands for Elastic Compute Cloud. It lets you rent virtual machines inside AWS. You select an OS image, CPU and RAM size, networking, and firewall rules."}),e.jsxs(r.Note,{children:[e.jsx(l,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Beginner mental model"}),e.jsx(r.NoteText,{children:"EC2 is like renting a computer in AWS data center. You can install software, run servers, and expose ports to internet."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(v,{}),e.jsx("h3",{children:"Core parts you should know"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"AMI"})," - the OS image, example Ubuntu, Amazon Linux"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Instance type"})," - CPU and RAM size, example t3.micro"]}),e.jsxs("li",{children:[e.jsx("b",{children:"EBS"})," - storage disk attached to instance"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Security group"})," - firewall rules for inbound and outbound"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Key pair"})," - private key used for SSH login"]}),e.jsxs("li",{children:[e.jsx("b",{children:"VPC and subnet"})," - the private network where instance lives"]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(j,{}),e.jsx("h3",{children:"Access - SSH"})]}),e.jsx(r.Para,{children:"SSH is the most common way to login to EC2 instances. You need the private key file and the correct username for the AMI."}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Typical usernames"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:'Ubuntu AMI - user "ubuntu"'}),e.jsx("li",{children:'Amazon Linux - user "ec2-user"'})]})]}),e.jsxs(r.Warn,{children:[e.jsx(c,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Security warning"}),e.jsx(r.WarnText,{children:"Never share your private key. Store it safely. Also do not open SSH to the whole internet."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(f,{}),e.jsx("h3",{children:"Security groups"})]}),e.jsx(r.Para,{children:"Security group is a stateful firewall. If inbound traffic is allowed, return traffic is allowed automatically."}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"Allow only needed ports"}),e.jsx("li",{children:"Restrict SSH to your IP"}),e.jsx("li",{children:"Open HTTP and HTTPS if hosting website"})]}),e.jsxs(r.Note,{children:[e.jsx(y,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Golden rule"}),e.jsx(r.NoteText,{children:"Start with minimum access. Add rules only when required."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(S,{}),e.jsx("h3",{children:"Storage - EBS"})]}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"EBS is like a virtual hard disk attached to your instance"}),e.jsx("li",{children:"You can resize volume later"}),e.jsx("li",{children:"Snapshots can be used for backup"})]}),e.jsxs(r.Example,{children:[e.jsx(r.ExampleTitle,{children:"Common setup"}),e.jsxs(r.Bullets,{children:[e.jsx("li",{children:"1 root EBS volume for OS"}),e.jsx("li",{children:"optional extra EBS volume for application data"})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(w,{}),e.jsx("h3",{children:"Public IP, private IP, Elastic IP"})]}),e.jsxs(r.Bullets,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Private IP"})," - used inside VPC, not reachable from internet directly"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Public IP"})," - internet reachable if allowed by security group"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Elastic IP"})," - static public IP that you own until you release it"]})]}),e.jsxs(r.Warn,{children:[e.jsx(c,{}),e.jsxs("div",{children:[e.jsx(r.WarnTitle,{children:"Common surprise"}),e.jsx(r.WarnText,{children:"Default public IP can change when instance stops and starts. Use Elastic IP if you need fixed address."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(k,{}),e.jsx("h3",{children:"User data scripts"})]}),e.jsx(r.Para,{children:"User data is a startup script that runs when the instance boots. It is used to auto install packages and configure services. This is a basic form of automation."}),e.jsxs(r.Note,{children:[e.jsx(C,{}),e.jsxs("div",{children:[e.jsx(r.NoteTitle,{children:"Real use case"}),e.jsx(r.NoteText,{children:"Use user data to install nginx, start your backend, pull latest code, or run Docker containers at boot."})]})]})]}),e.jsxs(r.Section,{children:[e.jsxs(r.SectionHead,{children:[e.jsx(T,{}),e.jsx("h3",{children:"Command playground"})]}),e.jsx(r.SnippetGrid,{children:x.map(o=>{const t=p===o.key;return e.jsxs(r.SnippetCard,{children:[e.jsxs(r.SnippetTop,{children:[e.jsxs("div",{children:[e.jsx(r.SnippetTitle,{children:o.title}),e.jsx(r.SnippetHint,{children:o.hint})]}),e.jsxs(r.CopyBtn,{type:"button",onClick:()=>u(o.code,o.key),title:t?"Copied":"Copy",children:[t?e.jsx(l,{}):e.jsx(P,{}),t?"Copied":"Copy"]})]}),e.jsx(r.CodeBlock,{children:e.jsx("pre",{children:o.code})})]},o.key)})})]}),e.jsx(r.FooterNote,{children:"EC2 is the simplest cloud compute starting point. Master security groups, SSH, and automation with user data and you will feel confident quickly."})]})]})};export{H as default};
