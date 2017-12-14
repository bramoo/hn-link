(function() {
    console.info("hnlink loaded");

    document.addEventListener("keydown", ev => {
        if (ev.key == "h") {
            var entry = document.getElementsByClassName("entryBody")[0];
            var array = Array.from(entry.getElementsByTagName("a"));
            var hnlinks = array.filter(e => e.href.indexOf("news.ycombinator.com/item?id=") >= 0);

            if (hnlinks.length > 0) {
                console.info("hnlink: opening " + hnlinks[0].href);
                window.open(hnlinks[0].href);
            }
        }
    });
})();