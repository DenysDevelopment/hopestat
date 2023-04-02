import { FC } from 'react'
import { IErorrField } from './field.interface'

import styles from './field.module.scss'

const ErrorMessageField: FC<IErorrField> = ({ message }): JSX.Element => {
  return <span className={styles.error}>{message}</span>
}

export default ErrorMessageField
