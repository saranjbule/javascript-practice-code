/**
 * You are building a frontend application that fetches data from a third-party API
 * which is known to occasionally fail due to network issues or server throttling.
 * To make your app more resilient, you need to implement a generic fetchWithRetry function
 * in JavaScript that retries the fetch request up to maxRetries times with a delay between each retry.
 *
 * The function should accept the following parameters:
 * * url (string): The API endpoint.
 * * maxRetries (number): Number of retry attempts before giving up.
 * * delay (number): Time to wait between retries in milliseconds.
 *
 * If all retries fail, it should throw the last error.
 */

const p = () =>
    new Promise((res, rej) => {
        const rand = Math.floor(Math.random() * 10);

        if (rand <= 7) {
            rej('fail');
        } else {
            res('pass');
        }
    });

const myFetch = (maxRetries, delay) =>
    new Promise((res, rej) => {
        if (maxRetries < 0) {
            rej('no more retries left');
            return;
        }

        p()
            .then((result) => {
                res(result);
            })
            .catch(() => {
                setTimeout(() => {
                    myFetch(maxRetries - 1, delay)
                        .then((result) => res(result))
                        .catch((error) => rej(error));
                }, delay);
            });
    });

myFetch(5, 1000).then(console.log).catch(console.log);

// Real working version

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchWithRetry(url, maxRetries, delay) {
    let lastError;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error(`HTTP ${res.status}`);
            }

            return await res.json();
        } catch (err) {
            lastError = err;

            if (attempt === maxRetries) break;

            await sleep(delay);
            // hold the execution contex for delayed time and then try again for next attempt in for loop
        }
    }

    throw lastError;
}
