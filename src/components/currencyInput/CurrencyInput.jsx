import PropTypes from 'prop-types';
import './_CurrencyInput.scss';

export const CurrencyInput = ({
  amount,
  currency,
  currencies,
  onAmountChange,
  onCurrencyChange,
}) => {
  return (
    <div className="group">
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(Number(e.target.value))}
      />
      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencies.map((item) => (
          <option key={item + Math.random()} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};
