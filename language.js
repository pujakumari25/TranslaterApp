const formText = document.querySelectoror(".from-text");
translateBtn = document.querySelector("button");

selectTag.forEach(tag => {
    for (const country_code in countries) {
        console.log(countries[country_code]);
        let selected;
        if(id == "en-GB") {
            selected = "selected";
        } else if(id == 1 && country_code == "hi-IN") {
            selected = "selected";
        }
        let option =  '<option value="${country_code}">${countries[country_code]}</option>';
        tag.insertAdjacentHTML("beforeend", option); //adding option tag inside select tag
        
        
        
    }

});

exchangeIcon.addEventListener("click", () => {
    let tempText = formText.value,
    tempLang = selectTag[0].value;
    formText.value = toText.value;
    selectTag[0].value = selectTag[1].value;
    toText.value = tempText;
    selectTag[1].value = tempText;
});    

translateBtn.addEventListener("click", () => {
    let text = formText.value,
    translateForm = selectTag[0].value,
    translateTo = selecting[1].value;
    console.log(text);
    let apiUrl = 'https//api.mymemory.translated.net/get?q=&langpair=${translateForm}|${translateTo}';
    fetch(apiUrl1).then(res => res.json()).then(data => {

    })
})
