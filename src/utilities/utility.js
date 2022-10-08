export const getShortenURl = async (url) => {
  try {
    let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, {
      method: "GET",
    });

    return await response.json();
  } catch (error) {
    console.log(error);
    throw new Error("Some Error In url");
  }
};

export const getPrevURl = () => {
  return localStorage.getItem("shortly");
};

export const pushUrl = (url, shorturl) => {
  //   var a = [];
  //   a.push(JSON.parse(localStorage.getItem("shortly")));
  //   localStorage.setItem("shortly", JSON.stringify(a));
  var prevurls = [];
  prevurls = JSON.parse(localStorage.getItem("shortly")) || [];
  prevurls.push({ url, shorturl });

  localStorage.setItem("shortly", JSON.stringify(prevurls));
};
