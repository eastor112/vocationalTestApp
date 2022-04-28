import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Question from '../../../../components/organisms/question/Question';
import { store } from '../../../../context/store/store';

describe('Testing Question.js', () => {
  test('should render Question component', () => {
    const question = {
      id: 'df1sdf165sd4f6sd45',
      type: '4-multiple',
      statement: 'description',
      optionA: 'option 1',
      optionB: 'option 2',
      optionC: 'option 3',
      optionD: 'option 4',
    };

    render(
      <Provider store={store}>
        <Question question={question} />
      </Provider>,
    );

    expect(screen.getByText(question.statement)).toBeInTheDocument();
    expect(screen.getByText(question.optionA)).toBeInTheDocument();
    expect(screen.getByText(question.optionB)).toBeInTheDocument();
    expect(screen.getByText(question.optionC)).toBeInTheDocument();
    expect(screen.getByText(question.optionD)).toBeInTheDocument();
  });
});
