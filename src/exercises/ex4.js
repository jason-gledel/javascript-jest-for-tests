// ex4.js

export const fetchData = async () => {
  try {
    let longitude = -43.2075000; // Rennes longitude
    let latitude = -22.9027800; // Rennes latitude
    let api_key = '1db3cf629ed34b77854175aa24be064d'; // Teacher's API Key
    let api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`; // API URL

    const response = await fetch(api_url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};



