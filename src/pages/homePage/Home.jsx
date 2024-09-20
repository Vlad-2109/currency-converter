import { useState, useEffect } from 'react';
import { CurrencyInput } from '../../components/currencyInput/CurrencyInput';
import { Header } from '../../components/header/Header';
import axios from 'axios';
import './_Home.scss';

export const Home = () => {
  const [amountOne, setAmountOne] = useState(0);
  const [amountTwo, setAmountTwo] = useState(0);
  const [currencyOne, setCurrencyOne] = useState('USD');
  const [currencyTwo, setCurrencyTwo] = useState('UAH');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_REACT_APP_EXCHANGERATE_API_KEY ||
            'https://v6.exchangerate-api.com/v6/d2ecec8272db695f6b647eee/latest/USD',
        );
        setRates(response.data.conversion_rates);
      } catch (error) {
        console.error('Get currencies error:', error);
        throw new Error('Failed to get currencies');
      }
    };
    getCurrencies();
  }, []);

  const format = (number) => {
    return number.toFixed(2);
  };

  const handleAmountOneChange = (newAmountOne) => {
    setAmountTwo(
      format((newAmountOne * rates[currencyTwo]) / rates[currencyOne]),
    );
    setAmountOne(newAmountOne);
  };

  const handleAmountTwoChange = (newAmountTwo) => {
    setAmountOne(
      format((newAmountTwo * rates[currencyOne]) / rates[currencyTwo]),
    );
    setAmountTwo(newAmountTwo);
  };

  const handleCurrencyOneChange = (newCurrencyOne) => {
    setAmountTwo(
      format((amountOne * rates[currencyTwo]) / rates[newCurrencyOne]),
    );
    setCurrencyOne(newCurrencyOne);
  };

  const handleCurrencyTwoChange = (newCurrencyTwo) => {
    setAmountOne(
      format((amountTwo * rates[currencyOne]) / rates[newCurrencyTwo]),
    );
    setCurrencyTwo(newCurrencyTwo);
  };

  return (
    <div className="container">
      <Header rates={rates} />
      <h1>Currency Converter</h1>
      <CurrencyInput
        currencies={Object.keys(rates)}
        amount={amountOne}
        currency={currencyOne}
        onAmountChange={handleAmountOneChange}
        onCurrencyChange={handleCurrencyOneChange}
      />
      <CurrencyInput
        currencies={Object.keys(rates)}
        amount={amountTwo}
        currency={currencyTwo}
        onAmountChange={handleAmountTwoChange}
        onCurrencyChange={handleCurrencyTwoChange}
      />
    </div>
  );
};
