let nums = [1,7,3,4,2]

function test(arr) {
    for(let i = 0; i<arr.length; i++) {
        
        for(let j = 0; j<arr.length; j++) {
            
            if(arr[j] > arr[j+1]){
                let item = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = item
               
            } 
           
        }
        
    }

   return arr
}
