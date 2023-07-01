import {createGretingMessage, ManType} from "./05_01";

let people: Array<ManType> = [];

beforeEach(()=>{
  people =  [
    { name: 'Andrew Ivanov', age: 33 },
    { name: 'Alexander Petrov', age: 24 },
    { name: 'Dmitry Sidorov', age: 18 },
  ]
})

test ("Shuold get array of greeting messages", ()=>{

  const messages= createGretingMessage(people)

expect(messages.length).toBe(3);
  expect(messages[0]).toBe("Hello Andrew. Welcom to It-Incub");
  expect(messages[1]).toBe("Hello Alexander. Welcom to It-Incub");
  expect(messages[2]).toBe("Hello Dmitry. Welcom to It-Incub");


})