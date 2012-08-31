(function ($) {

    var repository = {
				repoList: ["TextAreaAppender","delphi-rest-client-api","fabriciocolombo.github.com"],
				addRepo:function () {},
				loadRepo: function(){
					$.each(repository.repoList, function (i, repo) {
						var uri = "https://api.github.com/repos/fabriciocolombo/"+repo+"?callback=?";

						$.getJSON(uri, function (result) {							
								repository.addRepo(result.data);
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
