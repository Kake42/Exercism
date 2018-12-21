export function HighScores(list){
    //return just the list of scores
    this.scores = list;

    var report = '';
    var top = [];
    var highest = 0;
    list.forEach(function(num){        
        top.push(num);    
    });

    top.sort(function(a, b) {return b-a});
    highest = top[0];
    while (top.length > 3) {
        top.pop();
    }

    //return highest score
    this.highest = highest;

    //return the latest score
    this.latest = list[(list.length)-1];
    
    //return 3 highest scores
    this.top = top;

    //return difference between high and last
    this.difference = (highest - this.latest);

    //return report bassed on performance
    if(this.difference != 0){
        report = "Your latest score was " +this.latest+ 
        ". That's " +this.difference+ " short of your personal best!"
    } else {
        report = "Your latest score was " +this.latest+ ". That's your personal best!";
    }
    this.report = report;
}