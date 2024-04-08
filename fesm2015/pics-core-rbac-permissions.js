import * as i0 from '@angular/core';
import { Injectable, Component, Directive, Input, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import * as i2 from '@angular/forms';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as i4 from 'primeng/api';
import { PrimeIcons, ConfirmationService } from 'primeng/api';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as i1 from '@angular/router';
import { NavigationStart } from '@angular/router';
import 'rxjs/add/operator/map';
import * as i14 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i8 from 'primeng/tree';
import * as i9 from 'primeng/card';
import { CardModule } from 'primeng/card';
import * as i10 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i11 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import * as i12 from 'primeng/checkbox';
import { CheckboxModule } from 'primeng/checkbox';
import * as i13 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import * as i16 from 'primeng/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { SpeedDialModule } from 'primeng/speeddial';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TreeSelectModule } from 'primeng/treeselect';
import * as i1$1 from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { __awaiter } from 'tslib';

class RbacPermissionsService {
    constructor() { }
}
RbacPermissionsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacPermissionsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
RbacPermissionsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacPermissionsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacPermissionsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class RoleConfig {
}
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
class UserConfig {
}
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
class AttachmentConfig {
}
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
class PolicyGroupConfig {
}
PolicyGroupConfig.EndPoint = {
    policyGroup: {
        getPolicyGroupList: '/platform/page-designer/policyGroup',
        getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
        createPolicyGroup: '/platform/page-designer/policyGroup',
        getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
    }
};
class PermissionsURL {
}
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
class AccessManagementConfig$1 {
}
AccessManagementConfig$1.EndPoint = {
    Organization: {
        getOrganizationList: '/org/organization/all',
        getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true',
        getPlatformPage: '/platform/menu/getPlatformPage'
    }
};
class RBACINFO {
    constructor() {
        this.apiHost = '';
        this.tokenKey = '';
    }
}
class Environment {
}

class Store {
    constructor(initialState) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    get state() {
        return this._state$.getValue();
    }
    setState(nextState) {
        this._state$.next(nextState);
    }
}

class PermissionStore extends Store {
    constructor() {
        super({});
    }
    setStore(data) {
        if (data) {
            this.setState(Object.assign(Object.assign({}, this.state), data));
        }
    }
    getStore(type = 'P') {
        if (type === 'P')
            return of(this.state);
        else
            return of(this.state);
    }
    flat(array) {
        let result = [];
        if (array) {
            array.forEach(item => {
                result.push(item);
                if (item && Array.isArray(item)) {
                    result = result.concat(this.flat(item));
                }
            });
        }
        return result;
    }
}
PermissionStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PermissionStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class DataStoreService {
    constructor() {
        this.currentStoreSubject = new BehaviorSubject({});
        this.currentStore = this.currentStoreSubject.asObservable();
        // test code
    }
    setData(key, value) {
        const currentStore = this.getCurrentStore();
        currentStore[key] = value;
        this.currentStoreSubject.next(currentStore);
    }
    setObject(value) {
        this.currentStoreSubject.next(value);
    }
    getData(key) {
        const currentStore = this.getCurrentStore();
        return currentStore[key];
    }
    clearStore() {
        const currentStore = this.getCurrentStore();
        Object.keys(currentStore).forEach((key) => {
            delete currentStore[key];
        });
        this.currentStoreSubject.next(currentStore);
    }
    getCurrentStore() {
        return this.currentStoreSubject.value;
    }
}
DataStoreService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataStoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DataStoreService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataStoreService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataStoreService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class AppConstants {
}
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

class RbacService {
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    // constructor(private httpService: HttpService) {}
    getAllUserList(key) {
        return this.httpService.get(`${UserConfig.EndPoint.User.getAllUserList}/${key}`);
    }
    getAllUserOrgList(orgid) {
        return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
    }
    saveUser(data) {
        return this.httpService.post(UserConfig.EndPoint.User.createUser, data);
    }
    updateUser(data, userid) {
        return this.httpService.put(`${UserConfig.EndPoint.User.getAllUserList}/${userid}`, data);
    }
    deleteUser(id) {
        return this.httpService.delete(`${UserConfig.EndPoint.User.getAllUserList}/${id}`);
    }
    activateUser(data) {
        return this.httpService.post(UserConfig.EndPoint.User.activateUser, data);
    }
    addProviderUser(data) {
        return this.httpService.post(UserConfig.EndPoint.Provider.addProviderUser, data);
    }
    addUserRole(data) {
        return this.httpService.post(UserConfig.EndPoint.User.userRole, data);
    }
    uploadKey(objparams) {
        return this.httpService.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
    }
    getOrgPolicyGroupList(orgid) {
        return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getOrgPolicyGroups.replace('{organizationid}', String(orgid)));
    }
    getAllPolicyGroupList(policyGroupId) {
        const endPoint = policyGroupId
            ? `${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${policyGroupId}`
            : PolicyGroupConfig.EndPoint.policyGroup.getAllPolicyGroupList;
        return this.httpService.get(endPoint);
    }
    getPolicyGroupById(id) {
        return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + '/' + id);
    }
    getPolicyGroupsByManagementGroup(policyGroupId) {
        return this.httpService.get(`/org/policyGroup/managementgroup/${policyGroupId}`);
    }
    createPolicyGroup(data) {
        return this.httpService.post(PolicyGroupConfig.EndPoint.policyGroup.createPolicyGroup, data);
    }
    updatePolicyGroup(id, item) {
        return this.httpService.put(`${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${id}`, item);
    }
    deletePolicyGroup(id) {
        return this.httpService.delete(`${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${id}`);
    }
    getAllUserRole(id) {
        return this.httpService.get(RoleConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
    }
    deleteRole(id) {
        return this.httpService.delete(`${RoleConfig.EndPoint.role.getAllUserRole}/${id}`);
    }
    getRoleById(roleid) {
        return this.httpService.get(`${RoleConfig.EndPoint.role.getAllUserRole}/${roleid}`);
    }
    createRole(data) {
        return this.httpService.post(RoleConfig.EndPoint.role.createRole, data);
    }
    updateRole(roleId, data) {
        return this.httpService.put(`${RoleConfig.EndPoint.role.getAllUserRole}/${roleId}`, data);
    }
    getLandingPage(id) {
        return this.httpService.get(`${RoleConfig.EndPoint.role.getLandingPage}/${id}`);
    }
    createPolicyGroupForRole(roleId, data) {
        return this.httpService.post(`${RoleConfig.EndPoint.role.addPolicyGroup}/${roleId}/policygroups`, data);
    }
    updatePolicyGroupForRole(roleId, data) {
        return this.httpService.put(`${RoleConfig.EndPoint.role.addPolicyGroup}/${roleId}/policygroups`, data);
    }
    getReportDashbaord() {
        return this.httpService.get(`${RoleConfig.EndPoint.role.dossier}`);
    }
    getPermissionRoleById(id) {
        return this.httpService.get(PermissionsURL.EndPoints.permission.permissionRoleById.replace('{id}', id));
    }
    getManagementGroupTree(_organizationid) {
        return this.httpService.get('/org/management-group/organization/tree');
    }
    getPermissionsTree(applicationid) {
        return this.httpService.get(PermissionsURL.EndPoints.permission.applicationPermissionsTree.replace('{applicationid}', applicationid));
    }
    getPagePermission(data) {
        return this.httpService.post(PermissionsURL.EndPoints.permission.pagePermission, data);
    }
    createPage(page) {
        return this.httpService.post(PermissionsURL.EndPoints.page.createPage, page);
    }
    updatePage(page) {
        return this.httpService.put(PermissionsURL.EndPoints.page.updateDeletePage.replace('{pageid}', page.id), page);
    }
    deletePage(pageId) {
        return this.httpService.delete(PermissionsURL.EndPoints.page.updateDeletePage.replace('{pageid}', pageId));
    }
    getPermission(id) {
        return this.httpService.get(PermissionsURL.EndPoints.permission.getPermission.replace('{id}', id));
    }
    createPermission(permission) {
        return this.httpService.post(PermissionsURL.EndPoints.permission.createPermission, permission);
    }
    updatePermission(permission) {
        return this.httpService.put(PermissionsURL.EndPoints.permission.updateDeletePermission.replace('{permissionid}', permission.id), permission);
    }
    deletePermission(permissionId) {
        return this.httpService.delete(PermissionsURL.EndPoints.permission.updateDeletePermission.replace('{permissionid}', permissionId));
    }
    getAllPageTree(applicationid) {
        return this.httpService
            .get(PermissionsURL.EndPoints.page.AllPageTree.replace('{applicationid}', applicationid))
            .pipe(map((item) => {
            return item.data;
        }));
    }
    getPermissionTree(pageid, parentid) {
        return this.httpService.get(PermissionsURL.EndPoints.permission.getPermissionTree.replace('{pageid}', pageid).replace('{parentid}', parentid));
    }
    getPermissionTypes(applicationid) {
        return this.httpService.get(PermissionsURL.EndPoints.permission.getPermissionTypes.replace('{applicationid}', applicationid));
    }
    getOrganizationPage(orgId) {
        return this.httpService.get(AccessManagementConfig$1.EndPoint.Organization.getOrganization.replace('{orgId}', orgId));
    }
    getPlatformPage() {
        return this.httpService.get(AccessManagementConfig$1.EndPoint.Organization.getPlatformPage);
    }
}
RbacService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
RbacService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new Subject();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }
    error(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }
    info(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }
    warn(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }
    alert(type, message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    }
    clear() {
        // clear alerts
        this.subject.next({});
    }
}
AlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
class Alert {
}
class UserGroupDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRolePageDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRoleDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class AccessManagementConfig {
}
AccessManagementConfig.EndPoint = {
    Organization: {
        getOrganizationList: '/org/organization/all',
        getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
    }
};

