document.addEventListener("DOMContentLoaded", function () {
    const nodes = [];

    const traverseDOM = (node) => {
        // Проверяем, что узел является элементом и видим
        if (node.nodeType === Node.ELEMENT_NODE && node.style.display !== "none") {
            nodes.push(node);
        }
        node.childNodes.forEach(child => traverseDOM(child));
    };

    traverseDOM(document.body);

    let currentIndex = 0;

    const showNode = (index) => {
        const node = nodes[index];
        if (!node) return;

        const message = `Зміст: ${node.nodeType === Node.TEXT_NODE ? node.nodeValue.trim() : node.outerHTML}`;
        const question = index === nodes.length - 1 ? "Кінець. Вийти?" : "Перейти до наступного вузла?";

        const action = confirm(`${message}\n${question}`);

        if (action) {
            if (index < nodes.length - 1) {
                currentIndex++;
                showNode(currentIndex);
            } else {
                alert("Ви вийшли з навігації.");
            }
        } else {
            if (index > 0) {
                currentIndex--;
                showNode(currentIndex);
            } else {
                alert("Ви вийшли з навігації.");
            }
        }
    };

    // Начало навигации с первого узла
    showNode(currentIndex);
});
