// src/components/OverflowDropdownStyles.ts
import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
`;

export const ToggleButton = styled.div`
  padding: 1rem 1.25rem;
  cursor: pointer;
  background-color: var(--active-border-color);
  color: var(--inactive-gray);
  min-width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  z-index: 10;
  background-color: white;
  color: var(--inactive-gray);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #d1d5db;
  margin-top: 0.25rem;
  right: 0;
  width: 225px;
`;

export const DropdownItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  gap: 0.5rem;

  &:hover {
    background-color: var(--active-tab);
  }
`;

export const TabInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
`;

export const TabIcon = styled.div<{ $active: boolean }>`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    filter: ${({ $active }) =>
      $active ? "var(--active-filter)" : "var(--inactive-filter)"};
  }
`;

export const TabName = styled.span<{ $active?: boolean }>`
  font-size: 0.875rem;
  color: ${({ $active }) => ($active ? "black" : "inherit")};
`;

export const PinButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;
