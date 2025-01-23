let CurrentQuestLevel;
let CurrentMagnetLevel;
let CurrentGoldenScrapLevel;
let CurrentStarFragmentLevel;
let CurrentXpLevel;
let CurrentWrenchLevel;
let CurrentScrapLevel;

let TargetQuestLevel;
let TargetMagnetLevel;
let TargetGoldenScrapLevel;
let TargetStarFragmentLevel;
let TargetXpLevel;
let TargetWrenchLevel;
let TargetScrapLevel;

document.getElementById("CurrentQuestLevel").addEventListener("input", function () {
    CurrentQuestLevel = parseFloat(document.getElementById("CurrentQuestLevel").value) || 0;
    updateCalculations();


});
document.getElementById("CurrentMagnetLevel").addEventListener("input", function () {
    CurrentMagnetLevel = parseFloat(document.getElementById("CurrentMagnetLevel").value) || 0;
    updateCalculations();

});
document.getElementById("CurrentGoldenScrapLevel").addEventListener("input", function () {
    CurrentGoldenScrapLevel = parseFloat(document.getElementById("CurrentGoldenScrapLevel").value) || 0;
    updateCalculations();

});
document.getElementById("CurrentStarFragmentLevel").addEventListener("input", function () {
    CurrentStarFragmentLevel = parseFloat(document.getElementById("CurrentStarFragmentLevel").value) || 0;
    updateCalculations();

});
document.getElementById("CurrentXpLevel").addEventListener("input", function () {
    CurrentXpLevel = parseFloat(document.getElementById("CurrentXpLevel").value) || 0;
    updateCalculations();

});
document.getElementById("CurrentWrenchLevel").addEventListener("input", function () {
    CurrentWrenchLevel = parseFloat(document.getElementById("CurrentWrenchLevel").value) || 0;
    updateCalculations();

});
document.getElementById("CurrentScrapLevel").addEventListener("input", function () {
    CurrentScrapLevel = parseFloat(document.getElementById("CurrentScrapLevel").value) || 0;
    updateCalculations();

});

document.getElementById("TargetQuestLevel").addEventListener("input", function () {
    TargetQuestLevel = parseFloat(document.getElementById("TargetQuestLevel").value) || 0;
    updateCalculations();

});
document.getElementById("TargetMagnetLevel").addEventListener("input", function () {
    TargetMagnetLevel = parseFloat(document.getElementById("TargetMagnetLevel").value) || 0;
    updateCalculations();

});
document.getElementById("TargetGoldenScrapLevel").addEventListener("input", function () {
    TargetGoldenScrapLevel = parseFloat(document.getElementById("TargetGoldenScrapLevel").value) || 0;
    updateCalculations();

});
document.getElementById("TargetStarFragmentLevel").addEventListener("input", function () {
    TargetStarFragmentLevel = parseFloat(document.getElementById("TargetStarFragmentLevel").value) || 0;
    updateCalculations();

});
document.getElementById("TargetXpLevel").addEventListener("input", function () {
    TargetXpLevel = parseFloat(document.getElementById("TargetXpLevel").value) || 0;
    updateCalculations();

});
document.getElementById("TargetWrenchLevel").addEventListener("input", function () {
    TargetWrenchLevel = parseFloat(document.getElementById("TargetWrenchLevel").value) || 0;
    updateCalculations();

});
document.getElementById("TargetScrapLevel").addEventListener("input", function () {
    TargetScrapLevel = parseFloat(document.getElementById("TargetScrapLevel").value) || 0;
    updateCalculations();

});



function updateCalculations() {

    if (CurrentQuestLevel > TargetQuestLevel ||
        CurrentMagnetLevel > TargetMagnetLevel ||
        CurrentGoldenScrapLevel > TargetGoldenScrapLevel ||
        CurrentStarFragmentLevel > TargetStarFragmentLevel ||
        CurrentXpLevel > TargetXpLevel ||
        CurrentWrenchLevel > TargetWrenchLevel ||
        CurrentScrapLevel > TargetScrapLevel) {


        document.getElementById("output1").textContent = "Invalid, your current levels cant be higher than your target levels";
        document.getElementById("output1").classList.remove("highlightgreen");
        document.getElementById("output1").classList.add("highlightred");
    } else {

        document.getElementById("output1").textContent = "All conditions are fine";
        document.getElementById("output1").classList.remove("highlightred");
        document.getElementById("output1").classList.add("highlightgreen");
        CalculateCurrentBookCost();

    }
}