class ShareDataService {
    constructor() {
        this.data = new BehaviorSubject('');
    }
}
ShareDataService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShareDataService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ShareDataService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShareDataService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShareDataService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

const DISPLAY_IN_SECONDS = 8;
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    ngOnInit() {
        this.alertService.getAlert().subscribe((alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // remove alert after 5 seconds
            setTimeout(() => this.removeAlert(alert), DISPLAY_IN_SECONDS * 1000);
        });
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    cssClass(alert) {
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
    }
}
AlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertComponent, deps: [{ token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{
                    // moduleId: module.id,
                    selector: 'app-alert',
                    templateUrl: 'alert.component.html',
                    styleUrls: ['./alert.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

class PermissionDirective {
    constructor(renderer, elementRef, dataStore) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataStore = dataStore;
    }
    ngAfterViewInit() {
        const permissions = this.dataStore.state;
        if (permissions) {
            if (!permissions[this.fieldKey]) {
                const template = this.elementRef.nativeElement;
                if (template.tagName === 'A') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
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
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.className = template.className;
                        r.className += ' p-disabled';
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else {
                    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                    const childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                    childInputNodes.forEach((elem) => {
                        this.renderer.setAttribute(elem, 'disabled', 'true');
                    });
                }
            }
        }
    }
}
PermissionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
PermissionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fieldKey]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: PermissionStore }]; }, propDecorators: { fieldKey: [{
                type: Input
            }] } });

