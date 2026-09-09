// src/topics/rebase/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiGitBranch,
    FiChevronDown,
    FiChevronUp,
    FiShuffle,
    FiLayers,
    FiAlertTriangle,
    FiCheckCircle,
    FiTool,
    FiCopy,
    FiClock,
    FiZap,
} from "react-icons/fi";

const Rebase = () => {
    const [open, setOpen] = useState(true);
    const [copiedKey, setCopiedKey] = useState("");

    const snippets = useMemo(() => {
        return [
            {
                key: "basic",
                title: "Basic rebase",
                hint: "Move your commits onto a new base",
                code: `# You are on feature branch
git checkout feature/login

# Update your feature branch with latest main using rebase
git fetch origin
git rebase origin/main

# Push after rebase (history changed)
git push --force-with-lease`,
            },
            {
                key: "interactive",
                title: "Interactive rebase",
                hint: "Clean up commit history before PR",
                code: `# Rebase last 5 commits interactively
git rebase -i HEAD~5

# In editor:
# pick   keep commit
# reword change commit message
# squash combine with previous commit
# fixup  combine and drop message`,
            },
            {
                key: "conflicts",
                title: "Rebase conflict flow",
                hint: "Resolve conflicts safely",
                code: `# During rebase, if conflict happens:
git status

# Fix conflicts in files, then:
git add .

# Continue rebase
git rebase --continue

# If you want to stop and go back:
git rebase --abort`,
            },
            {
                key: "onto",
                title: "Rebase onto",
                hint: "Move a branch to a different base",
                code: `# Move feature commits from old-base to new-base
git rebase --onto new-base old-base feature/login

# Example idea:
# feature/login was based on main-old
# now you want it based on main-new`,
            },
            {
                key: "autosquash",
                title: "Fixup commits with autosquash",
                hint: "Great for review feedback",
                code: `# Create a fixup commit for an earlier commit
git commit --fixup <commit-hash>

# Auto squash fixups during interactive rebase
git rebase -i --autosquash origin/main`,
            },
            {
                key: "recover",
                title: "Recover after bad rebase",
                hint: "Reflog rescue",
                code: `# Find previous HEAD before rebase
git reflog

# Reset back to safe point
git reset --hard HEAD@{3}`,
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
                    Rebase
                    <Styled.Badge>Clean history - same code</Styled.Badge>
                </Styled.Title>

                <Styled.Toggle aria-hidden="true">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {!open && (
                <Styled.Preview>
                    <Styled.PreviewLine>
                        Rebase takes your commits and replays them on top of
                        another commit.
                    </Styled.PreviewLine>
                    <Styled.PreviewLine>
                        It is amazing for clean PRs, but dangerous on shared
                        branches.
                    </Styled.PreviewLine>
                </Styled.Preview>
            )}

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiGitBranch />
                            <h3>What rebase does</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Rebase changes the base of your branch. It takes the
                            commits from your branch and applies them again on
                            top of a new base commit. The code ends up similar,
                            but the commit hashes change because history is
                            rewritten.
                        </Styled.Para>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Beginner mental model
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Imagine you wrote 3 commits on feature
                                    branch. Main branch moved ahead. Rebase
                                    copies your 3 commits and attaches them to
                                    the new tip of main.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiLayers />
                            <h3>Merge vs rebase</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>merge</b> - keeps history as it happened,
                                creates a merge commit (or fast-forward)
                            </li>
                            <li>
                                <b>rebase</b> - rewrites your branch history
                                into a straight line, no merge commit
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                When rebase is preferred
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>
                                    Before creating a PR - clean linear commits
                                </li>
                                <li>
                                    While working alone on a feature branch - no
                                    one else depends on your history
                                </li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiAlertTriangle />
                            <h3>The golden rule</h3>
                        </Styled.SectionHead>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Do not rebase shared branches
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    If others pulled your branch, rebasing
                                    changes commit hashes and makes their
                                    history messy. Use merge or coordinate
                                    carefully.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>

                        <Styled.Note>
                            <FiTool />
                            <div>
                                <Styled.NoteTitle>
                                    Safe push after rebase
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Use "git push --force-with-lease" instead of
                                    "git push --force". It refuses to overwrite
                                    if remote changed unexpectedly.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiZap />
                            <h3>Interactive rebase - clean commits</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Interactive rebase lets you edit your last N
                            commits. You can squash small commits, fix messages,
                            and reorder commits. This is perfect before opening
                            a PR.
                        </Styled.Para>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Common actions in rebase editor
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>
                                    <b>pick</b> - keep commit
                                </li>
                                <li>
                                    <b>reword</b> - change commit message
                                </li>
                                <li>
                                    <b>squash</b> - merge commit into previous
                                    and keep message
                                </li>
                                <li>
                                    <b>fixup</b> - merge commit into previous
                                    and drop message
                                </li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiClock />
                            <h3>Conflict handling flow</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                Rebase stops at the commit that caused conflict
                            </li>
                            <li>You fix files, stage them, then continue</li>
                            <li>
                                If things go wrong, abort and you are back to
                                previous state
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Commands during conflict
                            </Styled.ExampleTitle>
                            <Styled.CodeBlock>
                                <pre>
                                    {`git status
# fix conflicts in files
git add .
git rebase --continue

# to cancel
git rebase --abort`}
                                </pre>
                            </Styled.CodeBlock>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiTool />
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
                        Rebase is like editing the story of your branch. It
                        makes history clean, but you must use it responsibly.
                    </Styled.FooterNote>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default Rebase;

