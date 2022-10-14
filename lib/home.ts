import itemsArray from '../public/data.json';

export type GridItem = {
    id: string
    title: string
    description: string
    link: string,
    backgroundImage?: string
}

export function getHomeGridItems() {
    return itemsArray;
}