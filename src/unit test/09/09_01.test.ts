
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

  const superman = user
  superman.age  = 1000
  expect(user.age).toBe(1000)

})

test("big test",()=>{

  const users=[{
    name:"Dimych",
    age:32,
  },{
    name:"Dimych",
    age:32,
  }];
  const admins = users
  admins.push({name:"Bandygan",age: 10})


  expect(users[2]).toEqual({name:"Bandygan",age: 10})


})


test("value type test",()=>{

let userCount  = 100;
let adminsCount = userCount;

adminsCount = adminsCount+1;
  adminsCount++

  expect(adminsCount).toBe(102)


})

test("big test",()=>{

  const user={
    name:"Dimych",
    age:32,
    adress:{title:"Minsk"}
  }
  icreaseAge(user)

let addAdr = user.adress

  let user2 = {
    name:"Dimych",
    age:32,
    adress:addAdr
  }

  expect(user.age).toBe(1000)

})