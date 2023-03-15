const slips = {
  slip_23: {
    transactions: [123, 456],
    shop: 1,
  },
  slip_42: {
    transactions: [789],
    shop: 2,
  },
};

const transactions = [
  {
    id: 123,
    amount: 10.01,
    payout: false,
  },
  {
    id: 456,
    amount: 5.01,
    payout: true,
  },
  {
    id: 789,
    amount: 20.1,
    payout: false,
  },
];

const shops = [
  [1, "Zalando.de"],
  [2, "Amazon.com"],
];

// Your task: Use the three data sources above and create the following result.
// Bonus: Try to write as few lines as possible for your solution

// const result = {
//   23: {
//     number_transactions: 2, // no of transactions per slip
//     shop: 'Zalando.de', // shop title
//     total_amount: 5, // total amount of transactions (a payout must be subtracted instead of added!)
//   },
//   42: {
//     number_transactions: 1,
//     shop: 'Amazon.com',
//     total_amount: 20.1,
//   },
// };

const result = Object.entries(slips).reduce(
  (acc, [slipId, { transactions: slipTrans, shop }]) => ({
    ...acc,
    [slipId.split("_")[1]]: {
      number_transactions: slipTrans.length,
      shop: shops.find(([id]) => id === shop)?.[1],
      total_amount: transactions.reduce(
        (total, { id, amount, payout }) =>
          total + (slipTrans.includes(id) ? (payout ? -amount : amount) : 0),
        0
      ),
    },
  }),
  {}
);

console.log(result);
