angular.module("blog.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/post-create.tpl.html","<section>\n	<form name=\"createPost\" role=\"form\" ng-submit=\"postcreate.create()\">\n    <fieldset class=\"form-group\">\n      <input class=\"form-control input-lg\" type=\"text\" placeholder=\"Título del Post\" ng-model=\"postcreate.post.title\" required>\n    </fieldset>\n    <fieldset class=\"form-group\">\n      <textarea class=\"form-control input-lg\" placeholder=\"Texto del Post\" ng-model=\"postcreate.post.text\" required></textarea>\n    </fieldset>\n    <hr>\n    <button class=\"btn btn-primary btn-lg\" type=\"submit\" ng-disabled=\"!createPost.$valid\">\n      <span class=\"fa fa-rocket\"> Publicar</span>\n    </button>\n  </form>\n  <p>The input\'s valid state is:</p>\n  <h1>{{createPost.$valid}}</h1>\n</section>");
$templateCache.put("views/post-detail.tpl.html","<artcile class=\"blog-post\">\n  <header class=\"blog-post-header\">\n    <h1>{{ postdetail.post.title }}</h1>\n  </header>\n  <p class=\"blog-post-body\">\n    {{ postdetail.post.body }}\n  </p>\n  <p>\n    Escrito por: <strong>{{ postdetail.user[0].name }}</strong>\n    <span class=\"fa fa-mail\"></span> {{ postdetail.user[0].email }}\n  </p>\n</article>\n\n<aside class=\"comments\">\n  <header class=\"comments-header\">\n    <h3>\n      <span class=\"fa fa-comments\"></span>\n      Commentarios\n    </h3>\n  </header>\n  <ul class=\"comments-list\">\n   	<li class=\"comment-item\" ng-repeat=\"comment in postdetail.comments\">\n 			<span class=\"fa fa-user\"></span>\n			<span class=\"comment-author\">{{ comment.email }}</span>\n			<p class=\"comment-body\">{{ comment.body }}</p> \n		</li>\n	</ul>\n</aside>");
$templateCache.put("views/post-list.tpl.html","<ul class=\"blog-post-list\">\n	<li class=\"blog-post-link\" ng-repeat=\"post in postlist.posts\">\n		<a ng-href=\"/post/{{ post.id }}\">{{ post.title }}</a>\n	</li>\n</ul>");}]);