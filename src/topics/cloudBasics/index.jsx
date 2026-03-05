// src/topics/cloudBasics/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiCloud,
    FiChevronDown,
    FiChevronUp,
    FiGlobe,
    FiMapPin,
    FiServer,
    FiHardDrive,
    FiWifi,
    FiShield,
    FiDollarSign,
    FiLayers,
    FiCheckCircle,
    FiAlertTriangle,
    FiCopy,
    FiTerminal,
    FiTool,
    FiActivity,
} from "react-icons/fi";

const CloudBasics = () => {
    const [open, setOpen] = useState(false);
    const [copiedKey, setCopiedKey] = useState("");

    const snippets = useMemo(() => {
        return [
            {
                key: "sharedResponsibility",
                title: "Shared responsibility model",
                hint: "Who secures what",
                code: `# Cloud provider responsibilities:
# - physical data centers
# - hardware and networking
# - base infrastructure availability

# Your responsibilities:
# - your app code
# - your data
# - access control (IAM)
# - OS patching (for VMs)
# - configuration and secrets`,
            },
            {
                key: "regionsAz",
                title: "Regions and availability zones",
                hint: "High availability idea",
                code: `# Region - a geographic area, example ap-south-1
# Availability Zone (AZ) - separate data centers inside a region

# High availability idea:
# run servers in 2+ AZs so one AZ failure does not kill your app`,
            },
            {
                key: "computeStorageNetwork",
                title: "Compute vs storage vs networking",
                hint: "The 3 big building blocks",
                code: `# Compute - run code
# Example: virtual machines, containers, serverless

# Storage - store data
# Example: object storage, block storage, managed databases

# Networking - move data
# Example: VPC, subnets, routing, load balancers, DNS`,
            },
            {
                key: "pricing",
                title: "Pay as you go pricing",
                hint: "Costs come from usage",
                code: `# Common cost drivers:
# - compute time (per second or per hour)
# - storage size (GB per month)
# - requests (API calls)
# - data transfer out (egress)
# - managed services premium`,
            },
            {
                key: "iam",
                title: "Identity and access",
                hint: "Least privilege",
                code: `# Good practice:
# - create roles, not shared root credentials
# - give minimum permissions needed
# - rotate keys
# - enable MFA where possible`,
            },
            {
                key: "envs",
                title: "Dev, staging, prod",
                hint: "Keep environments separate",
                code: `# Common approach:
# - dev for experiments
# - staging for production-like testing
# - prod for users

# Good rule:
# never test directly in prod`,
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
                    <FiCloud />
                    Cloud basics
                    <Styled.Badge>
                        Regions, AZ, pricing, responsibility
                    </Styled.Badge>
                </Styled.Title>

                <Styled.Toggle aria-hidden="true">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {!open && (
                <Styled.Preview>
                    <Styled.PreviewLine>
                        Cloud is renting compute, storage, and networking from a
                        provider.
                    </Styled.PreviewLine>
                    <Styled.PreviewLine>
                        Learn regions, availability zones, shared
                        responsibility, and how pricing works.
                    </Styled.PreviewLine>
                </Styled.Preview>
            )}

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiGlobe />
                            <h3>What is cloud</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Cloud means you do not buy physical servers. You
                            rent infrastructure from a provider and spin it up
                            on demand. The provider runs data centers. You focus
                            on building and operating your application.
                        </Styled.Para>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Beginner mental model
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Cloud is like renting a fully managed
                                    building. You choose rooms, power, and
                                    security rules. The landlord handles the
                                    building itself.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiMapPin />
                            <h3>Regions and availability zones</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Region</b> - a large geographic area with
                                multiple data centers
                            </li>
                            <li>
                                <b>Availability Zone</b> - separate data center
                                group inside a region
                            </li>
                            <li>
                                <b>High availability</b> - deploy across 2 or
                                more AZs
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Why AZ matters
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>
                                    If one data center has an outage, your app
                                    stays alive in another AZ
                                </li>
                                <li>
                                    Load balancer can send traffic to healthy AZ
                                </li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiLayers />
                            <h3>Compute, storage, networking</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Compute</b> - where code runs, example VMs,
                                containers, serverless functions
                            </li>
                            <li>
                                <b>Storage</b> - where data lives, example
                                object storage, block disks, databases
                            </li>
                            <li>
                                <b>Networking</b> - how traffic moves, example
                                VPC, subnets, routing, load balancers
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Simple web app mapping
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>Compute - your backend servers</li>
                                <li>Storage - images and database</li>
                                <li>
                                    Networking - DNS, load balancer, private
                                    network
                                </li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiShield />
                            <h3>Shared responsibility model</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Cloud security is shared. Provider secures the
                            underlying infrastructure. You secure your
                            configuration, identities, data, and application.
                        </Styled.Para>

                        <Styled.Bullets>
                            <li>
                                <b>Provider handles</b> - data center security,
                                hardware, base networking, service availability
                            </li>
                            <li>
                                <b>You handle</b> - IAM permissions, secrets,
                                application security, data access rules
                            </li>
                        </Styled.Bullets>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Biggest real world mistake
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    People assume cloud is secure by default.
                                    Wrong. Misconfigured permissions and public
                                    buckets cause most incidents.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiDollarSign />
                            <h3>Pricing basics</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Pay as you go</b> - you pay for usage, not
                                ownership
                            </li>
                            <li>
                                <b>Compute time</b> - cost per hour or per
                                second
                            </li>
                            <li>
                                <b>Storage size</b> - cost per GB per month
                            </li>
                            <li>
                                <b>Requests</b> - API calls, function
                                invocations
                            </li>
                            <li>
                                <b>Data transfer</b> - outgoing internet traffic
                                can cost a lot
                            </li>
                        </Styled.Bullets>

                        <Styled.Note>
                            <FiActivity />
                            <div>
                                <Styled.NoteTitle>
                                    Cost control habit
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Always set budgets and alerts. Clean up
                                    unused resources. Egress charges can
                                    surprise you.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiTool />
                            <h3>Core good practices</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Least privilege</b> in IAM - grant minimum
                                permissions
                            </li>
                            <li>Separate dev, staging, production</li>
                            <li>Use encryption for sensitive data</li>
                            <li>Backups and disaster recovery plan</li>
                            <li>
                                Monitoring and logs for everything important
                            </li>
                        </Styled.Bullets>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiTerminal />
                            <h3>Cheat sheet playground</h3>
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
                        Cloud is powerful because everything is programmable.
                        Treat infrastructure like code, keep permissions tight,
                        and always watch costs.
                    </Styled.FooterNote>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default CloudBasics;
