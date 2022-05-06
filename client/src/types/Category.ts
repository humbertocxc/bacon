import { CardProps } from "./Card";

export interface CategoryProps {
    id: number,
    name: string,
    isActive: boolean,
    addable: boolean,
    cards: CardProps[]
}