class PermissionsComponent {
    constructor(injector, permissionService, formBuilder, alertService, confirmationService, 
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
        this.sanitizer = injector.get(DomSanitizer);
        this.initializePageForm();
        this.initializePermissionForm();
        const iconArray = AppConstants.iconList;
        this.iconList = iconArray.sort((a, b) => a.label.localeCompare(b.label));
        this.dublicateIconList = this.iconList;
    }
    ngOnInit() {
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            this.inputValidationMethod = res['INPUTVALIDATIONMETHOD'];
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                console.log(this.RBACORG, 'RBACORG Permisson');
                this.environment = this.RBACORG['environment'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                this.httpService = res['HTTPSERVICE'];
                if (this.orgId) {
                    this.setPagesList();
                    this.setMenuType();
                    this.setPlatformPageList();
                }
                if (this.environment) {
                    this.loadInitial();
                }
            }
        });
        this.search = new FormControl();
        this.search.valueChanges
            .pipe(debounceTime(500), distinctUntilChanged(), map((value) => value === null || value === void 0 ? void 0 : value.toLowerCase()))
            .subscribe((value) => {
            const filtered = this.pages.filter((a) => { var _a; return (_a = a === null || a === void 0 ? void 0 : a.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(value); });
            const filteredIds = filtered.map((item) => item.id);
            const child = this.pages.filter((item) => filteredIds.includes(item.parentid));
            this.treeData = this.buildTree([...filtered, ...child], null, true);
        });
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    loadInitial() {
        this.loadTree();
        this.loadContextMenu();
        this.permissionService.getPermissionsTree(this.environment.applicationid).subscribe((items) => {
            this.permissions = items.data;
        });
        this.permissionService.getPermissionTypes(this.environment.applicationid).subscribe((items) => {
            this.permissionTypes = items.data;
        });
    }
    initializePageForm() {
        this.pageForm = this.formBuilder.group({
            id: [0],
            parentid: [null],
            applicationid: [this.environment ? this.environment['applicationid'] : ''],
            name: ['', Validators.required],
            route: [null, Validators.required],
            order: [0],
            ismenu: [true],
            thumbnail: [''],
            icon: [null, Validators.required],
            pageTypeMenu: ['platform'],
        });
    }
    initializePermissionForm() {
        this.permissionForm = this.formBuilder.group({
            id: [0],
            parentid: [null],
            pageid: [0],
            permissiontypeid: ['', Validators.required],
            key: ['', Validators.required],
            description: ['', Validators.required],
            order: [0]
        });
    }
    buildTree(pages, parentid, isSearch) {
        const tree = [];
        pages
            .filter(page => page.parentid === parentid)
            .forEach(page => {
            const children = this.buildTree(pages, page.id, isSearch);
            if (children.length > 0) {
                page.children = children;
            }
            else {
                page.children = [];
            }
            let filteredPage = page;
            if (isSearch && page.children.length) {
                const uniqueArray = page.children.filter((obj, index, self) => {
                    return index === self.findIndex((innerObj) => innerObj.id === obj.id);
                });
                filteredPage = Object.assign(Object.assign({}, filteredPage), { children: uniqueArray });
            }
            tree.push(filteredPage);
        });
        return tree;
    }
    onInput(event, fieldtype, label, required) {
        const error = this.inputValidationMethod(event, fieldtype, label, required);
        if (error && typeof error === 'string') {
            this.validationErrors[label] = error;
        }
        else {
            delete this.validationErrors[label];
        }
    }
    clearsearch() {
        this.search.setValue('');
    }
    onNodeContextMenuSelect(_event) {
        console.log();
    }
    nodeSelect(event, isFromNode) {
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
            this.pages = this.pages.filter(p => p['parentid'] !== event.node.id);
            this.selectedPagePermission = this.permissions.filter((p) => p.pageid === event.node.id);
            if (event.node.type === 'permission') {
                this.permissionForm.reset();
                this.permissionForm.patchValue(event.node);
            }
            else {
                this.pageForm.reset();
                this.pageForm.patchValue(event.node);
                this.pageForm.patchValue;
                const iconVal = ((_b = (_a = event.node) === null || _a === void 0 ? void 0 : _a.additionalinfo) === null || _b === void 0 ? void 0 : _b.icon) ? (_d = (_c = event.node) === null || _c === void 0 ? void 0 : _c.additionalinfo) === null || _d === void 0 ? void 0 : _d.icon.toLowerCase().replace(/[A-Z]/g, (char) => char.toLowerCase()) : '';
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
    }
    onNodeExpandClick(event, node) {
        if (node.menutype !== 'page') {
            // Handle the expansion logic here
            // For example, you might want to prevent expansion for certain conditions
            event.preventDefault();
        }
    }
    nodeExpand(event) {
        // const pageId = event.node.type === 'permission' ? event.node.pageid : event.node.data;
        // const parentId = event.node.type === 'permission' ? event.node.data : 0;
        // if (event.node && event.node.data) {
        //   this.permissionService.getPermissionTree(pageId, parentId).subscribe((nodes: any) => {
        //     event.node.children = (<any>nodes).data;
        //   });
        // }
    }
    searchIconList(event) {
        const value = event.target.value.toLowerCase();
        this.dublicateIconList = this.iconList.filter((a) => { var _a; return (_a = a === null || a === void 0 ? void 0 : a.label) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(value); });
    }
    resetIconList() {
        this.dublicateIconList = this.iconList;
    }
    searchDynamicPageList(event) {
        const value = event.target.value.toLowerCase();
        this.duplicateDynamicPagesList = this.pagesList.filter((a) => { var _a; return (_a = a === null || a === void 0 ? void 0 : a.value) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(value); });
    }
    resetDynamicPageList() {
        this.duplicateDynamicPagesList = this.pagesList;
    }
    resetParentPageList() {
        this.pages = this.filteredParentPages;
    }
    searchPlatformPageList(event) {
        const value = event.target.value.toLowerCase();
        this.duplicatePlatformPagesList = this.platformPagesList.filter((a) => { var _a; return (_a = a === null || a === void 0 ? void 0 : a.pagename) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(value); });
    }
    resetPlatformPageList() {
        this.duplicatePlatformPagesList = this.platformPagesList;
    }
    getSelectedLabel(val) {
        var _a;
        this.dublicateIconList = this.iconList;
        const filteredIcon = this.iconList.filter((i) => i.value === val);
        this.selectedIconLabel = (_a = filteredIcon[0]) === null || _a === void 0 ? void 0 : _a.label;
    }
    savePage() {
        const page = this.pageForm.value;
        page.applicationid = this.environment.applicationid;
        page.additionalinfo = {
            icon: page.icon
        };
        this.formSubmit = true;
        if (this.showLinkPage) {
            page.route = `/pages/dynamic-search/search/${page.route}`;
        }
        if (this.pageForm.valid) {
            page.order = page.order ? Number(page.order) : 1;
            if (this.saveMode === 'INSERT') {
                this.permissionService.createPage(page).subscribe((res) => {
                    // if (this.showLinkPage) {
                    page.id = res['data'];
                    this.savePermission(page);
                    this.eventNode = '';
                    // }
                    this.alertService.success('Menu created successfully.');
                    this.loadTree();
                }, (error) => {
                    var _a;
                    if (error && ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message.includes('already exists'))) {
                        this.alertService.error(`Menu '${page === null || page === void 0 ? void 0 : page.name}' already exists.`);
                    }
                    else {
                        this.alertService.error(AppConstants.errorMessage);
                    }
                });
            }
            else {
                this.permissionService.updatePage(page).subscribe(() => {
                    let pageDet = Object.assign(Object.assign({}, page), { pagePermissionId: this.selectedPagePermission[0].id });
                    this.savePermission(pageDet);
                    this.alertService.success('Menu updated successfully.');
                    this.loadTree();
                    this.resetMenu(true);
                });
            }
            this.clearsearch();
        }
    }
    get formValidate() {
        return this.pageForm.controls;
    }
    savePermission(page) {
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
        let permission = Object.assign(Object.assign({}, this.permissionForm.value), { order: +this.permissionForm.value.order });
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
                this.permissionService.createPermission(permission).subscribe(() => {
                    // this.alertService.success('Permission created successfully.');
                    this.loadTree();
                    this.resetMenu(true);
                });
            }
            else {
                this.permissionService.updatePermission(permission).subscribe(() => {
                    // this.alertService.success('Permission updated successfully.');
                    this.selectedPagePermission = '';
                    this.loadTree();
                });
            }
        }
        else {
            // this.alertService.error('Invalid permission data.');
        }
    }
    clearForm() {
        if (this.nodeType === 'permission') {
            this.initializePermissionForm();
        }
        else {
            this.initializePageForm();
        }
    }
    selectType(type, event) {
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
    }
    setPlatformPageList() {
        this.permissionService.getPlatformPage().subscribe((res) => {
            const data = res['data'];
            if (data && (data === null || data === void 0 ? void 0 : data.length)) {
                this.platformPagesList = data.sort((a, b) => a.pagename.localeCompare(b.pagename));
                this.duplicatePlatformPagesList = this.platformPagesList;
            }
        });
    }
    setMenuType() {
        this.menutype = [
            { name: 'Parent', value: 'parent' },
            { name: 'Page', value: 'page' }
        ];
    }
    resetMenu(isNewAdd) {
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
    }
    resetForm() {
        this.validationErrors = {};
        this.formSubmit = false;
        if (this.saveMode == 'INSERT') {
            this.resetMenu(false);
        }
        else {
            this.nodeSelect({ node: this.eventNode }, false);
            this.clearsearch();
        }
    }
    removeThumbnail() {
        this.pageForm.controls['thumbnail'].reset();
        this.imageInformation = '';
    }
    // delete(event: Event) {
    //   event.stopPropagation();
    //   // this.deletedId = this.selectedItem.id;
    // }
    createPermissionForm() {
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
    }
    loadContextMenu() {
        const permission = {
            SETTINGS_PER_CREATE_PAGE: true,
            SETTINGS_PER_CREATE_PERMISSION: true,
            SETTINGS_PER_DELETE: true
        };
        this.menuItems = [
            {
                label: 'Create Page',
                icon: PrimeIcons.ARROW_UP_LEFT,
                visible: permission.SETTINGS_PER_CREATE_PAGE,
                badge: 'SETTINGS_PER_CREATE_PAGE',
                command: (_event) => {
                    this.saveMode = 'INSERT';
                    this.nodeType = 'page';
                    this.showLinkPage = false;
                    this.clearForm();
                }
            },
            {
                label: 'Link Page',
                icon: PrimeIcons.ARROW_UP_LEFT,
                visible: permission.SETTINGS_PER_CREATE_PAGE,
                command: (_event) => {
                    this.saveMode = 'INSERT';
                    this.nodeType = 'page';
                    this.showLinkPage = true;
                    this.clearForm();
                }
            },
            {
                label: 'Create Permission',
                icon: PrimeIcons.ARROW_DOWN_RIGHT,
                visible: permission.SETTINGS_PER_CREATE_PERMISSION,
                badge: 'SETTINGS_PER_CREATE_PERMISSION',
                command: _event => {
                    this.saveMode = 'INSERT';
                    this.nodeType = this.selectedItem.type;
                    this.clearForm();
                    this.createPermissionForm();
                }
            },
            {
                label: 'Delete',
                icon: PrimeIcons.TRASH,
                visible: permission.SETTINGS_PER_DELETE,
                badge: 'SETTINGS_PER_DELETE',
                command: event => {
                    this.saveMode = 'DELETE';
                    this.nodeType = this.selectedItem.type;
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
    }
    setPagesList() {
        this.permissionService.getOrganizationPage(this.orgId).subscribe((res) => {
            const data = res['data'];
            if (data && (data === null || data === void 0 ? void 0 : data.length)) {
                const filterPagesList = data === null || data === void 0 ? void 0 : data.filter((a) => { var _a; return (_a = a.activeVersion) === null || _a === void 0 ? void 0 : _a.gridconfig; }).map((x) => {
                    x.activeVersion.pageid = x.activeVersion.pageid.toString();
                    return {
                        id: x.activeVersion.pageid,
                        pagename: x.activeVersion.pagename,
                        value: x.activeVersion.pagename
                    };
                });
                this.pagesList = filterPagesList.sort((a, b) => a.pagename.localeCompare(b.pagename));
                this.duplicateDynamicPagesList = this.pagesList;
            }
        });
    }
    loadTree() {
        this.permissionService.getAllPageTree(this.environment.applicationid).subscribe((items) => {
            this.pages = items.sort((a, b) => a.name.localeCompare(b.name));
            this.filteredParentPages = this.pages;
            this.duplicatepages = items;
            if (this.pages.length) {
                //this.selectedItem = this.pages[0];
            }
            this.treeData = this.buildTree(this.pages, null, false);
        });
    }
    cancel() {
        this.permissionForm.reset();
    }
    // delete() {
    //   // event.stopPropagation();
    //   // this.deletedId = id;
    //   $('#Deleteuser').modal('show');
    // }
    deleteItem() {
        this.saveMode = 'UPDATE';
        if (this.selectedItem.type === 'page') {
            // $('#Deleteuser').modal('show');
            this.permissionService.deletePage(this.selectedItem.id).subscribe((_item) => {
                var _a, _b, _c, _d;
                this.cancel();
                if ((_b = (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.length) {
                    (_d = (_c = this.selectedItem) === null || _c === void 0 ? void 0 : _c.children) === null || _d === void 0 ? void 0 : _d.map((c) => {
                        this.permissionService.deletePage(c.id).subscribe((_item) => console.log(''));
                    });
                }
                $('#Deleteuser').modal('hide');
                this.resetMenu(true);
                this.alertService.success('Menu deleted successfully.');
                this.loadTree();
            });
        }
        else {
            this.permissionService.deletePermission(this.selectedItem.id).subscribe((_item) => {
                // $('#Deleteuser').modal('show');
                this.cancel();
                $('#Deleteuser').modal('hide');
                this.alertService.success('Control Permission deleted successfully.');
                this.loadTree();
            });
        }
    }
    deletePermission() {
        this.saveMode = 'DELETE';
        this.nodeType = this.selectedItem.type;
        $('#Deleteuser').modal('show');
    }
    requiredIfValidator(predicate) {
        return (formControl) => {
            if (!formControl.parent) {
                return null;
            }
            if (predicate()) {
                return Validators.required(formControl);
            }
            return null;
        };
    }
    handleFileInput(fileValue) {
        const target = fileValue.target;
        const file = target.files[0];
        this.uploadedFile = fileValue.target.files[0].name;
        this.imageData = {
            contentType: fileValue.target.files[0].type,
            fileName: `dynamic-menu/${this.uploadedFile}`
        };
        this.imageInformation = this.uploadedFile;
        if (this.validateImage(fileValue.target.files)) {
            this.permissionService.uploadKey(this.imageData).subscribe((res) => {
                this.urlPath = res.data;
                const uploadAttachment = document.getElementById('file');
                const uploadAttachmentDetails = uploadAttachment.files[0];
                this.httpService.putUpload(this.urlPath, uploadAttachmentDetails, uploadAttachmentDetails.type).subscribe((_resp) => {
                    this.alertService.success('Uploaded Successfully!');
                    const reader = new FileReader();
                    reader.onload = () => {
                        const value = this.sanitizer.bypassSecurityTrustUrl(reader.result);
                        this.pageForm.patchValue({ thumbnail: value });
                    };
                    reader.readAsDataURL(file);
                    this.attachType = fileValue.target.files[0].type;
                }, (error) => {
                    if (error.status == 0) {
                        this.alertService.error('AppConstants.errorMessage');
                        this.uploadedFile = '';
                        this.urlPath = '';
                    }
                });
            }, (_error) => {
                this.alertService.error('AppConstants.errorMessage');
            });
        }
    }
    validateImage(file) {
        const fileSize = Number(file[0].size) / 1024;
        const filetype = file[0].type.replace('image/', '');
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
            this.alertService.warn(`${filetype} format is not supported`);
            return false;
        }
    }
    searchPermissionList(event) {
        const value = event.target.value.toLowerCase();
        this.pages = this.duplicatepages.filter((a) => { var _a; return (_a = a === null || a === void 0 ? void 0 : a.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(value); });
    }
    onPageNameInput(event, name) {
        const input = event.target;
        const startPosition = input.selectionStart;
        const endPosition = input.selectionEnd;
        const pagenameControl = this.pageForm.get(name);
        if (pagenameControl.value) {
            const newValue = pagenameControl.value
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            pagenameControl.patchValue(newValue, { emitEvent: false });
            // Restore cursor position
            input.setSelectionRange(startPosition, endPosition);
        }
    }
}
PermissionsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionsComponent, deps: [{ token: i0.Injector }, { token: RbacService }, { token: i2.FormBuilder }, { token: AlertService }, { token: i4.ConfirmationService }, { token: ShareDataService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
PermissionsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PermissionsComponent, selector: "permissions", ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"permission\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4 col-md-6 col-12\">\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"tab-content py-2\">\r\n        <div class=\"tab-pane fade show active\">\r\n          <div class=\"form-group bgiconsearch d-flex\">\r\n            <!-- <input class=\"form-control\" placeholder=\"Search by Menu Name\" type=\"text\" [formControl]=\"search\"\r\n              pInputText pClearButton/> -->\r\n            <span class=\"p-input-icon-right w-100\">\r\n              <i class=\"pi pi-times-circle\" (click)=\"clearsearch()\"></i>\r\n              <input class=\"form-control\" placeholder=\"Search by Menu Name\" type=\"text\" [formControl]=\"search\"\r\n                pInputText />\r\n            </span>\r\n            <button class=\"btn btn-primary btncommon ml-2\" (click)=\"resetMenu(true)\">Add</button>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"masteracess\">\r\n            <!-- <p-tree [value]=\"pages\" selectionMode=\"single\" [(selection)]=\"selectedItem\"\r\n              (onNodeSelect)=\"nodeSelect($event)\" (onNodeContextMenuSelect)=\"onNodeContextMenuSelect($event)\"\r\n              (onNodeExpand)=\"nodeExpand($event)\" [contextMenu]=\"treeContextMenu\"></p-tree>\r\n            <p-contextMenu #treeContextMenu [model]=\"menuItems\" appendTo=\"body\"></p-contextMenu> -->\r\n            <!-- <p-confirmPopup styleClass=\"delete-popup\"></p-confirmPopup> -->\r\n            <p-tree [value]=\"treeData\" selectionMode=\"single\" [(selection)]=\"selectedItem\"\r\n              (onNodeSelect)=\"nodeSelect($event, true)\" (onNodeContextMenuSelect)=\"onNodeContextMenuSelect($event)\"\r\n              (onNodeExpand)=\"nodeExpand($event)\">\r\n              <ng-template let-node pTemplate=\"default\">\r\n                <span *ngIf=\"node.menutype === 'parent'\">\r\n                  <span class=\"ui-tree-toggler ui-clickable\" *ngIf=\"node.children && node.children.length > 0\"\r\n                    (click)=\"onNodeExpandClick($event, node)\"></span>\r\n                </span>\r\n                {{node.name}}\r\n                <!-- <p-contextMenu [model]=\"menuItems\" appendTo=\"body\"></p-contextMenu> -->\r\n                <ng-container *ngIf=\"node.children && node.children.length > 0\">\r\n                  <ng-container *ngTemplateOutlet=\"recursiveTree; context:{ $implicit: node.children }\"></ng-container>\r\n                </ng-container>\r\n              </ng-template>\r\n              <ng-template #recursiveTree let-nodes>\r\n                <ul>\r\n                  <li *ngFor=\"let child of nodes\">\r\n                    <ng-container\r\n                      *ngTemplateOutlet=\"recursiveTree; context:{ $implicit: child.children }\"></ng-container>\r\n                  </li>\r\n                </ul>\r\n              </ng-template>\r\n              <!-- <p-contextMenu #treeContextMenu [model]=\"menuItems\" appendTo=\"body\"></p-contextMenu> -->\r\n            </p-tree>\r\n            <div class=\"modal\" id=\"Deleteuser\" tabindex=\"-1\" role=\"dialog\">\r\n              <div class=\"modal-dialog\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Delete Menu</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    Are you sure you want to delete the Menu?\r\n                    <div class=\"clearfix\"></div>\r\n                    <div class=\"mt-2\">\r\n                      <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\"\r\n                        (click)=\"deleteItem()\">\r\n                        Delete\r\n                      </button>\r\n                      <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\"\r\n                        data-dismiss=\"modal\">Cancel</button>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-8 col-md-6 col-12 master-right mt-2\">\r\n      <p-card *ngIf=\"nodeType === 'page'\" id=\"pageForm\" class=\"rbac-card\" [formGroup]=\"pageForm\"\r\n        [style]=\"{ width: '100%', 'margin-bottom': '2em' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">{{saveMode === 'UPDATE' ? 'Update Menu' : 'Add Menu'}}</span>\r\n        </div>\r\n        <div class=\"mb-3 mt-1\">\r\n          <mat-radio-group formControlName=\"pageTypeMenu\">\r\n            <mat-radio-button class=\"mr-2\" value=\"platform\"\r\n              (click)=\"selectType('platform', $event)\">Platform</mat-radio-button>\r\n            <mat-radio-button value=\"dynamic\" (click)=\"selectType('dynamic', $event)\">Dynamic</mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n        <input id=\"cid\" type=\"hidden\" formControlName=\"id\" />\r\n        <input id=\"capplicationid\" type=\"hidden\" formControlName=\"applicationid\" />\r\n        <div class=\"p-fluid p-formgrid p-grid\">\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n            <label for=\"cname\" class=\"referral-form-labels\">Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"cname\" type=\"text\" formControlName=\"name\" fieldKey=\"SETTINGS_PER_NAME\" placeholder=\"Enter Name\"\r\n              aria-describedby=\"cname\" (keyup)=\"onPageNameInput($event, 'name')\"\r\n              (input)=\"onInput($event, 'name', 'Name', true)\" pInputText />\r\n              <div *ngIf=\"validationErrors['Name']\" class=\"p-error block mt-1\">{{validationErrors['Name']}}</div>\r\n             <!-- pattern=\"[a-zA-Z0-9]*([a-zA-Z0-9]+\\s*)*\" <div *ngIf=\"\r\n              pageForm.controls['name'].invalid &&\r\n                pageForm.controls['name'].dirty &&\r\n              !pageForm.controls['name'].hasError('required')\">\r\n              <small *ngIf=\"pageForm.controls['name'].errors && pageForm.controls['name'].invalid\"\r\n                class=\"p-error block\">Invalid input data</small>\r\n            </div> -->\r\n            <div *ngIf=\"!validationErrors['Name'] && formValidate['name'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['name'].invalid\" class=\"p-error block mt-1\">Name is\r\n                required</div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\" *ngIf=\"!showLinkPage\">\r\n            <label for=\"croute\" class=\"referral-form-labels\">\r\n              Platform Pages\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <!-- <p-dropdown [options]=\"platformPagesList\" [filter]=\"true\" formControlName=\"route\"\r\n              fieldKey=\"SETTINGS_PER_ROUTE\" placeholder=\"Select Platform Page\" optionLabel=\"pagename\"\r\n              optionValue=\"pageurl\" [showClear]=\"true\">\r\n            </p-dropdown> -->\r\n            <p-dropdown [options]=\"duplicatePlatformPagesList\" placeholder=\"Select Platform Page\"\r\n            formControlName=\"route\" [resetFilterOnHide]=\"true\" [filter]=\"true\" [showClear]=\"true\" fieldKey=\"SETTINGS_PER_ROUTE\"\r\n            optionLabel=\"pagename\" optionValue=\"pageurl\" inputId=\"platformPage\"\r\n            (keyup)=\"searchPlatformPageList($event)\" (onHide)=\"resetPlatformPageList()\">\r\n            <ng-template let-item pTemplate=\"selectedItem\">\r\n              <div pTooltip=\"{{item?.pagename}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.pagename }}\r\n              </div>\r\n            </ng-template>\r\n            <ng-template let-object pTemplate=\"item\">\r\n              {{ object.pagename }}\r\n            </ng-template>\r\n            </p-dropdown>\r\n            <div *ngIf=\"formValidate['route'].errors && formSubmit && !showLinkPage\">\r\n              <div *ngIf=\"formValidate['route'].invalid\" class=\"p-error block mt-1\">Platform Page is required</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\" *ngIf=\"showLinkPage\">\r\n            <label for=\"croute\" class=\"referral-form-labels\">\r\n              Dynamic Pages\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <p-dropdown [options]=\"duplicateDynamicPagesList\" formControlName=\"route\" fieldKey=\"SETTINGS_PER_ROUTE\"\r\n              placeholder=\"Select Dynamic Page\" (keyup)=\"searchDynamicPageList($event)\" (onHide)=\"resetDynamicPageList()\" optionLabel=\"value\"\r\n              optionValue=\"id\" [filter]=\"true\" [resetFilterOnHide]=\"true\" [showClear]=\"true\">\r\n              <ng-template let-item pTemplate=\"selectedItem\">\r\n                <div pTooltip=\"{{item?.value}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.value }}\r\n                </div>\r\n              </ng-template>\r\n              <ng-template let-object pTemplate=\"item\">\r\n                {{ object.value }}\r\n              </ng-template>\r\n            </p-dropdown>\r\n            <div *ngIf=\"formValidate['route'].errors && formSubmit && showLinkPage\">\r\n              <div *ngIf=\"formValidate['route'].invalid\" class=\"p-error block mt-1\">Dynamic Page is required </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n            <label for=\"corder\" class=\"referral-form-labels\">Parent Page </label>\r\n            <p-dropdown [options]=\"pages\" placeholder=\"Select Parent Page\" formControlName=\"parentid\" optionLabel=\"name\"\r\n              optionValue=\"id\" (onHide)=\"resetParentPageList()\" [showClear]=\"true\" [resetFilterOnHide]=\"true\" [filter]=\"true\" (keyup)=\"searchPermissionList($event)\"\r\n              fieldKey=\"SETTINGS_PER_PARENT_PAGE\">\r\n              <ng-template let-item pTemplate=\"selectedItem\">\r\n                <div pTooltip=\"{{item?.name}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.name }}</div>\r\n              </ng-template>\r\n              <ng-template let-object pTemplate=\"item\">\r\n                {{ object.name }}\r\n              </ng-template>\r\n            </p-dropdown>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n            <label for=\"corder\" class=\"referral-form-labels d-none d-lg-inline-block\">&#160;</label>\r\n            <div>\r\n              <p-checkbox st inputId=\"binary\" [binary]=\"true\" fieldKey=\"SETTINGS_PER_MENU\" formControlName=\"ismenu\"\r\n                label=\"Menu\"></p-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid p-grid\">\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n            <label for=\"icon\" class=\"referral-form-labels\">\r\n              Icon\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <p-dropdown [options]=\"dublicateIconList\" styleClass=\"icon-dropdown\" formControlName=\"icon\" [filter]=\"true\"\r\n              optionLabel=\"label\" optionValue=\"value\" [resetFilterOnHide]=\"true\" [showClear]=\"iconList && iconList.length\"\r\n              placeholder=\"Select Icon\" (keyup)=\"searchIconList($event)\" (onHide)=\"resetIconList()\" (onChange)=\"getSelectedLabel($event.value)\">\r\n              <ng-template pTemplate=\"selectedItem\">\r\n                <div pTooltip=\"{{selectedIconLabel}}\" tooltipPosition=\"top\"\r\n                  class=\"d-flex flex-row align-items-center gap-2\" *ngIf=\"pageForm.controls['icon'].value\">\r\n                  <span class=\"material-symbols-outlined userempty ml-0\">\r\n                    {{ pageForm.controls['icon'].value }}\r\n                  </span>\r\n                  <div class=\"text-truncate\">\r\n                    {{ selectedIconLabel }}\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n              <ng-template let-icon pTemplate=\"item\">\r\n                <div class=\"d-flex flex-row align-items-start gap-2\">\r\n                  <span class=\"material-symbols-outlined userempty ml-0\">\r\n                    {{ icon.value }}\r\n                  </span>\r\n                  <div>{{ icon.label }}</div>\r\n                </div>\r\n              </ng-template>\r\n            </p-dropdown>\r\n            <div *ngIf=\"formValidate['icon'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['icon'].invalid\" class=\"p-error block mt-1\">Icon is required </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon\" fieldKey=\"SETTINGS_PER_ADD_PAGE\"\r\n            (click)=\"savePage()\">\r\n            {{ saveMode === 'UPDATE' ? 'Update Menu' : 'Add Menu' }}\r\n          </button>\r\n          <button fieldKey=\"SETTINGS_PER_CANCEL\"\r\n            class=\"pull-right mb-2 mr-2 btn bg-white text-primary border border-primary btncancel\"\r\n            (click)=\"resetForm()\">\r\n            Cancel\r\n          </button>\r\n          <button fieldKey=\"SETTINGS_PER_CANCEL\" class=\"pull-right mb-2 btn btn-danger\" (click)=\"deletePermission()\"\r\n            *ngIf=\"showDeleteBtn && showLinkPage && saveMode === 'UPDATE'\">\r\n            Delete\r\n          </button>\r\n          <br />\r\n          <br />\r\n        </div>\r\n      </p-card>\r\n\r\n      <p-card *ngIf=\"nodeType === 'permission'\" id=\"permissionForm\" class=\"rbac-card\" [formGroup]=\"permissionForm\"\r\n        [style]=\"{ width: '100%', 'margin-bottom': '2em' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Permission</span>\r\n        </div>\r\n\r\n        <input id=\"lid\" type=\"hidden\" formControlName=\"id\" />\r\n        <input id=\"lpermissionpageid\" type=\"hidden\" formControlName=\"permissiontypeid\" />\r\n        <input id=\"lparentid\" type=\"hidden\" formControlName=\"parentid\" />\r\n        <input id=\"lpageid\" type=\"hidden\" formControlName=\"pageid\" />\r\n\r\n        <div class=\"p-fluid p-formgrid p-grid\">\r\n          <div class=\"p-field p-col\">\r\n            <label for=\"lpermissiontype\" class=\"referral-form-labels\">Permission Type\r\n              <span class=\"requiredfield text-danger\">*</span></label>\r\n            <p-dropdown id=\"lpermissiontype\" [options]=\"permissionTypes\" placeholder=\"Select a Permission Type\"\r\n              formControlName=\"permissiontypeid\" optionLabel=\"name\" optionValue=\"id\">\r\n            </p-dropdown>\r\n            <div *ngIf=\"permissionForm.controls['permissiontypeid'].errors\">\r\n              <div *ngIf=\"permissionForm.controls['permissiontypeid'].invalid\" class=\"p-error block mt-1\">Permission Type\r\n                is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field p-col\">\r\n            <label for=\"lkey\" class=\"referral-form-labels\">Key\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"lkey\" type=\"text\" placeholder=\"Enter Key\" formControlName=\"key\" aria-describedby=\"lkey-help\"\r\n              pInputText />\r\n            <div *ngIf=\"permissionForm.controls['key'].errors\">\r\n              <div *ngIf=\"permissionForm.controls['key'].invalid\" class=\"p-error block mt-1\">Key is required </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field p-col\">\r\n            <label for=\"lvalue\" class=\"referral-form-labels\">Description <span\r\n                class=\"requiredfield text-danger\">*</span> </label>\r\n            <input id=\"lvalue\" type=\"text\" placeholder=\"Enter Value\" formControlName=\"description\"\r\n              aria-describedby=\"pname-help\" pInputText />\r\n            <div *ngIf=\"permissionForm.controls['description'].errors\">\r\n              <div *ngIf=\"permissionForm.controls['description'].invalid\" class=\"p-error block mt-1\">Description is\r\n                required\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mt-2\">\r\n          <button type=\"submit\" class=\"pull-right mb-2 btn btn-primary btncommon\" (click)=\"savePermission()\">\r\n            {{ saveMode === 'UPDATE' ? 'Update Permission' : 'Add Permission' }}\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" (click)=\"clearForm()\">Cancel</button>\r\n          <br />\r\n          <br />\r\n        </div>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".head-div{padding-top:9px;padding-left:7px}.bgiconsearch{margin-bottom:5px;padding-bottom:0;font-size:13px}.masteracess{border:solid 1px var(--table-border);border-radius:2px;padding:5px 0;overflow-y:auto;background:var(--bg-light)}.masterempty{max-width:none;border-radius:50%;height:40px;width:40px}.row.masterdata{margin:0;border-bottom:solid 1px var(--table-border);padding:5px 0;cursor:pointer}.overflow_txt{overflow:hidden;text-overflow:ellipsis}span.namemaster{font-size:13px;color:var(--text-dark)}.masterid,span.emailmaster{font-size:13px;color:#9b9b9b}span.deletemaster{position:absolute;top:0px;right:15px;z-index:9;width:20px;float:right;cursor:pointer}span.deletemaster img{width:12px}.activate{position:absolute;margin-top:-46px;margin-left:44rem}.toggleleft{font-size:14px;font-weight:600;display:block;margin-top:-12px;padding-bottom:13px}.report_button{margin-left:12px}:host ::ng-deep .ui-tree.permission-tree{width:100%}.userempty{max-width:none;padding:8px;border-radius:10%;height:36px;width:35px;color:var(--text-dark);margin-left:10px;display:flex;align-items:center}.fileupload .profile{color:#fff}.rbac-card .p-fluid .p-inputtext{padding:8px}.rbac-card .warning{margin-left:10px}.pi-trash{color:red;font-size:12px}@media screen and (max-width: 767px){.masteracess{max-height:400px}}@media screen and (min-width: 990px){.masteracess{height:calc(100vh - 188px)}}@media screen and (max-width: 990px){:host ::ng-deep .selected-list .c-list{width:calc(100% - 35px)!important}.pageLevelAccessTable{width:100%;overflow:auto}.pageLevelAccessTable .table{margin-bottom:60px}}:host ::ng-deep .icon-dropdown li.p-dropdown-item{padding:.5rem 15px!important}:host ::ng-deep .icon-dropdown li.p-dropdown-item.p-highlight .userempty,:host ::ng-deep .icon-dropdown li.p-dropdown-item:hover .userempty,:host ::ng-deep .icon-dropdown li.p-dropdown-item:focus .userempty{color:#fff}:host ::ng-deep .icon-dropdown .userempty{height:inherit;padding:0;justify-content:start;font-size:19px;width:25px}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i8.Tree, selector: "p-tree", inputs: ["value", "selectionMode", "selection", "style", "styleClass", "contextMenu", "layout", "draggableScope", "droppableScope", "draggableNodes", "droppableNodes", "metaKeySelection", "propagateSelectionUp", "propagateSelectionDown", "loading", "loadingIcon", "emptyMessage", "ariaLabel", "togglerAriaLabel", "ariaLabelledBy", "validateDrop", "filter", "filterBy", "filterMode", "filterPlaceholder", "filteredNodes", "filterLocale", "scrollHeight", "virtualScroll", "virtualNodeHeight", "minBufferPx", "maxBufferPx", "indentation", "trackBy"], outputs: ["selectionChange", "onNodeSelect", "onNodeUnselect", "onNodeExpand", "onNodeCollapse", "onNodeContextMenuSelect", "onNodeDrop", "onFilter"] }, { type: i9.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i10.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i11.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }, { type: i12.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }], directives: [{ type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i13.InputText, selector: "[pInputText]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i4.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i10.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i16.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "pTooltip", "tooltipDisabled", "tooltipOptions"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'permissions',
                    templateUrl: './permissions.component.html',
                    styleUrls: ['./permissions.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: RbacService }, { type: i2.FormBuilder }, { type: AlertService }, { type: i4.ConfirmationService }, { type: ShareDataService }, { type: DataStoreService }]; } });

class RbacPermissionsComponent {
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
    }
    ngOnInit() {
        this.permissionEvent.subscribe((val) => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
            this._storeservice.setData('HTTPSERVICE', val.httpService);
            this._storeservice.setData('INPUTVALIDATIONMETHOD', this.INPUTVALIDATIONMETHOD);
        });
    }
}
RbacPermissionsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacPermissionsComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
RbacPermissionsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RbacPermissionsComponent, selector: "rbac-permissions", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", permissionEvent: "permissionEvent", COMMONSERVICE: "COMMONSERVICE", INPUTVALIDATIONMETHOD: "INPUTVALIDATIONMETHOD" }, ngImport: i0, template: `
      <permissions></permissions>
  `, isInline: true, components: [{ type: PermissionsComponent, selector: "permissions" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacPermissionsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rbac-permissions',
                    template: `
      <permissions></permissions>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], permissionEvent: [{
                type: Input
            }], COMMONSERVICE: [{
                type: Input
            }], INPUTVALIDATIONMETHOD: [{
                type: Input
            }] } });

class ShowFieldDirective {
    constructor(templateRef, viewContainer, dataStore) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.dataStore = dataStore;
    }
    ngOnInit() {
        const permissions = this.dataStore.state;
        if (!permissions || !permissions[this.showField]) {
            this.viewContainer.clear();
        }
        else {
            this.viewContainer.createEmbeddedView(this.templateRef);
            const lookupIds = sessionStorage.getItem('LOOKUP_IDS');
            if (lookupIds) {
                const lookupIdArray = lookupIds.split(',');
                Object.entries(permissions)
                    .filter(item => item[0].startsWith('GALKP_'))
                    .forEach(([key, value]) => {
                    for (const _value of value) {
                        const _key = key.replace('GALKP_', '');
                        if (_key === this.showField &&
                            lookupIdArray.includes(String(_value['lookupid'])) &&
                            _value['action'] === 'H') {
                            this.viewContainer.clear();
                        }
                    }
                });
            }
        }
    }
}
ShowFieldDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShowFieldDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
ShowFieldDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShowFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showField]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: PermissionStore }]; }, propDecorators: { showField: [{
                type: Input
            }] } });

