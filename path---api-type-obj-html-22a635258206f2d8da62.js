webpackJsonp([0x601bcc368f664c00],{"./node_modules/json-loader/index.js!./.cache/json/api-type-obj-html.json":function(x,A){x.exports={data:{file:{relativePath:"api/type_Obj.html",childRawHtml:{content:'<div class="ocamldoc"><pre>sig\n\n&#xA0;&#xA0;type&#xA0;t\n&#xA0;&#xA0;external&#xA0;repr&#xA0;:&#xA0;&apos;a&#xA0;-&gt;&#xA0;Obj.t&#xA0;=&#xA0;&quot;%identity&quot;\n&#xA0;&#xA0;external&#xA0;obj&#xA0;:&#xA0;Obj.t&#xA0;-&gt;&#xA0;&apos;a&#xA0;=&#xA0;&quot;%identity&quot;\n&#xA0;&#xA0;external&#xA0;magic&#xA0;:&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;b&#xA0;=&#xA0;&quot;%identity&quot;\n&#xA0;&#xA0;external&#xA0;is_block&#xA0;:&#xA0;Obj.t&#xA0;-&gt;&#xA0;bool&#xA0;=&#xA0;&quot;caml_obj_is_block&quot;\n&#xA0;&#xA0;external&#xA0;is_int&#xA0;:&#xA0;Obj.t&#xA0;-&gt;&#xA0;bool&#xA0;=&#xA0;&quot;%obj_is_int&quot;\n&#xA0;&#xA0;external&#xA0;tag&#xA0;:&#xA0;Obj.t&#xA0;-&gt;&#xA0;int&#xA0;=&#xA0;&quot;caml_obj_tag&quot;\n&#xA0;&#xA0;external&#xA0;set_tag&#xA0;:&#xA0;Obj.t&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;unit&#xA0;=&#xA0;&quot;caml_obj_set_tag&quot;\n&#xA0;&#xA0;external&#xA0;size&#xA0;:&#xA0;Obj.t&#xA0;-&gt;&#xA0;int&#xA0;=&#xA0;&quot;%obj_size&quot;\n&#xA0;&#xA0;external&#xA0;field&#xA0;:&#xA0;Obj.t&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;Obj.t&#xA0;=&#xA0;&quot;%obj_field&quot;\n&#xA0;&#xA0;external&#xA0;set_field&#xA0;:&#xA0;Obj.t&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;Obj.t&#xA0;-&gt;&#xA0;unit&#xA0;=&#xA0;&quot;%obj_set_field&quot;\n&#xA0;&#xA0;val&#xA0;double_field&#xA0;:&#xA0;Obj.t&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;float\n&#xA0;&#xA0;val&#xA0;set_double_field&#xA0;:&#xA0;Obj.t&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;float&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;external&#xA0;new_block&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;Obj.t&#xA0;=&#xA0;&quot;caml_obj_block&quot;\n&#xA0;&#xA0;external&#xA0;dup&#xA0;:&#xA0;Obj.t&#xA0;-&gt;&#xA0;Obj.t&#xA0;=&#xA0;&quot;caml_obj_dup&quot;\n&#xA0;&#xA0;external&#xA0;truncate&#xA0;:&#xA0;Obj.t&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;unit&#xA0;=&#xA0;&quot;caml_obj_truncate&quot;\n&#xA0;&#xA0;external&#xA0;add_offset&#xA0;:&#xA0;Obj.t&#xA0;-&gt;&#xA0;Int32.t&#xA0;-&gt;&#xA0;Obj.t&#xA0;=&#xA0;&quot;caml_obj_add_offset&quot;\n&#xA0;&#xA0;val&#xA0;first_non_constant_constructor_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;last_non_constant_constructor_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;lazy_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;closure_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;object_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;infix_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;forward_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;no_scan_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;abstract_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;string_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;double_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;double_array_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;custom_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;final_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;int_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;out_of_heap_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;unaligned_tag&#xA0;:&#xA0;int\n&#xA0;&#xA0;val&#xA0;extension_name&#xA0;:&#xA0;&apos;a&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;extension_id&#xA0;:&#xA0;&apos;a&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;extension_slot&#xA0;:&#xA0;&apos;a&#xA0;-&gt;&#xA0;Obj.t\n&#xA0;&#xA0;val&#xA0;marshal&#xA0;:&#xA0;Obj.t&#xA0;-&gt;&#xA0;bytes\n&#xA0;&#xA0;val&#xA0;unmarshal&#xA0;:&#xA0;bytes&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;Obj.t&#xA0;*&#xA0;int\nend</pre></div>'}}},pathContext:{relativePath:"api/type_Obj.html"}}}});
//# sourceMappingURL=path---api-type-obj-html-22a635258206f2d8da62.js.map