
all: prepare build

prepare: clean
	cp -R web bin\

clean:
	rm -rf bin

build:
	java -jar tools/build/SoyToJsSrcCompiler.jar --outputPathFormat bin/assets/javascripts/templates/tradebook.template.js templates/*.soy
	@echo "build finished"
