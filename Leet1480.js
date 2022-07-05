/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr=[]
    for(let i=0;i in nums;i++){
        if(i==0){
            arr[i]=nums[i]
        }else{
        arr[i]=arr[i-1]+nums[i]}
    }
    return arr
};
