#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int add_two_num(int a, int b) { return a + b; };

EMSCRIPTEN_KEEPALIVE
int minus_two_num(int a, int b) { return a - b; };
