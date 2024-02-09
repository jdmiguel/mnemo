"use client";

import { SearchIcon } from "lucide-react";
import PageHeader from "@/components/features/headers/PageHeader";
import AddButton from "@/components/features/buttons/AddButton";
import ToggleAllButton from "@/components/features/buttons/ToggleAllButton";
import Input from "@/components/ui/Input";

export default function NotesPageHeader() {
  return (
    <PageHeader>
      <PageHeader.TopWrapper>
        <PageHeader.Title>Notes</PageHeader.Title>
        <PageHeader.Actions>
          <AddButton itemText="note" onClick={() => {}} />
          <ToggleAllButton type="expand" onClick={() => {}} />
        </PageHeader.Actions>
      </PageHeader.TopWrapper>
      <PageHeader.Filters>
        <Input
          endContent={<SearchIcon className="stroke-gray-400" />}
          type="text"
          placeholder="Search note by title"
        />
        <Input
          endContent={<SearchIcon className="stroke-gray-400" />}
          type="text"
          placeholder="Search note by title"
        />
        <Input
          endContent={<SearchIcon className="stroke-gray-400" />}
          type="text"
          placeholder="Search note by title"
        />
      </PageHeader.Filters>
    </PageHeader>
  );
}
