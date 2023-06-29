

type CityType ={
  title:string;
  countryTittle:string;
}
type AddressType={
  streetTitle:string;
  city:CityType;
}
type TechType ={
id:number;
title:string;
}

export type StydentType ={
  id:number;
  name:string;
  isActive:boolean;
  age:number;
  address:AddressType;
  technologies:Array<TechType>
}

export const student:StydentType = {
  id:1,
  name : "Alex",
  age:24,
  isActive:true,
  address:{
    streetTitle:"Molodejnaya",
    city:{
      title:"Rechitca",
      countryTittle:"Belarus"
    }
  },
  technologies:[{
    id:1,
    title:"HTML",
  },{
    id:2,
    title:"css",
  },{
    id:3,
    title:"react",
  }
  ]
}