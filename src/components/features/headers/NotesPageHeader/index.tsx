"use client";

import PageHeader from "@/components/features/headers/PageHeader";
import AddButton from "@/components/features/buttons/AddButton";
import SearchInput from "@/components/features/inputs/SearchInput";
import PriorityMenu from "@/components/features/menus/PriorityMenu";
import DateMenu from "@/components/features/menus/DateMenu";

export default function NotesPageHeader() {
  return (
    <PageHeader>
      <PageHeader.Title>Notes</PageHeader.Title>
      <PageHeader.Action>
        <AddButton itemText="note" onClick={() => {}} />
      </PageHeader.Action>
      <PageHeader.Filters>
        <SearchInput searchType="note" onSearch={() => {}} />
        <PriorityMenu onClickPriority={() => {}} />
        <DateMenu />
      </PageHeader.Filters>
    </PageHeader>
  );
}
