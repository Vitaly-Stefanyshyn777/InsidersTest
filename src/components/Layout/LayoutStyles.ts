import styled from "styled-components";

export const FixedSidebar = styled.div`
  height: 100%;
  position: fixed;
  width: 62px;
`;

export const ContentWrapper = styled.div`
  margin-left: 62px;
`;

export const Header = styled.header`
  margin-bottom: 70px;
  border-color: var(--nav-border);
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  font-family: "Poppins Medium", sans-serif;
  border: 1px solid var(--nav-border);
  background-color: white;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Main = styled.main`
  background-color: var(--active-tab);
  height: 100%;
  padding: 1.25rem;
  background-color: #f3f6fb;
`;

export const TabDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 100px;
  max-width: 100px;
  flex-shrink: 0;
  padding: 0;
  margin: 0;
  text-align: center;
  box-shadow: inset -1px 0 0 0 rgba(0, 0, 0, 0.1);

  &:last-child {
    box-shadow: none;
  }

  img {
    margin-bottom: 4px;
  }

  p {
    font-size: clamp(10px, 1.5vw, 14px);
    line-height: 1.2;
    word-break: break-word;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
