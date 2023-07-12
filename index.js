let stories = [
    {
        "inputs":5,
        "category":"Sports",
        "word":"Chess"

    },
    {
        "inputs":6,
        "category":"European Country Name",
        "word":"France"
        
    },
]
$(document).ready(function () {
    displayStory();
})

function displayStory() {
    const story = stories[Math.floor(Math.random() * stories.length)];
    $("#story_title").html(story.title)

    $("#bank_words").empty();
    for (let i = 0; i < story.words.length; i++) {
        let html = `<button class="word_bank_button">${story.words[i]}</button>`
        $("#bank_words").append(html)
    }

    $("#input_fields").empty();
    for (let i = 0; i < story.inputs; i++) {
        let input_html = `<input type="text" class="input_field" id="input_${i}" placeholder="Input ${i + 1}"/>`
        $("#input_fields").append(input_html)
    }

    $("#story_text").html(story.story)
}

var gameOver=false
$(".clickable").click(function () {
    var correctGuess = false;      

    let id = $(this).attr("id");

    var life = parseInt($("#life").text())

    for (var i = 0; i < randomWord.word.length; i++) {
        if (randomWord.word.charAt(i).toLowerCase() == id) {
            if (life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)) {

                $(".fill_blanks").eq(i).html(id);
                correctGuess = true;

                if ($("#blanks").text() === randomWord.word.toLowerCase()) {
                    $("#result").text("You Win!!")
                    correctGuess = true;
                    gameOver=true
                }
            }                
        }   
    }
    if (life > 0 && correctGuess!=true && gameOver!=true) {           
        life = life - 1
        $("#life").text(life)
    }
    else if (life == 0) {
        $("#result").text("You Lost!!")
    }
})



