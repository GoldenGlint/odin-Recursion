function fibs(n){
    if (n==1){
        return [0];
    }
    if (n==2){
        return [0,1];
    }
    let solution=[];
    solution.push(0);
    solution.push(1);
    let prev=0;
    let cur=1;
    for(let i=2; i<n; i++){
        let temp=prev+cur;
        prev=cur;
        cur=temp;
        solution.push(cur);
    }
    return solution;
}

function fibsRecursion(n){
    console.log("This was printed recursively");

    if (n==1){
        return [0];
    }
    if (n==2){
        return [0,1];
    }

    let curr=fibsRecursion(n-2).at(-1)+fibsRecursion(n-1).at(-1)
    let arr=fibsRecursion(n-1);
    arr.push(curr);
    return arr;
}

console.log(fibs(8));
console.log(fibsRecursion(8));