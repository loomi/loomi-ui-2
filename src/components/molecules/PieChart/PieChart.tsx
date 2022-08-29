import { Text, TextProps, VStack } from "@chakra-ui/react";
import { ResponsivePie, PieSvgProps } from "@nivo/pie";

export type PieChartProps<T> = Partial<Omit<PieSvgProps<T>, "data">> & {
  label: string;
  data: T[];
  textComponentProps?: TextProps;
  indexBy: string;
};

export function PieChart<T>({
  label,
  data,
  height,
  textComponentProps,
  width,
  indexBy,
  ...restProps
}: PieChartProps<T>) {
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
      <ResponsivePie
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
        data={data}
        margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
        innerRadius={0.88}
        padAngle={2}
        cornerRadius={45}
        activeInnerRadiusOffset={5}
        activeOuterRadiusOffset={5}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        {...restProps}
      />
    </VStack>
  );
}