class DirectivesModule {
}
DirectivesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DirectivesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
DirectivesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PermissionDirective, ShowFieldDirective],
                    imports: [CommonModule],
                    exports: [PermissionDirective, ShowFieldDirective]
                }]
        }] });

class AlertModule {
}
AlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertModule, declarations: [AlertComponent], imports: [CommonModule], exports: [AlertComponent] });
AlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [AlertComponent],
                    exports: [AlertComponent]
                }]
        }] });

class PicsRbacPermissionsModule {
}
PicsRbacPermissionsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsRbacPermissionsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PicsRbacPermissionsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsRbacPermissionsModule, declarations: [PermissionsComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        TabMenuModule,
        TabViewModule,
        TreeSelectModule,
        // HttpClientModule,
        CheckboxModule,
        DropdownModule,
        CardModule,
        ConfirmDialogModule,
        AccordionModule,
        MessageModule,
        TableModule,
        InputTextModule,
        CalendarModule,
        EditorModule,
        FieldsetModule,
        ButtonModule,
        RadioButtonModule,
        InputTextareaModule,
        InputMaskModule,
        StepsModule,
        ToastModule,
        RippleModule,
        AvatarModule,
        BadgeModule,
        MultiSelectModule,
        InputSwitchModule,
        ProgressSpinnerModule,
        SpeedDialModule,
        OrderListModule,
        FileUploadModule,
        DialogModule,
        PasswordModule,
        KnobModule,
        SidebarModule,
        ContextMenuModule,
        ConfirmPopupModule,
        DirectivesModule,
        AlertModule,
        MatRadioModule], exports: [PermissionsComponent] });
PicsRbacPermissionsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsRbacPermissionsModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
            TabMenuModule,
            TabViewModule,
            TreeSelectModule,
            // HttpClientModule,
            CheckboxModule,
            DropdownModule,
            CardModule,
            ConfirmDialogModule,
            AccordionModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            SidebarModule,
            ContextMenuModule,
            ConfirmPopupModule,
            DirectivesModule,
            AlertModule,
            MatRadioModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsRbacPermissionsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PermissionsComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgbModule,
                        TabMenuModule,
                        TabViewModule,
                        TreeSelectModule,
                        // HttpClientModule,
                        CheckboxModule,
                        DropdownModule,
                        CardModule,
                        ConfirmDialogModule,
                        AccordionModule,
                        MessageModule,
                        TableModule,
                        InputTextModule,
                        CalendarModule,
                        EditorModule,
                        FieldsetModule,
                        ButtonModule,
                        RadioButtonModule,
                        InputTextareaModule,
                        InputMaskModule,
                        StepsModule,
                        ToastModule,
                        RippleModule,
                        AvatarModule,
                        BadgeModule,
                        MultiSelectModule,
                        InputSwitchModule,
                        ProgressSpinnerModule,
                        SpeedDialModule,
                        OrderListModule,
                        FileUploadModule,
                        DialogModule,
                        PasswordModule,
                        KnobModule,
                        SidebarModule,
                        ContextMenuModule,
                        ConfirmPopupModule,
                        DirectivesModule,
                        AlertModule,
                        MatRadioModule
                    ],
                    exports: [
                        PermissionsComponent
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });

