import { connect } from "react-redux";
import React from "react";
import { openModal, closeModal } from '../../actions/modal_actions';

import { signup } from "../../actions/session_actions";
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup'
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button className="login-button" onClick={() => dispatch(openModal('login'))}>
                Already a user? Login!
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);