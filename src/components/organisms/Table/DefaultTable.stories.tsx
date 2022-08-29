import { Meta } from "@storybook/react/types-6-0";
import { DefaultTable } from "./DefaultTable";
import { TableP } from "./TableCompound";

export default {
  title: "Organisms/Table",
  component: DefaultTable,
} as Meta;

type TableData = {
  id: string;
  name: string;
  age: number;
  city: string;
  country: string;
};

const columns: TableP<TableData>["columns"] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Nome",
    accessor: "name",
  },
  {
    Header: "Idade",
    accessor: "age",
  },
  {
    Header: "Cidade",
    accessor: "city",
  },
  {
    Header: "País",
    accessor: "country",
  },
];

const data: TableData[] = [
  {
    id: "1",
    name: "Edimário",
    age: 24,
    city: "Juazeiro",
    country: "Brasil",
  },
  {
    id: "2",
    name: "Carlos@Carlos",
    age: 20,
    city: "Candeias",
    country: "Brasil",
  },
];

export const Primary = (args: TableP<TableData>) => (
  <DefaultTable {...args} columns={columns} data={data} />
);
