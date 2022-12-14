import { connect } from "react-redux";

import { logout } from "../../actions/session_actions";
import { openModal } from '../../actions/modal_actions';
import SplashPage from './splash_page';

const mapStateToProps =  ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);