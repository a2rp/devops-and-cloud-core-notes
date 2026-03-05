// src/topics/merge/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiGitMerge,
    FiChevronDown,
    FiChevronUp,
    FiGitBranch,
    FiLayers,
    FiCornerUpRight,
    FiAlertTriangle,
    FiCheckCircle,
    FiCopy,
    FiTool,
    FiShuffle,
} from "react-icons/fi";

const Merge = () => {
    const [open, setOpen] = useState(false);
    const [copiedKey, setCopiedKey] = useState("");

    const snippets = useMemo(() => {
        return [
            {
                key: "ff",
                title: "Fast-forward merge",
                hint: "No merge commit - just move pointer",
                code: `# If main has not moved, Git can fast-forward
git checkout main
git merge feature/login

# Result: main now points to the same commit as feature/login`,
            },
            {
                key: "noff",
                title: "Merge commit",
                hint: "Keep branch history visible",
                code: `# Force a merge commit even if fast-forward is possible
git checkout main
git merge --no-ff feature/login

# Result: a new merge commit with 2 parents`,
            },
            {
                key: "conflicts",
                title: "Merge conflict flow",
                hint: "Resolve and finish merge",
                code: `git checkout main
git merge feature/login

# If conflict happens
git status
# fix files manually

git add .
git commit

# If you want to cancel merge
git merge --abort`,
            },
            {
                key: "squash",
                title: "Squash merge",
                hint: "Make one commit out of many",
                code: `# Combine feature branch changes into 1 commit on main
git checkout main
git merge --squash feature/login
git commit -m "Login feature"

# Note: This is not a real merge commit`,
            },
            {
                key: "prMethods",
                title: "PR merge methods concept",
                hint: "GitHub merge options",
                code: `# Merge commit - keeps all commits, adds merge commit
# Squash and merge - makes 1 commit on main
# Rebase and merge - replays commits, no merge commit`,
            },
            {
                key: "recover",
                title: "Undo a bad merge",
                hint: "Two common ways",
                code: `# If merge not pushed and you want to discard it
git reset --hard ORIG_HEAD

# If merge was pushed, use revert (safe)
git revert -m 1 <merge-commit-hash>`,
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
                    <FiGitMerge />
                    Merge
                    <Styled.Badge>Combine branches safely</Styled.Badge>
                </Styled.Title>

                <Styled.Toggle aria-hidden="true">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {!open && (
                <Styled.Preview>
                    <Styled.PreviewLine>
                        Merge combines histories. It keeps the story of how
                        branches actually happened.
                    </Styled.PreviewLine>
                    <Styled.PreviewLine>
                        Learn fast-forward, merge commits, squash merge,
                        conflicts, and safe undo.
                    </Styled.PreviewLine>
                </Styled.Preview>
            )}

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiGitBranch />
                            <h3>What merge does</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Merge combines changes from one branch into another.
                            You usually merge a feature branch into main. Git
                            tries to bring both histories together without
                            losing commits.
                        </Styled.Para>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Beginner mental model
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    Merge is like saying "take everything from
                                    feature branch and add it into main".
                                    Sometimes it just moves the pointer,
                                    sometimes it creates a special merge commit.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiCornerUpRight />
                            <h3>Fast-forward vs merge commit</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Fast-forward merge</b> - main did not move,
                                so Git just moves main pointer forward
                            </li>
                            <li>
                                <b>Merge commit</b> - both branches moved, so
                                Git creates a new commit that has two parents
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Simple example
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>Main is at commit A</li>
                                <li>Feature branch adds commits B and C</li>
                                <li>
                                    If main stayed at A, merge can fast-forward
                                    to C
                                </li>
                                <li>
                                    If main also got commits, Git creates a
                                    merge commit
                                </li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiLayers />
                            <h3>Merge strategies you will see</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Default merge</b> - Git decides fast-forward
                                or merge commit based on history
                            </li>
                            <li>
                                <b>--no-ff</b> - always create a merge commit
                                (makes branch boundaries visible)
                            </li>
                            <li>
                                <b>--squash</b> - combine all feature commits
                                into one commit on main (not a real merge
                                commit)
                            </li>
                        </Styled.Bullets>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Squash merge note
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    Squash makes history clean, but it loses
                                    individual commit history from the feature
                                    branch on main. Great for small features.
                                    Not great if you need detailed commit trail.
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiShuffle />
                            <h3>GitHub PR merge methods</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Merge commit</b> - keeps all commits and adds
                                a merge commit
                            </li>
                            <li>
                                <b>Squash and merge</b> - makes one commit on
                                main
                            </li>
                            <li>
                                <b>Rebase and merge</b> - replays commits, no
                                merge commit, history is linear
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Quick selection rule
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>
                                    Use merge commit when you want to preserve
                                    branch context
                                </li>
                                <li>
                                    Use squash when you want one clean commit
                                    per PR
                                </li>
                                <li>
                                    Use rebase and merge when team prefers
                                    linear history
                                </li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiTool />
                            <h3>Merge conflicts - what and why</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            A merge conflict happens when Git cannot
                            automatically combine changes. Usually both branches
                            edited the same lines in the same file. Git stops
                            and asks you to decide the final content.
                        </Styled.Para>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Conflict handling flow
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>Run merge</li>
                                <li>Git shows conflicted files</li>
                                <li>Edit files to correct final version</li>
                                <li>git add .</li>
                                <li>git commit to finish merge</li>
                            </Styled.Bullets>
                        </Styled.Example>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>Helpful tip</Styled.NoteTitle>
                                <Styled.NoteText>
                                    Use git status to see exactly which files
                                    are conflicted. Solve one file at a time.
                                    Keep changes small.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
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
                        Merge is the safest default for teams because it does
                        not rewrite history. Rebase is cleaner, but merge is
                        honest.
                    </Styled.FooterNote>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default Merge;
