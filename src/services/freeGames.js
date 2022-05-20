const API_URL = "https://free-to-play-games-database.p.rapidapi.com/api";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': 'd7192c8ac3mshceed192ed9a4d77p1d4ce6jsn88576577b6f3'
    }
};

export async function getAllFreeGames() {
    try {
        const response = await fetch(`${API_URL}/games`, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getFreeGameById(gameId) {
    try {
        const response = await fetch(`${API_URL}/game?id=${gameId}`, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}