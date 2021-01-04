document.write("<h3>Url</h3>\n<pre><code>/weidu/api/v1/files\n</code></pre>\n\n<h3>Method</h3>\n<pre><code>GET\n</code></pre>\n\n<h3>Content-Type</h3>\n<pre><code>application/json    \n</code></pre>\n\n<h3>Query Param</h3>\n<pre><code>&quot;user_id&quot;: &quot;用户id，数据类型string&quot;\n</code></pre>\n\n<h3>Form Param</h3>\n<pre><code>&quot;files&quot;: &quot;文件路径&quot;    \n</code></pre>\n\n<h3>限制</h3>\n<pre><code>需要登录带上token，eg: -H &quot;Authorization:Bearer xxxxx&quot; ;测试环境可以不带\n</code></pre>\n\n<h3>Response Body</h3>\n<pre><code>{\n    &quot;result&quot;: &quot;成功返回ok，否则返回相应错误详情，数据类型string&quot;,\n    &quot;code&quot;: &quot;成功返回200，否则返回其他错误码，数据类型int&quot;,\n    &quot;data&quot;: {\n            &quot;file_infos&quot;: [{\n            &quot;id&quot;: &quot;文件id，数据类型string&quot;,\n            &quot;user_id&quot;: &quot;用户id，数据类型string&quot;,\n            &quot;create_time&quot;: &quot;创建时间，unix时间戳单位ms，数据类型int&quot;,\n            &quot;update_time&quot;: &quot;更新时间，unix时间戳单位ms，数据类型int&quot;,\n            &quot;path&quot;: &quot;文件路径，数据类型string&quot;,\n            &quot;preview_path&quot;: &quot;预览图路径，数据类型string&quot;,\n            &quot;name&quot;: &quot;文件名，数据类型string&quot;,\n            &quot;extension&quot;: &quot;文件后缀，数据类型string&quot;,\n            &quot;size&quot;: &quot;文件大小，数据类型int&quot;,\n            &quot;mime_type&quot;: &quot;文件类型，数据类型string&quot;\n        }]\n    }\n}\n</code></pre>\n\n<h3>Example</h3>\n\n<p>curl -X POST &ldquo;<a href=\"http://127.0.0.1:9004/weidu/api/v1/files?user_id=rfeaxzb4etf58cia8i6ha1jwgw&quot;\">http://127.0.0.1:9004/weidu/api/v1/files?user_id=rfeaxzb4etf58cia8i6ha1jwgw&quot;</a>  -F &ldquo;files=@/Users/zhangkunming/go/src/wechuang/data/docs/TOC.ini&rdquo; -i</p>\n<pre><code>HTTP/1.1 100 Continue\nHTTP/1.1 201 Created\nContent-Type: application/json; charset=utf-8\nDate: Tue, 06 Oct 2020 12:54:27 GMT\nContent-Length: 363\n\n{\n    &quot;code&quot;: 200,\n    &quot;data&quot;: {\n        &quot;file_infos&quot;: [{\n            &quot;id&quot;: &quot;hhtfwf9zrifu8f7rsuh36bkgjw&quot;,\n            &quot;user_id&quot;: &quot;rfeaxzb4etf58cia8i6ha1jwgw&quot;,\n            &quot;create_time&quot;: 1601988867705,\n            &quot;update_time&quot;: 1601988867705,\n            &quot;path&quot;: &quot;20201006/users/rfeaxzb4etf58cia8i6ha1jwgw/hhtfwf9zrifu8f7rsuh36bkgjw/TOC.ini&quot;,\n            &quot;preview_path&quot;: &quot;&quot;,\n            &quot;name&quot;: &quot;TOC.ini&quot;,\n            &quot;extension&quot;: &quot;ini&quot;,\n            &quot;size&quot;: 706,\n            &quot;mime_type&quot;: &quot;&quot;\n        }]\n    },\n    &quot;result&quot;: &quot;ok&quot;\n}\n</code></pre>\n")