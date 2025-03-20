import clsx from "clsx";
import { AtText } from "../atoms/AtText";
import { AtTextField, AtTextFieldProps } from "../atoms/AtTextField";

export interface MlFormFieldProps extends AtTextFieldProps {
  icon?: React.ReactNode;
  label?: React.ReactNode;
}

export function MlFormField({ icon, label, ...otherfields }: MlFormFieldProps) {
  return (
    <div className="relative flex flex-col w-full">
      <AtText variant="label" className="mb-2">
        {label}
      </AtText>
      <div className="relative">
        <AtTextField {...otherfields} className={clsx("w-full",icon && "!pr-12")} />
        {icon && (
          <div className="absolute top-3 right-3 text-neutral-600">
            <span className="material-icons">{icon}</span>
          </div>
        )}
      </div>
    </div>
  );
}
