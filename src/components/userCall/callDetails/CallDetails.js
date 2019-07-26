import React from 'react'
import PropTypes from 'prop-types';
import utils from '../../../services/utils';

const CallDetails = props => {

    return (
        props.call ?
            (<tr>
                <td>{props.sl+1}</td>
                <td className="col">{props.call.date} {props.call.time}</td>
                <td className="col">{props.call.month}</td>
                <td className="col">{utils.getTimeFromSec(props.call.duration)}</td>
            </tr>) : null
    )
}

CallDetails.propTypes = {
}

export default CallDetails;
