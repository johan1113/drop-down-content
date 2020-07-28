import DropDownContentWrapper from '../../wrappers/dropdownContent';
import emmit from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    displayDropDownContent: state.dropDownContentReducer,
});

const mapDispatchToProps = (dispatch) => ({
    actionSetText: (payload) => dispatch(emmit.updateTextValue(payload)),
    actionOffModal: (payload) => dispatch(emmit.dropDownContentOff(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownContentWrapper);