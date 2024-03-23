import { ChangeEvent } from "react";
import { SearchIcon } from "lucide-react";
import Input from "@/components/ui/Input";

type SearchInputProps = {
  searchType: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
  searchType,
  onSearch,
}: SearchInputProps) {
  return (
    <Input
      type="text"
      className="sm:w-fit"
      endContent={<SearchIcon className="stroke-gray-600" size={18} />}
      placeholder={`Search ${searchType} by title`}
      isLowHeight
      onChange={onSearch}
    />
  );
}
