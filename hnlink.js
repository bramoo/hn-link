(function() {
    document.addEventListener("keydown", ev => {
        if (ev.key = "h") {
            console.log("hnlink: finding link...");

            var entry = document.getElementsByClassName("entryBody")[0];
            var array = Array.from(entry.getElementsByTagName("a"));
            var hnlinks = array.filter(e => e.href.indexOf("news.ycombinator.com/item?id=") >= 0);

            console.log("hnlink found " + hnlinks.length + " links");
            console.log(hnlinks);

            // hnlinks.forEach(e => e.style.border = "5px solid red");

            if (hnlinks.length > 0) {
                console.log("hnlink: opening " + hnlinks[0].href);
                window.open(hnlinks[0].href);
            }
        }
    });
})();