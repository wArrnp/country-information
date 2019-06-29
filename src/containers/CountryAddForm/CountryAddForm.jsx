import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as countryActions from "../../modules/country";
import * as inputActions from "../../modules/input";
import { CountryAddInputForm } from "../../components";

class CountryAddForm extends Component {
  handleSubmit = ({ name, alpha2Code, callingCodes, capital, region }) => {
    const { CountryActions } = this.props;
    const newCountryData = {
      name,
      alpha2Code,
      callingCodes: [callingCodes],
      capital,
      region
    };
    CountryActions.addCountry(newCountryData);
    CountryActions.filteredCountryThunk();
  };

  render() {
    return <CountryAddInputForm onSubmit={this.handleSubmit} />;
  }
}

const mapDispatchToProps = dispatch => ({
  CountryActions: bindActionCreators(countryActions, dispatch),
  InputActions: bindActionCreators(inputActions, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(CountryAddForm);
