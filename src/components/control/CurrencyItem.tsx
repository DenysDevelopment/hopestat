import classNames from "classnames";
import { FC, useState } from "react";
import { IconMinus, IconPlus } from "../../../public/assets/icons";
import styles from "./control.module.scss";

const CurrencyItem: FC = (): JSX.Element => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };
  return (
    <div className={styles.item}>
      <div
        className={classNames(styles.minus, styles.currency, {
          [styles.disabled]: counter === 0,
        })}
        onClick={decrementCounter}
      >
        <IconMinus />
      </div>
      <div className={styles.counter}>{counter}</div>
      <div
        className={classNames(styles.plus, styles.currency)}
        onClick={incrementCounter}
      >
        <IconPlus />
      </div>
    </div>
  );
};

export default CurrencyItem;
