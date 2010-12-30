if (!arguments[0]) {
    print('Usage:\n $ jsc beautifier.js -- "`cat parseme.js`"');
    quit();
}

load('./js/beautify.js');

print(js_beautify(arguments[0], {space_after_anon_function:true}));