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
            required: false,
            trim: true,
        },
        offerMaxValue: {
            type: Number,
            trim: true,
            required: false,
        },
        interestRate: {
            type: Number,
            min: 0,
            max: 100,
            required: false,
        },
        investmentTerm: {
            type: Number,
            required: false,
        },
        userWallet: {
            type: String,
            require: false
        },
        curValue: {
            type: Number,
            trim: true,
            require: false
        },
        moneyDemands: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "MoneyDemand",
            require: false
        }],
    },
    { timestamps: true }
)

const MoneyOffer = mongoose.model('MoneyOffer', moneyOffer)

module.exports = MoneyOffer