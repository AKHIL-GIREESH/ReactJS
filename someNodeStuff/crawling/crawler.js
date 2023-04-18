const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const main = async () => {
    const resp = await fetch("https://fisat.ac.in/");
    const respHTML = await resp.text()
    const dom = new JSDOM(respHTML)
    dom.window.document.querySelectorAll("marquee").forEach(item => console.log(item.innerHTML))
    // const respHTMLArrayOpening = respHTML.split(`<marquee behavior="scroll" direction="left" scrollamount="8" loop="infinite" onmouseover="this.stop()" onmouseout="this.start()">`)
    // const respHTMLArrayClosing = respHTML.split("</marquee>")

    // console.log(respHTMLArrayOpening[0].length)
    // console.log(respHTMLArrayClosing[0].length)

    // console.log(respHTMLArrayClosing[0].substring(respHTMLArrayOpening[0].length+`<marquee behavior="scroll" direction="left" scrollamount="8" loop="infinite" onmouseover="this.stop()" onmouseout="this.start()">`.length))
}





main()