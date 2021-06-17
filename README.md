# HTML 制作演示文档

一个演示文档，一般包括：

- 首页
- 内容页（标题 + 内容）
- 结束页

可以发现，内容页的样式都是一致的，包括：

- 页眉
- 标题
- 内容
- 页脚

这四项垂直排列。内容一般分栏，水平排列。使用 HTML + CSS 可以描述样式。

## 布局

同时预设所有边距为0，利用 CSS `@page` 设置打印尺寸，margin 设为0.

`flex` 布局，一个水平flex，一个垂直flex，就可以解决绝大部分的布局。因此定义了标签`section-f`, `flex-v`, `flex-h`。其中`section-f`用于定义打印大小的页面。

## 图片

图片的要求是：尽可能大而不变形，因此利用`background`属性可以实现。因此定义了标签 `img-c` 居中显示图片。

## 页脚

在需要使用页脚的页面插入空白的 `<footer></footer>`，其内容填充完全由 js 完成。

## 页眉

应该与页脚类似，使用 header 标签，但是我做 PPT 很少使用页眉，因此先不实现。

## 生成 PDF

使用 Google-Chrome 打印（chromium 也可以），得到横向 A4 大小的文档。

```shell
google-chrome --headless --disable-gpu --print-to-pdf=out.pdf index.html --print-to-pdf-no-header
```

Windows 下 chrome 需要额外添加 `--enable-logging` 才能正常使用 headless 模式。

使用 Python 提供跨平台支持。
