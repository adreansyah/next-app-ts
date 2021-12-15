import { AdminPanelSettings, ArrowRight, Dashboard, DocumentScannerRounded, HelpCenter, HolidayVillageTwoTone, Home, LocalActivityTwoTone, QuestionAnswer, SettingsOutlined, TimeToLeaveTwoTone } from '@mui/icons-material';
export const sideBarsHome: Array<object> = [{
    name: "",
    menus: [{
        index: 0,
        typesName: "HOMEPAGE-parent Homepage",
        name: "Homepage",
        icon: <Home />,
        path: "/",
        children: []
    }, {
        index: 2,
        typesName: "HOMEPAGE-parent Component",
        name: "Component",
        icon: <DocumentScannerRounded />,
        path: "/component",
        children: []
    }, {
        index: 3,
        typesName: "HOMEPAGE-parent Forms",
        name: "Forms",
        icon: <HolidayVillageTwoTone />,
        path: "/forms",
        children: []
    }, {
        index: 0,
        typesName: "HOMEPAGE-parent Tables",
        name: "Tables",
        icon: <Dashboard />,
        path: "",
        children: [{
            index: 0,
            typesName: "HOMEPAGE-subparent Table Samples",
            name: "Table Samples",
            icon: <ArrowRight />,
            path: "/simple-tables",
            children: []
        }, {
            index: 0,
            typesName: "HOMEPAGE-subparent Data Tables",
            name: "Data Tables",
            icon: <ArrowRight />,
            path: "/data-tables",
            children: []
        }]
    }]
}]