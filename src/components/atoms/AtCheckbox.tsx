export interface AtCheckboxProps {
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  children?: React.ReactNode;
}

export const AtCheckbox = ({
  checked,
  children,
  onChange,
}: AtCheckboxProps) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <div
        className={`flex rounded-sm items-center justify-center w-6 h-6 mr-2 text-white ${
          checked ? "bg-blue-800" : "bg-neutral-200"
        }`}
      >
        {checked && (
          <i className="material-icons !text-sm leading-none">check</i>
        )}
      </div>
      {children}
    </label>
  );
};
