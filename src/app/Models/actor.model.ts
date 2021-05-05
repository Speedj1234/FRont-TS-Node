export class Actor
{
    public id: number;
    public first_name: string;
    public last_name: string;

    constructor(data: any)
    {
        this.id = data.id;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
    }
}