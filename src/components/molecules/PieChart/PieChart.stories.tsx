import { Meta } from "@storybook/react/types-6-0";
import { PieChart, PieChartProps } from "./PieChart";

export default {
  title: "Molecules/PieChart",
  component: PieChart,
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

export const Primary = (args: PieChartProps<typeof data[0]>) => (
  <PieChart<typeof data[0]>
    {...args}
    label="Gráfico de torta"
    data={data}
    height={500}
    width={500}
    indexBy="label"
  />
);
