// src/topics/reverseProxy/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiRepeat,
    FiChevronDown,
    FiChevronUp,
    FiGlobe,
    FiServer,
    FiShield,
    FiLock,
    FiLayers,
    FiActivity,
    FiZap,
    FiAlertTriangle,
    FiCheckCircle,
    FiCopy,
    FiTerminal,
    FiTool,
} from "react-icons/fi";

const ReverseProxy = () => {
    const [open, setOpen] = useState(false);
    const [copiedKey, setCopiedKey] = useState("");

    const snippets = useMemo(() => {
        return [
            {
                key: "reverseVsForward",
                title: "Reverse proxy vs forward proxy",
                hint: "Direction matters",
                code: `# Reverse proxy:
# - sits in front of servers
# - clients talk to proxy
# - proxy forwards to backend servers

# Forward proxy:
# - sits in front of clients
# - clients talk to proxy to reach internet
# - used in offices, VPN, filtering`,
            },
            {
                key: "routing",
                title: "Request routing",
                hint: "Path based routing idea",
                code: `# Reverse proxy can route requests like:
# - /api -> backend service
# - /admin -> admin service
# - / -> frontend static app`,
            },
            {
                key: "tlsTermination",
                title: "TLS termination",
                hint: "HTTPS handled at proxy",
                code: `# TLS termination:
# - browser uses HTTPS with proxy
# - proxy decrypts traffic
# - forwards to backend on private network
# Benefit:
# - single place to manage certificates`,
            },
            {
                key: "headers",
                title: "Important proxy headers",
                hint: "Real client IP and protocol",
                code: `# Common headers a reverse proxy sets:
# - X-Forwarded-For: original client IP
# - X-Forwarded-Proto: http or https
# - Host: original host

# Backend should trust these only if proxy is trusted`,
            },
            {
                key: "caching",
                title: "Caching concept",
                hint: "Speed up repeated content",
                code: `# Reverse proxy can cache responses:
# - static files
# - images
# - GET API responses (careful)

# Benefit:
# - reduces backend load
# - improves latency`,
            },
            {
                key: "rateLimit",
                title: "Rate limiting",
                hint: "Protect from abuse",
                code: `# Reverse proxy can limit requests:
# - requests per IP per minute
# - burst control

# Benefit:
# - helps against basic abuse and DDoS patterns`,
            },
            {
                key: "compression",
                title: "Compression",
                hint: "Reduce bandwidth",
                code: `# Proxy can enable gzip or brotli:
# - compress HTML, CSS, JS, JSON
# - not useful for already compressed images
# Benefit:
# - faster page loads`,
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
                    <FiRepeat />
                    Reverse proxy
                    <Styled.Badge>
                        Routing, TLS, caching, protection
                    </Styled.Badge>
                </Styled.Title>

                <Styled.Toggle aria-hidden="true">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {!open && (
                <Styled.Preview>
                    <Styled.PreviewLine>
                        Reverse proxy sits in front of your backend services and
                        forwards requests.
                    </Styled.PreviewLine>
                    <Styled.PreviewLine>
                        It helps with routing, HTTPS, caching, rate limiting,
                        and hiding internal servers.
                    </Styled.PreviewLine>
                </Styled.Preview>
            )}

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiGlobe />
                            <h3>What is a reverse proxy</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            A reverse proxy is a server that accepts requests
                            from clients and then forwards them to one or more
                            backend servers. The client thinks it is talking to
                            one server, but the proxy decides where to send the
                            request.
                        </Styled.Para>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Beginner mental model
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Reverse proxy is a front desk. Users talk to
                                    the front desk, and the front desk sends
                                    them to the correct room.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiLayers />
                            <h3>Reverse proxy vs load balancer</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            These often overlap. A reverse proxy can also load
                            balance. A load balancer can also behave like a
                            reverse proxy. The key idea is what features you
                            enable.
                        </Styled.Para>

                        <Styled.Bullets>
                            <li>
                                <b>Reverse proxy focus</b> - routing, headers,
                                TLS termination, caching, rate limiting
                            </li>
                            <li>
                                <b>Load balancer focus</b> - distribute traffic,
                                health checks, high availability
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Common production setup
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>Cloud load balancer at edge</li>
                                <li>Nginx reverse proxy inside VPC</li>
                                <li>Multiple backend services behind it</li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiServer />
                            <h3>Routing requests</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Reverse proxy can route based on host and path. This
                            allows multiple services to run behind one public
                            domain.
                        </Styled.Para>

                        <Styled.Bullets>
                            <li>
                                Host based routing - api.example.com goes to API
                                service
                            </li>
                            <li>
                                Path based routing - /api goes to backend, /
                                goes to frontend
                            </li>
                        </Styled.Bullets>

                        <Styled.Note>
                            <FiTool />
                            <div>
                                <Styled.NoteTitle>
                                    Why this is useful
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    It hides internal services and gives a clean
                                    public entry point.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiLock />
                            <h3>TLS termination and SSL</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            TLS termination means HTTPS is handled at the proxy.
                            The proxy decrypts traffic and forwards it to
                            backends. This makes certificate management easier.
                        </Styled.Para>

                        <Styled.Bullets>
                            <li>One place to manage certificates</li>
                            <li>
                                Backends can run HTTP inside private network
                            </li>
                            <li>Proxy can enforce HTTPS redirects</li>
                        </Styled.Bullets>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Security note
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    Trust forwarded headers only from your
                                    trusted proxy. Do not accept X-Forwarded-For
                                    from random clients.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiActivity />
                            <h3>Headers and real client IP</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Because proxy sits between client and backend,
                            backend needs headers to know original client IP and
                            protocol. Common headers are X-Forwarded-For and
                            X-Forwarded-Proto.
                        </Styled.Para>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Typical use
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>Logging real client IP</li>
                                <li>
                                    Generating correct redirects based on https
                                </li>
                                <li>Security checks and rate limiting</li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiZap />
                            <h3>Caching and compression</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                Caching - store responses so backend is not hit
                                every time
                            </li>
                            <li>
                                Compression - gzip or brotli to reduce payload
                                size
                            </li>
                            <li>Best for static assets and GET responses</li>
                        </Styled.Bullets>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Good practice
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Cache public static content aggressively,
                                    but be careful caching personalized API
                                    responses.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiShield />
                            <h3>Protection features</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                Rate limiting - stop abuse by limiting requests
                                per IP
                            </li>
                            <li>
                                Request size limits - block huge payload attacks
                            </li>
                            <li>
                                Basic WAF style rules - block suspicious
                                patterns
                            </li>
                        </Styled.Bullets>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Reality check
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    Reverse proxy helps, but serious DDoS
                                    protection is usually handled by CDN or
                                    cloud edge services.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
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
                        Reverse proxy is your control layer between internet and
                        your services. It makes routing clean, security tighter,
                        and operations simpler.
                    </Styled.FooterNote>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default ReverseProxy;
