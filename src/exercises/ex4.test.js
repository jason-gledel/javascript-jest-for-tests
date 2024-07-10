// ex4.test.js

import { fetchData } from './ex4';

// Mock fetch function for testing purposes
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      name: "Rio de Janeiro",
      sys: { country: "BR" },
      main: { temp: 15, humidity: 80 },
      weather: [{ description: "clear sky" }]
    }),
  })
);

describe('fetchData', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('fetches weather data successfully', async () => {
    const data = await fetchData();
    expect(data).toBeDefined();
    expect(data.name).toBe("Rio de Janeiro");
    expect(data.sys.country).toBe("BR");
    expect(data.main.temp).toBe(15);
    expect(data.main.humidity).toBe(80);
    expect(data.weather[0].description).toBe("clear sky");
  });

  it('handles fetch errors gracefully', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Unauthorized',
      })
    );

    const data = await fetchData();
    expect(data).toBeNull();
  });
});
