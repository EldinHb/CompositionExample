import { INewsModel } from "../models";

class Search {
    public getNewsItems(count: number): INewsModel[] {
        const newItems: INewsModel[] = [];
        for (let i = 0; i < count; i++) {
            newItems.push({title: `title: ${i}`, id: i});
        }
        return newItems;
    }
}

const search = new Search();
export {search};