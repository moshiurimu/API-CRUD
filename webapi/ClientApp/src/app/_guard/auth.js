"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next) {
        console.log(next);
        var roles = next.firstChild.data['roles'];
        console.log(roles);
        //if (roles) {
        //  const match = this.authService.roleMatch(roles);
        //  if (match) {
        //    return true;
        //  } else {
        //    this.router.navigate(['']);
        //    //this.alertify.error("you're not authrozed to access this page!");
        //  }
        //}
        if (!this.authService.loggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.js.map