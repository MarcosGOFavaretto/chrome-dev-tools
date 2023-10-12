var detachedNode;
const TEN = 10;

function createDetachedNodes() {

    var ul = document.createElement('ul');

    for (var i = 0; i < TEN; i++) {
        var il = document.createElement('il');
        ul.appendChild(il);
    }

    detachedNode = ul;
}

document.getElementById('createDetachedNodes').addEventListener('click', createDetachedNodes);