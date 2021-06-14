export class UserSignup {
    /*
    public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    */
   email: string;
   username: string;
   password: string;
   firstName: string;
   lastName: string;

   constructor(email: string, username: string, password: string, firstname: string, lastname: string)
   {
       this.email = email;
       this.username = username;
       this.password = password;
       this.firstName = firstname;
       this.lastName = lastname;
   }
}
