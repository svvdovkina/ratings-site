import { TopLevelCategory } from "./page.interface";

export interface Page {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface MenuItem {
    _id: {
        secondCategory: string;
    };
    isOpened?: boolean;
    pages: Page[];
}

export interface FirstLevelMenuItem {
    route: string;
    name: string;
    icon: JSX.Element;
    id: TopLevelCategory;
}