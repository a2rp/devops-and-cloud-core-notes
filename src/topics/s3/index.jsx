// src/topics/s3/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiDatabase,
    FiChevronDown,
    FiChevronUp,
    FiFolder,
    FiFileText,
    FiGlobe,
    FiShield,
    FiLock,
    FiLink,
    FiRefreshCcw,
    FiClock,
    FiActivity,
    FiAlertTriangle,
    FiCheckCircle,
    FiCopy,
    FiTerminal,
    FiTool,
} from "react-icons/fi";

const S3 = () => {
    const [open, setOpen] = useState(true);
    const [copiedKey, setCopiedKey] = useState("");

    const snippets = useMemo(() => {
        return [
            {
                key: "concepts",
                title: "S3 core concepts",
                hint: "Bucket, object, key",
                code: `# S3 basics:
# - Bucket: top level container (must be globally unique name)
# - Object: the file you store
# - Key: object path/name inside bucket, example images/logo.png
# - Prefix: folder-like part of key, example images/
# - Metadata: extra info stored with object`,
            },
            {
                key: "publicPrivate",
                title: "Public vs private",
                hint: "Default should be private",
                code: `# Private bucket:
# - only accessible using AWS auth (IAM)
# - best for app uploads and sensitive files

# Public bucket:
# - accessible over internet
# - used for public assets (with strict control)

# Biggest mistake:
# making bucket public accidentally`,
            },
            {
                key: "staticWebsite",
                title: "Static website hosting idea",
                hint: "Serve HTML, CSS, JS",
                code: `# S3 can host static websites:
# - upload index.html, assets
# - enable static website hosting
# - set index and error document
# - allow public read or use CloudFront

# Good practice:
# use CloudFront in front for HTTPS and caching`,
            },
            {
                key: "lifecycle",
                title: "Lifecycle policies",
                hint: "Auto move or delete old files",
                code: `# Lifecycle policy examples:
# - move logs to cheaper storage after 30 days
# - delete temporary uploads after 7 days
# - expire old backups after 180 days`,
            },
            {
                key: "versioning",
                title: "Versioning",
                hint: "Protect against accidental deletes",
                code: `# Versioning keeps multiple versions of same key:
# - helps recover overwritten files
# - helps recover deleted files (delete marker)

# Cost note:
# more versions means more storage cost`,
            },
            {
                key: "encryption",
                title: "Encryption",
                hint: "Data protection",
                code: `# Encryption options:
# - SSE-S3: AWS managed keys
# - SSE-KMS: KMS managed keys, more control and audit
# - client side encryption: you encrypt before upload

# Simple default:
# enable SSE-S3 or SSE-KMS`,
            },
            {
                key: "presignedUrl",
                title: "Pre-signed URL concept",
                hint: "Temporary upload or download link",
                code: `# Pre-signed URL:
# - a temporary URL with signature
# - allows upload/download without making bucket public
# - expires after set time

# Common use:
# user uploads file directly to S3 from frontend`,
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
                    <FiDatabase />
                    S3
                    <Styled.Badge>Object storage in AWS</Styled.Badge>
                </Styled.Title>

                <Styled.Toggle aria-hidden="true">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {!open && (
                <Styled.Preview>
                    <Styled.PreviewLine>
                        S3 is object storage. You store files as objects inside
                        buckets.
                    </Styled.PreviewLine>
                    <Styled.PreviewLine>
                        Learn buckets, objects, permissions, static hosting,
                        versioning, lifecycle, and pre-signed URLs.
                    </Styled.PreviewLine>
                </Styled.Preview>
            )}

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiFolder />
                            <h3>What is S3</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            S3 stands for Simple Storage Service. It is object
                            storage used to store files like images, videos,
                            backups, logs, and even static websites. You store
                            objects inside buckets.
                        </Styled.Para>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Beginner mental model
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Bucket is like a big hard drive folder in
                                    the cloud. Object is a file. Key is the file
                                    path name.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiFileText />
                            <h3>Bucket, object, key, prefix</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Bucket</b> - top level container, name must
                                be globally unique
                            </li>
                            <li>
                                <b>Object</b> - actual file content plus
                                metadata
                            </li>
                            <li>
                                <b>Key</b> - object name path, example
                                "images/logo.png"
                            </li>
                            <li>
                                <b>Prefix</b> - folder-like part, example
                                "images/"
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Example mapping
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>Bucket: "my-app-assets"</li>
                                <li>Key: "avatars/user123.png"</li>
                                <li>Object: the png file stored at that key</li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiShield />
                            <h3>Permissions - public vs private</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            S3 security is mostly about access. Most production
                            buckets should be private and accessed via IAM roles
                            or pre-signed URLs.
                        </Styled.Para>

                        <Styled.Bullets>
                            <li>
                                <b>Private</b> - only accessible with AWS auth,
                                safest default
                            </li>
                            <li>
                                <b>Public</b> - accessible from internet, used
                                only for public assets
                            </li>
                        </Styled.Bullets>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Most famous S3 incident
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    Misconfigured buckets accidentally made
                                    public. Always double check public access
                                    block settings and policies.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>

                        <Styled.Note>
                            <FiLock />
                            <div>
                                <Styled.NoteTitle>
                                    Safer pattern for public content
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Keep bucket private and put CloudFront in
                                    front. Then control access and caching at
                                    CDN layer.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiGlobe />
                            <h3>Static website hosting</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            S3 can serve static files like HTML, CSS, JS. That
                            means you can host a simple website without servers.
                            For HTTPS and better performance, use CloudFront.
                        </Styled.Para>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                What works in S3 hosting
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>Portfolio sites</li>
                                <li>Docs websites</li>
                                <li>Single page apps</li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiRefreshCcw />
                            <h3>Versioning</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>Stores multiple versions of the same key</li>
                            <li>Helps recover overwritten files</li>
                            <li>
                                Delete creates a delete marker instead of
                                permanent removal
                            </li>
                        </Styled.Bullets>

                        <Styled.Note>
                            <FiTool />
                            <div>
                                <Styled.NoteTitle>
                                    When to enable
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Enable versioning for important buckets like
                                    backups and critical assets. Remember it
                                    increases storage usage.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiClock />
                            <h3>Lifecycle policies</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Lifecycle rules automatically transition objects to
                            cheaper storage classes or delete them after a time.
                            This keeps storage costs controlled.
                        </Styled.Para>

                        <Styled.Bullets>
                            <li>Move logs to cheaper tier after 30 days</li>
                            <li>Delete temporary uploads after 7 days</li>
                            <li>Expire older backup versions after 180 days</li>
                        </Styled.Bullets>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiActivity />
                            <h3>Encryption</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>SSE-S3</b> - AWS managed keys, simple and
                                common
                            </li>
                            <li>
                                <b>SSE-KMS</b> - KMS managed keys, better audit
                                and control
                            </li>
                            <li>
                                <b>Client side</b> - you encrypt before upload
                            </li>
                        </Styled.Bullets>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Safe default
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Enable server-side encryption and block
                                    public access unless you have a specific
                                    reason.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiLink />
                            <h3>Pre-signed URLs</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Pre-signed URL is a time-limited signed link. It
                            allows a user to upload or download an object
                            without exposing the bucket publicly. This is a
                            standard pattern for file uploads from frontend.
                        </Styled.Para>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Real use case
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>User requests upload URL from backend</li>
                                <li>
                                    Backend returns a pre-signed URL valid for 1
                                    to 5 minutes
                                </li>
                                <li>Frontend uploads file directly to S3</li>
                            </Styled.Bullets>
                        </Styled.Example>
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
                        Treat S3 like a secure vault by default. Private
                        buckets, least privilege access, encryption on,
                        lifecycle rules for cost control.
                    </Styled.FooterNote>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default S3;

