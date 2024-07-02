import { formatCurrency } from "../../scripts/utils/money.js";

describe('Test suite: formatCurrency', () => {
  it('Convert cents ino dollar', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('Works with zero', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('roundd upto the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  })
});

