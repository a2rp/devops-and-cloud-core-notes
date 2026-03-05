// src/topics/loadBalancer/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiShuffle,
    FiChevronDown,
    FiChevronUp,
    FiServer,
    FiActivity,
    FiShield,
    FiGlobe,
    FiLayers,
    FiCheckCircle,
    FiAlertTriangle,
    FiCopy,
    FiTerminal,
    FiTool,
    FiCpu,
    FiHeart,
} from "react-icons/fi";

const LoadBalancer = () => {
    const [open, setOpen] = useState(false);
    const [copiedKey, setCopiedKey] = useState("");

    const snippets = useMemo(() => {
        return [
            {
                key: "whyLb",
                title: "Why load balancing exists",
                hint: "Core problems it solves",
                code: `# Load balancer helps with:
# - scale: distribute traffic across multiple servers
# - reliability: remove unhealthy servers automatically
# - performance: avoid one server becoming hotspot
# - upgrades: deploy new versions without downtime`,
            },
            {
                key: "l4l7",
                title: "Layer 4 vs Layer 7",
                hint: "TCP vs HTTP understanding",
                code: `# Layer 4 load balancer (L4)
# - works at TCP or UDP level
# - routes based on IP and port
# - fast, simple, protocol agnostic

# Layer 7 load balancer (L7)
# - works at HTTP level
# - can route based on host, path, headers, cookies
# - can do TLS termination and redirects`,
            },
            {
                key: "healthChecks",
                title: "Health checks",
                hint: "How LB detects broken servers",
                code: `# Health check:
# - LB sends periodic request to backend
# - if fails N times, backend removed from rotation
# - when it recovers, backend re-added

# Example:
# GET /health -> 200 OK`,
            },
            {
                key: "algorithms",
                title: "Common balancing algorithms",
                hint: "How traffic is distributed",
                code: `# Common algorithms:
# - round robin: cycle through servers
# - least connections: choose server with fewest active connections
# - ip hash: same client IP goes to same backend (sticky-ish)`,
            },
            {
                key: "stickySessions",
                title: "Sticky sessions",
                hint: "When you need same server",
                code: `# Sticky sessions:
# - keep a user on same backend
# - done using cookies or hashing

# Better practice:
# keep app stateless and store sessions in shared store (redis, db)`,
            },
            {
                key: "ha",
                title: "High availability setup",
                hint: "Avoid single point of failure",
                code: `# Good HA pattern:
# - multiple backend servers
# - deploy across multiple AZs
# - load balancer across AZs
# - autoscaling group for backends`,
            },
            {
                key: "tlsTermination",
                title: "TLS termination",
                hint: "HTTPS handling",
                code: `# TLS termination:
# - client uses HTTPS to load balancer
# - load balancer decrypts traffic
# - forwards to backend via HTTP or HTTPS

# Benefit:
# - simpler cert management
# - offload CPU from backend`,
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
                    <FiShuffle />
                    Load balancer
                    <Styled.Badge>
                        Distribute traffic and add reliability
                    </Styled.Badge>
                </Styled.Title>

                <Styled.Toggle aria-hidden="true">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {!open && (
                <Styled.Preview>
                    <Styled.PreviewLine>
                        Load balancer sits in front of servers and spreads
                        traffic across them.
                    </Styled.PreviewLine>
                    <Styled.PreviewLine>
                        Learn L4 vs L7, health checks, routing, TLS termination,
                        and high availability patterns.
                    </Styled.PreviewLine>
                </Styled.Preview>
            )}

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiGlobe />
                            <h3>What is a load balancer</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            A load balancer is a system that receives incoming
                            traffic and forwards it to one of multiple backend
                            servers. It helps your app scale and stay online
                            when some servers fail.
                        </Styled.Para>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Beginner mental model
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Load balancer is like a traffic police
                                    officer. It directs each incoming request to
                                    a healthy server.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiServer />
                            <h3>Why load balancing is needed</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>One server cannot handle infinite traffic</li>
                            <li>
                                If one server crashes, your app should still
                                work
                            </li>
                            <li>You want to deploy updates without downtime</li>
                            <li>You want better latency by spreading load</li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Simple example
                            </Styled.ExampleTitle>
                            <Styled.Para>
                                Without load balancer, all users hit one server.
                                If it dies, website is down. With load balancer,
                                users are routed to many servers.
                            </Styled.Para>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiLayers />
                            <h3>Layer 4 vs Layer 7</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Layer 4</b> - routes based on TCP or UDP info
                                like IP and port
                            </li>
                            <li>
                                <b>Layer 7</b> - understands HTTP and can route
                                by host, path, headers
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Routing examples
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>
                                    L7 - "/api" goes to backend service,
                                    "/images" goes to static service
                                </li>
                                <li>
                                    L7 - "admin.example.com" goes to admin
                                    servers
                                </li>
                                <li>
                                    L4 - any TCP connection on port 443 gets
                                    forwarded to a backend
                                </li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiHeart />
                            <h3>Health checks</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Health checks are periodic checks done by the load
                            balancer to confirm a backend server is alive.
                            Unhealthy servers are removed from traffic
                            automatically.
                        </Styled.Para>

                        <Styled.Bullets>
                            <li>Health endpoint should be fast and stable</li>
                            <li>Return 200 when healthy</li>
                            <li>
                                Do not run heavy DB queries inside health check
                            </li>
                        </Styled.Bullets>

                        <Styled.Note>
                            <FiActivity />
                            <div>
                                <Styled.NoteTitle>
                                    Production habit
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Use "readiness" checks for traffic readiness
                                    and "liveness" checks for process alive.
                                    Keep them separate when possible.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiTool />
                            <h3>Balancing algorithms</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Round robin</b> - request goes to next server
                                in order
                            </li>
                            <li>
                                <b>Least connections</b> - choose server with
                                fewer active connections
                            </li>
                            <li>
                                <b>IP hash</b> - consistent mapping based on
                                client IP
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                When least connections helps
                            </Styled.ExampleTitle>
                            <Styled.Para>
                                If some requests are slow, least connections
                                avoids sending more traffic to already busy
                                servers.
                            </Styled.Para>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiCpu />
                            <h3>Sticky sessions</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Sticky sessions means the same user is sent to the
                            same backend server repeatedly. It helps when your
                            app stores session in memory, but it reduces
                            flexibility.
                        </Styled.Para>

                        <Styled.Bullets>
                            <li>Works using cookies or hashing</li>
                            <li>
                                Can cause uneven load if some users are heavy
                            </li>
                            <li>
                                Better approach is stateless app and shared
                                session store
                            </li>
                        </Styled.Bullets>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Scaling trap
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    If your app depends on sticky sessions,
                                    autoscaling and rolling deploys become
                                    harder. Prefer stateless design.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiShield />
                            <h3>TLS termination and security</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>Load balancer can handle HTTPS certificates</li>
                            <li>
                                Backends can run plain HTTP inside private
                                network
                            </li>
                            <li>Centralized TLS makes cert rotation easier</li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Security note
                            </Styled.ExampleTitle>
                            <Styled.Para>
                                Even if you use HTTP from load balancer to
                                backend, keep it inside private network only.
                                For sensitive systems, use HTTPS all the way.
                            </Styled.Para>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiServer />
                            <h3>High availability pattern</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>Run multiple backend servers</li>
                            <li>Spread backends across multiple AZs</li>
                            <li>
                                Use autoscaling group to replace unhealthy
                                servers
                            </li>
                            <li>
                                Use load balancer to route only healthy targets
                            </li>
                        </Styled.Bullets>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>Key idea</Styled.NoteTitle>
                                <Styled.NoteText>
                                    Load balancer removes single server as a
                                    single point of failure.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
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
                        Load balancer is your reliability and scaling gate. If
                        your app is stateless and health checks are solid,
                        scaling becomes easy.
                    </Styled.FooterNote>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default LoadBalancer;
