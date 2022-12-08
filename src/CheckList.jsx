import React from 'react';
import Check from './Check';

const CheckList = ({ checks }) => {
    return checks.map((check) => <Check check={check} key={check.id} />);
};

export default CheckList