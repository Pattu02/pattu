let data=[]
function user(a,b,c,d){
    let info={}
    info.id=data.length+1;
    info.fname=a;
    info.lname=b;
    info.Gender=c;
    info.Age=d;
    data.push(info)
}
  
user('sam','curran','male','20')
user('sam/','curran','male','20')
user('sam//','curran','male','20')
console.log(data)