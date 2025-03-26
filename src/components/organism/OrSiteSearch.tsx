"use client";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { MlFormField } from "../molecules/MlFormField";

interface OrSiteSearch {
  results?: React.ReactNode;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export function OrSiteSearch({
  results,
  value,
  onChange,
  onSubmit,
}: OrSiteSearch) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full relative overflow-visible">
      <form className="overflow-visible w-full" onSubmit={onSubmit}>
        {open && (
          <div
            className="fixed z-40 top-0 left-0 right-0 w-screen h-screen bg-transparent"
            onClick={() => setOpen(false)}
          ></div>
        )}

        <MlFormField
          id="search"
          pill
          className="w-full z-60"
          value={value}
          onChange={(event) => {
            setOpen(true);
            if (onChange !== undefined) {
              onChange(event);
            }
          }}
          name="search"
          icon="search"
          placeholder="Search"
        ></MlFormField>
        {open && results && (
          <div className="bg-white z-40 z-70 border max-h-58 overflow-auto border-neutral-200 rounded-b-md absolute top-[calc(100%+1px)] left-4 right-4">
            {results}
          </div>
        )}
      </form>
    </div>
  );
}
