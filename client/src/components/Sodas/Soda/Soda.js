import React from 'react';
import { Card, CardActions, CardMedia, Button, Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import background from '../../../images/background.jpeg';

import { selectSoda } from '../../../actions/sodas';

const Soda = ({ soda, setCurrentId, amount, setAmount }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const selectButton = (soda) =>{
        if (amount >= soda.cost)
        {
            dispatch(selectSoda(soda._id))
            setAmount(amount-soda.cost)

            let newSoda = soda;
            newSoda.currentinv -= 1;

            const fileName = newSoda.productname;
            const json = JSON.stringify(newSoda, null, 2);
            const blob = new Blob([json], { type: "application/json" });
            const href = URL.createObjectURL(blob);
          
            // create "a" HTLM element with href to file
            const link = document.createElement("a");
            link.href = href;
            link.download = fileName + ".json";
            document.body.appendChild(link);
            link.click();
          
            // clean up "a" element & remove ObjectURL
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
        }
    }


    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={background}/>
            <div className={classes.overlay}>
                <Typography variant="h3">{soda.productname}</Typography>
                <Typography variant="body2" component="p">{soda.description}</Typography>
                <Typography variant="body1">Cost: ${soda.cost}</Typography>
                <Typography variant="body1">CurrentInv: {soda.currentinv}</Typography>
            </div>
            
            <div className={classes.overlay2}>
                <Button
                    style={{color: "white"}} 
                    size="small" 
                    onClick={() => {setCurrentId(soda._id)}}>
                    <MoreHorizIcon fontSize="medium"/>
                </Button>
            </div>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={(() => selectButton(soda))}>
                    Select
                </Button>
            </CardActions>
        </Card>
    );

}

export default Soda;