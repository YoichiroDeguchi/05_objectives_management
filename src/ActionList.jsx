import React from 'react'
import Action from './Action';

const ActionList = ({ actions }) => {
  return actions.map((action) => <Action action={action} key={action.id} />);
};

export default ActionList