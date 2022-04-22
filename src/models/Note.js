import { Schema, model } from 'mongoose';

new schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
}, {
    timestamps: true
})

export default model('Note', schema)