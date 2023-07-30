export type UserType = {
    name:string;
    hair:number;
    address:{city:string,house?:number}
}
export function makeHairStyle(u:UserType,power:number){
    const copy = {
        ...u,
        hair:u.hair/power
    }
    // copy.hair = u.hair/power
    return copy
}
export type LaptopType = {
    title:string;
}
export type UserWithLaptopType = UserType& {
    laptop:LaptopType
}
export type UserWithBooksType = UserType& {
    books:Array<string>
}
export function moveUser(user:UserWithLaptopType,city:string){
    const copy = {
        ...user,
        address:{...user.address,city}
    }
return copy
}
export function moveUserToOtherHouse(user:UserWithLaptopType&UserWithBooksType,house:number){
    return {
        ...user,
        address: {...user.address, house}
    }
}

export function addNewBooksToUser (u:UserWithLaptopType&UserWithBooksType,books:Array<string>){
    return {
    ...u,
    books: [...u.books, ...books]
}
}

export function upgradeUserLaptop (user:UserWithLaptopType,nooteBook:string){
    const copy ={
        ...user ,
        laptop:{...user.laptop,title:nooteBook}
    }
    return copy
}