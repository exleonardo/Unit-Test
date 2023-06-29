import {StydentType} from "../1";
import {addSkill, doesStudentLiveinCity, makeStudentActive} from "../03/03";


let student :StydentType;
beforeEach(()=>{
  student  = {
    id:1,
    name : "Alex",
    age:24,
    isActive:false,
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
})

test ("new tech skill should be added to student",()=>{
addSkill(student , "JS")
expect(student.technologies.length).toBe(4)
expect(student.technologies[3].title).toBe("JS");
expect(student.technologies[3].id).toBeDefined()
})

test ("student should be made active",()=>{
  expect(student.isActive).toBe(false)

  makeStudentActive(student);
  expect(student.isActive).toBe(true)

})

test ("does student live in city",()=>{
  let res1= doesStudentLiveinCity(student,"Moscow");
  let res2= doesStudentLiveinCity(student,"Rechitca");

expect(res1).toBe(false);
expect(res2).toBe(true)

})