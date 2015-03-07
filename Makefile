NODE_BIN = node_modules/.bin
SRC_DIR = react

install:
	npm install

build:
	$(NODE_BIN)/browserify -t babelify | $(NODE_BIN)/uglifyjs -mc > $(SRC_DIR)/bundle.js

watch:
	$(NODE_BIN)/watchify $(SRC_DIR)/index.js -t babelify -o $(SRC_DIR)/bundle.js -dv

clean:
	rm -f $(STATIC_DIR)/*.js

.PHONY: install build watch clean
