import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./alert.service";
import * as i3 from "./../permissions/permission.store";
import * as i4 from "./data-store.service";
export class MicrostrategyService {
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
MicrostrategyService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, deps: [{ token: i1.HttpClient }, { token: i2.AlertService }, { token: i3.PermissionStore }, { token: i4.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
MicrostrategyService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.AlertService }, { type: i3.PermissionStore }, { type: i4.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm9zdHJhdGVneS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcGVybWlzc2lvbnMvc3JjL2xpYi9waWNzLXJiYWMtcGVybWlzc2lvbnMvQGNvcmUvc2VydmljZS9taWNyb3N0cmF0ZWd5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVUzQyxNQUFNLE9BQU8sb0JBQW9CO0lBSS9CLFlBQW9CLElBQWdCLEVBQzFCLFlBQTBCLEVBQzFCLGVBQWdDLEVBQ2hDLGFBQStCO1FBSHJCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNuRCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDbkY7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCxZQUFZO1FBQ1YsTUFBTSxJQUFJLEdBQUc7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZO1lBQ3ZDLFFBQVEsRUFBRSxJ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SUFBSTtnQkFDckIsT0FBTyxFQUFFLFVBQVU7YUFDcEIsQ0FBQztpQkFDRCxTQUFTLEVBQUU7aUJBQ1gsSUFBSSxDQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7Z0JBQ3RCLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDbEMsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDbEIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO29CQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO2lCQUN2QixDQUFDLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBOztrSEF2RlUsb0JBQW9CO3NIQUFwQixvQkFBb0IsY0FGbkIsTUFBTTs0RkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuL2FsZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuLy4uL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBtaWNyb3N0cmF0ZWd5OiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNaWNyb3N0cmF0ZWd5U2VydmljZSB7XHJcbiAgZG9zc2llckxpc3Q6IGFueTtcclxuICBSQkFDT1JHOiBhbnk7XHJcbiAgZW52aXJvbm1lbnQ6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZSxcclxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNbJ1JCQUNPUkcnXSAmJiByZXNbJ1JCQUNPUkcnXSAhPT0gJycpIHtcclxuICAgICAgICAgIHRoaXMuUkJBQ09SRyA9IHJlc1snUkJBQ09SRyddO1xyXG4gICAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IHRoaXMuUkJBQ09SR1snZW52aXJvbm1lbnQnXSA/IHRoaXMuUkJBQ09SR1snZW52aXJvbm1lbnQnXSA6ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIGdldEF1dGhUb2tlbigpIHtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiB0aGlzLmVudmlyb25tZW50Lm1zdHJVc2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQ6IHRoaXMuZW52aXJvbm1lbnQubXN0clBhc3N3b3JkLFxyXG4gICAgICBsb2dpbk1vZGU6IDFcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5lbnZpcm9ubWVudC5tc3RyVVJMfS9hcGkvYXV0aC9sb2dpbmAsIGJvZHksIHtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXREb3NzaWVyKHByb2plY3RJZD86IHN0cmluZywgZG9zc2llcklkPzogc3RyaW5nLCBwYWdlTm8/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHBlcm1pc3Npb25zID0gdGhpcy5wZXJtaXNzaW9uU3RvcmUuc3RhdGU7XHJcbiAgICBjb25zdCBwcm9qZWN0VXJsID0gYCR7dGhpcy5lbnZpcm9ubWVudC5tc3RyVVJMfS9hcHAvJHtwcm9qZWN0SWR9YDtcclxuICAgIGNvbnN0IGRvc3NpZXJVcmwgPSBgJHtwcm9qZWN0VXJsfS8ke2Rvc3NpZXJJZH0vJHtwYWdlTm99YDtcclxuICAgICBtaWNyb3N0cmF0ZWd5LmRvc3NpZXJcclxuICAgICAgLmNyZWF0ZSh7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3NzaWVyQ29udGFpbmVyJyksXHJcbiAgICAgICAgdXJsOiBkb3NzaWVyVXJsLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXI6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICBnb3RvTGlicmFyeTogcGVybWlzc2lvbnM/LkFOQV9MSUJSQVJZLFxyXG4gICAgICAgICAgdGl0bGU6IHRydWUsXHJcbiAgICAgICAgICB0b2M6IHRydWUsXHJcbiAgICAgICAgICByZXNldDogdHJ1ZSxcclxuICAgICAgICAgIHJlcHJvbXB0OiB0cnVlLFxyXG4gICAgICAgICAgc2hhcmU6IHRydWUsXHJcbiAgICAgICAgICBjb21tZW50OiB0cnVlLFxyXG4gICAgICAgICAgbm90aWZpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgb3B0aW9uczogdHJ1ZSxcclxuICAgICAgICAgIHNlYXJjaDogdHJ1ZSxcclxuICAgICAgICAgIGJvb2ttYXJrOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmFibGVDdXN0b21BdXRoZW50aWNhdGlvbjogdHJ1ZSxcclxuICAgICAgICBlbmFibGVSZXNwb25zaXZlOiBmYWxzZSxcclxuICAgICAgICBjb250YWluZXJXaWR0aDogNDAwLFxyXG4gICAgICAgIGNvbnRhaW5lckhlaWdodDogNDAwLFxyXG4gICAgICAgIGN1c3RvbUF1dGhlbnRpY2F0aW9uVHlwZTogbWljcm9zdHJhdGVneS5kb3NzaWVyLkN1c3RvbUF1dGhlbnRpY2F0aW9uVHlwZS5BVVRIX1RPS0VOLFxyXG4gICAgICAgIGdldExvZ2luVG9rZW46IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXRBdXRoVG9rZW4oKS50b1Byb21pc2UoKTtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5oZWFkZXJzLmdldCgneC1tc3RyLWF1dGh0b2tlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChfZXJyOiBhbnkpID0+IHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKGBGYWlsZWQgdG8gY29ubmVjdCAke3RoaXMuZW52aXJvbm1lbnQubXN0clVSTH1gKSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRMaWJyYXJ5RGV0YWlscygpIHtcclxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5nZXRBdXRoVG9rZW4oKS50b1Byb21pc2UoKTtcclxuICAgIGNvbnN0IGF1dGh0b2tlbiA9IHRva2VuLmhlYWRlcnMuZ2V0KCd4LW1zdHItYXV0aHRva2VuJylcclxuICAgIGNvbnN0IGhlYWRlckluZm8gPSB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdYLU1TVFItQXV0aFRva2VuJzogYXV0aHRva2VuID8gYXV0aHRva2VuOiAnJyxcclxuICAgICAgJ1gtTVNUUi1Qcm9qZWN0SUQnOiB0aGlzLmVudmlyb25tZW50Lm1zdHJQcm9qZWN0SURcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQoYCR7dGhpcy5lbnZpcm9ubWVudC5tc3RyVVJMfS9hcGkvbGlicmFyeWAsIHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVySW5mb1xyXG4gICAgICB9KVxyXG4gICAgICAudG9Qcm9taXNlKClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UubWFwKChtc3RyOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICBpZDogbXN0ci50YXJnZXQuaWQsXHJcbiAgICAgICAgICBwcm9qZWN0SWQ6IG1zdHIucHJvamVjdElkLFxyXG4gICAgICAgICAgbmFtZTogbXN0ci50YXJnZXQubmFtZVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==