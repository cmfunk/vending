import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Soda from './Soda/Soda';
import useStyles from './styles';


const Sodas = ({ setCurrentId, amount, setAmount }) => {
    const sodas = useSelector((state) => state.sodas);
    const classes = useStyles();

    return (
        !sodas.length ? <CircularProgress/> : (
            <Grid className = {classes.container} container alignItems="stretch" spacing={3}>
                {sodas.map((soda) => (
                    <Grid key={soda._id} item xs={12} sm={6}>
                        <Soda soda={soda} setCurrentId={setCurrentId} amount={amount} setAmount={setAmount}></Soda>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Sodas;