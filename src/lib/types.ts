export type Country = {
	flag: string;
	name: string;
};

export type Game = {
	archived: boolean;
	country: string;
	developer: string;
	favorite: boolean;
	name: string;
	platformsAvailable: PlatformEnum[];
	players: number;
	purchased: Array<string>;
	stars: number;
	status: string;
	thumbnail: string;
	url: GameUrl;
	vendors: Array<string>;
};

type GameUrl = {
	[key in PlatformEnum]: string;
};

export type Option = {
	label: string;
	value: string;
};

export type Platform = {
	color: string;
	label: string;
};

export enum PlatformEnum {
	PC = 'PC',
	SWITCH = 'SWITCH'
}
