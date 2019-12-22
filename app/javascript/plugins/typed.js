function typed() {
  var options = {
    strings: ["$ Développeur Web Fullstack...<br> $ ... en Freelance ✈️"],
    typeSpeed: 70,
    startDelay: 1000,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    eraseAtOnce: true,
    loopCount: Infinity
  };

  var typed = new Typed('.typed', options);

}

export { typed };
