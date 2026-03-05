import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,

    Header: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 20px;
        cursor: pointer;
        user-select: none;
        transition: background 120ms ease;

        &:hover {
            background: var(--color-surface-2);
        }
    `,

    Title: styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,

    Toggle: styled.div`
        font-size: 20px;
        color: var(--color-text-muted);
    `,

    Content: styled.div`
        padding: 22px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,

    Section: styled.div`
        margin-bottom: 20px;
    `,

    Paragraph: styled.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        margin-bottom: 20px;
    `,

    Card: styled.div`
        border: 1px solid var(--color-border);
        border-radius: 12px;
        padding: 16px;
        background: var(--color-surface);
        transition:
            transform 120ms ease,
            border-color 120ms ease;

        svg {
            font-size: 20px;
            color: var(--color-accent);
            margin-bottom: 8px;
        }

        h3 {
            font-size: 15px;
            margin-bottom: 6px;
        }

        p {
            font-size: 14px;
            color: var(--color-text-secondary);
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-primary);
        }
    `,
};
