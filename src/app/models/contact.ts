export class Contact {
  /* Ici tout ce qui caractérise le contact*/ /* "!:" signifie que c'est obligatoire*/
  id !: number;
  name !: string;
  email !: string;
  username !: string;

  constructor(name:string, email:string, username:string) {
    this.name = name;
    this.email = email;
    this.username = username;
  }
}
