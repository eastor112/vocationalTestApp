import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SocialMediaLoginOrSignup from '../../../../components/organisms/socialMediaLoginSignup/SocialMediaLoginOrSignup';
import { store } from '../../../../context/store/store';

describe('testing SocialMediaLoginOrSignup', () => {
  test('should render SocialMediaLoginOrSignup', () => {
    render(
      <Provider store={store}>
        <SocialMediaLoginOrSignup />
      </Provider>,
    );

    const paragraph = screen.getByText('or login with:');
    const button = screen.getByText(/login with google/i);

    expect(paragraph).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
