(function ($) {

    var repository = {
				repoList: ["TextAreaAppender","delphi-rest-client-api","fabriciocolombo.github.com","mongo-delphi-driver","db-benchmark"],
				addRepo:function () {},
				loadRepo: function(){
					var uri = "https://api.github.com/users/fabriciocolombo/repos?callback=?";

					$.getJSON(uri, function (result) {	
						result.data.sort(function(left, right){
							return left.watchers - right.watchers;
						}).reverse();
					
						$.each(result.data, function (i, repo) {
								repository.addRepo(repo);
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
