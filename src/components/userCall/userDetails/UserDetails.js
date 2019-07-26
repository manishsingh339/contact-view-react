import React from 'react'
import utils from '../../../services/utils';
const UserDetails = (props) => {
    
    const getTotalDuration = ()=> {
        let totalTime = 0;
        if(props.userCalls && props.userCalls.length) {
            for (const call of props.userCalls) {
                totalTime += call.duration;
            }
        }
        return utils.getTimeFromSec(totalTime);
    };

    return (
        props.contact && props.userCalls && props.userCalls.length ?
            (<div className="container">
                <div className="row">
                    <div className="col">{props.contact.name}</div>
                    {/* <div className="col">{props.contact.name}</div> */}
                    <div className="col">{props.contact.phone1Value}</div>
                    <div className="col">Count: {props.userCalls.length}</div>
                    <div className="col">Time: {getTotalDuration()}</div>
                </div>
            </div>)
        : null
    )
}

export default UserDetails
