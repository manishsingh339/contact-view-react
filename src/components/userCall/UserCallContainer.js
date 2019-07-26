import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllContacts, getAllCallsByNumber} from '../../actions/contactAction';
import styles from './UserCallContainer.scss';
import UserDetails from './userDetails/UserDetails';
import CallDetails from './callDetails/CallDetails';

class UserCallContainer extends Component {
    static propTypes = {
    }
    constructor() {
        super();
        this.contactNumber = null;
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        //console.log("Query::",params);
        this.contactNumber = params.contactNumber;
        if(!this.props.allContacts || !this.props.allContacts.length)
            this.props.getAllContacts();

        this.props.getAllCallsByNumber(this.contactNumber);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Updated", this.props.allContacts);
    }

    getContactDetails = ()=> {
        if(this.props.allContacts && this.props.allContacts.length) {
            for (const contact of this.props.allContacts) {
                if(("91"+contact.phone1Value) == this.contactNumber) {
                    return contact;
                }
            }
        }
    }

    getAllCallsDetails = () => {
        return this.props.userCalls && this.props.userCalls.length ? 
            this.props.userCalls.map((call, $index)=>(
                <CallDetails call={call} sl={$index} key={$index} />
            )) : null;
    }

    render() {
        return (
            <div>
                <UserDetails contact={this.getContactDetails()} userCalls={this.props.userCalls} />
                <table className="table table-striped table-bordered" style={{width: '500px', margin: '0 auto'}}>
                    <thead class="table-primary">
                        <tr>   
                            <th>Sl.</th>                         
                            <th className="col">Date Time</th>                        
                            <th className="col">Month</th>
                            <th className="col">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getAllCallsDetails()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProp) => ({
    allContacts: state.contacts.allContacts,
    userCalls: state.contacts.userCalls
});

const mapDispatchToProps = dispatch => ({
    getAllContacts: () => dispatch(getAllContacts()),
    getAllCallsByNumber: (contactNumber) => dispatch(getAllCallsByNumber(contactNumber))

});

export default connect(mapStateToProps, mapDispatchToProps)(UserCallContainer);
