(function ($) {

    var repository = {
				repoList: ["TextAreaAppender","delphi-rest-client-api","fabriciocolombo.github.com","mongo-delphi-driver","db-benchmark"],
				addRepo:function () {},
				loadRepo: function(){
					var uri = "https://api.github.com/users/fabriciocolombo/repos?callback=?";

					$.getJSON(uri, function (result) {	
						result.data.sort(function(left, right){
							return Date.parse(left.pushed_at) - Date.parse(right.pushed_at);
						}).reverse();
					
						$.each(result.data, function (i, repo) {
						
							if (!repo.fork){
								repository.addRepo(repo);
							};
						});	
					});
				}
    };

    window.repository = repository;

    $.fn.repository = function(options) {
			if (typeof options === "object") {
					for (var ndx in repository) {
						if (options[ndx] !== undefined) {
								repository[ndx] = options[ndx];
						}
					}
			}
		}
		
})(jQuery);
