"use client";

import PageHeader from "@/components/features/headers/PageHeader";
import AddButton from "@/components/features/buttons/AddButton";
import ToggleAllButton from "@/components/features/buttons/ToggleAllButton";
import SearchInput from "@/components/features/inputs/SearchInput";
import PriorityMenu from "@/components/features/menus/PriorityMenu";
import DateMenu from "@/components/features/menus/DateMenu";

export default function NotesPageHeader() {
  return (
    <PageHeader>
      <PageHeader.Title>Notes</PageHeader.Title>
      <PageHeader.Actions>
        <AddButton itemText="note" onClick={() => {}} />
        <ToggleAllButton type="expand" onClick={() => {}} />
      </PageHeader.Actions>
      <PageHeader.Filters>
        <SearchInput searchType="note" onSearch={() => {}} />
        <PriorityMenu onClickPriority={() => {}} />
        <DateMenu />
      </PageHeader.Filters>
    </PageHeader>
  );
}
