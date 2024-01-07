export type Country = {
	flag: string;
	name: string;
};

export type Game = {
	country: string;
	developer?: string;
	finished?: boolean;
	hide?: boolean;
	name: string;
	platformsAvailable: Array<string>;
	platformsFavorite: Array<string>;
	players: number;
	stars?: number;
	thumbnail: string;
};

export type Option = {
	label: string;
	value: string;
};

export type Platform = {
	color: string;
};
