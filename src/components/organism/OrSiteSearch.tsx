import { MlFormField } from "../molecules/MlFormField";

interface OrSiteSearch {
  results: React.ReactNode;
}

export function OrSiteSearch({ results }: OrSiteSearch) {
  return (
    <div>
      <form action="">
        <MlFormField
          id="search"
          pill
          name="search"
          icon="search"
          placeholder="Search"
        ></MlFormField>
        {results}
      </form>
    </div>
  );
}
