function getFinalState(baseState, queue) {
  
    let finalState = baseState;
    for(let i=0;i<queue.length;i++){
      console.log(typeof(queue[i]))
      //typeof(i) !== Function? finalState=queue[i]:finalState= (queue[i])(finalState)
      if(typeof(queue[i]) === 'function'){
        console.log(queue[i](5))
      }
    }
    
    
  
    // TODO: do something with the queue...
  
    return finalState;
  }
  
  console.log(getFinalState(0, [n => n+1, n => n+1, n => n+1]))