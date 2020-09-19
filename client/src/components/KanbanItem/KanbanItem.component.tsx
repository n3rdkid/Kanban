import React from "react";
import "./KanbanItem.styles.css";
export type KanbanItemProps = {
  title: string;
};

const KanbanItem: React.FC<KanbanItemProps> = ({ title }: KanbanItemProps) => {
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", e.currentTarget.id);
    e.currentTarget.style.opacity = "1";
  };
  return (
    <div
      id={title}
      className="kanban-item"
      draggable={true}
      onDragStart={handleDrag}
    >
      {title}
    </div>
  );
};

export default KanbanItem;
