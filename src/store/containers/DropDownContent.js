import React from 'react';
import DropDownContentWrapper from '../../wrappers/dropdownContent';
import emmit from '../actions';
import {  connect } from 'react-redux';

const mapStateToProps = (state) => ({
    displayDropDownContent: state.dropDownContentReducer,
});

const mapDispatchToProps = (dispatch) => ({
    actionUpdateState: () => dispatch(emmit.modal.actionUpdateState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownContentWrapper);