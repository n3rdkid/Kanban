import React from "react";
import KanbanCard, { TKanbanCard } from "./KanbanCard.component";
import { Story, Meta } from "@storybook/react/types-6-0";
// import KanbanItem, {
//   KanbanItemProps,
// } from "../KanbanItem/KanbanItem.component";

export default {
  title: "Kanban/KanbanCard",
  component: KanbanCard,
} as Meta;

const CardTemplate: Story<TKanbanCard> = (args) => (
  <KanbanCard {...args}></KanbanCard>
);
export const MultipleItem = CardTemplate.bind({});
MultipleItem.args = {
  title: "Title One",
  kanbanItems: [
    {
      title: "Item 1 Card 1",
    },
    {
      title: "Item 2 Card 1",
    },
  ],
} as TKanbanCard;
export const OneItem = CardTemplate.bind({});
OneItem.args = {
  title: "Title Two",
  kanbanItems: [
    {
      title: "Item 1 Card 1",
    },
  ],
} as TKanbanCard;
