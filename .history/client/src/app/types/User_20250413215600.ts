

interface UserLogin {
    email: string;
    password: string;
}

interface UserRegister{
    first_name: string;
    last_name: string;
    email:string;
    password:string;
}


interface ProfileCreate{
    user: number | string;
    bio: string
    
}