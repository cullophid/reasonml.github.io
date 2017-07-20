webpackJsonp([0x73a48f9031507400],{"./node_modules/json-loader/index.js!./.cache/json/api-type-lexing-html.json":function(x,A){x.exports={data:{file:{relativePath:"api/type_Lexing.html",childRawHtml:{content:'<div class="ocamldoc"><pre>sig\n\n&#xA0;&#xA0;type&#xA0;position&#xA0;=&#xA0;{\n&#xA0;&#xA0;&#xA0;&#xA0;pos_fname&#xA0;:&#xA0;string;\n&#xA0;&#xA0;&#xA0;&#xA0;pos_lnum&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;pos_bol&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;pos_cnum&#xA0;:&#xA0;int;\n&#xA0;&#xA0;}\n&#xA0;&#xA0;val&#xA0;dummy_pos&#xA0;:&#xA0;Lexing.position\n&#xA0;&#xA0;type&#xA0;lexbuf&#xA0;=&#xA0;{\n&#xA0;&#xA0;&#xA0;&#xA0;refill_buff&#xA0;:&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;unit;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;lex_buffer&#xA0;:&#xA0;bytes;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;lex_buffer_len&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;lex_abs_pos&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;lex_start_pos&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;lex_curr_pos&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;lex_last_pos&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;lex_last_action&#xA0;:&#xA0;int;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;lex_eof_reached&#xA0;:&#xA0;bool;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;lex_mem&#xA0;:&#xA0;int&#xA0;array;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;lex_start_p&#xA0;:&#xA0;Lexing.position;\n&#xA0;&#xA0;&#xA0;&#xA0;mutable&#xA0;lex_curr_p&#xA0;:&#xA0;Lexing.position;\n&#xA0;&#xA0;}\n&#xA0;&#xA0;val&#xA0;from_channel&#xA0;:&#xA0;Pervasives.in_channel&#xA0;-&gt;&#xA0;Lexing.lexbuf\n&#xA0;&#xA0;val&#xA0;from_string&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;Lexing.lexbuf\n&#xA0;&#xA0;val&#xA0;from_function&#xA0;:&#xA0;(bytes&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;int)&#xA0;-&gt;&#xA0;Lexing.lexbuf\n&#xA0;&#xA0;val&#xA0;lexeme&#xA0;:&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;lexeme_char&#xA0;:&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;char\n&#xA0;&#xA0;val&#xA0;lexeme_start&#xA0;:&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;lexeme_end&#xA0;:&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;lexeme_start_p&#xA0;:&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;Lexing.position\n&#xA0;&#xA0;val&#xA0;lexeme_end_p&#xA0;:&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;Lexing.position\n&#xA0;&#xA0;val&#xA0;new_line&#xA0;:&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;flush_input&#xA0;:&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;sub_lexeme&#xA0;:&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;sub_lexeme_opt&#xA0;:&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;string&#xA0;option\n&#xA0;&#xA0;val&#xA0;sub_lexeme_char&#xA0;:&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;char\n&#xA0;&#xA0;val&#xA0;sub_lexeme_char_opt&#xA0;:&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;char&#xA0;option\n&#xA0;&#xA0;type&#xA0;lex_tables&#xA0;=&#xA0;{\n&#xA0;&#xA0;&#xA0;&#xA0;lex_base&#xA0;:&#xA0;string;\n&#xA0;&#xA0;&#xA0;&#xA0;lex_backtrk&#xA0;:&#xA0;string;\n&#xA0;&#xA0;&#xA0;&#xA0;lex_default&#xA0;:&#xA0;string;\n&#xA0;&#xA0;&#xA0;&#xA0;lex_trans&#xA0;:&#xA0;string;\n&#xA0;&#xA0;&#xA0;&#xA0;lex_check&#xA0;:&#xA0;string;\n&#xA0;&#xA0;&#xA0;&#xA0;lex_base_code&#xA0;:&#xA0;string;\n&#xA0;&#xA0;&#xA0;&#xA0;lex_backtrk_code&#xA0;:&#xA0;string;\n&#xA0;&#xA0;&#xA0;&#xA0;lex_default_code&#xA0;:&#xA0;string;\n&#xA0;&#xA0;&#xA0;&#xA0;lex_trans_code&#xA0;:&#xA0;string;\n&#xA0;&#xA0;&#xA0;&#xA0;lex_check_code&#xA0;:&#xA0;string;\n&#xA0;&#xA0;&#xA0;&#xA0;lex_code&#xA0;:&#xA0;string;\n&#xA0;&#xA0;}\n&#xA0;&#xA0;val&#xA0;engine&#xA0;:&#xA0;Lexing.lex_tables&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;new_engine&#xA0;:&#xA0;Lexing.lex_tables&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;int\nend</pre></div>'}}},pathContext:{relativePath:"api/type_Lexing.html"}}}});
//# sourceMappingURL=path---api-type-lexing-html-994646b49ce92c451a8b.js.map