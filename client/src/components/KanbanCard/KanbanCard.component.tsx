import React from "react";
import KanbanItem, {
  KanbanItemProps,
} from "../KanbanItem/KanbanItem.component";
import "./KanbanCard.styles.css";

export type TKanbanCard = {
  title: string;
  kanbanItems: Array<KanbanItemProps>;
};
const KanbanCard: React.FC<TKanbanCard> = ({ title, kanbanItems }) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(`Element dropped in ${title}`);
    e.dataTransfer.getData("text");
    e.dataTransfer.clearData();
  };

  return (
    <div className="kanban-card">
      <div className="kanban-title">{title}</div>
      <div onDragOver={handleDragOver} onDrop={handleDrop}>
        {kanbanItems?.map((kanbanItem: KanbanItemProps) => (
          <KanbanItem key={kanbanItem.title} {...kanbanItem}></KanbanItem>
        ))}
      </div>
    </div>
  );
};

export default KanbanCard;
