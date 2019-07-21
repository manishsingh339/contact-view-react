import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getAllContacts} from '../../actions/contactAction';
import styles from './AllContacts.scss';

class AllContacts extends Component {
    static propTypes = {
    }

    componentDidMount() {
        this.props.getAllContacts();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Updated", this.props.allContacts);
    }
    

    render() {
        return (
            <div className="all-Contacts-containers">
                AllContacts Works                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProp) => ({
    allContacts: state.contacts.allContacts
});

const mapDispatchToProps = dispatch => ({    
    getAllContacts: () => dispatch(getAllContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllContacts);
