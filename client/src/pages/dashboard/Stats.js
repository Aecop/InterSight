import React, {useEffect} from 'react';
import { useAppContext } from '../../context/appContext';
import { StatsContainer, Loading, ChartsContainer } from '../../components';

const Stats = () => {
  const {showStats, isLoading, monthlyStatus} = useAppContext();

  useEffect(() =>{
    showStats()
  }, [])

  if(isLoading){
    return <Loading center />
  }

  return (
    <>
      <StatsContainer />
      {monthlyStatus.length > 0 && <ChartsContainer /> }
      
    </>
  )
}

export default Stats