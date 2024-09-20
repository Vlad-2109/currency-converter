import PropTypes from 'prop-types';
import './_Header.scss';

export const Header = ({ rates }) => {
  const uahToUsd = (rates['UAH'] / rates['USD']).toFixed(2);
  const uahToEur = (rates['UAH'] / rates['EUR']).toFixed(2);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container__item">
          <img src="/usa-flag.svg" alt="usa" />
          <span>USD</span>
          <span>{uahToUsd}</span>
        </div>
        <div className="header__container__item">
          <img src="/eu-flag.svg" alt="eu" />
          <span>EUR</span>
          <span>{uahToEur}</span>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  rates: PropTypes.object,
};
