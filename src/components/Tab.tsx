import clsx from "clsx";
import { TabProps } from "../data/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TabWrapper, TabIcon, TabText } from "./TabStyles";

const Tab = ({ name, image, active, onClick, className, id }: TabProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <TabWrapper
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      $active={active}
      $hasName={!!name}
      onClick={onClick}
      className={className}
      role="button"
      tabIndex={0}
    >
      <TabIcon src={image.src} alt={image.alt} $active={active} />
      {name && <TabText>{name}</TabText>}
    </TabWrapper>
  );
};

export default Tab;
