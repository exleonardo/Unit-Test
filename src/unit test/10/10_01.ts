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
export type WithCompaniesType = {
    companies : Array<{title:string,id:number}>
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

export function updateBook (u:UserWithLaptopType&UserWithBooksType,first:string,last:string){
    return {
    ...u,
    books: u.books.map((el) => el === first ? last : el)
}
}

export function removeBook (u:UserWithLaptopType&UserWithBooksType,delBook:string){
    return {
        ...u,
        books: u.books.filter((b) => b !== delBook)
    }
}
export function addCompanies(u:UserWithLaptopType&WithCompaniesType,newCompany:string){
    const addCompany = {title:newCompany,id:3}
    return {
    ...u,
    companies: [...u.companies,addCompany]
}
}

type CompaniesType ={
    [title:string]: { title: string, id: number }[]
}
export function updateCompany(companies:CompaniesType,userName:string,companyId:number,newTitle:string){
    return {
    ...companies,
    [userName]: companies[userName].map((el) => el.id === companyId ? {...el, title: newTitle} : el)
}
}