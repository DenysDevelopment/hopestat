import { FC, useState } from "react";

type TypeCheckBox = {
  label?: string;
};

const CheckBox: FC<TypeCheckBox> = ({ label, ...rest }): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          {...rest}
        />
        <span>{isChecked ? " dwwd" : "dw"}</span>
      </label>
    </div>
  );
};

export default CheckBox;
