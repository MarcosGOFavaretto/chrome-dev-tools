var stringOfXs = [];
const TEN_THOUSAND = 10000;
const ONE_MILION = 1000000;

function populateMemory() {
    for (var i = 0; i < TEN_THOUSAND; i++) {
        document.body.appendChild(document.createElement('div'));
    }

    stringOfXs.push(new Array(ONE_MILION).join('x'));
}

document.getElementById('populateMemory').addEventListener('click', populateMemory);