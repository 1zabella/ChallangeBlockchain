const mongoose = require('mongoose')

const moneyOffer = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        userName: {
            type: String,
            required: true,
            trim: true,
        },
        offerMaxValue: {
            type: Number,
            trim: true,
            required: true,
        },
        curValue: {
            type: Number,
            trim: true,
            required: true,
        },
        interestRate: {
            type: Number,
            min: 0,
            max: 100,
            required: true,
        },
        investmentTerm: {
            type: Number,
            required: true,
        },
        userWallet: {
            type: String,
            require: true
        },
        borrowersWallets: {
            type: [String],
            required: true,
        },
    },
    { timestamps: true }
)

const indemnity = mongoose.model('MoneyOffer', moneyOffer)

module.exports = indemnity