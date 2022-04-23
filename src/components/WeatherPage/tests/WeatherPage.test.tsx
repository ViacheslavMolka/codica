import * as React from 'react';
import * as reactRedux from 'react-redux';
import renderer from 'react-test-renderer';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import weather from '../../../store/weather/reducer';
import WeatherPage from '../WeatherPage';


jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('components > WeatherPage component', () => {
  const useSelectorMock = reactRedux.useSelector;
  const store = createStore(combineReducers({ weather }));
  const useTypedSelector: any = useSelectorMock;
  const mockStore = {
    hourly: [{ name: 'Lviv' }],
    weather: [],
    error: '',
  };
  beforeEach(() => {
    useTypedSelector.mockImplementation((selector: any) => selector(mockStore));
  })
  afterEach(() => {
    useTypedSelector.mockClear();
  })

  it('should render WeatherPage component', () => {
    const renderedComponnet = renderer.create(
      <Provider store={store}>
        <WeatherPage />
      </Provider>
    );
    expect(renderedComponnet).toMatchSnapshot('should render correctly');
  });
});

