
export interface RemembranceItem {
    count: string;
    description?: string;
    content: string;
}

export interface RemembranceCategory {
    name: string;
    items: RemembranceItem[];
}