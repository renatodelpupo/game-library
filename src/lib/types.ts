export type Country = {
	flag: string;
	name: string;
};

export type Game = {
	country: string;
	developer: string;
	favorite: boolean;
	hide: boolean;
	name: string;
	platformsAvailable: Array<string>;
	players: number;
	purchased: Array<string>;
	stars: number;
	status: string;
	thumbnail: string;
	url: object;
	vendors: Array<string>;
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
