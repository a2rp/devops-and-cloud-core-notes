// src/topics/awsEc2/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiServer,
    FiChevronDown,
    FiChevronUp,
    FiCpu,
    FiHardDrive,
    FiShield,
    FiKey,
    FiTerminal,
    FiWifi,
    FiActivity,
    FiAlertTriangle,
    FiCheckCircle,
    FiCopy,
    FiTool,
    FiLayers,
    FiGlobe,
} from "react-icons/fi";

const AwsEc2 = () => {
    const [open, setOpen] = useState(false);
    const [copiedKey, setCopiedKey] = useState("");

    const snippets = useMemo(() => {
        return [
            {
                key: "launchChecklist",
                title: "EC2 launch checklist",
                hint: "What you choose during create",
                code: `# When creating an EC2 instance you choose:
# - AMI (OS image) - Ubuntu, Amazon Linux, etc
# - Instance type - t3.micro, t3.small, etc
# - Key pair - for SSH login
# - Network - VPC and subnet
# - Security group - firewall rules
# - Storage - EBS volume size
# - User data - startup script (optional)`,
            },
            {
                key: "ssh",
                title: "SSH into EC2",
                hint: "Most common access method",
                code: `# Make key file readable only by you
chmod 400 my-key.pem

# SSH (Ubuntu AMI usually uses user "ubuntu")
ssh -i my-key.pem ubuntu@<public-ip>

# Amazon Linux often uses user "ec2-user"
ssh -i my-key.pem ec2-user@<public-ip>`,
            },
            {
                key: "securityGroup",
                title: "Security group rules",
                hint: "Firewall basics",
                code: `# Typical inbound rules:
# - SSH 22 from your IP only
# - HTTP 80 from anywhere (0.0.0.0/0)
# - HTTPS 443 from anywhere (0.0.0.0/0)

# Bad practice:
# - SSH 22 open to world 0.0.0.0/0`,
            },
            {
                key: "installNginx",
                title: "Install nginx on Ubuntu",
                hint: "Quick web server test",
                code: `sudo apt update
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx

# Check
curl -I http://localhost`,
            },
            {
                key: "userData",
                title: "User data script example",
                hint: "Auto setup at boot",
                code: `#!/bin/bash
apt update
apt install -y nginx
systemctl enable nginx
systemctl start nginx

echo "<h1>Hello from EC2</h1>" > /var/www/html/index.html`,
            },
            {
                key: "privatePublic",
                title: "Public vs private IP",
                hint: "Understand routing",
                code: `# Private IP
# - used inside VPC
# - does not work directly from internet

# Public IP
# - internet reachable if security group allows
# - may change if you stop and start (unless Elastic IP)`,
            },
            {
                key: "health",
                title: "Health check idea",
                hint: "How LBs and monitoring see it",
                code: `# A simple health endpoint idea:
# - return 200 OK
# - lightweight
# - no heavy DB work

# Example:
# GET /health -> 200 OK`,
            },
        ];
    }, []);

    const copyToClipboard = async (text, key) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedKey(key);
            window.setTimeout(() => setCopiedKey(""), 900);
        } catch {
            setCopiedKey("");
        }
    };

    return (
        <Styled.Wrapper>
            <Styled.Header
                onClick={() => setOpen((v) => !v)}
                role="button"
                tabIndex={0}
            >
                <Styled.Title>
                    <FiServer />
                    AWS EC2
                    <Styled.Badge>Virtual machines in AWS</Styled.Badge>
                </Styled.Title>

                <Styled.Toggle aria-hidden="true">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {!open && (
                <Styled.Preview>
                    <Styled.PreviewLine>
                        EC2 is AWS service for running virtual machines
                        (servers) in the cloud.
                    </Styled.PreviewLine>
                    <Styled.PreviewLine>
                        Learn AMI, instance types, SSH, security groups,
                        storage, and user data scripts.
                    </Styled.PreviewLine>
                </Styled.Preview>
            )}

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiGlobe />
                            <h3>What is EC2</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            EC2 stands for Elastic Compute Cloud. It lets you
                            rent virtual machines inside AWS. You select an OS
                            image, CPU and RAM size, networking, and firewall
                            rules.
                        </Styled.Para>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Beginner mental model
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    EC2 is like renting a computer in AWS data
                                    center. You can install software, run
                                    servers, and expose ports to internet.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiLayers />
                            <h3>Core parts you should know</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>AMI</b> - the OS image, example Ubuntu,
                                Amazon Linux
                            </li>
                            <li>
                                <b>Instance type</b> - CPU and RAM size, example
                                t3.micro
                            </li>
                            <li>
                                <b>EBS</b> - storage disk attached to instance
                            </li>
                            <li>
                                <b>Security group</b> - firewall rules for
                                inbound and outbound
                            </li>
                            <li>
                                <b>Key pair</b> - private key used for SSH login
                            </li>
                            <li>
                                <b>VPC and subnet</b> - the private network
                                where instance lives
                            </li>
                        </Styled.Bullets>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiKey />
                            <h3>Access - SSH</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            SSH is the most common way to login to EC2
                            instances. You need the private key file and the
                            correct username for the AMI.
                        </Styled.Para>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Typical usernames
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>Ubuntu AMI - user "ubuntu"</li>
                                <li>Amazon Linux - user "ec2-user"</li>
                            </Styled.Bullets>
                        </Styled.Example>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Security warning
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    Never share your private key. Store it
                                    safely. Also do not open SSH to the whole
                                    internet.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiShield />
                            <h3>Security groups</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Security group is a stateful firewall. If inbound
                            traffic is allowed, return traffic is allowed
                            automatically.
                        </Styled.Para>

                        <Styled.Bullets>
                            <li>Allow only needed ports</li>
                            <li>Restrict SSH to your IP</li>
                            <li>Open HTTP and HTTPS if hosting website</li>
                        </Styled.Bullets>

                        <Styled.Note>
                            <FiTool />
                            <div>
                                <Styled.NoteTitle>Golden rule</Styled.NoteTitle>
                                <Styled.NoteText>
                                    Start with minimum access. Add rules only
                                    when required.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiHardDrive />
                            <h3>Storage - EBS</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                EBS is like a virtual hard disk attached to your
                                instance
                            </li>
                            <li>You can resize volume later</li>
                            <li>Snapshots can be used for backup</li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Common setup
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>1 root EBS volume for OS</li>
                                <li>
                                    optional extra EBS volume for application
                                    data
                                </li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiWifi />
                            <h3>Public IP, private IP, Elastic IP</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Private IP</b> - used inside VPC, not
                                reachable from internet directly
                            </li>
                            <li>
                                <b>Public IP</b> - internet reachable if allowed
                                by security group
                            </li>
                            <li>
                                <b>Elastic IP</b> - static public IP that you
                                own until you release it
                            </li>
                        </Styled.Bullets>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Common surprise
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    Default public IP can change when instance
                                    stops and starts. Use Elastic IP if you need
                                    fixed address.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiCpu />
                            <h3>User data scripts</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            User data is a startup script that runs when the
                            instance boots. It is used to auto install packages
                            and configure services. This is a basic form of
                            automation.
                        </Styled.Para>

                        <Styled.Note>
                            <FiActivity />
                            <div>
                                <Styled.NoteTitle>
                                    Real use case
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Use user data to install nginx, start your
                                    backend, pull latest code, or run Docker
                                    containers at boot.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiTerminal />
                            <h3>Command playground</h3>
                        </Styled.SectionHead>

                        <Styled.SnippetGrid>
                            {snippets.map((s) => {
                                const isCopied = copiedKey === s.key;
                                return (
                                    <Styled.SnippetCard key={s.key}>
                                        <Styled.SnippetTop>
                                            <div>
                                                <Styled.SnippetTitle>
                                                    {s.title}
                                                </Styled.SnippetTitle>
                                                <Styled.SnippetHint>
                                                    {s.hint}
                                                </Styled.SnippetHint>
                                            </div>

                                            <Styled.CopyBtn
                                                type="button"
                                                onClick={() =>
                                                    copyToClipboard(
                                                        s.code,
                                                        s.key,
                                                    )
                                                }
                                                title={
                                                    isCopied ? "Copied" : "Copy"
                                                }
                                            >
                                                {isCopied ? (
                                                    <FiCheckCircle />
                                                ) : (
                                                    <FiCopy />
                                                )}
                                                {isCopied ? "Copied" : "Copy"}
                                            </Styled.CopyBtn>
                                        </Styled.SnippetTop>

                                        <Styled.CodeBlock>
                                            <pre>{s.code}</pre>
                                        </Styled.CodeBlock>
                                    </Styled.SnippetCard>
                                );
                            })}
                        </Styled.SnippetGrid>
                    </Styled.Section>

                    <Styled.FooterNote>
                        EC2 is the simplest cloud compute starting point. Master
                        security groups, SSH, and automation with user data and
                        you will feel confident quickly.
                    </Styled.FooterNote>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default AwsEc2;
