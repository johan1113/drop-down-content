import { connect } from 'react-redux';
import SelectedItemView from '../../presentation/selectedItem';
import emmit from '../actions';

const mapStateToProps = (state) => ({
    displayInputValue: state.modalReducer.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
    actionUpdateState: () => dispatch(emmit.dropDownContent.actionUpdateState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItemView);