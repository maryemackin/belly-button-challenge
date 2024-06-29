function init(){
    let selector = d3.select("#selDataset");

    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then(data => {
        console.log(data.names);
    })
}

init();