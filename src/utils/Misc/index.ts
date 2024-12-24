
export function capitalizeFirstLetter(string) {
  return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export const getParagraphs = (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const paragraphs = doc.querySelectorAll("p");

  for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];
    const textContent = paragraph.textContent.trim();

    // check if the textContent is not empty
    if (textContent !== "") {
      // return the text content of the first <p> with text
      return textContent;
    }
  }

  // if no non-empty <p> was found, return an empty string
  return "";
};

// Make a random id for the image URL
export const makeid = (length: number) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var characterLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
