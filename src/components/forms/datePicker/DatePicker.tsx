import { FC } from "react";
import DatePicker from "react-datepicker";

type IDateProps = {
  field: {
    onChange: () => void;
    value: string;
  };
};

const DatePickerComponent: FC<IDateProps> = ({
  field: { onChange, value },
  ...rest
}): JSX.Element => (
  <>
    <DatePicker
      selected={(value && new Date(value)) || null}
      onChange={(date) => {
        // onChange(date);
      }}
      showYearDropdown
      dateFormatCalendar="MMMM"
      yearDropdownItemNumber={15}
      scrollableYearDropdown
      locale="pl"
      {...rest}
    />
  </>
);

export default DatePickerComponent;
