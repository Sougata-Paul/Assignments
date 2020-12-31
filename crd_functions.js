var gname;
var names=[];
var names2;
var userme=document.getElementById("nameTR");
document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    Create();
    Read();
    document.getElementById("form").reset();
});

function Create(){
    let storage=JSON.parse(localStorage.getItem("names"));
    gname=document.getElementById("name").value;
    if(gname=="")
    {
        alert("Please Fill Your Name");
    }
    else{
        if(storage==null){
            names.push(gname);
            localStorage.setItem("names",JSON.stringify(names));
        }
        else{
            names=JSON.parse(localStorage.getItem("names"));
            names.push(gname);
            localStorage.setItem("names",JSON.stringify(names));
        }
    }
}
function Read(){
    userme.innerHTML="";
    names2=JSON.parse(localStorage.getItem("names"));
    if(names2==null){
        userme.innerHTML+='<tr> <th class="cls1">#</th> <th class="cls1">NAME</th> <th class="cls1">OPERATION</th></tr>'
        
    }
    else{
        userme.innerHTML+='<tr> <th class="cls1">#</th> <th class="cls1">NAME</th> <th class="cls1">OPERATION</th></tr>'
        for(var i=0;i<names2.length;i++){
            userme.innerHTML+='<tr><td class="cls1">'+(i+1)+'</td><td class="cls1">'+names2[i]+'</td><td class="cls1"><button Onclick="Delete('+(i)+')">Delete</button></td></tr>'
        }
    }
}
function Delete(i3){
    let names3=JSON.parse(localStorage.getItem("names"));
    names3.splice(i3,1);
    localStorage.setItem("names",JSON.stringify(names3));
    Read();
}