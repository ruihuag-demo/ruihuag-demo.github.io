# 自适应iframe高度

* 使用iframe嵌入页面很方便，但必须在父页面指定iframe的高度。如果iframe页面内容的高度超过了指定高度，会出现滚动条，很难看。

我们假设父页面是index.html，要嵌入到iframe的子页面是target.html，在父页面中，先向页面添加一个iframe：

```js
const iframe1 = document.createElement('iframe');
iframe1.src = 'target.html';
iframe1.onload = autoResize;
document.getElementById('sameDomain').appendChild(iframe1);
```

* 当iframe载入完成后，触发onload事件，然后自动调用autoResize()函数：

```js
function autoResize(event) {
    // 获取iframe元素:
    const iframeEle = event.target;
    // 创建一个ResizeObserver:
    const resizeRo = new ResizeObserver((entries) => {
        let entry = entries[0];
        let height = entry.contentRect.height;
        iframeEle.style.height = height + 'px';
    });
    // 开始监控iframe的body元素:
    resizeRo.observe(iframeEle.contentWindow.document.body);
}
```

通过创建ResizeObserver，我们就可以在iframe的body元素大小更改时获得回调，在回调函数中对iframe设置一个新的高度，就完成了iframe的自适应高度。

跨域问题
ResizeObserver很好地解决了iframe的监控，但是，当我们引入跨域的iframe时，上述代码就失效了，原因是浏览器阻止了跨域获取iframe的body元素。

要解决跨域的iframe自适应高度问题，我们需要使用postMessage机制，让iframe页面向父页面主动报告自身高度。

假定父页面仍然是index.html，要嵌入到iframe的子页面是<http://xyz/cross.html，在父页面中，先向页面添加一个跨域的iframe：>

```js
const iframe2 = document.createElement('iframe');
iframe2.src = '<http://xyz/cross.html>';
iframe2.onload = autoResize;
document.getElementById('crossDomain').appendChild(iframe2);
```

* 在cross.html页面中，如何获取自身高度？

* 我们需要现代浏览器引入的一个新的MutationObserver API，它允许监控任意DOM树的修改。

* 在cross.html页面中，使用以下代码监控body元素的修改（包括子元素）：

```js
// 创建MutationObserver:
const domMo = new MutationObserver(() => {
    // 获取body的高度:
    let currentHeight = body.scrollHeight;
    // 向父页面发消息:
    parent.postMessage({
        type: 'resize',
        height: currentHeight
    }, '*');
});
// 开始监控body元素的修改:
domMo.observe(body, {
    attributes: true,
    childList: true,
    subtree: true
});
```

当iframe页面的body有变化时，回调函数通过postMessage向父页面发送消息，消息内容是自定义的。在父页面中，我们给window添加一个message事件监听器，即可收取来自iframe页面的消息，然后自动更新iframe高度：

```js
window.addEventListener('message', function (event) {
    let eventData = event.data;
    if (eventData && eventData.type === 'resize') {
        iframeEle.style.height = eventData.height + 'px';
    }
}, false);
```

使用现代浏览器提供的ResizeObserver和MutationObserver API，我们就能轻松实现iframe的自适应高度。
