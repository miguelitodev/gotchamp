// https://developer.riotgames.com/docs/lol#data-dragon_champions
// http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json
// https://ddragon.leagueoflegends.com/api/versions.json
// http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg

import axios from "axios";

export const api = axios.create({
	baseURL: "https://ddragon.leagueoflegends.com",
});
