import { NumericFormat } from 'react-number-format';
import { Input } from 'antd';

const CurrencyInput = ({ value, onChange }) => {
  return (
    <NumericFormat
      customInput={Input}
      thousandSeparator=","
      decimalSeparator="."
      prefix="$ "
      fixedDecimalScale
      decimalScale={2}
      allowNegative={false}
      placeholder="$ 0.00"
      value={value}
      onValueChange={(values) => onChange(values.floatValue)}
    />
  );
};

export default CurrencyInput;
