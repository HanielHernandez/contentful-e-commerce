import { ChangeEventHandler, FormEventHandler } from "react";
import { MlFormField } from "../molecules/MlFormField";

interface OrSiteSearch {
  results?: React.ReactNode;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export function OrSiteSearch({ results,value, onChange, onSubmit }: OrSiteSearch) {
  return (
    <div className="w-full relative overflow-visible">
      <form className="overflow-visible w-full" onSubmit={onSubmit}>
        <MlFormField
          id="search"
          pill
          className="w-full"
          value={value}
          onChange={onChange}
          name="search"
          icon="search"
          placeholder="Search"
        ></MlFormField>
        {results && (
          <div className="bg-white z-40 border border-neutral-200 rounded-b-md absolute top-[calc(100% + 2px)] left-4 right-4">{results}</div>
        )}
      </form>
    </div>
  );
}
