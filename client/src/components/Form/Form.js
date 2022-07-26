import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Tabs, Tab, Box, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { updateSoda } from '../../actions/sodas';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div {...other}>
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
}


const Form = ({ currentId, setCurrentId, amount, setAmount }) => {
    const [sodaData, setSodaData] = useState({ productname: '', description: '', cost: '', currentinv: '', maxinv: '' });
    const soda = useSelector((state) => currentId ? state.sodas.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    const [value, setValue] = useState(0);
    const [code, setPassCode] = useState('');

    useEffect(() => {
        if(soda) setSodaData(soda);
    }, [soda, amount])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId && code === 'sysadmin1234') {
            dispatch(updateSoda(currentId, sodaData));
        }
        clear();
    }

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

    const clear = () => {
        setCurrentId(null);
        setSodaData({ productname: '', description: '', cost: '', currentinv: '', maxinv: '' });
        setPassCode('');
    }

    return (

        <Paper className = {classes.Paper}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                <Tab label="Purchase a Soda"/>
                <Tab label="admin tab"/>
            </Tabs>
            <TabPanel value={value} index={0}>

                <Container>
                    <Container>
                        <Button variant="outlined" color="primary" size="small" onClick={() => setAmount(amount+1)}>Add $1</Button>
                        <Button variant="outlined" color="primary" size="small" onClick={() => setAmount(amount+.5)}>Add 50c</Button>
                        <Typography variant="h6">Total = $ {amount}{Number.isInteger(amount) ? '' : '0'}</Typography>

                    </Container>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
                
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">Edit a Soda</Typography>
                    <TextField name="ProductName" variant="outlined" label="ProductName" fullWidth value={sodaData.productname}/>
                    {/* <TextField name="Description" variant="outlined" label="Description" fullWidth value={sodaData.description}/> */}
                    <TextField name="Cost" variant="outlined" label="Cost" fullWidth value={sodaData.cost} onChange={(e) => setSodaData({...sodaData, cost: e.target.value})}/>
                    <TextField name="CurrentInv" variant="outlined" label="CurrentInv" fullWidth value={sodaData.currentinv} onChange={(e) => setSodaData({...sodaData, currentinv: e.target.value})}/>
                    <TextField name="passcode" variant="outlined" label="passcode" type="password" fullWidth value={code} onChange={(e) => setPassCode(e.target.value)}   />
                    
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Modify</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </form>
            </TabPanel>
        </Paper>
    );
}

export default Form;