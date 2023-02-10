const nums = [1, 2, 3, 4]


const nums2= nums.reduce((acc,cur)=>{
  acc.push(cur*cur*cur);

  return acc;
},[]);
