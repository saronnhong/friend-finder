//var friendsArr = require("../../app/data/friends");

var questionsArr = [];
$("#submitButton").on("click", function () {
    var newCharacter = {};

    var name = $("#nameInput").val();
    var imageUrl = $("#imageUrlInput").val();
    for (var i = 1; i < 6; i++) {
        questionsArr.push($("#q" + i).val());
    }
    alert(questionsArr);
    newCharacter.name = name;
    newCharacter.imageUrl = imageUrl;
    newCharacter.questionsArr = questionsArr;

    // friendsArr.push(newCharacter);
    // console.log("new character array: " + friendsArr);
});