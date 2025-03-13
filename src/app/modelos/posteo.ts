export class posteo {
    titulo: string = '';
    posteo: string = '';
    categoria: string = '';
    user_id: string = '';
    imagen: string = '';
    updated_at: string = '';  
    created_at: string = '';
    id: string = '';
    user: user = new user();  
}

export class user {
    id: string = '';
    nombre: string = '';
    foto1: string = ''
}