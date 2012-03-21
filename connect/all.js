/*1332294637,169914235,JIT Construction: v526390,fr_FR*/
var FB;
if (!FB) {
    FB = {};
    (function () {
        function bagofholding() {};
        var __DEV__ = 0;

        function __d() {
            FB.__d.apply(FB, arguments);
        }
        var __e = __d;
        if (window.FB && !window.FB.copy)(function () {
            function a(b, c, d, e) {
                for (var f in c) if (d || typeof b[f] === 'undefined') b[f] = e ? e(c[f]) : c[f];
                return b;
            }
            a(window.FB, {
                _apiKey: null,
                _authResponse: null,
                _userStatus: 'unknown',
                _logging: true,
                _inCanvas: ((window.name.indexOf('iframe_canvas') > -1) || (window.name.indexOf('app_runner') > -1)),
                _https: (function () {
                    if (location.protocol == 'https:' && window == window.top) return true;
                    if (/iframe_canvas|app_runner/.test(window.name)) return window.name.indexOf('_fb_https') > -1;
                })(),
                onlyUseHttps: function () {
                    return FB._https === true;
                },
                onlyUseHttp: function () {
                    return FB._https === false && location.protocol == 'http:';
                },
                _domain: {
                    api: 'https://api.facebook.com/',
                    api_read: 'https://api-read.facebook.com/',
                    cdn: 'http://static.ak.fbcdn.net/',
                    https_cdn: 'https://s-static.ak.fbcdn.net/',
                    graph: 'https://graph.facebook.com/',
                    staticfb: 'http://static.ak.facebook.com/',
                    https_staticfb: 'https://s-static.ak.facebook.com/',
                    www: 'http://www.facebook.com/',
                    https_www: 'https://www.facebook.com/',
                    m: 'http://m.facebook.com/',
                    https_m: 'https://m.facebook.com/'
                },
                _locale: null,
                _localeIsRtl: false,
                getDomain: function (b, c) {
                    var d = !c && (window.location.protocol == 'https:' || FB._https);
                    switch (b) {
                    case 'api':
                        return FB._domain.api;
                    case 'api_read':
                        return FB._domain.api_read;
                    case 'cdn':
                        return d ? FB._domain.https_cdn : FB._domain.cdn;
                    case 'cdn_foreign':
                        return FB._domain.cdn_foreign;
                    case 'https_cdn':
                        return FB._domain.https_cdn;
                    case 'graph':
                        return FB._domain.graph;
                    case 'staticfb':
                        return d ? FB._domain.https_staticfb : FB._domain.staticfb;
                    case 'https_staticfb':
                        return FB._domain.https_staticfb;
                    case 'www':
                        return d ? FB._domain.https_www : FB._domain.www;
                    case 'https_www':
                        return FB._domain.https_www;
                    case 'm':
                        return d ? FB._domain.https_m : FB._domain.m;
                    case 'https_m':
                        return FB._domain.https_m;
                    }
                },
                copy: a,
                create: function (b, c) {
                    var d = window.FB,
                        e = b ? b.split('.') : [],
                        f = e.length;
                    for (var g = 0; g < f; g++) {
                        var h = e[g],
                            i = d[h];
                        if (!i) {
                            i = (c && g + 1 == f) ? c : {};
                            d[h] = i;
                        }
                        d = i;
                    }
                    return d;
                },
                provide: function (b, c, d) {
                    return FB.copy(typeof b == 'string' ? FB.create(b) : b, c, d);
                },
                guid: function () {
                    return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.', '');
                },
                log: function (b) {
                    if (FB._logging) if (window.Debug && window.Debug.writeln) {
                        window.Debug.writeln(b);
                    } else if (window.console) window.console.log(b);
                    if (FB.Event) FB.Event.fire('fb.log', b);
                },
                $: function (b) {
                    return document.getElementById(b);
                }
            });
        })();
        FB.provide('Array', {
            indexOf: function (a, b) {
                if (a.indexOf) return a.indexOf(b);
                var c = a.length;
                if (c) for (var d = 0; d < c; d++) if (a[d] === b) return d;
                return -1;
            },
            merge: function (a, b) {
                for (var c = 0; c < b.length; c++) if (FB.Array.indexOf(a, b[c]) < 0) a.push(b[c]);
                return a;
            },
            filter: function (a, b) {
                var c = [];
                for (var d = 0; d < a.length; d++) if (b(a[d])) c.push(a[d]);
                return c;
            },
            keys: function (a, b) {
                var c = [];
                for (var d in a) if (b || a.hasOwnProperty(d)) c.push(d);
                return c;
            },
            map: function (a, b) {
                var c = [];
                for (var d = 0; d < a.length; d++) c.push(b(a[d]));
                return c;
            },
            forEach: function (a, b, c) {
                if (!a) return;
                if (Object.prototype.toString.apply(a) === '[object Array]' || (!(a instanceof Function) && typeof a.length == 'number')) {
                    if (a.forEach) {
                        a.forEach(b);
                    } else for (var d = 0, e = a.length; d < e; d++) b(a[d], d, a);
                } else for (var f in a) if (c || a.hasOwnProperty(f)) b(a[f], f, a);
            },
            toArray: function (a) {
                for (var b = 0, c = [], d = a.length; b < d; b++) c[b] = a[b];
                return c;
            }
        });
        FB.provide('QS', {
            encode: function (a, b, c) {
                b = b === undefined ? '&' : b;
                c = c === false ?
                function (e) {
                    return e;
                } : encodeURIComponent;
                var d = [];
                FB.Array.forEach(a, function (e, f) {
                    if (e !== null && typeof e != 'undefined') d.push(c(f) + '=' + c(e));
                });
                d.sort();
                return d.join(b);
            },
            decode: function (a) {
                var b = decodeURIComponent,
                    c = {},
                    d = a.split('&'),
                    e, f;
                for (e = 0; e < d.length; e++) {
                    f = d[e].split('=', 2);
                    if (f && f[0]) c[b(f[0])] = b(f[1] || '');
                }
                return c;
            }
        });
        FB.provide('Content', {
            _root: null,
            _hiddenRoot: null,
            _callbacks: {},
            append: function (a, b) {
                if (!b) if (!FB.Content._root) {
                    FB.Content._root = b = FB.$('fb-root');
                    if (!b) {
                        FB.log('The "fb-root" div has not been created.');
                        return;
                    } else b.className += ' fb_reset';
                } else b = FB.Content._root;
                if (typeof a == 'string') {
                    var c = document.createElement('div');
                    b.appendChild(c).innerHTML = a;
                    return c;
                } else return b.appendChild(a);
            },
            appendHidden: function (a) {
                if (!FB.Content._hiddenRoot) {
                    var b = document.createElement('div'),
                        c = b.style;
                    c.position = 'absolute';
                    c.top = '-10000px';
                    c.width = c.height = 0;
                    FB.Content._hiddenRoot = FB.Content.append(b);
                }
                return FB.Content.append(a, FB.Content._hiddenRoot);
            },
            insertIframe: function (a) {
                a.id = a.id || FB.guid();
                a.name = a.name || FB.guid();
                var b = FB.guid(),
                    c = false,
                    d = false;
                FB.Content._callbacks[b] = function () {
                    if (c && !d) {
                        d = true;
                        a.onload && a.onload(a.root.firstChild);
                    }
                };
                if (document.attachEvent) {
                    var e = ('<iframe' + ' id="' + a.id + '"' + ' name="' + a.name + '"' + (a.title ? ' title="' + a.title + '"' : '') + (a.className ? ' class="' + a.className + '"' : '') + ' style="border:none;' + (a.width ? 'width:' + a.width + 'px;' : '') + (a.height ? 'height:' + a.height + 'px;' : '') + '"' + ' src="javascript:false;"' + ' frameborder="0"' + ' scrolling="no"' + ' allowtransparency="true"' + ' onload="FB.Content._callbacks.' + b + '()"' + '></iframe>');
                    a.root.innerHTML = '<iframe src="javascript:false"' + ' frameborder="0"' + ' scrolling="no"' + ' style="height:1px"></iframe>';
                    c = true;
                    window.setTimeout(function () {
                        a.root.innerHTML = e;
                        a.root.firstChild.src = a.url;
                        a.onInsert && a.onInsert(a.root.firstChild);
                    }, 0);
                } else {
                    var f = document.createElement('iframe');
                    f.id = a.id;
                    f.name = a.name;
                    f.onload = FB.Content._callbacks[b];
                    f.scrolling = 'no';
                    f.style.border = 'none';
                    f.style.overflow = 'hidden';
                    if (a.title) f.title = a.title;
                    if (a.className) f.className = a.className;
                    if (a.height) f.style.height = a.height + 'px';
                    if (a.width) if (a.width == '100%') {
                        f.style.width = a.width;
                    } else f.style.width = a.width + 'px';
                    a.root.appendChild(f);
                    c = true;
                    f.src = a.url;
                    a.onInsert && a.onInsert(f);
                }
            },
            submitToTarget: function (a, b) {
                var c = document.createElement('form');
                c.action = a.url;
                c.target = a.target;
                c.method = (b) ? 'GET' : 'POST';
                FB.Content.appendHidden(c);
                FB.Array.forEach(a.params, function (d, e) {
                    if (d !== null && d !== undefined) {
                        var f = document.createElement('input');
                        f.name = e;
                        f.value = d;
                        c.appendChild(f);
                    }
                });
                c.submit();
                c.parentNode.removeChild(c);
            }
        });
        FB.provide('Flash', {
            _minVersions: [
                [9, 0, 159, 0],
                [10, 0, 22, 87]
            ],
            _swfPath: 'swf/XdComm.swf',
            _callbacks: [],
            _names: {},
            _unloadRegistered: false,
            init: function () {
                if (FB.Flash._init) return;
                FB.Flash._init = true;
                window.FB_OnFlashXdCommReady = function () {
                    FB.Flash._ready = true;
                    for (var a = 0, b = FB.Flash._callbacks.length; a < b; a++) FB.Flash._callbacks[a]();
                    FB.Flash._callbacks = [];
                };
                FB.Flash.embedSWF('XdComm', FB.getDomain('cdn_foreign') + FB.Flash._swfPath);
            },
            embedSWF: function (a, b, c) {
                var d = !! document.attachEvent,
                    e = ('<object ' + 'type="application/x-shockwave-flash" ' + 'id="' + a + '" ' + (c ? 'flashvars="' + c + '" ' : '') + (d ? 'name="' + a + '" ' : '') + (d ? '' : 'data="' + b + '" ') + (d ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ' : '') + 'allowscriptaccess="always">' + '<param name="movie" value="' + b + '"></param>' + '<param name="allowscriptaccess" value="always"></param>' + '</object>');
                FB.Content.appendHidden(e);
                if (FB.UA.ie() >= 9) {
                    if (!FB.Flash._unloadRegistered) {
                        var f = function () {
                                FB.Array.forEach(FB.Flash._names, function (g, h) {
                                    var i = document.getElementById(h);
                                    if (i) i.removeNode(true);
                                });
                            };
                        window.attachEvent('onunload', f);
                        FB.Flash._unloadRegistered = true;
                    }
                    FB.Flash._names[a] = true;
                }
            },
            hasMinVersion: function () {
                try {
                    if (typeof FB.Flash._hasMinVersion === 'undefined') {
                        var b, c, d, e = [];
                        try {
                            b = new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version');
                        } catch (f) {
                            if (navigator.mimeTypes.length > 0) {
                                var g = 'application/x-shockwave-flash';
                                if (navigator.mimeTypes[g] && navigator.mimeTypes[g].enabledPlugin) {
                                    var h = 'Shockwave Flash';
                                    b = (navigator.plugins[h + ' 2.0'] || navigator.plugins[h]).description;
                                }
                            }
                        }
                        if (b) {
                            var i = b.replace(/\D+/g, ',').match(/^,?(.+),?$/)[1].split(',');
                            for (c = 0, d = i.length; c < d; c++) e.push(parseInt(i[c], 10));
                        }
                        FB.Flash._hasMinVersion = false;
                        majorVersion: for (c = 0, d = FB.Flash._minVersions.length; c < d; c++) {
                            var j = FB.Flash._minVersions[c];
                            if (j[0] != e[0]) continue;
                            for (var k = 1, l = j.length, m = e.length;
                            (k < l && k < m); k++) if (e[k] < j[k]) {
                                FB.Flash._hasMinVersion = false;
                                continue majorVersion;
                            } else {
                                FB.Flash._hasMinVersion = true;
                                if (e[k] > j[k]) break majorVersion;
                            }
                        };
                    }
                } catch (a) {
                    FB.Flash._hasMinVersion = false;
                }
                return FB.Flash._hasMinVersion;
            },
            onReady: function (a) {
                FB.Flash.init();
                if (FB.Flash._ready) {
                    window.setTimeout(a, 0);
                } else FB.Flash._callbacks.push(a);
            }
        });
        if (!window.JSON) window.JSON = {};
        (function () {
            function f(n) {
                return n < 10 ? '0' + n : n;
            }
            if (typeof Date.prototype.toJSON !== 'function') {
                Date.prototype.toJSON = function (key) {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z' : null;
                };
                String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) {
                    return this.valueOf();
                };
            }
            var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                gap, indent, meta = {
                    '\b': '\\b',
                    '\t': '\\t',
                    '\n': '\\n',
                    '\f': '\\f',
                    '\r': '\\r',
                    '"': '\\"',
                    '\\': '\\\\'
                },
                rep;

            function quote(string) {
                escapable.lastIndex = 0;
                return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                    var c = meta[a];
                    return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                }) + '"' : '"' + string + '"';
            }
            function str(key, holder) {
                var i, k, v, length, mind = gap,
                    partial, value = holder[key];
                if (value && typeof value === 'object' && typeof value.toJSON === 'function') value = value.toJSON(key);
                if (typeof rep === 'function') value = rep.call(holder, key, value);
                switch (typeof value) {
                case 'string':
                    return quote(value);
                case 'number':
                    return isFinite(value) ? String(value) : 'null';
                case 'boolean':
                case 'null':
                    return String(value);
                case 'object':
                    if (!value) return 'null';
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === '[object Array]') {
                        length = value.length;
                        for (i = 0; i < length; i += 1) partial[i] = str(i, value) || 'null';
                        v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
                        gap = mind;
                        return v;
                    }
                    if (rep && typeof rep === 'object') {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            k = rep[i];
                            if (typeof k === 'string') {
                                v = str(k, value);
                                if (v) partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    } else for (k in value) if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) partial.push(quote(k) + (gap ? ': ' : ':') + v);
                    }
                    v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
                    gap = mind;
                    return v;
                }
            }
            if (typeof JSON.stringify !== 'function') JSON.stringify = function (value, replacer, space) {
                var i;
                gap = '';
                indent = '';
                if (typeof space === 'number') {
                    for (i = 0; i < space; i += 1) indent += ' ';
                } else if (typeof space === 'string') indent = space;
                rep = replacer;
                if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) throw new Error('JSON.stringify');
                return str('', {
                    '': value
                });
            };
            if (typeof JSON.parse !== 'function') JSON.parse = function (text, reviver) {
                var j;

                function walk(holder, key) {
                    var k, v, value = holder[key];
                    if (value && typeof value === 'object') for (k in value) if (Object.hasOwnProperty.call(value, k)) {
                        v = walk(value, k);
                        if (v !== undefined) {
                            value[k] = v;
                        } else delete value[k];
                    }
                    return reviver.call(holder, key, value);
                }
                cx.lastIndex = 0;
                if (cx.test(text)) text = text.replace(cx, function (a) {
                    return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
                if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                    j = eval('(' + text + ')');
                    return typeof reviver === 'function' ? walk({
                        '': j
                    }, '') : j;
                }
                throw new SyntaxError('JSON.parse');
            };
        }());
        FB.provide('JSON', {
            stringify: function (a) {
                if (window.Prototype && Object.toJSON) {
                    return Object.toJSON(a);
                } else return JSON.stringify(a);
            },
            parse: function (a) {
                return JSON.parse(a);
            },
            flatten: function (a) {
                var b = {};
                for (var c in a) if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    if (null === d || undefined === d) {
                        continue;
                    } else if (typeof d == 'string') {
                        b[c] = d;
                    } else b[c] = FB.JSON.stringify(d);
                }
                return b;
            }
        });
        FB.provide('', {
            api: function () {
                if (typeof arguments[0] === 'string') {
                    FB.ApiServer.graph.apply(FB.ApiServer, arguments);
                } else FB.ApiServer.rest.apply(FB.ApiServer, arguments);
            }
        });
        FB.provide('ApiServer', {
            METHODS: ['get', 'post', 'delete', 'put'],
            _callbacks: {},
            _readOnlyCalls: {
                fql_query: true,
                fql_multiquery: true,
                friends_get: true,
                notifications_get: true,
                stream_get: true,
                users_getinfo: true
            },
            graph: function () {
                var a = Array.prototype.slice.call(arguments),
                    b = a.shift().match(/\/?([^?]*)\??([^#]*)/),
                    c = b[1],
                    d = a.shift(),
                    e, f, g;
                while (d) {
                    var h = typeof d;
                    if (h === 'string' && !e) {
                        e = d.toLowerCase();
                    } else if (h === 'function' && !g) {
                        g = d;
                    } else if (h === 'object' && !f) {
                        f = d;
                    } else {
                        FB.log('Invalid argument passed to FB.api(): ' + d);
                        return;
                    }
                    d = a.shift();
                }
                e = e || 'get';
                f = FB.copy(f || {}, FB.QS.decode(b[2]));
                if (FB.Array.indexOf(FB.ApiServer.METHODS, e) < 0) {
                    FB.log('Invalid method passed to FB.api(): ' + e);
                    return;
                }
                FB.ApiServer.oauthRequest('graph', c, e, f, g);
            },
            rest: function (a, b) {
                var c = a.method.toLowerCase().replace('.', '_');
                if (FB.Auth && c === 'auth_revokeauthorization') {
                    var d = b;
                    b = function (f) {
                        if (f === true) FB.Auth.setAuthResponse(null, 'not_authorized');
                        d && d(f);
                    };
                }
                a.format = 'json-strings';
                a.api_key = FB._apiKey;
                var e = FB.ApiServer._readOnlyCalls[c] ? 'api_read' : 'api';
                FB.ApiServer.oauthRequest(e, 'restserver.php', 'get', a, b);
            },
            oauthRequest: function (a, b, c, d, e) {
                if (!d.access_token && FB.getAccessToken()) d.access_token = FB.getAccessToken();
                d.sdk = 'joey';
                d.pretty = 0;
                var f = e;
                e = function (j) {
                    if (FB.Auth && j && FB.getAccessToken() == d.access_token) if (j.error == 'invalid_token' || j.error_code == '190' || (j.error && j.error.type == 'OAuthException' && j.error.code == 190)) FB.getLoginStatus(null, true);
                    f && f(j);
                };
                d = FB.JSON.flatten(d);
                var g = {
                    jsonp: true,
                    cors: !FB.initSitevars.corsKillSwitch,
                    flash: FB.Flash.hasMinVersion()
                };
                if ('jsonp' in g) try {
                    FB.ApiServer.jsonp(a, b, c, d, e);
                    return;
                } catch (h) {}
                if ('cors' in g) try {
                    if (FB.ApiServer.corsPost(a, b, c, d, e)) return;
                } catch (i) {}
                if ('flash' in g) {
                    FB.ApiServer.flash(a, b, c, d, e);
                    return;
                }
                e({
                    error: 'no-transport'
                });
            },
            corsPost: function (a, b, c, d, e) {
                var f = FB.getDomain(a) + b;
                d = FB.copy({}, d);
                if (a == 'graph') d.method = c;
                var g = FB.QS.encode(d),
                    h = 'application/x-www-form-urlencoded',
                    i = FB.ApiServer._createCORSRequest('POST', f, h);
                if (i) {
                    if (e) {
                        i.onload = function (j) {
                            e(FB.JSON.parse(j.responseText));
                        };
                        i.onerror = function (j) {
                            e({
                                error: 'load-error: status ' + j.status
                            });
                        };
                    }
                    i.send(g);
                    return true;
                } else return false;
            },
            _createCORSRequest: function (a, b, c) {
                if (!window.XMLHttpRequest) return null;
                var d = new XMLHttpRequest();
                if ("withCredentials" in d) {
                    d.open(a, b, true);
                    d.setRequestHeader('Content-type', c);
                } else if (window.XDomainRequest) {
                    d = new XDomainRequest();
                    d.open(a, b);
                } else return null;
                var e = {
                    send: function (f) {
                        d.send(f);
                    }
                };
                d.onreadystatechange = function () {
                    if (d.readyState == 4) {
                        d.onreadystatechange = Function.prototype;
                        if (d.status == 200) {
                            if ('onload' in e) e.onload(d);
                        } else if ('onerror' in e) e.onerror(d);
                    }
                };
                return e;
            },
            jsonp: function (a, b, c, d, e) {
                var f = FB.guid(),
                    g = document.getElementsByTagName('script')[0],
                    h = document.createElement('script');
                d = FB.copy({}, d);
                if (a === 'graph' && c !== 'get') d.method = c;
                d.callback = 'FB.ApiServer._callbacks.' + f;
                var i = (FB.getDomain(a) + b + (b.indexOf('?') > -1 ? '&' : '?') + FB.QS.encode(d));
                if (i.length > 2000) throw new Error('JSONP only support a maximum of 2000 bytes of input.');
                FB.ApiServer._callbacks[f] = function (k) {
                    e && e(k);
                    delete FB.ApiServer._callbacks[f];
                    h.parentNode.removeChild(h);
                };
                h.onerror = function () {
                    if (f in FB.ApiServer._callbacks) FB.ApiServer._callbacks[f]({
                        error: 'load-error: unknown'
                    });
                };
                var j = function () {
                        setTimeout(function () {
                            if (f in FB.ApiServer._callbacks) h.onerror();
                        }, 0);
                    };
                if (h.addEventListener) {
                    h.addEventListener("load", j, false);
                } else h.onreadystatechange = function () {
                    if (/loaded|complete/.test(this.readyState)) j();
                };
                h.src = i;
                g.parentNode.insertBefore(h, g);
            },
            flash: function (a, b, c, d, e) {
                if (!window.FB_OnXdHttpResult) window.FB_OnXdHttpResult = function (f, g) {
                    FB.ApiServer._callbacks[f](decodeURIComponent(g));
                };
                d = FB.copy({}, d);
                FB.Flash.onReady(function () {
                    if (a === 'graph') d.suppress_http_code = 1;
                    var f = FB.getDomain(a) + b,
                        g = FB.QS.encode(d);
                    if (c === 'get') {
                        if (f.length + g.length > 2000) {
                            if (a === 'graph') d.method = 'get';
                            c = 'post';
                            g = FB.QS.encode(d);
                        } else {
                            f += (f.indexOf('?') > -1 ? '&' : '?') + g;
                            g = '';
                        }
                    } else if (c !== 'post') {
                        if (a === 'graph') d.method = c;
                        c = 'post';
                        g = FB.QS.encode(d);
                    }
                    var h = document.XdComm.sendXdHttpRequest(c.toUpperCase(), f, g, null);
                    FB.ApiServer._callbacks[h] = function (i) {
                        e && e(FB.JSON.parse(i));
                        delete FB.ApiServer._callbacks[h];
                    };
                });
            }
        });
        FB.provide('EventProvider', {
            subscribers: function () {
                if (!this._subscribersMap) this._subscribersMap = {};
                return this._subscribersMap;
            },
            subscribe: function (a, b) {
                var c = this.subscribers();
                if (!c[a]) {
                    c[a] = [b];
                } else c[a].push(b);
            },
            unsubscribe: function (a, b) {
                var c = this.subscribers()[a];
                FB.Array.forEach(c, function (d, e) {
                    if (d == b) c[e] = null;
                });
            },
            monitor: function (a, b) {
                if (!b()) {
                    var c = this,
                        d = function () {
                            if (b.apply(b, arguments)) c.unsubscribe(a, d);
                        };
                    this.subscribe(a, d);
                }
            },
            clear: function (a) {
                delete this.subscribers()[a];
            },
            fire: function () {
                var a = Array.prototype.slice.call(arguments),
                    b = a.shift();
                FB.Array.forEach(this.subscribers()[b], function (c) {
                    if (c) c.apply(this, a);
                });
            },
            listen: function (a, event, b) {
                if (a.addEventListener) {
                    a.addEventListener(event, b, false);
                } else if (a.attachEvent) a.attachEvent('on' + event, b);
            },
            unlisten: function (a, event, b) {
                if (a.removeEventListener) {
                    a.removeEventListener(event, b, false);
                } else if (a.detachEvent) a.detachEvent('on' + event, b);
            }
        });
        FB.provide('Event', FB.EventProvider);
        FB.provide('XD', {
            _origin: null,
            _transport: null,
            _callbacks: {},
            _forever: {},
            _xdProxyUrl: 'connect/xd_proxy.php',
            _openerTransport: null,
            _openerOrigin: null,
            _nonOpenerOrigin: null,
            init: function (a) {
                if (FB.XD._origin) return;
                var b = (window.location.protocol + '//' + window.location.host + '/' + FB.guid());
                if (window.addEventListener && !window.attachEvent && window.postMessage) {
                    FB.XD._origin = b;
                    FB.XD.PostMessage.init();
                    FB.XD._transport = 'postmessage';
                } else if (!a && FB.Flash.hasMinVersion()) {
                    if (document.getElementById('fb-root')) {
                        var c = document.domain;
                        if (c == 'facebook.com') c = window.location.host;
                        FB.XD._origin = (window.location.protocol + '//' + c + '/' + FB.guid());
                        FB.XD.Flash.init();
                        FB.XD._transport = 'flash';
                    } else {
                        if (FB.log) FB.log('missing fb-root, defaulting to fragment-based xdcomm');
                        FB.XD._transport = 'fragment';
                        FB.XD.Fragment._channelUrl = a || window.location.toString();
                    }
                } else {
                    FB.XD._transport = 'fragment';
                    FB.XD.Fragment._channelUrl = a || window.location.toString();
                }
                var d = !! window.attachEvent;
                if (FB.XD._transport != 'postmessage' && d && window.postMessage) {
                    FB.XD._openerTransport = FB.XD._transport;
                    FB.XD._openerOrigin = FB.XD._origin;
                    FB.XD._nonOpenerOrigin = b;
                }
            },
            resolveRelation: function (a) {
                var b, c, d = a.split('.'),
                    e = window;
                for (var f = 0, g = d.length; f < g; f++) {
                    b = d[f];
                    if (b === 'opener' || b === 'parent' || b === 'top') {
                        e = e[b];
                    } else if (c = /^frames\[['"]?([a-zA-Z0-9\-_]+)['"]?\]$/.exec(b)) {
                        e = e.frames[c[1]];
                    } else throw new SyntaxError('Malformed id to resolve: ' + a + ', pt: ' + b);
                }
                return e;
            },
            handler: function (a, b, c, d, e) {
                if (FB.initSitevars.forceSecureXdProxy) e = true;
                var f = FB.getDomain((e ? 'https_' : '') + 'cdn') + FB.XD._xdProxyUrl + '#';
                d = d || FB.guid();
                b = b || 'opener';
                if (FB.XD._openerTransport) if (b == 'opener') {
                    FB.XD._transport = FB.XD._openerTransport;
                    FB.XD._origin = FB.XD._openerOrigin;
                } else {
                    FB.XD.PostMessage.init();
                    FB.XD._transport = 'postmessage';
                    FB.XD._origin = FB.XD._nonOpenerOrigin;
                }
                if (FB.XD._transport == 'fragment') {
                    f = FB.XD.Fragment._channelUrl;
                    var g = f.indexOf('#');
                    if (g > 0) f = f.substr(0, g);
                    f += ((f.indexOf('?') < 0 ? '?' : '&') + FB.XD.Fragment._magic + '#?=&');
                }
                if (c) FB.XD._forever[d] = true;
                FB.XD._callbacks[d] = a;
                return f + FB.QS.encode({
                    cb: d,
                    origin: FB.XD._origin,
                    relation: b,
                    transport: FB.XD._transport
                });
            },
            recv: function (a) {
                if (typeof a == 'string') try {
                    a = FB.JSON.parse(a);
                } catch (b) {
                    a = FB.QS.decode(a);
                }
                var c = FB.XD._callbacks[a.cb];
                if (!FB.XD._forever[a.cb]) delete FB.XD._callbacks[a.cb];
                c && c(a);
            },
            PostMessage: {
                _isInitialized: false,
                init: function () {
                    if (!FB.XD.PostMessage._isInitialized) {
                        var a = FB.XD.PostMessage.onMessage;
                        window.addEventListener ? window.addEventListener('message', a, false) : window.attachEvent('onmessage', a);
                        FB.XD.PostMessage._isInitialized = true;
                    }
                },
                onMessage: function (event) {
                    FB.XD.recv(event.data);
                }
            },
            WebView: {
                onMessage: function (a, b, c) {
                    FB.XD.recv(c);
                }
            },
            Flash: {
                init: function () {
                    FB.Flash.onReady(function () {
                        document.XdComm.postMessage_init('FB.XD.Flash.onMessage', FB.XD._openerOrigin ? FB.XD._openerOrigin : FB.XD._origin);
                    });
                },
                onMessage: function (a) {
                    FB.XD.recv(decodeURIComponent(a));
                }
            },
            Fragment: {
                _magic: 'fb_xd_fragment',
                checkAndDispatch: function () {
                    var a = new RegExp('[?&]' + FB.XD.Fragment._magic + '#\\?=&(.*)$'),
                        b = location.href.match(a),
                        c = b && b[1];
                    if (c) {
                        FB.init = FB.getLoginStatus = FB.api = FB.XD.handler = function () {};
                        document.documentElement.style.display = 'none';
                        FB.XD.resolveRelation(FB.QS.decode(c).relation).FB.XD.recv(c);
                        document.open();
                        document.close();
                    }
                }
            }
        });
        FB.XD.Fragment.checkAndDispatch();
        (function (a) {
            if (a.require) return;
            var b = {},
                c = {},
                d = {},
                e = 0,
                f = 1,
                g = 2,
                h = 'special',
                i = 'refcount',
                j = 'exports',
                k = 'dependencies',
                l = 'module',
                m = 'waiting',
                n = 'factory',
                o = undefined,
                p = 'define',
                q = 'global',
                r = 'require',
                s = 'requireLazy',
                t = 'requireDynamic',
                u = 'context';

            function v(ga) {
                var ha = b[ga],
                    ia, ja;
                if (ha[m] && ha[h] & g) y();
                if (!ha[j]) {
                    var ka = ha[j] = {},
                        la = ha[n];
                    if (Object.prototype.toString.call(la) === '[object Function]') {
                        var ma = [],
                            na = ha[k],
                            oa = na.length;
                        if (ha[h] & g) oa = Math.min(oa, la.length);
                        for (ja = 0; ja < oa; ja++) {
                            ia = na[ja];
                            ma.push(ia === l ? ha : (ia === j ? ka : v(ia)));
                        }
                        var pa = la.apply(ha[u] || a, ma);
                        if (pa) ha[j] = pa;
                    } else ha[j] = la;
                }
                if (ha[i]-- === 1) delete b[ga];
                return ha[j];
            }
            function w(ga, ha, ia, ja, ka, la) {
                if (ha === o) {
                    ha = [];
                    ia = ga;
                    ga = aa();
                } else if (ia === o) {
                    ia = ha;
                    ha = ga;
                    ga = aa();
                }
                var ma = b[ga];
                if (ma) {
                    if (la) ma[i] += la;
                    return;
                } else if (!ha && !ia && la) {
                    d[ga] = (d[ga] || 0) + la;
                    return;
                } else {
                    ma = {
                        id: ga
                    };
                    ma[i] = (d[ga] || 0) + (la || 0);
                    delete d[ga];
                }
                ma[n] = ia;
                ma[k] = ha;
                ma[u] = ka;
                ma[h] = ja;
                b[ga] = ma;
                ba(ga);
            }
            function x(ga, ha, ia) {
                w(ga, ha, o, f, ia, 1);
            }
            function y() {
                var ga = {},
                    ha;
                for (ha in c) if (b[ha] && !ga[ha] && b[ha][h] & g) z({}, ha, ga);
            }
            function z(ga, ha, ia) {
                ia[ha] = 1;
                var ja = c[ha],
                    ka;
                if (!ja) return;
                ga[ha] = 1;
                for (ka in ja) {
                    if (!b[ka][h] & g) continue;
                    if (ga[ka]) {
                        delete ja[ka];
                        b[ka][m]--;
                        if (!b[ka][m]) ca(ka);
                    } else z(ga, ka, ia);
                }
                ga[ha] = 0;
            }
            function aa() {
                return '__mod__' + e++;
            }
            function ba(ga) {
                var ha = b[ga],
                    ia = 0;
                for (var ja = 0; ja < ha[k].length; ja++) {
                    var ka = ha[k][ja];
                    if (!b[ka] || b[ka][m]) {
                        c[ka] || (c[ka] = {});
                        if (!c[ka][ga]) ia++;
                        c[ka][ga] = 1;
                    }
                }
                ha[m] = ia;
                if (!ia) ca(ga);
            }
            function ca(ga) {
                var ha = b[ga];
                if (ha[h] & f) v(ga);
                var ia = c[ga];
                if (ia) {
                    delete c[ga];
                    for (var ja in ia) if (!--b[ja][m]) ca(ja);
                }
            }
            function da(ga, ha) {
                b[ga] = {
                    id: ga
                };
                b[ga][j] = ha;
            }
            da(l, 0);
            da(j, 0);
            da(p, w);
            da(q, a);
            da(r, v);
            da(t, v);
            da(s, x);
            w.amd = {};
            a[p] = w;
            a[r] = v;
            a[t] = v;
            a[s] = x;
            var ea = false,
                fa = function (ga, ha, ia, ja) {
                    w(ga, ha, ia, ja || g);
                    if (b[ga][m] && !ea) ea = setTimeout(function () {
                        y();
                        ea = false;
                    }, 9);
                };
            a.__d = function (ga, ha, ia, ja) {
                ha = [q, r, t, s, l, j].concat(ha);
                fa(ga, ha, ia, ja);
            };
            a.__e = a.__d;
        })(this);
        __d("ua", [], function (a, b, c, d, e, f) {
            var g = {
                ie: function () {
                    return g._populate() || this._ie;
                },
                ie64: function () {
                    return g.ie() && this._win64;
                },
                firefox: function () {
                    return g._populate() || this._firefox;
                },
                opera: function () {
                    return g._populate() || this._opera;
                },
                safari: function () {
                    return g._populate() || this._safari;
                },
                chrome: function () {
                    return g._populate() || this._chrome;
                },
                windows: function () {
                    return g._populate() || this._windows;
                },
                osx: function () {
                    return g._populate() || this._osx;
                },
                linux: function () {
                    return g._populate() || this._linux;
                },
                iphone: function () {
                    return g._populate() || this._iphone;
                },
                _populated: false,
                _populate: function () {
                    if (g._populated) return;
                    g._populated = true;
                    var h = navigator.userAgent,
                        i = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))/.exec(h),
                        j = /(Mac OS X)|(Windows)|(Linux)/.exec(h),
                        k = /\b(iPhone|iP[ao]d)/.exec(h);
                    g._win64 = !! (/Win64/.exec(h));
                    if (i) {
                        g._ie = i[1] ? parseFloat(i[1]) : NaN;
                        if (g._ie && document.documentMode) g._ie = document.documentMode;
                        g._firefox = i[2] ? parseFloat(i[2]) : NaN;
                        g._opera = i[3] ? parseFloat(i[3]) : NaN;
                        g._safari = i[4] ? parseFloat(i[4]) : NaN;
                        if (g._safari) {
                            i = /(?:Chrome\/(\d+\.\d+))/.exec(h);
                            g._chrome = i && i[1] ? parseFloat(i[1]) : NaN;
                        } else g._chrome = NaN;
                    } else g._ie = g._firefox = g._opera = g._chrome = g._safari = NaN;
                    if (j) {
                        if (j[1]) {
                            var l = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(h);
                            g._osx = l ? parseFloat(l[1].replace('_', '.')) : true;
                        } else g._osx = false;
                        g._windows = !! j[2];
                        g._linux = !! j[3];
                    } else g._osx = g._windows = g._linux = false;
                    g._iphone = k;
                }
            };
            a.ua = e.exports = g;
        }, 3);
        __d("copyProperties", [], function (a, b, c, d, e, f) {
            function g(h, i) {
                h = h || {};
                i = i || {};
                for (var j in i) h[j] = i[j];
                if (i.hasOwnProperty && i.hasOwnProperty('toString') && (typeof i.toString != 'undefined') && (h.toString !== i.toString)) h.toString = i.toString;
                return h;
            }
            e.exports = g;
        });
        __d("QueryString", [], function (a, b, c, d, e, f) {
            var g = {
                encode: function (h) {
                    var i = [];
                    for (var j in h) if (h.hasOwnProperty(j)) i.push(encodeURIComponent(j) + '=' + encodeURIComponent(h[j]));
                    return i.join('&');
                },
                decode: function (h) {
                    var i = h.split('&'),
                        j = i.length,
                        k = {};
                    while (j--) {
                        var l = i[j].split('=', 2);
                        k[decodeURIComponent(l[0])] = decodeURIComponent(l[1]);
                    }
                    return k;
                }
            };
            e.exports = g;
        });
        __d("guid", [], function (a, b, c, d, e, f) {
            function g() {
                return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.', '');
            }
            e.exports = g;
        });
        __d("Flash", ["ua", "copyProperties", "QueryString", "guid"], function (a, b, c, d, e, f) {
            var g = b("ua"),
                h = b("copyProperties"),
                i = b("QueryString"),
                j = b("guid"),
                k = {},
                l;

            function m(q) {
                var r = document.getElementById(q);
                if (r) r.parentNode.removeChild(r);
                delete k[q];
            }
            function n() {
                for (var q in k) if (k.hasOwnProperty(q)) m(q);
            }
            function o(q) {
                if (!l) {
                    if (g.ie() >= 9) window.attachEvent('onunload', n);
                    l = true;
                }
                k[q] = q;
            }
            var p = {
                embed: function (q, r, s, t) {
                    var u = j();
                    q = encodeURI(q);
                    s = h({
                        allowscriptaccess: 'always',
                        flashvars: t,
                        movie: q
                    }, s || {});
                    if (typeof s.flashvars == 'object') s.flashvars = i.encode(s.flashvars);
                    var v = [];
                    for (var w in s) if (s.hasOwnProperty(w) && s[w]) v.push('<param name="' + encodeURI(w) + '" value="' + encodeURI(s[w]) + '">');
                    var x = document.createElement('div'),
                        y = '<object ' + (g.ie() ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ' : 'type="application/x-shockwave-flash"') + 'data="' + q + '" ' + 'id="' + u + '">' + v.join('') + '</object>';
                    x.innerHTML = y;
                    r.appendChild(x.firstChild);
                    o(u);
                    return r.firstChild;
                },
                remove: m,
                isAvailable: function () {
                    var q = 'Shockwave Flash',
                        r = 'application/x-shockwave-flash',
                        s = 'ShockwaveFlash.ShockwaveFlash',
                        t;
                    if (navigator.plugins && typeof navigator.plugins[q] == 'object') {
                        var u = navigator.plugins[q].description;
                        if (u && navigator.mimeTypes && navigator.mimeTypes[r] && navigator.mimeTypes[r].enabledPlugin) t = u.match(/\d+/g);
                    }
                    if (!t) try {
                        t = (new ActiveXObject(s)).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);
                        t = Array.prototype.slice.call(t, 1);
                    } catch (v) {}
                    if (!t) return false;
                    return true;
                }
            };
            e.exports = p;
        });
        __d("DOMEventListener", [], function (a, b, c, d, e, f) {
            var g, h;
            if (window.addEventListener) {
                g = function (j, k, l) {
                    j.addEventListener(k, l, false);
                };
                h = function (j, k, l) {
                    j.removeEventListener(k, l, false);
                };
            } else if (window.attachEvent) {
                g = function (j, k, l) {
                    j.attachEvent('on' + k, l);
                };
                h = function (j, k, l) {
                    j.detachEvent('on' + k, l);
                };
            }
            var i = {
                add: function (j, k, l) {
                    g(j, k, l);
                    return {
                        remove: function () {
                            h(j, k, l);
                            j = null;
                        }
                    };
                },
                remove: h
            };
            e.exports = i;
        });
        __d("sprintf", [], function (a, b, c, d, e, f) {
            function g(h, i) {
                i = Array.prototype.slice.call(arguments, 1);
                var j = 0;
                return h.replace(/%s/g, function (k) {
                    return i[j++];
                });
            }
            e.exports = g;
        });
        __d("Log", ["sprintf"], function (a, b, c, d, e, f) {
            var g = b("sprintf"),
                h = Array.prototype.slice,
                i = {
                    DEBUG: 3,
                    INFO: 2,
                    WARNING: 1,
                    ERROR: 0
                };

            function j(l, m, n) {
                var o = g.apply(null, n);
                if (k.level >= l && window.console) console[m in console ? m : 'log'](o);
            }
            var k = {
                level: -1,
                Level: i,
                debug: function () {
                    j(i.DEBUG, 'debug', h.call(arguments));
                },
                info: function () {
                    j(i.INFO, 'info', h.call(arguments));
                },
                warn: function () {
                    j(i.WARNING, 'warn', h.call(arguments));
                },
                error: function () {
                    j(i.ERROR, 'error', h.call(arguments));
                }
            };
            e.exports = k;
        });
        __d("XDM", ["Flash", "DOMEventListener", "Log", "guid", "copyProperties"], function (a, b, c, d, e, f) {
            var g = b('Flash'),
                h = b('DOMEventListener'),
                i = b('Log'),
                j = b('guid'),
                k = b('copyProperties'),
                l = {},
                m = {
                    transports: []
                };

            function n(p) {
                var q = {},
                    r = p.length,
                    s = m.transports;
                while (r--) q[p[r]] = 1;
                r = s.length;
                while (r--) {
                    var t = s[r],
                        u = l[t];
                    if (!q[t] && u.isAvailable()) return t;
                }
            }
            var o = {
                register: function (p, q) {
                    i.debug('Registering %s as XDM provider', p);
                    m.transports.push(p);
                    l[p] = q;
                },
                create: function (p) {
                    if (!p.whenReady && !p.onMessage) {
                        i.error('An instance without whenReady or onMessage makes no sense');
                        throw new Error('An instance without whenReady or ' + 'onMessage makes no sense');
                    }
                    if (!p.channel) {
                        i.warn('Missing channel name, selecting at random');
                        p.channel = j();
                    }
                    if (!p.whenReady) p.whenReady = bagofholding;
                    if (!p.onMessage) p.onMessage = bagofholding;
                    var q = p.transport || n(p.blacklist || []),
                        r = l[q];
                    if (r && r.isAvailable()) {
                        i.debug('%s is available', q);
                        r.init(p);
                        return q;
                    }
                }
            };
            o.register('fragment', (function () {
                var p = false,
                    q, r = location.protocol + '//' + location.host;

                function s(t) {
                    var u = document.createElement('iframe');
                    u.src = 'javascript:false';
                    var v = h.add(u, 'load', function () {
                        v.remove();
                        setTimeout(function () {
                            u.parentNode.removeChild(u);
                        }, 5000);
                    });
                    q.appendChild(u);
                    u.src = t;
                }
                return {
                    isAvailable: function () {
                        return true;
                    },
                    init: function (t) {
                        i.debug('init fragment');
                        var u = {
                            send: function (v, w, x, y) {
                                i.debug('sending to: %s (%s)', w + t.channelPath, y);
                                s(w + t.channelPath + v + '&xd_rel=parent.parent&relation=parent.parent&xd_origin=' + encodeURIComponent(r));
                            }
                        };
                        if (p) {
                            t.whenReady(u);
                            return;
                        }
                        q = t.root;
                        p = true;
                        t.whenReady(u);
                    }
                };
            })());
            o.register('flash', (function () {
                var p = false,
                    q, r = {},
                    s = false;
                return {
                    isAvailable: function () {
                        return g.isAvailable();
                    },
                    init: function (t) {
                        i.debug('init flash: ' + t.channel);
                        var u = {
                            send: function (x, y, z, aa) {
                                i.debug('sending to: %s (%s)', y, aa);
                                q.postMessage(x, y, aa);
                            }
                        };
                        if (p) {
                            t.whenReady(u);
                            return;
                        }
                        var v = t.root.appendChild(document.createElement('div')),
                            w = j();
                        r[w] = function () {
                            i.info('xdm.swf called the callback');
                            delete r[w];
                            w = j();
                            r[w] = function (x, y) {
                                x = decodeURIComponent(x);
                                i.debug('received message %s from %s', x, y);
                                t.onMessage(x, y);
                            };
                            q.init(t.channel, 'FB_XDM_CALLBACKS.' + w);
                            t.whenReady(u);
                        };
                        window.FB_XDM_CALLBACKS = r;
                        q = g.embed(t.flashUrl, v, null, {
                            protocol: location.protocol.replace(':', ''),
                            host: location.host,
                            callback: 'FB_XDM_CALLBACKS.' + w,
                            log: s
                        });
                        p = true;
                    }
                };
            })());
            o.register('postmessage', (function () {
                var p = false;
                return {
                    isAvailable: function () {
                        return !!window.postMessage;
                    },
                    init: function (q) {
                        i.debug('init postMessage: ' + q.channel);
                        var r = '_FB_' + q.channel,
                            s = {
                                send: function (t, u, v, w) {
                                    if (window === v) {
                                        i.error('Invalid windowref, equal to window (self)');
                                        throw new Error();
                                    }
                                    i.debug('sending to: %s (%s)', u, w);
                                    v.postMessage('_FB_' + w + t, u);
                                }
                            };
                        if (p) {
                            q.whenReady(s);
                            return;
                        }
                        h.add(window, 'message', function (event) {
                            var t = event.data,
                                u = event.origin || 'native';
                            if (typeof t != 'string') {
                                i.warn('Received message of type %s from %s, expected a string', typeof t, u);
                                return;
                            }
                            i.debug('received message %s from %s', t, u);
                            if (u != 'native') if (t.substring(0, r.length) == r) {
                                t = t.substring(r.length);
                            } else return;
                            q.onMessage(t, u);
                        });
                        q.whenReady(s);
                        p = true;
                    }
                };
            })());
            e.exports = o;
        });
        __d("Queue", ["copyProperties"], function (a, b, c, d, e, f) {
            var g = b("copyProperties"),
                h = {};

            function i(l, m) {
                return function () {
                    m.apply(l, arguments);
                };
            }
            function j() {
                var l = Array.prototype.slice.call(arguments);
                for (var m = 0; m < l.length; m++) if (typeof l[m] != 'undefined') return l[m];
            }
            function k(l) {
                this._opts = g({
                    interval: 0,
                    processor: null
                }, l);
                this._queue = [];
                this._stopped = true;
            }
            g(k.prototype, {
                _dispatch: function (l) {
                    if (this._stopped || this._queue.length === 0) return;
                    if (!this._opts.processor) {
                        this._stopped = true;
                        throw new Error('No processor available');
                    }
                    if (this._opts.interval) {
                        this._opts.processor.call(this, this._queue.shift());
                        this._timeout = setTimeout(i(this, this._dispatch), this._opts.interval);
                    } else while (this._queue.length) this._opts.processor.call(this, this._queue.shift());
                },
                enqueue: function (l) {
                    if (this._opts.processor && !this._stopped) {
                        this._opts.processor.call(this, l);
                    } else this._queue.push(l);
                    return this;
                },
                start: function (l) {
                    if (l) this._opts.processor = l;
                    this._stopped = false;
                    this._dispatch();
                    return this;
                },
                dispatch: function () {
                    this._dispatch(true);
                },
                stop: function (l) {
                    this._stopped = true;
                    if (j(l, false)) clearTimeout(this._timeout);
                    return this;
                },
                merge: function (l, m) {
                    this._queue[m ? 'unshift' : 'push'].apply(this._queue, l._queue);
                    l._queue = [];
                    this._dispatch();
                    return this;
                },
                getLength: function () {
                    return this._queue.length;
                }
            });
            g(k, {
                get: function (l, m) {
                    var n;
                    if (l in h) {
                        n = h[l];
                    } else n = h[l] = new k(m);
                    return n;
                },
                exists: function (l) {
                    return l in h;
                },
                remove: function (l) {
                    return delete h[l];
                }
            });
            e.exports = k;
        });
        __d("resolveWindow", [], function (a, b, c, d, e, f) {
            function g(h) {
                var i = window,
                    j = h.split('.');
                try {
                    for (var l = 0; l < j.length; l++) {
                        var m = j[l],
                            n = /^frames\[['"]?([a-zA-Z0-9\-_]+)['"]?\]$/.exec(m);
                        if (n) {
                            i = i.frames[n[1]];
                        } else if (m === 'opener' || m === 'parent' || m === 'top') {
                            i = i[m];
                        } else return null;
                    }
                } catch (k) {
                    return null;
                }
                return i;
            }
            e.exports = g;
        });
        __d("SDK_XD", ["XDM", "Log", "QueryString", "Queue", "resolveWindow", "guid", "XDConfig"], function (a, b, c, d, e, f) {
            var g = c('XDConfig'),
                h = b('XDM'),
                i = b('Log'),
                j = b('QueryString'),
                k = b('Queue'),
                l = b('resolveWindow'),
                m = b('guid'),
                n = new k(),
                o = new k(),
                p = new k(),
                q, r, s = m(),
                t = m(),
                u = location.protocol + '//' + location.host,
                v, w = false,
                x = {};

            function y(ea) {
                i.info('Remote XD can talk to facebook.com (%s)', ea);
                if (ea == 'canvas') {
                    FB._inCanvas = true;
                } else FB.Canvas._isTabIframe = true;
            }
            function z(ea, fa) {
                if (!fa) {
                    i.error('No senderOrigin');
                    throw new Error();
                }
                var ga = /^https?/.exec(fa)[0];
                switch (ea.xd_action) {
                case 'proxy_ready':
                    var ha, ia;
                    if (ga == 'https') {
                        ha = p;
                        ia = r;
                    } else {
                        ha = o;
                        ia = q;
                    }
                    if (ea.registered) {
                        y(ea.registered);
                        n = ha.merge(n);
                    }
                    i.info('Proxy ready, starting queue %s containing %s messages', ga + 'ProxyQueue', ha.getLength());
                    ha.start(function (ka) {
                        v.send(j.encode(ka), fa, ia.contentWindow, t + '_' + ga);
                    });
                    break;
                case 'plugin_ready':
                    i.info('Plugin %s ready, protocol: %s', ea.name, ga);
                    x[ea.name] = {
                        protocol: ga
                    };
                    if (k.exists(ea.name)) {
                        var ja = k.get(ea.name);
                        i.debug('Enqueuing %s messages for %s in %s', ja.getLength(), ea.name, ga + 'ProxyQueue');
                        (ga == 'https' ? p : o).merge(ja);
                    }
                    break;
                }
                if (ea.data) aa(ea.data, fa);
            }
            function aa(ea, fa) {
                if (typeof ea == 'string') if (ea.substring(0, 1) == '{') {
                    try {
                        ea = FB.JSON.parse(ea);
                    } catch (ga) {
                        i.warn('Failed to decode %s as JSON', ea);
                        return;
                    }
                } else ea = j.decode(ea);
                if (!fa) if (ea.xd_sig == s) fa = ea.xd_origin;
                if (ea.xd_action) {
                    z(ea, fa);
                    return;
                }
                if (ea.access_token) FB._https = /^https/.test(u);
                if (ea.cb) {
                    var ha = FB.XD._callbacks[ea.cb];
                    if (!FB.XD._forever[ea.cb]) delete FB.XD._callbacks[ea.cb];
                    if (ha) ha(ea);
                }
            }
            var ba = function () {
                    var ea = document.body.appendChild(document.createElement("form")),
                        fa = ea.appendChild(document.createElement("input")),
                        ga;
                    fa.name = m();
                    ga = fa !== ea.elements[fa.name];
                    document.body.removeChild(ea);
                    ba = function () {
                        return ga;
                    };
                    return ga;
                };

            function ca(ea) {
                var fa = ba() ? document.createElement('<iframe name="' + ea.name + '"/>') : document.createElement("IFRAME");
                fa.name = fa.id = ea.name;
                fa.src = "javascript:false";
                ea.root.appendChild(fa);
                fa.src = ea.url;
                return fa;
            }
            var da = {
                _callbacks: {},
                _forever: {},
                _channel: t,
                _origin: u,
                onMessage: aa,
                recv: aa,
                init: function (ea) {
                    if (w) return;
                    var fa = ea ? /\/\/.*?(\/[^#]*)/.exec(ea)[1] : location.pathname + location.search;
                    fa += (~fa.indexOf('?') ? '&' : '?') + 'fb_xd_fragment#?=&xd_sig=' + s + '&';
                    var ga = FB.Content.append(document.createElement('div'));
                    ga.style.position = 'absolute';
                    ga.style.top = '-2000px';
                    var ha = h.create({
                        root: ga,
                        channel: t,
                        channelPath: '/' + g.XdUrl + '#',
                        flashUrl: g.Flash.path,
                        whenReady: function (ma) {
                            v = ma;
                        },
                        onMessage: aa
                    }),
                        ia = {
                            channel: t,
                            origin: location.protocol + '//' + location.host,
                            channel_path: fa,
                            transport: ha
                        },
                        ja = g.XdUrl + '#' + j.encode(ia),
                        ka = g.useCdn ? FB._domain.staticfb : 'http://www.facebook.com/',
                        la = g.useCdn ? FB._domain.https_staticfb : 'https://www.facebook.com/';
                    if (!FB.onlyUseHttps()) q = ca({
                        url: ka + ja,
                        name: 'fb_xdm_frame_http',
                        root: ga
                    });
                    r = ca({
                        url: la + ja,
                        name: 'fb_xdm_frame_https',
                        root: ga
                    });
                    w = true;
                },
                sendToFacebook: function (ea, fa) {
                    if (ea == 'facebook') {
                        fa.relation = 'parent.parent';
                        n.enqueue(fa);
                    } else {
                        fa.relation = 'parent.frames["' + ea + '"]';
                        var ga = x[ea];
                        if (ga) {
                            i.debug('Enqueuing message for plugin %s in %s', ea, ga.protocol + 'ProxyQueue');
                            (ga.protocol == 'https' ? p : o).enqueue(fa);
                        } else {
                            i.debug('Buffering message for plugin %s', ea);
                            k.get(ea).enqueue(fa);
                        }
                    }
                },
                handler: function (ea, fa, ga, ha) {
                    ha = ha || m();
                    if (ga) FB.XD._forever[ha] = true;
                    FB.XD._callbacks[ha] = ea;
                    var ia = location.protocol == 'https:' ? FB._domain.https_staticfb : FB._domain.staticfb,
                        ja = g.useCdn ? ia : location.protocol + '//www.facebook.com/';
                    return ja + g.XdUrl + '#' + j.encode({
                        cb: ha,
                        origin: u + '/' + t,
                        domain: location.hostname,
                        relation: fa || 'opener'
                    });
                }
            };
            (function () {
                var ea = location.href.match(/[?&]fb_xd_fragment#\?=&(.*)$/);
                if (ea) {
                    document.documentElement.style.display = 'none';
                    var fa = j.decode(ea[1]),
                        ga = l(fa.xd_rel);
                    i.debug('Passing fragment based message: %s', ea[1]);
                    ga.FB.XD.onMessage(fa);
                    document.open();
                    document.close();
                }
            })();
            e.exports = da;
        });
        __d("legacy:fb.xd", ["SDK_XD", "SDKConfig"], function (a, b, c, d) {
            var e = c('SDKConfig');
            if (!e.legacy) FB.XD = b('SDK_XD');
        }, 3);
        FB.provide('UA', {
            ie: function () {
                return FB.UA._populate() || this._ie;
            },
            firefox: function () {
                return FB.UA._populate() || this._firefox;
            },
            opera: function () {
                return FB.UA._populate() || this._opera;
            },
            safari: function () {
                return FB.UA._populate() || this._safari;
            },
            chrome: function () {
                return FB.UA._populate() || this._chrome;
            },
            windows: function () {
                return FB.UA._populate() || this._windows;
            },
            osx: function () {
                return FB.UA._populate() || this._osx;
            },
            linux: function () {
                return FB.UA._populate() || this._linux;
            },
            ios: function () {
                FB.UA._populate();
                return FB.UA.mobile() && this._ios;
            },
            mobile: function () {
                FB.UA._populate();
                return !FB._inCanvas && this._mobile;
            },
            nativeApp: function () {
                return FB.UA.mobile() && navigator.userAgent.match(/FBAN\/\w+;/i);
            },
            android: function () {
                FB.UA._populate();
                return FB.UA.mobile() && this._android;
            },
            iPad: function () {
                FB.UA._populate();
                return FB.UA.mobile() && this._iPad;
            },
            _populated: false,
            _populate: function () {
                if (FB.UA._populated) return;
                FB.UA._populated = true;
                var a = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))/.exec(navigator.userAgent),
                    b = /(Mac OS X)|(Windows)|(Linux)/.exec(navigator.userAgent),
                    c = /\b(iPhone|iP[ao]d)/.exec(navigator.userAgent);
                FB.UA._iPad = /\b(iPad)/.exec(navigator.userAgent);
                FB.UA._android = navigator.userAgent.match(/Android/i);
                FB.UA._mobile = c || FB.UA._android || navigator.userAgent.match(/Mobile/i);
                if (a) {
                    FB.UA._ie = a[1] ? parseFloat(a[1]) : NaN;
                    if (FB.UA._ie >= 8 && !window.HTMLCollection) FB.UA._ie = 7;
                    FB.UA._firefox = a[2] ? parseFloat(a[2]) : NaN;
                    FB.UA._opera = a[3] ? parseFloat(a[3]) : NaN;
                    FB.UA._safari = a[4] ? parseFloat(a[4]) : NaN;
                    if (FB.UA._safari) {
                        a = /(?:Chrome\/(\d+\.\d+))/.exec(navigator.userAgent);
                        FB.UA._chrome = a && a[1] ? parseFloat(a[1]) : NaN;
                    } else FB.UA._chrome = NaN;
                } else FB.UA._ie = FB.UA._firefox = FB.UA._opera = FB.UA._chrome = FB.UA._safari = NaN;
                if (b) {
                    FB.UA._osx = !! b[1];
                    FB.UA._windows = !! b[2];
                    FB.UA._linux = !! b[3];
                } else FB.UA._osx = FB.UA._windows = FB.UA._linux = false;
                FB.UA._ios = c;
            }
        });
        FB.provide('Arbiter', {
            _canvasProxyUrl: 'connect/canvas_proxy.php',
            BEHAVIOR_EVENT: 'e',
            BEHAVIOR_PERSISTENT: 'p',
            BEHAVIOR_STATE: 's',
            inform: function (a, b, c, d, e) {
                if (FB.Canvas.isTabIframe() || (FB._inPlugin && window.postMessage) || (!FB._inCanvas && FB.UA.mobile() && window.postMessage)) {
                    var f = FB.JSON.stringify({
                        method: a,
                        params: b,
                        behavior: e || FB.Arbiter.BEHAVIOR_PERSISTENT
                    });
                    if (window.postMessage) {
                        FB.XD.resolveRelation(c || 'parent').postMessage(f, '*');
                        return;
                    } else try {
                        window.opener.postMessage(f);
                        return;
                    } catch (g) {}
                }
                if (FB.onlyUseHttps()) {
                    d = true;
                } else d |= (window != window.parent && document.referrer.indexOf('https:') === 0);
                var h = (FB.getDomain((d ? 'https_' : '') + 'staticfb', true) + FB.Arbiter._canvasProxyUrl + '#' + FB.QS.encode({
                    method: a,
                    params: FB.JSON.stringify(b || {}),
                    behavior: e || FB.Arbiter.BEHAVIOR_PERSISTENT,
                    relation: c
                })),
                    i = FB.Content.appendHidden('');
                FB.Content.insertIframe({
                    url: h,
                    root: i,
                    width: 1,
                    height: 1,
                    onload: function () {
                        setTimeout(function () {
                            i.parentNode.removeChild(i);
                        }, 10);
                    }
                });
            }
        });
        __d("legacy:fb.arbiter", ["SDKConfig"], function (a, b, c, d) {
            var e = c('SDKConfig');
            if (!e.legacy) FB.provide('Arbiter', {
                BEHAVIOR_EVENT: 'e',
                BEHAVIOR_PERSISTENT: 'p',
                BEHAVIOR_STATE: 's',
                inform: function (f, g, h, i, j) {
                    FB.XD.sendToFacebook('facebook', {
                        method: f,
                        params: FB.JSON.stringify(g || {}),
                        behavior: j || FB.Arbiter.BEHAVIOR_PERSISTENT,
                        relation: h
                    });
                }
            }, true);
        }, 3);
        FB.provide('Canvas', {
            _timer: null,
            _lastSize: {},
            _isTabIframe: !! ~window.name.indexOf('app_runner_'),
            _pageInfo: {
                clientWidth: 0,
                clientHeight: 0,
                scrollLeft: 0,
                scrollTop: 0,
                offsetLeft: 0,
                offsetTop: 0
            },
            getPageInfo: function (a) {
                var b = 'top.frames[' + window.name + ']',
                    c = FB.XD.handler(function (e) {
                        for (var f in FB.Canvas._pageInfo) if (e[f]) FB.Canvas._pageInfo[f] = e[f] | 0;
                        a && a(FB.Canvas._pageInfo);
                    }, b, true),
                    d = {
                        channelUrl: c,
                        frame: window.name
                    };
                FB.Arbiter.inform('getPageInfo', d, 'top');
            },
            hideFlashElement: function (a) {
                a.style.visibility = 'hidden';
            },
            showFlashElement: function (a) {
                a.style.visibility = '';
            },
            _flashClassID: "CLSID:D27CDB6E-AE6D-11CF-96B8-444553540000",
            _hideFlashCallback: function (a) {
                var b = window.document.getElementsByTagName('object');
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    if (d.type.toLowerCase() != "application/x-shockwave-flash" && d.classid.toUpperCase() != FB.Canvas._flashClassID) continue;
                    var e = false;
                    for (var f = 0; f < d.childNodes.length; f++) if (d.childNodes[f].nodeName.toLowerCase() == "param" && d.childNodes[f].name.toLowerCase() == "wmode") if (d.childNodes[f].value.toLowerCase() == "opaque" || d.childNodes[f].value.toLowerCase() == "transparent") e = true;
                    if (!e) {
                        var g = Math.random();
                        if (g <= 1 / 1000) FB.api(FB._apiKey + '/occludespopups', 'post', {});
                        if (FB.Canvas._devHideFlashCallback) {
                            var h = 200,
                                i = {
                                    state: a.state,
                                    elem: d
                                },
                                j = FB.bind(function (k) {
                                    if (k.state == 'opened') {
                                        FB.Canvas.hideFlashElement(k.elem);
                                    } else FB.Canvas.showFlashElement(k.elem);
                                }, this, i);
                            setTimeout(j, h);
                            FB.Canvas._devHideFlashCallback(i);
                        } else if (a.state == 'opened') {
                            d._old_visibility = d.style.visibility;
                            d.style.visibility = 'hidden';
                        } else if (a.state == 'closed') {
                            d.style.visibility = d._old_visibility;
                            delete d._old_visibility;
                        }
                    }
                }
            },
            _devHideFlashCallback: null,
            _setHideFlashCallback: function (a) {
                FB.Canvas._devHideFlashCallback = a;
            },
            init: function () {
                var a = FB.Dom.getViewportInfo();
                FB.Canvas._pageInfo.clientWidth = a.width;
                FB.Canvas._pageInfo.clientHeight = a.height;
                FB.Canvas.getPageInfo();
                var b = FB.XD.handler(FB.Canvas._hideFlashCallback, 'top.frames[' + window.name + ']', true);
                FB.Arbiter.inform('iframeSetupFlashHiding', {
                    channelUrl: b
                });
            },
            setSize: function (a) {
                if (typeof a != "object") a = {};
                var b = 0,
                    c = 0;
                a = a || {};
                if (a.width == null || a.height == null) {
                    a = FB.copy(a, FB.Canvas._computeContentSize());
                    b = 16;
                    c = 4;
                }
                a = FB.copy(a, {
                    frame: window.name || 'iframe_canvas'
                });
                if (FB.Canvas._lastSize[a.frame]) {
                    var d = FB.Canvas._lastSize[a.frame].height,
                        e = a.height - d;
                    if (FB.Canvas._lastSize[a.frame].width == a.width && (e <= c && e >= -b)) return false;
                }
                FB.Canvas._lastSize[a.frame] = a;
                FB.Arbiter.inform('setSize', a);
                return true;
            },
            scrollTo: function (a, b) {
                FB.Arbiter.inform('scrollTo', {
                    frame: window.name || 'iframe_canvas',
                    x: a,
                    y: b
                });
            },
            setAutoGrow: function (a, b) {
                if (b === undefined && typeof a == "number") {
                    b = a;
                    a = true;
                }
                if (a === undefined || a) {
                    if (FB.Canvas._timer === null) FB.Canvas._timer = window.setInterval(FB.Canvas.setSize, b || 100);
                    FB.Canvas.setSize();
                } else if (FB.Canvas._timer !== null) {
                    window.clearInterval(FB.Canvas._timer);
                    FB.Canvas._timer = null;
                }
            },
            setAutoResize: function (a, b) {
                return FB.Canvas.setAutoGrow(a, b);
            },
            isTabIframe: function () {
                return FB.Canvas._isTabIframe;
            },
            setDoneLoading: function (a) {
                FB.Canvas._passAppTtiMessage(a, 'RecordIframeAppTti');
            },
            stopTimer: function (a) {
                FB.Canvas._passAppTtiMessage(a, 'StopIframeAppTtiTimer');
            },
            setUrlHandler: function (a) {
                var b = FB.XD.handler(a, 'top.frames[' + window.name + ']', true);
                FB.Arbiter.inform('setUrlHandler', b);
                FB.Event.listen(window, 'load', function () {
                    FB.Arbiter.inform('setUrlHandler', b);
                });
            },
            startTimer: function () {
                FB.Canvas._passAppTtiMessage(null, 'StartIframeAppTtiTimer');
            },
            _passAppTtiMessage: function (a, b) {
                var c = null;
                if (a) c = FB.XD.handler(a, 'top.frames[' + window.name + ']', false);
                FB.Arbiter.inform(b, {
                    frame: window.name || 'iframe_canvas',
                    time: (new Date()).getTime(),
                    appId: parseInt(FB._apiKey, 10),
                    channelUrl: c
                });
            },
            _computeContentSize: function () {
                var a = document.body,
                    b = document.documentElement,
                    c = 0,
                    d = Math.max(a.offsetTop, 0),
                    e = Math.max(b.offsetTop, 0),
                    f = a.scrollHeight + d,
                    g = a.offsetHeight + d,
                    h = b.scrollHeight + e,
                    i = b.offsetHeight + e;
                bottom = Math.max(f, g, h, i);
                if (a.offsetWidth < a.scrollWidth) {
                    c = a.scrollWidth + a.offsetLeft;
                } else FB.Array.forEach(a.childNodes, function (j) {
                    var k = j.offsetWidth + j.offsetLeft;
                    if (k > c) c = k;
                });
                if (b.clientLeft > 0) c += (b.clientLeft * 2);
                if (b.clientTop > 0) bottom += (b.clientTop * 2);
                return {
                    height: bottom,
                    width: c
                };
            }
        });
        FB.provide('String', {
            trim: function (a) {
                return a.replace(/^\s*|\s*$/g, '');
            },
            format: function (a) {
                if (!FB.String.format._formatRE) FB.String.format._formatRE = /(\{[^\}^\{]+\})/g;
                var b = arguments;
                return a.replace(FB.String.format._formatRE, function (c, d) {
                    var e = parseInt(d.substr(1), 10),
                        f = b[e + 1];
                    if (f === null || f === undefined) return '';
                    return f.toString();
                });
            },
            escapeHTML: function (a) {
                var b = document.createElement('div');
                b.appendChild(document.createTextNode(a));
                return b.innerHTML.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
            },
            quote: function (a) {
                var b = /["\\\x00-\x1f\x7f-\x9f]/g,
                    c = {
                        '\b': '\\b',
                        '\t': '\\t',
                        '\n': '\\n',
                        '\f': '\\f',
                        '\r': '\\r',
                        '"': '\\"',
                        '\\': '\\\\'
                    };
                return b.test(a) ? '"' + a.replace(b, function (d) {
                    var e = c[d];
                    if (e) return e;
                    e = d.charCodeAt();
                    return '\\u00' + Math.floor(e / 16).toString(16) + (e % 16).toString(16);
                }) + '"' : '"' + a + '"';
            }
        });
        FB.provide('Dom', {
            containsCss: function (a, b) {
                var c = ' ' + a.className + ' ';
                return c.indexOf(' ' + b + ' ') >= 0;
            },
            addCss: function (a, b) {
                if (!FB.Dom.containsCss(a, b)) a.className = a.className + ' ' + b;
            },
            removeCss: function (a, b) {
                if (FB.Dom.containsCss(a, b)) {
                    a.className = a.className.replace(b, '');
                    FB.Dom.removeCss(a, b);
                }
            },
            getByClass: function (a, b, c) {
                b = b || document.body;
                c = c || '*';
                if (b.querySelectorAll) return FB.Array.toArray(b.querySelectorAll(c + '.' + a));
                var d = b.getElementsByTagName(c),
                    e = [];
                for (var f = 0, g = d.length; f < g; f++) if (this.containsCss(d[f], a)) e[e.length] = d[f];
                return e;
            },
            getStyle: function (a, b) {
                var c = false,
                    d = a.style;
                if (a.currentStyle) {
                    FB.Array.forEach(b.match(/\-([a-z])/g), function (e) {
                        b = b.replace(e, e.substr(1, 1).toUpperCase());
                    });
                    c = a.currentStyle[b];
                } else {
                    FB.Array.forEach(b.match(/[A-Z]/g), function (e) {
                        b = b.replace(e, '-' + e.toLowerCase());
                    });
                    if (window.getComputedStyle) {
                        c = document.defaultView.getComputedStyle(a, null).getPropertyValue(b);
                        if (b == 'background-position-y' || b == 'background-position-x') if (c == 'top' || c == 'left') c = '0px';
                    }
                }
                if (b == 'opacity') {
                    if (a.filters && a.filters.alpha) return c;
                    return c * 100;
                }
                return c;
            },
            setStyle: function (a, b, c) {
                var d = a.style;
                if (b == 'opacity') {
                    if (c >= 100) c = 99.999;
                    if (c < 0) c = 0;
                    d.opacity = c / 100;
                    d.MozOpacity = c / 100;
                    d.KhtmlOpacity = c / 100;
                    if (a.filters) if (a.filters.alpha == undefined) {
                        a.filter = "alpha(opacity=" + c + ")";
                    } else a.filters.alpha.opacity = c;
                } else d[b] = c;
            },
            addScript: function (a) {
                var b = document.createElement('script');
                b.type = "text/javascript";
                b.src = a;
                return document.getElementsByTagName('head')[0].appendChild(b);
            },
            addCssRules: function (a, b) {
                if (!FB.Dom._cssRules) FB.Dom._cssRules = {};
                var c = true;
                FB.Array.forEach(b, function (f) {
                    if (!(f in FB.Dom._cssRules)) {
                        c = false;
                        FB.Dom._cssRules[f] = true;
                    }
                });
                if (c) return;
                if (!FB.UA.ie()) {
                    var d = document.createElement('style');
                    d.type = 'text/css';
                    d.textContent = a;
                    document.getElementsByTagName('head')[0].appendChild(d);
                } else try {
                    document.createStyleSheet().cssText = a;
                } catch (e) {
                    if (document.styleSheets[0]) document.styleSheets[0].cssText += a;
                }
            },
            getViewportInfo: function () {
                var a = (document.documentElement && document.compatMode == 'CSS1Compat') ? document.documentElement : document.body;
                return {
                    scrollTop: a.scrollTop,
                    scrollLeft: a.scrollLeft,
                    width: self.innerWidth ? self.innerWidth : a.clientWidth,
                    height: self.innerHeight ? self.innerHeight : a.clientHeight
                };
            },
            ready: function (a) {
                if (FB.Dom._isReady) {
                    a && a();
                } else FB.Event.subscribe('dom.ready', a);
            },
            getPosition: function (a) {
                var b = 0,
                    c = 0;
                do {
                    b += a.offsetLeft;
                    c += a.offsetTop;
                } while (a = a.offsetParent);
                return {
                    x: b,
                    y: c
                };
            }
        });
        (function () {
            function domReady() {
                FB.Dom._isReady = true;
                FB.Event.fire('dom.ready');
                FB.Event.clear('dom.ready');
            }
            if (FB.Dom._isReady || document.readyState == 'complete') return domReady();
            if (document.addEventListener) {
                document.addEventListener('DOMContentLoaded', domReady, false);
            } else if (document.attachEvent) document.attachEvent('onreadystatechange', domReady);
            if (FB.UA.ie() && window === top)(function () {
                try {
                    document.documentElement.doScroll('left');
                } catch (error) {
                    setTimeout(arguments.callee, 0);
                    return;
                }
                domReady();
            })();
            var oldonload = window.onload;
            window.onload = function () {
                domReady();
                if (oldonload) if (typeof oldonload == 'string') {
                    eval(oldonload);
                } else oldonload();
            };
        })();
        FB.provide('Intl', (function () {
            var a = ('[' + '.!?' + '\u3002' + '\uFF01' + '\uFF1F' + '\u0964' + '\u2026' + '\u0EAF' + '\u1801' + '\u0E2F' + '\uFF0E' + ']');

            function b(e) {
                if (typeof e != 'string') return false;
                return e.match(new RegExp(a + '[' + ')"' + "'" + '\u00BB' + '\u0F3B' + '\u0F3D' + '\u2019' + '\u201D' + '\u203A' + '\u3009' + '\u300B' + '\u300D' + '\u300F' + '\u3011' + '\u3015' + '\u3017' + '\u3019' + '\u301B' + '\u301E' + '\u301F' + '\uFD3F' + '\uFF07' + '\uFF09' + '\uFF3D' + '\s' + ']*$'));
            }
            function c(e, f) {
                if (f !== undefined) if (typeof f != 'object') {
                    FB.log('The second arg to FB.Intl.tx() must be an Object for ' + 'FB.Intl.tx(' + e + ', ...)');
                } else {
                    var g;
                    for (var h in f) if (f.hasOwnProperty(h)) {
                        if (b(f[h])) {
                            g = new RegExp('\{' + h + '\}' + a + '*', 'g');
                        } else g = new RegExp('\{' + h + '\}', 'g');
                        e = e.replace(g, f[h]);
                    }
                }
                return e;
            }
            function d(e, f) {
                if (!FB.Intl._stringTable) return null;
                return c(FB.Intl._stringTable[e], f);
            }
            d._ = c;
            return {
                tx: d,
                _tx: c
            };
        })());
        FB.provide('', {
            bind: function () {
                var a = Array.prototype.slice.call(arguments),
                    b = a.shift(),
                    c = a.shift();
                return function () {
                    return b.apply(c, a.concat(Array.prototype.slice.call(arguments)));
                };
            },
            Class: function (a, b, c) {
                if (FB.CLASSES[a]) return FB.CLASSES[a];
                var d = b ||
                function () {};
                d.prototype = c;
                d.prototype.bind = function (e) {
                    return FB.bind(e, this);
                };
                d.prototype.constructor = d;
                FB.create(a, d);
                FB.CLASSES[a] = d;
                return d;
            },
            subclass: function (a, b, c, d) {
                if (FB.CLASSES[a]) return FB.CLASSES[a];
                var e = FB.create(b);
                FB.copy(d, e.prototype);
                d._base = e;
                d._callBase = function (f) {
                    var g = Array.prototype.slice.call(arguments, 1);
                    return e.prototype[f].apply(this, g);
                };
                return FB.Class(a, c ? c : function () {
                    if (e.apply) e.apply(this, arguments);
                }, d);
            },
            CLASSES: {}
        });
        FB.provide('Type', {
            isType: function (a, b) {
                while (a) if (a.constructor === b || a === b) {
                    return true;
                } else a = a._base;
                return false;
            }
        });
        FB.Class('Obj', null, FB.copy({
            setProperty: function (a, b) {
                if (FB.JSON.stringify(b) != FB.JSON.stringify(this[a])) {
                    this[a] = b;
                    this.fire(a, b);
                }
            }
        }, FB.EventProvider));
        FB.subclass('Dialog', 'Obj', function (a) {
            this.id = a;
            if (!FB.Dialog._dialogs) {
                FB.Dialog._dialogs = {};
                FB.Dialog._addOrientationHandler();
            }
            FB.Dialog._dialogs[a] = this;
        }, {});
        FB.provide('Dialog', {
            _dialogs: null,
            _lastYOffset: 0,
            _loaderEl: null,
            _overlayEl: null,
            _stack: [],
            _active: null,
            _popStateListenerOn: false,
            _hideOnPopState: function (a) {
                FB.Dialog.hide(FB.Dialog._stack.pop());
            },
            get: function (a) {
                return FB.Dialog._dialogs[a];
            },
            _findRoot: function (a) {
                while (a) {
                    if (FB.Dom.containsCss(a, 'fb_dialog')) return a;
                    a = a.parentNode;
                }
            },
            _createWWWLoader: function (a) {
                a = parseInt(a, 10);
                a = a ? a : 460;
                return FB.Dialog.create({
                    content: ('<div class="dialog_title">' + '  <a id="fb_dialog_loader_close">' + '    <div class="fb_dialog_close_icon"></div>' + '  </a>' + '  <span>Facebook</span>' + '  <div style="clear:both;"></div>' + '</div>' + '<div class="dialog_content"></div>' + '<div class="dialog_footer"></div>'),
                    width: a
                });
            },
            _createMobileLoader: function () {
                var a = FB.UA.nativeApp() ? '' : ('<table>' + '  <tbody>' + '    <tr>' + '      <td class="header_left">' + '        <label class="touchable_button">' + '          <input type="submit" value="' + FB.Intl.tx._("Annuler") + '"' + '            id="fb_dialog_loader_close"/>' + '        </label>' + '      </td>' + '      <td class="header_center">' + '        <div>' + FB.Intl.tx._("Chargement...") + '</div>' + '      </td>' + '      <td class="header_right">' + '      </td>' + '    </tr>' + '  </tbody>' + '</table>');
                return FB.Dialog.create({
                    classes: 'loading' + (FB.UA.iPad() ? ' centered' : ''),
                    content: ('<div class="dialog_header">' + a + '</div>')
                });
            },
            _restoreBodyPosition: function () {
                if (!FB.UA.iPad()) {
                    var a = document.getElementsByTagName('body')[0];
                    FB.Dom.removeCss(a, 'fb_hidden');
                }
            },
            _showIPadOverlay: function () {
                if (!FB.UA.iPad()) return;
                if (!FB.Dialog._overlayEl) {
                    FB.Dialog._overlayEl = document.createElement('div');
                    FB.Dialog._overlayEl.setAttribute('id', 'fb_dialog_ipad_overlay');
                    FB.Content.append(FB.Dialog._overlayEl, null);
                }
                FB.Dialog._overlayEl.className = '';
            },
            _hideIPadOverlay: function () {
                if (FB.UA.iPad()) FB.Dialog._overlayEl.className = 'hidden';
            },
            showLoader: function (a, b) {
                FB.Dialog._showIPadOverlay();
                if (!FB.Dialog._loaderEl) FB.Dialog._loaderEl = FB.Dialog._findRoot(FB.UA.mobile() ? FB.Dialog._createMobileLoader() : FB.Dialog._createWWWLoader(b));
                if (!a) a = function () {};
                var c = FB.$('fb_dialog_loader_close');
                FB.Dom.removeCss(c, 'fb_hidden');
                c.onclick = function () {
                    FB.Dialog._hideLoader();
                    FB.Dialog._restoreBodyPosition();
                    FB.Dialog._hideIPadOverlay();
                    a();
                };
                var d = FB.$('fb_dialog_ipad_overlay');
                if (d) d.ontouchstart = c.onclick;
                FB.Dialog._makeActive(FB.Dialog._loaderEl);
            },
            _hideLoader: function () {
                if (FB.Dialog._loaderEl && FB.Dialog._loaderEl == FB.Dialog._active) FB.Dialog._loaderEl.style.top = '-10000px';
            },
            _makeActive: function (a) {
                FB.Dialog._setDialogSizes();
                FB.Dialog._lowerActive();
                FB.Dialog._active = a;
                if (FB.Canvas) FB.Canvas.getPageInfo(function (b) {
                    FB.Dialog._centerActive(b);
                });
                FB.Dialog._centerActive(FB.Canvas._pageInfo);
            },
            _lowerActive: function () {
                if (!FB.Dialog._active) return;
                FB.Dialog._active.style.top = '-10000px';
                FB.Dialog._active = null;
            },
            _removeStacked: function (a) {
                FB.Dialog._stack = FB.Array.filter(FB.Dialog._stack, function (b) {
                    return b != a;
                });
            },
            _centerActive: function (a) {
                var b = FB.Dialog._active;
                if (!b) return;
                var c = FB.Dom.getViewportInfo(),
                    d = parseInt(b.offsetWidth, 10),
                    e = parseInt(b.offsetHeight, 10),
                    f = c.scrollLeft + (c.width - d) / 2,
                    g = (c.height - e) / 2.5;
                if (f < g) g = f;
                var h = c.height - e - g,
                    i = (c.height - e) / 2;
                if (a) i = a.scrollTop - a.offsetTop + (a.clientHeight - e) / 2;
                if (i < g) {
                    i = g;
                } else if (i > h) i = h;
                i += c.scrollTop;
                if (FB.UA.mobile()) {
                    var j = 100;
                    if (FB.UA.iPad()) {
                        j += (c.height - e) / 2;
                    } else {
                        var k = document.getElementsByTagName('body')[0];
                        FB.Dom.addCss(k, 'fb_hidden');
                        f = 10000;
                        i = 10000;
                    }
                    var l = FB.Dom.getByClass('fb_dialog_padding', b);
                    if (l.length) l[0].style.height = j + 'px';
                }
                b.style.left = (f > 0 ? f : 0) + 'px';
                b.style.top = (i > 0 ? i : 0) + 'px';
            },
            _setDialogSizes: function () {
                if (!FB.UA.mobile() || FB.UA.iPad()) return;
                for (var a in FB.Dialog._dialogs) if (document.getElementById(a)) {
                    var b = document.getElementById(a);
                    b.style.width = FB.UIServer.getDefaultSize().width + 'px';
                    b.style.height = FB.UIServer.getDefaultSize().height + 'px';
                }
            },
            _handleOrientationChange: function (a) {
                if (FB.UA.android() && screen.availWidth == FB.Dialog._availScreenWidth) {
                    window.setTimeout(FB.Dialog._handleOrientationChange, 50);
                    return;
                }
                FB.Dialog._availScreenWidth = screen.availWidth;
                if (FB.UA.iPad()) {
                    FB.Dialog._centerActive();
                } else for (var b in FB.Dialog._dialogs) if (document.getElementById(b)) document.getElementById(b).style.width = FB.UIServer.getDefaultSize().width + 'px';
            },
            _addOrientationHandler: function () {
                if (!FB.UA.mobile()) return;
                var a = "onorientationchange" in window ? 'orientationchange' : 'resize';
                FB.Dialog._availScreenWidth = screen.availWidth;
                FB.Event.listen(window, a, FB.Dialog._handleOrientationChange);
            },
            create: function (a) {
                a = a || {};
                var b = document.createElement('div'),
                    c = document.createElement('div'),
                    d = 'fb_dialog';
                if (a.closeIcon && a.onClose) {
                    var e = document.createElement('a');
                    e.className = 'fb_dialog_close_icon';
                    e.onclick = a.onClose;
                    b.appendChild(e);
                }
                d += ' ' + (a.classes || '');
                if (FB.UA.ie()) {
                    d += ' fb_dialog_legacy';
                    FB.Array.forEach(['vert_left', 'vert_right', 'horiz_top', 'horiz_bottom', 'top_left', 'top_right', 'bottom_left', 'bottom_right'], function (h) {
                        var i = document.createElement('span');
                        i.className = 'fb_dialog_' + h;
                        b.appendChild(i);
                    });
                } else d += (FB.UA.mobile()) ? ' fb_dialog_mobile' : ' fb_dialog_advanced';
                if (a.content) FB.Content.append(a.content, c);
                b.className = d;
                var f = parseInt(a.width, 10);
                if (!isNaN(f)) b.style.width = f + 'px';
                c.className = 'fb_dialog_content';
                b.appendChild(c);
                if (FB.UA.mobile()) {
                    var g = document.createElement('div');
                    g.className = 'fb_dialog_padding';
                    b.appendChild(g);
                }
                FB.Content.append(b);
                if (a.visible) FB.Dialog.show(b);
                return c;
            },
            show: function (a) {
                var b = FB.Dialog._findRoot(a);
                if (b) {
                    FB.Dialog._removeStacked(b);
                    FB.Dialog._hideLoader();
                    FB.Dialog._makeActive(b);
                    FB.Dialog._stack.push(b);
                    if ('fbCallID' in a) FB.Dialog.get(a.fbCallID).fire('iframe_show');
                    if (!FB.Event._popStateListenerOn) {
                        FB.Event.listen(window, 'popstate', FB.Dialog._hideOnPopState);
                        FB.Event._popStateListenerOn = true;
                    }
                }
            },
            hide: function (a) {
                var b = FB.Dialog._findRoot(a);
                if (b == FB.Dialog._active) {
                    FB.Dialog._lowerActive();
                    FB.Dialog._restoreBodyPosition();
                    FB.Dialog._hideIPadOverlay();
                    if ('fbCallID' in a) FB.Dialog.get(a.fbCallID).fire('iframe_hide');
                    if (FB.Event._popStateListenerOn) {
                        FB.Event.unlisten(window, 'popstate', FB.Dialog._hideOnPopState);
                        FB.Event._popStateListenerOn = false;
                    }
                }
            },
            remove: function (a) {
                a = FB.Dialog._findRoot(a);
                if (a) {
                    var b = FB.Dialog._active == a;
                    FB.Dialog._removeStacked(a);
                    if (b) {
                        FB.Dialog._hideLoader();
                        if (FB.Dialog._stack.length > 0) {
                            FB.Dialog.show(FB.Dialog._stack.pop());
                        } else {
                            FB.Dialog._lowerActive();
                            FB.Dialog._restoreBodyPosition();
                            FB.Dialog._hideIPadOverlay();
                        }
                    } else if (FB.Dialog._active === null && FB.Dialog._stack.length > 0) FB.Dialog.show(FB.Dialog._stack.pop());
                    window.setTimeout(function () {
                        a.parentNode.removeChild(a);
                    }, 3000);
                }
            },
            isActive: function (a) {
                var b = FB.Dialog._findRoot(a);
                return b && b === FB.Dialog._active;
            }
        });
        FB.provide('', {
            ui: function (a, b) {
                a = FB.copy({}, a);
                if (!a.method) {
                    FB.log('"method" is a required parameter for FB.ui().');
                    return null;
                }
                if ((a.method == 'permissions.request' || a.method == 'permissions.oauth') && (a.display == 'iframe' || a.display == 'dialog')) {
                    var c, d;
                    c = a.scope;
                    d = c.split(/\s|,/g);
                    for (var e = 0; e < d.length; e++) {
                        var f = FB.String.trim(d[e]);
                        if (f && !FB.initSitevars.iframePermissions[f]) {
                            a.display = 'popup';
                            break;
                        }
                    }
                }
                var g = FB.UIServer.prepareCall(a, b);
                if (!g) return null;
                var h = g.params.display;
                if (h === 'dialog') {
                    h = 'iframe';
                } else if (h === 'none') h = 'hidden';
                var i = FB.UIServer[h];
                if (!i) {
                    FB.log('"display" must be one of "popup", ' + '"dialog", "iframe", "touch", "async", "hidden", or "none"');
                    return null;
                }
                i(g);
                return g.dialog;
            }
        });
        FB.provide('UIServer', {
            Methods: {},
            _loadedNodes: {},
            _defaultCb: {},
            _resultToken: '"xxRESULTTOKENxx"',
            _forceHTTPS: false,
            genericTransform: function (a) {
                if (a.params.display == 'dialog' || a.params.display == 'iframe') FB.copy(a.params, {
                    display: 'iframe',
                    channel: FB.UIServer._xdChannelHandler(a.id, 'parent.parent'),
                    xd_channel: FB.XD._channel
                }, true);
                return a;
            },
            prepareCall: function (a, b) {
                var c = a.method.toLowerCase(),
                    d = FB.copy({}, FB.UIServer.Methods[c]),
                    e = FB.guid(),
                    f = (d.noHttps !== true) && (FB._https || (c !== 'auth.status' && c != 'login.status'));
                FB.UIServer._forceHTTPS = f;
                FB.copy(a, {
                    api_key: FB._apiKey,
                    app_id: FB._apiKey,
                    locale: FB._locale,
                    sdk: 'joey',
                    access_token: f && FB.getAccessToken() || undefined
                });
                a.display = FB.UIServer.getDisplayMode(d, a);
                if (!d.url) d.url = 'dialog/' + c;
                var g = {
                    cb: b,
                    id: e,
                    size: d.size || FB.UIServer.getDefaultSize(),
                    url: FB.getDomain(f ? 'https_www' : 'www') + d.url,
                    forceHTTPS: f,
                    params: a,
                    name: c,
                    dialog: new FB.Dialog(e)
                },
                    h = d.transform ? d.transform : FB.UIServer.genericTransform;
                if (h) {
                    g = h(g);
                    if (!g) return;
                }
                var i = d.getXdRelation || FB.UIServer.getXdRelation,
                    j = i(g.params);
                if (!(g.id in FB.UIServer._defaultCb) && !('next' in g.params) && !('redirect_uri' in g.params)) g.params.next = FB.UIServer._xdResult(g.cb, g.id, j, true);
                if (j === 'parent') FB.copy(g.params, {
                    channel_url: FB.UIServer._xdChannelHandler(e, 'parent.parent'),
                    xd_channel: FB.XD._channel
                }, true);
                g = FB.UIServer.prepareParams(g);
                return g;
            },
            prepareParams: function (a) {
                var b = a.params.method;
                if (!FB.Canvas.isTabIframe()) delete a.params.method;
                if (FB.TemplateUI && FB.TemplateUI.supportsTemplate(b, a)) {
                    if (FB.reportTemplates) console.log("Using template for " + b + ".");
                    FB.TemplateUI.useCachedUI(b, a);
                } else {
                    a.params = FB.JSON.flatten(a.params);
                    var c = FB.QS.encode(a.params);
                    if (!FB.UA.nativeApp() && FB.UIServer.urlTooLongForIE(a.url + '?' + c)) {
                        a.post = true;
                    } else if (c) a.url += '?' + c;
                }
                return a;
            },
            urlTooLongForIE: function (a) {
                return a.length > 2000;
            },
            getDisplayMode: function (a, b) {
                if (b.display === 'hidden' || b.display === 'none') return b.display;
                if (FB.Canvas.isTabIframe() && b.display !== 'popup') return 'async';
                if (FB.UA.mobile() || b.display === 'touch') return 'touch';
                if (!FB.getAccessToken() && b.display == 'dialog' && !a.loggedOutIframe) {
                    FB.log('"dialog" mode can only be used when the user is connected.');
                    return 'popup';
                }
                if (a.connectDisplay && !FB._inCanvas) return a.connectDisplay;
                return b.display || (FB.getAccessToken() ? 'dialog' : 'popup');
            },
            getXdRelation: function (a) {
                var b = a.display;
                if (b === 'popup' || b === 'touch') return 'opener';
                if (b === 'dialog' || b === 'iframe' || b === 'hidden' || b === 'none') return 'parent';
                if (b === 'async') return 'parent.frames[' + window.name + ']';
            },
            popup: function (a) {
                var b = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
                    c = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
                    d = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.documentElement.clientWidth,
                    e = typeof window.outerHeight != 'undefined' ? window.outerHeight : (document.documentElement.clientHeight - 22),
                    f = FB.UA.mobile() ? null : a.size.width,
                    g = FB.UA.mobile() ? null : a.size.height,
                    h = (b < 0) ? window.screen.width + b : b,
                    i = parseInt(h + ((d - f) / 2), 10),
                    j = parseInt(c + ((e - g) / 2.5), 10),
                    k = [];
                if (f !== null) k.push('width=' + f);
                if (g !== null) k.push('height=' + g);
                k.push('left=' + i);
                k.push('top=' + j);
                k.push('scrollbars=1');
                if (a.name == 'permissions.request' || a.name == 'permissions.oauth') k.push('location=1,toolbar=0');
                k = k.join(',');
                var l;
                if (a.post) {
                    l = window.open('about:blank', a.id, k);
                    if (l) {
                        FB.UIServer.setLoadedNode(a, l, 'popup');
                        FB.Content.submitToTarget({
                            url: a.url,
                            target: a.id,
                            params: a.params
                        });
                    }
                } else {
                    l = window.open(a.url, a.id, k);
                    if (l) FB.UIServer.setLoadedNode(a, l, 'popup');
                }
                if (!l) return;
                if (a.id in FB.UIServer._defaultCb) FB.UIServer._popupMonitor();
            },
            setLoadedNode: function (a, b, c) {
                if (a.params && a.params.display != 'popup') b.fbCallID = a.id;
                b = {
                    node: b,
                    type: c,
                    fbCallID: a.id
                };
                FB.UIServer._loadedNodes[a.id] = b;
            },
            getLoadedNode: function (a) {
                var b = typeof a == 'object' ? a.id : a,
                    c = FB.UIServer._loadedNodes[b];
                return c ? c.node : null;
            },
            hidden: function (a) {
                a.className = 'FB_UI_Hidden';
                a.root = FB.Content.appendHidden('');
                FB.UIServer._insertIframe(a);
            },
            iframe: function (a) {
                a.className = 'FB_UI_Dialog';
                var b = function () {
                        FB.UIServer._triggerDefault(a.id);
                    };
                a.root = FB.Dialog.create({
                    onClose: b,
                    closeIcon: true,
                    classes: (FB.UA.iPad() ? 'centered' : '')
                });
                if (!a.hideLoader) FB.Dialog.showLoader(b, a.size.width);
                FB.Dom.addCss(a.root, 'fb_dialog_iframe');
                FB.UIServer._insertIframe(a);
            },
            touch: function (a) {
                if (a.params && a.params.in_iframe) {
                    if (a.ui_created) {
                        FB.Dialog.showLoader(function () {
                            FB.UIServer._triggerDefault(a.id);
                        }, 0);
                    } else FB.UIServer.iframe(a);
                } else if (FB.UA.nativeApp() && !a.ui_created) {
                    a.frame = a.id;
                    FB.Native.onready(function () {
                        FB.UIServer.setLoadedNode(a, FB.Native.open(a.url + '#cb=' + a.frameName));
                    });
                    FB.UIServer._popupMonitor();
                } else if (!a.ui_created) FB.UIServer.popup(a);
            },
            async: function (a) {
                a.frame = window.name;
                delete a.url;
                delete a.size;
                FB.Arbiter.inform('showDialog', a);
            },
            getDefaultSize: function () {
                if (FB.UA.mobile()) if (FB.UA.iPad()) {
                    return {
                        width: 500,
                        height: 590
                    };
                } else if (FB.UA.android()) {
                    return {
                        width: screen.availWidth,
                        height: screen.availHeight
                    };
                } else {
                    var a = window.innerWidth,
                        b = window.innerHeight,
                        c = a / b > 1.2;
                    return {
                        width: a,
                        height: Math.max(b, (c ? screen.width : screen.height))
                    };
                }
                return {
                    width: 575,
                    height: 240
                };
            },
            _insertIframe: function (a) {
                FB.UIServer._loadedNodes[a.id] = false;
                var b = function (c) {
                        if (a.id in FB.UIServer._loadedNodes) FB.UIServer.setLoadedNode(a, c, 'iframe');
                    };
                if (a.post) {
                    FB.Content.insertIframe({
                        url: 'about:blank',
                        root: a.root,
                        className: a.className,
                        width: a.size.width,
                        height: a.size.height,
                        id: a.id,
                        onInsert: b,
                        onload: function (c) {
                            FB.Content.submitToTarget({
                                url: a.url,
                                target: c.name,
                                params: a.params
                            });
                        }
                    });
                } else FB.Content.insertIframe({
                    url: a.url,
                    root: a.root,
                    className: a.className,
                    width: a.size.width,
                    height: a.size.height,
                    id: a.id,
                    name: a.frameName,
                    onInsert: b
                });
            },
            _handleResizeMessage: function (a, b) {
                var c = FB.UIServer.getLoadedNode(a);
                if (!c) return;
                if (b.height) c.style.height = b.height + 'px';
                if (b.width) c.style.width = b.width + 'px';
                FB.Arbiter.inform('resize.ack', b || {}, 'parent.frames[' + c.name + ']', true);
                if (!FB.Dialog.isActive(c)) FB.Dialog.show(c);
            },
            _triggerDefault: function (a) {
                FB.UIServer._xdRecv({
                    frame: a
                }, FB.UIServer._defaultCb[a] ||
                function () {});
            },
            _popupMonitor: function () {
                var a;
                for (var b in FB.UIServer._loadedNodes) if (FB.UIServer._loadedNodes.hasOwnProperty(b) && b in FB.UIServer._defaultCb) {
                    var c = FB.UIServer._loadedNodes[b];
                    if (c.type != 'popup') continue;
                    win = c.node;
                    try {
                        if (win.closed) {
                            FB.UIServer._triggerDefault(b);
                        } else a = true;
                    } catch (d) {}
                }
                if (a && !FB.UIServer._popupInterval) {
                    FB.UIServer._popupInterval = window.setInterval(FB.UIServer._popupMonitor, 100);
                } else if (!a && FB.UIServer._popupInterval) {
                    window.clearInterval(FB.UIServer._popupInterval);
                    FB.UIServer._popupInterval = null;
                }
            },
            _xdChannelHandler: function (a, b) {
                var c = (FB.UIServer._forceHTTPS && FB.UA.ie() !== 7);
                return FB.XD.handler(function (d) {
                    var e = FB.UIServer.getLoadedNode(a);
                    if (!e) return;
                    if (d.type == 'resize') {
                        FB.UIServer._handleResizeMessage(a, d);
                    } else if (d.type == 'hide') {
                        FB.Dialog.hide(e);
                    } else if (d.type == 'rendered') {
                        var f = FB.Dialog._findRoot(e);
                        FB.Dialog.show(f);
                    } else if (d.type == 'fireevent') FB.Event.fire(d.event);
                }, b, true, null, c);
            },
            _xdNextHandler: function (a, b, c, d) {
                if (d) FB.UIServer._defaultCb[b] = a;
                return FB.XD.handler(function (e) {
                    FB.UIServer._xdRecv(e, a);
                }, c) + '&frame=' + b;
            },
            _xdRecv: function (a, b) {
                var c = FB.UIServer.getLoadedNode(a.frame);
                if (c) {
                    try {
                        if (FB.Dom.containsCss(c, 'FB_UI_Hidden')) {
                            window.setTimeout(function () {
                                c.parentNode.parentNode.removeChild(c.parentNode);
                            }, 3000);
                        } else if (FB.Dom.containsCss(c, 'FB_UI_Dialog')) {
                            FB.Dialog.remove(c);
                            if (FB.TemplateUI && FB.UA.mobile()) FB.TemplateUI.populateCache();
                        }
                    } catch (d) {}
                    try {
                        if (c.close) {
                            c.close();
                            FB.UIServer._popupCount--;
                        }
                    } catch (e) {}
                }
                delete FB.UIServer._loadedNodes[a.frame];
                delete FB.UIServer._defaultCb[a.frame];
                b(a);
            },
            _xdResult: function (a, b, c, d) {
                return (FB.UIServer._xdNextHandler(function (e) {
                    a && a(e.result && e.result != FB.UIServer._resultToken && FB.JSON.parse(e.result));
                }, b, c, d) + '&result=' + encodeURIComponent(FB.UIServer._resultToken));
            }
        });
        FB.provide('', {
            getLoginStatus: function (a, b) {
                if (!FB._apiKey) {
                    FB.log('FB.getLoginStatus() called before calling FB.init().');
                    return;
                }
                if (a) if (!b && FB.Auth._loadState == 'loaded') {
                    a({
                        status: FB._userStatus,
                        authResponse: FB._authResponse
                    });
                    return;
                } else FB.Event.subscribe('FB.loginStatus', a);
                if (!b && FB.Auth._loadState == 'loading') return;
                FB.Auth._loadState = 'loading';
                var c = function (d) {
                        FB.Auth._loadState = 'loaded';
                        FB.Event.fire('FB.loginStatus', d);
                        FB.Event.clear('FB.loginStatus');
                    };
                FB.Auth.fetchLoginStatus(c);
            },
            getAuthResponse: function () {
                return FB._authResponse;
            },
            getAccessToken: function () {
                return (FB._authResponse && FB._authResponse.accessToken) || null;
            },
            getUserID: function () {
                return FB._userID;
            },
            login: function (a, b) {
                if (b && b.perms && !b.scope) {
                    b.scope = b.perms;
                    delete b.perms;
                    FB.log('OAuth2 specification states that \'perms\' ' + 'should now be called \'scope\'.  Please update.');
                }
                FB.Auth.login(a, b);
            },
            logout: function (a) {
                FB.ui({
                    method: 'auth.logout',
                    display: 'hidden'
                }, a);
            }
        });
        FB.provide('Auth', {
            _callbacks: [],
            _xdStorePath: 'xd_localstorage/',
            login: function (a, b) {
                FB.ui(FB.copy({
                    method: 'permissions.oauth',
                    display: 'popup',
                    domain: location.hostname
                }, b || {}), a);
            },
            fetchLoginStatus: function (a) {
                if (FB.UA.mobile() && window.postMessage && window.localStorage) {
                    FB.Auth.staticAuthCheck(a);
                } else FB.ui({
                    method: 'login.status',
                    display: 'none',
                    domain: location.hostname
                }, a);
            },
            staticAuthCheck: function (a) {
                var b = FB.getDomain('https_staticfb');
                FB.Content.insertIframe({
                    root: FB.Content.appendHidden(''),
                    className: 'FB_UI_Hidden',
                    url: b + FB.Auth._xdStorePath,
                    onload: function (c) {
                        var d = frames[c.name],
                            e = FB.guid(),
                            f = false,
                            g = function (h) {
                                if (!f) {
                                    f = true;
                                    FB.Auth._staticAuthHandler(a, h);
                                }
                            };
                        FB.XD.handler(g, 'parent', true, e);
                        setTimeout(g, 500);
                        d.postMessage(FB.JSON.stringify({
                            method: 'getItem',
                            params: ['LoginInfo_' + FB._apiKey, true],
                            returnCb: e
                        }), b);
                    }
                });
            },
            _staticAuthHandler: function (a, b) {
                if (b && b.data && b.data.status && b.data.status == 'connected') {
                    var c, d = b.data.status;
                    if (b.data.https == 1) FB._https = true;
                    var e = b.data.authResponse || null;
                    c = FB.Auth.setAuthResponse(e, d);
                    a && a(c);
                }
                FB.ui({
                    method: 'login.status',
                    display: 'none'
                }, a);
            },
            setAuthResponse: function (a, b) {
                var c = 0;
                if (a) if (a.userID) {
                    c = a.userID;
                } else if (a.signedRequest) {
                    var d = FB.Auth.parseSignedRequest(a.signedRequest);
                    if (d && d.user_id) c = d.user_id;
                }
                var e = !FB._userID && a,
                    f = FB._userID && !a,
                    g = a && FB._userID != c,
                    h = e || f || g,
                    i = b != FB._userStatus,
                    j = {
                        authResponse: a,
                        status: b
                    };
                FB._authResponse = a;
                FB._userID = c;
                FB._userStatus = b;
                if (f || g) FB.Event.fire('auth.logout', j);
                if (e || g) FB.Event.fire('auth.login', j);
                if (h) FB.Event.fire('auth.authResponseChange', j);
                if (i) FB.Event.fire('auth.statusChange', j);
                if (FB.Auth._refreshTimer) {
                    window.clearTimeout(FB.Auth._refreshTimer);
                    delete FB.Auth._refreshTimer;
                }
                if (FB.Auth._loadState && a) FB.Auth._refreshTimer = window.setTimeout(function () {
                    FB.getLoginStatus(null, true);
                }, 1200000);
                return j;
            },
            _getContextType: function () {
                if (FB.UA.nativeApp()) return 3;
                if (FB.UA.mobile()) return 2;
                if (FB._inCanvas) return 5;
                return 1;
            },
            xdHandler: function (a, b, c, d, e) {
                return FB.UIServer._xdNextHandler(FB.Auth.xdResponseWrapper(a, d, e), b, c, true);
            },
            xdResponseWrapper: function (a, b, c) {
                return function (d) {
                    if (d.access_token) {
                        var e = FB.Auth.parseSignedRequest(d.signed_request);
                        b = {
                            accessToken: d.access_token,
                            userID: e.user_id,
                            expiresIn: parseInt(d.expires_in, 10),
                            signedRequest: d.signed_request
                        };
                        if (FB.Cookie.getEnabled()) {
                            var f = b.expiresIn === 0 ? 0 : (new Date()).getTime() + b.expiresIn * 1000,
                                g = FB.Cookie._domain;
                            if (!g && d.base_domain) g = '.' + d.base_domain;
                            FB.Cookie.setSignedRequestCookie(d.signed_request, f, g);
                        }
                        FB.Auth.setAuthResponse(b, 'connected');
                    } else if (!FB._authResponse && b) {
                        FB.Auth.setAuthResponse(b, 'connected');
                    } else if (!(b && c == 'permissions.oauth')) {
                        var h;
                        if (d.error && d.error === 'not_authorized') {
                            h = 'not_authorized';
                        } else h = 'unknown';
                        FB.Auth.setAuthResponse(null, h);
                        if (FB.Cookie.getEnabled()) FB.Cookie.clearSignedRequestCookie();
                    }
                    if (d && d.https == 1 && !FB._https) FB._https = true;
                    response = {
                        authResponse: FB._authResponse,
                        status: FB._userStatus
                    };
                    a && a(response);
                };
            },
            parseSignedRequest: function (a) {
                if (!a) return null;
                var b = a.split('.', 2),
                    c = b[1],
                    d = FB.Auth.base64URLDecode(c);
                return FB.JSON.parse(d);
            },
            base64URLDecode: function (a) {
                a = a.replace(/\-/g, '+').replace(/\_/g, '/');
                if (a.length % 4 !== 0) {
                    var b = 4 - a.length % 4;
                    for (var c = 0; c < b; c++) a = a + '=';
                }
                var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    e = "",
                    f, g, h = "",
                    i, j, k, l = "";
                for (var m = 0; m < a.length; m += 4) {
                    i = d.indexOf(a.charAt(m));
                    j = d.indexOf(a.charAt(m + 1));
                    k = d.indexOf(a.charAt(m + 2));
                    l = d.indexOf(a.charAt(m + 3));
                    f = (i << 2) | (j >> 4);
                    g = ((j & 15) << 4) | (k >> 2);
                    h = ((k & 3) << 6) | l;
                    e = e + String.fromCharCode(f);
                    if (k != 64) e = e + String.fromCharCode(g);
                    if (l != 64) e = e + String.fromCharCode(h);
                    f = g = h = "";
                    i = j = k = l = "";
                }
                return unescape(e);
            }
        });
        FB.provide('UIServer.Methods', {
            'permissions.oauth': {
                url: 'dialog/oauth',
                size: {
                    width: (FB.UA.mobile() ? null : 627),
                    height: (FB.UA.mobile() ? null : 326)
                },
                transform: function (a) {
                    if (!FB._apiKey) {
                        FB.log('FB.login() called before FB.init().');
                        return;
                    }
                    if (FB._authResponse && !a.params.scope) {
                        FB.log('FB.login() called when user is already connected.');
                        a.cb && a.cb({
                            status: FB._userStatus,
                            authResponse: FB._authResponse
                        });
                        return;
                    }
                    var b = a.cb,
                        c = a.id;
                    delete a.cb;
                    FB.copy(a.params, {
                        client_id: FB._apiKey,
                        redirect_uri: FB.URI.resolve(FB.Auth.xdHandler(b, c, 'opener', FB._authResponse, 'permissions.oauth')),
                        origin: FB.Auth._getContextType(),
                        response_type: 'token,signed_request',
                        domain: location.hostname
                    });
                    return a;
                }
            },
            'auth.logout': {
                url: 'logout.php',
                transform: function (a) {
                    if (!FB._apiKey) {
                        FB.log('FB.logout() called before calling FB.init().');
                    } else if (!FB._authResponse) {
                        FB.log('FB.logout() called without an access token.');
                    } else {
                        a.params.next = FB.Auth.xdHandler(a.cb, a.id, 'parent', FB._authResponse);
                        return a;
                    }
                }
            },
            'login.status': {
                url: 'dialog/oauth',
                transform: function (a) {
                    var b = a.cb,
                        c = a.id;
                    delete a.cb;
                    FB.copy(a.params, {
                        client_id: FB._apiKey,
                        redirect_uri: FB.Auth.xdHandler(b, c, 'parent', FB._authResponse),
                        origin: FB.Auth._getContextType(),
                        response_type: 'token,signed_request,code',
                        domain: location.hostname
                    });
                    return a;
                }
            }
        });
        FB.provide('CanvasInsights', {
            setDoneLoading: function (a) {
                FB.Canvas.setDoneLoading(a);
            }
        });
        FB.provide('Cookie', {
            _domain: null,
            _enabled: false,
            setEnabled: function (a) {
                FB.Cookie._enabled = !! a;
                if (typeof a == 'string') FB.Cookie._domain = a;
            },
            getEnabled: function () {
                return FB.Cookie._enabled;
            },
            loadMeta: function () {
                var a = document.cookie.match('\\bfbm_' + FB._apiKey + '=([^;]*)\\b'),
                    b;
                if (a) {
                    b = FB.QS.decode(a[1]);
                    if (!FB.Cookie._domain) FB.Cookie._domain = b.base_domain;
                }
                return b;
            },
            loadSignedRequest: function () {
                var a = document.cookie.match('\\bfbsr_' + FB._apiKey + '=([^;]*)\\b');
                if (!a) return null;
                return a[1];
            },
            setSignedRequestCookie: function (a, b, c) {
                if (!a) throw new Error('Value passed to FB.Cookie.setSignedRequestCookie ' + 'was empty.');
                if (!FB.Cookie.getEnabled()) return;
                if (c) {
                    var d = FB.QS.encode({
                        base_domain: c
                    });
                    FB.Cookie.setRaw('fbm_', d, b, c);
                }
                FB.Cookie._domain = c;
                FB.Cookie.setRaw('fbsr_', a, b, c);
            },
            clearSignedRequestCookie: function () {
                if (!FB.Cookie.getEnabled()) return;
                FB.Cookie.setRaw('fbsr_', '', 0, FB.Cookie._domain);
            },
            setRaw: function (a, b, c, d) {
                if (d) {
                    document.cookie = a + FB._apiKey + '=; expires=Wed, 04 Feb 2004 08:00:00 GMT;';
                    document.cookie = a + FB._apiKey + '=; expires=Wed, 04 Feb 2004 08:00:00 GMT;' + 'domain=' + location.hostname + ';';
                }
                var e = new Date(c).toGMTString();
                document.cookie = a + FB._apiKey + '=' + b + (b && c === 0 ? '' : '; expires=' + e) + '; path=/' + (d ? '; domain=' + d : '');
            }
        });
        FB.provide('Frictionless', {
            _allowedRecipients: {},
            _useFrictionless: false,
            _updateRecipients: function () {
                FB.Frictionless._allowedRecipients = {};
                FB.api('/me/apprequestformerrecipients', function (a) {
                    if (!a || a.error) return;
                    FB.Array.forEach(a.data, function (b) {
                        FB.Frictionless._allowedRecipients[b.recipient_id] = true;
                    }, false);
                });
            },
            init: function () {
                FB.Frictionless._useFrictionless = true;
                FB.getLoginStatus(function (a) {
                    if (a.status == 'connected') FB.Frictionless._updateRecipients();
                });
                FB.Event.subscribe('auth.login', function (a) {
                    if (a.authResponse) FB.Frictionless._updateRecipients();
                });
            },
            _processRequestResponse: function (a, b) {
                return function (c) {
                    var d = c && c.updated_frictionless;
                    if (FB.Frictionless._useFrictionless && d) FB.Frictionless._updateRecipients();
                    if (c) {
                        if (!b && c.frictionless) {
                            FB.Dialog._hideLoader();
                            FB.Dialog._restoreBodyPosition();
                            FB.Dialog._hideIPadOverlay();
                        }
                        delete c.frictionless;
                        delete c.updated_frictionless;
                    }
                    a && a(c);
                };
            },
            isAllowed: function (a) {
                if (!a) return false;
                if (typeof a === 'number') return FB.Frictionless._allowedRecipients[a];
                if (typeof a === 'string') a = a.split(',');
                a = FB.Array.map(a, FB.String.trim);
                var b = true,
                    c = false;
                FB.Array.forEach(a, function (d) {
                    b = b && FB.Frictionless._allowedRecipients[d];
                    c = true;
                }, false);
                return b && c;
            }
        });
        FB.provide('Canvas.Prefetcher', {
            _sampleRate: 0,
            _appIdsBlacklist: [],
            _links: [],
            COLLECT_AUTOMATIC: 0,
            COLLECT_MANUAL: 1,
            _collectionMode: 0,
            addStaticResource: function (a) {
                if (!FB._inCanvas || !FB._apiKey) return;
                FB.Canvas.Prefetcher._links.push(a);
            },
            setCollectionMode: function (a) {
                if (!FB._inCanvas || !FB._apiKey) return false;
                if (a != FB.Canvas.Prefetcher.COLLECT_AUTOMATIC && a != FB.Canvas.Prefetcher.COLLECT_MANUAL) return false;
                FB.Canvas.Prefetcher._collectionMode = a;
            },
            _maybeSample: function () {
                if (!FB._inCanvas || !FB._apiKey || !FB.Canvas.Prefetcher._sampleRate) return;
                var a = Math.random();
                if (a > 1 / FB.Canvas.Prefetcher._sampleRate) return;
                if (FB.Canvas.Prefetcher._appIdsBlacklist == '*') return;
                if (FB.Array.indexOf(FB.Canvas.Prefetcher._appIdsBlacklist, parseInt(FB._apiKey, 10)) != -1) return;
                window.setTimeout(FB.Canvas.Prefetcher._sample, 30000);
            },
            _sample: function () {
                var a = {
                    object: 'data',
                    link: 'href',
                    script: 'src'
                };
                if (FB.Canvas.Prefetcher._collectionMode == FB.Canvas.Prefetcher.COLLECT_AUTOMATIC) FB.Array.forEach(a, function (c, d) {
                    FB.Array.forEach(window.document.getElementsByTagName(d), function (e) {
                        if (e[c]) FB.Canvas.Prefetcher._links.push(e[c]);
                    });
                });
                var b = FB.JSON.stringify(FB.Canvas.Prefetcher._links);
                FB.api(FB._apiKey + '/staticresources', 'post', {
                    urls: b,
                    is_https: FB._https
                });
                FB.Canvas.Prefetcher._links = [];
            }
        });
        FB.provide('Canvas.EarlyFlush', {
            addResource: function (a) {
                return FB.Canvas.Prefetcher.addStaticResource(a);
            },
            setCollectionMode: function (a) {
                return FB.Canvas.Prefetcher.setCollectionMode(a);
            }
        });
        FB.provide('', {
            initSitevars: {},
            init: function (a) {
                a = FB.copy(a || {}, {
                    logging: true,
                    status: true
                });
                FB._userID = 0;
                FB._apiKey = a.appId || a.apiKey;
                if (!a.logging && window.location.toString().indexOf('fb_debug=1') < 0) FB._logging = false;
                FB.XD.init(a.channelUrl);
                if (FB.UA.mobile() && FB.TemplateUI && FB.TemplateData && FB.TemplateData._enabled && a.useCachedDialogs !== false) {
                    FB.TemplateUI.init();
                    FB.Event.subscribe('auth.statusChange', FB.TemplateData.update);
                }
                if (a.reportTemplates) FB.reportTemplates = true;
                if (a.frictionlessRequests) FB.Frictionless.init();
                if (FB._apiKey) {
                    FB.Cookie.setEnabled(a.cookie);
                    if (a.authResponse) {
                        FB.Auth.setAuthResponse(a.authResponse, 'connected');
                    } else {
                        var b = FB.Cookie.loadSignedRequest(),
                            c = FB.Auth.parseSignedRequest(b);
                        FB._userID = (c && c.user_id) || 0;
                        FB.Cookie.loadMeta();
                    }
                    if (a.status) FB.getLoginStatus();
                }
                if (FB._inCanvas) {
                    FB.Canvas._setHideFlashCallback(a.hideFlashCallback);
                    FB.Canvas.init();
                }
                FB.Event.subscribe('xfbml.parse', function () {
                    FB.XFBML.IframeWidget.batchWidgetPipeRequests();
                });
                if (a.xfbml) window.setTimeout(function () {
                    if (FB.XFBML) if (FB.initSitevars.parseXFBMLBeforeDomReady) {
                        FB.XFBML.parse();
                        var d = window.setInterval(function () {
                            FB.XFBML.parse();
                        }, 100);
                        FB.Dom.ready(function () {
                            window.clearInterval(d);
                            FB.XFBML.parse();
                        });
                    } else FB.Dom.ready(FB.XFBML.parse);
                }, 0);
                if (FB.Canvas && FB.Canvas.Prefetcher) FB.Canvas.Prefetcher._maybeSample();
            }
        });
        FB.provide('UIServer.MobileIframableMethod', {
            transform: function (a) {
                if (a.params.display === 'touch' && a.params.access_token && window.postMessage) {
                    a.params.channel = FB.UIServer._xdChannelHandler(a.id, 'parent');
                    if (!FB.UA.nativeApp()) a.params.in_iframe = 1;
                    return a;
                } else return FB.UIServer.genericTransform(a);
            },
            getXdRelation: function (a) {
                var b = a.display;
                if (b === 'touch' && window.postMessage && a.in_iframe) return 'parent';
                return FB.UIServer.getXdRelation(a);
            }
        });
        FB.provide('UIServer.Methods', {
            'stream.share': {
                size: {
                    width: 650,
                    height: 340
                },
                url: 'sharer.php',
                transform: function (a) {
                    if (!a.params.u) a.params.u = window.location.toString();
                    return a;
                }
            },
            'fbml.dialog': {
                size: {
                    width: 575,
                    height: 300
                },
                url: 'render_fbml.php',
                loggedOutIframe: true,
                transform: function (a) {
                    return a;
                }
            },
            'auth.logintofacebook': {
                size: {
                    width: 530,
                    height: 287
                },
                url: 'login.php',
                transform: function (a) {
                    a.params.skip_api_login = 1;
                    var b = FB.UIServer.getXdRelation(a.params),
                        c = FB.UIServer._xdResult(a.cb, a.id, b, true);
                    a.params.next = FB.getDomain(FB._https ? 'https_www' : 'www') + "login.php?" + FB.QS.encode({
                        api_key: FB._apiKey,
                        next: c,
                        skip_api_login: 1
                    });
                    return a;
                }
            },
            apprequests: {
                transform: function (a) {
                    a = FB.UIServer.MobileIframableMethod.transform(a);
                    a.params.frictionless = FB.Frictionless && FB.Frictionless._useFrictionless;
                    if (a.params.frictionless) {
                        if (FB.Frictionless.isAllowed(a.params.to)) {
                            a.params.in_iframe = true;
                            a.hideLoader = true;
                        }
                        a.cb = FB.Frictionless._processRequestResponse(a.cb, a.hideLoader);
                    }
                    return a;
                },
                getXdRelation: function (a) {
                    return FB.UIServer.MobileIframableMethod.getXdRelation(a);
                }
            },
            feed: FB.UIServer.MobileIframableMethod
        });
        FB.provide('', {
            share: function (a) {
                FB.log('FB.share() has been deprecated. Please use FB.ui() instead.');
                FB.ui({
                    display: 'popup',
                    method: 'stream.share',
                    u: a
                });
            },
            publish: function (a, b) {
                FB.log('FB.publish() has been deprecated. Please use FB.ui() instead.');
                a = a || {};
                FB.ui(FB.copy({
                    display: 'popup',
                    method: 'stream.publish',
                    preview: 1
                }, a || {}), b);
            },
            addFriend: function (a, b) {
                FB.log('FB.addFriend() has been deprecated. Please use FB.ui() instead.');
                FB.ui({
                    display: 'popup',
                    id: a,
                    method: 'friend.add'
                }, b);
            }
        });
        FB.UIServer.Methods['auth.login'] = FB.UIServer.Methods['permissions.request'];
        FB.provide('XFBML', {
            _renderTimeout: 30000,
            getElements: function (a, b, c) {
                var d = FB.Array,
                    e = FB.XFBML._getDomElements(a, b, c),
                    f = FB.Dom.getByClass(b + '-' + c, a, 'div');
                e = d.toArray(e);
                f = d.toArray(f);
                f = d.filter(f, function (g) {
                    return !g.hasChildNodes() || (g.childNodes.length === 1 && g.childNodes[0].nodeType === 3);
                });
                return d.merge(e, f);
            },
            parse: function (a, b) {
                a = a || document.body;
                var c = 1,
                    d = function () {
                        c--;
                        if (c === 0) {
                            b && b();
                            FB.Event.fire('xfbml.render');
                        }
                    },
                    e = {};
                if (FB.XFBML._widgetPipeIsEnabled()) FB.Array.forEach(FB.XFBML._tagInfos, function (f) {
                    if (f.supportsWidgetPipe) {
                        var g = f.xmlns ? f.xmlns : 'fb',
                            h = FB.XFBML.getElements(a, g, f.localName);
                        e[f.localName] = h;
                        FB.XFBML._widgetPipeEnabledTagCount += h.length;
                    }
                });
                FB.Array.forEach(FB.XFBML._tagInfos, function (f) {
                    if (!f.xmlns) f.xmlns = 'fb';
                    var g;
                    if (e[f.localName] !== undefined) {
                        g = e[f.localName];
                    } else g = FB.XFBML.getElements(a, f.xmlns, f.localName);
                    for (var h = 0; h < g.length; h++) {
                        c++;
                        FB.XFBML._processElement(g[h], f, d);
                    }
                });
                FB.Event.fire('xfbml.parse');
                window.setTimeout(function () {
                    if (c > 0) FB.log(c + ' XFBML tags failed to render in ' + FB.XFBML._renderTimeout + 'ms.');
                }, FB.XFBML._renderTimeout);
                d();
            },
            registerTag: function (a) {
                FB.XFBML._tagInfos.push(a);
            },
            shouldUseWidgetPipe: function () {
                if (!FB.XFBML._widgetPipeIsEnabled()) return false;
                var a = FB.XFBML._widgetPipeEnabledTagCount > 1;
                return a;
            },
            getBoolAttr: function (a, b) {
                b = FB.XFBML.getAttr(a, b);
                return (b && FB.Array.indexOf(['true', '1', 'yes', 'on'], b.toLowerCase()) > -1);
            },
            getAttr: function (a, b) {
                return (a.getAttribute(b) || a.getAttribute(b.replace(/_/g, '-')) || a.getAttribute(b.replace(/-/g, '_')) || a.getAttribute(b.replace(/-/g, '')) || a.getAttribute(b.replace(/_/g, '')) || a.getAttribute('data-' + b) || a.getAttribute('data-' + b.replace(/_/g, '-')) || a.getAttribute('data-' + b.replace(/-/g, '_')) || a.getAttribute('data-' + b.replace(/-/g, '')) || a.getAttribute('data-' + b.replace(/_/g, '')) || null);
            },
            _processElement: function (dom, tagInfo, cb) {
                var element = dom._element;
                if (element) {
                    element.subscribe('render', cb);
                    element.process();
                } else {
                    var processor = function () {
                            var fn = eval(tagInfo.className),
                                isLogin = false,
                                showFaces = true,
                                showLoginFace = false,
                                renderInIframe = false,
                                addToTimeline = (tagInfo.className === 'FB.XFBML.AddToTimeline');
                            if ((tagInfo.className === 'FB.XFBML.LoginButton') || addToTimeline) {
                                renderInIframe = FB.XFBML.getBoolAttr(dom, 'render-in-iframe');
                                mode = FB.XFBML.getAttr(dom, 'mode');
                                showFaces = (addToTimeline && mode != 'button') || FB.XFBML.getBoolAttr(dom, 'show-faces');
                                showLoginFace = FB.XFBML.getBoolAttr(dom, 'show-login-face');
                                isLogin = addToTimeline || renderInIframe || FB._iframeLoginButton || showFaces || showLoginFace || FB.XFBML.getBoolAttr(dom, 'oneclick');
                                if (isLogin && !addToTimeline) fn = FB.XFBML.Login;
                            }
                            element = dom._element = new fn(dom);
                            if (isLogin) {
                                showFaces = !! showFaces;
                                showLoginFace = !! showLoginFace;
                                var extraParams = {
                                    show_faces: showFaces,
                                    show_login_face: showLoginFace,
                                    add_to_profile: addToTimeline,
                                    mode: mode
                                },
                                    scope = FB.XFBML.getAttr(dom, 'scope') || FB.XFBML.getAttr(dom, 'perms');
                                if (scope) extraParams.scope = scope;
                                element.setExtraParams(extraParams);
                            }
                            element.subscribe('render', cb);
                            element.process();
                        };
                    if (FB.CLASSES[tagInfo.className.substr(3)]) {
                        processor();
                    } else FB.log('Tag ' + tagInfo.className + ' was not found.');
                }
            },
            _getDomElements: function (a, b, c) {
                var d = b + ':' + c;
                if (FB.UA.firefox()) {
                    return a.getElementsByTagNameNS(document.body.namespaceURI, d);
                } else if (FB.UA.ie() < 9) {
                    try {
                        var f = document.namespaces;
                        if (f && f[b]) {
                            var g = a.getElementsByTagName(c);
                            if (!document.addEventListener || g.length > 0) return g;
                        }
                    } catch (e) {}
                    return a.getElementsByTagName(d);
                } else return a.getElementsByTagName(d);
            },
            _tagInfos: [{
                localName: 'activity',
                className: 'FB.XFBML.Activity'
            }, {
                localName: 'add-profile-tab',
                className: 'FB.XFBML.AddProfileTab'
            }, {
                localName: 'add-to-timeline',
                className: 'FB.XFBML.AddToTimeline'
            }, {
                localName: 'bookmark',
                className: 'FB.XFBML.Bookmark'
            }, {
                localName: 'comments',
                className: 'FB.XFBML.Comments'
            }, {
                localName: 'comments-count',
                className: 'FB.XFBML.CommentsCount'
            }, {
                localName: 'connect-bar',
                className: 'FB.XFBML.ConnectBar'
            }, {
                localName: 'fan',
                className: 'FB.XFBML.Fan'
            }, {
                localName: 'like',
                className: 'FB.XFBML.Like',
                supportsWidgetPipe: true
            }, {
                localName: 'like-box',
                className: 'FB.XFBML.LikeBox'
            }, {
                localName: 'live-stream',
                className: 'FB.XFBML.LiveStream'
            }, {
                localName: 'login',
                className: 'FB.XFBML.Login'
            }, {
                localName: 'login-button',
                className: 'FB.XFBML.LoginButton'
            }, {
                localName: 'facepile',
                className: 'FB.XFBML.Facepile'
            }, {
                localName: 'friendpile',
                className: 'FB.XFBML.Friendpile'
            }, {
                localName: 'name',
                className: 'FB.XFBML.Name'
            }, {
                localName: 'profile-pic',
                className: 'FB.XFBML.ProfilePic'
            }, {
                localName: 'question',
                className: 'FB.XFBML.Question'
            }, {
                localName: 'recommendations',
                className: 'FB.XFBML.Recommendations'
            }, {
                localName: 'recommendations-bar',
                className: 'FB.XFBML.RecommendationsBar'
            }, {
                localName: 'registration',
                className: 'FB.XFBML.Registration'
            }, {
                localName: 'send',
                className: 'FB.XFBML.Send'
            }, {
                localName: 'serverfbml',
                className: 'FB.XFBML.ServerFbml'
            }, {
                localName: 'share-button',
                className: 'FB.XFBML.ShareButton'
            }, {
                localName: 'social-context',
                className: 'FB.XFBML.SocialContext'
            }, {
                localName: 'subscribe',
                className: 'FB.XFBML.Subscribe'
            }],
            _widgetPipeEnabledTagCount: 0,
            _widgetPipeIsEnabled: function () {
                return FB.widgetPipeEnabledApps && FB.widgetPipeEnabledApps[FB._apiKey] !== undefined;
            }
        });
        (function () {
            try {
                if (document.namespaces && !document.namespaces.item.fb) document.namespaces.add('fb');
            } catch (a) {}
        }());
        FB.provide('XFBML', {
            set: function (a, b, c) {
                FB.log('FB.XFBML.set() has been deprecated.');
                a.innerHTML = b;
                FB.XFBML.parse(a, c);
            }
        });
        FB.subclass('Waitable', 'Obj', function () {}, {
            set: function (a) {
                this.setProperty('value', a);
            },
            error: function (a) {
                this.fire("error", a);
            },
            wait: function (a, b) {
                if (b) this.subscribe('error', b);
                this.monitor('value', this.bind(function () {
                    if (this.value !== undefined) {
                        a(this.value);
                        return true;
                    }
                }));
            }
        });
        FB.subclass('Data.Query', 'Waitable', function () {
            if (!FB.Data.Query._c) FB.Data.Query._c = 1;
            this.name = 'v_' + FB.Data.Query._c++;
        }, {
            parse: function (a) {
                var b = FB.String.format.apply(null, a),
                    c = (/^select (.*?) from (\w+)\s+where (.*)$/i).exec(b);
                this.fields = this._toFields(c[1]);
                this.table = c[2];
                this.where = this._parseWhere(c[3]);
                for (var d = 1; d < a.length; d++) if (FB.Type.isType(a[d], FB.Data.Query)) a[d].hasDependency = true;
                return this;
            },
            toFql: function () {
                var a = 'select ' + this.fields.join(',') + ' from ' + this.table + ' where ';
                switch (this.where.type) {
                case 'unknown':
                    a += this.where.value;
                    break;
                case 'index':
                    a += this.where.key + '=' + this._encode(this.where.value);
                    break;
                case 'in':
                    if (this.where.value.length == 1) {
                        a += this.where.key + '=' + this._encode(this.where.value[0]);
                    } else a += this.where.key + ' in (' + FB.Array.map(this.where.value, this._encode).join(',') + ')';
                    break;
                }
                return a;
            },
            _encode: function (a) {
                return typeof (a) == 'string' ? FB.String.quote(a) : a;
            },
            toString: function () {
                return '#' + this.name;
            },
            _toFields: function (a) {
                return FB.Array.map(a.split(','), FB.String.trim);
            },
            _parseWhere: function (s) {
                var re = (/^\s*(\w+)\s*=\s*(.*)\s*$/i).exec(s),
                    result, value, type = 'unknown';
                if (re) {
                    value = re[2];
                    if (/^(["'])(?:\\?.)*?\1$/.test(value)) {
                        value = eval(value);
                        type = 'index';
                    } else if (/^\d+\.?\d*$/.test(value)) type = 'index';
                }
                if (type == 'index') {
                    result = {
                        type: 'index',
                        key: re[1],
                        value: value
                    };
                } else result = {
                    type: 'unknown',
                    value: s
                };
                return result;
            }
        });
        FB.provide('Data', {
            query: function (a, b) {
                var c = new FB.Data.Query().parse(arguments);
                FB.Data.queue.push(c);
                FB.Data._waitToProcess();
                return c;
            },
            waitOn: function (dependencies, callback) {
                var result = new FB.Waitable(),
                    count = dependencies.length;
                if (typeof (callback) == 'string') {
                    var s = callback;
                    callback = function (args) {
                        return eval(s);
                    };
                }
                FB.Array.forEach(dependencies, function (item) {
                    item.monitor('value', function () {
                        var done = false;
                        if (FB.Data._getValue(item) !== undefined) {
                            count--;
                            done = true;
                        }
                        if (count === 0) {
                            var value = callback(FB.Array.map(dependencies, FB.Data._getValue));
                            result.set(value !== undefined ? value : true);
                        }
                        return done;
                    });
                });
                return result;
            },
            _getValue: function (a) {
                return FB.Type.isType(a, FB.Waitable) ? a.value : a;
            },
            _selectByIndex: function (a, b, c, d) {
                var e = new FB.Data.Query();
                e.fields = a;
                e.table = b;
                e.where = {
                    type: 'index',
                    key: c,
                    value: d
                };
                FB.Data.queue.push(e);
                FB.Data._waitToProcess();
                return e;
            },
            _waitToProcess: function () {
                if (FB.Data.timer < 0) FB.Data.timer = setTimeout(FB.Data._process, 10);
            },
            _process: function () {
                FB.Data.timer = -1;
                var a = {},
                    b = FB.Data.queue;
                FB.Data.queue = [];
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    if (d.where.type == 'index' && !d.hasDependency) {
                        FB.Data._mergeIndexQuery(d, a);
                    } else a[d.name] = d;
                }
                var e = {
                    q: {}
                };
                FB.copy(e.q, a, true, function (f) {
                    return f.toFql();
                });
                e.queries = FB.JSON.stringify(e.queries);
                FB.api('/fql', 'GET', e, function (f) {
                    if (f.error) {
                        FB.Array.forEach(a, function (g) {
                            g.error(new Error(f.error.message));
                        });
                    } else FB.Array.forEach(f.data, function (g) {
                        a[g.name].set(g.fql_result_set);
                    });
                });
            },
            _mergeIndexQuery: function (a, b) {
                var c = a.where.key,
                    d = a.where.value,
                    e = 'index_' + a.table + '_' + c,
                    f = b[e];
                if (!f) {
                    f = b[e] = new FB.Data.Query();
                    f.fields = [c];
                    f.table = a.table;
                    f.where = {
                        type: 'in',
                        key: c,
                        value: []
                    };
                }
                FB.Array.merge(f.fields, a.fields);
                FB.Array.merge(f.where.value, [d]);
                f.wait(function (g) {
                    a.set(FB.Array.filter(g, function (h) {
                        return h[c] == d;
                    }));
                });
            },
            timer: -1,
            queue: []
        });
        window.setTimeout(function () {
            var a = /(connect.facebook.net|facebook.com\/assets.php).*?#(.*)/;
            FB.Array.forEach(document.getElementsByTagName('script'), function (b) {
                if (b.src) {
                    var c = a.exec(b.src);
                    if (c) {
                        var d = FB.QS.decode(c[2]);
                        FB.Array.forEach(d, function (e, f) {
                            if (e == '0') d[f] = 0;
                        });
                        d.oauth = true;
                        FB.init(d);
                    }
                }
            });
            if (window.fbAsyncInit && !window.fbAsyncInit.hasRun) {
                window.fbAsyncInit.hasRun = true;
                fbAsyncInit();
            }
        }, 0);
        FB.provide('Native', {
            NATIVE_READY_EVENT: 'fbNativeReady',
            onready: function (a) {
                if (!FB.UA.nativeApp()) {
                    FB.log('FB.Native.onready only works when the page is rendered ' + 'in a WebView of the native Facebook app. Test if this is the ' + 'case calling FB.UA.nativeApp()');
                    return;
                }
                if (window.__fbNative && !this.nativeReady) FB.provide('Native', window.__fbNative);
                if (this.nativeReady) {
                    a();
                } else {
                    var b = function (c) {
                            window.removeEventListener(FB.Native.NATIVE_READY_EVENT, b);
                            FB.Native.onready(a);
                        };
                    window.addEventListener(FB.Native.NATIVE_READY_EVENT, b, false);
                }
            }
        });
        FB.provide('UIServer.Methods', {
            'pay.prompt': {
                transform: function (a) {
                    var b = FB.XD.handler(function (c) {
                        a.cb(FB.JSON.parse(c.response));
                    }, 'parent.frames[' + (window.name || 'iframe_canvas') + ']');
                    a.params.channel = b;
                    FB.Arbiter.inform('Pay.Prompt', a.params);
                    return false;
                }
            }
        });
        FB.provide('UIServer.Methods', {
            pay: {
                size: {
                    width: 555,
                    height: 120
                },
                noHttps: true,
                connectDisplay: 'popup',
                transform: function (a) {
                    if (!FB._inCanvas) {
                        a.params.order_info = FB.JSON.stringify(a.params.order_info);
                        return a;
                    }
                    var b = FB.XD.handler(function (c) {
                        a.cb(c.response ? FB.JSON.parse(c.response) : null);
                    }, 'parent.frames[' + (window.name || 'iframe_canvas') + ']');
                    a.params.channel = b;
                    a.params.uiserver = true;
                    FB.Arbiter.inform('Pay.Prompt', a.params);
                    return false;
                }
            }
        });
        FB.provide('Helper', {
            isUser: function (a) {
                return a < 2.2e+09 || (a >= 1e+14 && a <= 100099999989999) || (a >= 8.9e+13 && a <= 89999999999999);
            },
            getLoggedInUser: function () {
                return FB.getUserID();
            },
            upperCaseFirstChar: function (a) {
                if (a.length > 0) {
                    return a.substr(0, 1).toUpperCase() + a.substr(1);
                } else return a;
            },
            getProfileLink: function (a, b, c) {
                c = c || (a ? FB.getDomain('www') + 'profile.php?id=' + a.uid : null);
                if (c) b = '<a class="fb_link" href="' + c + '">' + b + '</a>';
                return b;
            },
            invokeHandler: function (handler, scope, args) {
                if (handler) if (typeof handler === 'string') {
                    eval(handler);
                } else if (handler.apply) handler.apply(scope, args || []);
            },
            fireEvent: function (a, b) {
                var c = b._attr.href;
                b.fire(a, c);
                FB.Event.fire(a, c, b);
            },
            executeFunctionByName: function (a) {
                var b = Array.prototype.slice.call(arguments, 1),
                    c = a.split("."),
                    d = c.pop(),
                    e = window;
                for (var f = 0; f < c.length; f++) e = e[c[f]];
                return e[d].apply(this, b);
            }
        });
        FB.provide('TemplateData', {
            _initialized: false,
            _version: 0,
            _response: null,
            _localStorageTimeout: 60 * 60 * 24,
            _enabled: true,
            enabled: function () {
                return FB.TemplateData._enabled && FB.TemplateData._initialized && FB.TemplateData.supportsLocalStorage() && FB._userStatus == 'connected' && FB.TemplateData.getResponse();
            },
            supportsLocalStorage: function () {
                try {
                    return 'localStorage' in window && window.localStorage !== null;
                } catch (a) {
                    return false;
                }
            },
            _isStale: function (a) {
                if (!a || !a.version || a.version != FB.TemplateData._version || a.currentUserID != FB.getUserID()) return true;
                var b = Math.round((new Date()).getTime());
                return (b - a.setAt) / 1000 > FB.TemplateData._localStorageTimeout;
            },
            getResponse: function () {
                var a = FB.TemplateData;
                try {
                    a._response = a._response || (a.supportsLocalStorage() && FB.JSON.parse(localStorage.FB_templateDataResponse || "null"));
                } catch (b) {
                    a._response = null;
                }
                if (a._isStale(a._response)) a.saveResponse(null);
                return a._response;
            },
            saveResponse: function (a) {
                FB.TemplateData._response = a;
                if (FB.TemplateData.supportsLocalStorage()) localStorage.FB_templateDataResponse = FB.JSON.stringify(a);
            },
            getData: function () {
                var a = FB.TemplateData.getResponse();
                return a ? a.data : {};
            },
            init: function (a) {
                if (!a) return;
                FB.TemplateData._initialized = true;
                FB.TemplateData._version = a;
                if (FB.TemplateData.supportsLocalStorage() && !('FB_templateDataResponse' in localStorage)) FB.TemplateData.clear();
            },
            clear: function () {
                FB.TemplateData.saveResponse(null);
            },
            update: function (a) {
                if (FB._userStatus != 'connected') FB.TemplateData.clear();
                if (FB._userStatus == 'connected' && !FB.TemplateData.getResponse()) FB.api({
                    method: 'dialog.template_data'
                }, function (b) {
                    if ('error_code' in b) return;
                    var c = {
                        data: b,
                        currentUserID: FB.getUserID(),
                        setAt: (new Date()).getTime(),
                        version: FB.TemplateData._version
                    };
                    FB.TemplateData.saveResponse(c);
                });
            }
        });
        FB.subclass('TemplateUI', 'Obj', function (a, b) {
            this.method = a;
            var c = FB.UA.nativeApp() ? 0 : 1,
                d = {
                    display: 'touch',
                    preview_template: 1,
                    in_iframe: c,
                    locale: FB._locale,
                    v: FB.TemplateUI._version,
                    user_agent: navigator.userAgent
                };
            if (window.devicePixelRatio) d.m_pixel_ratio = window.devicePixelRatio;
            var e = FB.QS.encode(d);
            this.cachedCall = {
                url: FB.getDomain('staticfb') + 'dialog/' + a + '?' + e,
                frameName: FB.guid(),
                id: FB.guid(),
                size: FB.UIServer.getDefaultSize(),
                hideLoader: true
            };
            FB.XD.handler(this.bind(function (g) {
                if (g.type == 'getParams') this.setProperty('getParamsCb', g.returnCb);
            }), 'parent', true, this.cachedCall.frameName);
            if (c) {
                FB.UIServer.iframe(this.cachedCall);
                FB.Dialog.hide(this.cachedCall.root);
            } else if (b && !FB.TemplateUI._preloads[this.cachedCall.url]) {
                var f = document.createElement('div');
                FB.TemplateUI._preloads[this.cachedCall.url] = {
                    container: f
                };
                FB.Content.insertIframe({
                    url: this.cachedCall.url,
                    root: FB.Content.appendHidden(f)
                });
            }
        }, {
            use: function (a) {
                if (!this.cachedCall.root) {
                    FB.UIServer.touch(this.cachedCall);
                    var b = FB.TemplateUI._preloads[this.cachedCall.url];
                    if (b && b.container) {
                        b.container.parentNode.removeChild(b.container);
                        delete b.container;
                    }
                }
                a.ui_created = true;
                a.root = this.cachedCall.root;
                FB.UIServer.setLoadedNode(a, FB.UIServer.getLoadedNode(this.cachedCall.id));
                delete FB.UIServer._loadedNodes[this.cachedCall.id];
                var c = FB.Dialog._dialogs[a.id];
                FB.Dialog._dialogs[this.cachedCall.id] = c;
                c.id = this.cachedCall.id;
                delete FB.Dialog._dialogs[a.id];
                FB.UIServer.getLoadedNode(a).fbCallID = this.cachedCall.id;
                this.cachedCall.id = a.id;
                var d = {};
                FB.copy(d, a.params);
                FB.copy(d, FB.TemplateData.getData()[this.method]);
                d.frictionless = FB.TemplateUI.isFrictionlessAppRequest(this.method, d);
                d.common = FB.TemplateData.getData().common;
                d.method = this.method;
                this.setParams(d);
                if (FB.UA.nativeApp()) FB.UIServer._popupMonitor();
            },
            setParams: function (a) {
                this.monitor('getParamsCb', this.bind(function () {
                    if (this.getParamsCb) {
                        var b = frames[this.cachedCall.frameName] || FB.UIServer.getLoadedNode(this.cachedCall);
                        b.postMessage(FB.JSON.stringify({
                            params: a,
                            cb: this.getParamsCb
                        }), '*');
                        return true;
                    }
                }));
            }
        });
        FB.provide('TemplateUI', {
            _timer: null,
            _cache: {},
            _preloads: {},
            _version: 0,
            init: function () {
                FB.TemplateData.init(FB.TemplateUI._version);
                FB.TemplateUI.initCache();
            },
            useCachedUI: function (a, b) {
                try {
                    FB.TemplateUI.populateCache();
                    cache = FB.TemplateUI._cache[a];
                    delete FB.TemplateUI._cache[a];
                    cache.use(b);
                } catch (c) {
                    FB.TemplateData.clear();
                }
            },
            populateCache: function (a) {
                if (!FB.TemplateData.enabled() || !FB.UA.mobile()) return;
                clearInterval(FB.TemplateUI._timer);
                var b = {
                    feed: true,
                    apprequests: true
                };
                for (var c in b) if (!(c in FB.TemplateUI._cache)) FB.TemplateUI._cache[c] = new FB.TemplateUI(c, a);
            },
            initCache: function () {
                FB.TemplateUI._timer = setInterval(function () {
                    FB.TemplateUI.populateCache(true);
                }, 2000);
            },
            supportsTemplate: function (a, b) {
                return FB.TemplateData.enabled() && FB.TemplateUI.paramsAllowTemplate(a, b.params) && b.params.display === 'touch' && FB.UA.mobile();
            },
            paramsAllowTemplate: function (a, b) {
                var c = {
                    feed: {
                        to: 1,
                        attachment: 1,
                        source: 1
                    },
                    apprequests: {}
                };
                if (!(a in c)) return false;
                for (var d in c[a]) if (b[d]) return false;
                return !FB.TemplateUI.willWriteOnGet(a, b);
            },
            isFrictionlessAppRequest: function (a, b) {
                return a === 'apprequests' && FB.Frictionless && FB.Frictionless._useFrictionless;
            },
            willWriteOnGet: function (a, b) {
                return FB.TemplateUI.isFrictionlessAppRequest(a, b) && b.to && FB.Frictionless.isAllowed(b.to);
            }
        });
        FB.provide('URI', {
            resolve: function (a) {
                if (!a) return window.location.href;
                var b = document.createElement('div');
                b.innerHTML = '<a href="' + a.replace(/"/g, '&quot;') + '"></a>';
                return b.firstChild.href;
            }
        });
        FB.Class('XFBML.Element', function (a) {
            this.dom = a;
        }, FB.copy({
            getAttribute: function (a, b, c) {
                var d = FB.XFBML.getAttr(this.dom, a);
                return d ? (c ? c(d) : d) : b;
            },
            _getBoolAttribute: function (a, b) {
                if (FB.XFBML.getAttr(this.dom, a) === null) return b;
                return FB.XFBML.getBoolAttr(this.dom, a);
            },
            _getPxAttribute: function (a, b) {
                return this.getAttribute(a, b, function (c) {
                    var d = parseInt(c.replace('px', ''), 10);
                    if (isNaN(d)) {
                        return b;
                    } else return d;
                });
            },
            _getAttributeFromList: function (a, b, c) {
                return this.getAttribute(a, b, function (d) {
                    d = d.toLowerCase();
                    if (FB.Array.indexOf(c, d) > -1) {
                        return d;
                    } else return b;
                });
            },
            isValid: function () {
                for (var a = this.dom; a; a = a.parentNode) if (a == document.body) return true;
            },
            clear: function () {
                this.dom.innerHTML = '';
            }
        }, FB.EventProvider));
        FB.subclass('XFBML.IframeWidget', 'XFBML.Element', null, {
            _iframeName: null,
            _showLoader: true,
            _refreshOnAuthChange: false,
            _allowReProcess: false,
            _fetchPreCachedLoader: false,
            _visibleAfter: 'load',
            _widgetPipeEnabled: false,
            getUrlBits: function () {
                throw new Error('Inheriting class needs to implement getUrlBits().');
            },
            setupAndValidate: function () {
                return true;
            },
            oneTimeSetup: function () {},
            getSize: function () {},
            getIframeName: function () {
                if (!this._iframeName && this._widgetPipeEnabled && FB.XFBML.shouldUseWidgetPipe()) {
                    this._iframeName = this.generateWidgetPipeIframeName();
                    FB.XFBML.IframeWidget.allWidgetPipeIframes[this._iframeName] = this;
                    if (FB.XFBML.IframeWidget.masterWidgetPipeIframe === null) FB.XFBML.IframeWidget.masterWidgetPipeIframe = this;
                }
                return this._iframeName;
            },
            getIframeTitle: function () {},
            getChannelUrl: function () {
                if (!this._channelUrl) {
                    var a = this;
                    this._channelUrl = FB.XD.handler(function (b) {
                        a.fire('xd.' + b.type, b);
                    }, 'parent.parent', true);
                }
                return this._channelUrl;
            },
            getIframeNode: function () {
                return this.dom.getElementsByTagName('iframe')[0];
            },
            arbiterInform: function (event, a, b, c) {
                if (FB.XD.sendToFacebook) {
                    FB.XD.sendToFacebook(this.getIframeName(), {
                        method: event,
                        params: FB.JSON.stringify(a || {}),
                        behavior: c || FB.Arbiter.BEHAVIOR_PERSISTENT
                    });
                } else if (this.loaded) {
                    this._arbiterInform(event, a, b, c);
                } else this.subscribe('iframe.onload', FB.bind(this._arbiterInform, this, event, a, c));
            },
            _arbiterInform: function (event, a, b, c) {
                var d = 'parent.frames["' + this.getIframeNode().name + '"]';
                FB.Arbiter.inform(event, a, d, b, c);
            },
            getDefaultWebDomain: function () {
                return 'www';
            },
            getDefaultStaticDomain: function () {
                return 'cdn';
            },
            process: function (a) {
                if (this._done) {
                    if (!this._allowReProcess && !a) return;
                    this.clear();
                } else this._oneTimeSetup();
                this._done = true;
                this._iframeName = this._iframeName || FB.guid();
                if (!this.setupAndValidate()) {
                    this.fire('render');
                    return;
                }
                if (this._showLoader) this._addLoader();
                FB.Dom.addCss(this.dom, 'fb_iframe_widget');
                if (this._visibleAfter != 'immediate') {
                    FB.Dom.addCss(this.dom, 'fb_hide_iframes');
                } else this.subscribe('iframe.onload', FB.bind(this.fire, this, 'render'));
                var b = this.getSize() || {},
                    c = this.getFullyQualifiedURL();
                if (b.width == '100%') FB.Dom.addCss(this.dom, 'fb_iframe_widget_fluid');
                FB.Content.insertIframe({
                    url: c,
                    root: this.dom.appendChild(document.createElement('span')),
                    name: this.getIframeName(),
                    title: this.getIframeTitle(),
                    className: FB._localeIsRtl ? 'fb_rtl' : 'fb_ltr',
                    height: b.height,
                    width: b.width,
                    onload: FB.bind(this.fire, this, 'iframe.onload')
                });
                this.loaded = false;
                this.subscribe('iframe.onload', FB.bind(function () {
                    this.loaded = true;
                }, this));
            },
            generateWidgetPipeIframeName: function () {
                FB.XFBML.IframeWidget.widgetPipeIframeCount++;
                return 'fb_iframe_' + FB.XFBML.IframeWidget.widgetPipeIframeCount;
            },
            getFullyQualifiedURL: function () {
                if (FB.XFBML.shouldUseWidgetPipe() && this._widgetPipeEnabled) return this._getWidgetPipeShell();
                var a = this._getURL();
                if (!this._fetchPreCachedLoader) a += '?' + FB.QS.encode(this._getQS());
                if (a.length > 2000) {
                    a = 'about:blank';
                    var b = FB.bind(function () {
                        this._postRequest();
                        this.unsubscribe('iframe.onload', b);
                    }, this);
                    this.subscribe('iframe.onload', b);
                }
                return a;
            },
            _getWidgetPipeShell: function () {
                return FB.getDomain('www') + 'common/widget_pipe_shell.php';
            },
            _oneTimeSetup: function () {
                this.subscribe('xd.resize', FB.bind(this._handleResizeMsg, this));
                this.subscribe('xd.resize', FB.bind(this._bubbleResizeEvent, this));
                if (FB.getLoginStatus) {
                    this.subscribe('xd.refreshLoginStatus', FB.bind(FB.getLoginStatus, FB, function () {}, true));
                    this.subscribe('xd.logout', FB.bind(FB.logout, FB, function () {}));
                }
                if (this._refreshOnAuthChange) this._setupAuthRefresh();
                if (this._visibleAfter == 'load') this.subscribe('iframe.onload', FB.bind(this._makeVisible, this));
                this.oneTimeSetup();
            },
            _makeVisible: function () {
                this._removeLoader();
                FB.Dom.removeCss(this.dom, 'fb_hide_iframes');
                this.fire('render');
            },
            _setupAuthRefresh: function () {
                FB.getLoginStatus(FB.bind(function (a) {
                    var b = a.status;
                    FB.Event.subscribe('auth.statusChange', FB.bind(function (c) {
                        if (!this.isValid()) return;
                        if (b == 'unknown' || c.status == 'unknown') this.process(true);
                        b = c.status;
                    }, this));
                }, this));
            },
            _handleResizeMsg: function (a) {
                if (!this.isValid()) return;
                var b = this.getIframeNode();
                b.style.height = a.height + 'px';
                if (a.width) b.style.width = a.width + 'px';
                b.style.border = 'none';
                this._makeVisible();
            },
            _bubbleResizeEvent: function (a) {
                var b = {
                    height: a.height,
                    width: a.width,
                    pluginId: this.getAttribute('plugin-id')
                };
                FB.Event.fire('xfbml.resize', b);
            },
            _addLoader: function () {
                if (!this._loaderDiv) {
                    FB.Dom.addCss(this.dom, 'fb_iframe_widget_loader');
                    this._loaderDiv = document.createElement('div');
                    this._loaderDiv.className = 'FB_Loader';
                    this.dom.appendChild(this._loaderDiv);
                }
            },
            _removeLoader: function () {
                if (this._loaderDiv) {
                    FB.Dom.removeCss(this.dom, 'fb_iframe_widget_loader');
                    if (this._loaderDiv.parentNode) this._loaderDiv.parentNode.removeChild(this._loaderDiv);
                    this._loaderDiv = null;
                }
            },
            _getQS: function () {
                return FB.copy({
                    api_key: FB._apiKey,
                    locale: FB._locale,
                    sdk: 'joey',
                    ref: this.getAttribute('ref')
                }, this.getUrlBits().params);
            },
            _getURL: function () {
                var a = this.getDefaultWebDomain(),
                    b = '';
                if (this._fetchPreCachedLoader) {
                    a = this.getDefaultStaticDomain();
                    b = 'static/';
                }
                return FB.getDomain(a) + 'plugins/' + b + this.getUrlBits().name + '.php';
            },
            _postRequest: function () {
                FB.Content.submitToTarget({
                    url: this._getURL(),
                    target: this.getIframeNode().name,
                    params: this._getQS()
                });
            }
        });
        FB.provide('XFBML.IframeWidget', {
            widgetPipeIframeCount: 0,
            masterWidgetPipeIframe: null,
            allWidgetPipeIframes: {},
            batchWidgetPipeRequests: function () {
                if (!FB.XFBML.IframeWidget.masterWidgetPipeIframe) return;
                var a = FB.XFBML.IframeWidget._groupWidgetPipeDescriptions(),
                    b = {
                        widget_pipe: FB.JSON.stringify(a),
                        href: window.location,
                        site: location.hostname,
                        channel: FB.XFBML.IframeWidget.masterWidgetPipeIframe.getChannelUrl(),
                        api_key: FB._apiKey,
                        locale: FB._locale,
                        sdk: 'joey'
                    },
                    c = FB.guid(),
                    d = FB.XFBML.IframeWidget.masterWidgetPipeIframe.dom,
                    e = d.appendChild(document.createElement('span'));
                FB.Content.insertIframe({
                    url: 'about:blank',
                    root: e,
                    name: c,
                    className: 'fb_hidden fb_invisible',
                    onload: function () {
                        FB.Content.submitToTarget({
                            url: FB._domain.www + 'widget_pipe.php?widget_pipe=1',
                            target: c,
                            params: b
                        });
                    }
                });
            },
            _groupWidgetPipeDescriptions: function () {
                var a = {};
                for (var b in FB.XFBML.IframeWidget.allWidgetPipeIframes) {
                    var c = FB.XFBML.IframeWidget.allWidgetPipeIframes[b],
                        d = c.getUrlBits(),
                        e = {
                            widget: d.name
                        };
                    FB.copy(e, d.params);
                    a[b] = e;
                }
                return a;
            }
        });
        FB.subclass('XFBML.Activity', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'load',
            _refreshOnAuthChange: true,
            setupAndValidate: function () {
                this._attr = {
                    border_color: this.getAttribute('border-color'),
                    colorscheme: this.getAttribute('color-scheme'),
                    filter: this.getAttribute('filter'),
                    action: this.getAttribute('action'),
                    max_age: this.getAttribute('max_age'),
                    font: this.getAttribute('font'),
                    linktarget: this.getAttribute('linktarget', '_blank'),
                    header: this._getBoolAttribute('header'),
                    height: this._getPxAttribute('height', 300),
                    recommendations: this._getBoolAttribute('recommendations'),
                    site: this.getAttribute('site', location.hostname),
                    width: this._getPxAttribute('width', 300)
                };
                return true;
            },
            getSize: function () {
                return {
                    width: this._attr.width,
                    height: this._attr.height
                };
            },
            getUrlBits: function () {
                return {
                    name: 'activity',
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.ButtonElement', 'XFBML.Element', null, {
            _allowedSizes: ['icon', 'small', 'medium', 'large', 'xlarge'],
            onClick: function () {
                throw new Error('Inheriting class needs to implement onClick().');
            },
            setupAndValidate: function () {
                return true;
            },
            getButtonMarkup: function () {
                return this.getOriginalHTML();
            },
            getOriginalHTML: function () {
                return this._originalHTML;
            },
            process: function () {
                if (!('_originalHTML' in this)) this._originalHTML = FB.String.trim(this.dom.innerHTML);
                if (!this.setupAndValidate()) {
                    this.fire('render');
                    return;
                }
                var a = this._getAttributeFromList('size', 'medium', this._allowedSizes),
                    b = '',
                    c = '';
                if (a == 'icon') {
                    b = 'fb_button_simple';
                } else {
                    var d = FB._localeIsRtl ? '_rtl' : '';
                    c = this.getButtonMarkup();
                    b = 'fb_button' + d + ' fb_button_' + a + d;
                }
                if (c !== '') {
                    this.dom.innerHTML = ('<a class="' + b + '">' + '<span class="fb_button_text">' + c + '</span>' + '</a>');
                    this.dom.firstChild.onclick = FB.bind(this.onClick, this);
                }
                this.fire('render');
            }
        });
        FB.subclass('XFBML.AddProfileTab', 'XFBML.ButtonElement', null, {
            getButtonMarkup: function () {
                return FB.Intl.tx._("Ajouter un onglet de profil sur Facebook");
            },
            onClick: function () {
                FB.ui({
                    method: 'profile.addtab'
                }, this.bind(function (a) {
                    if (a.tab_added) FB.Helper.invokeHandler(this.getAttribute('on-add'), this);
                }));
            }
        });
        FB.subclass('XFBML.Facepile', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'load',
            _extraParams: {},
            setupAndValidate: function () {
                this._attr = {
                    href: this.getAttribute('href'),
                    channel: this.getChannelUrl(),
                    colorscheme: this.getAttribute('colorscheme', 'light'),
                    max_rows: this.getAttribute('max-rows'),
                    action: this.getAttribute('action', 'like'),
                    tense: this.getAttribute('tense', 'past'),
                    width: this._getPxAttribute('width', 200),
                    ref: this.getAttribute('ref'),
                    size: this.getAttribute('size', 'small'),
                    extended_social_context: this.getAttribute('extended_social_context', false),
                    login_text: this.dom.innerHTML
                };
                this.clear();
                for (var a in this._extraParams) this._attr[a] = this._extraParams[a];
                return true;
            },
            setExtraParams: function (a) {
                this._extraParams = a;
            },
            oneTimeSetup: function () {
                var a = FB._userStatus;
                FB.Event.subscribe('auth.statusChange', FB.bind(function (b) {
                    if (a == 'connected' || b.status == 'connected') this.process(true);
                    a = b.status;
                }, this));
            },
            getSize: function () {
                if (this._attr.size == 'large') return {
                    width: this._attr.width,
                    height: 90
                };
                return {
                    width: this._attr.width,
                    height: 70
                };
            },
            getUrlBits: function () {
                return {
                    name: 'facepile',
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.AddToTimeline', 'XFBML.Facepile', null, {
            _visibleAfter: 'load',
            getSize: function () {
                return {
                    width: 300,
                    height: 250
                };
            },
            getUrlBits: function () {
                return {
                    name: 'add_to_timeline',
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.Bookmark', 'XFBML.ButtonElement', null, {
            getButtonMarkup: function () {
                return FB.Intl.tx._("Ajouter un signet sur Facebook");
            },
            onClick: function () {
                FB.ui({
                    method: 'bookmark.add'
                }, this.bind(function (a) {
                    if (a.bookmarked) FB.Helper.invokeHandler(this.getAttribute('on-add'), this);
                }));
            }
        });
        FB.subclass('XFBML.Comments', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'immediate',
            _refreshOnAuthChange: true,
            setupAndValidate: function () {
                var a = {
                    channel_url: this.getChannelUrl(),
                    colorscheme: this.getAttribute('colorscheme'),
                    numposts: this.getAttribute('num-posts', 10),
                    width: this._getPxAttribute('width', 550),
                    href: this.getAttribute('href'),
                    permalink: this.getAttribute('permalink'),
                    publish_feed: this.getAttribute('publish_feed'),
                    mobile: this._getBoolAttribute('mobile')
                };
                if (FB.initSitevars.enableMobileComments && FB.UA.mobile() && a.mobile !== false) a.mobile = true;
                if (!a.href) {
                    a.migrated = this.getAttribute('migrated');
                    a.xid = this.getAttribute('xid');
                    a.title = this.getAttribute('title', document.title);
                    a.url = this.getAttribute('url', document.URL);
                    a.quiet = this.getAttribute('quiet');
                    a.reverse = this.getAttribute('reverse');
                    a.simple = this.getAttribute('simple');
                    a.css = this.getAttribute('css');
                    a.notify = this.getAttribute('notify');
                    if (!a.xid) {
                        var b = document.URL.indexOf('#');
                        if (b > 0) {
                            a.xid = encodeURIComponent(document.URL.substring(0, b));
                        } else a.xid = encodeURIComponent(document.URL);
                    }
                    if (a.migrated) a.href = 'http://www.facebook.com/plugins/comments_v1.php?' + 'app_id=' + FB._apiKey + '&xid=' + encodeURIComponent(a.xid) + '&url=' + encodeURIComponent(a.url);
                } else {
                    var c = this.getAttribute('fb_comment_id');
                    if (!c) {
                        c = FB.QS.decode(document.URL.substring(document.URL.indexOf('?') + 1)).fb_comment_id;
                        if (c && c.indexOf('#') > 0) c = c.substring(0, c.indexOf('#'));
                    }
                    if (c) {
                        a.fb_comment_id = c;
                        this.subscribe('render', FB.bind(function () {
                            if (!window.location.hash) window.location.hash = this.getIframeNode().id;
                        }, this));
                    }
                }
                this._attr = a;
                return true;
            },
            oneTimeSetup: function () {
                this.subscribe('xd.addComment', FB.bind(this._handleCommentMsg, this));
                this.subscribe('xd.commentCreated', FB.bind(this._handleCommentCreatedMsg, this));
                this.subscribe('xd.commentRemoved', FB.bind(this._handleCommentRemovedMsg, this));
            },
            getSize: function () {
                if (this._attr.mobile) return {
                    width: '100%',
                    height: 160
                };
                return {
                    width: this._attr.width,
                    height: 160
                };
            },
            getUrlBits: function () {
                return {
                    name: 'comments',
                    params: this._attr
                };
            },
            getDefaultWebDomain: function () {
                if (this._attr.mobile) {
                    return 'https_m';
                } else return 'https_www';
            },
            _handleCommentMsg: function (a) {
                if (!this.isValid()) return;
                FB.Event.fire('comments.add', {
                    post: a.post,
                    user: a.user,
                    widget: this
                });
            },
            _handleCommentCreatedMsg: function (a) {
                if (!this.isValid()) return;
                var b = {
                    href: a.href,
                    commentID: a.commentID,
                    parentCommentID: a.parentCommentID
                };
                FB.Event.fire('comment.create', b);
            },
            _handleCommentRemovedMsg: function (a) {
                if (!this.isValid()) return;
                var b = {
                    href: a.href,
                    commentID: a.commentID
                };
                FB.Event.fire('comment.remove', b);
            }
        });
        FB.subclass('XFBML.CommentsCount', 'XFBML.Element', null, {
            process: function () {
                this._href = this.getAttribute('href', window.location.href);
                this._count = FB.Data._selectByIndex(['commentsbox_count'], 'link_stat', 'url', this._href);
                FB.Dom.addCss(this.dom, 'fb_comments_count_zero');
                this._count.wait(FB.bind(function () {
                    var a = this._count.value[0].commentsbox_count;
                    this.dom.innerHTML = FB.String.format('<span class="fb_comments_count">{0}</span>', a);
                    if (a > 0) FB.Dom.removeCss(this.dom, 'fb_comments_count_zero');
                    this.fire('render');
                }, this));
            }
        });
        FB.provide('Anim', {
            ate: function (a, b, c, d) {
                c = !isNaN(parseFloat(c)) && c >= 0 ? c : 750;
                var e = 40,
                    f = {},
                    g = {},
                    h = null,
                    i = a.style,
                    j = setInterval(FB.bind(function () {
                        if (!h) h = new Date().getTime();
                        var k = 1;
                        if (c != 0) k = Math.min((new Date().getTime() - h) / c, 1);
                        FB.Array.forEach(b, FB.bind(function (l, m) {
                            if (!f[m]) {
                                var n = FB.Dom.getStyle(a, m);
                                if (n === false) return;
                                f[m] = this._parseCSS(n + '');
                            }
                            if (!g[m]) g[m] = this._parseCSS(l.toString());
                            var o = '';
                            FB.Array.forEach(f[m], function (p, q) {
                                if (isNaN(g[m][q].numPart) && g[m][q].textPart == '?') {
                                    o = p.numPart + p.textPart;
                                } else if (isNaN(p.numPart)) {
                                    o = p.textPart;
                                } else o += (p.numPart + Math.ceil((g[m][q].numPart - p.numPart) * Math.sin(Math.PI / 2 * k))) + g[m][q].textPart + ' ';
                            });
                            FB.Dom.setStyle(a, m, o);
                        }, this));
                        if (k == 1) {
                            clearInterval(j);
                            if (d) d(a);
                        }
                    }, this), e);
            },
            _parseCSS: function (a) {
                var b = [];
                FB.Array.forEach(a.split(' '), function (c) {
                    var d = parseInt(c, 10);
                    b.push({
                        numPart: d,
                        textPart: c.replace(d, '')
                    });
                });
                return b;
            }
        });
        FB.provide('Insights', {
            impression: function (a, b) {
                var c = FB.guid(),
                    d = "//ah8.facebook.com/impression.php/" + c + "/",
                    e = new Image(1, 1),
                    f = [];
                if (!a.api_key && FB._apiKey) a.api_key = FB._apiKey;
                for (var g in a) f.push(encodeURIComponent(g) + '=' + encodeURIComponent(a[g]));
                d += '?' + f.join('&');
                if (b) e.onload = b;
                e.src = d;
            }
        });
        FB.subclass('XFBML.ConnectBar', 'XFBML.Element', null, {
            _initialHeight: null,
            _initTopMargin: 0,
            _picFieldName: 'pic_square',
            _page: null,
            _displayed: false,
            _notDisplayed: false,
            _container: null,
            _animationSpeed: 0,
            process: function () {
                FB.getLoginStatus(this.bind(function (a) {
                    FB.Event.monitor('auth.statusChange', this.bind(function () {
                        if (this.isValid() && FB._userStatus == 'connected') {
                            this._uid = FB.Helper.getLoggedInUser();
                            FB.api({
                                method: 'Connect.shouldShowConnectBar'
                            }, this.bind(function (b) {
                                if (b != 2) {
                                    this._animationSpeed = (b == 0) ? 750 : 0;
                                    this._showBar();
                                } else this._noRender();
                            }));
                        } else this._noRender();
                        return false;
                    }));
                }));
            },
            _showBar: function () {
                var a = FB.Data._selectByIndex(['first_name', 'profile_url', this._picFieldName], 'user', 'uid', this._uid),
                    b = FB.Data._selectByIndex(['display_name'], 'application', 'api_key', FB._apiKey);
                FB.Data.waitOn([a, b], FB.bind(function (c) {
                    c[0][0].site_name = c[1][0].display_name;
                    if (!this._displayed) {
                        this._displayed = true;
                        this._notDisplayed = false;
                        this._renderConnectBar(c[0][0]);
                        this.fire('render');
                        FB.Insights.impression({
                            lid: 104,
                            name: 'widget_load'
                        });
                        this.fire('connectbar.ondisplay');
                        FB.Event.fire('connectbar.ondisplay', this);
                        FB.Helper.invokeHandler(this.getAttribute('on-display'), this);
                    }
                }, this));
            },
            _noRender: function () {
                if (this._displayed) {
                    this._displayed = false;
                    this._closeConnectBar();
                }
                if (!this._notDisplayed) {
                    this._notDisplayed = true;
                    this.fire('render');
                    this.fire('connectbar.onnotdisplay');
                    FB.Event.fire('connectbar.onnotdisplay', this);
                    FB.Helper.invokeHandler(this.getAttribute('on-not-display'), this);
                }
            },
            _renderConnectBar: function (a) {
                var b = document.createElement('div'),
                    c = document.createElement('div');
                b.className = 'fb_connect_bar';
                c.className = 'fb_reset fb_connect_bar_container';
                c.appendChild(b);
                document.body.appendChild(c);
                this._container = c;
                this._initialHeight = Math.round(parseFloat(FB.Dom.getStyle(c, 'height')) + parseFloat(FB.Dom.getStyle(c, 'borderBottomWidth')));
                b.innerHTML = FB.String.format('<div class="fb_buttons">' + '<a href="#" class="fb_bar_close">' + '<img src="{1}" alt="{2}" title="{2}"/>' + '</a>' + '</div>' + '<a href="{7}" class="fb_profile" target="_blank">' + '<img src="{3}" alt="{4}" title="{4}"/>' + '</a>' + '{5}' + ' <span>' + '<a href="{8}" class="fb_learn_more" target="_blank">{6}</a> &ndash; ' + '<a href="#" class="fb_no_thanks">{0}</a>' + '</span>', FB.Intl.tx._("Non merci"), FB.getDomain('cdn') + FB.XFBML.ConnectBar.imgs.buttonUrl, FB.Intl.tx._("Fermer"), a[this._picFieldName] || FB.getDomain('cdn') + FB.XFBML.ConnectBar.imgs.missingProfileUrl, FB.String.escapeHTML(a.first_name), FB.Intl.tx._("Bonjour {firstName}. \u003Cstrong>{siteName}\u003C\/strong> utilise Facebook pour personnaliser votre navigation.", {
                    firstName: FB.String.escapeHTML(a.first_name),
                    siteName: FB.String.escapeHTML(a.site_name)
                }), FB.Intl.tx._("En savoir plus"), a.profile_url, FB.getDomain('www') + 'sitetour/connect.php');
                var d = this;
                FB.Array.forEach(b.getElementsByTagName('a'), function (g) {
                    g.onclick = FB.bind(d._clickHandler, d);
                });
                this._page = document.body;
                var e = 0;
                if (this._page.parentNode) {
                    e = Math.round((parseFloat(FB.Dom.getStyle(this._page.parentNode, 'height')) - parseFloat(FB.Dom.getStyle(this._page, 'height'))) / 2);
                } else e = parseInt(FB.Dom.getStyle(this._page, 'marginTop'), 10);
                e = isNaN(e) ? 0 : e;
                this._initTopMargin = e;
                if (!window.XMLHttpRequest) {
                    c.className += " fb_connect_bar_container_ie6";
                } else {
                    c.style.top = (-1 * this._initialHeight) + 'px';
                    FB.Anim.ate(c, {
                        top: '0px'
                    }, this._animationSpeed);
                }
                var f = {
                    marginTop: this._initTopMargin + this._initialHeight + 'px'
                };
                if (FB.UA.ie()) {
                    f.backgroundPositionY = this._initialHeight + 'px';
                } else f.backgroundPosition = '? ' + this._initialHeight + 'px';
                FB.Anim.ate(this._page, f, this._animationSpeed);
            },
            _clickHandler: function (a) {
                a = a || window.event;
                var b = a.target || a.srcElement;
                while (b.nodeName != 'A') b = b.parentNode;
                switch (b.className) {
                case 'fb_bar_close':
                    FB.api({
                        method: 'Connect.connectBarMarkAcknowledged'
                    });
                    FB.Insights.impression({
                        lid: 104,
                        name: 'widget_user_closed'
                    });
                    this._closeConnectBar();
                    break;
                case 'fb_learn_more':
                case 'fb_profile':
                    window.open(b.href);
                    break;
                case 'fb_no_thanks':
                    this._closeConnectBar();
                    FB.api({
                        method: 'Connect.connectBarMarkAcknowledged'
                    });
                    FB.Insights.impression({
                        lid: 104,
                        name: 'widget_user_no_thanks'
                    });
                    FB.api({
                        method: 'auth.revokeAuthorization',
                        block: true
                    }, this.bind(function () {
                        this.fire('connectbar.ondeauth');
                        FB.Event.fire('connectbar.ondeauth', this);
                        FB.Helper.invokeHandler(this.getAttribute('on-deauth'), this);
                        if (this._getBoolAttribute('auto-refresh', true)) window.location.reload();
                    }));
                    break;
                }
                return false;
            },
            _closeConnectBar: function () {
                this._notDisplayed = true;
                var a = {
                    marginTop: this._initTopMargin + 'px'
                };
                if (FB.UA.ie()) {
                    a.backgroundPositionY = '0px';
                } else a.backgroundPosition = '? 0px';
                var b = (this._animationSpeed == 0) ? 0 : 300;
                FB.Anim.ate(this._page, a, b);
                FB.Anim.ate(this._container, {
                    top: (-1 * this._initialHeight) + 'px'
                }, b, function (c) {
                    c.parentNode.removeChild(c);
                });
                this.fire('connectbar.onclose');
                FB.Event.fire('connectbar.onclose', this);
                FB.Helper.invokeHandler(this.getAttribute('on-close'), this);
            }
        });
        FB.provide('XFBML.ConnectBar', {
            imgs: {
                buttonUrl: 'images/facebook-widgets/close_btn.png',
                missingProfileUrl: 'pics/q_silhouette.gif'
            }
        });
        FB.subclass('XFBML.Fan', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'load',
            setupAndValidate: function () {
                this._attr = {
                    api_key: FB._apiKey,
                    connections: this.getAttribute('connections', '10'),
                    css: this.getAttribute('css'),
                    height: this._getPxAttribute('height'),
                    id: this.getAttribute('profile-id'),
                    logobar: this._getBoolAttribute('logo-bar'),
                    name: this.getAttribute('name'),
                    stream: this._getBoolAttribute('stream', true),
                    width: this._getPxAttribute('width', 300)
                };
                if (!this._attr.id && !this._attr.name) {
                    FB.log('<fb:fan> requires one of the "id" or "name" attributes.');
                    return false;
                }
                var a = this._attr.height;
                if (!a) if ((!this._attr.connections || this._attr.connections === '0') && !this._attr.stream) {
                    a = 65;
                } else if (!this._attr.connections || this._attr.connections === '0') {
                    a = 375;
                } else if (!this._attr.stream) {
                    a = 250;
                } else a = 550;
                if (this._attr.logobar) a += 25;
                this._attr.height = a;
                return true;
            },
            getSize: function () {
                return {
                    width: this._attr.width,
                    height: this._attr.height
                };
            },
            getUrlBits: function () {
                return {
                    name: 'fan',
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.Friendpile', 'XFBML.Facepile', null, {});
        FB.subclass('XFBML.EdgeCommentWidget', 'XFBML.IframeWidget', function (a) {
            this._iframeWidth = a.width + 1;
            this._iframeHeight = a.height;
            this._attr = {
                master_frame_name: a.masterFrameName,
                offsetX: a.relativeWidthOffset - a.paddingLeft
            };
            this.dom = a.commentNode;
            this.dom.style.top = a.relativeHeightOffset + 'px';
            this.dom.style.left = a.relativeWidthOffset + 'px';
            this.dom.style.zIndex = FB.XFBML.EdgeCommentWidget.NextZIndex++;
            FB.Dom.addCss(this.dom, 'fb_edge_comment_widget');
        }, {
            _visibleAfter: 'load',
            _showLoader: false,
            getSize: function () {
                return {
                    width: this._iframeWidth,
                    height: this._iframeHeight
                };
            },
            getUrlBits: function () {
                return {
                    name: 'comment_widget_shell',
                    params: this._attr
                };
            }
        });
        FB.provide('XFBML.EdgeCommentWidget', {
            NextZIndex: 10000
        });
        FB.subclass('XFBML.EdgeWidget', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'immediate',
            _showLoader: false,
            _rootPadding: null,
            setupAndValidate: function () {
                FB.Dom.addCss(this.dom, 'fb_edge_widget_with_comment');
                this._attr = {
                    channel_url: this.getChannelUrl(),
                    debug: this._getBoolAttribute('debug'),
                    href: this.getAttribute('href', window.location.href),
                    is_permalink: this._getBoolAttribute('is-permalink'),
                    node_type: this.getAttribute('node-type', 'link'),
                    width: this._getWidgetWidth(),
                    font: this.getAttribute('font'),
                    layout: this._getLayout(),
                    colorscheme: this.getAttribute('color-scheme'),
                    action: this.getAttribute('action'),
                    ref: this.getAttribute('ref'),
                    show_faces: this._shouldShowFaces(),
                    no_resize: this._getBoolAttribute('no_resize'),
                    send: this._getBoolAttribute('send'),
                    url_map: this.getAttribute('url_map'),
                    extended_social_context: this._getBoolAttribute('extended_social_context', false)
                };
                this._rootPadding = {
                    left: parseFloat(FB.Dom.getStyle(this.dom, 'paddingLeft')),
                    top: parseFloat(FB.Dom.getStyle(this.dom, 'paddingTop'))
                };
                return true;
            },
            oneTimeSetup: function () {
                this.subscribe('xd.authPrompted', FB.bind(this._onAuthPrompt, this));
                this.subscribe('xd.edgeCreated', FB.bind(this._onEdgeCreate, this));
                this.subscribe('xd.edgeRemoved', FB.bind(this._onEdgeRemove, this));
                this.subscribe('xd.presentEdgeCommentDialog', FB.bind(this._handleEdgeCommentDialogPresentation, this));
                this.subscribe('xd.dismissEdgeCommentDialog', FB.bind(this._handleEdgeCommentDialogDismissal, this));
                this.subscribe('xd.hideEdgeCommentDialog', FB.bind(this._handleEdgeCommentDialogHide, this));
                this.subscribe('xd.showEdgeCommentDialog', FB.bind(this._handleEdgeCommentDialogShow, this));
            },
            getSize: function () {
                return {
                    width: this._getWidgetWidth(),
                    height: this._getWidgetHeight()
                };
            },
            _getWidgetHeight: function () {
                var a = this._getLayout(),
                    b = this._shouldShowFaces() ? 'show' : 'hide',
                    c = this._getBoolAttribute('send'),
                    d = 65 + (c ? 25 : 0),
                    e = {
                        standard: {
                            show: 80,
                            hide: 35
                        },
                        box_count: {
                            show: d,
                            hide: d
                        },
                        button_count: {
                            show: 21,
                            hide: 21
                        },
                        simple: {
                            show: 20,
                            hide: 20
                        }
                    };
                return e[a][b];
            },
            _getWidgetWidth: function () {
                var a = this._getLayout(),
                    b = this._getBoolAttribute('send'),
                    c = this._shouldShowFaces() ? 'show' : 'hide',
                    d = (this.getAttribute('action') === 'recommend'),
                    e = (d ? 265 : 225) + (b ? 60 : 0),
                    f = (d ? 130 : 90) + (b ? 60 : 0),
                    g = this.getAttribute('action') === 'recommend' ? 100 : 55,
                    h = this.getAttribute('action') === 'recommend' ? 90 : 50,
                    i = {
                        standard: {
                            show: 450,
                            hide: 450
                        },
                        box_count: {
                            show: g,
                            hide: g
                        },
                        button_count: {
                            show: f,
                            hide: f
                        },
                        simple: {
                            show: h,
                            hide: h
                        }
                    },
                    j = i[a][c],
                    k = this._getPxAttribute('width', j),
                    l = {
                        standard: {
                            min: e,
                            max: 900
                        },
                        box_count: {
                            min: g,
                            max: 900
                        },
                        button_count: {
                            min: f,
                            max: 900
                        },
                        simple: {
                            min: 49,
                            max: 900
                        }
                    };
                if (k < l[a].min) {
                    k = l[a].min;
                } else if (k > l[a].max) k = l[a].max;
                return k;
            },
            _getLayout: function () {
                return this._getAttributeFromList('layout', 'standard', ['standard', 'button_count', 'box_count', 'simple']);
            },
            _shouldShowFaces: function () {
                return this._getLayout() === 'standard' && this._getBoolAttribute('show-faces', true);
            },
            _handleEdgeCommentDialogPresentation: function (a) {
                if (!this.isValid()) return;
                var b = document.createElement('span');
                this._commentSlave = this._createEdgeCommentWidget(a, b);
                this.dom.appendChild(b);
                this._commentSlave.process();
                this._commentWidgetNode = b;
            },
            _createEdgeCommentWidget: function (a, b) {
                var c = {
                    commentNode: b,
                    externalUrl: a.externalURL,
                    masterFrameName: a.masterFrameName,
                    layout: this._getLayout(),
                    relativeHeightOffset: this._getHeightOffset(a),
                    relativeWidthOffset: this._getWidthOffset(a),
                    anchorTargetX: parseFloat(a['query[anchorTargetX]']) + this._rootPadding.left,
                    anchorTargetY: parseFloat(a['query[anchorTargetY]']) + this._rootPadding.top,
                    width: parseFloat(a.width),
                    height: parseFloat(a.height),
                    paddingLeft: this._rootPadding.left
                };
                return new FB.XFBML.EdgeCommentWidget(c);
            },
            _getHeightOffset: function (a) {
                return parseFloat(a['anchorGeometry[y]']) + parseFloat(a['anchorPosition[y]']) + this._rootPadding.top;
            },
            _getWidthOffset: function (a) {
                var b = parseFloat(a['anchorPosition[x]']) + this._rootPadding.left,
                    c = FB.Dom.getPosition(this.dom).x,
                    d = this.dom.offsetWidth,
                    e = FB.Dom.getViewportInfo().width,
                    f = parseFloat(a.width),
                    g = false;
                if (FB._localeIsRtl) {
                    g = f < c;
                } else if ((c + f) > e) g = true;
                if (g) b += parseFloat(a['anchorGeometry[x]']) - f;
                return b;
            },
            _getCommonEdgeCommentWidgetOpts: function (a, b) {
                return {
                    colorscheme: this._attr.colorscheme,
                    commentNode: b,
                    controllerID: a.controllerID,
                    nodeImageURL: a.nodeImageURL,
                    nodeRef: this._attr.ref,
                    nodeTitle: a.nodeTitle,
                    nodeURL: a.nodeURL,
                    nodeSummary: a.nodeSummary,
                    width: parseFloat(a.width),
                    height: parseFloat(a.height),
                    relativeHeightOffset: this._getHeightOffset(a),
                    relativeWidthOffset: this._getWidthOffset(a),
                    error: a.error,
                    siderender: a.siderender,
                    extended_social_context: a.extended_social_context,
                    anchorTargetX: parseFloat(a['query[anchorTargetX]']) + this._rootPadding.left,
                    anchorTargetY: parseFloat(a['query[anchorTargetY]']) + this._rootPadding.top
                };
            },
            _handleEdgeCommentDialogDismissal: function (a) {
                if (this._commentWidgetNode) {
                    this.dom.removeChild(this._commentWidgetNode);
                    delete this._commentWidgetNode;
                }
            },
            _handleEdgeCommentDialogHide: function () {
                if (this._commentWidgetNode) this._commentWidgetNode.style.display = "none";
            },
            _handleEdgeCommentDialogShow: function () {
                if (this._commentWidgetNode) this._commentWidgetNode.style.display = "block";
            },
            _fireEventAndInvokeHandler: function (a, b) {
                FB.Helper.fireEvent(a, this);
                FB.Helper.invokeHandler(this.getAttribute(b), this, [this._attr.href]);
            },
            _onEdgeCreate: function () {
                this._fireEventAndInvokeHandler('edge.create', 'on-create');
            },
            _onEdgeRemove: function () {
                this._fireEventAndInvokeHandler('edge.remove', 'on-remove');
            },
            _onAuthPrompt: function () {
                this._fireEventAndInvokeHandler('auth.prompt', 'on-prompt');
            }
        });
        FB.subclass('XFBML.SendButtonFormWidget', 'XFBML.EdgeCommentWidget', function (a) {
            this._base(a);
            FB.Dom.addCss(this.dom, 'fb_send_button_form_widget');
            FB.Dom.addCss(this.dom, a.colorscheme);
            FB.Dom.addCss(this.dom, (typeof a.siderender != 'undefined' && a.siderender) ? 'siderender' : '');
            this._attr.nodeImageURL = a.nodeImageURL;
            this._attr.nodeRef = a.nodeRef;
            this._attr.nodeTitle = a.nodeTitle;
            this._attr.nodeURL = a.nodeURL;
            this._attr.nodeSummary = a.nodeSummary;
            this._attr.offsetX = a.relativeWidthOffset;
            this._attr.offsetY = a.relativeHeightOffset;
            this._attr.anchorTargetX = a.anchorTargetX;
            this._attr.anchorTargetY = a.anchorTargetY;
            this._attr.channel = this.getChannelUrl();
            this._attr.controllerID = a.controllerID;
            this._attr.colorscheme = a.colorscheme;
            this._attr.error = a.error;
            this._attr.siderender = a.siderender;
            this._attr.extended_social_context = a.extended_social_context;
        }, {
            _showLoader: true,
            getUrlBits: function () {
                return {
                    name: 'send_button_form_shell',
                    params: this._attr
                };
            },
            oneTimeSetup: function () {
                this.subscribe('xd.messageSent', FB.bind(this._onMessageSent, this));
            },
            _onMessageSent: function () {
                FB.Event.fire('message.send', this._attr.nodeURL, this);
            }
        });
        FB.subclass('XFBML.Send', 'XFBML.EdgeWidget', null, {
            setupAndValidate: function () {
                FB.Dom.addCss(this.dom, 'fb_edge_widget_with_comment');
                this._attr = {
                    channel: this.getChannelUrl(),
                    api_key: FB._apiKey,
                    font: this.getAttribute('font'),
                    colorscheme: this.getAttribute('colorscheme', 'light'),
                    href: this.getAttribute('href', window.location.href),
                    ref: this.getAttribute('ref'),
                    extended_social_context: this.getAttribute('extended_social_context', false)
                };
                this._rootPadding = {
                    left: parseFloat(FB.Dom.getStyle(this.dom, 'paddingLeft')),
                    top: parseFloat(FB.Dom.getStyle(this.dom, 'paddingTop'))
                };
                return true;
            },
            getUrlBits: function () {
                return {
                    name: 'send',
                    params: this._attr
                };
            },
            _createEdgeCommentWidget: function (a, b) {
                var c = this._getCommonEdgeCommentWidgetOpts(a, b);
                return new FB.XFBML.SendButtonFormWidget(c);
            },
            getSize: function () {
                return {
                    width: FB.XFBML.Send.Dimensions.width,
                    height: FB.XFBML.Send.Dimensions.height
                };
            }
        });
        FB.provide('XFBML.Send', {
            Dimensions: {
                width: 80,
                height: 25
            }
        });
        FB.subclass('XFBML.Like', 'XFBML.EdgeWidget', null, {
            _widgetPipeEnabled: true,
            getUrlBits: function () {
                return {
                    name: 'like',
                    params: this._attr
                };
            },
            _createEdgeCommentWidget: function (a, b) {
                if ('send' in this._attr && 'widget_type' in a && a.widget_type == 'send') {
                    var c = this._getCommonEdgeCommentWidgetOpts(a, b);
                    return new FB.XFBML.SendButtonFormWidget(c);
                } else return this._callBase("_createEdgeCommentWidget", a, b);
            },
            getIframeTitle: function () {
                return 'Like this content on Facebook.';
            }
        });
        FB.subclass('XFBML.LikeBox', 'XFBML.EdgeWidget', null, {
            _visibleAfter: 'load',
            setupAndValidate: function () {
                this._attr = {
                    channel: this.getChannelUrl(),
                    api_key: FB._apiKey,
                    connections: this.getAttribute('connections'),
                    css: this.getAttribute('css'),
                    height: this.getAttribute('height'),
                    id: this.getAttribute('profile-id'),
                    header: this._getBoolAttribute('header', true),
                    name: this.getAttribute('name'),
                    show_faces: this._getBoolAttribute('show-faces', true),
                    stream: this._getBoolAttribute('stream', true),
                    width: this._getPxAttribute('width', 300),
                    href: this.getAttribute('href'),
                    colorscheme: this.getAttribute('colorscheme', 'light'),
                    border_color: this.getAttribute('border_color')
                };
                if (this._getBoolAttribute('force_wall', false)) this._attr.force_wall = true;
                if (this._attr.connections === '0') {
                    this._attr.show_faces = false;
                } else if (this._attr.connections) this._attr.show_faces = true;
                if (!this._attr.id && !this._attr.name && !this._attr.href) {
                    FB.log('<fb:like-box> requires one of the "id" or "name" attributes.');
                    return false;
                }
                var a = this._attr.height;
                if (!a) if (!this._attr.show_faces && !this._attr.stream) {
                    a = 62;
                } else {
                    a = 95;
                    if (this._attr.show_faces) a += 163;
                    if (this._attr.stream) a += 300;
                    if (this._attr.header && this._attr.header !== '0') a += 32;
                }
                this._attr.height = a;
                this.subscribe('xd.likeboxLiked', FB.bind(this._onLiked, this));
                this.subscribe('xd.likeboxUnliked', FB.bind(this._onUnliked, this));
                return true;
            },
            getSize: function () {
                return {
                    width: this._attr.width,
                    height: this._attr.height
                };
            },
            getUrlBits: function () {
                return {
                    name: 'likebox',
                    params: this._attr
                };
            },
            _onLiked: function () {
                FB.Helper.fireEvent('edge.create', this);
            },
            _onUnliked: function () {
                FB.Helper.fireEvent('edge.remove', this);
            }
        });
        FB.subclass('XFBML.LiveStream', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'load',
            setupAndValidate: function () {
                this._attr = {
                    app_id: this.getAttribute('event-app-id'),
                    href: this.getAttribute('href', window.location.href),
                    height: this._getPxAttribute('height', 500),
                    hideFriendsTab: this.getAttribute('hide-friends-tab'),
                    redesigned: this._getBoolAttribute('redesigned-stream'),
                    width: this._getPxAttribute('width', 400),
                    xid: this.getAttribute('xid', 'default'),
                    always_post_to_friends: this._getBoolAttribute('always-post-to-friends'),
                    via_url: this.getAttribute('via_url')
                };
                return true;
            },
            getSize: function () {
                return {
                    width: this._attr.width,
                    height: this._attr.height
                };
            },
            getUrlBits: function () {
                var a = this._attr.redesigned ? 'live_stream_box' : 'livefeed';
                if (this._getBoolAttribute('modern', false)) a = 'live_stream';
                return {
                    name: a,
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.Login', 'XFBML.Facepile', null, {
            _visibleAfter: 'load',
            getSize: function () {
                return {
                    width: this._attr.width,
                    height: 94
                };
            },
            getUrlBits: function () {
                var a = FB._iframeLoginButton ? 'login_button' : 'login';
                return {
                    name: a,
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.LoginButton', 'XFBML.ButtonElement', null, {
            setupAndValidate: function () {
                if (this._alreadySetup) return true;
                this._alreadySetup = true;
                this._attr = {
                    autologoutlink: this._getBoolAttribute('auto-logout-link'),
                    length: this._getAttributeFromList('length', 'short', ['long', 'short']),
                    onlogin: this.getAttribute('on-login'),
                    perms: this.getAttribute('perms'),
                    scope: this.getAttribute('scope'),
                    registration_url: this.getAttribute('registration-url'),
                    status: 'unknown'
                };
                if (this._attr.autologoutlink) FB.Event.subscribe('auth.statusChange', FB.bind(this.process, this));
                if (this._attr.registration_url) {
                    FB.Event.subscribe('auth.statusChange', this._saveStatus(this.process, false));
                    FB.getLoginStatus(this._saveStatus(this.process, false));
                }
                return true;
            },
            getButtonMarkup: function () {
                var a = this.getOriginalHTML();
                if (a) return a;
                if (!this._attr.registration_url) {
                    if (FB.getAccessToken() && this._attr.autologoutlink) {
                        return FB.Intl.tx._("Se d\u00e9connecter de Facebook");
                    } else if (FB.getAccessToken()) {
                        return '';
                    } else return this._getLoginText();
                } else switch (this._attr.status) {
                case 'unknown':
                    return this._getLoginText();
                case 'notConnected':
                case 'not_authorized':
                    return FB.Intl.tx._("Inscription");
                case 'connected':
                    if (FB.getAccessToken() && this._attr.autologoutlink) return FB.Intl.tx._("Se d\u00e9connecter de Facebook");
                    return '';
                default:
                    FB.log('Unknown status: ' + this._attr.status);
                    return FB.Intl.tx._("Connexion");
                }
            },
            _getLoginText: function () {
                return this._attr.length == 'short' ? FB.Intl.tx._("Connexion") : FB.Intl.tx._("Se connecter avec Facebook.");
            },
            onClick: function () {
                if (!this._attr.registration_url) {
                    if (!FB.getAccessToken() || !this._attr.autologoutlink) {
                        FB.login(FB.bind(this._authCallback, this), {
                            perms: this._attr.perms,
                            scope: this._attr.scope
                        });
                    } else FB.logout(FB.bind(this._authCallback, this));
                } else switch (this._attr.status) {
                case 'unknown':
                    FB.ui({
                        method: 'auth.logintoFacebook'
                    }, FB.bind(function (a) {
                        FB.bind(FB.getLoginStatus(this._saveStatus(this._authCallback, true), true), this);
                    }, this));
                    break;
                case 'notConnected':
                case 'not_authorized':
                    window.top.location = this._attr.registration_url;
                    break;
                case 'connected':
                    if (!FB.getAccessToken() || !this._attr.autologoutlink) {
                        this._authCallback();
                    } else FB.logout(FB.bind(this._authCallback, this));
                    break;
                default:
                    FB.log('Unknown status: ' + this._attr.status);
                }
            },
            _authCallback: function (a) {
                FB.Helper.invokeHandler(this._attr.onlogin, this, [a]);
            },
            _saveStatus: function (a, b) {
                return FB.bind(function (c) {
                    if (b && this._attr.registration_url && (this._attr.status == 'notConnected' || this._attr.status == 'not_authorized') && (c.status == 'notConnected' || c.status == 'not_authorized')) window.top.location = this._attr.registration_url;
                    this._attr.status = c.status;
                    if (a) {
                        a = this.bind(a, this);
                        return a(c);
                    }
                }, this);
            }
        });
        FB.subclass('XFBML.Name', 'XFBML.Element', null, {
            process: function () {
                FB.copy(this, {
                    _uid: this.getAttribute('uid'),
                    _firstnameonly: this._getBoolAttribute('first-name-only'),
                    _lastnameonly: this._getBoolAttribute('last-name-only'),
                    _possessive: this._getBoolAttribute('possessive'),
                    _reflexive: this._getBoolAttribute('reflexive'),
                    _objective: this._getBoolAttribute('objective'),
                    _linked: this._getBoolAttribute('linked', true),
                    _subjectId: this.getAttribute('subject-id')
                });
                if (!this._uid) {
                    FB.log('"uid" is a required attribute for <fb:name>');
                    this.fire('render');
                    return;
                }
                var a = [];
                if (this._firstnameonly) {
                    a.push('first_name');
                } else if (this._lastnameonly) {
                    a.push('last_name');
                } else a.push('name');
                if (this._subjectId) {
                    a.push('sex');
                    if (this._subjectId == FB.Helper.getLoggedInUser()) this._reflexive = true;
                }
                var b;
                FB.Event.monitor('auth.statusChange', this.bind(function () {
                    if (!this.isValid()) {
                        this.fire('render');
                        return true;
                    }
                    if (!this._uid || this._uid == 'loggedinuser') this._uid = FB.Helper.getLoggedInUser();
                    if (!this._uid) return;
                    if (FB.Helper.isUser(this._uid)) {
                        b = FB.Data._selectByIndex(a, 'user', 'uid', this._uid);
                    } else b = FB.Data._selectByIndex(['name', 'id'], 'profile', 'id', this._uid);
                    b.wait(this.bind(function (c) {
                        if (this._subjectId == this._uid) {
                            this._renderPronoun(c[0]);
                        } else this._renderOther(c[0]);
                        this.fire('render');
                    }));
                }));
            },
            _renderPronoun: function (a) {
                var b = '',
                    c = this._objective;
                if (this._subjectId) {
                    c = true;
                    if (this._subjectId === this._uid) this._reflexive = true;
                }
                if (this._uid == FB.Connect.get_loggedInUser() && this._getBoolAttribute('use-you', true)) {
                    if (this._possessive) {
                        if (this._reflexive) {
                            b = 'your own';
                        } else b = 'your';
                    } else if (this._reflexive) {
                        b = 'yourself';
                    } else b = 'you';
                } else switch (a.sex) {
                case 'male':
                    if (this._possessive) {
                        b = this._reflexive ? 'his own' : 'his';
                    } else if (this._reflexive) {
                        b = 'himself';
                    } else if (c) {
                        b = 'him';
                    } else b = 'he';
                    break;
                case 'female':
                    if (this._possessive) {
                        b = this._reflexive ? 'her own' : 'her';
                    } else if (this._reflexive) {
                        b = 'herself';
                    } else if (c) {
                        b = 'her';
                    } else b = 'she';
                    break;
                default:
                    if (this._getBoolAttribute('use-they', true)) {
                        if (this._possessive) {
                            if (this._reflexive) {
                                b = 'their own';
                            } else b = 'their';
                        } else if (this._reflexive) {
                            b = 'themselves';
                        } else if (c) {
                            b = 'them';
                        } else b = 'they';
                    } else if (this._possessive) {
                        if (this._reflexive) {
                            b = 'his/her own';
                        } else b = 'his/her';
                    } else if (this._reflexive) {
                        b = 'himself/herself';
                    } else if (c) {
                        b = 'him/her';
                    } else b = 'he/she';
                    break;
                }
                if (this._getBoolAttribute('capitalize', false)) b = FB.Helper.upperCaseFirstChar(b);
                this.dom.innerHTML = b;
            },
            _renderOther: function (a) {
                var b = '',
                    c = '';
                if (this._uid == FB.Helper.getLoggedInUser() && this._getBoolAttribute('use-you', true)) {
                    if (this._reflexive) {
                        if (this._possessive) {
                            b = 'your own';
                        } else b = 'yourself';
                    } else if (this._possessive) {
                        b = 'your';
                    } else b = 'you';
                } else if (a) {
                    if (null === a.first_name) a.first_name = '';
                    if (null === a.last_name) a.last_name = '';
                    if (this._firstnameonly && a.first_name !== undefined) {
                        b = FB.String.escapeHTML(a.first_name);
                    } else if (this._lastnameonly && a.last_name !== undefined) b = FB.String.escapeHTML(a.last_name);
                    if (!b) b = FB.String.escapeHTML(a.name);
                    if (b !== '' && this._possessive) b += '\'s';
                }
                if (!b) b = FB.String.escapeHTML(this.getAttribute('if-cant-see', 'Facebook User'));
                if (b) {
                    if (this._getBoolAttribute('capitalize', false)) b = FB.Helper.upperCaseFirstChar(b);
                    if (a && this._linked) {
                        c = FB.Helper.getProfileLink(a, b, this.getAttribute('href', null));
                    } else c = b;
                }
                this.dom.innerHTML = c;
            }
        });
        FB.subclass('XFBML.ProfilePic', 'XFBML.Element', null, {
            process: function () {
                var a = this.getAttribute('size', 'thumb'),
                    b = FB.XFBML.ProfilePic._sizeToPicFieldMap[a],
                    c = this._getPxAttribute('width'),
                    d = this._getPxAttribute('height'),
                    e = this.dom.style,
                    f = this.getAttribute('uid');
                if (this._getBoolAttribute('facebook-logo')) b += '_with_logo';
                if (c) {
                    c = c + 'px';
                    e.width = c;
                }
                if (d) {
                    d = d + 'px';
                    e.height = d;
                }
                var g = this.bind(function (h) {
                    var i = h ? h[0] : null,
                        j = i ? i[b] : null;
                    if (!j) j = FB.getDomain('cdn') + FB.XFBML.ProfilePic._defPicMap[b];
                    var k = ((c ? 'width:' + c + ';' : '') + (d ? 'height:' + c + ';' : '')),
                        l = FB.String.format('<img src="{0}" alt="{1}" title="{1}" style="{2}" class="{3}" />', j, i ? FB.String.escapeHTML(i.name) : '', k, this.dom.className);
                    if (this._getBoolAttribute('linked', true)) l = FB.Helper.getProfileLink(i, l, this.getAttribute('href', null));
                    this.dom.innerHTML = l;
                    FB.Dom.addCss(this.dom, 'fb_profile_pic_rendered');
                    this.fire('render');
                });
                FB.Event.monitor('auth.statusChange', this.bind(function () {
                    if (!this.isValid()) {
                        this.fire('render');
                        return true;
                    }
                    if (this.getAttribute('uid', null) == 'loggedinuser') f = FB.Helper.getLoggedInUser();
                    if (FB._userStatus && f) {
                        FB.Data._selectByIndex(['name', b], FB.Helper.isUser(f) ? 'user' : 'profile', FB.Helper.isUser(f) ? 'uid' : 'id', f).wait(g);
                    } else g();
                }));
            }
        });
        FB.provide('XFBML.ProfilePic', {
            _defPicMap: {
                pic: 'pics/s_silhouette.jpg',
                pic_big: 'pics/d_silhouette.gif',
                pic_big_with_logo: 'pics/d_silhouette_logo.gif',
                pic_small: 'pics/t_silhouette.jpg',
                pic_small_with_logo: 'pics/t_silhouette_logo.gif',
                pic_square: 'pics/q_silhouette.gif',
                pic_square_with_logo: 'pics/q_silhouette_logo.gif',
                pic_with_logo: 'pics/s_silhouette_logo.gif'
            },
            _sizeToPicFieldMap: {
                n: 'pic_big',
                normal: 'pic_big',
                q: 'pic_square',
                s: 'pic',
                small: 'pic',
                square: 'pic_square',
                t: 'pic_small',
                thumb: 'pic_small'
            }
        });
        FB.subclass('XFBML.Question', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'load',
            setupAndValidate: function () {
                this._attr = {
                    channel: this.getChannelUrl(),
                    api_key: FB._apiKey,
                    permalink: this.getAttribute('permalink'),
                    id: this.getAttribute('id'),
                    width: this._getPxAttribute('width', 400),
                    height: 0,
                    questiontext: this.getAttribute('questiontext'),
                    options: this.getAttribute('options')
                };
                this.subscribe('xd.firstVote', FB.bind(this._onInitialVote, this));
                this.subscribe('xd.vote', FB.bind(this._onChangedVote, this));
                return true;
            },
            getSize: function () {
                return {
                    width: this._attr.width,
                    height: this._attr.height
                };
            },
            getUrlBits: function () {
                return {
                    name: 'question',
                    params: this._attr
                };
            },
            _onInitialVote: function (a) {
                FB.Event.fire('question.firstVote', this._attr.permalink, a.vote);
            },
            _onChangedVote: function (a) {
                FB.Event.fire('question.vote', this._attr.permalink, a.vote);
            }
        });
        FB.subclass('XFBML.Recommendations', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'load',
            _refreshOnAuthChange: true,
            setupAndValidate: function () {
                this._attr = {
                    border_color: this.getAttribute('border-color'),
                    colorscheme: this.getAttribute('color-scheme'),
                    filter: this.getAttribute('filter'),
                    font: this.getAttribute('font'),
                    action: this.getAttribute('action'),
                    linktarget: this.getAttribute('linktarget', '_blank'),
                    max_age: this.getAttribute('max_age'),
                    header: this._getBoolAttribute('header'),
                    height: this._getPxAttribute('height', 300),
                    site: this.getAttribute('site', location.hostname),
                    width: this._getPxAttribute('width', 300)
                };
                return true;
            },
            getSize: function () {
                return {
                    width: this._attr.width,
                    height: this._attr.height
                };
            },
            getUrlBits: function () {
                return {
                    name: 'recommendations',
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.RecommendationsBar', 'XFBML.IframeWidget', null, {
            getUrlBits: function () {
                return {
                    name: 'recommendations_bar',
                    params: this._attr
                };
            },
            setupAndValidate: function () {
                var a;

                function b(k, l) {
                    var m = 0,
                        n = null;

                    function o() {
                        l();
                        n = null;
                        m = (new Date()).getTime();
                    }
                    return function () {
                        if (!n) {
                            var p = (new Date()).getTime();
                            if (p - m < k) {
                                n = window.setTimeout(o, k - (p - m));
                            } else o();
                        }
                        return true;
                    };
                }
                function c(k) {
                    if (k.match(/^\d+(?:\.\d+)?%$/)) {
                        var l = Math.min(Math.max(parseInt(k, 10), 0), 100);
                        k = l / 100;
                    } else if (k != 'manual' && k != 'onvisible') k = 'onvisible';
                    return k;
                }
                function d(k) {
                    return Math.max(parseInt(k, 10) || 30, 10);
                }
                function e(k) {
                    if (k == 'left' || k == 'right') return k;
                    return FB._localeIsRtl ? 'left' : 'right';
                }
                this._attr = {
                    channel: this.getChannelUrl(),
                    api_key: FB._apiKey,
                    font: this.getAttribute('font'),
                    colorscheme: this.getAttribute('colorscheme'),
                    href: FB.URI.resolve(this.getAttribute('href')),
                    side: e(this.getAttribute('side')),
                    site: this.getAttribute('site'),
                    action: this.getAttribute('action'),
                    ref: this.getAttribute('ref'),
                    max_age: this.getAttribute('max_age'),
                    trigger: c(this.getAttribute('trigger', '')),
                    read_time: d(this.getAttribute('read_time')),
                    num_recommendations: parseInt(this.getAttribute('num_recommendations'), 10) || 2
                };
                FB._inPlugin = true;
                this._showLoader = false;
                this.subscribe('iframe.onload', FB.bind(function () {
                    var k = this.dom.children[0];
                    k.className = 'fbpluginrecommendationsbar' + this._attr.side;
                }, this));
                var f = FB.bind(function () {
                    FB.Event.unlisten(window, 'scroll', f);
                    FB.Event.unlisten(document.documentElement, 'click', f);
                    FB.Event.unlisten(document.documentElement, 'mousemove', f);
                    window.setTimeout(FB.bind(this.arbiterInform, this, 'platform/plugins/recommendations_bar/action', null, a, FB.Arbiter.BEHAVIOR_STATE), this._attr.read_time * 1000);
                    return true;
                }, this);
                FB.Event.listen(window, 'scroll', f);
                FB.Event.listen(document.documentElement, 'click', f);
                FB.Event.listen(document.documentElement, 'mousemove', f);
                if (this._attr.trigger == "manual") {
                    var g = FB.bind(function (k) {
                        if (k == this._attr.href) {
                            FB.Event.unsubscribe('xfbml.recommendationsbar.read', g);
                            this.arbiterInform('platform/plugins/recommendations_bar/trigger', null, a, FB.Arbiter.BEHAVIOR_STATE);
                        }
                        return true;
                    }, this);
                    FB.Event.subscribe('xfbml.recommendationsbar.read', g);
                } else {
                    var h = b(500, FB.bind(function () {
                        if (this.calculateVisibility()) {
                            FB.Event.unlisten(window, 'scroll', h);
                            FB.Event.unlisten(window, 'resize', h);
                            this.arbiterInform('platform/plugins/recommendations_bar/trigger', null, a, FB.Arbiter.BEHAVIOR_STATE);
                        }
                        return true;
                    }, this));
                    FB.Event.listen(window, 'scroll', h);
                    FB.Event.listen(window, 'resize', h);
                    h();
                }
                this.visible = false;
                var i = b(500, FB.bind(function () {
                    if (!this.visible && this.calculateVisibility()) {
                        this.visible = true;
                        this.arbiterInform('platform/plugins/recommendations_bar/visible');
                    } else if (this.visible && !this.calculateVisibility()) {
                        this.visible = false;
                        this.arbiterInform('platform/plugins/recommendations_bar/invisible');
                    }
                    return true;
                }, this));
                FB.Event.listen(window, 'scroll', i);
                FB.Event.listen(window, 'resize', i);
                i();
                this.focused = true;
                var j = FB.bind(function () {
                    this.focused = !this.focused;
                    return true;
                }, this);
                FB.Event.listen(window, 'blur', j);
                FB.Event.listen(window, 'focus', j);
                this.resize_running = false;
                this.animate = false;
                this.subscribe('xd.signal_animation', FB.bind(function () {
                    this.animate = true;
                }, this));
                return true;
            },
            getSize: function () {
                return {
                    height: 25,
                    width: (this._attr.action == 'recommend' ? 140 : 96)
                };
            },
            calculateVisibility: function () {
                var a = document.documentElement.clientHeight;
                if (!this.focused && window.console && window.console.firebug) return this.visible;
                switch (this._attr.trigger) {
                case "manual":
                    return false;
                case "onvisible":
                    var b = this.dom.getBoundingClientRect().top;
                    return b <= a;
                default:
                    var c = window.pageYOffset || document.body.scrollTop,
                        d = document.documentElement.scrollHeight;
                    return (c + a) / d >= this._attr.trigger;
                }
            },
            _handleResizeMsg: function (a) {
                if (!this.isValid()) return;
                if (a.width) this.getIframeNode().style.width = a.width + 'px';
                if (a.height) {
                    this._setNextResize(a.height);
                    this._checkNextResize();
                }
                this._makeVisible();
            },
            _setNextResize: function (a) {
                this.next_resize = a;
            },
            _checkNextResize: function () {
                if (!this.next_resize || this.resize_running) return;
                var a = this.getIframeNode(),
                    b = this.next_resize;
                this.next_resize = null;
                if (this.animate) {
                    this.animate = false;
                    this.resize_running = true;
                    FB.Anim.ate(a, {
                        height: b + 'px'
                    }, 330, FB.bind(function () {
                        this.resize_running = false;
                        this._checkNextResize();
                    }, this));
                } else a.style.height = b + 'px';
            }
        });
        FB.XFBML.RecommendationsBar.markRead = function (a) {
            FB.Event.fire('xfbml.recommendationsbar.read', a || window.location.href);
        };
        FB.subclass('XFBML.Registration', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'immediate',
            _baseHeight: 167,
            _fieldHeight: 28,
            _skinnyWidth: 520,
            _skinnyBaseHeight: 173,
            _skinnyFieldHeight: 52,
            setupAndValidate: function () {
                this._attr = {
                    action: this.getAttribute('action'),
                    border_color: this.getAttribute('border-color'),
                    channel_url: this.getChannelUrl(),
                    client_id: FB._apiKey,
                    fb_only: this._getBoolAttribute('fb-only', false),
                    fb_register: this._getBoolAttribute('fb-register', false),
                    fields: this.getAttribute('fields'),
                    height: this._getPxAttribute('height'),
                    redirect_uri: this.getAttribute('redirect-uri', window.location.href),
                    no_footer: this._getBoolAttribute('no-footer'),
                    no_header: this._getBoolAttribute('no-header'),
                    onvalidate: this.getAttribute('onvalidate'),
                    width: this._getPxAttribute('width', 600),
                    target: this.getAttribute('target')
                };
                if (this._attr.onvalidate) this.subscribe('xd.validate', this.bind(function (a) {
                    var b = FB.JSON.parse(a.value),
                        c = FB.bind(function (e) {
                            this.arbiterInform('Registration.Validation', {
                                errors: e,
                                id: a.id
                            }, true);
                        }, this),
                        d = FB.Helper.executeFunctionByName(this._attr.onvalidate, b, c);
                    if (d) c(d);
                }));
                this.subscribe('xd.authLogin', FB.bind(this._onAuthLogin, this));
                this.subscribe('xd.authLogout', FB.bind(this._onAuthLogout, this));
                return true;
            },
            getSize: function () {
                return {
                    width: this._attr.width,
                    height: this._getHeight()
                };
            },
            _getHeight: function () {
                if (this._attr.height) return this._attr.height;
                var a;
                if (!this._attr.fields) {
                    a = ['name'];
                } else try {
                    a = FB.JSON.parse(this._attr.fields);
                } catch (b) {
                    a = this._attr.fields.split(/,/);
                }
                if (this._attr.width < this._skinnyWidth) {
                    return this._skinnyBaseHeight + a.length * this._skinnyFieldHeight;
                } else return this._baseHeight + a.length * this._fieldHeight;
            },
            getUrlBits: function () {
                return {
                    name: 'registration',
                    params: this._attr
                };
            },
            getDefaultWebDomain: function () {
                return 'https_www';
            },
            _onAuthLogin: function () {
                if (!FB.getAuthResponse()) FB.getLoginStatus();
                FB.Helper.fireEvent('auth.login', this);
            },
            _onAuthLogout: function () {
                if (!FB.getAuthResponse()) FB.getLoginStatus();
                FB.Helper.fireEvent('auth.logout', this);
            }
        });
        FB.subclass('XFBML.ServerFbml', 'XFBML.IframeWidget', null, {
            _visibleAfter: 'resize',
            setupAndValidate: function () {
                this._attr = {
                    channel_url: this.getChannelUrl(),
                    fbml: this.getAttribute('fbml'),
                    width: this._getPxAttribute('width')
                };
                if (!this._attr.fbml) {
                    var a = this.dom.getElementsByTagName('script')[0];
                    if (a && a.type === 'text/fbml') this._attr.fbml = a.innerHTML;
                }
                if (!this._attr.fbml) {
                    FB.log('<fb:serverfbml> requires the "fbml" attribute.');
                    return false;
                }
                return true;
            },
            getSize: function () {
                return {
                    width: this._attr.width,
                    height: this._attr.height
                };
            },
            getUrlBits: function () {
                return {
                    name: 'serverfbml',
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.ShareButton', 'XFBML.Element', null, {
            process: function () {
                this._href = this.getAttribute('href', window.location.href);
                this._type = this.getAttribute('type', 'icon_link');
                FB.Dom.addCss(this.dom, 'fb_share_count_hidden');
                this._renderButton(true);
            },
            _renderButton: function (a) {
                if (!this.isValid()) {
                    this.fire('render');
                    return;
                }
                var b = '',
                    c = '',
                    d = '',
                    e = '',
                    f = FB.Intl.tx._("Publier"),
                    g = '';
                switch (this._type) {
                case 'icon':
                case 'icon_link':
                    e = 'fb_button_simple';
                    b = ('<span class="fb_button_text">' + (this._type == 'icon_link' ? f : '&nbsp;') + '</span>');
                    a = false;
                    break;
                case 'link':
                    b = FB.Intl.tx._("Partager sur Facebook");
                    a = false;
                    break;
                case 'button':
                    b = '<span class="fb_button_text">' + f + '</span>';
                    e = 'fb_button fb_button_small';
                    a = false;
                    break;
                case 'button_count':
                    b = '<span class="fb_button_text">' + f + '</span>';
                    c = ('<span class="fb_share_count_nub_right">&nbsp;</span>' + '<span class="fb_share_count fb_share_count_right">' + this._getCounterMarkup() + '</span>');
                    e = 'fb_button fb_button_small';
                    break;
                default:
                    b = '<span class="fb_button_text">' + f + '</span>';
                    d = ('<span class="fb_share_count_nub_top">&nbsp;</span>' + '<span class="fb_share_count fb_share_count_top">' + this._getCounterMarkup() + '</span>');
                    e = 'fb_button fb_button_small';
                    g = 'fb_share_count_wrapper';
                }
                var h = FB.guid();
                this.dom.innerHTML = FB.String.format('<span class="{0}">{4}<a id="{1}" class="{2}" ' + 'target="_blank">{3}</a>{5}</span>', g, h, e, b, d, c);
                var i = document.getElementById(h);
                i.href = this._href;
                i.onclick = function () {
                    FB.ui({
                        method: 'stream.share',
                        u: this.href
                    });
                    return false;
                };
                if (!a) this.fire('render');
            },
            _getCounterMarkup: function () {
                if (!this._count) this._count = FB.Data._selectByIndex(['total_count'], 'link_stat', 'url', this._href);
                var a = '0';
                if (this._count.value !== undefined) {
                    if (this._count.value.length > 0) {
                        var b = this._count.value[0].total_count;
                        if (b > 3) {
                            FB.Dom.removeCss(this.dom, 'fb_share_count_hidden');
                            a = b >= 1e+07 ? Math.round(b / 1e+06) + 'M' : (b >= 10000 ? Math.round(b / 1000) + 'K' : b);
                        }
                    }
                } else this._count.wait(FB.bind(this._renderButton, this, false));
                return '<span class="fb_share_count_inner">' + a + '</span>';
            }
        });
        FB.subclass('XFBML.SocialContext', 'XFBML.IframeWidget', null, {
            setupAndValidate: function () {
                var a = this.getAttribute('size', 'small');
                this._attr = {
                    channel: this.getChannelUrl(),
                    width: this._getPxAttribute('width', 400),
                    height: this._getPxAttribute('height', 100),
                    ref: this.getAttribute('ref'),
                    size: this.getAttribute('size'),
                    keywords: this.getAttribute('keywords'),
                    urls: this.getAttribute('urls')
                };
                return true;
            },
            getSize: function () {
                return {
                    width: this._attr.width,
                    height: this._attr.height
                };
            },
            getUrlBits: function () {
                return {
                    name: 'social_context',
                    params: this._attr
                };
            }
        });
        FB.subclass('XFBML.Subscribe', 'XFBML.EdgeWidget', null, {
            setupAndValidate: function () {
                this._attr = {
                    channel: this.getChannelUrl(),
                    api_key: FB._apiKey,
                    font: this.getAttribute('font'),
                    colorscheme: this.getAttribute('colorscheme', 'light'),
                    href: this.getAttribute('href'),
                    ref: this.getAttribute('ref'),
                    layout: this._getLayout(),
                    show_faces: this._shouldShowFaces(),
                    width: this._getWidgetWidth()
                };
                return true;
            },
            getUrlBits: function () {
                return {
                    name: 'subscribe',
                    params: this._attr
                };
            },
            _getWidgetWidth: function () {
                var a = this._getLayout(),
                    b = {
                        standard: 450,
                        box_count: 83,
                        button_count: 115
                    },
                    c = b[a],
                    d = this._getPxAttribute('width', c),
                    e = {
                        standard: {
                            min: 225,
                            max: 900
                        },
                        box_count: {
                            min: 43,
                            max: 900
                        },
                        button_count: {
                            min: 63,
                            max: 900
                        }
                    };
                if (d < e[a].min) {
                    d = e[a].min;
                } else if (d > e[a].max) d = e[a].max;
                return d;
            }
        });
        void(0);;
        __d("XDConfig", [], {
            "XdUrl": "connect\/xd_arbiter.php?version=3",
            "Flash": {
                "path": "https:\/\/s-static.facebook.net\/rsrc.php\/v1\/ys\/r\/WON-TVLCpDP.swf"
            },
            "useCdn": true
        });
        __d("SDKConfig", [], {
            "legacy": true
        });;
    }).call(FB);
}

FB.provide("", {
    "_domain": {
        "api": "https:\/\/api.facebook.com\/",
        "api_read": "https:\/\/api-read.facebook.com\/",
        "cdn": "http:\/\/static.ak.fbcdn.net\/",
        "cdn_foreign": "http:\/\/connect.facebook.net\/",
        "graph": "https:\/\/graph.facebook.com\/",
        "https_cdn": "https:\/\/s-static.ak.fbcdn.net\/",
        "https_staticfb": "https:\/\/s-static.ak.facebook.com\/",
        "https_www": "https:\/\/www.facebook.com\/",
        "staticfb": "http:\/\/static.ak.facebook.com\/",
        "www": "http:\/\/www.facebook.com\/",
        "m": "http:\/\/m.facebook.com\/",
        "https_m": "https:\/\/m.facebook.com\/"
    },
    "_locale": "fr_FR",
    "_localeIsRtl": false
}, true);
FB.provide("Flash", {
    "_minVersions": [
        [10, 3, 181, 34],
        [11, 0, 0]
    ],
    "_swfPath": "rsrc.php\/v1\/yQ\/r\/f3KaqM7xIBg.swf"
}, true);
FB.provide('Auth', {
    "_xdStorePath": "xd_localstorage\/v2"
}, true);
FB.provide("Canvas.Prefetcher", {
    "_appIdsBlacklist": [144959615576466],
    "_sampleRate": 500
}, true);
FB.initSitevars = {
    "parseXFBMLBeforeDomReady": false,
    "computeContentSizeVersion": 0,
    "enableMobile": 1,
    "enableMobileComments": 1,
    "forceSecureXdProxy": 1,
    "iframePermissions": {
        "read_stream": false,
        "manage_mailbox": false,
        "manage_friendlists": false,
        "read_mailbox": false,
        "publish_checkins": true,
        "status_update": true,
        "photo_upload": true,
        "video_upload": true,
        "sms": false,
        "create_event": true,
        "rsvp_event": true,
        "offline_access": true,
        "email": true,
        "xmpp_login": false,
        "create_note": true,
        "share_item": true,
        "export_stream": false,
        "publish_stream": true,
        "publish_likes": true,
        "ads_management": false,
        "contact_email": true,
        "access_private_data": false,
        "read_insights": false,
        "read_requests": false,
        "read_friendlists": true,
        "manage_pages": false,
        "physical_login": false,
        "manage_groups": false,
        "read_deals": false
    }
};
FB.forceOAuth = true;
FB.widgetPipeEnabledApps = {
    "111476658864976": 1,
    "cca6477272fc5cb805f85a84f20fca1d": 1,
    "179150165472010": 1
};
FB.widgetPipeTagCountThreshold = 4;
FB._iframeLoginButton = false;
FB.provide("TemplateData", {
    "_enabled": 0
}, true);
FB.provide("TemplateUI", {
    "_version": 19
}, true);
FB.provide("XFBML.ConnectBar", {
    "imgs": {
        "buttonUrl": "rsrc.php\/v1\/yY\/r\/h_Y6u1wrZPW.png",
        "missingProfileUrl": "rsrc.php\/v1\/yo\/r\/UlIqmHJn-SK.gif"
    }
}, true);
FB.provide("XFBML.ProfilePic", {
    "_defPicMap": {
        "pic": "rsrc.php\/v1\/yh\/r\/C5yt7Cqf3zU.jpg",
        "pic_big": "rsrc.php\/v1\/yL\/r\/HsTZSDw4avx.gif",
        "pic_big_with_logo": "rsrc.php\/v1\/y5\/r\/SRDCaeCL7hM.gif",
        "pic_small": "rsrc.php\/v1\/yi\/r\/odA9sNLrE86.jpg",
        "pic_small_with_logo": "rsrc.php\/v1\/yD\/r\/k1xiRXKnlGd.gif",
        "pic_square": "rsrc.php\/v1\/yo\/r\/UlIqmHJn-SK.gif",
        "pic_square_with_logo": "rsrc.php\/v1\/yX\/r\/9dYJBPDHXwZ.gif",
        "pic_with_logo": "rsrc.php\/v1\/yu\/r\/fPPR9f2FJ3t.gif"
    }
}, true);
if (FB.Dom && FB.Dom.addCssRules) {
    FB.Dom.addCssRules(".fb_hidden{position:absolute;top:-10000px;z-index:10001}\n.fb_invisible{display:none}\n.fb_reset{background:none;border-spacing:0;border:0;color:#000;cursor:auto;direction:ltr;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;font-size: 11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}\n.fb_link img{border:none}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}\n.fb_dialog_advanced{padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px}\n.fb_dialog_content{background:#fff;color:#333}\n.fb_dialog_close_icon{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;_background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yL\/r\/s816eWC-2sl.gif);cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px;top:8px\\9;right:7px\\9}\n.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}\n.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}\n.fb_dialog_close_icon:hover{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent;_background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yL\/r\/s816eWC-2sl.gif)}\n.fb_dialog_close_icon:active{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent;_background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yL\/r\/s816eWC-2sl.gif)}\n.fb_dialog_loader{background-color:#f2f2f2;border:1px solid #606060;font-size: 24px;padding:20px}\n.fb_dialog_top_left,\n.fb_dialog_top_right,\n.fb_dialog_bottom_left,\n.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}\n.fb_dialog_top_left{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}\n.fb_dialog_top_right{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}\n.fb_dialog_bottom_left{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}\n.fb_dialog_bottom_right{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}\n.fb_dialog_vert_left,\n.fb_dialog_vert_right,\n.fb_dialog_horiz_top,\n.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}\n.fb_dialog_vert_left,\n.fb_dialog_vert_right{width:10px;height:100\u0025}\n.fb_dialog_vert_left{margin-left:-10px}\n.fb_dialog_vert_right{right:0;margin-right:-10px}\n.fb_dialog_horiz_top,\n.fb_dialog_horiz_bottom{width:100\u0025;height:10px}\n.fb_dialog_horiz_top{margin-top:-10px}\n.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}\n.fb_dialog_iframe{line-height:0}\n.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #3b5998;color:#fff;font-size: 14px;font-weight:bold;margin:0}\n.fb_dialog_content .dialog_title > span{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yd\/r\/Cou7n-nqK52.gif)\nno-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}\nbody.fb_hidden{-webkit-transform:none;height:100\u0025;margin:0;left:-10000px;overflow:visible;position:absolute;top:-10000px;width:100\u0025\n}\n.fb_dialog.fb_dialog_mobile.loading{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yO\/r\/_j03izEX40U.gif)\nwhite no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}\n.fb_dialog.fb_dialog_mobile.loading.centered{max-height:590px;min-height:590px;max-width:500px;min-width:500px}\n#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;left:0;top:0;width:100\u0025;min-height:100\u0025;z-index:10000}\n#fb-root #fb_dialog_ipad_overlay.hidden{display:none}\n.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}\n.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0 0, 0 100\u0025, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}\n.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100\u0025\n}\n.fb_dialog_content .dialog_header td.header_left{font-size: 12px;padding-left:5px;vertical-align:middle;width:60px\n}\n.fb_dialog_content .dialog_header td.header_right{font-size: 12px;padding-right:5px;vertical-align:middle;width:60px\n}\n.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0 0, 0 100\u0025, from(#4966A6),\ncolor-stop(0.5, #355492), to(#2A4887));border:1px solid #29447e;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset,\nrgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}\n.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}\n.fb_dialog_content .dialog_header .header_center{color:#fff;font-size: 16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}\n.fb_dialog_content .dialog_content{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/y9\/r\/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #555;border-bottom:0;border-top:0;height:150px}\n.fb_dialog_content .dialog_footer{background:#f2f2f2;border:1px solid #555;border-top-color:#ccc;height:40px}\n#fb_dialog_loader_close{float:left}\n.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}\n.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}\n.fb_iframe_widget{position:relative;display:-moz-inline-block;display:inline-block}\n.fb_iframe_widget iframe{position:relative;vertical-align:text-bottom}\n.fb_iframe_widget span{position:relative}\n.fb_hide_iframes iframe{position:relative;left:-10000px}\n.fb_iframe_widget_loader{position:relative;display:inline-block}\n.fb_iframe_widget_fluid{display:inline}\n.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}\n.fb_iframe_widget_loader .FB_Loader{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/y9\/r\/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50\u0025;z-index:4}\n.fb_button_simple,\n.fb_button_simple_rtl{background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yH\/r\/eIpbnVKI9lR.png);background-repeat:no-repeat;cursor:pointer;outline:none;text-decoration:none}\n.fb_button_simple_rtl{background-position:right 0}\n.fb_button_simple .fb_button_text{margin:0 0 0 20px;padding-bottom:1px}\n.fb_button_simple_rtl .fb_button_text{margin:0 10px 0 0}\na.fb_button_simple:hover .fb_button_text,\na.fb_button_simple_rtl:hover .fb_button_text,\n.fb_button_simple:hover .fb_button_text,\n.fb_button_simple_rtl:hover .fb_button_text{text-decoration:underline}\n.fb_button,\n.fb_button_rtl{background:#29447e url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yL\/r\/FGFbc80dUKj.png);background-repeat:no-repeat;cursor:pointer;display:inline-block;padding:0 0 0 1px;text-decoration:none;outline:none}\n.fb_button .fb_button_text,\n.fb_button_rtl .fb_button_text{background:#5f78ab url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yL\/r\/FGFbc80dUKj.png);border-top:solid 1px #879ac0;border-bottom:solid 1px #1a356e;color:#fff;display:block;font-family:\"lucida grande\",tahoma,verdana,arial,sans-serif;font-weight:bold;padding:2px 6px 3px 6px;margin:1px 1px 0 21px;text-shadow:none}\na.fb_button,\na.fb_button_rtl,\n.fb_button,\n.fb_button_rtl{text-decoration:none}\na.fb_button:active .fb_button_text,\na.fb_button_rtl:active .fb_button_text,\n.fb_button:active .fb_button_text,\n.fb_button_rtl:active .fb_button_text{border-bottom:solid 1px #29447e;border-top:solid 1px #45619d;background:#4f6aa3;text-shadow:none}\n.fb_button_xlarge,\n.fb_button_xlarge_rtl{background-position:left -60px;font-size: 24px;line-height:30px}\n.fb_button_xlarge .fb_button_text{padding:3px 8px 3px 12px;margin-left:38px}\na.fb_button_xlarge:active{background-position:left -99px}\n.fb_button_xlarge_rtl{background-position:right -268px}\n.fb_button_xlarge_rtl .fb_button_text{padding:3px 8px 3px 12px;margin-right:39px}\na.fb_button_xlarge_rtl:active{background-position:right -307px}\n.fb_button_large,\n.fb_button_large_rtl{background-position:left -138px;font-size: 13px;line-height:16px}\n.fb_button_large .fb_button_text{margin-left:24px;padding:2px 6px 4px 6px}\na.fb_button_large:active{background-position:left -163px}\n.fb_button_large_rtl{background-position:right -346px}\n.fb_button_large_rtl .fb_button_text{margin-right:25px}\na.fb_button_large_rtl:active{background-position:right -371px}\n.fb_button_medium,\n.fb_button_medium_rtl{background-position:left -188px;font-size: 11px;line-height:14px}\na.fb_button_medium:active{background-position:left -210px}\n.fb_button_medium_rtl{background-position:right -396px}\n.fb_button_text_rtl,\n.fb_button_medium_rtl .fb_button_text{padding:2px 6px 3px 6px;margin-right:22px}\na.fb_button_medium_rtl:active{background-position:right -418px}\n.fb_button_small,\n.fb_button_small_rtl{background-position:left -232px;font-size: 10px;line-height:10px}\n.fb_button_small .fb_button_text{padding:2px 6px 3px;margin-left:17px}\na.fb_button_small:active,\n.fb_button_small:active{background-position:left -250px}\n.fb_button_small_rtl{background-position:right -440px}\n.fb_button_small_rtl .fb_button_text{padding:2px 6px;margin-right:18px}\na.fb_button_small_rtl:active{background-position:right -458px}\n.fb_share_count_wrapper{position:relative;float:left}\n.fb_share_count{background:#b0b9ec none repeat scroll 0 0;color:#333;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;text-align:center}\n.fb_share_count_inner{background:#e8ebf2;display:block}\n.fb_share_count_right{margin-left:-1px;display:inline-block}\n.fb_share_count_right .fb_share_count_inner{border-top:solid 1px #e8ebf2;border-bottom:solid 1px #b0b9ec;margin:1px 1px 0 1px;font-size: 10px;line-height:10px;padding:2px 6px 3px;font-weight:bold}\n.fb_share_count_top{display:block;letter-spacing:-1px;line-height:34px;margin-bottom:7px;font-size: 22px;border:solid 1px #b0b9ec}\n.fb_share_count_nub_top{border:none;display:block;position:absolute;left:7px;top:35px;margin:0;padding:0;width:6px;height:7px;background-repeat:no-repeat;background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yU\/r\/bSOHtKbCGYI.png)}\n.fb_share_count_nub_right{border:none;display:inline-block;padding:0;width:5px;height:10px;background-repeat:no-repeat;background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yX\/r\/i_oIVTKMYsL.png);vertical-align:top;background-position:right 5px;z-index:10;left:2px;margin:0 2px 0 0;position:relative}\n.fb_share_no_count{display:none}\n.fb_share_size_Small .fb_share_count_right .fb_share_count_inner{font-size: 10px}\n.fb_share_size_Medium .fb_share_count_right .fb_share_count_inner{font-size: 11px;padding:2px 6px 3px;letter-spacing:-1px;line-height:14px}\n.fb_share_size_Large .fb_share_count_right .fb_share_count_inner{font-size: 13px;line-height:16px;padding:2px 6px 4px;font-weight:normal;letter-spacing:-1px}\n.fb_share_count_hidden .fb_share_count_nub_top,\n.fb_share_count_hidden .fb_share_count_top,\n.fb_share_count_hidden .fb_share_count_nub_right,\n.fb_share_count_hidden .fb_share_count_right{visibility:hidden}\n.fb_connect_bar_container div,\n.fb_connect_bar_container span,\n.fb_connect_bar_container a,\n.fb_connect_bar_container img,\n.fb_connect_bar_container strong{background:none;border-spacing:0;border:0;direction:ltr;font-style:normal;font-variant:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal;vertical-align:baseline}\n.fb_connect_bar_container{position:fixed;left:0 !important;right:0 !important;height:42px !important;padding:0 25px !important;margin:0 !important;vertical-align:middle !important;border-bottom:1px solid #333 !important;background:#3b5998 !important;z-index:99999999 !important;overflow:hidden !important}\n.fb_connect_bar_container_ie6{position:absolute;top:expression(document.compatMode==\"CSS1Compat\"? document.documentElement.scrollTop+\"px\":body.scrollTop+\"px\")}\n.fb_connect_bar{position:relative;margin:auto;height:100\u0025;width:100\u0025;padding:6px 0 0 0 !important;background:none;color:#fff !important;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif !important;font-size: 13px !important;font-style:normal !important;font-variant:normal !important;font-weight:normal !important;letter-spacing:normal !important;line-height:1 !important;text-decoration:none !important;text-indent:0 !important;text-shadow:none !important;text-transform:none !important;white-space:normal !important;word-spacing:normal !important}\n.fb_connect_bar a:hover{color:#fff}\n.fb_connect_bar .fb_profile img{height:30px;width:30px;vertical-align:middle;margin:0 6px 5px 0}\n.fb_connect_bar div a,\n.fb_connect_bar span,\n.fb_connect_bar span a{color:#bac6da;font-size: 11px;text-decoration:none}\n.fb_connect_bar .fb_buttons{float:right;margin-top:7px}\n.fb_edge_widget_with_comment{position:relative;*z-index:1000}\n.fb_edge_widget_with_comment span.fb_edge_comment_widget{position:absolute}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget{z-index:1}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget .FB_Loader{left:0;top:1px;margin-top:6px;margin-left:0;background-position:50\u0025 50\u0025;background-color:#fff;height:150px;width:394px;border:1px #666 solid;border-bottom:2px solid #283e6c;z-index:1}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget.dark .FB_Loader{background-color:#000;border-bottom:2px solid #ccc}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget.siderender\n.FB_Loader{margin-top:0}\n.fbpluginrecommendationsbarleft,\n.fbpluginrecommendationsbarright{position:fixed !important;bottom:0;z-index:999}\n\/* \u0040noflip *\/\n.fbpluginrecommendationsbarleft{left:10px}\n\/* \u0040noflip *\/\n.fbpluginrecommendationsbarright{right:10px}\n", ["fb.css.base", "fb.css.dialog", "fb.css.iframewidget", "fb.css.button", "fb.css.sharebutton", "fb.css.connectbarwidget", "fb.css.edgecommentwidget", "fb.css.sendbuttonformwidget", "fb.css.plugin.recommendationsbar"]);
}