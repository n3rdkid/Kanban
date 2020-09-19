import React from "react";
import { OneItem, MultipleItem } from "../KanbanCard/KanbanCard.stories";
import { TKanbanCard } from "../KanbanCard/KanbanCard.component";
import { Meta, Story } from "@storybook/react/types-6-0";
export default {
  title: "Demo/Kanban/KanbanCard",
} as Meta;

export const Card = () => (
  <div style={{ display: "flex" }}>
    <OneItem {...(OneItem.args as TKanbanCard)} />
    <MultipleItem {...(MultipleItem.args as TKanbanCard)} />
  </div>
);
