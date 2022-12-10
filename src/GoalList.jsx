import React from 'react';
import Goal from './Goal';

const GoalList = ({ goals }) => {
  return goals.map((goal) => <Goal goal={goal} key={goal.goal} />);
};

export default GoalList