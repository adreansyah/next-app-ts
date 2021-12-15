import React, { FC, useEffect, useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router'
import {
    MenusParentSTRICT,
    MenusPrivillageSTRICT,
    MenusSubsSTRICT,
    SIDEBARROUTES,
    UTULITIESSIDEBARS
} from './structure';
const Sidebars: FC<UTULITIESSIDEBARS> = ({ barOpenTreatment, sidebarTheme, sidebarData }) => {
    const router = useRouter()
    const [listMenus, setMenus] = useState<[]>([])
    const [item, setItem] = useState<object>({ typesName: "", open: false })
    const setActiveParent = (item: SIDEBARROUTES, types: string) => {
        setItem({
            typesName: item.typesName,
            open: item.open
        })
        types === "parent" && router.push(item.path)
    }
    const setActiveSecondChildren = (item: SIDEBARROUTES) => {
        router.push(item.path)
    }
    const ActivatedRecored = (item: any) => {
        const getMenus: Array<any> = sidebarData
        const initMenus = getMenus.reduce((array, value) => {
            array.push({
                name: value.name,
                menus: [...value.menus.map((v: any) => {
                    const checkOpenChildren = v.children.filter((filt: { path: string }) => filt.path === router.asPath)
                    return {
                        ...v,
                        active: item.typesName === "" ? v.path === router.asPath : item.typesName === v.typesName,
                        open: item.typesName === "" ? checkOpenChildren.length !== 0 : item.typesName === v.typesName && !item.open,
                    }
                })]
            })
            return array
        }, [])
        setMenus(initMenus)
    }
    useEffect(() => {
        ActivatedRecored(item)
    }, [item])
    return (
        <div>
            <ProSidebar collapsed={barOpenTreatment} width={280} style={{ height: "100vh" }}>
                <SidebarHeader style={{ borderBottom: 0 }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            position: "inherit",
                            padding: "1rem 0",
                            textAlign: "center",
                            background: sidebarTheme,
                            color: "#fff"
                        }}>
                        {!barOpenTreatment ? "CMS" : "CMS"}
                    </Typography>
                </SidebarHeader>
                {
                    listMenus.map((itemTag: MenusPrivillageSTRICT, objectId: number) => {
                        return (
                            <SidebarContent style={{ backgroundColor: "white", color: "#707070 " }} key={objectId} >
                                {
                                    itemTag.name !== "" && <Typography
                                        component="span"
                                        sx={{ paddingLeft: 2, paddingTop: 1, fontSize: 12, fontWeight: 600 }}
                                    >
                                        {itemTag.name}
                                    </Typography>
                                }
                                <Menu subMenuBullets={true} iconShape="square" color="white" >
                                    {itemTag.menus?.map((item: MenusParentSTRICT, index: number) => {
                                        const ActiveParent = barOpenTreatment && item.active ? "collapse-border-slide" : "";
                                        const ActiveSubParent = barOpenTreatment && item.open ? "collapse-border-slide" : "";
                                        const isParent = item.children.length === 0 ? (
                                            <MenuItem
                                                className={ActiveParent}
                                                suffix={(item.active) && <div
                                                    style={{
                                                        borderLeft: `4px solid ${sidebarTheme}`,
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        height: "100%",
                                                        width: "100%"
                                                    }}
                                                ></div>}
                                                active={item.active}
                                                onClick={() => setActiveParent(item, "parent")}
                                                key={index}
                                                icon={<span style={{ color: item.active ? sidebarTheme : "", lineHeight: 0 }}>{item.icon}</span>}
                                            >
                                                <span style={{ color: item.active ? sidebarTheme : "", lineHeight: 0 }}>{item.name}</span>
                                            </MenuItem>) : (
                                            <SubMenu

                                                className={ActiveSubParent}
                                                style={{ backgroundColor: "white" }}
                                                onOpenChange={() => setActiveParent(item, "subparent")}
                                                suffix={(item.open) && <div
                                                    style={{
                                                        borderLeft: `4px solid ${sidebarTheme}`,
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        height: "100%",
                                                        width: "100%"
                                                    }}
                                                ></div>}
                                                prefix={<span style={{ color: item.open ? sidebarTheme : "", lineHeight: 0 }}>{item.name}</span>}
                                                open={item.open}
                                                key={index}
                                                icon={<span style={{ color: item.open ? sidebarTheme : "", lineHeight: 0}}>{item.icon}</span>}
                                            >
                                                {
                                                    item.children.map((itemSubs: MenusSubsSTRICT, indexSubs: number) => {
                                                        const isChildren = itemSubs.children.length === 0 && (
                                                            <MenuItem
                                                                active={router.asPath === itemSubs.path}
                                                                onClick={() => {
                                                                    barOpenTreatment && setActiveParent(item, "parent")
                                                                    !barOpenTreatment && setActiveSecondChildren(itemSubs)
                                                                }}
                                                                key={indexSubs}>
                                                                {itemSubs.name}
                                                            </MenuItem>)
                                                        return isChildren
                                                    })
                                                }
                                            </SubMenu>
                                        )
                                        return isParent
                                    })}
                                    {objectId < listMenus.length - 1 && objectId < 1 && <div className="divider-menus"></div>}
                                </Menu>
                            </SidebarContent>
                        )
                    })
                }
            </ProSidebar>
        </div >
    )
}

export default Sidebars
