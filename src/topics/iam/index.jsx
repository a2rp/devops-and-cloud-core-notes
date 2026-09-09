// src/topics/iam/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiUser,
    FiChevronDown,
    FiChevronUp,
    FiUsers,
    FiShield,
    FiLock,
    FiKey,
    FiFileText,
    FiTool,
    FiAlertTriangle,
    FiCheckCircle,
    FiCopy,
    FiTerminal,
    FiLayers,
    FiGlobe,
} from "react-icons/fi";

const Iam = () => {
    const [open, setOpen] = useState(true);
    const [copiedKey, setCopiedKey] = useState("");

    const snippets = useMemo(() => {
        return [
            {
                key: "iamParts",
                title: "IAM building blocks",
                hint: "User, group, role, policy",
                code: `# IAM basics:
# - User: a person or app identity (long lived)
# - Group: a collection of users
# - Role: a temporary identity that can be assumed
# - Policy: permissions written in JSON
# - Permission boundary: max allowed permissions
# - MFA: extra login security`,
            },
            {
                key: "leastPrivilege",
                title: "Least privilege rule",
                hint: "Give minimum access",
                code: `# Least privilege means:
# - allow only actions required
# - allow only specific resources
# - deny everything else by default

# Bad:
# Action: "*"
# Resource: "*"`,
            },
            {
                key: "policyExample",
                title: "Policy example idea",
                hint: "Read only S3 bucket",
                code: `# Example policy intent:
# - allow listing bucket
# - allow reading objects
# - only for one bucket

# In real JSON this looks like:
# Effect: Allow
# Action: s3:ListBucket, s3:GetObject
# Resource: arn:aws:s3:::my-bucket and arn:aws:s3:::my-bucket/*`,
            },
            {
                key: "roles",
                title: "Why roles are powerful",
                hint: "Temporary credentials",
                code: `# Roles are assumed:
# - by services (EC2, Lambda)
# - by users (switch role)
# - by external identity (OIDC, SSO)

# Benefit:
# - no hardcoded long lived keys in servers`,
            },
            {
                key: "mfa",
                title: "MFA and root account",
                hint: "Protect the crown jewels",
                code: `# Best practice:
# - enable MFA on root account
# - never use root for daily work
# - create admin role/user for operations
# - store root credentials safely`,
            },
            {
                key: "accessKeys",
                title: "Access keys basics",
                hint: "Programmatic access",
                code: `# Access keys:
# - used by CLI and SDK
# - should be rotated
# - should not be stored in code
# - should be limited by policy

# Better:
# use roles and instance profiles where possible`,
            },
            {
                key: "commonMistakes",
                title: "Common mistakes",
                hint: "How incidents happen",
                code: `# Common IAM mistakes:
# - too broad permissions
# - sharing one IAM user among team
# - leaving unused keys active
# - no MFA
# - public S3 policies
# - hardcoding keys in repo`,
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
                    <FiUser />
                    IAM
                    <Styled.Badge>Identity and access control</Styled.Badge>
                </Styled.Title>

                <Styled.Toggle aria-hidden="true">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {!open && (
                <Styled.Preview>
                    <Styled.PreviewLine>
                        IAM controls who can do what in AWS. It is the security
                        foundation.
                    </Styled.PreviewLine>
                    <Styled.PreviewLine>
                        Learn users, groups, roles, policies, least privilege,
                        and common mistakes.
                    </Styled.PreviewLine>
                </Styled.Preview>
            )}

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiGlobe />
                            <h3>What is IAM</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            IAM stands for Identity and Access Management. It
                            controls permissions in AWS. It answers two
                            questions: who are you and what are you allowed to
                            do.
                        </Styled.Para>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Beginner mental model
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    IAM is the security gatekeeper. Every AWS
                                    action checks IAM before it runs.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiLayers />
                            <h3>Core building blocks</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>User</b> - identity for a person or app
                            </li>
                            <li>
                                <b>Group</b> - collection of users to attach
                                permissions easily
                            </li>
                            <li>
                                <b>Role</b> - temporary identity that can be
                                assumed
                            </li>
                            <li>
                                <b>Policy</b> - JSON document defining allowed
                                or denied actions
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Simple example
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>Create group "developers"</li>
                                <li>
                                    Attach policy that allows read access to
                                    logs
                                </li>
                                <li>Add users to "developers"</li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiShield />
                            <h3>Least privilege principle</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Least privilege means you should grant the minimum
                            permissions required to do the job. This reduces
                            blast radius if a credential is leaked.
                        </Styled.Para>

                        <Styled.Bullets>
                            <li>
                                Restrict actions - do not use "*" unless truly
                                needed
                            </li>
                            <li>
                                Restrict resources - allow only specific
                                buckets, instances, tables
                            </li>
                            <li>Prefer roles with temporary credentials</li>
                        </Styled.Bullets>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Danger pattern
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    AdministratorAccess everywhere is easy but
                                    unsafe. It is common in early projects, but
                                    it should not stay.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiLock />
                            <h3>Policies - how permissions are written</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Policies are JSON documents. They contain statements
                            with an effect (Allow or Deny), actions (like
                            s3:GetObject), and resources (like a bucket ARN).
                        </Styled.Para>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Policy statement fields
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>
                                    <b>Effect</b> - Allow or Deny
                                </li>
                                <li>
                                    <b>Action</b> - what operation is allowed,
                                    example "s3:GetObject"
                                </li>
                                <li>
                                    <b>Resource</b> - what object it applies to,
                                    example one bucket
                                </li>
                                <li>
                                    <b>Condition</b> - optional rules, example
                                    allow only from certain IP
                                </li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiKey />
                            <h3>Roles - why they matter</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Roles are the best way to avoid hardcoding keys.
                            Services like EC2 can assume a role using an
                            instance profile, and then call AWS APIs with
                            temporary credentials.
                        </Styled.Para>

                        <Styled.Note>
                            <FiTool />
                            <div>
                                <Styled.NoteTitle>
                                    Real world pattern
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    EC2 instance needs S3 access. Attach an IAM
                                    role to EC2. No access keys stored on disk.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiUsers />
                            <h3>Users and groups in teams</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                Each developer should have their own identity
                            </li>
                            <li>Use groups for shared permissions</li>
                            <li>Enable MFA for human users</li>
                            <li>Remove access quickly when someone leaves</li>
                        </Styled.Bullets>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Team mistake
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    Sharing one IAM user across the whole team
                                    kills accountability and makes incidents
                                    harder to investigate.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiFileText />
                            <h3>Root account rules</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>Do not use root for daily work</li>
                            <li>Enable MFA on root immediately</li>
                            <li>
                                Create admin role or admin user for operations
                            </li>
                            <li>Store root credentials safely</li>
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
                        IAM is the difference between safe cloud and chaos
                        cloud. Keep permissions small, prefer roles, enable MFA,
                        and never hardcode keys.
                    </Styled.FooterNote>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default Iam;

