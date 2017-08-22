export class User {
  name: string;
  email: string;
  id: string;
  jwt: string;
 
  constructor(name: string, email: string, id: string, jwt: string) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.jwt = jwt;
  }
}