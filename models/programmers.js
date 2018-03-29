const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Create programmer schema and model
const ProgSchema = new schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    skill: {
        type: String
    },
    availabel: {
        type: Boolean,
        default: false
    }

    // Add geo location

});

const Programmer = mongoose.model('programmer', ProgSchema);

module.exports = Programmer;