

export interface UserLogin {
    email: string;
    password: string;
}

export interface UserRegister{
    first_name: string;
    last_name: string;
    email:string;
    password:string;
    username:string;
}


export interface ProfileCreate{
    user: number | string;
    bio: string
    avatar: string;
    bio_text_color: string
    background_color: string;
    link_color: string

}

export interface ProfileUpdate{
    user: number | string;
    bio: string
    avatar: string;
    bio_text_color: string
    background_color: string;
    link_color: string
}
