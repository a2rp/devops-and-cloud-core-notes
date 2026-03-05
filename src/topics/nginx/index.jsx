// src/topics/nginx/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiWind,
    FiChevronDown,
    FiChevronUp,
    FiGlobe,
    FiServer,
    FiRepeat,
    FiShield,
    FiZap,
    FiFileText,
    FiTool,
    FiActivity,
    FiAlertTriangle,
    FiCheckCircle,
    FiCopy,
    FiTerminal,
} from "react-icons/fi";

const Nginx = () => {
    const [open, setOpen] = useState(false);
    const [copiedKey, setCopiedKey] = useState("");

    const snippets = useMemo(() => {
        return [
            {
                key: "static",
                title: "Serve static files",
                hint: "Basic web server",
                code: `# Example concept:
# - Nginx listens on port 80
# - serves files from a folder

server {
  listen 80;
  server_name example.com;

  root /var/www/site;
  index index.html;
}`,
            },
            {
                key: "reverseProxy",
                title: "Reverse proxy to Node app",
                hint: "proxy_pass basics",
                code: `# Proxy incoming traffic to backend running on 3000

server {
  listen 80;
  server_name api.example.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
  }
}`,
            },
            {
                key: "forwardHeaders",
                title: "Forward important headers",
                hint: "Real IP and protocol",
                code: `# Common proxy headers for backend apps

location / {
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;

  proxy_pass http://127.0.0.1:3000;
}`,
            },
            {
                key: "loadBalance",
                title: "Load balancing",
                hint: "Multiple backends",
                code: `# Upstream group of servers
upstream app_backend {
  server 10.0.1.10:3000;
  server 10.0.1.11:3000;
  server 10.0.1.12:3000;
}

server {
  listen 80;

  location / {
    proxy_pass http://app_backend;
  }
}`,
            },
            {
                key: "gzip",
                title: "Gzip compression",
                hint: "Reduce payload size",
                code: `# Enable gzip for text responses

gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
gzip_min_length 1024;`,
            },
            {
                key: "rateLimit",
                title: "Rate limiting",
                hint: "Basic abuse protection",
                code: `# Limit requests per IP

limit_req_zone $binary_remote_addr zone=perip:10m rate=10r/s;

server {
  location / {
    limit_req zone=perip burst=20 nodelay;
    proxy_pass http://127.0.0.1:3000;
  }
}`,
            },
            {
                key: "health",
                title: "Health check endpoint",
                hint: "Simple monitoring",
                code: `# Serve a health response without touching backend

location = /health {
  add_header Content-Type text/plain;
  return 200 "ok";
}`,
            },
        ];
    }, []);

    const quickCmds = useMemo(() => {
        return [
            {
                key: "installUbuntu",
                title: "Install on Ubuntu",
                code: `sudo apt update
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx`,
            },
            {
                key: "status",
                title: "Check status",
                code: `sudo systemctl status nginx`,
            },
            {
                key: "testConfig",
                title: "Test config",
                code: `sudo nginx -t`,
            },
            {
                key: "reload",
                title: "Reload safely",
                code: `sudo systemctl reload nginx`,
            },
            {
                key: "logs",
                title: "View logs",
                code: `# access log
sudo tail -f /var/log/nginx/access.log

# error log
sudo tail -f /var/log/nginx/error.log`,
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

    const isCopied = (key) => copiedKey === key;

    return (
        <Styled.Wrapper>
            <Styled.Header
                onClick={() => setOpen((v) => !v)}
                role="button"
                tabIndex={0}
            >
                <Styled.Title>
                    <FiWind />
                    Nginx
                    <Styled.Badge>Web server and reverse proxy</Styled.Badge>
                </Styled.Title>

                <Styled.Toggle aria-hidden="true">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {!open && (
                <Styled.Preview>
                    <Styled.PreviewLine>
                        Nginx is a high performance web server used for static
                        hosting, reverse proxy, and load balancing.
                    </Styled.PreviewLine>
                    <Styled.PreviewLine>
                        Learn server blocks, proxy_pass, headers, gzip, rate
                        limiting, and safe reload workflow.
                    </Styled.PreviewLine>
                </Styled.Preview>
            )}

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiGlobe />
                            <h3>What is Nginx</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Nginx is a web server and reverse proxy. It can
                            serve static files, forward requests to backend
                            apps, load balance across servers, and act as a
                            control layer between internet and your services.
                        </Styled.Para>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Beginner mental model
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Nginx is the gatekeeper at the edge. It
                                    receives requests, then either serves files
                                    or forwards traffic to your app.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiFileText />
                            <h3>Key terms</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>server block</b> - a virtual host config for
                                a domain or port
                            </li>
                            <li>
                                <b>location</b> - routing rules inside a server
                                block
                            </li>
                            <li>
                                <b>root</b> - folder path used for static files
                            </li>
                            <li>
                                <b>proxy_pass</b> - forwards request to backend
                            </li>
                            <li>
                                <b>upstream</b> - group of backend servers for
                                load balancing
                            </li>
                        </Styled.Bullets>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiServer />
                            <h3>Serve static files</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Static hosting means Nginx directly serves files
                            from disk. This is very fast for HTML, CSS, JS,
                            images.
                        </Styled.Para>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Typical use cases
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>Documentation sites</li>
                                <li>
                                    Frontend build output, example Vite dist
                                    folder
                                </li>
                                <li>Serving images and downloads</li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiRepeat />
                            <h3>Reverse proxy to backend</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Reverse proxy means Nginx forwards the request to
                            your backend app running on another port or another
                            server. This allows you to keep backend private and
                            expose only Nginx to internet.
                        </Styled.Para>

                        <Styled.Bullets>
                            <li>Backend can run on 127.0.0.1:3000</li>
                            <li>Nginx listens on 80 and 443</li>
                            <li>Nginx adds headers and manages TLS</li>
                        </Styled.Bullets>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>Common bug</Styled.WarnTitle>
                                <Styled.WarnText>
                                    If you do not set forwarded headers, backend
                                    may not know the real client IP or that
                                    request was https.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiZap />
                            <h3>Compression and caching</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                Gzip compresses text content like HTML, JS, JSON
                            </li>
                            <li>Improves load times and reduces bandwidth</li>
                            <li>
                                Caching can reduce backend load for repeat
                                content
                            </li>
                        </Styled.Bullets>

                        <Styled.Note>
                            <FiTool />
                            <div>
                                <Styled.NoteTitle>Quick rule</Styled.NoteTitle>
                                <Styled.NoteText>
                                    Compress text. Do not compress already
                                    compressed files like jpg, png, mp4.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiShield />
                            <h3>Rate limiting and safety</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Nginx can throttle abusive traffic. This is not full
                            DDoS protection, but it helps for basic patterns.
                        </Styled.Para>

                        <Styled.Bullets>
                            <li>Limit requests per IP</li>
                            <li>Block huge payload sizes</li>
                            <li>Return fast response for health checks</li>
                        </Styled.Bullets>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiTerminal />
                            <h3>Commands you will use daily</h3>
                        </Styled.SectionHead>

                        <Styled.CmdGrid>
                            {quickCmds.map((c) => (
                                <Styled.CmdCard key={c.key}>
                                    <Styled.CmdTop>
                                        <Styled.CmdTitle>
                                            {c.title}
                                        </Styled.CmdTitle>
                                        <Styled.CopyBtn
                                            type="button"
                                            onClick={() =>
                                                copyToClipboard(c.code, c.key)
                                            }
                                            title={
                                                isCopied(c.key)
                                                    ? "Copied"
                                                    : "Copy"
                                            }
                                        >
                                            {isCopied(c.key) ? (
                                                <FiCheckCircle />
                                            ) : (
                                                <FiCopy />
                                            )}
                                            {isCopied(c.key)
                                                ? "Copied"
                                                : "Copy"}
                                        </Styled.CopyBtn>
                                    </Styled.CmdTop>

                                    <Styled.CodeBlock>
                                        <pre>{c.code}</pre>
                                    </Styled.CodeBlock>
                                </Styled.CmdCard>
                            ))}
                        </Styled.CmdGrid>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiTerminal />
                            <h3>Config cheat sheet</h3>
                        </Styled.SectionHead>

                        <Styled.SnippetGrid>
                            {snippets.map((s) => (
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
                                                copyToClipboard(s.code, s.key)
                                            }
                                            title={
                                                isCopied(s.key)
                                                    ? "Copied"
                                                    : "Copy"
                                            }
                                        >
                                            {isCopied(s.key) ? (
                                                <FiCheckCircle />
                                            ) : (
                                                <FiCopy />
                                            )}
                                            {isCopied(s.key)
                                                ? "Copied"
                                                : "Copy"}
                                        </Styled.CopyBtn>
                                    </Styled.SnippetTop>

                                    <Styled.CodeBlock>
                                        <pre>{s.code}</pre>
                                    </Styled.CodeBlock>
                                </Styled.SnippetCard>
                            ))}
                        </Styled.SnippetGrid>

                        <Styled.Warn style={{ marginTop: 12 }}>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Always test config before reload
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    Run "nginx -t" first. Reload only if test
                                    passes. This prevents accidental downtime.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.FooterNote>
                        Nginx is popular because it is fast and stable. Learn
                        server blocks, proxy headers, and safe reload workflow
                        and you can run real production setups.
                    </Styled.FooterNote>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default Nginx;
