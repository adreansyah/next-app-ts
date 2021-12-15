import { FC, Fragment, useEffect, useState } from "react";
import { Breadcrumbs, Link, Typography } from '@mui/material'
import { NextRouter, useRouter } from 'next/router'
import { capitalize } from "helper/generics";

interface TYPESCRUMBS {
    customablepath: string
}
type stylesBreadCrumbs = {
    paddingLeft: number,
    paddingTop: number,
    fontSize: number
}
type breadCrumbsTargetResults = {
    to: string,
    label: string
}

const useBreadCrumbs: FC<TYPESCRUMBS> = ({ customablepath = "/" }) => {
    const isStyle: stylesBreadCrumbs = { paddingLeft: 10, paddingTop: 4, fontSize: 12 };
    const [breadcrumbs, setbreadcrumbs] = useState<Array<breadCrumbsTargetResults>>([]);
    const routers: NextRouter = useRouter();
    const { id }: any = routers.query
    const { asPath }: any = routers
    useEffect(() => {
        const mapsitterablespecifiedarray: Array<string> = asPath.split('/').filter((char: string) => char !== "");
        const mapsitterablevaluespath: Array<string> = customablepath.split('/').filter((char: string) => char !== "");
        const breadcrumbsitterableresults: Array<breadCrumbsTargetResults> = mapsitterablespecifiedarray.map((item, index) => ({
            to: index === 0 ? mapsitterablespecifiedarray.length - 1 !== index ? `/${mapsitterablespecifiedarray[0]}` : "" : mapsitterablespecifiedarray.length - 1 !== index ? `/${mapsitterablespecifiedarray[0]}/${mapsitterablespecifiedarray[index]}` : "",
            label: mapsitterablevaluespath.length === 0 ? item === id ? "Detail" : capitalize({ str: item.replace(/[^a-zA-Z0-9]/g, ' ') }) : capitalize({ str: mapsitterablevaluespath[index].replace(/[^a-zA-Z0-9]/g, ' ') })
        }))
        setbreadcrumbs(breadcrumbsitterableresults)
        return () => {
            setbreadcrumbs([])
        }
    }, [asPath, id, customablepath])
    return (
        <Breadcrumbs aria-label="breadcrumb" style={isStyle}>
            {
                breadcrumbs.map((item: breadCrumbsTargetResults, index: number) => {
                    return (
                        <div key={index}>
                            {item.to === "" ? <Typography
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="text.primary"
                            >{item.label}
                            </Typography> : <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="inherit"
                                href={item.to}
                            >{item.label}
                            </Link>}
                        </div>
                    )
                })
            }
        </Breadcrumbs>
    )
}

export default useBreadCrumbs