import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import click from '../data/actions/click';
import Clicker from './Clicker';

const ClickerContainer = () => {
  const dispatch = useDispatch();
  const numClick = useSelector(({ numClick }) => numClick);

  const handleClick = useCallback(() => dispatch(click()), [dispatch]);

  return <Clicker onClick={handleClick} numClick={numClick} />;
};

export default ClickerContainer;
