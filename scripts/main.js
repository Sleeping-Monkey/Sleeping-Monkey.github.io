function showContacts() {
    let hrefs = ["https://vk.com/id55255777", "https://instagram.com/Am0nkey", "https://t.me//Am0nkey", "https://steamcommunity.com/id/Am0nkey/", "https://github.com/Sleeping-Monkey"];
    let names = ["Vkontakte", "Instagram", "Telegram", "Steam", "Github"];
    for (let i = 4; i >= 0; i--) {
        button.insertAdjacentHTML("afterend", '<br class="contacts"><br class="contacts"><a class="contacts" href='+hrefs[i]+'>'+names[i]+'</a>');
    }
    setTimeout(()=>document.querySelectorAll(".contacts").forEach(el => el.remove()), 5000);
}

document.querySelector("button").onclick = showContacts;



