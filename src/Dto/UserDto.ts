class User {
    _email: string;
    _password: string
    _nombres: string;
    _apellidos: string;
    _telefono: string;
    _rol: string;
    
    constructor(
        email: string, 
        password: string,
        nombres: string,
        apellidos: string,
        telefono: string,
        rol: string 
    ) {
        this._email = email;
        this._password = password;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._telefono = telefono
        this._rol = rol;
    }

    //Getters
    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }

    get nombres(): string {
        return this._nombres;
    }

    get apellidos(): string {
        return this._apellidos;
    }

    get telefono(): string{
        return this._telefono;
    }

    get rol(): string {
        return this._rol;
    }

    //Setters

    set email(email: string) {
        this._email = email;
    }

    set password(password: string) {
        this._password = password;
    }

    set nombres(nombres: string) {
        this._nombres = nombres;
    }

    set apellidos(apellidos: string) {
        this._apellidos = apellidos;
    }

    set telefono(telefono: string){
        this._telefono = telefono;
    }

    set rol(rol: string) {
        this._rol = rol;
    }
}

export default User;