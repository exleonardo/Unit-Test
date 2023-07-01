import {GovrmentBuildingType, HoouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovrmentBuildingType>)=>{

  return buildings.map(b => b.address.street.title)

}

export const getStreetsTitlesOfHouses = (houses: Array<HoouseType>)=>{
return  houses.map(b=> b.address.street.title)
}

export const createMessages = (houses: Array<HoouseType>)=>{
  return houses.map(h => `Hello guys from ${h.address.street.title}`)
}