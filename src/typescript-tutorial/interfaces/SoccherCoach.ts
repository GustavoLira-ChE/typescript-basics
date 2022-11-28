import Coach from "./Coach";

class SoccerCoach implements Coach {

    getDailyWorkout(): string {
        return "Practice your free-direct shoting";
    }
    
}

export default SoccerCoach;