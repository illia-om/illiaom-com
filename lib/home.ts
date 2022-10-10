import itemsArray from '../public/data.json';

export type GridItem = {
    id: string
    title: string
    description: string
    link: string
}

export function getHomeGridItems() {
    return itemsArray;
}