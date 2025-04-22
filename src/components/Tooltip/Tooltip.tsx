import { useState, useRef, useEffect } from "react";
import { TooltipProps } from "../../data/types";
import { TooltipWrapper, TooltipBox } from "./TooltipStyles";

export const Tooltip = ({
  message,
  children,
  onClick,
  disabled = false,
  image,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [positionClass, setPositionClass] = useState("-right-[70%]");
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  if (disabled) return <>{children}</>;

  useEffect(() => {
    if (!isVisible || !tooltipRef.current) return;

    const rect = tooltipRef.current.getBoundingClientRect();

    if (rect.right > window.innerWidth) {
      setPositionClass("right-[70%]");
    } else if (rect.left < 0) {
      setPositionClass("-right-[70%]");
    } else {
      setPositionClass("-right-[70%]");
    }
  }, [isVisible]);

  return (
    <TooltipWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <TooltipBox
          onClick={onClick}
          ref={tooltipRef}
          $positionClass={positionClass}
        >
          <img src={image.src} alt={image.alt} />
          {message}
        </TooltipBox>
      )}
    </TooltipWrapper>
  );
};
