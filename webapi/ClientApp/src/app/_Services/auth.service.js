"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var http_1 = require("@angular/common/http");
var angular_jwt_1 = require("@auth0/angular-jwt");
var environment_1 = require("../../environments/environment");
var operators_1 = require("rxjs/operators");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.apiUrl;
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        var helper = new angular_jwt_1.JwtHelperService();
        return this.http.post(this.baseUrl + 'auth/login', model, {
            headers: new http_1.HttpHeaders()
                .set('Content-Type', 'application/json')
        })
            .pipe(operators_1.map(function (user) {
            if (user) {
                _this.decodedToken = helper.decodeToken(user.tokenString);
                localStorage.setItem('token', user.tokenString);
            }
        }));
    };
    AuthService.prototype.register = function (model) {
        return this.http.post(this.baseUrl + 'auth/register', model);
    };
    AuthService.prototype.getAllUser = function () {
        return this.http.get(this.baseUrl + 'auth/all');
    };
    AuthService.prototype.loggedIn = function () {
        var helper = new angular_jwt_1.JwtHelperService();
        var token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        return true;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map