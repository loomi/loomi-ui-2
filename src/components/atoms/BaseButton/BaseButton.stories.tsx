import { Meta } from "@storybook/react/types-6-0";
import { BaseButton, BaseButtonProps } from "./BaseButton";

export default {
  title: "Atoms/Button",
  component: BaseButton,
} as Meta;

export const Primary = (args: BaseButtonProps) => <BaseButton {...args} />;
