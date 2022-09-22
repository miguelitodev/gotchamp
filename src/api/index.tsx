// http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json
// https://ddragon.leagueoflegends.com/api/versions.json

import axios from "axios";

export const api = axios.create({
	baseURL: "https://ddragon.leagueoflegends.com",
});
