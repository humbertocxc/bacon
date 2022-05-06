import api from "../api";


export function CreateCategory( name: string ) {
  api.post(`categories`, {name, isActive: true, addable: true});
}

export function DeleteCategory( id: number ) {
  api.delete(`categories/${id}`);
}