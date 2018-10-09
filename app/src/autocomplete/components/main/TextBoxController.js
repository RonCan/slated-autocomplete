class TextBoxController {
  /**
   * Constructor
   *
   * @param movieAPIService
   * @param $log
   */
  constructor($log, movieAPIService) {
    this.$log = $log;
    this.movieAPIService = movieAPIService;
  }

  querySearch(query) {
    return this.movieAPIService.autoComplete(query);
  }

  searchTextChange(text) {
    this.$log.info("Text changed to " + text);
  }

  selectedItemChange(item) {
    this.$log.info("Item changed to " + JSON.stringify(item));
  }
}
export default TextBoxController;
