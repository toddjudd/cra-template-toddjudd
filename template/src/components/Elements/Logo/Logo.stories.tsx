import { Meta, Story } from '@storybook/react';

import customLogo from '@/assets/lorem-logo.svg';

import { Logo, LogoProps } from './Logo';

const meta: Meta = {
  title: 'Components/Elements/Logo',
  component: Logo,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LogoProps> = (props) => <Logo {...props} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Stationary = Template.bind({});
Stationary.args = { spin: false };

export const CustomLogo = Template.bind({});
CustomLogo.args = {
  src: customLogo,
};
