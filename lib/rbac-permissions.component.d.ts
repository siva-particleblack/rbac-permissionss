import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissionStore } from './pics-rbac-permissions/@core/permissions/permission.store';
import { DataStoreService } from './pics-rbac-permissions/@core/service/data-store.service';
import { RBACINFO } from './pics-rbac-permissions/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
export declare class RbacPermissionsComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    permissionEvent: Observable<any>;
    COMMONSERVICE: Observable<any>;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RbacPermissionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RbacPermissionsComponent, "rbac-permissions", never, { "RBACORG": "RBACORG"; "PERMISSION": "PERMISSION"; "permissionEvent": "permissionEvent"; "COMMONSERVICE": "COMMONSERVICE"; }, {}, never, never>;
}
