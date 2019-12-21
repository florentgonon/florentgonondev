function typed() {
  var options = {
    strings: ["Développeur Web Fullstack", "Développeur en Freelance"],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity
  };

  var typed = new Typed('.typed', options);

}

export { typed };
