function getdetails(obj) {
    var audio = new Audio();
    audio.volume = 0.1;
    audio.src = 'media/Meow.mp3';
    audio.autoplay = true;
    lang = obj.id;
    if (obj.id == "en") {
        document.getElementById('welcome').innerHTML="Welcome!";
        document.getElementById('catSays').innerHTML="A cat in a hat says: \"Hello, my friend!\"";
        document.getElementById('info').innerHTML="It's a little pet project, whose goal is to write a script in JavaScript, which switches the language on the page. Technologies such as HTML, CSS and JavaScript were used to create this project. Also used Bootstrap. If you click on the <ins><i>\"Russian\"</i></ins> button, the page text will change to Russian. If you click on the <ins><i>\"German\"</i></ins>, the page text will change to German. If you click on the <ins><i>\"English\"</i></ins>, the text does not change, since it is already in English. You will also hear a cat meow.";
    }
    else if (obj.id == "ru") {
        document.getElementById('welcome').innerHTML="Добро пожаловать!";
        document.getElementById('catSays').innerHTML="Котик в шляпке говорит: \"Привет, мой друг\"";
        document.getElementById('info').innerHTML="Это маленький пет-проект, целью которого является написание скрипта на JavaScript, который переключает язык на странице. Для создания этого проекта использовались такие технологии, как HTML, CSS и JavaScript. Также используется Bootstrap. При нажатии на кнопку <ins><i>\"English\"</i></ins>, текст страницы измениться на английский. При нажатии на кнопку <ins><i>\"German\"</i></ins>, текст страницы измениться на немецкий. При нажатии на кнопку <ins><i>\"Russian\"</i></ins>, текст не изменится, так как он уже на русском. Также Вы услышите мяуканье кота.";
    }
    else if (obj.id == "de") {
        document.getElementById('welcome').innerHTML="Herzlich willkommen!";
        document.getElementById('catSays').innerHTML="Eine Katze mit Hut sagt: \"Hallo, mein Freund!\"";
        document.getElementById('info').innerHTML="Es ist ein kleines Haustierprojekt, dessen Ziel es ist, ein Skript in JavaScript zu schreiben, das die Sprache auf der Seite wechselt. Für die Erstellung dieses Projekts wurden Technologien wie HTML, CSS und JavaScript verwendet. Auch verwendet Bootstrap. Wenn Sie auf die Schaltfläche <ins><i>\"Russisch\"</i></ins> klicken, ändert sich der Seitentext in Russisch. Wenn Sie auf <ins><i>\"Englisch\"</i></ins> klicken, ändert sich der Seitentext in Englisch. Wenn Sie auf <ins><i>\"Deutsch\"</i></ins> klicken, ändert sich der Text nicht, da er bereits in Englisch ist. Sie werden auch die Katze miauen hören.";
    }
    else {
        alert("Error! Wrong language code!")
    }
}