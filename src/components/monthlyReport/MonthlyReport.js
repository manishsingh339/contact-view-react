import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMonthlyCallReport } from '../../actions/contactAction';
import MonthlyUserDetails from './monthlyUserDetails/MonthlyUserDetails';


class MonthlyReport extends Component {
    static propTypes = {
       // prop: PropTypes
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.getMonthlyCallReport(params.month);
    }

    componentDidUpdate() {
        console.log("111", this.props.monthlyCallReport);
    }

    getAllCallsDetails = () => {
        console.log(this.props.monthlyCallReport);
        
        return this.props.monthlyCallReport && this.props.monthlyCallReport.length ? 
            this.props.monthlyCallReport.map((call, $index)=>(
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
    monthlyCallReport: state.contacts.monthlyCallReport
});

const mapDispatchToProps = dispatch => ({
    getMonthlyCallReport: (month) => dispatch(getMonthlyCallReport(month)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyReport);

