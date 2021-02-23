class Constestant {
    constructor () {
        this.index = null;
        this.name = null;
        this.distance = null;
    }
    
    getCount() {
        var contestantref = database.ref("contestantCount");
        contestantref.on("value",(data)=>{
            contestantCount = data.val();
        })
    }
    
    updateCount(count) {
        database.ref("/").update({
            contestantCount : count
        })
    }
  
    update() {
        var contestantIndex = "players/player"+this.index;
      
        database.ref(contestantIndex).set({
            name : this.name,
            distance : this.distance
        })
    }
   
    static getContestantinfo () {
        var contestantinfo = database.ref("contestant")
        contestant.on("value", (data)=> {
            allContestants = data.val();
        })
    }

    display() {
        //
        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hid();
            this.input2.hid();
            this.button.hide();
       
            contestant.name = this.input1.value();
           
            contestantCount+=1;
            
            contestant.index = contestantCount;
      
            contestant.update();
           
            contestant.updateCount(contestantCount);
        }
        ) 
    }
}