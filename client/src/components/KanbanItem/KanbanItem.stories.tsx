import React from "react";
import KanbanItem,{KanbanItemProps} from "./KanbanItem.component";
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: "Kanban/KanbanItem",
  component: KanbanItem,
} as Meta;;

const Template:Story<KanbanItemProps> = (args) => <KanbanItem {...args}> </KanbanItem>;
Template.bind({});

export const ItemOne = Template.bind({});
ItemOne.args = {
  title: "Item One",
};