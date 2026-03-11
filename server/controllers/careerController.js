const Career = require('../models/Career');
const Branch = require('../models/Branch');

// @desc    Get all careers
// @route   GET /api/careers
// @access  Public
const getCareers = async (req, res) => {
    try {
        const { domain, branch, q } = req.query;
        let query = {};

        // Helper string slugifier since client sends slug
        const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

        if (domain) query.domain = domain;
        if (branch) {
            // Because our careers have literal branch names 'Mechanical Engineering'
            // and the query comes as 'mechanical-engineering', we must fetch branches to find the exact match
            const Branch = require('../models/Branch');
            const allBranches = await Branch.find({});
            const matchedBranch = allBranches.find(b => slugify(b.name) === branch);

            if (matchedBranch) {
                query.branch = matchedBranch.name;
            } else {
                // simple fallback if branch model missing
                query.branch = new RegExp('^' + branch.replace(/-/g, '.*') + '$', 'i');
            }
        }
        if (q) {
            query.$or = [
                { title: { $regex: q, $options: 'i' } },
                { description: { $regex: q, $options: 'i' } },
                { skills: { $regex: q, $options: 'i' } }
            ];
        }

        const careers = await Career.find(query);
        res.status(200).json(careers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get all domains
// @route   GET /api/careers/domains
// @access  Public
const getDomains = async (req, res) => {
    try {
        const domains = await Career.distinct('domain');
        res.status(200).json(domains);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get branches by domain
// @route   GET /api/careers/domains/:domain/branches
// @access  Public
const getBranchesByDomain = async (req, res) => {
    try {
        const decodedDomain = decodeURIComponent(req.params.domain);
        // Find branches matching the domain (case-insensitive)
        const branches = await Branch.find({ domain: { $regex: new RegExp('^' + decodedDomain + '$', 'i') } });
        res.status(200).json(branches);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get single career
// @route   GET /api/careers/:id
// @access  Public
const getCareerById = async (req, res) => {
    try {
        const career = await Career.findById(req.params.id);

        if (!career) {
            return res.status(404).json({ message: 'Career not found' });
        }

        res.status(200).json(career);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Create new career
// @route   POST /api/careers
// @access  Private/Admin
const createCareer = async (req, res) => {
    try {
        const career = await Career.create(req.body);
        res.status(201).json(career);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Update career
// @route   PUT /api/careers/:id
// @access  Private/Admin
const updateCareer = async (req, res) => {
    try {
        let career = await Career.findById(req.params.id);

        if (!career) {
            return res.status(404).json({ message: 'Career not found' });
        }

        career = await Career.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json(career);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Delete career
// @route   DELETE /api/careers/:id
// @access  Private/Admin
const deleteCareer = async (req, res) => {
    try {
        const career = await Career.findById(req.params.id);

        if (!career) {
            return res.status(404).json({ message: 'Career not found' });
        }

        await career.deleteOne();
        res.status(200).json({ id: req.params.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getCareers,
    getDomains,
    getBranchesByDomain,
    getCareerById,
    createCareer,
    updateCareer,
    deleteCareer,
};
