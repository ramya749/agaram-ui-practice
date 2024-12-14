class Users{
      constructor(name){
        console.log(name);
      }
      login(a,b){
        console.log(a*b);  
      }
    }
    let object=new Users("ramya");
    obj.login(8,7)
    
    
    class Users{
      constructor(email,password){
        this.email=email;
        this.pass=password;
    //     console.log(this.email);
      }
      login(){
        if(this.email=="ramya@gmail.com"){
          console.log("login success");
        }
        let e=this.getEmail();
        console.log(e);
      }
      getEmail(){
        return this.email;
      }
      }
    let obj=new Users("ramya@gmail.com",12345);
    obj.login();
    // let email_address=obj.getEmail;
    // console.log(email_address);
    
   


    class Parent{
      constructor(p_name){
        this.p_name=p_name;    
      }
      getName(){
        console.log(this.p_name);
      }
    }
    
    class Child extends Parent{
      constructor(c_name,p_name){
        super(p_name)
        this.c_name=c_name;
    
      }
      getChildName(){
        this.getName();
        console.log(this.c_name);
      }
    }
    let childobj=new Child("ramya","murugan")
    childobj.getChildName();
    
    
    
    
    