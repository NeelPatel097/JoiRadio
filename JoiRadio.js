// Use this sample to create your own voice commands
intent('hello world', n => {
    n.play('(hello|hi there)');
});

intent('play $(CHANNEL* (.*)) fm', n=>{
    let channel = project.radios.filter(x=> x.name.toLowerCase() === n.CHANNEL.value.toLowerCase())[0];
    try{
        n.play({"command":"play_channel", "id": channel.id});
        n.play('(Playing Now|on it|OK boss|Doing it)')
    }catch(err){
        console.log("Can't play");
        n.play("I cannot play this");
    }
});

intent('play (some|) $(CATEGORY* (.*)) music',  n=>{
    let channel = project.radios.filter(x=> x.name.toLowerCase() === n.CHANNEL.value.toLowerCase())[0];
    try{
        n.play({"command":"play_channel", "id": channel.id});
        n.play('(Playing Now|on it|OK boss|Doing it)')
    }catch(err){
        console.log("Can't play");
        n.play("I could not find this genre");
    }
});

intent('(play)', 'play (the|) (some|) music', n=> {
   n.play({"command":"play"});
    n.play("(Playing Now|on it|OK boss|Doing it)");
});

intent('stop (it|)', 'stop (the|) music', 'pause (it|)', 'pause (the|) music', n=> {
   n.play({"command":"stop"});
    n.play("(Stopping Now|on it|OK boss|Doing it)");
});

intent('(play|) next (channel|fm|radio|)', n=> {
   n.play({"command":"next"});
    n.play("(Changing Now|on it|OK boss|Doing it)");
});

intent('(play|) previous (channel|fm|radio|)', n=> {
   n.play({"command":"prev"});
    n.play("(Changing Now|on it|OK boss|Doing it)");
});



