import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from './10_01';



test("reference type test",()=>{
let user:UserType= {
    name:"Dimych",
    hair:32,
    address : {city:"Minsk"}
}
  const awesomeUser =  makeHairStyle(user,2)
    expect(user.hair).toBe(32)
    expect (awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})
test("Change address",()=>{
    let user:UserWithLaptopType= {
        name:"Dimych",
        hair:32,
        address : {city:"Minsk",house:12},
        laptop:{
            title:"Zen book"
        }
    }
    const movedUser =  moveUser(user,"Kiev")
    expect(user).not.toBe(movedUser)
    expect (user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Kiev")

})
test("Upgrade laptop to MacBook",()=>{
    let user:UserWithLaptopType= {
        name:"Dimych",
        hair:32,
        address : {city:"Minsk",house:12},
        laptop:{
            title:"Zen book"
        }
    }
    const upgradeUser =  upgradeUserLaptop(user,"MacBook")
    expect(user).not.toBe(upgradeUser)
    expect(user.address).toBe(upgradeUser.address)
    expect (user.laptop).not.toBe(upgradeUser.laptop)
    expect(user.laptop.title).toBe("Zen book")
    expect(upgradeUser.laptop.title).toBe("MacBook")

})

test("Upgrade house",()=>{
    let user:UserWithLaptopType&UserWithBooksType= {
        name:"Dimych",
        hair:32,
        address : {city:"Minsk",house:12},
        laptop:{
            title:"Zen book"
        },
        books:["css","html","js","react"]
    }
    const upgradeUser =  moveUserToOtherHouse(user,99)
    expect(user).not.toBe(upgradeUser)
    expect(user.address).not.toBe(upgradeUser.address)
    expect(user.books).toBe(upgradeUser.books)
    expect (user.laptop).toBe(upgradeUser.laptop)
    expect(upgradeUser.address.house).toBe(99)
    expect(user.laptop.title).toBe(upgradeUser.laptop.title)
})

test("Update js to ts",()=>{
    let user:UserWithLaptopType&UserWithBooksType= {
        name:"Dimych",
        hair:32,
        address : {city:"Minsk",house:12},
        laptop:{
            title:"Zen book"
        },
        books:["css","html","js","react"]
    }
    const upgradeUser =  addNewBooksToUser(user,["ts","rest api"])
    expect(user).not.toBe(upgradeUser)
    expect(user.address).toBe(upgradeUser.address)
    expect(user.books).not.toBe(upgradeUser.books)
    expect (user.laptop).toBe(upgradeUser.laptop)
    expect(user.books.length).toBe(4)
    expect(upgradeUser.books[4]).toBe("ts")
    expect(upgradeUser.books[5]).toBe("rest api")
})

