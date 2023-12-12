import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
] as const;

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectOrder: string | null;
}

const SortSelector = ({ onSelectSortOrder, selectOrder }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {selectOrder ? sortOrders.find(obj=> obj.value === selectOrder)?.label : "Relevence"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.label}
            value={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default SortSelector;
