import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getAllContacts} from '../../actions/contactAction';
import Contact from '../allContacts/contact/Contact';
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

    getAllContactsDetails = () => {
        return this.props.allContacts && this.props.allContacts.length ? this.props.allContacts.map((contact)=> (                        
            <Contact contact={contact} key={contact._id} />
        )) : null;
    }
    

    render() {
        return (
            <div className="all-Contacts-containers">
                <table className="table table-striped table-bordered ">
                    <thead class="table-primary">
                        <tr>                            
                            <th className="col">Name</th>
                            <th className="col">Photo</th>
                            <th className="col">Number</th>
                            <th className="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getAllContactsDetails()}
                    </tbody>
                </table>    
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
