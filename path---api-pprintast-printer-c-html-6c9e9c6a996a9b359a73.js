webpackJsonp([0xdbb4578b2b4fc000],{"./node_modules/json-loader/index.js!./.cache/json/api-pprintast-printer-c-html.json":function(t,e){t.exports={data:{file:{relativePath:"api/Pprintast.printer-c.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar">&#xA0;<a class="up" href="Pprintast.html" title="Pprintast">Up</a>\n&#xA0;</div>\n<h1>Class <a href="type_Pprintast.printer.html">Pprintast.printer</a></h1>\n\n<pre>class printer : unit -&gt; object .. end</pre><hr width="100%">\n\n<pre><span class="keyword">let</span> pipe: bool;\n</pre>\n<pre><span class="keyword">let</span> semi: bool;\n</pre>\n<pre>method binding : Format.formatter -&gt; Parsetree.value_binding -&gt; unit</pre>\n<pre>method bindings : Format.formatter -&gt; Asttypes.rec_flag * Parsetree.value_binding list -&gt; unit</pre>\n<pre>method case_list : Format.formatter -&gt; Parsetree.case list -&gt; unit</pre>\n<pre>method class_expr : Format.formatter -&gt; Parsetree.class_expr -&gt; unit</pre>\n<pre>method class_field : Format.formatter -&gt; Parsetree.class_field -&gt; unit</pre>\n<pre>method class_params_def : Format.formatter -&gt; (Parsetree.core_type * Asttypes.variance) list -&gt; unit</pre>\n<pre>method class_signature : Format.formatter -&gt; Parsetree.class_signature -&gt; unit</pre>\n<pre>method class_structure : Format.formatter -&gt; Parsetree.class_structure -&gt; unit</pre>\n<pre>method class_type : Format.formatter -&gt; Parsetree.class_type -&gt; unit</pre>\n<pre>method class_type_declaration_list : Format.formatter -&gt; Parsetree.class_type_declaration list -&gt; unit</pre>\n<pre>method constant : Format.formatter -&gt; Asttypes.constant -&gt; unit</pre>\n<pre>method constant_string : Format.formatter -&gt; string -&gt; unit</pre>\n<pre>method core_type : Format.formatter -&gt; Parsetree.core_type -&gt; unit</pre>\n<pre>method core_type1 : Format.formatter -&gt; Parsetree.core_type -&gt; unit</pre>\n<pre>method direction_flag : Format.formatter -&gt; Asttypes.direction_flag -&gt; unit</pre>\n<pre>method directive_argument : Format.formatter -&gt; Parsetree.directive_argument -&gt; unit</pre>\n<pre>method exception_declaration : Format.formatter -&gt; Parsetree.extension_constructor -&gt; unit</pre>\n<pre>method expression : Format.formatter -&gt; Parsetree.expression -&gt; unit</pre>\n<pre>method expression1 : Format.formatter -&gt; Parsetree.expression -&gt; unit</pre>\n<pre>method expression2 : Format.formatter -&gt; Parsetree.expression -&gt; unit</pre>\n<pre>method extension_constructor : Format.formatter -&gt; Parsetree.extension_constructor -&gt; unit</pre>\n<pre>method label_exp : Format.formatter -&gt;       Asttypes.label * Parsetree.expression option * Parsetree.pattern -&gt; unit</pre>\n<pre>method label_x_expression_param : Format.formatter -&gt; Asttypes.label * Parsetree.expression -&gt; unit</pre>\n<pre>method list : &apos;a.         ?sep:space_formatter -&gt;         ?first:space_formatter -&gt;         ?last:space_formatter -&gt;         (Format.formatter -&gt; &apos;a -&gt; unit) -&gt; Format.formatter -&gt; &apos;a list -&gt; unit</pre>\n<pre>method longident : Format.formatter -&gt; Longident.t -&gt; unit</pre>\n<pre>method longident_loc : Format.formatter -&gt; Longident.t Asttypes.loc -&gt; unit</pre>\n<pre>method module_expr : Format.formatter -&gt; Parsetree.module_expr -&gt; unit</pre>\n<pre>method module_type : Format.formatter -&gt; Parsetree.module_type -&gt; unit</pre>\n<pre>method mutable_flag : Format.formatter -&gt; Asttypes.mutable_flag -&gt; unit</pre>\n<pre>method option : &apos;a.         ?first:space_formatter -&gt;         ?last:space_formatter -&gt;         (Format.formatter -&gt; &apos;a -&gt; unit) -&gt; Format.formatter -&gt; &apos;a option -&gt; unit</pre>\n<pre>method paren : &apos;a.         ?first:space_formatter -&gt;         ?last:space_formatter -&gt;         bool -&gt; (Format.formatter -&gt; &apos;a -&gt; unit) -&gt; Format.formatter -&gt; &apos;a -&gt; unit</pre>\n<pre>method pattern : Format.formatter -&gt; Parsetree.pattern -&gt; unit</pre>\n<pre>method pattern1 : Format.formatter -&gt; Parsetree.pattern -&gt; unit</pre>\n<pre>method payload : Format.formatter -&gt; Parsetree.payload -&gt; unit</pre>\n<pre>method private_flag : Format.formatter -&gt; Asttypes.private_flag -&gt; unit</pre>\n<pre>method rec_flag : Format.formatter -&gt; Asttypes.rec_flag -&gt; unit</pre>\n<pre>method nonrec_flag : Format.formatter -&gt; Asttypes.rec_flag -&gt; unit</pre>\n<pre>method reset : &lt; attribute : Format.formatter -&gt; Parsetree.attribute -&gt; unit;         attributes : Format.formatter -&gt; Parsetree.attributes -&gt; unit;         binding : Format.formatter -&gt; Parsetree.value_binding -&gt; unit;         bindings : Format.formatter -&gt;                    Asttypes.rec_flag * Parsetree.value_binding list -&gt; unit;         case_list : Format.formatter -&gt; Parsetree.case list -&gt; unit;         class_expr : Format.formatter -&gt; Parsetree.class_expr -&gt; unit;         class_field : Format.formatter -&gt; Parsetree.class_field -&gt; unit;         class_params_def : Format.formatter -&gt;                            (Parsetree.core_type * Asttypes.variance) list -&gt; unit;         class_signature : Format.formatter -&gt; Parsetree.class_signature -&gt; unit;         class_structure : Format.formatter -&gt; Parsetree.class_structure -&gt; unit;         class_type : Format.formatter -&gt; Parsetree.class_type -&gt; unit;         class_type_declaration_list : Format.formatter -&gt;                                       Parsetree.class_type_declaration list -&gt; unit;         constant : Format.formatter -&gt; Asttypes.constant -&gt; unit;         constant_string : Format.formatter -&gt; string -&gt; unit;         core_type : Format.formatter -&gt; Parsetree.core_type -&gt; unit;         core_type1 : Format.formatter -&gt; Parsetree.core_type -&gt; unit;         direction_flag : Format.formatter -&gt; Asttypes.direction_flag -&gt; unit;         directive_argument : Format.formatter -&gt;                              Parsetree.directive_argument -&gt; unit;         exception_declaration : Format.formatter -&gt;                                 Parsetree.extension_constructor -&gt; unit;         expression : Format.formatter -&gt; Parsetree.expression -&gt; unit;         expression1 : Format.formatter -&gt; Parsetree.expression -&gt; unit;         expression2 : Format.formatter -&gt; Parsetree.expression -&gt; unit;         extension : Format.formatter -&gt; Parsetree.extension -&gt; unit;         extension_constructor : Format.formatter -&gt;                                 Parsetree.extension_constructor -&gt; unit;         floating_attribute : Format.formatter -&gt; Parsetree.attribute -&gt; unit;         item_attribute : Format.formatter -&gt; Parsetree.attribute -&gt; unit;         item_attributes : Format.formatter -&gt; Parsetree.attributes -&gt; unit;         item_extension : Format.formatter -&gt; Parsetree.extension -&gt; unit;         label_exp : Format.formatter -&gt;                     Asttypes.label * Parsetree.expression option *                     Parsetree.pattern -&gt; unit;         label_x_expression_param : Format.formatter -&gt;                                    Asttypes.label * Parsetree.expression -&gt; unit;         list : &apos;a.                  ?sep:space_formatter -&gt;                  ?first:space_formatter -&gt;                  ?last:space_formatter -&gt;                  (Format.formatter -&gt; &apos;a -&gt; unit) -&gt;                  Format.formatter -&gt; &apos;a list -&gt; unit;         longident : Format.formatter -&gt; Longident.t -&gt; unit;         longident_loc : Format.formatter -&gt; Longident.t Asttypes.loc -&gt; unit;         module_expr : Format.formatter -&gt; Parsetree.module_expr -&gt; unit;         module_type : Format.formatter -&gt; Parsetree.module_type -&gt; unit;         mutable_flag : Format.formatter -&gt; Asttypes.mutable_flag -&gt; unit;         nonrec_flag : Format.formatter -&gt; Asttypes.rec_flag -&gt; unit;         option : &apos;a.                    ?first:space_formatter -&gt;                    ?last:space_formatter -&gt;                    (Format.formatter -&gt; &apos;a -&gt; unit) -&gt;                    Format.formatter -&gt; &apos;a option -&gt; unit;         paren : &apos;a.                   ?first:space_formatter -&gt;                   ?last:space_formatter -&gt;                   bool -&gt;                   (Format.formatter -&gt; &apos;a -&gt; unit) -&gt;                   Format.formatter -&gt; &apos;a -&gt; unit;         pattern : Format.formatter -&gt; Parsetree.pattern -&gt; unit;         pattern1 : Format.formatter -&gt; Parsetree.pattern -&gt; unit;         payload : Format.formatter -&gt; Parsetree.payload -&gt; unit;         private_flag : Format.formatter -&gt; Asttypes.private_flag -&gt; unit;         rec_flag : Format.formatter -&gt; Asttypes.rec_flag -&gt; unit; reset : &apos;b;         reset_ifthenelse : &apos;b; reset_pipe : &apos;b; reset_semi : &apos;b;         signature : Format.formatter -&gt; Parsetree.signature_item list -&gt; unit;         signature_item : Format.formatter -&gt; Parsetree.signature_item -&gt; unit;         simple_expr : Format.formatter -&gt; Parsetree.expression -&gt; unit;         simple_pattern : Format.formatter -&gt; Parsetree.pattern -&gt; unit;         string_quot : Format.formatter -&gt; Asttypes.label -&gt; unit;         structure : Format.formatter -&gt; Parsetree.structure_item list -&gt; unit;         structure_item : Format.formatter -&gt; Parsetree.structure_item -&gt; unit;         sugar_expr : Format.formatter -&gt; Parsetree.expression -&gt; bool;         toplevel_phrase : Format.formatter -&gt; Parsetree.toplevel_phrase -&gt; unit;         type_declaration : Format.formatter -&gt; Parsetree.type_declaration -&gt; unit;         type_def_list : Format.formatter -&gt; Parsetree.type_declaration list -&gt; unit;         type_extension : Format.formatter -&gt; Parsetree.type_extension -&gt; unit;         type_param : Format.formatter -&gt;                      Parsetree.core_type * Asttypes.variance -&gt; unit;         type_params : Format.formatter -&gt;                       (Parsetree.core_type * Asttypes.variance) list -&gt; unit;         type_with_label : Format.formatter -&gt;                           Asttypes.label * Parsetree.core_type -&gt; unit;         tyvar : Format.formatter -&gt; string -&gt; unit; under_ifthenelse : &apos;b;         under_pipe : &apos;b; under_semi : &apos;b;         value_description : Format.formatter -&gt; Parsetree.value_description -&gt; unit;         virtual_flag : Format.formatter -&gt; Asttypes.virtual_flag -&gt; unit; .. &gt;       as &apos;b</pre>\n<pre>method reset_semi : &apos;b</pre>\n<pre>method reset_ifthenelse : &apos;b</pre>\n<pre>method reset_pipe : &apos;b</pre>\n<pre>method signature : Format.formatter -&gt; Parsetree.signature_item list -&gt; unit</pre>\n<pre>method signature_item : Format.formatter -&gt; Parsetree.signature_item -&gt; unit</pre>\n<pre>method simple_expr : Format.formatter -&gt; Parsetree.expression -&gt; unit</pre>\n<pre>method simple_pattern : Format.formatter -&gt; Parsetree.pattern -&gt; unit</pre>\n<pre>method string_quot : Format.formatter -&gt; Asttypes.label -&gt; unit</pre>\n<pre>method structure : Format.formatter -&gt; Parsetree.structure_item list -&gt; unit</pre>\n<pre>method structure_item : Format.formatter -&gt; Parsetree.structure_item -&gt; unit</pre>\n<pre>method sugar_expr : Format.formatter -&gt; Parsetree.expression -&gt; bool</pre>\n<pre>method toplevel_phrase : Format.formatter -&gt; Parsetree.toplevel_phrase -&gt; unit</pre>\n<pre>method type_declaration : Format.formatter -&gt; Parsetree.type_declaration -&gt; unit</pre>\n<pre>method type_def_list : Format.formatter -&gt; Parsetree.type_declaration list -&gt; unit</pre>\n<pre>method type_extension : Format.formatter -&gt; Parsetree.type_extension -&gt; unit</pre>\n<pre>method type_param : Format.formatter -&gt; Parsetree.core_type * Asttypes.variance -&gt; unit</pre>\n<pre>method type_params : Format.formatter -&gt; (Parsetree.core_type * Asttypes.variance) list -&gt; unit</pre>\n<pre>method type_with_label : Format.formatter -&gt; Asttypes.label * Parsetree.core_type -&gt; unit</pre>\n<pre>method tyvar : Format.formatter -&gt; string -&gt; unit</pre>\n<pre>method under_pipe : &apos;b</pre>\n<pre>method under_semi : &apos;b</pre>\n<pre>method under_ifthenelse : &apos;b</pre>\n<pre>method value_description : Format.formatter -&gt; Parsetree.value_description -&gt; unit</pre>\n<pre>method virtual_flag : Format.formatter -&gt; Asttypes.virtual_flag -&gt; unit</pre>\n<pre>method attribute : Format.formatter -&gt; Parsetree.attribute -&gt; unit</pre>\n<pre>method item_attribute : Format.formatter -&gt; Parsetree.attribute -&gt; unit</pre>\n<pre>method floating_attribute : Format.formatter -&gt; Parsetree.attribute -&gt; unit</pre>\n<pre>method attributes : Format.formatter -&gt; Parsetree.attributes -&gt; unit</pre>\n<pre>method item_attributes : Format.formatter -&gt; Parsetree.attributes -&gt; unit</pre>\n<pre>method extension : Format.formatter -&gt; Parsetree.extension -&gt; unit</pre>\n<pre>method item_extension : Format.formatter -&gt; Parsetree.extension -&gt; unit</pre></div>'}}},pathContext:{relativePath:"api/Pprintast.printer-c.html"}}}});
//# sourceMappingURL=path---api-pprintast-printer-c-html-6c9e9c6a996a9b359a73.js.map