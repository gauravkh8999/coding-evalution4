// write js code here corresponding to matches.html

var FavouritesArrr=JSON.parse(localStorage.getItem(FavouritesList));
displayData(FavouritesArr);

var sum=matchArr.reduce(function(acc,elem){
    return acc +Number(elem,matchNum);
});
console.log(sum);
var favouritesArr=JSON.parse(localStorage.getItem("favourites")) || [];
function displayData(data){
    document.querySelector("tbody").innerHTML="";
    data.forEach(function(elem){
        var tr=document.createElement("tr");

        var td1=document.creaatElement("td");
        td1.innerText=elem.matchNumber;

        var td2=document.creaatElement("td");
        td2.innerText=elem.teamA;

        var td3=document.creaatElement("td");
        td3.innerText=elem.teamB;

        var td4=document.creaatElement("td");
        td4.innerText=elem.data;

        var td5=document.creaatElement("td");
        td5.innerText=elem.venue;

        var td6=document.creaatElement("td");
        td6.innerText=elem.favourite;
        td4.style.color="green";
        td4.addEventListener("click",function(){
            FavouritesFun(elem);
        });
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
    });
    function FavouritesFun(elem){
        console.log(elem);
        favouritesArr.push(elem);
        localStorage.setItem("favourites",JSON.stringify(FavouritesArr))
    }
        
    
}