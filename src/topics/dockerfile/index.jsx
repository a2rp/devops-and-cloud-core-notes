// src/topics/dockerfile/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiFileText,
    FiChevronDown,
    FiChevronUp,
    FiLayers,
    FiTool,
    FiBox,
    FiPlay,
    FiSettings,
    FiAlertTriangle,
    FiCheckCircle,
    FiCopy,
    FiTerminal,
    FiZap,
} from "react-icons/fi";

const Dockerfile = () => {
    const [open, setOpen] = useState(true);
    const [copiedKey, setCopiedKey] = useState("");

    const snippets = useMemo(() => {
        return [
            {
                key: "simpleNode",
                title: "Simple Node app Dockerfile",
                hint: "Good beginner start",
                code: `# Dockerfile

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]`,
            },
            {
                key: "prodNode",
                title: "Production Node build",
                hint: "Build once, run light",
                code: `# Dockerfile (production style)

FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`,
            },
            {
                key: "dockerIgnore",
                title: ".dockerignore example",
                hint: "Smaller builds, faster",
                code: `# .dockerignore

node_modules
dist
.git
.vscode
.env
npm-debug.log`,
            },
            {
                key: "buildRun",
                title: "Build and run commands",
                hint: "Use these every time",
                code: `# Build image
docker build -t my-app:1.0 .

# Run container
docker run --name my-app -p 8080:80 my-app:1.0

# See logs
docker logs my-app`,
            },
            {
                key: "cmdEntry",
                title: "CMD vs ENTRYPOINT",
                hint: "Common interview question",
                code: `# CMD sets default command
CMD ["node", "server.js"]

# ENTRYPOINT makes container behave like a fixed executable
ENTRYPOINT ["node", "server.js"]

# If you use both, ENTRYPOINT is fixed and CMD becomes default args`,
            },
            {
                key: "env",
                title: "ENV and ARG",
                hint: "Build time vs runtime",
                code: `# Build time variable
ARG NODE_ENV=production

# Runtime variable
ENV NODE_ENV=$NODE_ENV

# Use:
# docker build --build-arg NODE_ENV=production -t app .`,
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
                    <FiFileText />
                    Dockerfile
                    <Styled.Badge>Build images the right way</Styled.Badge>
                </Styled.Title>

                <Styled.Toggle aria-hidden="true">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {!open && (
                <Styled.Preview>
                    <Styled.PreviewLine>
                        A Dockerfile is a step-by-step recipe to build a Docker
                        image.
                    </Styled.PreviewLine>
                    <Styled.PreviewLine>
                        Learn layers, caching, COPY vs ADD, CMD vs ENTRYPOINT,
                        and multi-stage builds.
                    </Styled.PreviewLine>
                </Styled.Preview>
            )}

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiBox />
                            <h3>What is a Dockerfile</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            A Dockerfile is a text file that contains
                            instructions to build a Docker image. Each
                            instruction creates a layer. Docker caches layers,
                            so rebuilds can be fast when written correctly.
                        </Styled.Para>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Beginner mental model
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Dockerfile is like a cooking recipe. Image
                                    is the prepared dish. Container is the dish
                                    being served and running.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiLayers />
                            <h3>Layers and caching</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Each line</b> in Dockerfile becomes a layer
                            </li>
                            <li>
                                <b>Docker caches</b> layers if inputs did not
                                change
                            </li>
                            <li>
                                Put <b>stable steps first</b> to reuse cache
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Best practice example
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>Copy package.json first</li>
                                <li>Install dependencies</li>
                                <li>Copy remaining files</li>
                            </Styled.Bullets>
                        </Styled.Example>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Common beginner mistake
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    If you copy the full project before
                                    installing dependencies, any file change
                                    breaks cache and makes builds slow.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiTool />
                            <h3>Important instructions</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>FROM</b> - base image, example node:20-alpine
                            </li>
                            <li>
                                <b>WORKDIR</b> - sets working directory inside
                                image
                            </li>
                            <li>
                                <b>COPY</b> - copies files into image (use this
                                most of the time)
                            </li>
                            <li>
                                <b>RUN</b> - runs commands during build time
                            </li>
                            <li>
                                <b>EXPOSE</b> - documents the port (does not
                                publish port by itself)
                            </li>
                            <li>
                                <b>CMD</b> - default command to run when
                                container starts
                            </li>
                            <li>
                                <b>ENTRYPOINT</b> - fixed executable behavior
                            </li>
                        </Styled.Bullets>

                        <Styled.Note>
                            <FiZap />
                            <div>
                                <Styled.NoteTitle>COPY vs ADD</Styled.NoteTitle>
                                <Styled.NoteText>
                                    Use COPY. ADD has extra features (like auto
                                    extracting archives) and is rarely needed.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiSettings />
                            <h3>Multi-stage builds</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Multi-stage builds let you build your app in one
                            stage and copy only the final output into a smaller
                            runtime image. This keeps production images small
                            and safer.
                        </Styled.Para>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Why it matters
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>Smaller image size</li>
                                <li>Faster deploy and pull</li>
                                <li>Less attack surface</li>
                            </Styled.Bullets>
                        </Styled.Example>
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
                        Write Dockerfiles like you write clean code. Good
                        ordering gives fast builds. Multi-stage gives small and
                        secure production images.
                    </Styled.FooterNote>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default Dockerfile;

