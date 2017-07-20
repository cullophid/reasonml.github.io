webpackJsonp([0x4a3b89374da95000],{"./node_modules/json-loader/index.js!./.cache/json/api-weak-s-html.json":function(e,s){e.exports={data:{file:{relativePath:"api/Weak.S.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar">&#xA0;<a class="up" href="Weak.html" title="Weak">Up</a>\n&#xA0;</div>\n<h1>Module type <a href="type_Weak.S.html">Weak.S</a></h1>\n\n<pre><span class="keyword">module</span> type S = sig .. end</pre><div class="info modtype top">\nThe output signature of the functor <a href="Weak.Make.html"><code class="code">Weak.Make</code></a>.<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> data;\n</pre>\n<div class="info ">\nThe type of the elements stored in the table.<br>\n</div>\n\n\n<pre><span class="keyword">type</span> t;\n</pre>\n<div class="info ">\nThe type of tables that contain elements of type <code class="code">data</code>.\n        Note that weak hash tables cannot be marshaled using\n        <a href="Pervasives.html#VALoutput_value"><code class="code">Pervasives.output_value</code></a> or the functions of the <a href="Marshal.html"><code class="code">Marshal</code></a>\n        module.<br>\n</div>\n\n\n<pre><span class="keyword">let</span> create: int =&gt; t;\n</pre><div class="info ">\n<code class="code">create n</code> creates a new empty weak hash table, of initial\n        size <code class="code">n</code>.  The table will grow as needed.<br>\n</div>\n\n<pre><span class="keyword">let</span> clear: t =&gt; unit;\n</pre><div class="info ">\nRemove all elements from the table.<br>\n</div>\n\n<pre><span class="keyword">let</span> merge: t =&gt; data =&gt; data;\n</pre><div class="info ">\n<code class="code">merge t x</code> returns an instance of <code class="code">x</code> found in <code class="code">t</code> if any,\n        or else adds <code class="code">x</code> to <code class="code">t</code> and return <code class="code">x</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> add: t =&gt; data =&gt; unit;\n</pre><div class="info ">\n<code class="code">add t x</code> adds <code class="code">x</code> to <code class="code">t</code>.  If there is already an instance\n        of <code class="code">x</code> in <code class="code">t</code>, it is unspecified which one will be\n        returned by subsequent calls to <code class="code">find</code> and <code class="code">merge</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> remove: t =&gt; data =&gt; unit;\n</pre><div class="info ">\n<code class="code">remove t x</code> removes from <code class="code">t</code> one instance of <code class="code">x</code>.  Does\n        nothing if there is no instance of <code class="code">x</code> in <code class="code">t</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> find: t =&gt; data =&gt; data;\n</pre><div class="info ">\n<code class="code">find t x</code> returns an instance of <code class="code">x</code> found in <code class="code">t</code>.\n        Raise <code class="code">Not_found</code> if there is no such element.<br>\n</div>\n\n<pre><span class="keyword">let</span> find_all: t =&gt; data =&gt; list data;\n</pre><div class="info ">\n<code class="code">find_all t x</code> returns a list of all the instances of <code class="code">x</code>\n        found in <code class="code">t</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> mem: t =&gt; data =&gt; bool;\n</pre><div class="info ">\n<code class="code">mem t x</code> returns <code class="code">true</code> if there is at least one instance\n        of <code class="code">x</code> in <code class="code">t</code>, false otherwise.<br>\n</div>\n\n<pre><span class="keyword">let</span> iter: (data =&gt; unit) =&gt; t =&gt; unit;\n</pre><div class="info ">\n<code class="code">iter f t</code> calls <code class="code">f</code> on each element of <code class="code">t</code>, in some unspecified\n        order.  It is not specified what happens if <code class="code">f</code> tries to change\n        <code class="code">t</code> itself.<br>\n</div>\n\n<pre><span class="keyword">let</span> fold: (data =&gt; &apos;a =&gt; &apos;a) =&gt; t =&gt; &apos;a =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">fold f t init</code> computes <code class="code">(f d1 (... (f dN init)))</code> where\n        <code class="code">d1 ... dN</code> are the elements of <code class="code">t</code> in some unspecified order.\n        It is not specified what happens if <code class="code">f</code> tries to change <code class="code">t</code>\n        itself.<br>\n</div>\n\n<pre><span class="keyword">let</span> count: t =&gt; int;\n</pre><div class="info ">\nCount the number of elements in the table.  <code class="code">count t</code> gives the\n        same result as <code class="code">fold (fun _ n -&gt; n+1) t 0</code> but does not delay the\n        deallocation of the dead elements.<br>\n</div>\n\n<pre><span class="keyword">let</span> stats: t =&gt; (int, int, int, int, int, int);\n</pre><div class="info ">\nReturn statistics on the table.  The numbers are, in order:\n        table length, number of entries, sum of bucket lengths,\n        smallest bucket length, median bucket length, biggest bucket length.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Weak.S.html"}}}});
//# sourceMappingURL=path---api-weak-s-html-ca19bc1edb39c9ebccff.js.map