function CalculateCurrentBookCost() {
    // Calculates the current level cost
    let CurrentMagnetCost = 0;
    let CurrentGoldenScrapCost = 0;
    let CurrentStarFragmentCost = 0;
    let CurrentXpCost = 0;
    let CurrentWrenchCost = 0;
    let CurrentScrapCost = 0;

    CurrentMagnetCost = CurrentMagnetLevel + CurrentMagnetLevel + 2;
    CurrentGoldenScrapCost = CurrentGoldenScrapLevel + CurrentGoldenScrapLevel + 2;
    CurrentStarFragmentCost = CurrentStarFragmentLevel + CurrentStarFragmentLevel + 2;
    CurrentXpCost = CurrentXpLevel + CurrentXpLevel + 2;
    CurrentWrenchCost = CurrentWrenchLevel + CurrentWrenchLevel + 2;
    CurrentScrapCost = CurrentScrapLevel + CurrentScrapLevel + 2;

    //displays the output for testing purposes
    document.getElementById("output2").textContent = "Magnet level cost = " + CurrentMagnetCost ;
    document.getElementById("output4").textContent = "Gs level cost = " + CurrentGoldenScrapCost ;
    document.getElementById("output6").textContent = "Fragment level cost = " + CurrentStarFragmentCost ;
    document.getElementById("output8").textContent = "Xp level cost = " + CurrentXpCost;
    document.getElementById("output10").textContent = "Wrench level cost = " + CurrentWrenchCost;
    document.getElementById("output12").textContent = "Scrap level cost = " + CurrentScrapCost;

    // Calculates the total cost of all previous current levels
    let CurrentTotalMagnet = 0;
    let CurrentTotalGoldenScrap = 0;
    let CurrentTotalStarFragment = 0;
    let CurrentTotalXp = 0;
    let CurrentTotalWrench = 0;
    let CurrentTotalScrap = 0;

    for (let i = 0; i <= CurrentMagnetLevel  ; i++) {
        CurrentTotalMagnet += i + i + 2;
    }
    for (let i = 0; i <= CurrentGoldenScrapLevel; i++) {
        CurrentTotalGoldenScrap += i + i + 2;
    }
    for (let i = 0; i <= CurrentStarFragmentLevel; i++) {
        CurrentTotalStarFragment += i + i + 2;
    }
    for (let i = 0; i <= CurrentXpLevel; i++) {
        CurrentTotalXp += i + i + 2;
    }
    for (let i = 0; i <= CurrentWrenchLevel; i++) {
        CurrentTotalWrench += i + i + 2;
    }
    for (let i = 0; i <= CurrentScrapLevel; i++) {
        CurrentTotalScrap += i + i + 2;
    }

    //displays the output for testing purposes
    document.getElementById("output3").textContent = `Total Books to get to your Magnet level = ${Math.floor(CurrentTotalMagnet - CurrentMagnetCost).toLocaleString()}`;
    document.getElementById("output5").textContent = `Total Books to get to your Gs level = ${Math.floor(CurrentTotalGoldenScrap - CurrentGoldenScrapCost).toLocaleString()}`;
    document.getElementById("output7").textContent = `Total Books to get to your Fragment level = ${Math.floor(CurrentTotalStarFragment - CurrentStarFragmentCost).toLocaleString()}`;
    document.getElementById("output9").textContent = `Total Books to get to your Xp level = ${Math.floor(CurrentTotalXp - CurrentXpCost).toLocaleString()}`;
    document.getElementById("output11").textContent = `Total Books to get to your Wrench level = ${Math.floor(CurrentTotalWrench - CurrentWrenchCost).toLocaleString()}`;
    document.getElementById("output13").textContent = `Total Books to get to your Scrap level = ${Math.floor(CurrentTotalScrap - CurrentScrapCost).toLocaleString()}`;

    // calculates total books earnt
    let CurrentTotalBooksEarnt = 0;

    for (let j = 0; j <= CurrentQuestLevel; j++) {
        CurrentTotalBooksEarnt += j ;
    }
    document.getElementById("output14").textContent = `Total Books Earnt Ever = ${Math.floor(CurrentTotalBooksEarnt).toLocaleString()}`;


    let CurrentTotalBooksSpent;

    CurrentTotalBooksSpent = 
    ((CurrentTotalGoldenScrap || 0) - (CurrentGoldenScrapCost || 0)) +
    ((CurrentTotalMagnet || 0) - (CurrentMagnetCost || 0)) +
    ((CurrentTotalStarFragment || 0) - (CurrentStarFragmentCost || 0)) +
    ((CurrentTotalXp || 0) - (CurrentXpCost || 0)) +
    ((CurrentTotalWrench || 0) - (CurrentWrenchCost || 0)) +
    ((CurrentTotalScrap || 0) - (CurrentScrapCost || 0));
    document.getElementById("output15").textContent = `Total Books spent Ever = ${Math.floor(CurrentTotalBooksSpent).toLocaleString()}`;

    document.getElementById("output16").textContent = `Extra Books:  ${Math.floor(CurrentTotalBooksEarnt-CurrentTotalBooksSpent).toLocaleString()}`;


}
