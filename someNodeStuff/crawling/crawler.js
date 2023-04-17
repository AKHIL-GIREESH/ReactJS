const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const main = async () => {
    const resp = await fetch("https://fisat.ac.in/");
    const respHTML = await resp.text()
    const respHTMLArray = respHTML.split("</marquee>")
    console.log(respHTMLArray[0])
}





main()