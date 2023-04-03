import { FC, forwardRef, useState } from "react";
import SelectComponent, {
  DropdownIndicatorProps,
  components,
} from "react-select";
import { IconSelect } from "../../../../public/assets/icons";
import { ISelectProps } from "./select.interface";

const DropdownIndicator = (props: DropdownIndicatorProps<any>) => {
  return (
    <components.DropdownIndicator {...props}>
      <IconSelect />
    </components.DropdownIndicator>
  );
};

const Select: FC<ISelectProps> = forwardRef(
  ({ options, placeholder, ...rest }, ref): JSX.Element => {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
      <div>
        <SelectComponent
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "#02b74f" : "#32343e",
              boxShadow: "0 0 0 0px red",
              borderWidth: 2,
              ":hover": {
                borderColor: "#02b74f",
              },
              borderRadius: 8,
              outline: 0,
              accentColor: "#02b74f",
            }),
            indicatorSeparator: (base) => ({
              ...base,
              display: "none", // скрыть разделитель иконки и рамки
            }),
            singleValue: (base, state) => ({
              ...base,
              color: "#32343e",
            }),
            menu: (base) => ({
              ...base,
              overflow: "hidden",
              borderRadius: 12, // убрать скругление углов
              marginTop: 15, // убрать отступ сверху
            }),
            menuList: (base) => ({
              ...base,
              padding: 0, // убрать отступы внутри меню
              fontWeight: 500,
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isSelected
                ? "#EEFFED"
                : base.backgroundColor, // изменить цвет фона при выборе опции
              opacity: state.isSelected ? 1 : 0.7,
              color: "#32343e",
              cursor: "pointer", // изменить форму курсора при наведении на опцию
              ":hover": {
                ...base[":hover"],
                color: "#32343e",
                opacity: 1,
                backgroundColor: "#EEFFED;", // изменить цвет фона при активации опции
              },
            }),
          }}
          options={options}
          components={{
            DropdownIndicator,
          }}
          placeholder={placeholder}
          isSearchable={false}
          isClearable={false}
          isDisabled={false}
          defaultValue={options[0]}
          {...rest}
        />
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
