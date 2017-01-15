"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.get = function (url) {
        var _this = this;
        return this.http.get(url).map(this.extractData).catch(function (e) { return _this.handleError(e, url); });
    };
    HttpService.prototype.post = function (url, object) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var json = JSON.stringify(object);
        return this.http.post(url, json, options).catch(function (e) { return _this.handleError(e, url); });
    };
    HttpService.prototype.put = function (url, object) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var json = JSON.stringify(object);
        return this.http.put(url, json, options).catch(function (e) { return _this.handleError(e, url); });
    };
    HttpService.prototype.delete = function (url) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.delete(url, options).catch(function (e) { return _this.handleError(e, url); });
    };
    HttpService.prototype.extractData = function (res) {
        res = JSON.parse(res._body);
        return (res);
    };
    HttpService.prototype.handleError = function (error, url) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error({ error: error + '\r\n url:' + url });
        console.error({ errorMsg: errMsg });
        return Rx_1.Observable.throw(errMsg);
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map