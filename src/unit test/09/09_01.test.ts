
function icreaseAge(u:UserType){
  u.age++;
}

type UserType = {
  name:string;
  age:number;
}

test("big test",()=>{

  const user:UserType={
    name:"Dimych",
    age:32,
  }
  icreaseAge(user)


  expect(user.age).toBe(33)

})