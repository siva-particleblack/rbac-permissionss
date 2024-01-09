import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// import { HttpService } from './http.service';
import { AccessManagementConfig, AttachmentConfig, PermissionsURL, PolicyGroupConfig, RoleConfig, UserConfig } from './../urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./data-store.service";
export class RbacService {
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
        return this.httpService.get(AccessManagementConfig.EndPoint.Organization.getOrganization.replace('{orgId}', orgId));
    }
    getPlatformPage() {
        return this.httpService.get(AccessManagementConfig.EndPoint.Organization.getPlatformPage);
    }
}
RbacService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
RbacService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcGVybWlzc2lvbnMvc3JjL2xpYi9waWNzLXJiYWMtcGVybWlzc2lvbnMvQGNvcmUvc2VydmljZS9yYmFjLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsZ0RBQWdEO0FBQ2hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFNaEosTUFBTSxPQUFPLFdBQVc7SUFFdEIsWUFBb0IsYUFBK0I7UUFBL0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3JELElBQUcsR0FBRyxFQUFDO2dCQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsbURBQW1EO0lBRW5ELGNBQWMsQ0FBQyxHQUFZO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsS0FBVTtRQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixH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WUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUNsSCxDQUFDO0lBQ0osQ0FBQztJQUVELGtCQUFrQixDQUFDLGFBQWtCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQ3pCLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLENBQUMsQ0FDakcsQ0FBQztJQUNKLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFVO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3RILENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzVGLENBQUM7O3lHQW5MVSxXQUFXOzZHQUFYLFdBQVcsY0FGVixNQUFNOzRGQUVQLFdBQVc7a0JBSHZCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbi8vIGltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLCBBdHRhY2htZW50Q29uZmlnLCBQZXJtaXNzaW9uc1VSTCwgUG9saWN5R3JvdXBDb25maWcsIFJvbGVDb25maWcsIFVzZXJDb25maWcgfSBmcm9tICcuLy4uL3VybHMvcmJhYy11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJiYWNTZXJ2aWNlIHtcclxuICBodHRwU2VydmljZTphbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlID0gcmVzWydIVFRQU0VSVklDRSddXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIC8vIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7fVxyXG5cclxuICBnZXRBbGxVc2VyTGlzdChrZXk/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke1VzZXJDb25maWcuRW5kUG9pbnQuVXNlci5nZXRBbGxVc2VyTGlzdH0vJHtrZXl9YCk7XHJcbiAgfVxyXG4gIGdldEFsbFVzZXJPcmdMaXN0KG9yZ2lkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0QWxsVXNlck9yZ0xpc3QgKyBvcmdpZCk7XHJcbiAgfVxyXG4gIHNhdmVVc2VyKGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuY3JlYXRlVXNlciwgZGF0YSk7XHJcbiAgfVxyXG4gIHVwZGF0ZVVzZXIoZGF0YTogYW55LCB1c2VyaWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucHV0KGAke1VzZXJDb25maWcuRW5kUG9pbnQuVXNlci5nZXRBbGxVc2VyTGlzdH0vJHt1c2VyaWR9YCwgZGF0YSk7XHJcbiAgfVxyXG4gIGRlbGV0ZVVzZXIoaWQ/OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmRlbGV0ZShgJHtVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0QWxsVXNlckxpc3R9LyR7aWR9YCk7XHJcbiAgfVxyXG4gIGFjdGl2YXRlVXNlcihkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoVXNlckNvbmZpZy5FbmRQb2ludC5Vc2VyLmFjdGl2YXRlVXNlciwgZGF0YSk7XHJcbiAgfVxyXG4gIGFkZFByb3ZpZGVyVXNlcihkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoVXNlckNvbmZpZy5FbmRQb2ludC5Qcm92aWRlci5hZGRQcm92aWRlclVzZXIsIGRhdGEpO1xyXG4gIH1cclxuICBhZGRVc2VyUm9sZShkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoVXNlckNvbmZpZy5FbmRQb2ludC5Vc2VyLnVzZXJSb2xlLCBkYXRhKTtcclxuICB9XHJcbiAgdXBsb2FkS2V5KG9ianBhcmFtczogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KEF0dGFjaG1lbnRDb25maWcuRW5kUG9pbnQuQXR0YWNobWVudHMuVXBsb2FkS2V5LCBvYmpwYXJhbXMpO1xyXG4gIH1cclxuICBnZXRPcmdQb2xpY3lHcm91cExpc3Qob3JnaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFxyXG4gICAgICBQb2xpY3lHcm91cENvbmZpZy5FbmRQb2ludC5wb2xpY3lHcm91cC5nZXRPcmdQb2xpY3lHcm91cHMucmVwbGFjZSgne29yZ2FuaXphdGlvbmlkfScsIFN0cmluZyhvcmdpZCkpXHJcbiAgICApO1xyXG4gIH1cclxuICBnZXRBbGxQb2xpY3lHcm91cExpc3QocG9saWN5R3JvdXBJZD86IG51bWJlcikge1xyXG4gICAgY29uc3QgZW5kUG9pbnQgPSBwb2xpY3lHcm91cElkXHJcbiAgICAgID8gYCR7UG9saWN5R3JvdXBDb25maWcuRW5kUG9pbnQucG9saWN5R3JvdXAuZ2V0UG9saWN5R3JvdXBMaXN0fS8ke3BvbGljeUdyb3VwSWR9YFxyXG4gICAgICA6IFBvbGljeUdyb3VwQ29uZmlnLkVuZFBvaW50LnBvbGljeUdyb3VwLmdldEFsbFBvbGljeUdyb3VwTGlzdDtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChlbmRQb2ludCk7XHJcbiAgfVxyXG4gIGdldFBvbGljeUdyb3VwQnlJZChpZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoUG9saWN5R3JvdXBDb25maWcuRW5kUG9pbnQucG9saWN5R3JvdXAuZ2V0UG9saWN5R3JvdXBMaXN0ICsgJy8nICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9saWN5R3JvdXBzQnlNYW5hZ2VtZW50R3JvdXAocG9saWN5R3JvdXBJZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYC9vcmcvcG9saWN5R3JvdXAvbWFuYWdlbWVudGdyb3VwLyR7cG9saWN5R3JvdXBJZH1gKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVBvbGljeUdyb3VwKGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChQb2xpY3lHcm91cENvbmZpZy5FbmRQb2ludC5wb2xpY3lHcm91cC5jcmVhdGVQb2xpY3lHcm91cCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb2xpY3lHcm91cChpZDogbnVtYmVyLCBpdGVtOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnB1dChgJHtQb2xpY3lHcm91cENvbmZpZy5FbmRQb2ludC5wb2xpY3lHcm91cC5nZXRQb2xpY3lHcm91cExpc3R9LyR7aWR9YCwgaXRlbSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVQb2xpY3lHcm91cChpZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5kZWxldGUoYCR7UG9saWN5R3JvdXBDb25maWcuRW5kUG9pbnQucG9saWN5R3JvdXAuZ2V0UG9saWN5R3JvdXBMaXN0fS8ke2lkfWApO1xyXG4gIH1cclxuICBnZXRBbGxVc2VyUm9sZShpZD86IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFJvbGVDb25maWcuRW5kUG9pbnQucm9sZS5nZXRBbGxPcmdSb2xlLnJlcGxhY2UoJ3tvcmdpZH0nLCBTdHJpbmcoaWQpKSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVSb2xlKGlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmRlbGV0ZShgJHtSb2xlQ29uZmlnLkVuZFBvaW50LnJvbGUuZ2V0QWxsVXNlclJvbGV9LyR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRSb2xlQnlJZChyb2xlaWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke1JvbGVDb25maWcuRW5kUG9pbnQucm9sZS5nZXRBbGxVc2VyUm9sZX0vJHtyb2xlaWR9YCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVSb2xlKGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChSb2xlQ29uZmlnLkVuZFBvaW50LnJvbGUuY3JlYXRlUm9sZSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSb2xlKHJvbGVJZDogYW55LCBkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnB1dChgJHtSb2xlQ29uZmlnLkVuZFBvaW50LnJvbGUuZ2V0QWxsVXNlclJvbGV9LyR7cm9sZUlkfWAsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFuZGluZ1BhZ2UoaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke1JvbGVDb25maWcuRW5kUG9pbnQucm9sZS5nZXRMYW5kaW5nUGFnZX0vJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVBvbGljeUdyb3VwRm9yUm9sZShyb2xlSWQ6IG51bWJlciwgZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KGAke1JvbGVDb25maWcuRW5kUG9pbnQucm9sZS5hZGRQb2xpY3lHcm91cH0vJHtyb2xlSWR9L3BvbGljeWdyb3Vwc2AsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9saWN5R3JvdXBGb3JSb2xlKHJvbGVJZDogbnVtYmVyLCBkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnB1dChgJHtSb2xlQ29uZmlnLkVuZFBvaW50LnJvbGUuYWRkUG9saWN5R3JvdXB9LyR7cm9sZUlkfS9wb2xpY3lncm91cHNgLCBkYXRhKTtcclxuICB9XHJcbiAgZ2V0UmVwb3J0RGFzaGJhb3JkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke1JvbGVDb25maWcuRW5kUG9pbnQucm9sZS5kb3NzaWVyfWApO1xyXG4gIH1cclxuICBnZXRQZXJtaXNzaW9uUm9sZUJ5SWQoaWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFBlcm1pc3Npb25zVVJMLkVuZFBvaW50cy5wZXJtaXNzaW9uLnBlcm1pc3Npb25Sb2xlQnlJZC5yZXBsYWNlKCd7aWR9JywgaWQpKTtcclxuICB9XHJcbiAgZ2V0TWFuYWdlbWVudEdyb3VwVHJlZShfb3JnYW5pemF0aW9uaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KCcvb3JnL21hbmFnZW1lbnQtZ3JvdXAvb3JnYW5pemF0aW9uL3RyZWUnKTtcclxuICB9XHJcbiAgZ2V0UGVybWlzc2lvbnNUcmVlKGFwcGxpY2F0aW9uaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFxyXG4gICAgICBQZXJtaXNzaW9uc1VSTC5FbmRQb2ludHMucGVybWlzc2lvbi5hcHBsaWNhdGlvblBlcm1pc3Npb25zVHJlZS5yZXBsYWNlKCd7YXBwbGljYXRpb25pZH0nLCBhcHBsaWNhdGlvbmlkKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFBhZ2VQZXJtaXNzaW9uKGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChQZXJtaXNzaW9uc1VSTC5FbmRQb2ludHMucGVybWlzc2lvbi5wYWdlUGVybWlzc2lvbiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQYWdlKHBhZ2U6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChQZXJtaXNzaW9uc1VSTC5FbmRQb2ludHMucGFnZS5jcmVhdGVQYWdlLCBwYWdlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBhZ2UocGFnZTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wdXQoUGVybWlzc2lvbnNVUkwuRW5kUG9pbnRzLnBhZ2UudXBkYXRlRGVsZXRlUGFnZS5yZXBsYWNlKCd7cGFnZWlkfScsIHBhZ2UuaWQpLCBwYWdlKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVBhZ2UocGFnZUlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmRlbGV0ZShQZXJtaXNzaW9uc1VSTC5FbmRQb2ludHMucGFnZS51cGRhdGVEZWxldGVQYWdlLnJlcGxhY2UoJ3twYWdlaWR9JywgcGFnZUlkKSk7XHJcbiAgfVxyXG5cclxuICBnZXRQZXJtaXNzaW9uKGlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChQZXJtaXNzaW9uc1VSTC5FbmRQb2ludHMucGVybWlzc2lvbi5nZXRQZXJtaXNzaW9uLnJlcGxhY2UoJ3tpZH0nLCBpZCkpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUGVybWlzc2lvbihwZXJtaXNzaW9uOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoUGVybWlzc2lvbnNVUkwuRW5kUG9pbnRzLnBlcm1pc3Npb24uY3JlYXRlUGVybWlzc2lvbiwgcGVybWlzc2lvbik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQZXJtaXNzaW9uKHBlcm1pc3Npb246IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucHV0KFxyXG4gICAgICBQZXJtaXNzaW9uc1VSTC5FbmRQb2ludHMucGVybWlzc2lvbi51cGRhdGVEZWxldGVQZXJtaXNzaW9uLnJlcGxhY2UoJ3twZXJtaXNzaW9uaWR9JywgcGVybWlzc2lvbi5pZCksXHJcbiAgICAgIHBlcm1pc3Npb25cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVQZXJtaXNzaW9uKHBlcm1pc3Npb25JZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5kZWxldGUoXHJcbiAgICAgIFBlcm1pc3Npb25zVVJMLkVuZFBvaW50cy5wZXJtaXNzaW9uLnVwZGF0ZURlbGV0ZVBlcm1pc3Npb24ucmVwbGFjZSgne3Blcm1pc3Npb25pZH0nLCBwZXJtaXNzaW9uSWQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsUGFnZVRyZWUoYXBwbGljYXRpb25pZDogYW55KTogT2JzZXJ2YWJsZTxUcmVlTm9kZVtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZVxyXG4gICAgICAuZ2V0KFBlcm1pc3Npb25zVVJMLkVuZFBvaW50cy5wYWdlLkFsbFBhZ2VUcmVlLnJlcGxhY2UoJ3thcHBsaWNhdGlvbmlkfScsIGFwcGxpY2F0aW9uaWQpKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0uZGF0YSBhcyBUcmVlTm9kZVtdO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRQZXJtaXNzaW9uVHJlZShwYWdlaWQ6IGFueSwgcGFyZW50aWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFxyXG4gICAgICBQZXJtaXNzaW9uc1VSTC5FbmRQb2ludHMucGVybWlzc2lvbi5nZXRQZXJtaXNzaW9uVHJlZS5yZXBsYWNlKCd7cGFnZWlkfScsIHBhZ2VpZCkucmVwbGFjZSgne3BhcmVudGlkfScsIHBhcmVudGlkKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFBlcm1pc3Npb25UeXBlcyhhcHBsaWNhdGlvbmlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChcclxuICAgICAgUGVybWlzc2lvbnNVUkwuRW5kUG9pbnRzLnBlcm1pc3Npb24uZ2V0UGVybWlzc2lvblR5cGVzLnJlcGxhY2UoJ3thcHBsaWNhdGlvbmlkfScsIGFwcGxpY2F0aW9uaWQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3JnYW5pemF0aW9uUGFnZShvcmdJZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoQWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Pcmdhbml6YXRpb24uZ2V0T3JnYW5pemF0aW9uLnJlcGxhY2UoJ3tvcmdJZH0nLCBvcmdJZCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxhdGZvcm1QYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KEFjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuT3JnYW5pemF0aW9uLmdldFBsYXRmb3JtUGFnZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==