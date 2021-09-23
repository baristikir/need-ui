import React from 'react';
import { Meta } from '@storybook/react';

import { Button } from './index';

export default {
	title: 'Example/Button',
	component: Button,
} as Meta;

export const Primary: React.VFC<{}> = () => (
	<Button variants="primary">Button</Button>
);

// const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
// 	variant: 'primary',
// 	children: 'Test',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
// 	label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
// 	size: 'large',
// 	label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
// 	size: 'small',
// 	label: 'Button',
// };
