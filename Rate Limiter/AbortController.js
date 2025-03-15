/**
 * The AbortController Interface
 *
 * - represents a controller object that allows us to abort one or more Web requests as and when desired.
 * - Communicating with an asynchronous operation is done using an AbortSignal object.
 */

const API = 'https://httpbin.org/delay/10';

const getAPIs = () => {
  let controller;

  const getAPI = async () => {
    if (controller) controller.abort();

    controller = new AbortController(); // AbortController Constructor
    const signal = controller.signal; // Signal object

    try {
      const result = await fetch(API, { signal });
      const jsonData = await result.json();

      console.log('Response', jsonData);
    } catch (err) {
      console.error(err);
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
