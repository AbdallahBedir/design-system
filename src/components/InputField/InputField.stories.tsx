import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputField } from './InputField';

export default {
  title: 'Example/InputField',
  component: InputField,
  args: {
    type: 'text',
    placeholder: 'Please enter your name',
    hasError: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const Default = Template.bind({});

Default.args = {
  hasError: false,
};

export const WithError = Template.bind({});

WithError.args = {
  hasError: true,
};
