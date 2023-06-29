import { StydentType} from "../1";
import {CityType, GovrmentBuildingType, HoouseType} from "../02/02_02";

export const addSkill =(student:StydentType,skill:string)=>{
  student.technologies.push({id:new Date().getTime(),title:skill})
}

export  function makeStudentActive(s:StydentType){
s.isActive = true
}

export function doesStudentLiveinCity(s:StydentType,cityName : string){
return s.address.city.title === cityName
}
export const addMoneyToBudget = (building: GovrmentBuildingType, budget: number)=>{
building.budget += budget;
}
// export const demolishHousesOnTheStreet = (city: CityType, happyStreet: string)=>{
//
// }
export const repairHouse = (hoouseType: HoouseType)=>{
  hoouseType.repaired = true
}

export  const toFireStaff = (building: GovrmentBuildingType, stuffCountToFire: number)=>{
  building.staffCount-=stuffCountToFire
}


export  const toHireStaff = (building: GovrmentBuildingType, stuffCountToHire: number)=>{
  building.staffCount+=stuffCountToHire
}

export const createMessage = (props: CityType)=>{
  return `Hello ${props.title} citizen. I want you be happy. All ${props.citizenNumber} men `
}