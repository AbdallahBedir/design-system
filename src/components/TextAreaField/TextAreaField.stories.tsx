import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextAreaField } from './TextAreaField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TextAreaField',
  args: {
    placeholder: 'Please enter your name',
    hasError: false,
  },
  component: TextAreaField,
} as ComponentMeta<typeof TextAreaField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextAreaField> = (args) => <TextAreaField {...args} />;

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  placeholder: 'Default textarea',
  hasError: false,
};

export const WithError = Template.bind({});

WithError.args = {
  placeholder: 'Textarea with error',
  hasError: true,
};
