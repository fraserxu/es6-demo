NODE_BIN = node_modules/.bin
SRC_DIR = react
STATIC_DIR = static

install:
	npm install

build:
	$(NODE_BIN)/browserify -t babelify | $(NODE_BIN)/uglifyjs -mc > $(STATIC_DIR)/bundle.min.js

watch:
	$(NODE_BIN)/watchify $(SRC_DIR)/index.js -t babelify -o $(STATIC_DIR)/bundle.js -dv

clean:
	rm -f $(STATIC_DIR)/*.js

.PHONY: install build watch clean
