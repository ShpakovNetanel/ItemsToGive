import { TextField } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";
import { RHF } from "../../utilities/RHFTypes";

type InputProps<T extends FieldValues> = {
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
} & RHF<T>;

const Input = <T extends FieldValues>({
  control,
  name,
  placeholder,
  disabled,
}: InputProps<T>) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        disabled={disabled}
        render={({ field }) => (
          <TextField {...field} placeholder={placeholder}></TextField>
        )}
      ></Controller>
    </>
  );
};
  
export default Input;
