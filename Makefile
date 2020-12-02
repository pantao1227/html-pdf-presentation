CHROME = google-chrome-stable

.PHONY: clean

pdf: main.html
	mkdir -p output
	$(CHROME) --headless --print-to-pdf=output/out.pdf main.html

clean:
	rm -rf output
