import Coach from "./Coach";
import CricketCoach from "./CricketCoach";
import SoccerCoach from "./SoccherCoach";


let myCricketCoach:Coach = new CricketCoach();
let mySoccerCoach:Coach = new SoccerCoach();

let coachArray: Coach[] = [];

coachArray.push(myCricketCoach);
coachArray.push(mySoccerCoach);


let coach:Coach;
for(coach of coachArray) {
    console.log(coach.getDailyWorkout());
}