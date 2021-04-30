function recursiveStackOverflow(num) {
  console.log(num);
  if (num === 0) {
    return;
  } else {
    recursiveStackOverflow(++num);
  }
}

function memoryLeak() {
  let timerId = setInterval(() => {
    for (let i = 0; i < 100000; i++) {
      document.body.appendChild(document.createElement("div"));
    }
  }, 2000);
  setTimeout(() => clearInterval(timerId), 20000);
}

document.querySelector(".overflow").addEventListener("click", () => recursiveStackOverflow(1));
document.querySelector(".leak").addEventListener("click", () => memoryLeak());