/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    
    let numCounter={} 
    let u=0
    for (let num of arr) {
  if(num in numCounter){
    numCounter[num]+=1;
  }else{
    numCounter[num]=1;
      u++;
  }
}

    let countes = Object.entries(numCounter).sort((a,b)=>{return a[1]-b[1]})
    for(let i=0;i<countes.length;i++){
        if(k >= countes[i][1]){
            k=k-countes[i][1]
            u--
        }else{
            break;
        }
    }
    return u

};
