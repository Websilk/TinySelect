(function(){
    var doc = document;
    var classMatch = /^\.[\w-]*$/;
    
    function query(context, selector) {
        //gets a list of elements from a CSS selector
        context = context || doc;
        var elems = [];
        if (typeof (selector) == 'object') {
            //elements are already defined instead of using a selector /////////////////////////////////////
            elems = typeof selector.splice === 'function' ? selector : [selector];
        } else if (selector != null && selector != '') {
            //only use vanilla Javascript to select DOM elements based on a CSS selector (Chrome 1, IE 9, Safari 3.2, Firefox 3.5, Opera 10)
            var el = (
                classMatch.test(selector) ?
                    context.getElementsByClassName(selector.slice(1)) :
                    singlet.test(selector) ?
                        context.getElementsByTagName(selector) :
                        context.querySelectorAll(selector)
            );
            //convert node list into array
            for (var i = el.length; i--; elems.unshift(el[i])) { };
        }
        return elems;
    }

    window.query = query;
})();