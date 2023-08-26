import { StatisticField } from './Statistics.styled';

export const Statistics = ({
  dataState: { good, neutral, bad, total, positivePercentage },
}) => {
  return (

      <div>
        <StatisticField>Good: {good}</StatisticField>
        <StatisticField>Neutral: {neutral}</StatisticField>
        <StatisticField>Bad: {bad}</StatisticField>
        <StatisticField>Total: {total}</StatisticField>
        <StatisticField>Positive feedback: {positivePercentage}%</StatisticField>
      </div>

  );
};
