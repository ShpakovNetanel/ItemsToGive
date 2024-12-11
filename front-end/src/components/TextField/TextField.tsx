import { TextField as MuiTextField, SxProps } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";
import { RHF } from "../../utilities/RHFTypes";
import { useTranslation } from "react-i18next";
import { Namespaces } from "../../i18n/i18n.constants";
import { isDefined } from "remeda";

type InputProps<T extends FieldValues> = {
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  sx: SxProps;
} & RHF<T>;

const TextField = <T extends FieldValues>({
  control,
  name,
  placeholder,
  disabled,
  sx,
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
            error={isDefined(error)}
            helperText={t(error?.message || "")}
          ></MuiTextField>
        )}
      ></Controller>
    </>
  );
};

export default TextField;
