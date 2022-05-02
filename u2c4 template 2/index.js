// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#form").addEventListener("submit",addMatch);
var matchArr=JSON.parse(localStorage.getItem(matchList)) || [];
function addMatch(){
    event.preventDefault();

    var matchObj={
        matchNum:document.querySelector("#matchNum").ariaValueMax,
        teamA:form.teamA.value,
        teamB:form.teamB.value,
        data:form.data.value,
        venue:form.venue.value,
    }
    matchArr.push(matchObj);

    localStorage.setItem("schedule",JSON.stringify(matchArr));

    window.location.href="applied.html";
}
