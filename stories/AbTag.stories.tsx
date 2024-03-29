import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbTag, AbTagProps } from '../src';

export default {
  title: 'Componentes/AbTag',
  component: AbTag,
} as ComponentMeta<typeof AbTag>;

// @ts-ignore
const Template: ComponentStory<typeof AbTag> = args => <AbTag {...args} />;

const Tag = Template.bind({});

Tag.args = {
  texto: 'Ab Tag',
} as AbTagProps;

export { Tag };
