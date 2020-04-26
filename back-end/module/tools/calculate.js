function getMoneyLimit200(A) {
  return ((4 / 4) * A) / 3;
}
function getMoneyLimit175(A) {
  return ((4 / 3) * A) / 3 + getMoneyLimit200(A);
}
function getMoneyLimit150(A) {
  return ((4 / 2) * A) / 3 + getMoneyLimit175(A);
}
function isAtLimit(moneyLimit, fundingMoneySum) {
  return moneyLimit - fundingMoneySum < 5000;
}
function getFundingBenefits(marginPercent, goalSales, regularSales) {
  return marginPercent * goalSales - marginPercent * regularSales;
}
function getRefundPercent(moneyLimit150, moneyLimit175, moneyLimit200, fundingMoneySum) {
  let refundPercent = 200;
  if (isAtLimit(moneyLimit200, fundingMoneySum)) {
    refundPercent = 175;
    refundPerOfPer = getRefundPerOfPer(moneyLimit175, fundingMoneySum);
  }
  if (isAtLimit(moneyLimit175, fundingMoneySum)) {
    refundPercent = 150;
    refundPerOfPer = getRefundPerOfPer(moneyLimit150, fundingMoneySum);
  }
  return refundPercent;
}
function getRefundPerOfPer(moneyLimit, fundingMoneySum) {
  return clamp(0, 100, 100 - (fundingMoneySum / moneyLimit) * 100);
}
function getCurGoalPer(currentSales, goalSales) {
  return clamp(0, 100, (currentSales / goalSales) * 100);
}
function getRewardMoney(fundingMoney, rewardPercent) {
  return (fundingMoney * rewardPercent) / 100;
}
function getProfit(fundingMoney, rewardPercent) {
  return getRewardMoney(fundingMoney, rewardPercent) - fundingMoney;
}
function clamp(min, max, val) {
  // 변수의 최소,최대 범위 설정
  return Math.min(Math.max(min, +val), max);
}
module.exports = {
  getMoneyLimit200,
  getMoneyLimit175,
  getMoneyLimit150,
  isAtLimit,
  getFundingBenefits,
  getRefundPerOfPer,
  getCurGoalPer,
  getRewardMoney,
  getProfit,
  getRefundPercent,
  clamp,
};
