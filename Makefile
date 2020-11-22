WORK_DIR = work-$(shell date "+%Y%m%d%H%M%S")

$(WORK_DIR):
	mkdir $(WORK_DIR)
	cp -r css js $(WORK_DIR)
	cp Template.html $(WORK_DIR)/main.html
	cp Makefile.txt $(WORK_DIR)/Makefile
