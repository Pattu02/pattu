let familyname=[];
function add(name) {
    familyname[familyname.length]=name
}
function update(x,y){
    familyname[x]=y
}
add("sam")
add("atthu")
update("0","pattu")
console.table(familyname)
//console.log(familyname)
for(i=0;i<familyname.length;i++){
    console.table(`** ${familyname[i]} **`)
}



let name={};
function fullname(key,value){
    name[key]=value
}
function remove(keyname){
     delete name[keyname]
}
fullname("fname","sam")
fullname("lname","curran")
remove("fname")
console.table(name)    

