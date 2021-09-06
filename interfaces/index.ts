export interface ICatalog {
    title?: string;
    data?: ICatalogData[];
}

export interface ICatalogData {
    id: number;
    title: string;
    price: string;
    oldPrice: string;
    image: string;
    status: boolean;
}
