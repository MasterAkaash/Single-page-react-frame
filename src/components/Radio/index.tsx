import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

export type RadioProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    inputClassName: string;
    className: string;
    name: string;
    label: string;
    checked: boolean;
    errors: string[];
    onChange: Function;
    id: string;
  }>;

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      label = "",
      checked = false,
      errors = [],
      onChange,
      id = "radio_id",
      ...restProps
    },
    ref,
  ) => {
    const [value, setValue] = React.useState(checked);

    const handleChange = (event) => {
      setValue(event.target.checked);
      if (onChange) onChange(!!event?.target?.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName}`}
            ref={ref}
            type="radio"
            name={name}
            aria-checked={!!value}
            checked={!!value}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  },
);

export { Radio };
