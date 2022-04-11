import { render, screen } from '@testing-library/react';
import Question from '../../../../components/organisms/question/Question';

describe('Testing Question.js', () => {
  test('should render Question component', () => {
    const question = {
      id: 1,
      type: '4-multiple',
      description:
        '¿Qué objeto de tu infancia guardarías con especial cariño a lo largo del tiempo?',
      option1: 'El laboratorio de química',
      option2: 'El coche teledirigido',
      option3: 'Tu primer diario',
      option4: 'Tu primer dibujo',
    };

    render(<Question question={question} />);

    expect(screen.getByText(question.description)).toBeInTheDocument();
    expect(screen.getByText(question.option1)).toBeInTheDocument();
    expect(screen.getByText(question.option2)).toBeInTheDocument();
    expect(screen.getByText(question.option3)).toBeInTheDocument();
    expect(screen.getByText(question.option4)).toBeInTheDocument();
  });
});
