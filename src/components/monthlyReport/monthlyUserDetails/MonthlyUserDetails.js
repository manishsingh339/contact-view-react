import React from 'react';
import PropTypes from 'prop-types';
import utils from '../../../services/utils';

const MonthlyUserDetails = props => {
    return (
        props.call ?
            (<tr>
                <td className="col">{props.sl+1}</td>
                <td className="col">{props.call.name}</td>
                <td className="col">{props.call.number}</td>
                <td className="col">{props.call.count}</td>
                <td className="col">{utils.getTimeFromSec(props.call.totalDuration)}</td>
            </tr>) : null
    )
}

MonthlyUserDetails.propTypes = {
}

export default MonthlyUserDetails
