import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getSodas } from './actions/sodas';
import Sodas from './components/Sodas/Sodas';
import Form from './components/Form/Form';
import useStyles from './styles';
import linkedin from './images/LinkedIn_logo.png';

const App = () =>{
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        dispatch(getSodas());
    }, [currentId,dispatch])
    
    return (
        <Container maxwidth="lg">
            <AppBar className = {classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Carson's Vending Machine Prototype</Typography>
                <a href="https://www.linkedin.com/in/carson-funk-624883aa/"><img className = {classes.image} src = {linkedin} alt="linkedin" height="60" width="60"/></a>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Sodas setCurrentId={setCurrentId} amount={amount} setAmount={setAmount}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} amount={amount} setAmount={setAmount} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>


        </Container>
    )
}

export default App;