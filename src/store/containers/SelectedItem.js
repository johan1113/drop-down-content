import { connect } from 'react-redux';
import SelectedItemView from '../../presentation/selectedItem';
import emmit from '../actions';

const mapStateToProps = (state) => ({
    displayInputValue: state.modalReducer.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
    actionOnModal: (payload) => dispatch(emmit.dropDownContentOn(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItemView);