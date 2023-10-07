function prime (x){
    let count=0
    let i,j
        for (let j=2;j<=x;j++){
        for (let i=1;i<=j;i++){
            if (j%i==0){
                count++
            }
        }
    if(count==2)
    console.log(j)
    count = 0
    }
    }
    prime(100)


    