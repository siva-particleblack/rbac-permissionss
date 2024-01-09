import { Injector, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfirmationService, MenuItem, TreeNode } from 'primeng/api';
import { AlertService } from '../@core/service/alert.service';
import { RbacService } from '../@core/service/rbac.service';
import { ShareDataService } from '../@core/service/share-data.service';
import { RBACINFO } from '../@core/urls/rbac-url.config';
import { Subscription } from 'rxjs';
import { DataStoreService } from '../@core/service/data-store.service';
import * as i0 from "@angular/core";
export declare class PermissionsComponent implements OnInit {
    private permissionService;
    private formBuilder;
    private alertService;
    private confirmationService;
    private _shareData;
    private _storeservice;
    pages: TreeNode[];
    menuItems: MenuItem[];
    filteredPermissionList: any[];
    pageForm: FormGroup;
    permissionForm: FormGroup;
    permissions: any[];
    permissionTypes: any[];
    nodeType: string;
    saveMode: string;
    selectedItem: any;
    imageInformation: any;
    urlPath: any;
    uploadedFile: any;
    attachType: any;
    imageData: {
        contentType: any;
        fileName: any;
    };
    attachmentService: any;
    sanitizer: DomSanitizer;
    pageAccessService: any;
    pagesList: any;
    menuType: any;
    pageType: any;
    RBACORG: RBACINFO;
    orgSubs: Subscription;
    orgId: any;
    position: string;
    showLinkPage: boolean;
    showDynamic: boolean;
    environment: any;
    duplicatepages: any[];
    httpService: any;
    constructor(injector: Injector, permissionService: RbacService, formBuilder: FormBuilder, alertService: AlertService, confirmationService: ConfirmationService, _shareData: ShareDataService, _storeservice: DataStoreService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    loadInitial(): void;
    initializePageForm(): void;
    initializePermissionForm(): void;
    onNodeContextMenuSelect(_event: any): void;
    nodeSelect(event: any): void;
    nodeExpand(event: any): void;
    savePage(): void;
    savePermission(page?: any): void;
    clearForm(): void;
    resetForm(): void;
    removeThumbnail(): void;
    createPermissionForm(): void;
    private loadContextMenu;
    deletePermission(): void;
    setPagesList(): void;
    setMenuType(): void;
    setPageType(): void;
    onPageTypeChange(event: any): void;
    private loadTree;
    private deleteItem;
    requiredIfValidator(predicate: () => any): (formControl: AbstractControl) => import("@angular/forms").ValidationErrors;
    handleFileInput(fileValue: any): void;
    validateImage(file: any): boolean;
    searchPermissionList(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PermissionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PermissionsComponent, "permissions", never, {}, {}, never, never>;
}
