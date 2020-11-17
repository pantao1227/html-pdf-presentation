default:
	google-chrome --headless --disable-gpu --print-to-pdf=output/out.pdf main.html

clean:
	rm output/out.pdf