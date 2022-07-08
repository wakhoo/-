/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    var preSum=[];let ans=0
    for(let i =0; i in nums;i++){
        if(i==0){
            preSum[i]=nums[i]
        }else{
        preSum[i]=preSum[i-1]+nums[i]}
    }
    for(let i=0;i in nums;i++){
   if(preSum[i]===(preSum[preSum.length - 1] - (preSum[i] - nums[i]))){
       ans=i
       
   return ans
   }else {
       if(i==(preSum.length-1)&&(preSum[0]!==(preSum[preSum.length - 1] - (preSum[0] - nums[0])))){
       ans=-1
       return ans
       }
   }
}
    
};
