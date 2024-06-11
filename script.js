var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
    var rectangleLocation = rect.getBoundingClientRect();
    var insideValue = details.clientX - rectangleLocation.left;

    if (insideValue < rectangleLocation.width / 2) {
        var red = gsap.utils.mapRange(
            0,
            rectangleLocation.width / 2,
            255,
            0,
            insideValue
        );

        gsap.to(rect, {
            backgroundColor: `rgb(${red}, 0, 0)`,
            ease: "power4.inOut"
        });
    } else {
        var blue = gsap.utils.mapRange(
            rectangleLocation.width / 2,
            rectangleLocation.width,
            0,
            255,
            insideValue
        );

        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blue})`,
            ease: "power4.inOut"
        });
    }
});

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white",
        ease: "power4.inOut"
    });
});
