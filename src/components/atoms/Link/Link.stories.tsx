import { Meta } from "@storybook/react/types-6-0";
import { Link, LinkProps } from "./Link";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Atoms/Link",
  component: Link,
  decorators: [withRouter],
} as Meta;

export const Primary = (args: LinkProps) => (
  <Link {...args} to="">
    Link padrão
  </Link>
);
export const Secondary = (args: LinkProps) => (
  <Link
    {...args}
    to=""
    color="white"
    backgroundColor="blue.500"
    fontWeight="bold"
    p="2"
    borderRadius="md"
  >
    Link secundário
  </Link>
);
