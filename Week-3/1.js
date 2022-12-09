function createIncrement(){
    var count=0;}
    function increment()
    {
    count++;
    let message=`Count is${count}`;
    function log()
    {
        console.log(message);}
    }
        return[increment,log];


        increment();
        const [increment,log] =createIncrement()
        increment();
        log();// What is logged?