export function Allergies (score) {
    let list = [];
    let newScore = score;

    const foodAll = {
        1: "eggs",
        2: "peanuts",
        4: "shellfish",
        8: "strawberries",
        16: "tomatoes",
        32: "chocolate",
        64: "pollen",
        128: "cats"  
    };

    this.list = function() {
        Object.keys(foodAll).forEach(function(key) {
            if ((newScore & Number(key)) === Number(key)) {
                list.push(foodAll[key]);
            }
        });
        return list;
    }
    this.allergicTo = function(food){
        if(this.list().includes(food)){
            return true;
        }
        return false;
    }

}