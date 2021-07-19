import { LIST_TYPES } from "../const";

export type ListKeys = keyof typeof LIST_TYPES;
export type itemType = typeof LIST_TYPES[ListKeys];

export interface TItem {
    name: string;
    type: itemType;

}