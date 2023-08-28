import { Button, ButtonWrapper } from './Buttons.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {/* Мапимо масив options на кнопки та передаємо обробник */}
      {options.map(option => (
        <Button
          key={option}
          value={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </Button>
      ))}
    </ButtonWrapper>
  );
};
