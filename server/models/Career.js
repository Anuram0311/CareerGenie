const mongoose = require('mongoose');

const CareerSchema = new mongoose.Schema({
    domain: {
        type: String,
        required: [true, 'Please add a domain'],
        trim: true,
    },
    branch: {
        type: String,
        required: [true, 'Please add a branch'],
    },
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
    },
    skills: {
        type: [String],
        required: true,
    },
    salaryRange: {
        type: String,
        required: [true, 'Please add a salary range'],
    },
    educationPath: {
        type: String,
        required: [true, 'Please add educational requirements'],
    },
    futureScope: {
        type: String,
        required: [true, 'Please add future scope details'],
    },
    roadmap: {
        type: [String],
        default: [],
    },
    certifications: {
        type: [String],
        default: [],
    },
    summary: {
        type: String,
        default: '',
    },
    yearsOfStudy: {
        type: String,
        default: '',
    },
    industriesHiring: {
        type: [String],
        default: [],
    },
    jobDemandTrend: {
        type: String,
        default: '',
    },
    governmentJobs: {
        type: String,
        default: '',
    },
    fieldWork: {
        type: String,
        default: '',
    },
    academicOpportunities: {
        type: String,
        default: '',
    },
    researchOpportunities: {
        type: String,
        default: '',
    },
    competitiveExams: {
        type: [String],
        default: [],
    },
    privateSectorOpportunities: {
        type: String,
        default: '',
    },
    ngoOpportunities: {
        type: String,
        default: '',
    },
    licenseRequired: {
        type: String,
        default: '',
    },
    hospitalClinicOpportunities: {
        type: String,
        default: '',
    },
    internshipRequirements: {
        type: String,
        default: '',
    },
    internationalJobOpportunities: {
        type: String,
        default: '',
    },
    freelanceOpportunities: {
        type: String,
        default: '',
    },
    remoteWorkPossibilities: {
        type: String,
        default: '',
    },
    riskLevel: {
        type: String,
        default: '',
    },
    keyLegalFunctions: {
        type: [String],
        default: [],
    },
    typicalProfessionals: {
        type: [String],
        default: [],
    },
    relatedSubSpecializations: {
        type: [String],
        default: [],
    },
    courtPracticeOpportunities: {
        type: String,
        default: '',
    },
    workNature: {
        type: String,
        default: '',
    },
    mediationArbitrationOpportunities: {
        type: String,
        default: '',
    },
    supremeCourtHighCourtOpportunities: {
        type: String,
        default: '',
    },
    policyLegislativeOpportunities: {
        type: String,
        default: '',
    },
    internationalOrganizationsOpportunities: {
        type: String,
        default: '',
    },
    globalLawFirmOpportunities: {
        type: String,
        default: '',
    },
    travelRequirementLevel: {
        type: String,
        default: '',
    },
    additionalQualification: {
        type: String,
        default: '',
    },
    corporateOpportunities: {
        type: String,
        default: '',
    },
    lawFirmOpportunities: {
        type: String,
        default: '',
    },
    mediationCounselingOpportunities: {
        type: String,
        default: '',
    },
    ngoInternationalOrganizationOpportunities: {
        type: String,
        default: '',
    }
}, { timestamps: true });

module.exports = mongoose.model('Career', CareerSchema);
