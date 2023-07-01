import {CityType, GovrmentBuildingType, HoouseType} from "../02/02_02";

export  function demolishHousesOnTheStreet(city: CityType, street: string){
city.houses = city.houses.filter(h => h.address.street.title !== street)
}

// export const getHousesOnTheStreet = (houses: Array<HoouseType>, happyStreet: string)=>{
// return
// }

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovrmentBuildingType>, number: number)=>{


  return buildings.filter(b => b.staffCount>number)
}