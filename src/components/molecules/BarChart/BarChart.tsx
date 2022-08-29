import { Text, TextProps } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import { ResponsiveBar, BarSvgProps, BarDatum } from "@nivo/bar";

export type BarChartProps<T extends BarDatum> = Partial<
  Omit<BarSvgProps<BarDatum>, "data" | "label">
> & {
  label: string;
  data: T[];
  textComponentProps?: TextProps;
};

export const BarChart = <T extends BarDatum>({
  label,
  data,
  height,
  width,
  textComponentProps,
  ...restProps
}: BarChartProps<T>) => {
  return (
    <VStack
      pt="2rem"
      pb="2.5rem"
      px="2.6rem"
      bg="white"
      boxShadow="sm"
      borderRadius="md"
      height={height}
      width={width}
    >
      <Text fontSize="lg" fontWeight="bold" mb={5} {...textComponentProps}>
        {label}
      </Text>
      <ResponsiveBar
        data={data}
        margin={{ top: 10, right: 10, bottom: 30, left: 40 }}
        padding={0.6}
        colors={{ scheme: "nivo" }}
        valueScale={{ type: "linear" }}
        borderRadius={5}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        {...restProps}
      />
    </VStack>
  );
};
