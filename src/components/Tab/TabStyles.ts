import styled from "styled-components";

export const TabWrapper = styled.div<{ $active?: boolean; $hasName?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem 1.25rem;
  white-space: nowrap;
  box-sizing: border-box;
  min-width: 80px;
  flex-shrink: 0;

  ${({ $active }) =>
    $active
      ? `
    background-color: #f1f5f9;
    // border-top: 2px solid #3b82f6;
    border-top-right-radius: 1px;
    border-top-left-radius: 1px;
    border-bottom: none;
    color: #000;
    font-weight: 600;
    box-shadow: none;
  `
      : `
    color: var(--inactive-gray);
    &:hover {
      background-color: #f1f5f9;
      // border-top: 2px solid #3b82f6;
    }
  `};

  ${({ $hasName }) =>
    $hasName &&
    `
    gap: 0.625rem;
    border-right: 1px solid #E5E7EB;
  `}
`;

export const TabIcon = styled.img<{ $active?: boolean }>`
  width: 1rem;
  height: 1rem;
  filter: ${({ $active }) =>
    $active ? "var(--active-filter)" : "var(--inactive-filter)"};
`;

export const TabText = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 115%;
  color: #343434;
`;
