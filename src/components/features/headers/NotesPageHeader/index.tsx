import PageHeader from "@/components/features/headers/PageHeader";
import AddButton from "@/components/features/buttons/AddButton";
import SearchInput from "@/components/features/inputs/SearchInput";
import PriorityMenu from "@/components/features/menus/PriorityMenu";
import DateMenu from "@/components/features/menus/DateMenu";

type NotesPageHeaderProps = {
  onAddNewNote: () => void;
};

export default function NotesPageHeader({
  onAddNewNote,
}: NotesPageHeaderProps) {
  return (
    <PageHeader>
      <PageHeader.Title>Notes</PageHeader.Title>
      <PageHeader.Action>
        <AddButton itemText="note" onClick={onAddNewNote} />
      </PageHeader.Action>
      <PageHeader.Filters>
        <SearchInput searchType="note" onSearch={() => {}} />
        <PriorityMenu onClickPriority={() => {}} />
        <DateMenu />
      </PageHeader.Filters>
    </PageHeader>
  );
}
