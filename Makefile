export PATH := $(shell pwd)/node_modules/.bin:$(PATH)
.PHONY: init dev  build clean api

# 项目初始化
init:
	# git submodule init
	# git submodule update
	yarn

# 开发模式
dev:init
	yarn start

build:clean
	yarn
	npm run build

clean:
	rm -rf dist
