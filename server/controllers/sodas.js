import mongoose from 'mongoose';
import SodaModel from '../models/sodaModel.js';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true  }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true  }));

export const getSodas = async (req, res) => {
    try {
        const sodas = await SodaModel.find();
        res.status(200).json(sodas);
    } catch (error) {
        res.status(404).json({message: error });
    }
}

export const updateSoda = async (req, res) => {
    const { id: _id } = req.params;

    if (parseInt(req.body.currentinv) > parseInt(req.body.maxinv))
        req.body.currentinv = req.body.maxinv;

    const soda = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id :(');

    const updatedSoda = await SodaModel.findByIdAndUpdate(_id, {...soda, _id}, { new: true });

    res.json(updatedSoda);
}

export const selectSoda = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id :(');

    const soda = await SodaModel.findById(_id);
    const updatedSoda = await SodaModel.findByIdAndUpdate(_id, { currentinv: soda.currentinv - 1}, { new:true });

    res.json(updatedSoda);
}