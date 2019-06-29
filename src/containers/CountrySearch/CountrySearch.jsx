import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as inputActions from '../../modules/input';
import * as countryActions from '../../modules/country';
import { CountrySearchForm } from '../../components';

class CountrySeacrh extends Component {
  debouceCheck = false;
  debounce = (callback, cnt) => {
    return () => {
      if (this.debounceCheck) clearTimeout(this.debounceCheck);
      this.debounceCheck = setTimeout(() => {
        callback();
      }, cnt);
    };
  };

  handleChange = e => {
    const { InputActions, CountryActions } = this.props;
    InputActions.searchCountry(e.target.value);
    this.debounce(() => CountryActions.filteredCountryThunk(), 200)();
  };

  render() {
    const { keyword } = this.props;
    return (
      <CountrySearchForm keyword={keyword} handleChange={this.handleChange} />
    );
  }
}

const mapStateToProps = state => ({
  keyword: state.input.keyword,
});

const mapDispatchToProps = dispatch => ({
  InputActions: bindActionCreators(inputActions, dispatch),
  CountryActions: bindActionCreators(countryActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountrySeacrh);
