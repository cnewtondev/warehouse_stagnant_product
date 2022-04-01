import receiveInfo from './receivedDataParser'
import shippedInfo from './shippedDataParser'


//importing data
let received = receiveInfo;
let shipped = shippedInfo;
let master = [];
 
//parse data
for(let i = 0; i < received.length; i++){
    for(let j =0; j < shipped.length; j++){
      if(shipped[j].product == received[i].product){
       let difference = shipped[j].dateShipped - received[i].dateReceived

            while(shipped[j].quantityShipped > 0 && received[i].quantityReceived > 0){
              master.push(
                  {
                product: shipped[j].product, 
                timeLag: difference / (1000 * 60 * 60 * 24),
                variant: shipped[j].company
              }) 
              shipped[j].quantityShipped -= 1  
              received[i].quantityReceived -= 1
            } 

       } 
    }
 } 



 export default master

