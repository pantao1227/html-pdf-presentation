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

每一个页面，用一个固定高度的 `div` 描述，同时预设所有边距为0，利用 CSS `@page` 设置打印尺寸，margin 设为0（下边距设为-1mm，因为即使设置 0 边距，打印后仍会由极细的下边距存在），使用 `break-after: always;` 设置分页。

使用 Google-Chrome 打印，得到横向 A4 大小的文档。

```shell
google-chrome --headless --disable-gpu --print-to-pdf=out.pdf index.html
```

Makefile:

```
output/output.pdf: main.html
	mkdir -p output
	google-chrome --headless --disable-gpu --print-to-pdf=output/out.pdf main.html
```