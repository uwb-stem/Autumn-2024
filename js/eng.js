import { createPresentationBox, readTextFile } from './structure.js'




function loadPresentations(json_data) {

    const content_block = document.getElementsByClassName("section");
    const sections = new Map();
    let idx = 0
    let presentations = json_data["presentations"];

    for (let i = 0; i < presentations.length; i++) {

        if (!sections.has(presentations[i].roomId)) {
            sections.set(presentations[i].roomId, idx)
            idx++
        }
        let room_num = presentations[i].roomId;

        let container_idx = sections.get(room_num);
        let container = content_block[container_idx]
        createPresentationBox(presentations[i], container, true);
    }
}


//let url = 'http://127.0.0.1:8080/api/division/eng';

//const response = await fetch(url);

//const json = await response.json();

let file_str = "./js/eng/eng.json";
let json_data = await readTextFile(file_str);
let json = JSON.parse(json_data)
loadPresentations(json);


//getJsonData(json);