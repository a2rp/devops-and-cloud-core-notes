// src/topics/networking/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiWifi,
    FiChevronDown,
    FiChevronUp,
    FiGlobe,
    FiServer,
    FiBox,
    FiHash,
    FiShield,
    FiActivity,
    FiAlertTriangle,
    FiCheckCircle,
    FiCopy,
    FiTerminal,
    FiTool,
    FiLink,
} from "react-icons/fi";

const Networking = () => {
    const [open, setOpen] = useState(false);
    const [copiedKey, setCopiedKey] = useState("");

    const snippets = useMemo(() => {
        return [
            {
                key: "ports",
                title: "Ports and port mapping",
                hint: "Host port to container port",
                code: `# Run nginx in container and expose to host
docker run --name web -p 8080:80 nginx

# Now open in browser
# http://localhost:8080

# Format:
# -p <hostPort>:<containerPort>`,
            },
            {
                key: "bridge",
                title: "Bridge network",
                hint: "Default Docker network type",
                code: `# See Docker networks
docker network ls

# Inspect default bridge
docker network inspect bridge | head`,
            },
            {
                key: "userNet",
                title: "User defined network",
                hint: "Best for multi containers",
                code: `docker network create app-net

docker run -d --name api --network app-net nginx
docker run -d --name web --network app-net nginx

# Containers on same user network can reach by name:
# http://api
# http://web`,
            },
            {
                key: "dns",
                title: "DNS inside containers",
                hint: "Name becomes hostname",
                code: `# Start a shell container on the same network
docker run -it --rm --network app-net alpine sh

# Inside shell, resolve name:
# ping api
# wget -qO- http://api`,
            },
            {
                key: "localhostTrap",
                title: "The localhost confusion",
                hint: "Inside container, localhost is the container",
                code: `# Inside container:
# localhost means the container itself, not your host

# To reach host from container (Docker Desktop):
# host.docker.internal

# Example inside container:
# curl http://host.docker.internal:5173`,
            },
            {
                key: "inspect",
                title: "Inspect IP and networks",
                hint: "Find container IP quickly",
                code: `# Container IP address
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' api

# View all networks attached
docker inspect api | head`,
            },
            {
                key: "curlTools",
                title: "Useful network tools",
                hint: "Quick debugging commands",
                code: `# Host machine tools
curl -I http://localhost:8080
ping 8.8.8.8
nslookup google.com

# In linux containers you may need:
# apk add curl bind-tools iputils`,
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
                    <FiWifi />
                    Networking
                    <Styled.Badge>Ports - DNS - container links</Styled.Badge>
                </Styled.Title>

                <Styled.Toggle aria-hidden="true">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {!open && (
                <Styled.Preview>
                    <Styled.PreviewLine>
                        Networking is where most Docker confusion happens.
                    </Styled.PreviewLine>
                    <Styled.PreviewLine>
                        Learn ports, bridge networks, container to container
                        communication, and DNS.
                    </Styled.PreviewLine>
                </Styled.Preview>
            )}

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiGlobe />
                            <h3>Networking basics in containers</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Containers have their own network namespace. That
                            means they get their own IP address, routing table,
                            and ports. Docker then connects containers using
                            networks (bridge, host, overlay).
                        </Styled.Para>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Beginner mental model
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Each container is like a small computer on a
                                    private network. Docker is the router that
                                    connects them.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiHash />
                            <h3>Ports and port mapping</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Container port</b> - port used inside
                                container
                            </li>
                            <li>
                                <b>Host port</b> - port on your laptop or server
                            </li>
                            <li>
                                <b>Port mapping</b> - connects host port to
                                container port
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>Example</Styled.ExampleTitle>
                            <Styled.Para>
                                If nginx listens on port 80 inside container,
                                and you want to access it from host on 8080, you
                                do "-p 8080:80".
                            </Styled.Para>
                        </Styled.Example>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Common beginner mistake
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    EXPOSE in Dockerfile does not publish ports.
                                    It is only documentation. You still need
                                    "-p" while running.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiBox />
                            <h3>Bridge network vs user defined network</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>bridge</b> - default network, basic isolation
                            </li>
                            <li>
                                <b>user defined network</b> - recommended for
                                multi-container apps
                            </li>
                            <li>
                                user networks provide automatic DNS resolution
                                by container name
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Why user network is better
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>
                                    Containers can reach each other by name like
                                    "api"
                                </li>
                                <li>
                                    More predictable networking for
                                    microservices
                                </li>
                                <li>Easier debugging and separation</li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiLink />
                            <h3>Container to container communication</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            If two containers are on the same Docker network,
                            they can talk to each other using container name as
                            hostname. Example: web container can call api
                            container using "http://api".
                        </Styled.Para>

                        <Styled.Note>
                            <FiTool />
                            <div>
                                <Styled.NoteTitle>
                                    Port mapping not needed internally
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Containers talking to each other on the same
                                    network use container ports directly. Port
                                    mapping is mainly for host to container
                                    access.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiShield />
                            <h3>The localhost confusion</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                Inside a container, "localhost" means the
                                container itself
                            </li>
                            <li>
                                Your host machine is a different network
                                namespace
                            </li>
                            <li>
                                On Docker Desktop, use "host.docker.internal" to
                                reach host
                            </li>
                        </Styled.Bullets>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>Typical bug</Styled.WarnTitle>
                                <Styled.WarnText>
                                    App inside container tries to call
                                    "http://localhost:5000" but backend is
                                    running on host. Fix: use
                                    "http://host.docker.internal:5000" (Docker
                                    Desktop) or run both containers on same
                                    network.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
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
                        In container networking, always ask two questions: where
                        is the process running and which network namespace is
                        calling it. Once you answer that, ports and hostnames
                        become obvious.
                    </Styled.FooterNote>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default Networking;
