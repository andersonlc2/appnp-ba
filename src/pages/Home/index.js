import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  box: {
    height: '100vh', // *
    display: 'flex',
    flexDirection: 'column',
  },
  deg: {
    position: 'absolute',
    width: '100%', 
    height: '102%',
    zIndex: theme.zIndex.appBar -1,
  },
}));

function Home() {
  const classes = useStyles();
  
  return(
    <>
      <Header />
    </>
  );
}

export default Home;