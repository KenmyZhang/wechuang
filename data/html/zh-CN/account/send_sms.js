document.write("<h3>Url</h3>\n<pre><code>/weidu/api/v1/users/sendsms\n</code></pre>\n\n<h3>Method</h3>\n<pre><code>POST\n</code></pre>\n\n<h3>Content-Type</h3>\n<pre><code>application/json    \n</code></pre>\n\n<h3>Request Payload</h3>\n<pre><code>{\n    &quot;mobile&quot;:&quot;手机号码，数据类型string, 必填&quot;,\n    &quot;captcha_token&quot;:&quot;行为验证token，数据类型string，必填&quot;,\n    &quot;device_model&quot;: &quot;设备型号,数据类型string，目前可以选填，后期做了安全加固后必填&quot;,\n    &quot;device_name&quot;: &quot;设备名称，数据类型string，目前可以选填，后期做了安全加固后必填&quot;,\n    &quot;timestamp&quot;: &quot;发送验证码时间，unix时间戳单位s，数据类型int，目前可以选填后期做了安全加固后必填&quot;,\n    &quot;device_id&quot;: &quot;设备id，数据类型string，目前可以选填，后期做了安全加固后必填&quot;,\n    &quot;device_sign&quot;: &quot;设置标识，由app_name、business_type、deviceid经md5、hash构成, 数据类型string，目前可以选填，后期做了安全加固后必填&quot;\n}\n</code></pre>\n\n<h3>Response Body</h3>\n<pre><code>{\n    &quot;result&quot;: &quot;成功返回ok，否则返回相应错误详情，数据类型string&quot;,\n    &quot;code&quot;: &quot;成功返回200，否则返回其他错误码，数据类型int&quot; \n}\n</code></pre>\n\n<h3>Example</h3>\n<pre><code>curl -X POST  &quot;http://129.28.198.139:8089/weidu/api/v1/users/sendsms&quot;  -d '{&quot;mobile&quot;:&quot;13544285662&quot;, &quot;captcha_token&quot;:&quot;xxxxxxxx&quot;}'   -i\n    HTTP/1.1 200 OK\n    Content-Length: 15\n    Content-Type: application/json\n    Date: Wed, 06 xxx xxx 08:50:48 GMT\n    Keep-Alive: timeout=38\n    X-Request-Id: gspaaa38zidzucciep6rgtyxao\n    X-Version-Id: 4.0.0.dev.b88ebfe669ef663bb26f25ac85d6bf0d\n\n{\n    &quot;result&quot;:&quot;ok&quot;,\n    &quot;code&quot;: 200\n}\n</code></pre>\n")