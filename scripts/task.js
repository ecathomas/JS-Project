const output = (dogs) => {
    let article = document.createElement("article");

    let img = document.createElement("img");
    img.setAttribute("src", dogs.message);

    article.appendChild(img);

    document.querySelector("#dogs").appendChild(article);
  };

// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
const getDogs = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random"
    );
    Dogs = await response.json();
    output(Dogs);
  };
  getDogs();
