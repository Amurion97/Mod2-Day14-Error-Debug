try {
    let a = "";
    if (a.length <= 1) {
        throw "A is supid"
    }
    console.log("Blah")
} catch (e) {
    console.log(e)
}

for (let i = 0; i < 10; i++) {
    console.log("Bytt" + i)
}