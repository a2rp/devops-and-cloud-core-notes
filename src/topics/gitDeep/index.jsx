// src/topics/gitDeep/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiGitBranch,
    FiChevronDown,
    FiChevronUp,
    FiBookOpen,
    FiLayers,
    FiHash,
    FiMap,
    FiClock,
    FiTool,
    FiAlertTriangle,
    FiCheckCircle,
    FiCopy,
} from "react-icons/fi";

const GitDeep = () => {
    const [open, setOpen] = useState(false);
    const [copiedKey, setCopiedKey] = useState("");

    const snippets = useMemo(() => {
        return [
            {
                key: "objects",
                title: "Git objects - blob, tree, commit",
                hint: "Core internals",
                code: `# See raw object type + content
git cat-file -t <hash>
git cat-file -p <hash>

# Find objects reachable from refs
git rev-list --objects --all | head`,
            },
            {
                key: "head",
                title: "HEAD, refs, and branches",
                hint: "What you are pointing at",
                code: `# What HEAD points to
cat .git/HEAD

# Show refs (branches and tags)
git show-ref --heads --tags

# Resolve a name to a hash
git rev-parse HEAD
git rev-parse main`,
            },
            {
                key: "staging",
                title: "Working tree vs staging area vs commit",
                hint: "The 3 states",
                code: `# What changed but not staged
git diff

# What is staged
git diff --staged

# Stage a file and inspect staged diff
git add file.txt
git diff --staged`,
            },
            {
                key: "reflog",
                title: "Reflog - undo almost anything",
                hint: "Your safety net",
                code: `# Show recent HEAD movements
git reflog

# Recover a lost commit by checking out or resetting
git checkout <hash>
git reset --hard <hash>`,
            },
            {
                key: "resetRevert",
                title: "reset vs revert",
                hint: "Local rewrite vs safe history",
                code: `# Move HEAD and branch pointer (can rewrite history)
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1

# Create a new commit that undoes changes (safe for shared branches)
git revert <commit-hash>`,
            },
            {
                key: "stashCherry",
                title: "stash and cherry-pick",
                hint: "Park work and pick commits",
                code: `# Stash work in progress
git stash push -m "wip - debugging"
git stash list
git stash pop

# Copy a commit onto current branch
git cherry-pick <commit-hash>`,
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
                    <FiGitBranch />
                    Git Deep
                    <Styled.Badge>Internals + real workflows</Styled.Badge>
                </Styled.Title>

                <Styled.Toggle aria-hidden="true">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </Styled.Toggle>
            </Styled.Header>

            {!open && (
                <Styled.Preview>
                    <Styled.PreviewLine>
                        Git is a content-addressed database with a nice UI
                        called "git".
                    </Styled.PreviewLine>
                    <Styled.PreviewLine>
                        Understand objects, refs, HEAD, index, reflog, and the
                        common "save me" commands.
                    </Styled.PreviewLine>
                </Styled.Preview>
            )}

            {open && (
                <Styled.Content>
                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiBookOpen />
                            <h3>What is Git, really</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Git is not a "file diff tool". Git stores snapshots
                            of your project. Internally it behaves like a
                            database where content is saved and referenced by
                            hashes.
                        </Styled.Para>

                        <Styled.Note>
                            <FiCheckCircle />
                            <div>
                                <Styled.NoteTitle>
                                    Beginner mental model
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    A branch is just a name that points to a
                                    commit. A commit points to a snapshot (a
                                    tree). Trees point to folders. Blobs point
                                    to file content.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiLayers />
                            <h3>Git objects - blob, tree, commit</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>blob</b> - file content (only bytes of the
                                file, not file name)
                            </li>
                            <li>
                                <b>tree</b> - folder listing (names +
                                permissions + pointers to blobs or other trees)
                            </li>
                            <li>
                                <b>commit</b> - points to a tree + includes
                                parent commit(s) + author info + message
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>Example</Styled.ExampleTitle>
                            <Styled.Para>
                                When you commit, Git creates a new commit
                                object. That commit points to a tree. That tree
                                points to blobs. If a file did not change, Git
                                reuses the same blob hash. This is why Git is
                                fast and efficient.
                            </Styled.Para>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiMap />
                            <h3>Refs, branches, and HEAD</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>ref</b> - a name that points to a commit hash
                                (example: refs/heads/main)
                            </li>
                            <li>
                                <b>branch</b> - just a ref (a movable pointer)
                            </li>
                            <li>
                                <b>HEAD</b> - tells Git what you currently have
                                checked out
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Two common HEAD states
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>
                                    <b>Normal</b> - HEAD points to a branch name
                                    (example: main)
                                </li>
                                <li>
                                    <b>Detached HEAD</b> - HEAD points directly
                                    to a commit hash (easy to forget work here)
                                </li>
                            </Styled.Bullets>
                        </Styled.Example>

                        <Styled.Warn>
                            <FiAlertTriangle />
                            <div>
                                <Styled.WarnTitle>
                                    Detached HEAD beginner trap
                                </Styled.WarnTitle>
                                <Styled.WarnText>
                                    If you checkout a commit hash and start
                                    committing, you might lose the branch
                                    pointer. Fix: create a branch from that
                                    point: git checkout -b rescue-branch
                                </Styled.WarnText>
                            </div>
                        </Styled.Warn>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiHash />
                            <h3>
                                The 3 states - working tree, staging area,
                                commit
                            </h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>Working tree</b> - your actual files on disk
                            </li>
                            <li>
                                <b>Staging area (index)</b> - what will go into
                                the next commit
                            </li>
                            <li>
                                <b>Commit</b> - saved snapshot in Git history
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Example flow
                            </Styled.ExampleTitle>
                            <Styled.CodeBlock>
                                <pre>
                                    {`# Edit file.txt

# See changes in working tree
git diff

# Stage changes
git add file.txt

# See staged snapshot difference
git diff --staged

# Create commit snapshot
git commit -m "Update file.txt"`}
                                </pre>
                            </Styled.CodeBlock>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiClock />
                            <h3>Reflog - the secret undo history</h3>
                        </Styled.SectionHead>

                        <Styled.Para>
                            Reflog records where HEAD and branch refs have been.
                            Even if you reset and "lose" commits, reflog can
                            help you recover them.
                        </Styled.Para>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Typical rescue
                            </Styled.ExampleTitle>
                            <Styled.CodeBlock>
                                <pre>
                                    {`# Find the previous state
git reflog

# Reset back to a good state
git reset --hard HEAD@{3}`}
                                </pre>
                            </Styled.CodeBlock>
                        </Styled.Example>

                        <Styled.Note>
                            <FiTool />
                            <div>
                                <Styled.NoteTitle>
                                    Rule of thumb
                                </Styled.NoteTitle>
                                <Styled.NoteText>
                                    If you think "I lost my commit", check
                                    reflog first.
                                </Styled.NoteText>
                            </div>
                        </Styled.Note>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiTool />
                            <h3>reset vs revert</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>reset</b> - moves branch pointer and
                                optionally changes files (can rewrite history)
                            </li>
                            <li>
                                <b>revert</b> - creates a new commit that undoes
                                an old commit (safe on shared branches)
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                When to use what
                            </Styled.ExampleTitle>
                            <Styled.Bullets>
                                <li>
                                    Use <b>reset</b> when the branch is local
                                    and not shared yet
                                </li>
                                <li>
                                    Use <b>revert</b> when the branch is already
                                    pushed and others may have pulled it
                                </li>
                            </Styled.Bullets>
                        </Styled.Example>
                    </Styled.Section>

                    <Styled.Section>
                        <Styled.SectionHead>
                            <FiTool />
                            <h3>stash and cherry-pick</h3>
                        </Styled.SectionHead>

                        <Styled.Bullets>
                            <li>
                                <b>stash</b> - park unfinished work temporarily
                                (clean working tree fast)
                            </li>
                            <li>
                                <b>cherry-pick</b> - copy a specific commit onto
                                your current branch
                            </li>
                        </Styled.Bullets>

                        <Styled.Example>
                            <Styled.ExampleTitle>
                                Beginner friendly example
                            </Styled.ExampleTitle>
                            <Styled.Para>
                                You are fixing a bug but suddenly need to switch
                                branches. Use stash to save your work without
                                committing, switch branches, then pop it later.
                            </Styled.Para>
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
                        Git feels scary until you realize it is just pointers
                        and snapshots. Once you get objects, refs, and reflog,
                        you stop fearing mistakes.
                    </Styled.FooterNote>
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
};

export default GitDeep;
