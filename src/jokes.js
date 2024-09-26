import { APIkey } from './api.js';

export async function generateJoke(setJoke) {
    try {
        const response = await fetch(APIkey);

        if (response.status === 404) {
            console.log('Error');
            return;
        }

        if (!response.ok) {
            throw new Error('Error');
        }

        const joke = await response.json();
        setJoke(joke.setup, joke.punchline); // Pass the joke to the parent via callback
    } catch (error) {
        console.error(error);
    }
}
