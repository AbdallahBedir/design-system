import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from './Spinner';

import { Colors } from 'colors';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Small = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  size: 30,
};

export const Grey = Template.bind({});

Grey.args = {
  spinnerColor: Colors.grey1,
  ringColor: Colors.grey2,
};

export const Large = Template.bind({});

Large.args = {
  size: 100,
};
