// islandsList.d.ts

declare const islands: Island[];

interface Island {
	id: number;
	name: string;
	name_dv: string;
	atoll_id: number;
	island_code: string | null;
	is_inhibited: number;
}

export default islands;
