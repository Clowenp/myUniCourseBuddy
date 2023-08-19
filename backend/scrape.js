const pt = require(puppeteer)
pt.launch().then(async browser => {
    pt.launch()
    const p = await browser.newPage();
    await p.goto('https://ucalendar.uwaterloo.ca/2324/COURSE/course-CO.html')

    const courses = await p.$$('.divTable')
    // console.log(courses)

    for(const codes of courses) {
        console.log(codes.innerHTML)
        const title = await p.evaluate(el => el.querySelector("strong").textContent, codes)
        console.log(title)

    }

    await browser.close()
})
