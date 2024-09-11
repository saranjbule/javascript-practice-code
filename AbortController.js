const API = 'https://api.github.com/users/saranjbule';

const getAPIs = () => {
  let controller;

  const getAPI = async () => {
    controller = new AbortController();
    const signal = controller.signal;
    try {
      const result = await fetch(API, { signal });

      const jsonData = await result.json();

      console.log('Response', jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  const stopAPI = () => {
    if (controller) controller.abort();
  };

  return { getAPI, stopAPI };
};

const userData = getAPIs();

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

startButton.addEventListener('click', userData.getAPI);
stopButton.addEventListener('click', userData.stopAPI);
