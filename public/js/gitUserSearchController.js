githubUserSearch.controller('GitUserSearchController', [ 'Search', 'OmdbSearch', function(Search, OmdbSearch) {
  var self = this;

  self.doSearch = function() {
    if(!self.searchTerm) {
      return;
    }
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      });
    OmdbSearch.query(self.searchTerm)
      .then(function(response) {
        return OmdbSearch.full(response.data.Search[0].Title);
      })
      .then(function(response) {
        self.omdbResult = response.data;
      });
  };

}]);