import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import { InputErrorMessage, InputGroup, InputProps } from "./Input";
import { Controller } from "react-hook-form";
import { VALIDATION_MESSAGES } from "../utils/ValidationMessages";
import ptbr from "date-fns/locale/pt-BR";

registerLocale("ptbr", ptbr);
setDefaultLocale("ptbr");

const Datepicker: React.FC<InputProps> = (props) => {
  return (
    <InputGroup
      className={`${props.inputError ? "input-invalid" : "input-valid"}`}
    >
      {props.label && (
        <label htmlFor={props.id}>
          {props.label} {props.required ? " *" : ""}
        </label>
      )}

      <Controller
        defaultValue={""}
        control={props.control}
        name={props.name}
        rules={props.rules}
        render={({ field }) => (
          <DatePicker
            locale="ptbr"
            selected={field.value}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      {props.inputError && (
        <InputErrorMessage>
          {props.inputError?.message ||
            `${props.label} ${
              VALIDATION_MESSAGES[props.inputError?.type + ""]
            }`}
        </InputErrorMessage>
      )}
    </InputGroup>
  );
};

export default Datepicker;
