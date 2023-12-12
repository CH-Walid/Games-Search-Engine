import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        ref.current && onSearch(ref.current.value)
      }}

      style={{width: '100%'}}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={22}
          placeholder="Search games..."
          variant="filled"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};
export default SearchInput;
