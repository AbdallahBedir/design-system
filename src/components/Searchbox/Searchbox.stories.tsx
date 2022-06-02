import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBox } from './Searchbox';

export default {
  title: 'Example/SearchBox',
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = (args) => (
  <div>
    <SearchBox {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  searchTerm: '',
  onDebouncedTextChange: () => {},
  loading: false,
  placeholder: 'Search by country',
};

export const Loading = Template.bind({});

Loading.args = {
  searchTerm: 'Cairo',
  onDebouncedTextChange: () => {},
  loading: true,
};
