import $ from "jquery";
import ObjectAssignPolyfill from 'es6-object-assign';
ObjectAssignPolyfill.polyfill();
/*import objectFitImages from 'object-fit-images';
$(function () { objectFitImages() });
*/
// missing forEach on NodeList for IE11
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
