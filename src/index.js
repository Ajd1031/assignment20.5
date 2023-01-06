//import "./styles.css";

/*
Add event listeners to the `.expand_button` buttons
*/
function expandArticleBody() {
  // selecting all buttons with expand_button class
  const buttons = document.querySelectorAll(".expand_button")
  
  // get a node list of all article bodies
const articleBodies = document.querySelectorAll(".article_body p");

//create an array of article bodies
const articleBodiesArray = Array.from(articleBodies)
  
  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let associatedArticleBody = btn.parentElement.parentElement.parentElement.querySelector(".article_body p");
      
      //checks if button has not been clicked
      if (btn.innerText = ">") {
        btn.innerText = "V"
        // if it has not been clicked then this "for" loop will change display to "block" for the appropriate article body
        for (let articleBody of articleBodiesArray) {
          if (articleBody.innerText = associatedArticleBody.innerText) {
            btn.parentElement.parentElement.parentElement.querySelector(".article_body").style.display = "block"
          }
        }
      } else if (btn.innerText = "V") {
        btn.innerText = ">"
        // if it has been clicked then this "for" loop will change display to "none" for the appropriate article body
        for (let articleBody of articleBodiesArray) {
          if (articleBody.innerText = associatedArticleBody.innerText) {
            btn.parentElement.parentElement.parentElement.querySelector(".article_body").style.display = "none"
          }
        }
      } 
    })
  })

}

/*
Add event listeners to the `.highlightBtn` buttons
*/
function highlightArticle() {
  // your code here
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
