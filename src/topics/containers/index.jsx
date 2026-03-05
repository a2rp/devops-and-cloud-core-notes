// src/topics/containers/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiBox,
    FiChevronDown,
    FiChevronUp,
    FiCpu,
    FiLayers,
    FiShield,
    FiActivity,
    FiHardDrive,
    FiWifi,
    FiTerminal,
    FiAlertTriangle,
    FiCheckCircle,
    FiCopy,
    FiTool,
} from "react-icons/fi";

const Containers = () => {
    const [open, setOpen] = useState(false);
    const [copiedKey, setCopiedKey] = useState("");

    const snippets = useMemo(() => {
        return [
            {
                key: "whatIs",
                title: "What is a container",
                hint: "Process with isolation",
                code: `# A container is not a VM
# It is a process running on your host OS
# With isolation and limits

# View running containers
docker ps`,
            },
            {
                key: "lifecycle",
                title: "Container lifecycle",
                hint: "run, stop, start, rm",
                code: `# Run a container
docker run --name demo-nginx -p 8080:80 nginx

# Stop and start
docker stop demo-nginx
docker start demo-nginx

# Remove (container must be stopped)
docker rm demo-nginx`,
            },
            {
                key: "execLogs",
                title: "Inspect, logs, exec",
                hint: "Debug like a pro",
                code: `# See logs
docker logs demo-nginx

# Enter container shell
docker exec -it demo-nginx sh

# Inspect config
docker inspect demo-nginx | head`,
            },
            {
                key: "resources",
                title: "Resource limits",
                hint: "CPU and memory limits",
                code: `# Limit CPU and memory
docker run --name limited \
  --cpus="0.5" \
  --memory="256m" \
  -p 8081:80 nginx`,
            },
            {
                key: "volumes",
                title: "Volumes",
                hint: "Persist data outside container",
                code: `# Named volume
docker volume create app-data

docker run --name demo-db \
  -v app-data:/var/lib/data \
  alpine sh -c "echo hello > /var/lib/data/file.txt && sleep 9999"

# Data stays even if container is removed`,
            },
            {
                key: "networks",
                title: "Networking basics",
                hint: "Container to container communication",
                code: `# Create a user network
docker network create app-net

# Run two containers on same network
docker run -d --name api --network app-net nginx
docker run -it --rm --network app-net alpine sh

# From alpine shell you can hit:
# wget -qO- http://api`,
            },
            {
                key: "cleanup",
                title: "Cleanup commands",
                hint: "Remove unused stuff safely",
                code: `# Remove stopped containers
docker container prune

# Remove unused images
docker image prune

# Remove unused networks
docker network prune`,
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
                    <FiBox />
                    Containers
                    <Styled.Badge>Isolation without a VM</Styled.Badge>
                </Styled.Title>

                <Styled.Toggle aria-hidden="true">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {!open && (
                <Styled.Preview>
                    <Styled.PreviewLine>
                        Containers are lightweight isolated environments for
                        running apps.
                    </Styled.PreviewLine>
                    <Styled.PreviewLine>
                        They are processes with isolation and resource limits,
                        not full virtual machines.
                    </Styled.PreviewLine>
                </Styled.Preview>
            )}

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiLayers />
                            <h3>What is a container</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            A container is a process running on your host
                            operating system, but it feels like its own small
                            machine. It gets isolation for filesystem, network,
                            and process view. It can also have CPU and memory
                            limits.
                        </Styled.Para>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Beginner mental model
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    A container is like a sandbox for an app.
                                    Same host kernel, but separated view and
                                    controlled resources.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiCpu />
                            <h3>Why containers are fast</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>No full OS per app</b> - containers share the
                                host kernel
                            </li>
                            <li>
                                <b>Small images</b> - ship only what app needs
                            </li>
                            <li>
                                <b>Quick start</b> - starting a process is
                                faster than booting a VM
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                VM vs container (simple)
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>
                                    VM - includes full guest OS, slower boot,
                                    heavier
                                </li>
                                <li>
                                    Container - uses host OS kernel, fast start,
                                    lighter
                                </li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiShield />
                            <h3>Isolation basics</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Process isolation</b> - container sees its
                                own processes
                            </li>
                            <li>
                                <b>Filesystem isolation</b> - container gets its
                                own file tree
                            </li>
                            <li>
                                <b>Network isolation</b> - container has its own
                                network namespace
                            </li>
                            <li>
                                <b>Resource limits</b> - container can be
                                limited to specific CPU and RAM
                            </li>
                        </Styled.Bullets>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Security note
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    Containers are not perfect security
                                    boundaries like VMs. Use least privilege,
                                    avoid running as root, and keep images
                                    minimal.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiHardDrive />
                            <h3>Data persistence - volumes</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Containers are designed to be disposable. If you
                            remove a container, its internal writable layer is
                            gone. For data you want to keep, use volumes.
                        </Styled.Para>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Volume concept
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>
                                    Without volume - data disappears when
                                    container is deleted
                                </li>
                                <li>
                                    With volume - data stays on host-managed
                                    storage
                                </li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiWifi />
                            <h3>Networking - how containers talk</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Port mapping</b> - expose container port to
                                host, example -p 8080:80
                            </li>
                            <li>
                                <b>User networks</b> - containers can resolve
                                each other by name
                            </li>
                            <li>
                                <b>DNS inside Docker</b> - container name
                                becomes hostname on the same network
                            </li>
                        </Styled.Bullets>

                        <Styled.Note>
                            <FiTool />
                            <div>
                                <Styled.NoteTitle>
                                    Common beginner confusion
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    "localhost" inside a container means the
                                    container itself, not your host machine.
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
                        Think of containers as a repeatable runtime package. If
                        your app runs in a container, it becomes much easier to
                        deploy the same way everywhere.
                    </Styled.FooterNote>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default Containers;
