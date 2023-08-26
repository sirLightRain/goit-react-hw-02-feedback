import { Button, ButtonWrapper } from './Buttons.styled';

export const Buttons = ({ buttonClick }) => {
  return (
    <ButtonWrapper>
      <Button type="button" value="good" onClick={buttonClick}>
        Good
      </Button>
      <Button type="button" value="neutral" onClick={buttonClick}>
        Neutral
      </Button>
      <Button type="button" value="bad" onClick={buttonClick}>
        Bad
      </Button>
    </ButtonWrapper>
  );
};
