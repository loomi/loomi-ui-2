import { Meta } from "@storybook/react/types-6-0";
import { BarChart, BarChartProps } from "./BarChart";

export default {
  title: "Molecules/BarChart",
  component: BarChart,
} as Meta;

const data = [
  {
    label: "A",
    value: 50,
  },
  {
    label: "B",
    value: 100,
  },
  {
    label: "C",
    value: 200,
  },
];

export const Primary = (args: BarChartProps<typeof data[0]>) => (
  <BarChart<typeof data[0]>
    {...args}
    label="Gráfico de barra"
    data={data}
    height={500}
    width={500}
    indexBy="label"
  />
);
