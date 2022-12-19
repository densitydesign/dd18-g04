document.querySelectorAll('.js-marquee').forEach(function(e) {
    var letter = e.querySelector('span');
    for (counter = 1; counter <= 3; ++counter) {
        var clone = letter.cloneNode(true);
        letter.after(clone);
    }
})

