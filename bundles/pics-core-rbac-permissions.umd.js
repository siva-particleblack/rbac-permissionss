(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/forms'), require('@angular/platform-browser'), require('primeng/api'), require('rxjs/operators'), require('@angular/router'), require('rxjs/add/operator/map'), require('@angular/common'), require('primeng/tree'), require('primeng/card'), require('@angular/material/radio'), require('primeng/dropdown'), require('primeng/checkbox'), require('primeng/inputtext'), require('primeng/tooltip'), require('@ng-bootstrap/ng-bootstrap'), require('primeng/accordion'), require('primeng/avatar'), require('primeng/badge'), require('primeng/button'), require('primeng/calendar'), require('primeng/confirmdialog'), require('primeng/confirmpopup'), require('primeng/contextmenu'), require('primeng/dialog'), require('primeng/editor'), require('primeng/fieldset'), require('primeng/fileupload'), require('primeng/inputmask'), require('primeng/inputswitch'), require('primeng/inputtextarea'), require('primeng/knob'), require('primeng/message'), require('primeng/multiselect'), require('primeng/orderlist'), require('primeng/password'), require('primeng/progressspinner'), require('primeng/radiobutton'), require('primeng/ripple'), require('primeng/sidebar'), require('primeng/speeddial'), require('primeng/steps'), require('primeng/table'), require('primeng/tabmenu'), require('primeng/tabview'), require('primeng/toast'), require('primeng/treeselect'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@pics-core/rbac-permissions', ['exports', '@angular/core', 'rxjs', '@angular/forms', '@angular/platform-browser', 'primeng/api', 'rxjs/operators', '@angular/router', 'rxjs/add/operator/map', '@angular/common', 'primeng/tree', 'primeng/card', '@angular/material/radio', 'primeng/dropdown', 'primeng/checkbox', 'primeng/inputtext', 'primeng/tooltip', '@ng-bootstrap/ng-bootstrap', 'primeng/accordion', 'primeng/avatar', 'primeng/badge', 'primeng/button', 'primeng/calendar', 'primeng/confirmdialog', 'primeng/confirmpopup', 'primeng/contextmenu', 'primeng/dialog', 'primeng/editor', 'primeng/fieldset', 'primeng/fileupload', 'primeng/inputmask', 'primeng/inputswitch', 'primeng/inputtextarea', 'primeng/knob', 'primeng/message', 'primeng/multiselect', 'primeng/orderlist', 'primeng/password', 'primeng/progressspinner', 'primeng/radiobutton', 'primeng/ripple', 'primeng/sidebar', 'primeng/speeddial', 'primeng/steps', 'primeng/table', 'primeng/tabmenu', 'primeng/tabview', 'primeng/toast', 'primeng/treeselect', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["pics-core"] = global["pics-core"] || {}, global["pics-core"]["rbac-permissions"] = {}), global.ng.core, global.rxjs, global.ng.forms, global.ng.platformBrowser, global.i4, global.rxjs.operators, global.ng.router, global.rxjs["add/operator/map"], global.ng.common, global.i8, global.i9, global.ng.material.radio, global.i11, global.i12, global.i13, global.i16, global.ngBootstrap, global.accordion, global.avatar, global.badge, global.button, global.calendar, global.confirmdialog, global.confirmpopup, global.contextmenu, global.dialog, global.editor, global.fieldset, global.fileupload, global.inputmask, global.inputswitch, global.inputtextarea, global.knob, global.message, global.multiselect, global.orderlist, global.password, global.progressspinner, global.radiobutton, global.ripple, global.sidebar, global.speeddial, global.steps, global.table, global.tabmenu, global.tabview, global.toast, global.treeselect, global.ng.common.http));
})(this, (function (exports, i0, rxjs, i2, platformBrowser, i4, operators, i1, map, i14, i8, i9, i10, i11, i12, i13, i16, ngBootstrap, accordion, avatar, badge, button, calendar, confirmdialog, confirmpopup, contextmenu, dialog, editor, fieldset, fileupload, inputmask, inputswitch, inputtextarea, knob, message, multiselect, orderlist, password, progressspinner, radiobutton, ripple, sidebar, speeddial, steps, table, tabmenu, tabview, toast, treeselect, i1$1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i14__namespace = /*#__PURE__*/_interopNamespace(i14);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);
    var i11__namespace = /*#__PURE__*/_interopNamespace(i11);
    var i12__namespace = /*#__PURE__*/_interopNamespace(i12);
    var i13__namespace = /*#__PURE__*/_interopNamespace(i13);
    var i16__namespace = /*#__PURE__*/_interopNamespace(i16);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);

    var RbacPermissionsService = /** @class */ (function () {
        function RbacPermissionsService() {
        }
        return RbacPermissionsService;
    }());
    RbacPermissionsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPermissionsService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RbacPermissionsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPermissionsService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPermissionsService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var RoleConfig = /** @class */ (function () {
        function RoleConfig() {
        }
        return RoleConfig;
    }());
    RoleConfig.EndPoint = {
        role: {
            getAllUserRole: '/access-control/role',
            createRole: '/access-control/role/create',
            getLandingPage: '/platform/menu/application',
            addPolicyGroup: '/access-control/role',
            getAllOrgRole: '/access-control/role/organization/{orgid}',
            dossier: '/dossier'
        }
    };
    var UserConfig = /** @class */ (function () {
        function UserConfig() {
        }
        return UserConfig;
    }());
    UserConfig.EndPoint = {
        User: {
            getAllUserList: '/org/user',
            getAllUserActiveInactive: '/org/user?includeInactiveUsers=true',
            activateUser: '/org/user/activate',
            createUser: '/org/user/create',
            userRole: '/org/user/role',
            managementgroup: '/org/team/managementgroup',
            getAllUserOrgList: '/org/user/organization/'
        },
        Provider: {
            getProviderList: '/ref/provider',
            searchProviderList: '/ref/provider/search',
            addProviderUser: '/ref/provider/create/account'
        }
    };
    var AttachmentConfig = /** @class */ (function () {
        function AttachmentConfig() {
        }
        return AttachmentConfig;
    }());
    AttachmentConfig.EndPoint = {
        Attachments: {
            GetAttachmentReferral: '/ref/attachment/referral',
            GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
            UploadKey: '/common/files/upload-key',
            DownloadKey: '/common/files/download-key',
            PostAttachment: '/ref/attachment/create',
            PutAttachment: '/ref/attachment'
        }
    };
    var PolicyGroupConfig = /** @class */ (function () {
        function PolicyGroupConfig() {
        }
        return PolicyGroupConfig;
    }());
    PolicyGroupConfig.EndPoint = {
        policyGroup: {
            getPolicyGroupList: '/platform/page-designer/policyGroup',
            getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
            createPolicyGroup: '/platform/page-designer/policyGroup',
            getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
        }
    };
    var PermissionsURL = /** @class */ (function () {
        function PermissionsURL() {
        }
        return PermissionsURL;
    }());
    PermissionsURL.EndPoints = {
        permission: {
            permissionRoleById: '/access-control/permission/role/{id}',
            pagePermission: '/access-control/permission/page',
            getPermission: '/access-control/permission/{id}',
            createPermission: '/access-control/permission/create',
            updateDeletePermission: '/access-control/permission/{permissionid}',
            getPermissionTree: '/access-control/permission/page/{pageid}/{parentid}',
            getPermissionTypes: '/access-control/permission/type/{applicationid}',
            applicationPermissionsTree: '/access-control/permission/application/{applicationid}'
        },
        page: {
            createPage: '/platform/menu/create',
            updateDeletePage: '/platform/menu/{pageid}',
            AllPageTree: '/platform/menu/tree/{applicationid}'
        }
    };
    var AccessManagementConfig$1 = /** @class */ (function () {
        function AccessManagementConfig() {
        }
        return AccessManagementConfig;
    }());
    AccessManagementConfig$1.EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true',
            getPlatformPage: '/platform/menu/getPlatformPage'
        }
    };
    var RBACINFO = /** @class */ (function () {
        function RBACINFO() {
            this.apiHost = '';
            this.tokenKey = '';
        }
        return RBACINFO;
    }());
    var Environment = /** @class */ (function () {
        function Environment() {
        }
        return Environment;
    }());

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function")
            throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn)
                context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access)
                context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done)
                throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0)
                    continue;
                if (result === null || typeof result !== "object")
                    throw new TypeError("Object expected");
                if (_ = accept(result.get))
                    descriptor.get = _;
                if (_ = accept(result.set))
                    descriptor.set = _;
                if (_ = accept(result.init))
                    initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field")
                    initializers.unshift(_);
                else
                    descriptor[key] = _;
            }
        }
        if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    }
    ;
    function __runInitializers(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    }
    ;
    function __propKey(x) {
        return typeof x === "symbol" ? x : "".concat(x);
    }
    ;
    function __setFunctionName(f, name, prefix) {
        if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    }
    ;
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }
    function __addDisposableResource(env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function")
                throw new TypeError("Object expected.");
            var dispose;
            if (async) {
                if (!Symbol.asyncDispose)
                    throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose)
                    throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
            }
            if (typeof dispose !== "function")
                throw new TypeError("Object not disposable.");
            env.stack.push({ value: value, dispose: dispose, async: async });
        }
        else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    }
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    function __disposeResources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async)
                        return Promise.resolve(result).then(next, function (e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError)
                throw env.error;
        }
        return next();
    }
    var tslib_es6 = {
        __extends: __extends,
        __assign: __assign,
        __rest: __rest,
        __decorate: __decorate,
        __param: __param,
        __metadata: __metadata,
        __awaiter: __awaiter,
        __generator: __generator,
        __createBinding: __createBinding,
        __exportStar: __exportStar,
        __values: __values,
        __read: __read,
        __spread: __spread,
        __spreadArrays: __spreadArrays,
        __spreadArray: __spreadArray,
        __await: __await,
        __asyncGenerator: __asyncGenerator,
        __asyncDelegator: __asyncDelegator,
        __asyncValues: __asyncValues,
        __makeTemplateObject: __makeTemplateObject,
        __importStar: __importStar,
        __importDefault: __importDefault,
        __classPrivateFieldGet: __classPrivateFieldGet,
        __classPrivateFieldSet: __classPrivateFieldSet,
        __classPrivateFieldIn: __classPrivateFieldIn,
        __addDisposableResource: __addDisposableResource,
        __disposeResources: __disposeResources,
    };

    var Store = /** @class */ (function () {
        function Store(initialState) {
            this._state$ = new rxjs.BehaviorSubject(initialState);
            this.state$ = this._state$.asObservable();
        }
        Object.defineProperty(Store.prototype, "state", {
            get: function () {
                return this._state$.getValue();
            },
            enumerable: false,
            configurable: true
        });
        Store.prototype.setState = function (nextState) {
            this._state$.next(nextState);
        };
        return Store;
    }());

    var PermissionStore = /** @class */ (function (_super) {
        __extends(PermissionStore, _super);
        function PermissionStore() {
            return _super.call(this, {}) || this;
        }
        PermissionStore.prototype.setStore = function (data) {
            if (data) {
                this.setState(Object.assign(Object.assign({}, this.state), data));
            }
        };
        PermissionStore.prototype.getStore = function (type) {
            if (type === void 0) { type = 'P'; }
            if (type === 'P')
                return rxjs.of(this.state);
            else
                return rxjs.of(this.state);
        };
        PermissionStore.prototype.flat = function (array) {
            var _this = this;
            var result = [];
            if (array) {
                array.forEach(function (item) {
                    result.push(item);
                    if (item && Array.isArray(item)) {
                        result = result.concat(_this.flat(item));
                    }
                });
            }
            return result;
        };
        return PermissionStore;
    }(Store));
    PermissionStore.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PermissionStore.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var DataStoreService = /** @class */ (function () {
        function DataStoreService() {
            this.currentStoreSubject = new rxjs.BehaviorSubject({});
            this.currentStore = this.currentStoreSubject.asObservable();
            // test code
        }
        DataStoreService.prototype.setData = function (key, value) {
            var currentStore = this.getCurrentStore();
            currentStore[key] = value;
            this.currentStoreSubject.next(currentStore);
        };
        DataStoreService.prototype.setObject = function (value) {
            this.currentStoreSubject.next(value);
        };
        DataStoreService.prototype.getData = function (key) {
            var currentStore = this.getCurrentStore();
            return currentStore[key];
        };
        DataStoreService.prototype.clearStore = function () {
            var currentStore = this.getCurrentStore();
            Object.keys(currentStore).forEach(function (key) {
                delete currentStore[key];
            });
            this.currentStoreSubject.next(currentStore);
        };
        DataStoreService.prototype.getCurrentStore = function () {
            return this.currentStoreSubject.value;
        };
        return DataStoreService;
    }());
    DataStoreService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DataStoreService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var AppConstants = /** @class */ (function () {
        function AppConstants() {
        }
        return AppConstants;
    }());
    AppConstants.errorMessage = 'Something went wrong!';
    AppConstants.regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
    AppConstants.iconList = [
        { label: 'Apps', value: 'apps' },
        { label: 'Admin Settings', value: 'admin_panel_settings' },
        { label: 'Description', value: 'description' },
        { label: 'Analytics', value: 'analytics' },
        { label: 'Settings', value: 'settings' },
        { label: 'Library', value: 'library_books' },
        { label: 'Long Receipt', value: 'receipt_long' },
        { label: 'List', value: 'list' },
        { label: 'Layers', value: 'layers' },
        { label: 'Summarize', value: 'summarize' },
        { label: 'Featured List', value: 'featured_play_list' },
        { label: 'Contract', value: 'contract' },
        { label: 'List Add', value: 'list_alt_add' },
        { label: 'Inactive Order', value: 'inactive_order' },
        { label: 'Receipt', value: 'receipt' },
        { label: 'Dataset', value: 'dataset' },
        { label: 'Density', value: 'density_medium' },
        { label: 'Data Thresholding', value: 'data_thresholding' },
        { label: 'View Comfy', value: 'view_comfy_alt' },
        { label: 'View Compact', value: 'view_compact_alt' },
        { label: 'Rebase', value: 'rebase' },
        { label: 'Data Check', value: 'data_check' },
        { label: 'Check', value: 'check' },
        { label: 'Right Panel Close', value: 'right_panel_close' },
        { label: 'Toolbar', value: 'toolbar' },
        { label: 'User List', value: 'patient_list' },
        { label: 'Tabs', value: 'tabs' },
        { label: 'Single Tab', value: 'tab' },
        { label: 'Shelf Position', value: 'shelf_position' },
        { label: 'Call', value: 'call' },
        { label: 'Bookmark', value: 'bookmark' },
        { label: 'Map', value: 'map' },
        { label: 'Book', value: 'book' },
        { label: 'Box', value: 'box' },
        { label: 'Lock', value: 'lock' },
        { label: 'Star', value: 'star' },
        { label: 'Menu', value: 'menu' },
        { label: 'School', value: 'school' },
        { label: 'Calendar', value: 'calendar_month' },
        { label: 'Circle', value: 'circle' },
        { label: 'Home', value: 'home' },
        { label: 'Bulleted List', value: 'format_list_bulleted' },
        { label: 'Database', value: 'database' },
        { label: 'View Timeline', value: 'view_timeline' },
        { label: 'Settings Account Box', value: 'settings_account_box' },
        { label: 'Iframe', value: 'iframe' },
        { label: 'Bottom Panel Close', value: 'bottom_panel_close' },
        { label: 'Bubbles', value: 'bubbles' },
        { label: 'Task', value: 'task' },
        { label: 'Quiz', value: 'quiz' },
        { label: 'Contact Mail', value: 'contact_mail' },
        { label: 'File Copy', value: 'file_copy' },
        { label: 'Post Add', value: 'post_add' },
        { label: 'Import Contacts', value: 'import_contacts' },
        { label: 'Pending Actions', value: 'pending_actions' },
        { label: 'History Edu', value: 'history_edu' },
        { label: 'Space Dashboard', value: 'space_dashboard' },
        { label: 'Dashboard', value: 'dashboard' },
        { label: 'Table Chart', value: 'table_chart' },
        { label: 'Edit Document', value: 'edit_document' },
    ];

    var RbacService = /** @class */ (function () {
        function RbacService(_storeservice) {
            var _this = this;
            this._storeservice = _storeservice;
            this._storeservice.currentStore.subscribe(function (res) {
                if (res) {
                    _this.httpService = res['HTTPSERVICE'];
                }
            });
        }
        // constructor(private httpService: HttpService) {}
        RbacService.prototype.getAllUserList = function (key) {
            return this.httpService.get(UserConfig.EndPoint.User.getAllUserList + "/" + key);
        };
        RbacService.prototype.getAllUserOrgList = function (orgid) {
            return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
        };
        RbacService.prototype.saveUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.createUser, data);
        };
        RbacService.prototype.updateUser = function (data, userid) {
            return this.httpService.put(UserConfig.EndPoint.User.getAllUserList + "/" + userid, data);
        };
        RbacService.prototype.deleteUser = function (id) {
            return this.httpService.delete(UserConfig.EndPoint.User.getAllUserList + "/" + id);
        };
        RbacService.prototype.activateUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.activateUser, data);
        };
        RbacService.prototype.addProviderUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.Provider.addProviderUser, data);
        };
        RbacService.prototype.addUserRole = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.userRole, data);
        };
        RbacService.prototype.uploadKey = function (objparams) {
            return this.httpService.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
        };
        RbacService.prototype.getOrgPolicyGroupList = function (orgid) {
            return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getOrgPolicyGroups.replace('{organizationid}', String(orgid)));
        };
        RbacService.prototype.getAllPolicyGroupList = function (policyGroupId) {
            var endPoint = policyGroupId
                ? PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + "/" + policyGroupId
                : PolicyGroupConfig.EndPoint.policyGroup.getAllPolicyGroupList;
            return this.httpService.get(endPoint);
        };
        RbacService.prototype.getPolicyGroupById = function (id) {
            return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + '/' + id);
        };
        RbacService.prototype.getPolicyGroupsByManagementGroup = function (policyGroupId) {
            return this.httpService.get("/org/policyGroup/managementgroup/" + policyGroupId);
        };
        RbacService.prototype.createPolicyGroup = function (data) {
            return this.httpService.post(PolicyGroupConfig.EndPoint.policyGroup.createPolicyGroup, data);
        };
        RbacService.prototype.updatePolicyGroup = function (id, item) {
            return this.httpService.put(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + "/" + id, item);
        };
        RbacService.prototype.deletePolicyGroup = function (id) {
            return this.httpService.delete(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + "/" + id);
        };
        RbacService.prototype.getAllUserRole = function (id) {
            return this.httpService.get(RoleConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
        };
        RbacService.prototype.deleteRole = function (id) {
            return this.httpService.delete(RoleConfig.EndPoint.role.getAllUserRole + "/" + id);
        };
        RbacService.prototype.getRoleById = function (roleid) {
            return this.httpService.get(RoleConfig.EndPoint.role.getAllUserRole + "/" + roleid);
        };
        RbacService.prototype.createRole = function (data) {
            return this.httpService.post(RoleConfig.EndPoint.role.createRole, data);
        };
        RbacService.prototype.updateRole = function (roleId, data) {
            return this.httpService.put(RoleConfig.EndPoint.role.getAllUserRole + "/" + roleId, data);
        };
        RbacService.prototype.getLandingPage = function (id) {
            return this.httpService.get(RoleConfig.EndPoint.role.getLandingPage + "/" + id);
        };
        RbacService.prototype.createPolicyGroupForRole = function (roleId, data) {
            return this.httpService.post(RoleConfig.EndPoint.role.addPolicyGroup + "/" + roleId + "/policygroups", data);
        };
        RbacService.prototype.updatePolicyGroupForRole = function (roleId, data) {
            return this.httpService.put(RoleConfig.EndPoint.role.addPolicyGroup + "/" + roleId + "/policygroups", data);
        };
        RbacService.prototype.getReportDashbaord = function () {
            return this.httpService.get("" + RoleConfig.EndPoint.role.dossier);
        };
        RbacService.prototype.getPermissionRoleById = function (id) {
            return this.httpService.get(PermissionsURL.EndPoints.permission.permissionRoleById.replace('{id}', id));
        };
        RbacService.prototype.getManagementGroupTree = function (_organizationid) {
            return this.httpService.get('/org/management-group/organization/tree');
        };
        RbacService.prototype.getPermissionsTree = function (applicationid) {
            return this.httpService.get(PermissionsURL.EndPoints.permission.applicationPermissionsTree.replace('{applicationid}', applicationid));
        };
        RbacService.prototype.getPagePermission = function (data) {
            return this.httpService.post(PermissionsURL.EndPoints.permission.pagePermission, data);
        };
        RbacService.prototype.createPage = function (page) {
            return this.httpService.post(PermissionsURL.EndPoints.page.createPage, page);
        };
        RbacService.prototype.updatePage = function (page) {
            return this.httpService.put(PermissionsURL.EndPoints.page.updateDeletePage.replace('{pageid}', page.id), page);
        };
        RbacService.prototype.deletePage = function (pageId) {
            return this.httpService.delete(PermissionsURL.EndPoints.page.updateDeletePage.replace('{pageid}', pageId));
        };
        RbacService.prototype.getPermission = function (id) {
            return this.httpService.get(PermissionsURL.EndPoints.permission.getPermission.replace('{id}', id));
        };
        RbacService.prototype.createPermission = function (permission) {
            return this.httpService.post(PermissionsURL.EndPoints.permission.createPermission, permission);
        };
        RbacService.prototype.updatePermission = function (permission) {
            return this.httpService.put(PermissionsURL.EndPoints.permission.updateDeletePermission.replace('{permissionid}', permission.id), permission);
        };
        RbacService.prototype.deletePermission = function (permissionId) {
            return this.httpService.delete(PermissionsURL.EndPoints.permission.updateDeletePermission.replace('{permissionid}', permissionId));
        };
        RbacService.prototype.getAllPageTree = function (applicationid) {
            return this.httpService
                .get(PermissionsURL.EndPoints.page.AllPageTree.replace('{applicationid}', applicationid))
                .pipe(operators.map(function (item) {
                return item.data;
            }));
        };
        RbacService.prototype.getPermissionTree = function (pageid, parentid) {
            return this.httpService.get(PermissionsURL.EndPoints.permission.getPermissionTree.replace('{pageid}', pageid).replace('{parentid}', parentid));
        };
        RbacService.prototype.getPermissionTypes = function (applicationid) {
            return this.httpService.get(PermissionsURL.EndPoints.permission.getPermissionTypes.replace('{applicationid}', applicationid));
        };
        RbacService.prototype.getOrganizationPage = function (orgId) {
            return this.httpService.get(AccessManagementConfig$1.EndPoint.Organization.getOrganization.replace('{orgId}', orgId));
        };
        RbacService.prototype.getPlatformPage = function () {
            return this.httpService.get(AccessManagementConfig$1.EndPoint.Organization.getPlatformPage);
        };
        return RbacService;
    }());
    RbacService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacService, deps: [{ token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RbacService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

    var AlertService = /** @class */ (function () {
        function AlertService(router) {
            var _this = this;
            this.router = router;
            this.subject = new rxjs.Subject();
            this.keepAfterRouteChange = false;
            // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
            router.events.subscribe(function (event) {
                if (event instanceof i1.NavigationStart) {
                    if (_this.keepAfterRouteChange) {
                        // only keep for a single route change
                        _this.keepAfterRouteChange = false;
                    }
                    else {
                        // clear alert messages
                        _this.clear();
                    }
                }
            });
        }
        AlertService.prototype.getAlert = function () {
            return this.subject.asObservable();
        };
        AlertService.prototype.success = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Success, message, keepAfterRouteChange);
        };
        AlertService.prototype.error = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Error, message, keepAfterRouteChange);
        };
        AlertService.prototype.info = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Info, message, keepAfterRouteChange);
        };
        AlertService.prototype.warn = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Warning, message, keepAfterRouteChange);
        };
        AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.keepAfterRouteChange = keepAfterRouteChange;
            this.subject.next({ type: type, message: message });
        };
        AlertService.prototype.clear = function () {
            // clear alerts
            this.subject.next({});
        };
        return AlertService;
    }());
    AlertService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, deps: [{ token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AlertService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace.Router }]; } });
    var AlertType;
    (function (AlertType) {
        AlertType[AlertType["Success"] = 0] = "Success";
        AlertType[AlertType["Error"] = 1] = "Error";
        AlertType[AlertType["Info"] = 2] = "Info";
        AlertType[AlertType["Warning"] = 3] = "Warning";
    })(AlertType || (AlertType = {}));
    var Alert = /** @class */ (function () {
        function Alert() {
        }
        return Alert;
    }());
    var UserGroupDto = /** @class */ (function () {
        function UserGroupDto(data) {
            Object.assign(this, data);
        }
        return UserGroupDto;
    }());
    var UserRolePageDto = /** @class */ (function () {
        function UserRolePageDto(data) {
            Object.assign(this, data);
        }
        return UserRolePageDto;
    }());
    var UserRoleDto = /** @class */ (function () {
        function UserRoleDto(data) {
            Object.assign(this, data);
        }
        return UserRoleDto;
    }());
    var UserDto = /** @class */ (function () {
        function UserDto(data) {
            Object.assign(this, data);
        }
        return UserDto;
    }());
    var AccessManagementConfig = /** @class */ (function () {
        function AccessManagementConfig() {
        }
        return AccessManagementConfig;
    }());
    AccessManagementConfig.EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };

    var ShareDataService = /** @class */ (function () {
        function ShareDataService() {
            this.data = new rxjs.BehaviorSubject('');
        }
        return ShareDataService;
    }());
    ShareDataService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShareDataService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ShareDataService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShareDataService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShareDataService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () { return []; } });

    var DISPLAY_IN_SECONDS = 8;
    var AlertComponent = /** @class */ (function () {
        function AlertComponent(alertService) {
            this.alertService = alertService;
            this.alerts = [];
        }
        AlertComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.alertService.getAlert().subscribe(function (alert) {
                if (!alert) {
                    // clear alerts when an empty alert is received
                    _this.alerts = [];
                    return;
                }
                // add alert to array
                _this.alerts.push(alert);
                // remove alert after 5 seconds
                setTimeout(function () { return _this.removeAlert(alert); }, DISPLAY_IN_SECONDS * 1000);
            });
        };
        AlertComponent.prototype.removeAlert = function (alert) {
            this.alerts = this.alerts.filter(function (x) { return x !== alert; });
        };
        AlertComponent.prototype.cssClass = function (alert) {
            if (!alert) {
                return;
            }
            // return css class based on alert type
            switch (alert.type) {
                case AlertType.Success:
                    return 'alert alert-success';
                case AlertType.Error:
                    return 'alert alert-danger';
                case AlertType.Info:
                    return 'alert alert-info';
                case AlertType.Warning:
                    return 'alert alert-warning';
            }
        };
        return AlertComponent;
    }());
    AlertComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, deps: [{ token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    AlertComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0__namespace, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i14__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, decorators: [{
                type: i0.Component,
                args: [{
                        // moduleId: module.id,
                        selector: 'app-alert',
                        templateUrl: 'alert.component.html',
                        styleUrls: ['./alert.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: AlertService }]; } });

    var PermissionDirective = /** @class */ (function () {
        function PermissionDirective(renderer, elementRef, dataStore) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.dataStore = dataStore;
        }
        PermissionDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            var permissions = this.dataStore.state;
            if (permissions) {
                if (!permissions[this.fieldKey]) {
                    var template = this.elementRef.nativeElement;
                    if (template.tagName === 'A') {
                        if (template) {
                            var r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                            r.innerHTML = template.innerHTML;
                            r.href = 'javascript:void(0);';
                            r['disabled'] = true;
                            r.className = template.className;
                            this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                        }
                    }
                    else if (template.tagName === 'P-MULTISELECT' ||
                        template.tagName === 'P-DROPDOWN' ||
                        template.tagName === 'P-CHECKBOX' ||
                        template.tagName === 'P-TREESELECT' ||
                        template.tagName === 'P-RADIOBUTTON' ||
                        template.tagName === 'P-CALENDAR') {
                        if (template) {
                            var r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                            r.innerHTML = template.innerHTML;
                            r.className = template.className;
                            r.className += ' p-disabled';
                            this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                        }
                    }
                    else {
                        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                        var childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                        childInputNodes.forEach(function (elem) {
                            _this.renderer.setAttribute(elem, 'disabled', 'true');
                        });
                    }
                }
            }
        };
        return PermissionDirective;
    }());
    PermissionDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionDirective, deps: [{ token: i0__namespace.Renderer2 }, { token: i0__namespace.ElementRef }, { token: PermissionStore }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    PermissionDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[fieldKey]'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Renderer2 }, { type: i0__namespace.ElementRef }, { type: PermissionStore }]; }, propDecorators: { fieldKey: [{
                    type: i0.Input
                }] } });

    var PermissionsComponent = /** @class */ (function () {
        function PermissionsComponent(injector, permissionService, formBuilder, alertService, confirmationService, 
        // private httpService: HttpService,
        _shareData, _storeservice) {
            this.permissionService = permissionService;
            this.formBuilder = formBuilder;
            this.alertService = alertService;
            this.confirmationService = confirmationService;
            this._shareData = _shareData;
            this._storeservice = _storeservice;
            this.menuItems = [];
            this.filteredPermissionList = [];
            this.selectedItem = {};
            this.RBACORG = new RBACINFO();
            this.position = 'top';
            this.duplicatepages = [];
            this.dublicateIconList = [];
            this.treeData = [];
            this.showDeleteBtn = false;
            this.hidePage = true;
            this.formSubmit = false;
            this.eventNode = '';
            this.selectedPageType = '';
            this.validationErrors = {};
            this.nodeType = 'page';
            this.saveMode = 'INSERT';
            this.sanitizer = injector.get(platformBrowser.DomSanitizer);
            this.initializePageForm();
            this.initializePermissionForm();
            var iconArray = AppConstants.iconList;
            this.iconList = iconArray.sort(function (a, b) { return a.label.localeCompare(b.label); });
            this.dublicateIconList = this.iconList;
        }
        PermissionsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgSubs = this._storeservice.currentStore.subscribe(function (res) {
                _this.inputValidationMethod = res['INPUTVALIDATIONMETHOD'];
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.RBACORG = res['RBACORG'];
                    console.log(_this.RBACORG, 'RBACORG Permisson');
                    _this.environment = _this.RBACORG['environment'];
                    _this.orgId = parseInt(_this.RBACORG['orgID']);
                    _this.httpService = res['HTTPSERVICE'];
                    if (_this.orgId) {
                        _this.setPagesList();
                        _this.setMenuType();
                        _this.setPlatformPageList();
                    }
                    if (_this.environment) {
                        _this.loadInitial();
                    }
                }
            });
            this.search = new i2.FormControl();
            this.search.valueChanges
                .pipe(operators.debounceTime(500), operators.distinctUntilChanged(), operators.map(function (value) { return value === null || value === void 0 ? void 0 : value.toLowerCase(); }))
                .subscribe(function (value) {
                var filtered = _this.pages.filter(function (a) { var _a; return (_a = a === null || a === void 0 ? void 0 : a.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(value); });
                var filteredIds = filtered.map(function (item) { return item.id; });
                var child = _this.pages.filter(function (item) { return filteredIds.includes(item.parentid); });
                _this.treeData = _this.buildTree(__spreadArray(__spreadArray([], __read(filtered)), __read(child)), null, true);
            });
        };
        PermissionsComponent.prototype.ngOnDestroy = function () {
            this.orgSubs.unsubscribe();
        };
        PermissionsComponent.prototype.loadInitial = function () {
            var _this = this;
            this.loadTree();
            this.loadContextMenu();
            this.permissionService.getPermissionsTree(this.environment.applicationid).subscribe(function (items) {
                _this.permissions = items.data;
            });
            this.permissionService.getPermissionTypes(this.environment.applicationid).subscribe(function (items) {
                _this.permissionTypes = items.data;
            });
        };
        PermissionsComponent.prototype.initializePageForm = function () {
            this.pageForm = this.formBuilder.group({
                id: [0],
                parentid: [null],
                applicationid: [this.environment ? this.environment['applicationid'] : ''],
                name: ['', i2.Validators.required],
                route: [null, i2.Validators.required],
                order: [0],
                ismenu: [true],
                thumbnail: [''],
                icon: [null, i2.Validators.required],
                pageTypeMenu: ['platform'],
            });
        };
        PermissionsComponent.prototype.initializePermissionForm = function () {
            this.permissionForm = this.formBuilder.group({
                id: [0],
                parentid: [null],
                pageid: [0],
                permissiontypeid: ['', i2.Validators.required],
                key: ['', i2.Validators.required],
                description: ['', i2.Validators.required],
                order: [0]
            });
        };
        PermissionsComponent.prototype.buildTree = function (pages, parentid, isSearch) {
            var _this = this;
            var tree = [];
            pages
                .filter(function (page) { return page.parentid === parentid; })
                .forEach(function (page) {
                var children = _this.buildTree(pages, page.id, isSearch);
                if (children.length > 0) {
                    page.children = children;
                }
                else {
                    page.children = [];
                }
                var filteredPage = page;
                if (isSearch && page.children.length) {
                    var uniqueArray = page.children.filter(function (obj, index, self) {
                        return index === self.findIndex(function (innerObj) { return innerObj.id === obj.id; });
                    });
                    filteredPage = Object.assign(Object.assign({}, filteredPage), { children: uniqueArray });
                }
                tree.push(filteredPage);
            });
            return tree;
        };
        PermissionsComponent.prototype.onInput = function (event, fieldtype, label, required) {
            var error = this.inputValidationMethod(event, fieldtype, label, required);
            if (error && typeof error === 'string') {
                this.validationErrors[label] = error;
            }
            else {
                delete this.validationErrors[label];
            }
        };
        PermissionsComponent.prototype.clearsearch = function () {
            this.search.setValue('');
        };
        PermissionsComponent.prototype.onNodeContextMenuSelect = function (_event) {
            console.log();
        };
        PermissionsComponent.prototype.nodeSelect = function (event, isFromNode) {
            var _a, _b, _c, _d, _e, _f, _g;
            this.validationErrors = {};
            this.formSubmit = false;
            this.eventNode = event.node ? event.node : '';
            this.selectedPageType = '';
            if (isFromNode && this.eventNode) {
                this.saveMode = 'UPDATE';
            }
            else if (!isFromNode && this.eventNode) {
                this.saveMode = 'UPDATE';
            }
            else {
                this.saveMode = 'INSERT';
            }
            this.pages = this.filteredParentPages;
            this.duplicatePlatformPagesList = this.platformPagesList;
            this.duplicateDynamicPagesList = this.pagesList;
            if (this.eventNode) {
                this.showDeleteBtn = true;
                this.showLinkPage = false;
                this.nodeType = event.node.type;
                this.pages = this.pages.filter(function (p) { return p['parentid'] !== event.node.id; });
                this.selectedPagePermission = this.permissions.filter(function (p) { return p.pageid === event.node.id; });
                if (event.node.type === 'permission') {
                    this.permissionForm.reset();
                    this.permissionForm.patchValue(event.node);
                }
                else {
                    this.pageForm.reset();
                    this.pageForm.patchValue(event.node);
                    this.pageForm.patchValue;
                    var iconVal = ((_b = (_a = event.node) === null || _a === void 0 ? void 0 : _a.additionalinfo) === null || _b === void 0 ? void 0 : _b.icon) ? (_d = (_c = event.node) === null || _c === void 0 ? void 0 : _c.additionalinfo) === null || _d === void 0 ? void 0 : _d.icon.toLowerCase().replace(/[A-Z]/g, function (char) { return char.toLowerCase(); }) : '';
                    this.getSelectedLabel(iconVal);
                    this.pageForm.patchValue({
                        icon: iconVal
                    });
                    this.pageForm.patchValue({
                        pageTypeMenu: 'platform'
                    });
                    this.eventNode["selectedpagemenutype"] = 'platform';
                    if (event.node.route.includes('/pages/dynamic-search/search')) {
                        this.showLinkPage = true;
                        this.pageForm.patchValue({
                            pageTypeMenu: 'dynamic'
                        });
                        this.pageForm.patchValue({
                            route: event.node.route.split('/')[4]
                        });
                        this.eventNode["selectedpagemenutype"] = 'dynamic';
                    }
                    this.imageInformation = ((_g = (_f = (_e = event.node.additionalinfo) === null || _e === void 0 ? void 0 : _e.thumbnail) === null || _f === void 0 ? void 0 : _f.fileName) === null || _g === void 0 ? void 0 : _g.split('/')[1]) || '';
                }
            }
        };
        PermissionsComponent.prototype.onNodeExpandClick = function (event, node) {
            if (node.menutype !== 'page') {
                // Handle the expansion logic here
                // For example, you might want to prevent expansion for certain conditions
                event.preventDefault();
            }
        };
        PermissionsComponent.prototype.nodeExpand = function (event) {
            // const pageId = event.node.type === 'permission' ? event.node.pageid : event.node.data;
            // const parentId = event.node.type === 'permission' ? event.node.data : 0;
            // if (event.node && event.node.data) {
            //   this.permissionService.getPermissionTree(pageId, parentId).subscribe((nodes: any) => {
            //     event.node.children = (<any>nodes).data;
            //   });
            // }
        };
        PermissionsComponent.prototype.searchIconList = function (event) {
            var value = event.target.value.toLowerCase();
            this.dublicateIconList = this.iconList.filter(function (a) { var _a; return (_a = a === null || a === void 0 ? void 0 : a.label) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(value); });
        };
        PermissionsComponent.prototype.resetIconList = function () {
            this.dublicateIconList = this.iconList;
        };
        PermissionsComponent.prototype.searchDynamicPageList = function (event) {
            var value = event.target.value.toLowerCase();
            this.duplicateDynamicPagesList = this.pagesList.filter(function (a) { var _a; return (_a = a === null || a === void 0 ? void 0 : a.value) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(value); });
        };
        PermissionsComponent.prototype.resetDynamicPageList = function () {
            this.duplicateDynamicPagesList = this.pagesList;
        };
        PermissionsComponent.prototype.resetParentPageList = function () {
            this.pages = this.filteredParentPages;
        };
        PermissionsComponent.prototype.searchPlatformPageList = function (event) {
            var value = event.target.value.toLowerCase();
            this.duplicatePlatformPagesList = this.platformPagesList.filter(function (a) { var _a; return (_a = a === null || a === void 0 ? void 0 : a.pagename) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(value); });
        };
        PermissionsComponent.prototype.resetPlatformPageList = function () {
            this.duplicatePlatformPagesList = this.platformPagesList;
        };
        PermissionsComponent.prototype.getSelectedLabel = function (val) {
            var _a;
            this.dublicateIconList = this.iconList;
            var filteredIcon = this.iconList.filter(function (i) { return i.value === val; });
            this.selectedIconLabel = (_a = filteredIcon[0]) === null || _a === void 0 ? void 0 : _a.label;
        };
        PermissionsComponent.prototype.savePage = function () {
            var _this = this;
            var page = this.pageForm.value;
            page.applicationid = this.environment.applicationid;
            page.additionalinfo = {
                icon: page.icon
            };
            this.formSubmit = true;
            if (this.showLinkPage) {
                page.route = "/pages/dynamic-search/search/" + page.route;
            }
            if (this.pageForm.valid) {
                page.order = page.order ? Number(page.order) : 1;
                if (this.saveMode === 'INSERT') {
                    this.permissionService.createPage(page).subscribe(function (res) {
                        // if (this.showLinkPage) {
                        page.id = res['data'];
                        _this.savePermission(page);
                        _this.eventNode = '';
                        // }
                        _this.alertService.success('Menu created successfully.');
                        _this.loadTree();
                    }, function (error) {
                        var _a;
                        if (error && ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message.includes('already exists'))) {
                            _this.alertService.error("Menu '" + (page === null || page === void 0 ? void 0 : page.name) + "' already exists.");
                        }
                        else {
                            _this.alertService.error(AppConstants.errorMessage);
                        }
                    });
                }
                else {
                    this.permissionService.updatePage(page).subscribe(function () {
                        var pageDet = Object.assign(Object.assign({}, page), { pagePermissionId: _this.selectedPagePermission[0].id });
                        _this.savePermission(pageDet);
                        _this.alertService.success('Menu updated successfully.');
                        _this.loadTree();
                        _this.resetMenu(true);
                    });
                }
                this.clearsearch();
            }
        };
        Object.defineProperty(PermissionsComponent.prototype, "formValidate", {
            get: function () {
                return this.pageForm.controls;
            },
            enumerable: false,
            configurable: true
        });
        PermissionsComponent.prototype.savePermission = function (page) {
            var _this = this;
            if (page) {
                this.permissionForm.patchValue({
                    id: (page === null || page === void 0 ? void 0 : page.pagePermissionId) ? page === null || page === void 0 ? void 0 : page.pagePermissionId : 0,
                    description: page.name,
                    key: page.name.toUpperCase().replaceAll(' ', '_'),
                    pageid: page.id,
                    order: 1,
                    permissiontypeid: 1
                });
            }
            var permission = Object.assign(Object.assign({}, this.permissionForm.value), { order: +this.permissionForm.value.order });
            // if (!permission.id) {
            //   permission = {
            //     ...permission,
            //     id: 0
            //   }
            // }
            if (this.permissionForm.valid) {
                permission.order = permission.order ? Number(permission.order) : 1;
                delete permission.readonly;
                if (this.saveMode === 'INSERT') {
                    this.permissionService.createPermission(permission).subscribe(function () {
                        // this.alertService.success('Permission created successfully.');
                        _this.loadTree();
                        _this.resetMenu(true);
                    });
                }
                else {
                    this.permissionService.updatePermission(permission).subscribe(function () {
                        // this.alertService.success('Permission updated successfully.');
                        _this.selectedPagePermission = '';
                        _this.loadTree();
                    });
                }
            }
            else {
                // this.alertService.error('Invalid permission data.');
            }
        };
        PermissionsComponent.prototype.clearForm = function () {
            if (this.nodeType === 'permission') {
                this.initializePermissionForm();
            }
            else {
                this.initializePageForm();
            }
        };
        PermissionsComponent.prototype.selectType = function (type, event) {
            console.log(event, "radio event");
            this.formSubmit = false;
            this.dublicateIconList = this.iconList;
            this.pages = this.filteredParentPages;
            this.duplicatePlatformPagesList = this.platformPagesList;
            this.duplicateDynamicPagesList = this.pagesList;
            this.validationErrors = {};
            if (type === 'platform') {
                this.showLinkPage = false;
                this.pageForm.patchValue({
                    pageTypeMenu: type
                });
                this.selectedPageType = type;
                this.saveMode = 'INSERT';
                this.nodeType = 'page';
                this.clearForm();
                this.loadTree();
            }
            else if (type === 'dynamic') {
                this.showLinkPage = true;
                this.pageForm.patchValue({
                    pageTypeMenu: type
                });
                this.selectedPageType = type;
                this.saveMode = 'INSERT';
                this.nodeType = 'page';
                this.clearForm();
                this.loadTree();
            }
            this.clearsearch();
            // if(this.eventNode.selectedpagemenutype == type){
            //   this.nodeSelect({ node: this.eventNode }, false);
            // }
        };
        PermissionsComponent.prototype.setPlatformPageList = function () {
            var _this = this;
            this.permissionService.getPlatformPage().subscribe(function (res) {
                var data = res['data'];
                if (data && (data === null || data === void 0 ? void 0 : data.length)) {
                    _this.platformPagesList = data.sort(function (a, b) { return a.pagename.localeCompare(b.pagename); });
                    _this.duplicatePlatformPagesList = _this.platformPagesList;
                }
            });
        };
        PermissionsComponent.prototype.setMenuType = function () {
            this.menutype = [
                { name: 'Parent', value: 'parent' },
                { name: 'Page', value: 'page' }
            ];
        };
        PermissionsComponent.prototype.resetMenu = function (isNewAdd) {
            this.validationErrors = {};
            this.showLinkPage = false;
            this.formSubmit = false;
            this.showDeleteBtn = false;
            this.saveMode = 'INSERT';
            this.nodeType = 'page';
            this.dublicateIconList = this.iconList;
            this.pages = this.filteredParentPages;
            this.duplicatePlatformPagesList = this.platformPagesList;
            this.duplicateDynamicPagesList = this.pagesList;
            this.imageInformation = '';
            this.pageForm.reset();
            this.permissionForm.reset();
            this.clearsearch();
            this.clearForm();
            if (this.selectedPageType) {
                this.pageForm.patchValue({
                    pageTypeMenu: this.selectedPageType
                });
                this.showLinkPage = this.selectedPageType == 'dynamic' ? true : false;
            }
            else {
                this.pageForm.patchValue({
                    pageTypeMenu: 'platform'
                });
            }
            if (isNewAdd) {
                this.eventNode = '';
            }
        };
        PermissionsComponent.prototype.resetForm = function () {
            this.validationErrors = {};
            this.formSubmit = false;
            if (this.saveMode == 'INSERT') {
                this.resetMenu(false);
            }
            else {
                this.nodeSelect({ node: this.eventNode }, false);
                this.clearsearch();
            }
        };
        PermissionsComponent.prototype.removeThumbnail = function () {
            this.pageForm.controls['thumbnail'].reset();
            this.imageInformation = '';
        };
        // delete(event: Event) {
        //   event.stopPropagation();
        //   // this.deletedId = this.selectedItem.id;
        // }
        PermissionsComponent.prototype.createPermissionForm = function () {
            this.initializePermissionForm();
            if (this.nodeType === 'page') {
                this.nodeType = 'permission';
                this.permissionForm.patchValue({
                    pageid: this.selectedItem.id
                });
            }
            else {
                this.permissionForm.patchValue({
                    pageid: this.selectedItem.pageid,
                    parentid: this.selectedItem.id
                });
            }
        };
        PermissionsComponent.prototype.loadContextMenu = function () {
            var _this = this;
            var permission = {
                SETTINGS_PER_CREATE_PAGE: true,
                SETTINGS_PER_CREATE_PERMISSION: true,
                SETTINGS_PER_DELETE: true
            };
            this.menuItems = [
                {
                    label: 'Create Page',
                    icon: i4.PrimeIcons.ARROW_UP_LEFT,
                    visible: permission.SETTINGS_PER_CREATE_PAGE,
                    badge: 'SETTINGS_PER_CREATE_PAGE',
                    command: function (_event) {
                        _this.saveMode = 'INSERT';
                        _this.nodeType = 'page';
                        _this.showLinkPage = false;
                        _this.clearForm();
                    }
                },
                {
                    label: 'Link Page',
                    icon: i4.PrimeIcons.ARROW_UP_LEFT,
                    visible: permission.SETTINGS_PER_CREATE_PAGE,
                    command: function (_event) {
                        _this.saveMode = 'INSERT';
                        _this.nodeType = 'page';
                        _this.showLinkPage = true;
                        _this.clearForm();
                    }
                },
                {
                    label: 'Create Permission',
                    icon: i4.PrimeIcons.ARROW_DOWN_RIGHT,
                    visible: permission.SETTINGS_PER_CREATE_PERMISSION,
                    badge: 'SETTINGS_PER_CREATE_PERMISSION',
                    command: function (_event) {
                        _this.saveMode = 'INSERT';
                        _this.nodeType = _this.selectedItem.type;
                        _this.clearForm();
                        _this.createPermissionForm();
                    }
                },
                {
                    label: 'Delete',
                    icon: i4.PrimeIcons.TRASH,
                    visible: permission.SETTINGS_PER_DELETE,
                    badge: 'SETTINGS_PER_DELETE',
                    command: function (event) {
                        _this.saveMode = 'DELETE';
                        _this.nodeType = _this.selectedItem.type;
                        // this.confirmationService.confirm({
                        //   target: event.target as EventTarget,
                        //   message: 'Are you sure that you want to delete?',
                        //   icon: 'pi pi-exclamation-triangle',
                        //   accept: () => {
                        //     //confirm action
                        $('#Deleteuser').modal('show');
                        // this.deleteItem();
                        //   },
                        //   reject: () => {
                        //     // This is intentional
                        //   },
                        // });
                    }
                }
            ];
        };
        PermissionsComponent.prototype.setPagesList = function () {
            var _this = this;
            this.permissionService.getOrganizationPage(this.orgId).subscribe(function (res) {
                var data = res['data'];
                if (data && (data === null || data === void 0 ? void 0 : data.length)) {
                    var filterPagesList = data === null || data === void 0 ? void 0 : data.filter(function (a) { var _a; return (_a = a.activeVersion) === null || _a === void 0 ? void 0 : _a.gridconfig; }).map(function (x) {
                        x.activeVersion.pageid = x.activeVersion.pageid.toString();
                        return {
                            id: x.activeVersion.pageid,
                            pagename: x.activeVersion.pagename,
                            value: x.activeVersion.pagename
                        };
                    });
                    _this.pagesList = filterPagesList.sort(function (a, b) { return a.pagename.localeCompare(b.pagename); });
                    _this.duplicateDynamicPagesList = _this.pagesList;
                }
            });
        };
        PermissionsComponent.prototype.loadTree = function () {
            var _this = this;
            this.permissionService.getAllPageTree(this.environment.applicationid).subscribe(function (items) {
                _this.pages = items.sort(function (a, b) { return a.name.localeCompare(b.name); });
                _this.filteredParentPages = _this.pages;
                _this.duplicatepages = items;
                if (_this.pages.length) {
                    //this.selectedItem = this.pages[0];
                }
                _this.treeData = _this.buildTree(_this.pages, null, false);
            });
        };
        PermissionsComponent.prototype.cancel = function () {
            this.permissionForm.reset();
        };
        // delete() {
        //   // event.stopPropagation();
        //   // this.deletedId = id;
        //   $('#Deleteuser').modal('show');
        // }
        PermissionsComponent.prototype.deleteItem = function () {
            var _this = this;
            this.saveMode = 'UPDATE';
            if (this.selectedItem.type === 'page') {
                // $('#Deleteuser').modal('show');
                this.permissionService.deletePage(this.selectedItem.id).subscribe(function (_item) {
                    var _a, _b, _c, _d;
                    _this.cancel();
                    if ((_b = (_a = _this.selectedItem) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.length) {
                        (_d = (_c = _this.selectedItem) === null || _c === void 0 ? void 0 : _c.children) === null || _d === void 0 ? void 0 : _d.map(function (c) {
                            _this.permissionService.deletePage(c.id).subscribe(function (_item) { return console.log(''); });
                        });
                    }
                    $('#Deleteuser').modal('hide');
                    _this.resetMenu(true);
                    _this.alertService.success('Menu deleted successfully.');
                    _this.loadTree();
                });
            }
            else {
                this.permissionService.deletePermission(this.selectedItem.id).subscribe(function (_item) {
                    // $('#Deleteuser').modal('show');
                    _this.cancel();
                    $('#Deleteuser').modal('hide');
                    _this.alertService.success('Control Permission deleted successfully.');
                    _this.loadTree();
                });
            }
        };
        PermissionsComponent.prototype.deletePermission = function () {
            this.saveMode = 'DELETE';
            this.nodeType = this.selectedItem.type;
            $('#Deleteuser').modal('show');
        };
        PermissionsComponent.prototype.requiredIfValidator = function (predicate) {
            return function (formControl) {
                if (!formControl.parent) {
                    return null;
                }
                if (predicate()) {
                    return i2.Validators.required(formControl);
                }
                return null;
            };
        };
        PermissionsComponent.prototype.handleFileInput = function (fileValue) {
            var _this = this;
            var target = fileValue.target;
            var file = target.files[0];
            this.uploadedFile = fileValue.target.files[0].name;
            this.imageData = {
                contentType: fileValue.target.files[0].type,
                fileName: "dynamic-menu/" + this.uploadedFile
            };
            this.imageInformation = this.uploadedFile;
            if (this.validateImage(fileValue.target.files)) {
                this.permissionService.uploadKey(this.imageData).subscribe(function (res) {
                    _this.urlPath = res.data;
                    var uploadAttachment = document.getElementById('file');
                    var uploadAttachmentDetails = uploadAttachment.files[0];
                    _this.httpService.putUpload(_this.urlPath, uploadAttachmentDetails, uploadAttachmentDetails.type).subscribe(function (_resp) {
                        _this.alertService.success('Uploaded Successfully!');
                        var reader = new FileReader();
                        reader.onload = function () {
                            var value = _this.sanitizer.bypassSecurityTrustUrl(reader.result);
                            _this.pageForm.patchValue({ thumbnail: value });
                        };
                        reader.readAsDataURL(file);
                        _this.attachType = fileValue.target.files[0].type;
                    }, function (error) {
                        if (error.status == 0) {
                            _this.alertService.error('AppConstants.errorMessage');
                            _this.uploadedFile = '';
                            _this.urlPath = '';
                        }
                    });
                }, function (_error) {
                    _this.alertService.error('AppConstants.errorMessage');
                });
            }
        };
        PermissionsComponent.prototype.validateImage = function (file) {
            var fileSize = Number(file[0].size) / 1024;
            var filetype = file[0].type.replace('image/', '');
            if (filetype === 'jpg' ||
                filetype === 'jpeg' ||
                filetype === 'png' ||
                filetype === 'gif' ||
                filetype === 'svg+xml') {
                if (fileSize < 50) {
                    return true;
                }
                else {
                    this.imageInformation = 'Image size exceeds 50 KB';
                    this.alertService.warn('File is bigger than 50 KB');
                    return false;
                }
            }
            else {
                this.imageInformation = '';
                this.alertService.warn(filetype + " format is not supported");
                return false;
            }
        };
        PermissionsComponent.prototype.searchPermissionList = function (event) {
            var value = event.target.value.toLowerCase();
            this.pages = this.duplicatepages.filter(function (a) { var _a; return (_a = a === null || a === void 0 ? void 0 : a.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(value); });
        };
        PermissionsComponent.prototype.onPageNameInput = function (event, name) {
            var input = event.target;
            var startPosition = input.selectionStart;
            var endPosition = input.selectionEnd;
            var pagenameControl = this.pageForm.get(name);
            if (pagenameControl.value) {
                var newValue = pagenameControl.value
                    .split(' ')
                    .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
                    .join(' ');
                pagenameControl.patchValue(newValue, { emitEvent: false });
                // Restore cursor position
                input.setSelectionRange(startPosition, endPosition);
            }
        };
        return PermissionsComponent;
    }());
    PermissionsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionsComponent, deps: [{ token: i0__namespace.Injector }, { token: RbacService }, { token: i2__namespace.FormBuilder }, { token: AlertService }, { token: i4__namespace.ConfirmationService }, { token: ShareDataService }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    PermissionsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PermissionsComponent, selector: "permissions", ngImport: i0__namespace, template: "<app-alert></app-alert>\r\n<div class=\"permission\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4 col-md-6 col-12\">\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"tab-content py-2\">\r\n        <div class=\"tab-pane fade show active\">\r\n          <div class=\"form-group bgiconsearch d-flex\">\r\n            <!-- <input class=\"form-control\" placeholder=\"Search by Menu Name\" type=\"text\" [formControl]=\"search\"\r\n              pInputText pClearButton/> -->\r\n            <span class=\"p-input-icon-right w-100\">\r\n              <i class=\"pi pi-times-circle\" (click)=\"clearsearch()\"></i>\r\n              <input class=\"form-control\" placeholder=\"Search by Menu Name\" type=\"text\" [formControl]=\"search\"\r\n                pInputText />\r\n            </span>\r\n            <button class=\"btn btn-primary btncommon ml-2\" (click)=\"resetMenu(true)\">Add</button>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"masteracess\">\r\n            <!-- <p-tree [value]=\"pages\" selectionMode=\"single\" [(selection)]=\"selectedItem\"\r\n              (onNodeSelect)=\"nodeSelect($event)\" (onNodeContextMenuSelect)=\"onNodeContextMenuSelect($event)\"\r\n              (onNodeExpand)=\"nodeExpand($event)\" [contextMenu]=\"treeContextMenu\"></p-tree>\r\n            <p-contextMenu #treeContextMenu [model]=\"menuItems\" appendTo=\"body\"></p-contextMenu> -->\r\n            <!-- <p-confirmPopup styleClass=\"delete-popup\"></p-confirmPopup> -->\r\n            <p-tree [value]=\"treeData\" selectionMode=\"single\" [(selection)]=\"selectedItem\"\r\n              (onNodeSelect)=\"nodeSelect($event, true)\" (onNodeContextMenuSelect)=\"onNodeContextMenuSelect($event)\"\r\n              (onNodeExpand)=\"nodeExpand($event)\">\r\n              <ng-template let-node pTemplate=\"default\">\r\n                <span *ngIf=\"node.menutype === 'parent'\">\r\n                  <span class=\"ui-tree-toggler ui-clickable\" *ngIf=\"node.children && node.children.length > 0\"\r\n                    (click)=\"onNodeExpandClick($event, node)\"></span>\r\n                </span>\r\n                {{node.name}}\r\n                <!-- <p-contextMenu [model]=\"menuItems\" appendTo=\"body\"></p-contextMenu> -->\r\n                <ng-container *ngIf=\"node.children && node.children.length > 0\">\r\n                  <ng-container *ngTemplateOutlet=\"recursiveTree; context:{ $implicit: node.children }\"></ng-container>\r\n                </ng-container>\r\n              </ng-template>\r\n              <ng-template #recursiveTree let-nodes>\r\n                <ul>\r\n                  <li *ngFor=\"let child of nodes\">\r\n                    <ng-container\r\n                      *ngTemplateOutlet=\"recursiveTree; context:{ $implicit: child.children }\"></ng-container>\r\n                  </li>\r\n                </ul>\r\n              </ng-template>\r\n              <!-- <p-contextMenu #treeContextMenu [model]=\"menuItems\" appendTo=\"body\"></p-contextMenu> -->\r\n            </p-tree>\r\n            <div class=\"modal\" id=\"Deleteuser\" tabindex=\"-1\" role=\"dialog\">\r\n              <div class=\"modal-dialog\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Delete Menu</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    Are you sure you want to delete the Menu?\r\n                    <div class=\"clearfix\"></div>\r\n                    <div class=\"mt-2\">\r\n                      <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\"\r\n                        (click)=\"deleteItem()\">\r\n                        Delete\r\n                      </button>\r\n                      <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\"\r\n                        data-dismiss=\"modal\">Cancel</button>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-8 col-md-6 col-12 master-right mt-2\">\r\n      <p-card *ngIf=\"nodeType === 'page'\" id=\"pageForm\" class=\"rbac-card\" [formGroup]=\"pageForm\"\r\n        [style]=\"{ width: '100%', 'margin-bottom': '2em' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">{{saveMode === 'UPDATE' ? 'Update Menu' : 'Add Menu'}}</span>\r\n        </div>\r\n        <div class=\"mb-3 mt-1\">\r\n          <mat-radio-group formControlName=\"pageTypeMenu\">\r\n            <mat-radio-button class=\"mr-2\" value=\"platform\"\r\n              (click)=\"selectType('platform', $event)\">Platform</mat-radio-button>\r\n            <mat-radio-button value=\"dynamic\" (click)=\"selectType('dynamic', $event)\">Dynamic</mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n        <input id=\"cid\" type=\"hidden\" formControlName=\"id\" />\r\n        <input id=\"capplicationid\" type=\"hidden\" formControlName=\"applicationid\" />\r\n        <div class=\"p-fluid p-formgrid p-grid\">\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n            <label for=\"cname\" class=\"referral-form-labels\">Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"cname\" type=\"text\" formControlName=\"name\" fieldKey=\"SETTINGS_PER_NAME\" placeholder=\"Enter Name\"\r\n              aria-describedby=\"cname\" (keyup)=\"onPageNameInput($event, 'name')\"\r\n              (input)=\"onInput($event, 'name', 'Name', true)\" pInputText />\r\n              <div *ngIf=\"validationErrors['Name']\" class=\"p-error block mt-1\">{{validationErrors['Name']}}</div>\r\n             <!-- pattern=\"[a-zA-Z0-9]*([a-zA-Z0-9]+\\s*)*\" <div *ngIf=\"\r\n              pageForm.controls['name'].invalid &&\r\n                pageForm.controls['name'].dirty &&\r\n              !pageForm.controls['name'].hasError('required')\">\r\n              <small *ngIf=\"pageForm.controls['name'].errors && pageForm.controls['name'].invalid\"\r\n                class=\"p-error block\">Invalid input data</small>\r\n            </div> -->\r\n            <div *ngIf=\"!validationErrors['Name'] && formValidate['name'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['name'].invalid\" class=\"p-error block mt-1\">Name is\r\n                required</div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\" *ngIf=\"!showLinkPage\">\r\n            <label for=\"croute\" class=\"referral-form-labels\">\r\n              Platform Pages\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <!-- <p-dropdown [options]=\"platformPagesList\" [filter]=\"true\" formControlName=\"route\"\r\n              fieldKey=\"SETTINGS_PER_ROUTE\" placeholder=\"Select Platform Page\" optionLabel=\"pagename\"\r\n              optionValue=\"pageurl\" [showClear]=\"true\">\r\n            </p-dropdown> -->\r\n            <p-dropdown [options]=\"duplicatePlatformPagesList\" placeholder=\"Select Platform Page\"\r\n            formControlName=\"route\" [resetFilterOnHide]=\"true\" [filter]=\"true\" [showClear]=\"true\" fieldKey=\"SETTINGS_PER_ROUTE\"\r\n            optionLabel=\"pagename\" optionValue=\"pageurl\" inputId=\"platformPage\"\r\n            (keyup)=\"searchPlatformPageList($event)\" (onHide)=\"resetPlatformPageList()\">\r\n            <ng-template let-item pTemplate=\"selectedItem\">\r\n              <div pTooltip=\"{{item?.pagename}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.pagename }}\r\n              </div>\r\n            </ng-template>\r\n            <ng-template let-object pTemplate=\"item\">\r\n              {{ object.pagename }}\r\n            </ng-template>\r\n            </p-dropdown>\r\n            <div *ngIf=\"formValidate['route'].errors && formSubmit && !showLinkPage\">\r\n              <div *ngIf=\"formValidate['route'].invalid\" class=\"p-error block mt-1\">Platform Page is required</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\" *ngIf=\"showLinkPage\">\r\n            <label for=\"croute\" class=\"referral-form-labels\">\r\n              Dynamic Pages\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <p-dropdown [options]=\"duplicateDynamicPagesList\" formControlName=\"route\" fieldKey=\"SETTINGS_PER_ROUTE\"\r\n              placeholder=\"Select Dynamic Page\" (keyup)=\"searchDynamicPageList($event)\" (onHide)=\"resetDynamicPageList()\" optionLabel=\"value\"\r\n              optionValue=\"id\" [filter]=\"true\" [resetFilterOnHide]=\"true\" [showClear]=\"true\">\r\n              <ng-template let-item pTemplate=\"selectedItem\">\r\n                <div pTooltip=\"{{item?.value}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.value }}\r\n                </div>\r\n              </ng-template>\r\n              <ng-template let-object pTemplate=\"item\">\r\n                {{ object.value }}\r\n              </ng-template>\r\n            </p-dropdown>\r\n            <div *ngIf=\"formValidate['route'].errors && formSubmit && showLinkPage\">\r\n              <div *ngIf=\"formValidate['route'].invalid\" class=\"p-error block mt-1\">Dynamic Page is required </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n            <label for=\"corder\" class=\"referral-form-labels\">Parent Page </label>\r\n            <p-dropdown [options]=\"pages\" placeholder=\"Select Parent Page\" formControlName=\"parentid\" optionLabel=\"name\"\r\n              optionValue=\"id\" (onHide)=\"resetParentPageList()\" [showClear]=\"true\" [resetFilterOnHide]=\"true\" [filter]=\"true\" (keyup)=\"searchPermissionList($event)\"\r\n              fieldKey=\"SETTINGS_PER_PARENT_PAGE\">\r\n              <ng-template let-item pTemplate=\"selectedItem\">\r\n                <div pTooltip=\"{{item?.name}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.name }}</div>\r\n              </ng-template>\r\n              <ng-template let-object pTemplate=\"item\">\r\n                {{ object.name }}\r\n              </ng-template>\r\n            </p-dropdown>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n            <label for=\"corder\" class=\"referral-form-labels d-none d-lg-inline-block\">&#160;</label>\r\n            <div>\r\n              <p-checkbox st inputId=\"binary\" [binary]=\"true\" fieldKey=\"SETTINGS_PER_MENU\" formControlName=\"ismenu\"\r\n                label=\"Menu\"></p-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid p-grid\">\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n            <label for=\"icon\" class=\"referral-form-labels\">\r\n              Icon\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <p-dropdown [options]=\"dublicateIconList\" styleClass=\"icon-dropdown\" formControlName=\"icon\" [filter]=\"true\"\r\n              optionLabel=\"label\" optionValue=\"value\" [resetFilterOnHide]=\"true\" [showClear]=\"iconList && iconList.length\"\r\n              placeholder=\"Select Icon\" (keyup)=\"searchIconList($event)\" (onHide)=\"resetIconList()\" (onChange)=\"getSelectedLabel($event.value)\">\r\n              <ng-template pTemplate=\"selectedItem\">\r\n                <div pTooltip=\"{{selectedIconLabel}}\" tooltipPosition=\"top\"\r\n                  class=\"d-flex flex-row align-items-center gap-2\" *ngIf=\"pageForm.controls['icon'].value\">\r\n                  <span class=\"material-symbols-outlined userempty ml-0\">\r\n                    {{ pageForm.controls['icon'].value }}\r\n                  </span>\r\n                  <div class=\"text-truncate\">\r\n                    {{ selectedIconLabel }}\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n              <ng-template let-icon pTemplate=\"item\">\r\n                <div class=\"d-flex flex-row align-items-start gap-2\">\r\n                  <span class=\"material-symbols-outlined userempty ml-0\">\r\n                    {{ icon.value }}\r\n                  </span>\r\n                  <div>{{ icon.label }}</div>\r\n                </div>\r\n              </ng-template>\r\n            </p-dropdown>\r\n            <div *ngIf=\"formValidate['icon'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['icon'].invalid\" class=\"p-error block mt-1\">Icon is required </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon\" fieldKey=\"SETTINGS_PER_ADD_PAGE\"\r\n            (click)=\"savePage()\">\r\n            {{ saveMode === 'UPDATE' ? 'Update Menu' : 'Add Menu' }}\r\n          </button>\r\n          <button fieldKey=\"SETTINGS_PER_CANCEL\"\r\n            class=\"pull-right mb-2 mr-2 btn bg-white text-primary border border-primary btncancel\"\r\n            (click)=\"resetForm()\">\r\n            Cancel\r\n          </button>\r\n          <button fieldKey=\"SETTINGS_PER_CANCEL\" class=\"pull-right mb-2 btn btn-danger\" (click)=\"deletePermission()\"\r\n            *ngIf=\"showDeleteBtn && showLinkPage && saveMode === 'UPDATE'\">\r\n            Delete\r\n          </button>\r\n          <br />\r\n          <br />\r\n        </div>\r\n      </p-card>\r\n\r\n      <p-card *ngIf=\"nodeType === 'permission'\" id=\"permissionForm\" class=\"rbac-card\" [formGroup]=\"permissionForm\"\r\n        [style]=\"{ width: '100%', 'margin-bottom': '2em' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Permission</span>\r\n        </div>\r\n\r\n        <input id=\"lid\" type=\"hidden\" formControlName=\"id\" />\r\n        <input id=\"lpermissionpageid\" type=\"hidden\" formControlName=\"permissiontypeid\" />\r\n        <input id=\"lparentid\" type=\"hidden\" formControlName=\"parentid\" />\r\n        <input id=\"lpageid\" type=\"hidden\" formControlName=\"pageid\" />\r\n\r\n        <div class=\"p-fluid p-formgrid p-grid\">\r\n          <div class=\"p-field p-col\">\r\n            <label for=\"lpermissiontype\" class=\"referral-form-labels\">Permission Type\r\n              <span class=\"requiredfield text-danger\">*</span></label>\r\n            <p-dropdown id=\"lpermissiontype\" [options]=\"permissionTypes\" placeholder=\"Select a Permission Type\"\r\n              formControlName=\"permissiontypeid\" optionLabel=\"name\" optionValue=\"id\">\r\n            </p-dropdown>\r\n            <div *ngIf=\"permissionForm.controls['permissiontypeid'].errors\">\r\n              <div *ngIf=\"permissionForm.controls['permissiontypeid'].invalid\" class=\"p-error block mt-1\">Permission Type\r\n                is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field p-col\">\r\n            <label for=\"lkey\" class=\"referral-form-labels\">Key\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"lkey\" type=\"text\" placeholder=\"Enter Key\" formControlName=\"key\" aria-describedby=\"lkey-help\"\r\n              pInputText />\r\n            <div *ngIf=\"permissionForm.controls['key'].errors\">\r\n              <div *ngIf=\"permissionForm.controls['key'].invalid\" class=\"p-error block mt-1\">Key is required </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field p-col\">\r\n            <label for=\"lvalue\" class=\"referral-form-labels\">Description <span\r\n                class=\"requiredfield text-danger\">*</span> </label>\r\n            <input id=\"lvalue\" type=\"text\" placeholder=\"Enter Value\" formControlName=\"description\"\r\n              aria-describedby=\"pname-help\" pInputText />\r\n            <div *ngIf=\"permissionForm.controls['description'].errors\">\r\n              <div *ngIf=\"permissionForm.controls['description'].invalid\" class=\"p-error block mt-1\">Description is\r\n                required\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mt-2\">\r\n          <button type=\"submit\" class=\"pull-right mb-2 btn btn-primary btncommon\" (click)=\"savePermission()\">\r\n            {{ saveMode === 'UPDATE' ? 'Update Permission' : 'Add Permission' }}\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" (click)=\"clearForm()\">Cancel</button>\r\n          <br />\r\n          <br />\r\n        </div>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".head-div{padding-top:9px;padding-left:7px}.bgiconsearch{margin-bottom:5px;padding-bottom:0;font-size:13px}.masteracess{border:solid 1px var(--table-border);border-radius:2px;padding:5px 0;overflow-y:auto;background:var(--bg-light)}.masterempty{max-width:none;border-radius:50%;height:40px;width:40px}.row.masterdata{margin:0;border-bottom:solid 1px var(--table-border);padding:5px 0;cursor:pointer}.overflow_txt{overflow:hidden;text-overflow:ellipsis}span.namemaster{font-size:13px;color:var(--text-dark)}.masterid,span.emailmaster{font-size:13px;color:#9b9b9b}span.deletemaster{position:absolute;top:0px;right:15px;z-index:9;width:20px;float:right;cursor:pointer}span.deletemaster img{width:12px}.activate{position:absolute;margin-top:-46px;margin-left:44rem}.toggleleft{font-size:14px;font-weight:600;display:block;margin-top:-12px;padding-bottom:13px}.report_button{margin-left:12px}:host ::ng-deep .ui-tree.permission-tree{width:100%}.userempty{max-width:none;padding:8px;border-radius:10%;height:36px;width:35px;color:var(--text-dark);margin-left:10px;display:flex;align-items:center}.fileupload .profile{color:#fff}.rbac-card .p-fluid .p-inputtext{padding:8px}.rbac-card .warning{margin-left:10px}.pi-trash{color:red;font-size:12px}@media screen and (max-width: 767px){.masteracess{max-height:400px}}@media screen and (min-width: 990px){.masteracess{height:calc(100vh - 188px)}}@media screen and (max-width: 990px){:host ::ng-deep .selected-list .c-list{width:calc(100% - 35px)!important}.pageLevelAccessTable{width:100%;overflow:auto}.pageLevelAccessTable .table{margin-bottom:60px}}:host ::ng-deep .icon-dropdown li.p-dropdown-item{padding:.5rem 15px!important}:host ::ng-deep .icon-dropdown li.p-dropdown-item.p-highlight .userempty,:host ::ng-deep .icon-dropdown li.p-dropdown-item:hover .userempty,:host ::ng-deep .icon-dropdown li.p-dropdown-item:focus .userempty{color:#fff}:host ::ng-deep .icon-dropdown .userempty{height:inherit;padding:0;justify-content:start;font-size:19px;width:25px}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i8__namespace.Tree, selector: "p-tree", inputs: ["value", "selectionMode", "selection", "style", "styleClass", "contextMenu", "layout", "draggableScope", "droppableScope", "draggableNodes", "droppableNodes", "metaKeySelection", "propagateSelectionUp", "propagateSelectionDown", "loading", "loadingIcon", "emptyMessage", "ariaLabel", "togglerAriaLabel", "ariaLabelledBy", "validateDrop", "filter", "filterBy", "filterMode", "filterPlaceholder", "filteredNodes", "filterLocale", "scrollHeight", "virtualScroll", "virtualNodeHeight", "minBufferPx", "maxBufferPx", "indentation", "trackBy"], outputs: ["selectionChange", "onNodeSelect", "onNodeUnselect", "onNodeExpand", "onNodeCollapse", "onNodeContextMenuSelect", "onNodeDrop", "onFilter"] }, { type: i9__namespace.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i10__namespace.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i11__namespace.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }, { type: i12__namespace.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }], directives: [{ type: i2__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i13__namespace.InputText, selector: "[pInputText]" }, { type: i2__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i4__namespace.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { type: i14__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i14__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i10__namespace.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i2__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i16__namespace.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "pTooltip", "tooltipDisabled", "tooltipOptions"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'permissions',
                        templateUrl: './permissions.component.html',
                        styleUrls: ['./permissions.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: RbacService }, { type: i2__namespace.FormBuilder }, { type: AlertService }, { type: i4__namespace.ConfirmationService }, { type: ShareDataService }, { type: DataStoreService }]; } });

    var RbacPermissionsComponent = /** @class */ (function () {
        function RbacPermissionsComponent(permissionStore, _storeservice) {
            this.permissionStore = permissionStore;
            this._storeservice = _storeservice;
            this.RBACORG = new RBACINFO();
        }
        RbacPermissionsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.permissionEvent.subscribe(function (val) {
                _this.RBACORG = val.RBACORG;
                _this.PERMISSION = val.PERMISSION;
                _this._storeservice.setData('RBACORG', _this.RBACORG);
                _this.permissionStore.setStore(_this.PERMISSION);
                _this._storeservice.setData('HTTPSERVICE', val.httpService);
                _this._storeservice.setData('INPUTVALIDATIONMETHOD', _this.INPUTVALIDATIONMETHOD);
            });
        };
        return RbacPermissionsComponent;
    }());
    RbacPermissionsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPermissionsComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RbacPermissionsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RbacPermissionsComponent, selector: "rbac-permissions", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", permissionEvent: "permissionEvent", COMMONSERVICE: "COMMONSERVICE", INPUTVALIDATIONMETHOD: "INPUTVALIDATIONMETHOD" }, ngImport: i0__namespace, template: "\n      <permissions></permissions>\n  ", isInline: true, components: [{ type: PermissionsComponent, selector: "permissions" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPermissionsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'rbac-permissions',
                        template: "\n      <permissions></permissions>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                    type: i0.Input
                }], PERMISSION: [{
                    type: i0.Input
                }], permissionEvent: [{
                    type: i0.Input
                }], COMMONSERVICE: [{
                    type: i0.Input
                }], INPUTVALIDATIONMETHOD: [{
                    type: i0.Input
                }] } });

    var ShowFieldDirective = /** @class */ (function () {
        function ShowFieldDirective(templateRef, viewContainer, dataStore) {
            this.templateRef = templateRef;
            this.viewContainer = viewContainer;
            this.dataStore = dataStore;
        }
        ShowFieldDirective.prototype.ngOnInit = function () {
            var _this = this;
            var permissions = this.dataStore.state;
            if (!permissions || !permissions[this.showField]) {
                this.viewContainer.clear();
            }
            else {
                this.viewContainer.createEmbeddedView(this.templateRef);
                var lookupIds = sessionStorage.getItem('LOOKUP_IDS');
                if (lookupIds) {
                    var lookupIdArray_1 = lookupIds.split(',');
                    Object.entries(permissions)
                        .filter(function (item) { return item[0].startsWith('GALKP_'); })
                        .forEach(function (_a) {
                        var e_1, _b;
                        var _c = __read(_a, 2), key = _c[0], value = _c[1];
                        try {
                            for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                                var _value = value_1_1.value;
                                var _key = key.replace('GALKP_', '');
                                if (_key === _this.showField &&
                                    lookupIdArray_1.includes(String(_value['lookupid'])) &&
                                    _value['action'] === 'H') {
                                    _this.viewContainer.clear();
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (value_1_1 && !value_1_1.done && (_b = value_1.return)) _b.call(value_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    });
                }
            }
        };
        return ShowFieldDirective;
    }());
    ShowFieldDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShowFieldDirective, deps: [{ token: i0__namespace.TemplateRef }, { token: i0__namespace.ViewContainerRef }, { token: PermissionStore }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    ShowFieldDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShowFieldDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[showField]'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.TemplateRef }, { type: i0__namespace.ViewContainerRef }, { type: PermissionStore }]; }, propDecorators: { showField: [{
                    type: i0.Input
                }] } });

    var DirectivesModule = /** @class */ (function () {
        function DirectivesModule() {
        }
        return DirectivesModule;
    }());
    DirectivesModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DirectivesModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [i14.CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
    DirectivesModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, imports: [[i14.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [PermissionDirective, ShowFieldDirective],
                        imports: [i14.CommonModule],
                        exports: [PermissionDirective, ShowFieldDirective]
                    }]
            }] });

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        return AlertModule;
    }());
    AlertModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AlertModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, declarations: [AlertComponent], imports: [i14.CommonModule], exports: [AlertComponent] });
    AlertModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, imports: [[i14.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i14.CommonModule],
                        declarations: [AlertComponent],
                        exports: [AlertComponent]
                    }]
            }] });

    var PicsRbacPermissionsModule = /** @class */ (function () {
        function PicsRbacPermissionsModule() {
        }
        return PicsRbacPermissionsModule;
    }());
    PicsRbacPermissionsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacPermissionsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PicsRbacPermissionsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacPermissionsModule, declarations: [PermissionsComponent], imports: [i14.CommonModule,
            i2.FormsModule,
            i2.ReactiveFormsModule,
            ngBootstrap.NgbModule,
            tabmenu.TabMenuModule,
            tabview.TabViewModule,
            treeselect.TreeSelectModule,
            // HttpClientModule,
            i12.CheckboxModule,
            i11.DropdownModule,
            i9.CardModule,
            confirmdialog.ConfirmDialogModule,
            accordion.AccordionModule,
            message.MessageModule,
            table.TableModule,
            i13.InputTextModule,
            calendar.CalendarModule,
            editor.EditorModule,
            fieldset.FieldsetModule,
            button.ButtonModule,
            radiobutton.RadioButtonModule,
            inputtextarea.InputTextareaModule,
            inputmask.InputMaskModule,
            steps.StepsModule,
            toast.ToastModule,
            ripple.RippleModule,
            avatar.AvatarModule,
            badge.BadgeModule,
            multiselect.MultiSelectModule,
            inputswitch.InputSwitchModule,
            progressspinner.ProgressSpinnerModule,
            speeddial.SpeedDialModule,
            orderlist.OrderListModule,
            fileupload.FileUploadModule,
            dialog.DialogModule,
            password.PasswordModule,
            knob.KnobModule,
            sidebar.SidebarModule,
            contextmenu.ContextMenuModule,
            confirmpopup.ConfirmPopupModule,
            DirectivesModule,
            AlertModule,
            i10.MatRadioModule], exports: [PermissionsComponent] });
    PicsRbacPermissionsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacPermissionsModule, imports: [[
                i14.CommonModule,
                i2.FormsModule,
                i2.ReactiveFormsModule,
                ngBootstrap.NgbModule,
                tabmenu.TabMenuModule,
                tabview.TabViewModule,
                treeselect.TreeSelectModule,
                // HttpClientModule,
                i12.CheckboxModule,
                i11.DropdownModule,
                i9.CardModule,
                confirmdialog.ConfirmDialogModule,
                accordion.AccordionModule,
                message.MessageModule,
                table.TableModule,
                i13.InputTextModule,
                calendar.CalendarModule,
                editor.EditorModule,
                fieldset.FieldsetModule,
                button.ButtonModule,
                radiobutton.RadioButtonModule,
                inputtextarea.InputTextareaModule,
                inputmask.InputMaskModule,
                steps.StepsModule,
                toast.ToastModule,
                ripple.RippleModule,
                avatar.AvatarModule,
                badge.BadgeModule,
                multiselect.MultiSelectModule,
                inputswitch.InputSwitchModule,
                progressspinner.ProgressSpinnerModule,
                speeddial.SpeedDialModule,
                orderlist.OrderListModule,
                fileupload.FileUploadModule,
                dialog.DialogModule,
                password.PasswordModule,
                knob.KnobModule,
                sidebar.SidebarModule,
                contextmenu.ContextMenuModule,
                confirmpopup.ConfirmPopupModule,
                DirectivesModule,
                AlertModule,
                i10.MatRadioModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacPermissionsModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            PermissionsComponent
                        ],
                        imports: [
                            i14.CommonModule,
                            i2.FormsModule,
                            i2.ReactiveFormsModule,
                            ngBootstrap.NgbModule,
                            tabmenu.TabMenuModule,
                            tabview.TabViewModule,
                            treeselect.TreeSelectModule,
                            // HttpClientModule,
                            i12.CheckboxModule,
                            i11.DropdownModule,
                            i9.CardModule,
                            confirmdialog.ConfirmDialogModule,
                            accordion.AccordionModule,
                            message.MessageModule,
                            table.TableModule,
                            i13.InputTextModule,
                            calendar.CalendarModule,
                            editor.EditorModule,
                            fieldset.FieldsetModule,
                            button.ButtonModule,
                            radiobutton.RadioButtonModule,
                            inputtextarea.InputTextareaModule,
                            inputmask.InputMaskModule,
                            steps.StepsModule,
                            toast.ToastModule,
                            ripple.RippleModule,
                            avatar.AvatarModule,
                            badge.BadgeModule,
                            multiselect.MultiSelectModule,
                            inputswitch.InputSwitchModule,
                            progressspinner.ProgressSpinnerModule,
                            speeddial.SpeedDialModule,
                            orderlist.OrderListModule,
                            fileupload.FileUploadModule,
                            dialog.DialogModule,
                            password.PasswordModule,
                            knob.KnobModule,
                            sidebar.SidebarModule,
                            contextmenu.ContextMenuModule,
                            confirmpopup.ConfirmPopupModule,
                            DirectivesModule,
                            AlertModule,
                            i10.MatRadioModule
                        ],
                        exports: [
                            PermissionsComponent
                        ],
                        schemas: [i0.NO_ERRORS_SCHEMA, i0.CUSTOM_ELEMENTS_SCHEMA]
                    }]
            }] });

    var MicrostrategyService = /** @class */ (function () {
        function MicrostrategyService(http, alertService, permissionStore, _storeservice) {
            var _this = this;
            this.http = http;
            this.alertService = alertService;
            this.permissionStore = permissionStore;
            this._storeservice = _storeservice;
            this._storeservice.currentStore.subscribe(function (res) {
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.RBACORG = res['RBACORG'];
                    _this.environment = _this.RBACORG['environment'] ? _this.RBACORG['environment'] : '';
                }
            });
        }
        MicrostrategyService.prototype.getAuthToken = function () {
            var body = {
                username: this.environment.mstrUsername,
                password: this.environment.mstrPassword,
                loginMode: 1
            };
            return this.http.post(this.environment.mstrURL + "/api/auth/login", body, {
                withCredentials: true,
                headers: { 'Content-type': 'application/json' },
                observe: 'response'
            });
        };
        MicrostrategyService.prototype.getDossier = function (projectId, dossierId, pageNo) {
            var _this = this;
            var permissions = this.permissionStore.state;
            var projectUrl = this.environment.mstrURL + "/app/" + projectId;
            var dossierUrl = projectUrl + "/" + dossierId + "/" + pageNo;
            microstrategy.dossier
                .create({
                placeholder: document.getElementById('dossierContainer'),
                url: dossierUrl,
                navigationBar: {
                    enabled: true,
                    gotoLibrary: permissions === null || permissions === void 0 ? void 0 : permissions.ANA_LIBRARY,
                    title: true,
                    toc: true,
                    reset: true,
                    reprompt: true,
                    share: true,
                    comment: true,
                    notification: true,
                    filter: true,
                    options: true,
                    search: true,
                    bookmark: true
                },
                enableCustomAuthentication: true,
                enableResponsive: false,
                containerWidth: 400,
                containerHeight: 400,
                customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
                getLoginToken: function () { return __awaiter(_this, void 0, void 0, function () {
                    var response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.getAuthToken().toPromise()];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.headers.get('x-mstr-authtoken')];
                        }
                    });
                }); }
            })
                .catch(function (_err) { return _this.alertService.error("Failed to connect " + _this.environment.mstrURL); });
        };
        MicrostrategyService.prototype.getLibraryDetails = function () {
            return __awaiter(this, void 0, void 0, function () {
                var token, authtoken, headerInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAuthToken().toPromise()];
                        case 1:
                            token = _a.sent();
                            authtoken = token.headers.get('x-mstr-authtoken');
                            headerInfo = {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                                'X-MSTR-AuthToken': authtoken ? authtoken : '',
                                'X-MSTR-ProjectID': this.environment.mstrProjectID
                            };
                            return [2 /*return*/, this.http
                                    .get(this.environment.mstrURL + "/api/library", {
                                    withCredentials: true,
                                    headers: headerInfo
                                })
                                    .toPromise()
                                    .then(function (response) {
                                    return response.map(function (mstr) { return ({
                                        id: mstr.target.id,
                                        projectId: mstr.projectId,
                                        name: mstr.target.name
                                    }); });
                                })];
                    }
                });
            });
        };
        return MicrostrategyService;
    }());
    MicrostrategyService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, deps: [{ token: i1__namespace$1.HttpClient }, { token: AlertService }, { token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MicrostrategyService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.HttpClient }, { type: AlertService }, { type: PermissionStore }, { type: DataStoreService }]; } });

    var RbacPermissionsModule = /** @class */ (function () {
        function RbacPermissionsModule() {
        }
        return RbacPermissionsModule;
    }());
    RbacPermissionsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPermissionsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    RbacPermissionsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPermissionsModule, declarations: [RbacPermissionsComponent], imports: [PicsRbacPermissionsModule], exports: [RbacPermissionsComponent] });
    RbacPermissionsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPermissionsModule, providers: [RbacService, MicrostrategyService, i1$1.HttpClient, AlertService, i4.ConfirmationService, PermissionStore, DataStoreService], imports: [[
                PicsRbacPermissionsModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPermissionsModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            RbacPermissionsComponent
                        ],
                        imports: [
                            PicsRbacPermissionsModule
                        ],
                        exports: [
                            RbacPermissionsComponent
                        ],
                        providers: [RbacService, MicrostrategyService, i1$1.HttpClient, AlertService, i4.ConfirmationService, PermissionStore, DataStoreService]
                    }]
            }] });

    /*
     * Public API Surface of rbac-permissions
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.RbacPermissionsComponent = RbacPermissionsComponent;
    exports.RbacPermissionsModule = RbacPermissionsModule;
    exports.RbacPermissionsService = RbacPermissionsService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pics-core-rbac-permissions.umd.js.map
