import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,

    Header: styled.header`
        height: 64px;
        flex: 0 0 64px;
        position: relative;
        z-index: 20;
    `,

    Main: styled.main`
        flex: 1;
        min-height: 0;
        overflow-y: auto;
        position: relative;

        .studyNav {
            position: fixed;
            top: 64px;
            bottom: 0;
            left: 0;
            width: 248px;
            padding: 22px 14px;
            overflow-y: auto;
            background: var(--color-surface-2);
            border-right: 1px solid var(--color-border);
            z-index: 4;
        }

        .studyNavLabel {
            padding: 0 10px 10px;
            color: var(--color-text-muted);
            font-size: 11px;
            font-weight: 900;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        .studyNav nav {
            display: grid;
            gap: 4px;
        }

        .studyNav a {
            display: flex;
            align-items: center;
            gap: 10px;
            width: 100%;
            padding: 10px;
            border: 1px solid transparent;
            border-radius: 10px;
            color: var(--color-text-secondary);
            text-align: left;
            font-size: 13px;
            font-weight: 800;
            line-height: 1.25;
            text-decoration: none;
            transition: border-color 140ms ease, box-shadow 140ms ease,
                color 140ms ease, background-color 140ms ease;
        }

        .studyNav a:hover,
        .studyNav a.active {
            border-color: var(--color-primary);
            background: color-mix(in srgb, var(--color-primary) 20%, transparent);
            color: var(--color-text-primary);
            box-shadow: 0 8px 20px var(--color-shadow);
        }

        .studyNav a svg {
            flex: 0 0 auto;
            font-size: 16px;
        }

        .studyNav p {
            margin: 18px 10px 0;
            color: var(--color-text-muted);
            font-size: 12px;
        }

        .contentWrapper {
            min-height: 100%;
            max-width: 1440px;
            margin: 0 0 0 248px;
            display: flex;
            flex-direction: column;
            padding: 15px;
        }

        .topicWrapper {
            display: none;
        }

        .topicWrapper.activeTopic {
            display: block;
        }

        .routeLoader {
            min-height: 60vh;
            display: grid;
            place-items: center;
            align-content: center;
            gap: 10px;
            color: var(--color-primary);
            font-weight: 800;
        }

        @media (max-width: 800px) {
            .studyNav {
                position: static;
                width: auto;
                margin: 12px;
                border: 1px solid var(--color-border);
                border-radius: 16px;
                max-height: 220px;
            }

            .studyNav nav {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .contentWrapper {
                margin-left: 0;
            }
        }
    `,
};
