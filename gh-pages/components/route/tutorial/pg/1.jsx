Comp.Tutorial.Part1 = class extends React.Component {

	render() {
		var TutorialNav = Comp.TutorialNav;
		return (
			<div>
				<TutorialNav />

				<div class="row clearfix">

					<p class="grid-4 code-description">Setting up a basic ripsaw app is simple. Just include a div with a &#8217;ripsaw-app&#8217; id that will contain ripsaw&#8217;s dynamically generated canvas. All magic happens within.</p>

					<div class="code grid-8">
						<div class="code-filename">index.html</div>
						<div class="code-content">
							<pre>
`
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
	&lt;title&gt;ripsaw example&lt;/title&gt;
	&lt;link rel="stylesheet" type="text/css" href="style.css"&gt;
&lt;/head&gt;

&lt;body&gt;
	&lt;div id="ripsaw-app"&gt;&lt;/div&gt;
	&lt;script src="ripsaw-light.js"&gt;&lt;/script&gt;
	&lt;script src="ripsaw-app.js"&gt;&lt;/script&gt;	
&lt;/body&gt;
&lt;/html&gt;
`
							</pre>
						</div>
					</div>

				</div>

				<div class="row clearfix">
										
					<p class="grid-4 code-description">On the JavaScript side, all information about the geometry of the product is stored in a RIPSAW.masterPiece object. The Bezier2D constructor sets up this object as a 2d bezier spline using the "fork" template.</p>

					<div class="code grid-8">
						<div class="code-filename">ripsaw-app.js</div>
						<div class="code-content">
							<pre>
				var geometry = RIPSAW.textAssets.shapeLibrary["fork"];

				// set masterpiece
				RIPSAW.masterPiece = new RIPSAW.Bezier2D(geometry);

				// scale geometry into (-0.5, -0.5) - (+0.5, +0.5) rectangle
				RIPSAW.masterPiece.normalize(); 

				// create canvas and add mouse event listeners
				RIPSAW.init();

				// run application (setInterval)
				RIPSAW.launch();
							</pre>
						</div>
					</div>

				</div>

				<div class="row clearfix">

					<p class="grid-4 code-description">Finally, add some css to make sure that the container div fills the screen. But then again, you don&#8217;t have to. ripsaw scales the app to any size container - so feel free to experiment ~</p>

					<div class="code grid-8">
						<div class="code-filename">style.css</div>
						<div class="code-content">
							<pre>
`
body { margin: 0; }

#ripsaw-app {
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
}
`
							</pre>
						</div>
					</div>

				</div>

				<div class="row clearfix">
					<div class="grid-8 grid-offset-2" id="ripsaw-app"></div>
				</div>
				<div class="row row-no-space">
					<p class="grid-2 grid-offset-2 code-description">~ like so!</p>
				</div>
			</div>
		);
	}

}