import  React, { Component } from "react";
import { connect } from 'react-redux';
import * as PrismicActions from '../redux/actions/prismic_action';


class Home extends Component {
  constructor(props) {
    super(props);

    PrismicActions.getByUid('page', 'homepage');
  }

  render() {
    const homepage = this.props.prismic?.homepage;
    return <>
      Shop page
    </>;
  }

}

const mapStateToProps = (state) => {
  return {
    homepage: state.prismic?.homepage,
    authentication: state.authentication,
  };
};


export default connect(mapStateToProps, null)(Home);