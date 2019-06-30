import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CountryListTable, CountryListItem } from "../../components";
import * as countryActions from "../../modules/country";

class CountryList extends Component {
  onDelete = willRemoveCountryData => {
    const { CountryActions } = this.props;
    CountryActions.deleteCountry(willRemoveCountryData);
    CountryActions.filteredCountry();
  };

  onSort = (columnName, rule) => {
    const { CountryActions } = this.props;
    CountryActions.sortCountry(columnName, rule);
    CountryActions.filteredCountry();
  };

  render() {
    const { filteredCountryData } = this.props;
    const ListItems = filteredCountryData.map((data, index) => (
      <CountryListItem
        {...data}
        key={`${data.name}-${index}`}
        onDelete={() => this.onDelete(data)}
      />
    ));
    return <CountryListTable ListItems={ListItems} onSort={this.onSort} />;
  }
}
const mapStateToProps = state => ({
  filteredCountryData: state.country.filteredCountryData
});

const mapDispatchToProps = dispatch => ({
  CountryActions: bindActionCreators(countryActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryList);
