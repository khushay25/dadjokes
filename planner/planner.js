alert('Hello! Welcome to the planner');
let action=prompt('what do you want to do?');

const tasks=[];
while(action!=='quit'){
    switch(action){
        case 'add':
            const add=prompt('Enter a NewTo-Do Task task below:');
            tasks.push(add);
            console.log(`${add} added to the list!`);
            action=prompt('what do you want to do next?');
            break;
        case 'list':
                console.log('**********************');
                for(let i=0; i<tasks.length; i++){
                    console.log(`${i+1}:${tasks[i]}`)
                }
                console.log('**********************');
            action=prompt('what do you want to do next?');
            break;
        case 'remove':
            const index=parseInt(prompt('Enter To-Do task index number you want to remove:'));
            if(!Number.isNaN(index)){
                let deleted=tasks.splice(`${index-1}`,1);
                console.log(`${deleted[0]} removed from the list!`);
            }else{
                console.log('Unknown index!');
            }
            action=prompt('what do you want to do next?');
            break;
//        case 'quit':
//            console.log('you quit!'); break;
        default:
            action=prompt('what do you want to do?');
    }
}
console.log('you quit!');