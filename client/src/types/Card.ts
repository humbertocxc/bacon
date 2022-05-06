import { CategoryProps } from "./Category";
import { UserProps } from "./User";

export interface CardProps{
    id: number,
    title: string,
    description: string,
    created_at: Date,
    deadline: Date,
    user: UserProps,
    category: CategoryProps,
    category_id: number,
    user_id: number
}
