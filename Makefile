CLI = ./cli/devicescript

all: em comp

comp:
	yarn build

comp-fast cf:
	yarn build-fast

native native1 em:
	$(MAKE) -C runtime $@

test-c: native comp-fast
	$(CLI) crun devs/run-tests/all.ts

test-em: em comp-fast
	yarn test

test: test-c ac test-em

vscode-pkg:
	cd vscode && yarn package

clean:
	rm -rf built interop/built compiler/built compiler/src/prelude.ts cli/built dap/built vscode/built
	$(MAKE) -C runtime clean

full-clean: clean
	rm -rf node_modules compiler/node_modules runtime/*/node_modules

check:
	$(MAKE) clean
	$(MAKE) docker
	$(MAKE) all
	$(MAKE) test

bytecode-gen-ci: bc
	git add bytecode/bytecode.md
	git add compiler/src/bytecode.ts
	git add runtime/devicescript/devs_bytecode.h

bc:
	cd bytecode && ./run.sh
	node runtime/scripts/ds-builtin-proto.js \
		runtime/devicescript/devs_bytecode.h \
		runtime/devicescript/impl_*.c
	clang-format -i runtime/devicescript/protogen.c

regen: bc
	$(CLI) ctool --server-info
	$(CLI) dcfg runtime/boards/native/native.board.json --update runtime/posix/native_cfg.c
	clang-format -i runtime/posix/native_cfg.c
	$(CLI) dcfg runtime/boards/wasm/wasm.board.json --update runtime/posix/wasm_cfg.c
	clang-format -i runtime/posix/wasm_cfg.c
	cd ./dcfg && ./regen.sh
	yarn boards
	yarn hwdocs

specs spec:
	$(MAKE) -C runtime/jacdac-c/jacdac

docker:
	$(MAKE) clean
	docker run -v `pwd`:/src -w /src  library/gcc make native
	$(MAKE) clean

empty:
	$(MAKE) bc comp-fast
	devs ctool --empty

bump:
	node scripts/bump.mjs

release:
	node scripts/bump.mjs --cloud

gdb gdb-dap gd:
	lldb runtime/built/jdcli -- -n -X 8082

gdb-run gr:
	lldb runtime/built/jdcli -- -n -X .devicescript/bin/crun.devs

ac:
	$(CLI) build -F allFunctions -F allPrototypes devs/run-tests/allcompile.ts
	$(CLI) snippets