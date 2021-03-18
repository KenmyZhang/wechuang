document.write("<h3>Url</h3>\n<pre><code>/weidu/api/v1/users/avatar\n</code></pre>\n\n<h3>Method</h3>\n<pre><code>GET\n</code></pre>\n\n<h3>Content-Type</h3>\n<pre><code>application/json    \n</code></pre>\n\n<h3>Query Param</h3>\n<pre><code>        &quot;user_id&quot;: &quot;用户id，数据类型string&quot;\n</code></pre>\n\n<h3>限制</h3>\n<pre><code>需要登录带上token，eg: -H &quot;Authorization:Bearer xxxxx&quot; ;测试环境可以不带\n</code></pre>\n\n<h3>Response Body</h3>\n<pre><code>{\n    &quot;result&quot;: &quot;成功返回ok，否则返回相应错误详情，数据类型string&quot;,\n    &quot;code&quot;: &quot;成功返回200，否则返回其他错误码，数据类型int&quot;,\n    &quot;user_info&quot;: {\n        &quot;id&quot;: &quot;用户id，数据类型string&quot;,\n        &quot;create_at&quot;: &quot;创建时间,unix时间戳单位s，数据类型int&quot;,\n        &quot;update_at&quot;: &quot;更新时间,unix时间戳单位s，数据类型int&quot;,\n        &quot;username&quot;: &quot;账号名，数据类型string&quot;,\n        &quot;real_name_verified&quot;: &quot;实名认证，数据类型bool&quot;,\n        &quot;nickname&quot;: &quot;账号昵称，数据类型string&quot;,\n        &quot;avatar_url&quot;: &quot;头像，数据类型string&quot;,\n        &quot;city&quot;: &quot;城市，数据类型string&quot;,\n        &quot;province&quot;: &quot;省份，数据类型string&quot;,\n        &quot;country&quot;: &quot;国家，数据类型string&quot;,\n        &quot;gender&quot;: &quot;性别，数据类型string&quot;,\n        &quot;roles&quot;: &quot;角色，数据类型string&quot;,\n        &quot;desc&quot;: &quot;个人简介，数据类型string&quot;,\n        &quot;level&quot;: &quot;等级，数据类型string&quot;,\n        &quot;major&quot;: &quot;主营，数据类型string&quot;,\n        &quot;refund_rate&quot;: &quot;退款率，数据类型float&quot;,\n        &quot;dispute_rate&quot;: &quot;纠纷率，数据类型float&quot;,\n        &quot;serve_num&quot;: &quot;服务数量，数据类型int&quot;,\n        &quot;work_num&quot;: &quot;作品数,数据类型int&quot;,\n        &quot;mobile&quot;: &quot;电话号码，若手机验证过，该字段返回打码后的字符串，否则不返回该字段，数据类型string&quot;,\n        &quot;email&quot;: &quot;邮箱号码，若手机验证过，该字段返回打码后的字符串，否则不返回该字段，数据类型string&quot;,\n        &quot;last_password_update&quot;: &quot;最后更新密码时间，unix时间戳单位s，数据类型int&quot;\n    }\n}\n</code></pre>\n\n<h3>Example</h3>\n<pre><code>    curl -X PUT &quot;http://0:9004/weidu/api/v1/users/avatar&quot; -i -H &quot;User-Id:esbng8qjsfn5jr355ikcr4aajr&quot; -d '{&quot;avatar_file_id&quot;:&quot;nna9k8znspbninexatfz34fxga&quot;}' \n        HTTP/1.1 200 OK\n        Content-Type: application/json; charset=utf-8\n        Date: Mon, 08 Feb 2021 07:14:48 GMT\n        Content-Length: 692\n\n    {\n        &quot;code&quot;: 200,\n        &quot;result&quot;: &quot;ok&quot;,\n        &quot;user&quot;: {\n            &quot;id&quot;: &quot;esbng8qjsfn5jr355ikcr4aajr&quot;,\n            &quot;create_at&quot;: 1612355036879,\n            &quot;update_at&quot;: 1612355036879,\n            &quot;username&quot;: &quot;1356941491057987584&quot;,\n            &quot;mobile&quot;: &quot;******&quot;,\n            &quot;real_name_verified&quot;: false,\n            &quot;nickname&quot;: &quot;&quot;,\n            &quot;avatar_url&quot;: &quot;20210208/users/esbng8qjsfn5jr355ikcr4aajr/nna9k8znspbninexatfz34fxga/fabu.jpg&quot;,\n            &quot;award_info&quot;: &quot;&quot;,\n            &quot;city&quot;: &quot;&quot;,\n            &quot;province&quot;: &quot;&quot;,\n            &quot;country&quot;: &quot;&quot;,\n            &quot;gender&quot;: 0,\n            &quot;roles&quot;: &quot;general_user&quot;,\n            &quot;description&quot;: &quot;2221æè¿°&quot;,\n            &quot;major&quot;: &quot;&quot;,\n            &quot;level&quot;: &quot;&quot;,\n            &quot;skill&quot;: &quot;&quot;,\n            &quot;refund_rate&quot;: 0,\n            &quot;dispute_rate&quot;: 0,\n            &quot;serve_num&quot;: 0,\n            &quot;work_num&quot;: 0,\n            &quot;label&quot;: &quot;222 kfc&quot;,\n            &quot;transaction_amount&quot;: 0,\n            &quot;transaction_praise_cnt&quot;: 0,\n            &quot;last_password_update&quot;: 0\n        }\n    }\n</code></pre>\n")