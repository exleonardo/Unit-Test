export type StreetType = {
  title:string
}
export type AddressType ={
  number?:number
  street:StreetType
}
export type HoouseType= {
  buildedAt:number
  repaired:boolean;
  address:AddressType;
}

export type GovrmentBuildingType ={
  type:"HOSPITAL"| "FIRE-STATION"
  budget:number;
  staffCount:number
  address:AddressType
}

export type CityType = {
  title:string ;
   houses:Array<HoouseType>;
   govermentBuildings:Array<GovrmentBuildingType>
   citizenNumber:number
 }