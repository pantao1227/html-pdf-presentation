output/output.pdf: main.html
	mkdir -p output
	google-chrome --headless --disable-gpu --print-to-pdf=output/out.pdf main.html

new:
	cp Template.html main.html

clean:
	rm output/out.pdf