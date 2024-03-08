import { useState } from "react";
import { View } from "@/types";

export default function useView() {
  const [view, setView] = useState<View>("display");

  const updateView = (selectedView: View) => {
    setView(selectedView);
  };

  return { view, updateView };
}
