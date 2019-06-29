import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CountryListTable, CountryListItem } from '../../components';
import * as countryActions from '../../modules/country';

class CountryList extends Component {
  onDelete = index => {
    const { CountryActions } = this.props;
    CountryActions.deleteCountryThunk(index);
  };

  onSort = (columnName, rule) => {
    const { CountryActions } = this.props;
    CountryActions.sortCountryThunk(columnName, rule);
    CountryActions.filteredCountryThunk();
  };

  render() {
    const { filteredCountryData } = this.props;
    const ListItems = filteredCountryData.map((data, index) => (
      <CountryListItem
        {...data}
        key={`${data.name}-${index}`}
        onDelete={() => this.onDelete(index)}
      />
    ));
    return <CountryListTable ListItems={ListItems} onSort={this.onSort} />;
  }
}
const mapStateToProps = state => ({
  filteredCountryData: state.country.filteredCountryData,
});

const mapDispatchToProps = dispatch => ({
  CountryActions: bindActionCreators(countryActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryList);
