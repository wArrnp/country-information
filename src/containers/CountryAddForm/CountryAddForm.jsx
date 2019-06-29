import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countryActions from '../../modules/country';
import * as inputActions from '../../modules/input';
import { CountryAddInputForm } from '../../components';

class CountryAddForm extends Component {
  handleSubmit = () => {
    const {
      CountryActions,
      name,
      alpha2Code,
      callingCodes,
      capital,
      region,
    } = this.props;
    const newCountryData = {
      name,
      alpha2Code,
      callingCodes: [callingCodes],
      capital,
      region,
    };
    CountryActions.addCountry(newCountryData);
    CountryActions.filteredCountryThunk();
  };

  handleChange = e => {
    const { InputActions } = this.props;
    InputActions.handleChange(e.target.name, e.target.value);
  };

  render() {
    const { name, alpha2Code, callingCodes, capital, region } = this.props;
    return (
      <CountryAddInputForm
        name={name}
        alpha2Code={alpha2Code}
        callingCodes={callingCodes}
        capital={capital}
        region={region}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  name: state.input.name,
  alpha2Code: state.input.alpha2Code,
  callingCodes: state.input.callingCodes,
  capital: state.input.capital,
  region: state.input.region,
});

const mapDispatchToProps = dispatch => ({
  CountryActions: bindActionCreators(countryActions, dispatch),
  InputActions: bindActionCreators(inputActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryAddForm);
