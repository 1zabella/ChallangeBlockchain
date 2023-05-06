const mongoose = require('mongoose')

const moneyDemand = new mongoose.Schema(
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
        cpf: {
            type: String,
            trim: true,
            required: true,
        },
        value: {
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
        creditScore: {
            type: Number,
            min: 0,
            max: 5,
            required: true,
        },
        collateralType: {
            type: String,
            required: true,
        },
        collateralValue: {
            type: Number,
            required: true,
        },
        debtOwner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MoneyOffer",
            required: true,
          },
    },
    { timestamps: true }
)

moneyDemand.virtual('debtOwner', {
    ref: 'User',
    localField: '_id',
    foreignField: 'user'
})

moneyDemand.set('toObject', { virtuals: true });
moneyDemand.set('toJSON', { virtuals: true });

const indemnity = mongoose.model('MoneyDemand', moneyDemand)

module.exports = indemnity