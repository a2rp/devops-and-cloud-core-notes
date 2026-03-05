// src/topics/hooks/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiTool,
    FiChevronDown,
    FiChevronUp,
    FiZap,
    FiGitCommit,
    FiUploadCloud,
    FiShield,
    FiAlertTriangle,
    FiCheckCircle,
    FiCopy,
    FiTerminal,
    FiFileText,
} from "react-icons/fi";

const Hooks = () => {
    const [open, setOpen] = useState(false);
    const [copiedKey, setCopiedKey] = useState("");

    const snippets = useMemo(() => {
        return [
            {
                key: "where",
                title: "Where hooks live",
                hint: ".git folder local hooks",
                code: `# Git hooks exist inside your repo folder
# Path:
.git/hooks

# List sample hooks
ls .git/hooks`,
            },
            {
                key: "precommitSimple",
                title: "Simple pre-commit hook",
                hint: "Block commits if checks fail",
                code: `# Create file:
# .git/hooks/pre-commit

#!/bin/sh
echo "Running pre-commit checks"

npm run lint
if [ $? -ne 0 ]; then
  echo "Lint failed - commit blocked"
  exit 1
fi

npm test
if [ $? -ne 0 ]; then
  echo "Tests failed - commit blocked"
  exit 1
fi

exit 0`,
            },
            {
                key: "chmod",
                title: "Make hook executable",
                hint: "Important step",
                code: `chmod +x .git/hooks/pre-commit`,
            },
            {
                key: "prepush",
                title: "Simple pre-push hook",
                hint: "Run tests before pushing",
                code: `# Create file:
# .git/hooks/pre-push

#!/bin/sh
echo "Running pre-push checks"

npm test
if [ $? -ne 0 ]; then
  echo "Tests failed - push blocked"
  exit 1
fi

exit 0`,
            },
            {
                key: "commitmsg",
                title: "commit-msg hook",
                hint: "Enforce message format",
                code: `# Create file:
# .git/hooks/commit-msg

#!/bin/sh
MSG_FILE="$1"
MSG="$(cat "$MSG_FILE")"

# Example rule: minimum 10 chars
if [ "$(printf "%s" "$MSG" | wc -c)" -lt 10 ]; then
  echo "Commit message too short - add more detail"
  exit 1
fi

exit 0`,
            },
            {
                key: "security",
                title: "Basic secret check idea",
                hint: "Block accidental key commits",
                code: `# Very simple check idea (not perfect)
# Look for common key patterns before commit

git diff --cached | grep -E "AKIA|BEGIN PRIVATE KEY|SECRET_KEY" >/dev/null
if [ $? -eq 0 ]; then
  echo "Possible secret detected in staged changes - commit blocked"
  exit 1
fi

exit 0`,
            },
            {
                key: "share",
                title: "Sharing hooks with team",
                hint: ".git/hooks not versioned",
                code: `# .git/hooks is not committed to git
# Team friendly approach:
# 1) keep hooks in a folder, example:
#    scripts/hooks/pre-commit
# 2) copy/install them during setup

# Example install script idea:
cp scripts/hooks/pre-commit .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit`,
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
                    <FiTool />
                    Hooks
                    <Styled.Badge>Automate checks in Git flow</Styled.Badge>
                </Styled.Title>

                <Styled.Toggle aria-hidden="true">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {!open && (
                <Styled.Preview>
                    <Styled.PreviewLine>
                        Git hooks are scripts that run automatically on events
                        like commit and push.
                    </Styled.PreviewLine>
                    <Styled.PreviewLine>
                        Use them to stop bad commits early - lint, tests,
                        formatting, secret checks.
                    </Styled.PreviewLine>
                </Styled.Preview>
            )}

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiZap />
                            <h3>What are Git hooks</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            A Git hook is a script that Git runs automatically
                            when a specific action happens. Example actions:
                            before commit, after commit, before push, commit
                            message validation.
                        </Styled.Para>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Beginner mental model
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Hooks are like "automatic gatekeepers". If
                                    rules fail, they block the action. This
                                    prevents broken code from entering history.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiGitCommit />
                            <h3>Common hooks you will use</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>pre-commit</b> - run checks before commit is
                                created
                            </li>
                            <li>
                                <b>commit-msg</b> - validate commit message
                                rules
                            </li>
                            <li>
                                <b>pre-push</b> - run checks before pushing to
                                remote
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Why hooks matter
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>Catch lint and formatting issues early</li>
                                <li>Stop commits that break tests</li>
                                <li>
                                    Prevent accidental secrets like API keys
                                </li>
                                <li>Keep team standards consistent</li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiTerminal />
                            <h3>Where hooks live</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Git hooks live inside your repo at ".git/hooks".
                            These files are local to your machine. That means
                            hooks are not shared automatically when you push
                            code to GitHub.
                        </Styled.Para>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Important limitation
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    ".git/hooks" is not versioned. If you want
                                    the whole team to use hooks, keep hook
                                    scripts in a tracked folder and install them
                                    with a setup script.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiShield />
                            <h3>Practical hook rules (real world)</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                pre-commit - run lint, formatting, type checks
                            </li>
                            <li>
                                pre-push - run full test suite or critical tests
                            </li>
                            <li>
                                commit-msg - enforce message format, ticket id,
                                minimum length
                            </li>
                            <li>security - block common secret patterns</li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Performance tip
                            </Styled.ExampleTitle>
                            <Styled.Para>
                                Keep pre-commit fast. People commit often. Run
                                light checks here. Keep heavy checks in pre-push
                                or CI.
                            </Styled.Para>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiFileText />
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
                        Hooks catch problems early, but CI is still the final
                        guard. Use hooks for fast feedback and CI for full
                        reliability.
                    </Styled.FooterNote>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default Hooks;
