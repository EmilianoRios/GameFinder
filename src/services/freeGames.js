const API_URL = "https://free-to-play-games-database.p.rapidapi.com/api";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		'X-RapidAPI-Key': '7c20e75423msh14c15549d4c483ap1c9c4fjsn9024422c94ef'
	}
};

export async function getAllFreeGames() {
    try {
        const response = await fetch(`${API_URL}/games`,options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getFreeGameById(gameId) {
    try {
        const response = await fetch(`${API_URL}/game?id=${gameId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}