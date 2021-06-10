这是我参与更文挑战的第`10`天，活动详情查看：[更文挑战](https://juejin.cn/post/6967194882926444557)

前段时间苹果发布了新一代的`imac`，并带着`itag`出示了。
浏览了一下官网，看到这个效果。

![apple.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f3a486a1c7574dc7a77e45d77fa4391e~tplv-k3u1fbpfcp-watermark.image)

🚀好炫酷，好漂亮。要是我做出来是不是也可以变得炫酷一些。

## 观察

我们先一起看看苹果官网，是怎么实现这段效果的。

``` html
<span class="colors-headline-part"> 
    <span>这里@</span><span class="visuallyhidden">
    [绿色、黄色、橙色、粉色、紫色、蓝色、银色、颜色]控。
    </span>
    <span class="type-colors" aria-hidden="true" 
    data-component-list="HueSlide" 
    data-start="a0b - 80vh" data-duration="0.3" 
    data-stagger="[0.4, 0.7]" data-ease-function="easeOutQuad">
    <span class="type-color type-color-green js-will-change" 
    data-hue-anim="" style="transform: matrix(1, 0, 0, 1, 0, -91); opacity: 0;">
    绿色</span>
    <span class="type-color type-color-yellow js-will-change" 
    data-hue-anim="" style="transform: matrix(1, 0, 0, 1, 0, -91); opacity: 0;">
    黄色</span>
    <span class="type-color type-color-orange js-will-change" 
    data-hue-anim="" style="transform: matrix(1, 0, 0, 1, 0, -91); opacity: 0;">
    橙色</span>
    <span class="type-color type-color-pink js-will-change" 
    data-hue-anim="" style="transform: matrix(1, 0, 0, 1, 0, -91); opacity: 0;">
    粉色</span>
    <span class="type-color type-color-purple js-will-change" 
    data-hue-anim="" style="transform: matrix(1, 0, 0, 1, 0, -91); opacity: 0;">
    紫色</span>
    <span class="type-color type-color-blue js-will-change" 
    data-hue-anim="" style="transform: matrix(1, 0, 0, 1, 0, -91); opacity: 0;">
    蓝色</span>
    <span class="type-color type-color-silver js-will-change" 
    data-hue-anim="" style="transform: matrix(1, 0, 0, 1, 0, -91); opacity: 0;">
    银色</span>
    <span class="type-color type-color-hue js-will-change" 
    data-hue-anim="" 
    data-shift-anim="" 
    style="transform: matrix(1, 0, 0, 1, 0, 0); opacity: 1; background-position: -256px 50%;">
    颜色</span>控。
    </span>
</span>
```

这是效果执行结束之后的`html`代码，可以看到：

1. 用了`transform`这个`css`属性来改变文字的位置。
2. `js-will-change`来优化动画效果
3. 最后一个颜色文字用背景色的位置的改变来实现颜色变化的效果

再看看`css`怎么写的，下面是一些比较重要的`css`

``` css
html.enhance-xp .section-colors .colors-headline .type-colors .type-color:first-child {
    position: relative;
    transform: translateY(0);
}

html.enhance-xp 
.section-colors .colors-headline 
.type-colors .type-color:not(:first-child) {
    left: 0;
    position: absolute;
    opacity: 0;
    transform: translateY(100%);
}

.section-colors .colors-headline .type-colors .type-color-hue.js-will-change {
    will-change: transform, background-position;
}

.type-colors .type-color-hue {
    background-size: 300% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    /* text-fill-color: transparent; */
    background-image: linear-gradient(120deg, var(--silver-text) 0%, var(--green-text) 40%, var(--yellow-text) 65%, var(--orange-text) 73%, var(--pink-text) 82%, var(--purple-text) 93%, var(--purple-text) 100%);
    background-position: 100% 50%;
}

:root {
    --enhanced-xp-css-token: 'enhance-xp';
    --pink: #b72c31;
    --orange: #e36942;
    --yellow: #d48207;
    --green: #10505b;
    --blue: #25476d;
    --purple: #353a71;
    --silver: #c7c8ca;
    --pink-light: #eeb8b0;
    --orange-light: #e9aa95;
    --yellow-light: #eaca96;
    --green-light: #a4beb2;
    --blue-light: #a8bed2;
    --purple-light: #abacca;
    --pink-text: #b62c31;
    --orange-text: #ef5602;
    --yellow-text: #c98000;
    --green-text: #006e82;
    --blue-text: #26476d;
    --purple-text: #4f5381;
    --silver-text: #a1a1a6;
    --background: #fafafa;
    --env-mask: #dcf3ea;
    --specs-env-background: #f6f6ee;
    --enhanced-media-query: "(min-height: 500px) and (max-height: 1500px)";
    --r-localnav-height: 50px;
}
```

css主要做了下面几点：

1. 定义第一个元素和后面元素的起始位置，后续添加动画改变位置
2. `will-change`优化动画性能
3. 最后的文字颜色的背景色
4. 用了`css`变量来定义各个颜色
5. 动画效果（这部分我们自己尝试实现）

剩下的就是我们的`js`了，它主要做了哪些呢？从效果来看，`style`上的`css`明显是`js`的操作。

## 思考并实现

我们先照搬`html`代码，先把架子搭好。主要就是各个颜色的文字与布局。

``` html
<div class="apple">
    <div class="colors-headline-part">七彩来袭，</div>
    <span>这里@</span>
    <span class="type-colors" aria-hidden="true">
        <span class="type-color type-color-green ">绿色</span>
        <span class="type-color type-color-yellow ">黄色</span>
        <span class="type-color type-color-orange ">橙色</span>
        <span class="type-color type-color-pink ">粉色</span>
        <span class="type-color type-color-purple ">紫色</span>
        <span class="type-color type-color-blue ">蓝色</span>
        <span class="type-color type-color-silver ">银色</span>
        <span class="type-color type-color-hue ">颜色</span>控。
    </span>
</div>
```

接着把文字颜色给上对应的`class`，除了第一个绿色，其余都是不显示的，照着上面的代码写，文字位置设置在底部。

``` css
.type-colors .type-color-green {
    color: var(--green-text);
}

.type-colors .type-color-yellow {
    color: var(--yellow-text);
}

.type-colors .type-color-orange {
    color: var(--orange-text);
}

.type-colors .type-color-pink {
    color: var(--pink-text);
}

.type-colors .type-color-purple {
    color: var(--purple-text);
}

.type-colors .type-color-blue {
    color: var(--blue-text);
}

.type-colors .type-color-silver {
    color: var(--silver-text);
}

.type-colors .type-color-hue {
    color: var(--hue-text);
}

.type-colors .type-color-hue {
    background-size: 300% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    /* text-fill-color: transparent; */
    background-image: linear-gradient(120deg, var(--silver-text) 0%, var(--green-text) 40%, var(--yellow-text) 65%, var(--orange-text) 73%, var(--pink-text) 82%, var(--purple-text) 93%, var(--purple-text) 100%);
    background-position: 100% 50%;
}
```

接着是动画，`colorchange`是用来控制除了最后一个的其余颜色的动画。中间30%-70%为了让其有一个停顿效果，所以不用做变化。

`colorshiftchange`是最后一个颜色的动画并不需要消失，所以单独列出来。
(apple官网和我的实现方式并不一样，应该是用`js`去控制了`style`的属性。不过没关系，我们用`css`也可以实现效果差不多的。)

`backposition`也是最后一个颜色的背景色变化，这个只要改变`background-position`就可以了。

`colorshiftchange`和`backposition`这两个动画是顺序执行的，可以写在一起。

``` css
@keyframes colorchange {
    0% {
        transform: matrix(1, 0, 0, 1, 0, 91); opacity: 0;
    }

    30% {
        transform: matrix(1, 0, 0, 1, 0, 0); opacity: 1;
    }

    70% {
        transform: matrix(1, 0, 0, 1, 0, 0); opacity: 1;
    }

    100% {
        transform: matrix(1, 0, 0, 1, 0, -91); opacity: 0;
    }
}

@keyframes colorshiftchange {
    0% {
        transform: matrix(1, 0, 0, 1, 0, 91); opacity: 0;
    }

    100% {
        transform: matrix(1, 0, 0, 1, 0, 0); opacity: 1;
    }
}

@keyframes backposition {
    0% {
        background-position: 0 50%;
    }

    100% {
        background-position: 100% 50%;
    }
    
}

.data-hue-anim {
    animation: colorchange 1s linear;
}


.type-colors .type-color.data-shift-anim {
    transform: translateY(0);
    opacity: 1;
    animation: 0.3s linear colorshiftchange , 2s ease-out 0.1s backposition;
}
```

这样的话，我们所有文字都会动起来了。但是需要我们给它们动态加上class，如果直接加上去会发现它们一起动了，我们需要它们一个接着一个动。所以可以用js给它们挨个加上class。

``` js
let nodes = document.getElementsByClassName('type-color');
let len = nodes.length;
for(let i = 0; i < len - 1; i++) {
    console.log(nodes[i]);
    setTimeout(() => {
        nodes[i].className += 'data-hue-anim ';
    }, i * 800);
}

let lastnode = document.getElementsByClassName('type-color-hue')[0];
setTimeout(() => {
    lastnode.className += 'data-shift-anim ';
}, 5600); // 最后一个在全部执行完毕后再执行
```

至此我们就做好了，仿了一个apple官网的效果。来看看效果。

![myapple.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef36e0127ad54773887a2e17bf60a22c~tplv-k3u1fbpfcp-watermark.image)

🚀完成了一个炫酷的效果，但自己好像并没有变得炫酷。
