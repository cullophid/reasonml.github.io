webpackJsonp([0xae47da191ec16000],{"./node_modules/json-loader/index.js!./.cache/json/api-type-docstrings-html.json":function(x,A){x.exports={data:{file:{relativePath:"api/type_Docstrings.html",childRawHtml:{content:'<div class="ocamldoc"><pre>sig\n\n&#xA0;&#xA0;val&#xA0;init&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;warn_bad_docstrings&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;type&#xA0;docstring\n&#xA0;&#xA0;val&#xA0;docstring&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;Location.t&#xA0;-&gt;&#xA0;Docstrings.docstring\n&#xA0;&#xA0;val&#xA0;docstring_body&#xA0;:&#xA0;Docstrings.docstring&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;docstring_loc&#xA0;:&#xA0;Docstrings.docstring&#xA0;-&gt;&#xA0;Location.t\n&#xA0;&#xA0;val&#xA0;set_pre_docstrings&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Lexing.position&#xA0;-&gt;&#xA0;Docstrings.docstring&#xA0;list&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;set_post_docstrings&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Lexing.position&#xA0;-&gt;&#xA0;Docstrings.docstring&#xA0;list&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;set_floating_docstrings&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Lexing.position&#xA0;-&gt;&#xA0;Docstrings.docstring&#xA0;list&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;set_pre_extra_docstrings&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Lexing.position&#xA0;-&gt;&#xA0;Docstrings.docstring&#xA0;list&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;set_post_extra_docstrings&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Lexing.position&#xA0;-&gt;&#xA0;Docstrings.docstring&#xA0;list&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;type&#xA0;docs&#xA0;=&#xA0;{\n&#xA0;&#xA0;&#xA0;&#xA0;docs_pre&#xA0;:&#xA0;Docstrings.docstring&#xA0;option;\n&#xA0;&#xA0;&#xA0;&#xA0;docs_post&#xA0;:&#xA0;Docstrings.docstring&#xA0;option;\n&#xA0;&#xA0;}\n&#xA0;&#xA0;val&#xA0;empty_docs&#xA0;:&#xA0;Docstrings.docs\n&#xA0;&#xA0;val&#xA0;docs_attr&#xA0;:&#xA0;Docstrings.docstring&#xA0;-&gt;&#xA0;Parsetree.attribute\n&#xA0;&#xA0;val&#xA0;add_docs_attrs&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Docstrings.docs&#xA0;-&gt;&#xA0;Parsetree.attributes&#xA0;-&gt;&#xA0;Parsetree.attributes\n&#xA0;&#xA0;val&#xA0;symbol_docs&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;Docstrings.docs\n&#xA0;&#xA0;val&#xA0;symbol_docs_lazy&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;Docstrings.docs&#xA0;Lazy.t\n&#xA0;&#xA0;val&#xA0;rhs_docs&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;Docstrings.docs\n&#xA0;&#xA0;val&#xA0;rhs_docs_lazy&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;Docstrings.docs&#xA0;Lazy.t\n&#xA0;&#xA0;val&#xA0;mark_symbol_docs&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;mark_rhs_docs&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;type&#xA0;info&#xA0;=&#xA0;Docstrings.docstring&#xA0;option\n&#xA0;&#xA0;val&#xA0;empty_info&#xA0;:&#xA0;Docstrings.info\n&#xA0;&#xA0;val&#xA0;info_attr&#xA0;:&#xA0;Docstrings.docstring&#xA0;-&gt;&#xA0;Parsetree.attribute\n&#xA0;&#xA0;val&#xA0;add_info_attrs&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Docstrings.info&#xA0;-&gt;&#xA0;Parsetree.attributes&#xA0;-&gt;&#xA0;Parsetree.attributes\n&#xA0;&#xA0;val&#xA0;symbol_info&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;Docstrings.info\n&#xA0;&#xA0;val&#xA0;rhs_info&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;Docstrings.info\n&#xA0;&#xA0;type&#xA0;text&#xA0;=&#xA0;Docstrings.docstring&#xA0;list\n&#xA0;&#xA0;val&#xA0;empty_text&#xA0;:&#xA0;Docstrings.text\n&#xA0;&#xA0;val&#xA0;text_attr&#xA0;:&#xA0;Docstrings.docstring&#xA0;-&gt;&#xA0;Parsetree.attribute\n&#xA0;&#xA0;val&#xA0;add_text_attrs&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Docstrings.text&#xA0;-&gt;&#xA0;Parsetree.attributes&#xA0;-&gt;&#xA0;Parsetree.attributes\n&#xA0;&#xA0;val&#xA0;symbol_text&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;Docstrings.text\n&#xA0;&#xA0;val&#xA0;symbol_text_lazy&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;Docstrings.text&#xA0;Lazy.t\n&#xA0;&#xA0;val&#xA0;rhs_text&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;Docstrings.text\n&#xA0;&#xA0;val&#xA0;rhs_text_lazy&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;Docstrings.text&#xA0;Lazy.t\n&#xA0;&#xA0;val&#xA0;symbol_pre_extra_text&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;Docstrings.text\n&#xA0;&#xA0;val&#xA0;symbol_post_extra_text&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;Docstrings.text\n&#xA0;&#xA0;val&#xA0;rhs_pre_extra_text&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;Docstrings.text\n&#xA0;&#xA0;val&#xA0;rhs_post_extra_text&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;Docstrings.text\nend</pre></div>'}}},pathContext:{relativePath:"api/type_Docstrings.html"}}}});
//# sourceMappingURL=path---api-type-docstrings-html-32c8e72a01b7e5aaaee3.js.map