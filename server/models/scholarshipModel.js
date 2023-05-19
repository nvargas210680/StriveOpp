import mongoose from 'mongoose';

const scholarshipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    demographic: {
        type:String,
        required:true
    },
    value: {
        type:String,
        required: true
    },
    requirements:{
        type:String,
        required:true
    }
});

const Scholarship = mongoose.model('Scholarship', scholarshipSchema);

export default Scholarship;