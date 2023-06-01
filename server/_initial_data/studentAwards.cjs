const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const getPostData = async () => {
  try {
    const { data } = await axios.get("https://studentawards.com/scholarships/");
    const $ = cheerio.load(data);
    const postTitles = [];
    const postDates = [];
    const postCategories = [];
    const postValues = [];
    const postUrls = [];

    $("div.title > a").each((_idx, el) => {
      const postTitle = $(el).text();
      postTitles.push(postTitle);
    });

    $("div.meta > div.value").each((_idx, el) => {
      const postDate = $(el).text();
      postDates.push(postDate);
    });

    $("div.category").each((_idx, el) => {
      const postCategory = $(el).text();
      postCategories.push(postCategory);
    });

    $(".card-footer > div.value").each((_idx, el) => {
      const postValue = $(el).text();
      postValues.push(postValue);
    });

    $(".card-footer > a").each((_idx, el) => {
      const postUrl = $(el).attr("href");
      postUrls.push(postUrl);
    });

    const postData = [];

    for (let i = 0; i < postTitles.length; i++) {
      const post = {
        category: postCategories[i],
        title: postTitles[i],
        deadline: postDates[i],
        amount: postValues[i],
        url: postUrls[i],
      };
      postData.push(post);
    }
    console.log(postDates);

    const filePath = path.join(__dirname, "studentAwards.json");
    fs.writeFileSync(filePath, JSON.stringify(postData, null, 2));

    return postData;
  } catch (error) {
    throw error;
  }
};

getPostData().then((postData) => console.log(postData));
