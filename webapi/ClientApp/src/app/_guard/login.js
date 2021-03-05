"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginGuard = void 0;
var LoginGuard = /** @class */ (function () {
    function LoginGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    return LoginGuard;
}());
exports.LoginGuard = LoginGuard;
//# sourceMappingURL=login.js.map