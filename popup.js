/*
MIT License

Copyright (c) 2024 zawataku

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


// popupとの通信処理ここから
document.getElementById("goukaku").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: goukaku,
    });
});

document.getElementById("not_goukaku").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: not_goukaku,
    });
});

document.getElementById("random").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: random,
    });
});

document.getElementById("gaming").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: gaming,
    });
});
//ここまで

//色の変更処理ここから
function goukaku() {
    let elements = document.querySelectorAll('[class^="kmkLine"]'); //"kmkLine"に一致するクエリを取得
    elements.forEach(element => {
        element.style.backgroundColor = "#0099FF"; // background-color: #0099FF を適用
    });
}

function not_goukaku() {
    let elements = document.querySelectorAll('[class^="kmkLine"]'); //"kmkLine"に一致するクエリを取得
    elements.forEach(element => {
        element.style.backgroundColor = "#FF9999"; // background-color: #FF9999 を適用
    });
}

function random() {
    let elements = document.querySelectorAll('[class^="kmkLine"]'); //"kmkLine"に一致するクエリを取得
    elements.forEach(element => {
        let randomNum = Math.random(); // 乱数発生
        if (randomNum < 0.5) {
            element.style.backgroundColor = "#0099FF"; // background-color: #0099FF を適用
        } else {
            element.style.backgroundColor = "FF9999"; // background-color: #FF9999 を適用
        }
    });
}

function gaming() {
    let elements = document.querySelectorAll('[class^="kmkLine"]');
    elements.forEach(element => {
        element.classList.add("gaming"); // "kmkLine"に"gaming"クラスを付与
    });
}

