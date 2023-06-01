const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const getPostData = async () => {
  try {
    const { data } = await axios.get("https://scholarshipscafe.com/positions");
    const $ = cheerio.load(data);
    const postTitles = [];
    const postDates = [];
    const postCategories = [];
    const postValues = [];
    const postUrls = [];

    $("div.editor_text>h3").each((_idx, el) => {
      const postTitle = $(el).text();
      postTitles.push(postTitle);
    });

    $("div.job_dataRight>strong>span").each((_idx, el) => {
      const postDate = $(el).text();
      const cleanDate = postDate.split(": ")[1];
      postDates.push(cleanDate);
    });

    // $("div.category").each((_idx, el) => {
    //   const postCategory = $(el).text();

    //   postCategories.push(postCategory);
    // });

    // $(".card-footer > div.value").each((_idx, el) => {
    //   const postValue = $(el).text();
    //   postValues.push(postValue);
    // });

    $("a.position_click_btn").each((_idx, el) => {
      const postUrl = $(el).attr("href");
      postUrls.push(postUrl);
    });

    const postData = [];

    for (let i = 0; i < postTitles.length; i++) {
      const post = {
        // category: postCategories[i],
        title: postTitles[i],
        deadline: postDates[i].trim(),
        // amount: postValues[i],
        url: postUrls[i],
      };
      postData.push(post);
    }
    // console.log("hello", postDates);

    const filePath = path.join(__dirname, "scholarshipcafe.json");
    fs.writeFileSync(filePath, JSON.stringify(postData, null, 2));

    return postData;
  } catch (error) {
    throw error;
  }
};

getPostData().then(console.log);
