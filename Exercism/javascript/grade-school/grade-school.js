export function GradeSchool () {
    let roster = {};
    let grades = [];

    GradeSchool.prototype.roster = function(){
       return JSON.parse(JSON.stringify(roster));
    }

    this.add = function(name, grade) {       
        if (grades[grade] === undefined) { 
            grades[grade] = []; 
        }
        grades[grade].push(name);
        roster[grade] = grades[grade];
        roster[grade].sort();
        return this.roster();
    };

    //should return student list when passed in grade
    this.grade = function(grade) {
        if (roster[grade] === undefined) { 
            return [];
        }
        return this.roster()[grade];
    };
} 
