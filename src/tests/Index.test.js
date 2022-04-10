import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from '../routers/MainRouter';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Application root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('../index');
    // eslint-disable-next-line max-len
    expect(ReactDOM.render).toHaveBeenCalledWith(<React.StrictMode><MainRouter /></React.StrictMode>, div);
  });
});
