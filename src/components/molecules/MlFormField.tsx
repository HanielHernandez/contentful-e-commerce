import clsx from "clsx";
import { AtText } from "../atoms/AtText";
import { AtTextField, AtTextFieldProps } from "../atoms/AtTextField";

type Position = "left" | "right";

export interface MlFormFieldProps extends AtTextFieldProps {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  iconPosition?: Position;
}

export function MlFormField({
  icon,
  label,
  iconPosition = "right",
  ...otherfields
}: MlFormFieldProps) {
  return (
    <div className="relative flex flex-col w-full">
      {label && (
        <AtText variant="label" className="mb-2">
          {label}
        </AtText>
      )}
      <div className="relative">
        <AtTextField
          {...otherfields}
          className={clsx(
            "w-full",
            icon && iconPosition == "right" && "!pr-12",
            icon && iconPosition == "left" && "!pl-12"
          )}
        />
        {icon && (
          <div
            className={clsx(
              "absolute text-neutral-600 top-3 ",
              iconPosition === "right" ? "right-3" : "left-3"
            )}
          >
            <span className="material-icons">{icon}</span>
          </div>
        )}
      </div>
    </div>
  );
}
