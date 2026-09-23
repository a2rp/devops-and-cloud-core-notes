import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        margin-top: auto;
        padding: 18px 15px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 12px;

        .copyright a {
            color: var(--color-text-secondary);
            font-weight: 800;
        }

        .copyright a:hover {
            color: var(--color-text-primary);
        }

        .links {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 7px;
        }

        .links a {
            display: grid;
            place-items: center;
            width: 32px;
            height: 32px;
            border: 1px solid var(--color-border);
            border-radius: 9px;
            color: var(--color-text-secondary);
            transition: border-color 140ms ease, box-shadow 140ms ease,
                color 140ms ease;
        }

        .links a:hover {
            border-color: var(--color-primary);
            color: var(--color-text-primary);
            box-shadow: 0 8px 18px var(--color-shadow);
        }

        .links svg {
            width: 15px;
            height: 15px;
        }

        @media (max-width: 700px) {
            flex-direction: column;
            align-items: flex-start;

            .links {
                justify-content: flex-start;
            }
        }
    `,
};
