const rp = require("request-promise");
const cheerio = require("cheerio");
const url = "https://www.ebay.com/";

rp(url)
  .then(function (html) {
    //success!
    const $ = cheerio.load(html);

    const categoryLinks = $("div#vl-flyout-nav li:has(a + div + div) > a");

    const mappedData = [];

    categoryLinks.each((index, element) => {
      const linkText = $(element).text();
      const hrefValue = $(element).attr("href");
      console.log(`Link ${index + 1}: ${linkText} - ${hrefValue}`);
      mappedData.push({ name: linkText, href: hrefValue });
    });

    console.log(mappedData);
  })
  .catch(function (err) {
    //handle error
    console.log(err);
  });
