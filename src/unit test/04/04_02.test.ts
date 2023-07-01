import {CityType} from "../02/02_02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_02";
import exp from "constants";

let city: CityType;

beforeEach(()=>{

  city = {
    title:"New York",
    houses:[
      {
        id:1,buildedAt:2012, repaired:false,
        address:{
          number:100,
          street:{
            title:"White street"
          }
        }
      },
      {id:1,
        buildedAt:2008, repaired:false,
        address:{
          number:100,
          street:{
            title:"Happy street"
          }
        }
      },
      {id:1,
        buildedAt:2020, repaired:false,
        address:{
          number:101,
          street:{
            title:"Happy street"
          }
        }
      }
    ],
    govermentBuildings:[
      {
        type:"HOSPITAL",
        address:{number:12,street:{title:"Central Str"}},
        budget:200000, staffCount:200
      },
      {
        type:"FIRE-STATION",
        address:{number:12,street:{title:"South Str"}},
        budget:500000, staffCount:1000
      }
    ],
    citizenNumber:1000000
  }

})

  // 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
  test('House should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy street');
    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);

  })

// test("List of street titles of Houses",()=>{
//   let happyHouse = getHousesOnTheStreet(city.houses, "Happy street")
//   let whiteHouse = getHousesOnTheStreet(city.houses, "Happy street")
//
//   expect(happyHouse.length).toBe(2)
//   expect(whiteHouse.length).toBe(1)
// })
// 03. Массив строений, где работают больше 500 людей
  test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.govermentBuildings, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE-STATION")

  });
