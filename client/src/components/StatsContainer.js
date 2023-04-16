import React from 'react';
import StatsItem from './StatsItem';
import {MdOutlinePendingActions} from 'react-icons/md';
import {BsFillClipboard2CheckFill} from 'react-icons/bs';
import {MdSimCardAlert} from 'react-icons/md';
import Wrapper from '../assets/wrappers/StatsContainer';
import { useAppContext } from '../context/appContext';

const StatsContainer = () => {
    const {stats} = useAppContext();

    const defaultStats = [
        {
          title: 'pending applications',
          count: stats.pending || 0,
          icon: <MdOutlinePendingActions />,
          color: '#e9b949',
          bcg: '#fcefc7',
        },
        {
          title: 'interviews scheduled',
          count: stats.interview || 0,
          icon: <BsFillClipboard2CheckFill />,
          color: '#647acb',
          bcg: '#e0e8f9',
        },
        {
          title: 'jobs declined',
          count: stats.declined || 0,
          icon: <MdSimCardAlert />,
          color: '#d66a6a',
          bcg: '#ffeeee',
        },
      ];





  return (
    <Wrapper>
        {defaultStats.map((item, index) => {
            return <StatsItem key={index} {...item}/>

        })}
    </Wrapper>
  )
}

export default StatsContainer