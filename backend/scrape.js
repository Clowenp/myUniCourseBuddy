const connectDB = require('./config/db.js')
const Course = require('./models/courseModel.js')
const CourseSections = require('./models/courseSectionsModel.js')

connectDB()

function scrape(prefix) {
    const pt = require('puppeteer');

    pt.launch().then(async browser => {
    const p = await browser.newPage();
    await p.goto('https://ucalendar.uwaterloo.ca/2324/COURSE/course-' + prefix + '.html')

    const courses = await p.$$('.divTable')
    // console.log(courses)

    for(const codes of courses) {
        const title = await p.evaluate(el => el.querySelector("strong").textContent, codes)
        const tag = title.substring(prefix.length + 1, prefix.length + 4)
        //console.log(prefix + tag)
        //const desc = await p.evaluate(el => el.querySelector("div > div:nth-child(3) > strong").textContent, codes)
        // console.log(title.substring(0, prefix.length+4))
        // console.log(desc)

        //const newObject = {"name": title.substring(0, prefix.length+4), "description": desc}
        // await Course.create(newObject)
        //console.log(newObject)
        scrapeSections(prefix, tag)

    }


    await browser.close()
})

}

//scrapeSections("CO")
//scrape("CO")
// scrape("STAT")
