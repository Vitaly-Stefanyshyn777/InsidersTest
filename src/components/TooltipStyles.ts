// src/components/TooltipStyles.ts
import styled from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipBox = styled.div<{ $positionClass: string }>`
  position: absolute;
  z-index: 50;
  padding: 0.625rem 1rem; /* 10px 16px */
  font-size: 0.75rem; /* text-xs */
  color: var(--inactive-gray);
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 0.25rem; /* 4px */
  white-space: nowrap;
  bottom: -0.5rem;

  ${({ $positionClass }) => $positionClass === "right-[70%]" && "right: 70%;"}
  ${({ $positionClass }) => $positionClass === "-right-[70%]" && "right: -60%;"}
`;
