import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from './Checkbox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  args: {
    children: 'Do you accept the conditions?',
  },
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Checked.args = {
  checked: true,
};

export const Unchecked = Template.bind({});

Unchecked.args = {
  checked: false,
};

export const LabelStyle = Template.bind({});

LabelStyle.args = {
  labelStyle: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 1.5,
    color: '#5a6487',
  },
};

export const Small = Template.bind({});

Small.args = {
  checkboxSize: 18,
  labelStyle: {
    fontSize: 14,
  },
};
