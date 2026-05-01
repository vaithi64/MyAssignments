
const browserName = "chrome"

function getBrowserName(){
    if(browserName === "chrome"){
        let browserName = "inside the function browser"
        console.log("inside the function:", browserName)
    }
    console.log("outside the function:", browserName)
}
getBrowserName()