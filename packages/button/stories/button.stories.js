import { VTButton } from '../index'

export default {
    title: 'Example/Button',
    component: VTButton,
};

const Template = (args) => <VTButton {...args} />;

export const button = Template.bind({});

button.args = {
    type: 'primary',
    label: 'test'
};
