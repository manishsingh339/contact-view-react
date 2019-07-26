import React from 'react'
import PropTypes from 'prop-types';
import styles from './Contact.scss';

const Contact = (props) => {
    console.log('PROPS:: ', props.contact)
    return (
        <tr className="contact-container">
            <td className="col">{(props.contact && props.contact.name) ? props.contact.name : ""}</td>
            <td className="col">
            {(props.contact && props.contact.photo) ? <img src={props.contact.photo} alt="" className='img-thumbnail user-photo rounded-circle rounded-sm' />
                : <span className='img-thumbnail user-name-initial rounded-circle rounded-sm'>{(props.contact && props.contact.name) ? props.contact.name.charAt(0) : ''}</span>}
            </td>                            
            <td className="col">{(props.contact && props.contact.phone1Value) ? props.contact.phone1Value : ""}</td>
            <td className="col action">
                <a href={`/userCallDetails/91${props.contact.phone1Value}`}>View All Calls</a>
            </td>
        </tr>
    )
}

Contact.propTypes = {
    
}

export default Contact;