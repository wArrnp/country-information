import React, { Component } from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as countryActions from "./modules/country";
import { CountryList, CountryAddForm, CountrySearch } from "./containers";

const Root = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

class App extends Component {
  componentDidMount() {
    const { CountryActions } = this.props;
    CountryActions.fetchCountry();
  }

  render() {
    return (
      <Root>
        <CountrySearch />
        <CountryList />
        <CountryAddForm />
      </Root>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  CountryActions: bindActionCreators(countryActions, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(App);
