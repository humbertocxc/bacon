import api from "../api";

interface CreateProps {
  title: string,
  category_id: number,
  user_id?: number,
  description: string,
  deadline: Date,
}


export function DeleteCard(
  id: number
) {
  api.delete(`cards/${id}`);
}

export function CreateCard({ title,  category_id,  user_id,  description, deadline } : CreateProps){
  api.post(`cards`, { title, category_id, user_id, description, deadline });
}