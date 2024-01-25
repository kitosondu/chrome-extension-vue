(function () {
    const id = `app-container-${chrome.runtime.id}`;
    let container = document.getElementById(id);
    if (!container) {
        container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.left = `-${Number.MAX_SAFE_INTEGER}px`;
        container.setAttribute('id', id);
        document.body.appendChild(container);
    }

    const shadowRoot = container.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
        <style>
            #container {
                position: fixed;
                top: 30px;
                right: 30px;
                width: 300px;
                height: 300px;
                background-color: #fff;
                box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15),
                    0 5px 10px rgba(0, 0, 0, 0.05);
                display: flex;
                flex-direction: column;
                z-index: 9999999;
                border-radius: 5px;
            }
            #close-btn {
                width: 30px;
                height: 30px;
                margin-left: auto;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 5px;
                background-color: #ebebeb;
                color: #555;
                position: absolute;
                top: -15px;
                right: -15px;
            }
            #close-btn:hover {
                background-color: #dedede;
                color: #222;
            }
            iframe {
                width: 100%;
                height: 100%;
                border: none;
            }
        </style>

        <div id="container">
            <div id="close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
            </div>
            <iframe src="${chrome.runtime.getURL('/content.html')}"></iframe>
        </div>
    `;

    // remove the content app when the close button is clicked
    // (an alternative would be to call chrome.runtime.sendMessage({ message: 'close_content_app' })
    // from the iframe content)
    const closeButton = shadowRoot.getElementById('close-btn');
    closeButton.addEventListener('click', () => {
        container.remove();
    });

    // this sets focus to the iframe content which allows to use keyboard shortcuts,
    // for example Escape to close the app container
    setTimeout(function () {
        shadowRoot.querySelector('iframe').contentWindow.focus();
    }, 100);

})();

