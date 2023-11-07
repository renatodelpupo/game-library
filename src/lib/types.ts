export type Country = {
	flag: string;
	name: string;
};

export type Game = {
	country: string;
	name: string;
	platformsAvailable: Array<string>;
	platformsFavorite: Array<string>;
	players: number;
	thumbnail: string;
};

export type Platform = {
	color: string;
};
