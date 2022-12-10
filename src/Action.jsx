import React from 'react'

const Action = ({ action }) => {
    return (
        <div className="action_box">
            <div>・{action.name}</div>
        </div>
    );
};

export default Action