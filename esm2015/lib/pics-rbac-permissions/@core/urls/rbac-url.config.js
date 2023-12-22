export class RoleConfig {
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
export class UserConfig {
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
export class AttachmentConfig {
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
export class PolicyGroupConfig {
}
PolicyGroupConfig.EndPoint = {
    policyGroup: {
        getPolicyGroupList: '/platform/page-designer/policyGroup',
        getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
        createPolicyGroup: '/platform/page-designer/policyGroup',
        getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
    }
};
export class PermissionsURL {
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
export class AccessManagementConfig {
}
AccessManagementConfig.EndPoint = {
    Organization: {
        getOrganizationList: '/org/organization/all',
        getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
    }
};
export class RBACINFO {
    constructor() {
        this.apiHost = '';
        this.tokenKey = '';
    }
}
export class Environment {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcGVybWlzc2lvbnMvc3JjL2xpYi9waWNzLXJiYWMtcGVybWlzc2lvbnMvQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLFVBQVU7O0FBQ1AsbUJBQVEsR0FBRztJQUN2QixJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsc0JBQXNCO1FBQ3RDLFVBQVUsRUFBRSw2QkFBNkI7UUFDekMsY0FBYyxFQUFFLDRCQUE0QjtRQUM1QyxjQUFjLEVBQUUsc0JBQXNCO1FBQ3RDLGFBQWEsRUFBRSwyQ0FBMkM7UUFDMUQsT0FBTyxFQUFFLFVBQVU7S0FDcEI7Q0FDRixDQUFDO0FBR0osTUFBTSxPQUFPLFVBQVU7O0FBQ1AsbUJBQVEsR0FBRztJQUN2QixJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsV0FBVztRQUMzQix3QkFBd0IsRUFBRSxxQ0FBcUM7UUFDL0QsWUFBWSxFQUFFLG9CQUFvQjtRQUNsQyxVQUFVLEVBQUUsa0JBQWtCO1FBQzlCLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsZUFBZSxFQUFFLDJCQUEyQjtRQUM1QyxpQkFBaUIsRUFBRSx5QkFBeUI7S0FDN0M7SUFDRCxRQUFRLEVBQUU7UUFDUixlQUFlLEVBQUUsZUFBZTtRQUNoQyxrQkFBa0IsRUFBRSxzQkFBc0I7UUFDMUMsZUFBZSxFQUFFLDhCQUE4QjtLQUNoRDtDQUNGLENBQUM7QUFFSixNQUFNLE9BQU8sZ0JBQWdCOztBQUNiLHlCQUFRLEdBQUc7SUFDdkIsV0FBVyxFQUFFO1FBQ1gscUJBQXFCLEVBQUUsMEJBQTBCO1FBQ2pELGlCQUFpQixFQUFFLDhDQUE4QztRQUNqRSxTQUFTLEVBQUUsMEJBQTBCO1FBQ3JDLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsY0FBYyxFQUFFLHdCQUF3QjtRQUN4QyxhQUFhLEVBQUUsaUJBQWlCO0tBQ2pDO0NBQ0YsQ0FBQztBQUVKLE1BQU0sT0FBTyxpQkFBaUI7O0FBQ2QsMEJBQVEsR0FBRztJQUN2QixXQUFXLEVBQUU7UUFDWCxrQkFBa0IsRUFBRSxxQ0FBcUM7UUFDekQscUJBQXFCLEVBQUUseUNBQXlDO1FBQ2hFLGlCQUFpQixFQUFFLHFDQUFxQztRQUN4RCxrQkFBa0IsRUFBRSxtRUFBbUU7S0FDeEY7Q0FDRixDQUFDO0FBRUosTUFBTSxPQUFPLGNBQWM7O0FBQ1gsd0JBQVMsR0FBRztJQUN4QixVQUFVLEVBQUU7UUFDVixrQkFBa0IsRUFBRSxzQ0FBc0M7UUFDMUQsY0FBYyxFQUFFLGlDQUFpQztRQUNqRCxhQUFhLEVBQUUsaUNBQWlDO1FBQ2hELGdCQUFnQixFQUFFLG1DQUFtQztRQUNyRCxzQkFBc0IsRUFBRSwyQ0FBMkM7UUFDbkUsaUJBQWlCLEVBQUUscURBQXFEO1FBQ3hFLGtCQUFrQixFQUFFLGlEQUFpRDtRQUNyRSwwQkFBMEIsRUFBRSx3REFBd0Q7S0FDckY7SUFDRCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsdUJBQXVCO1FBQ25DLGdCQUFnQixFQUFFLHlCQUF5QjtRQUMzQyxXQUFXLEVBQUUscUNBQXFDO0tBQ25EO0NBQ0YsQ0FBQztBQUVKLE1BQU0sT0FBTyxzQkFBc0I7O0FBQ25CLCtCQUFRLEdBQUc7SUFDdkIsWUFBWSxFQUFFO1FBQ1osbUJBQW1CLEVBQUUsdUJBQXVCO1FBQzVDLGVBQWUsRUFBRSx5R0FBeUc7S0FDM0g7Q0FDRixDQUFDO0FBR0osTUFBTSxPQUFPLFFBQVE7SUFBckI7UUFDRSxZQUFPLEdBQUUsRUFBRSxDQUFDO1FBQ1osYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUloQixDQUFDO0NBQUE7QUFDRCxNQUFNLE9BQU8sV0FBVztDQU92QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSb2xlQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgcm9sZToge1xyXG4gICAgICBnZXRBbGxVc2VyUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlJyxcclxuICAgICAgY3JlYXRlUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL2NyZWF0ZScsXHJcbiAgICAgIGdldExhbmRpbmdQYWdlOiAnL3BsYXRmb3JtL21lbnUvYXBwbGljYXRpb24nLFxyXG4gICAgICBhZGRQb2xpY3lHcm91cDogJy9hY2Nlc3MtY29udHJvbC9yb2xlJyxcclxuICAgICAgZ2V0QWxsT3JnUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL29yZ2FuaXphdGlvbi97b3JnaWR9JyxcclxuICAgICAgZG9zc2llcjogJy9kb3NzaWVyJ1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgVXNlcjoge1xyXG4gICAgICBnZXRBbGxVc2VyTGlzdDogJy9vcmcvdXNlcicsXHJcbiAgICAgIGdldEFsbFVzZXJBY3RpdmVJbmFjdGl2ZTogJy9vcmcvdXNlcj9pbmNsdWRlSW5hY3RpdmVVc2Vycz10cnVlJyxcclxuICAgICAgYWN0aXZhdGVVc2VyOiAnL29yZy91c2VyL2FjdGl2YXRlJyxcclxuICAgICAgY3JlYXRlVXNlcjogJy9vcmcvdXNlci9jcmVhdGUnLFxyXG4gICAgICB1c2VyUm9sZTogJy9vcmcvdXNlci9yb2xlJyxcclxuICAgICAgbWFuYWdlbWVudGdyb3VwOiAnL29yZy90ZWFtL21hbmFnZW1lbnRncm91cCcsXHJcbiAgICAgIGdldEFsbFVzZXJPcmdMaXN0OiAnL29yZy91c2VyL29yZ2FuaXphdGlvbi8nXHJcbiAgICB9LFxyXG4gICAgUHJvdmlkZXI6IHtcclxuICAgICAgZ2V0UHJvdmlkZXJMaXN0OiAnL3JlZi9wcm92aWRlcicsXHJcbiAgICAgIHNlYXJjaFByb3ZpZGVyTGlzdDogJy9yZWYvcHJvdmlkZXIvc2VhcmNoJyxcclxuICAgICAgYWRkUHJvdmlkZXJVc2VyOiAnL3JlZi9wcm92aWRlci9jcmVhdGUvYWNjb3VudCdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBBdHRhY2htZW50Q29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgQXR0YWNobWVudHM6IHtcclxuICAgICAgR2V0QXR0YWNobWVudFJlZmVycmFsOiAnL3JlZi9hdHRhY2htZW50L3JlZmVycmFsJyxcclxuICAgICAgR2V0Q2F0ZWdvcnlMb29rdXA6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC9sb29rdXBieWNhdGVnb3J5bmFtZScsXHJcbiAgICAgIFVwbG9hZEtleTogJy9jb21tb24vZmlsZXMvdXBsb2FkLWtleScsXHJcbiAgICAgIERvd25sb2FkS2V5OiAnL2NvbW1vbi9maWxlcy9kb3dubG9hZC1rZXknLFxyXG4gICAgICBQb3N0QXR0YWNobWVudDogJy9yZWYvYXR0YWNobWVudC9jcmVhdGUnLFxyXG4gICAgICBQdXRBdHRhY2htZW50OiAnL3JlZi9hdHRhY2htZW50J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBvbGljeUdyb3VwQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgcG9saWN5R3JvdXA6IHtcclxuICAgICAgZ2V0UG9saWN5R3JvdXBMaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAnLFxyXG4gICAgICBnZXRBbGxQb2xpY3lHcm91cExpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cC9hbGwnLFxyXG4gICAgICBjcmVhdGVQb2xpY3lHcm91cDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwJyxcclxuICAgICAgZ2V0T3JnUG9saWN5R3JvdXBzOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAvb3JnYW5pemF0aW9uL3tvcmdhbml6YXRpb25pZH0nXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbnNVUkwge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnRzID0ge1xyXG4gICAgcGVybWlzc2lvbjoge1xyXG4gICAgICBwZXJtaXNzaW9uUm9sZUJ5SWQ6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9yb2xlL3tpZH0nLFxyXG4gICAgICBwYWdlUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2UnLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24ve2lkfScsXHJcbiAgICAgIGNyZWF0ZVBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9jcmVhdGUnLFxyXG4gICAgICB1cGRhdGVEZWxldGVQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24ve3Blcm1pc3Npb25pZH0nLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uVHJlZTogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2Uve3BhZ2VpZH0ve3BhcmVudGlkfScsXHJcbiAgICAgIGdldFBlcm1pc3Npb25UeXBlczogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3R5cGUve2FwcGxpY2F0aW9uaWR9JyxcclxuICAgICAgYXBwbGljYXRpb25QZXJtaXNzaW9uc1RyZWU6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9hcHBsaWNhdGlvbi97YXBwbGljYXRpb25pZH0nXHJcbiAgICB9LFxyXG4gICAgcGFnZToge1xyXG4gICAgICBjcmVhdGVQYWdlOiAnL3BsYXRmb3JtL21lbnUvY3JlYXRlJyxcclxuICAgICAgdXBkYXRlRGVsZXRlUGFnZTogJy9wbGF0Zm9ybS9tZW51L3twYWdlaWR9JyxcclxuICAgICAgQWxsUGFnZVRyZWU6ICcvcGxhdGZvcm0vbWVudS90cmVlL3thcHBsaWNhdGlvbmlkfSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgT3JnYW5pemF0aW9uOiB7XHJcbiAgICAgIGdldE9yZ2FuaXphdGlvbkxpc3Q6ICcvb3JnL29yZ2FuaXphdGlvbi9hbGwnLFxyXG4gICAgICBnZXRPcmdhbml6YXRpb246ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi97b3JnSWR9P3JldHVyblVzZXJQYWdlPWZhbHNlJmV4Y2x1ZGVOb0FjdGl2ZVZlcnNpb25QYWdlcz10cnVlJ1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSQkFDSU5GTyB7XHJcbiAgYXBpSG9zdCA9Jyc7XHJcbiAgdG9rZW5LZXkgPSAnJztcclxuICBvdGhlcnM/OiBhbnk7XHJcbiAgb3JnSUQ/OiBhbnk7XHJcbiAgZW52aXJvbm1lbnQ/OiBFbnZpcm9ubWVudDtcclxufVxyXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xyXG4gIG1zdHJVc2VybmFtZT86IHN0cmluZztcclxuICBtc3RyUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgbXN0clVSTD86IHN0cmluZztcclxuICBtc3RyUHJvamVjdElEPzogc3RyaW5nO1xyXG4gIGFwcGxpY2F0aW9uaWQ/OiBzdHJpbmc7XHJcbiAgcHJpb3JpdHk/OiBzdHJpbmdcclxufVxyXG5cclxuIl19