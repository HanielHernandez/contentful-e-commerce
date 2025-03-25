import { useCallback, useState } from "react";
import { useRange, UseRangeProps } from "react-instantsearch";
import { AtText } from "./atoms/AtText";
import { MlFormField } from "./molecules/MlFormField";

const unsetNumberInputValue = "";
function stripLeadingZeroFromInput(value: string): string {
  return parseFloat(value).toString();
}

export default function ProductPriceRefinement(props: UseRangeProps) {
  const { start, range, refine } = useRange({
    ...props,
  });
  const values = {
    min:
      start[0] !== -Infinity && start[0] !== range.min
        ? start[0]
        : unsetNumberInputValue,
    max:
      start[1] !== Infinity && start[1] !== range.max
        ? start[1]
        : unsetNumberInputValue,
  };
  const [prevValues, setPrevValues] = useState(values);

  const [{ from, to }, setRange] = useState({
    from: values.min?.toString(),
    to: values.max?.toString(),
  });

  if (values.min !== prevValues.min || values.max !== prevValues.max) {
    setRange({ from: values.min?.toString(), to: values.max?.toString() });
    setPrevValues(values);
  }

  const refineRange = useCallback(() => {
    refine([from ? Number(from) : undefined, to ? Number(to) : undefined]);
  }, [from, to, refine]);

  return (
    <div className="flex flex-col">
      <AtText variant="h5" className="mb-4">
        Price:
      </AtText>
      <div className="flex gap-4 flex-row no-wrap items-center mb-4">
        <label>
          <MlFormField
            icon="attach_money"
            iconPosition="left"
            type="number"
            onBlur={() => refineRange()}
            value={stripLeadingZeroFromInput(from || unsetNumberInputValue)}
            placeholder={range.min?.toString()}
            onInput={({ currentTarget }) => {
              const value = currentTarget.value;

              setRange({ from: value || unsetNumberInputValue, to });
            }}
          />
        </label>
        <span className="font-lg font-bold">-</span>
        <label>
          <MlFormField
            type="number"
            icon="attach_money"
            iconPosition="left"
            onBlur={() => refineRange()}
            value={stripLeadingZeroFromInput(to || unsetNumberInputValue)}
            placeholder={range.max?.toString()}
            onInput={({ currentTarget }) => {
              const value = currentTarget.value;

              setRange({ from, to: value || unsetNumberInputValue });
            }}
          />
        </label>
      </div>
    </div>
  );
}
