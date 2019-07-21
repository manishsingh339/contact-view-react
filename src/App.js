import React from 'react'
import PropTypes from 'prop-types';
import AllContacts from './components/allContacts/AllContacts';

const App = (props) => {
    return (
        <div className="container">
            <AllContacts />
        </div>
    )
}

App.propTypes = {};

export default App;