import { NgModule } from '@angular/core';
import { RbacPermissionsComponent } from './rbac-permissions.component';
import { PicsRbacPermissionsModule } from './pics-rbac-permissions/pics-rbac-permissions.module';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { PermissionStore } from './pics-rbac-permissions/@core/permissions/permission.store';
import { AlertService } from './pics-rbac-permissions/@core/service/alert.service';
import { DataStoreService } from './pics-rbac-permissions/@core/service/data-store.service';
import { HttpService } from './pics-rbac-permissions/@core/service/http.service';
import { MicrostrategyService } from './pics-rbac-permissions/@core/service/microstrategy.service';
import { RbacService } from './pics-rbac-permissions/@core/service/rbac.service';
import * as i0 from "@angular/core";
export class RbacPermissionsModule {
}
RbacPermissionsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacPermissionsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RbacPermissionsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacPermissionsModule, declarations: [RbacPermissionsComponent], imports: [PicsRbacPermissionsModule], exports: [RbacPermissionsComponent] });
RbacPermissionsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacPermissionsModule, providers: [RbacService, MicrostrategyService, HttpClient, HttpService, AlertService, ConfirmationService, PermissionStore, DataStoreService], imports: [[
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
                    providers: [RbacService, MicrostrategyService, HttpClient, HttpService, AlertService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy1wZXJtaXNzaW9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcmJhYy1wZXJtaXNzaW9ucy9zcmMvbGliL3JiYWMtcGVybWlzc2lvbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDakcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDN0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7O0FBZ0JqRixNQUFNLE9BQU8scUJBQXFCOzttSEFBckIscUJBQXFCO29IQUFyQixxQkFBcUIsaUJBVjlCLHdCQUF3QixhQUd4Qix5QkFBeUIsYUFHekIsd0JBQXdCO29IQUlmLHFCQUFxQixhQUZyQixDQUFDLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsWUFOcEk7WUFDUCx5QkFBeUI7U0FDMUI7NEZBTVUscUJBQXFCO2tCQVpqQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix3QkFBd0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx5QkFBeUI7cUJBQzFCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx3QkFBd0I7cUJBQ3pCO29CQUNELFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7aUJBQzlJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmJhY1Blcm1pc3Npb25zQ29tcG9uZW50IH0gZnJvbSAnLi9yYmFjLXBlcm1pc3Npb25zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBpY3NSYmFjUGVybWlzc2lvbnNNb2R1bGUgfSBmcm9tICcuL3BpY3MtcmJhYy1wZXJtaXNzaW9ucy9waWNzLXJiYWMtcGVybWlzc2lvbnMubW9kdWxlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9waWNzLXJiYWMtcGVybWlzc2lvbnMvQGNvcmUvcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4vcGljcy1yYmFjLXBlcm1pc3Npb25zL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3BpY3MtcmJhYy1wZXJtaXNzaW9ucy9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXJiYWMtcGVybWlzc2lvbnMvQGNvcmUvc2VydmljZS9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNaWNyb3N0cmF0ZWd5U2VydmljZSB9IGZyb20gJy4vcGljcy1yYmFjLXBlcm1pc3Npb25zL0Bjb3JlL3NlcnZpY2UvbWljcm9zdHJhdGVneS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmJhY1NlcnZpY2UgfSBmcm9tICcuL3BpY3MtcmJhYy1wZXJtaXNzaW9ucy9AY29yZS9zZXJ2aWNlL3JiYWMuc2VydmljZSc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBSYmFjUGVybWlzc2lvbnNDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFBpY3NSYmFjUGVybWlzc2lvbnNNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFJiYWNQZXJtaXNzaW9uc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbUmJhY1NlcnZpY2UsIE1pY3Jvc3RyYXRlZ3lTZXJ2aWNlLCBIdHRwQ2xpZW50LCBIdHRwU2VydmljZSwgQWxlcnRTZXJ2aWNlLCBDb25maXJtYXRpb25TZXJ2aWNlLCBQZXJtaXNzaW9uU3RvcmUsIERhdGFTdG9yZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYmFjUGVybWlzc2lvbnNNb2R1bGUgeyB9XHJcbiJdfQ==