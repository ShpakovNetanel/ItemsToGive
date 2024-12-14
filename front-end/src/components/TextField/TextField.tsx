import { TextField as MuiTextField, SxProps } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";
import { RHF } from "../../utilities/RHFTypes";
import { useTranslation } from "react-i18next";
import { Namespaces } from "../../i18n/i18n.constants";
import { isDefined } from "remeda";
import { HTMLInputTypeAttribute } from "react";

type InputProps<T extends FieldValues> = {
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  sx?: SxProps;
  multiline?: boolean;
  type?: HTMLInputTypeAttribute;
  multilineRows?: number;
} & RHF<T>;

const TextField = <T extends FieldValues>({
  control,
  name,
  placeholder,
  disabled,
  sx,
  multiline,
  type,
  multilineRows = 10,
}: InputProps<T>) => {
  const { t } = useTranslation(Namespaces.message);

  return (
    <>
      <Controller
        control={control}
        name={name}
        disabled={disabled}
        render={({ field, fieldState: { error } }) => (
          <MuiTextField
            {...field}
            placeholder={placeholder}
            sx={{ ...sx }}
            rows={multiline ? multilineRows : 1}
            type={type}
            error={isDefined(error)}
            multiline={multiline}
            helperText={t(error?.message || "")}
          />
        )}
      ></Controller>
    </>
  );
};

export default TextField;
