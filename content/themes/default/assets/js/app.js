$(document).ready(function () {
    // Placeholder for search form
    var search = document.getElementById('search-top');
    if (search.elements.length) {
        var input = search.elements.q;
        if (input != undefined) {
            var hint = input.getAttribute('data-hint');

            input.onfocus = function(e) {
                if (this.value == hint) {
                    this.value = '';
                }
            };

            input.onblur = function(e) {
                if (this.value == '') {
                    this.value = hint;
                }
            };
        }
    }

    var question = document.getElementById('question-promo');
    if (question.elements.length) {
        var textArea = question.elements.q;
        if (textArea != undefined) {
            var hintArea = textArea.getAttribute('data-hint');

            textArea.onfocus = function(e) {
                if (this.value == hintArea) {
                    this.value = '';
                }
            };

            textArea.onblur = function(e) {
                if (this.value == '') {
                    this.value = hintArea;
                }
            };
        }
    }
});
