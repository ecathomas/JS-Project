const output = (dogs) => {
    let article = document.createElement("article");

    let img = document.createElement("img");
    img.setAttribute("src", dogs.message);

    article.appendChild(img);

    document.querySelector("#dogs").appendChild(article);
  };

const getDogs = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random"
    );
    Dogs = await response.json();
    output(Dogs);
  };
  getDogs();
