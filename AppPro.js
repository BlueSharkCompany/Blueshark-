
        
        const shareData = {
  title: "BLUESHARK",
  text: "GRAB OPPORTUNITY TO BE A SHAREHOLDER FOR FREE",
  url: "http://localhost:8080/index.html",
};

const btn = document.querySelector(".shareSite");
const resultPara = document.querySelector(".result");

// Share must be triggered by "user activation"
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN shared successfully";
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});

////////FOR SLIDE

function joinShare() {
  document.querySelector(".share").style.width = "250px";
  
  document.querySelector(".share").style.display = "block";
            document.querySelector(".seen").style.display = "block";
}

function backP() {
  document.getElementById("back").style.width = "0";
  
  document.querySelector(".share").style.display = "none";
            document.querySelector(".seen").style.display = "none";
}

