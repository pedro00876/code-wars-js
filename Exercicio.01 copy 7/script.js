// 

function rentalCarCost(d) {
  
    let c = 40;
    let ct = c * d
      if(d >= 7){
        ct -= 50;
        
      } else if(d >= 3 ){
        ct -=20;
      }
      return ct;
    }