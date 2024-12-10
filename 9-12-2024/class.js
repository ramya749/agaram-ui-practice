class Users{
      constructor(name){
        console.log(name);
      }
      login(a,b){
        console.log(a*b);  
      }
    }
    let obj=new Users("ramya");
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
        return this.p_name;
      }
    }
    let parobj=new Parent("murugan")
    
    class Child extends Parent{
      constructor(name,p_name){
        super(p_name)
        this.name=name;
    
      }
      getChildName(){
        let v=super.getName();
        console.log(v);
      }
    }
    let childobj=new Child("ramya","murugan")
    console.log(childobj)
    
    
    
    
    