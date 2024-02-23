"use client";

import { SearchIcon } from "lucide-react";
import PageHeader from "@/components/features/headers/PageHeader";
import AddButton from "@/components/features/buttons/AddButton";
import ToggleAllButton from "@/components/features/buttons/ToggleAllButton";
import PriorityMenu from "@/components/features/menus/PriorityMenu";
import Input from "@/components/ui/Input";

export default function NotesPageHeader() {
  return (
    <PageHeader>
      <PageHeader.Title>Notes</PageHeader.Title>
      <PageHeader.Actions>
        <AddButton itemText="note" onClick={() => {}} />
        <ToggleAllButton type="expand" onClick={() => {}} />
      </PageHeader.Actions>
      <PageHeader.Filters>
        <Input
          className="sm:max-w-56"
          withShortHeight
          endContent={<SearchIcon className="stroke-gray-400" size={18} />}
          type="text"
          placeholder="Search note by title"
        />
        <PriorityMenu />
      </PageHeader.Filters>
    </PageHeader>
  );
}
