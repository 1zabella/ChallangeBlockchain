const mongoose = require('mongoose')

const moneyOffer = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'User',
        },
        userName: {
            type: String,
            required: false,
            trim: true,
        },
        spread: {
            type: Number,
            trim: true,
            required: false,
        },
        amount: {
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
        amountFinal: {
            type: Number,
            trim: true,
            required: false,
        },
        seller: {
            type: String,
            require: false
        },
        buyerAmount: {
            type: Number,
            trim: true,
            require: false
        },
        finalValue: {
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

const indemnity = mongoose.model('MoneyOffer', moneyOffer)

module.exports = indemnity