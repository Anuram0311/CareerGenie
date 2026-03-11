const mongoose = require('mongoose');

const BranchSchema = new mongoose.Schema({
    domain: {
        type: String,
        required: [true, 'Please add a domain'],
        trim: true,
    },
    name: {
        type: String,
        required: [true, 'Please add a branch name'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
    },
    coreFocusAreas: {
        type: [String],
        default: [],
    },
    typicalIssuesHandled: {
        type: [String],
        default: [],
    },
    industriesInvolved: {
        type: [String],
        default: [],
    },
    globalRelevance: {
        type: String,
        default: '',
    },
    futureScope: {
        type: String,
        default: '',
    }
}, { timestamps: true });

module.exports = mongoose.model('Branch', BranchSchema);
