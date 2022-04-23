import * as React from 'react';
import * as reactRedux from 'react-redux';
import renderer from 'react-test-renderer';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import weather from '../../../store/weather/reducer';
import WeatherCard from '../WeatherCard';

const mockedProps = {
  info: {
    name: 'Kyiv',
    main: {
      temp: '283',
      feels_like: '287',
      humidity: 60,
  },
    wind: {
      speed: 7.7
  },
    sys: {
      sunset: 123123131,
      sunrise: 123123131,
    }
  }
};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('components > WeatherCard component', () => {
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

  it('should render WeatherCard component', () => {
    const renderedComponnet = renderer.create(
      <Provider store={store}>
        <WeatherCard {...mockedProps}/>
      </Provider>
    );
    expect(renderedComponnet).toMatchSnapshot('should render correctly');
  });
});
