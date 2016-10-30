import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import ShopContainer from './components/ShopContainer';

function mapStateToProps(state) {
  return {
    basket: state.basket,
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(ShopContainer);

export default App;
