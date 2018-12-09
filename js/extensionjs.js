Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};
const isEmptyObject = function(object) {
    if(typeof(object) == "object" && !Array.isArray(object)) {
        let count = 0;
        for(let key in object) {
            count++;
        }
        return (count === 0) ? true : false;
    }
    return undefined;
};