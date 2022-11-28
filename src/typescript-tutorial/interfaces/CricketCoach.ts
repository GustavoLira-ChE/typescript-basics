import Coach from "./Coach";

class CricketCoach implements Coach{


    getDailyWorkout(): string {
        return "Practice ypur spin bowling technique."
    }

}

export default CricketCoach;