import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllMonthlyUsages } from '../../actions/contactAction';
import MonthlyUserDetails from '../monthlyReport/monthlyUserDetails/MonthlyUserDetails';


class EntireMonthCalls extends Component {
    static propTypes = {
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.getAllMonthlyUsages(params.month);
    }

    componentDidUpdate() {
    
    }

    getAllCallsDetails = () => {
        return this.props.monthlyAllCallReport && this.props.monthlyAllCallReport.length ? 
            this.props.monthlyAllCallReport.map((call, $index)=>(
                <MonthlyUserDetails call={call} sl={$index} key={$index} />
            )) : null;
    }

    render() {
        return (
            <div>
                <table className="table table-striped table-bordered" style={{margin: '0 auto', width: '500px'}}>
                    <thead className="table-primary">
                        <tr>
                            <th>SL.</th>
                            <th className="col">Name</th>
                            <th className="col">Number</th>
                            <th className="col">Count</th>
                            <th className="col">Duration</th>
                        </tr>
                    </thead>
                    {this.getAllCallsDetails()}
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProp) => ({
    monthlyAllCallReport: state.contacts.monthlyAllCallReport
});

const mapDispatchToProps = dispatch => ({
    getAllMonthlyUsages: (month) => dispatch(getAllMonthlyUsages(month)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntireMonthCalls);

