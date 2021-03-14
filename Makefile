CHROME = google-chrome-stable

ifndef $(HTML)
HTML=main1080p.html
endif

.PHONY: clean

pdf: $(HTML)
	mkdir -p output
	$(CHROME) --headless --print-to-pdf=output/out.pdf $(HTML)

clean:
	rm -rf output