class MicrostrategyService {
    constructor(http, alertService, permissionStore, _storeservice) {
        this.http = http;
        this.alertService = alertService;
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                this.environment = this.RBACORG['environment'] ? this.RBACORG['environment'] : '';
            }
        });
    }
    getAuthToken() {
        const body = {
            username: this.environment.mstrUsername,
            password: this.environment.mstrPassword,
            loginMode: 1
        };
        return this.http.post(`${this.environment.mstrURL}/api/auth/login`, body, {
            withCredentials: true,
            headers: { 'Content-type': 'application/json' },
            observe: 'response'
        });
    }
    getDossier(projectId, dossierId, pageNo) {
        const permissions = this.permissionStore.state;
        const projectUrl = `${this.environment.mstrURL}/app/${projectId}`;
        const dossierUrl = `${projectUrl}/${dossierId}/${pageNo}`;
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
            getLoginToken: () => __awaiter(this, void 0, void 0, function* () {
                const response = yield this.getAuthToken().toPromise();
                return response.headers.get('x-mstr-authtoken');
            })
        })
            .catch((_err) => this.alertService.error(`Failed to connect ${this.environment.mstrURL}`));
    }
    getLibraryDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.getAuthToken().toPromise();
            const authtoken = token.headers.get('x-mstr-authtoken');
            const headerInfo = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-MSTR-AuthToken': authtoken ? authtoken : '',
                'X-MSTR-ProjectID': this.environment.mstrProjectID
            };
            return this.http
                .get(`${this.environment.mstrURL}/api/library`, {
                withCredentials: true,
                headers: headerInfo
            })
                .toPromise()
                .then((response) => {
                return response.map((mstr) => ({
                    id: mstr.target.id,
                    projectId: mstr.projectId,
                    name: mstr.target.name
                }));
            });
        });
    }
}
MicrostrategyService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, deps: [{ token: i1$1.HttpClient }, { token: AlertService }, { token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
MicrostrategyService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }, { type: AlertService }, { type: PermissionStore }, { type: DataStoreService }]; } });

class RbacPermissionsModule {
}
RbacPermissionsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacPermissionsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RbacPermissionsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacPermissionsModule, declarations: [RbacPermissionsComponent], imports: [PicsRbacPermissionsModule], exports: [RbacPermissionsComponent] });
RbacPermissionsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacPermissionsModule, providers: [RbacService, MicrostrategyService, HttpClient, AlertService, ConfirmationService, PermissionStore, DataStoreService], imports: [[
            PicsRbacPermissionsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacPermissionsModule, decorators: [{
            type: NgModule,
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
                    providers: [RbacService, MicrostrategyService, HttpClient, AlertService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });

/*
 * Public API Surface of rbac-permissions
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RbacPermissionsComponent, RbacPermissionsModule, RbacPermissionsService };
//# sourceMappingURL=pics-core-rbac-permissions.js.map
