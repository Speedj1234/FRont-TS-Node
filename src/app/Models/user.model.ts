export class User
{
    public id: number;
    public username: string;
    public email: string;
    public password: string;

    constructor(data: any)
    {
        this.id = data.id;
        this.username = data.username;
        this.email = data.email;
        this.password = data.password;
    }
}