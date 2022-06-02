import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBox } from './Searchbox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SearchBox',
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBox> = (args) => (
  <div>
    <SearchBox {...args} />
  </div>
);

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
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
