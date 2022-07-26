import mongoose from 'mongoose';

const sodaSchema = mongoose.Schema({
    productname: String,
    description: String,
    cost: String,
    currentinv: String,
    maxinv: String
});

const SodaModel = mongoose.model('SodaModel', sodaSchema);

export default SodaModel;