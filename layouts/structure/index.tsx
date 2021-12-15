export interface UTILITIESHEADERS {
    openBarFunc: () => void
}
export interface UTILITIESLAYOUTS {
    Layouts: JSX.Element,
}
export interface UTULITIESSIDEBARS {
    barOpenTreatment: boolean,
    sidebarTheme: string,
    sidebarData: Array<object>
}
export type MenusParentSTRICT = {
    index: number,
    typesName: string,
    name: string,
    icon: JSX.Element,
    path: string,
    children: [],
    active: boolean,
    open: boolean
}
export type MenusSubsSTRICT = {
    index: number,
    typesName: string,
    name: string,
    icon: JSX.Element,
    path: string,
    children: Array<MenusParentSTRICT>,
    active: boolean,
    open: boolean
}
export type MenusPrivillageSTRICT = {
    name: any,
    menus: Array<MenusParentSTRICT>
}
export type SIDEBARROUTES = {
    path: string,
    name: string,
    typesName: string,
    open: boolean
}
