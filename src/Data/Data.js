//Sidebar Imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilFidgetSpinner,
    UilDashboard,
    UilSetting,
    UilAnalytics,
    UilCommentAltChartLines,
    UilStar,
    UilSignout,
    UilPackage,
    UilChart,
    UilSignOutAlt,
} from "@iconscout/react-unicons";

//Sidebar
export const sideBarData = [
    {
        icon: UilDashboard,
        heading: "Dashboard",
    },
    {
        icon: UilFidgetSpinner,
        heading: "Widget",
    },
    {
        icon: UilCommentAltChartLines,
        heading: "Reviews",
    },
    {
        icon: UilUsersAlt,
        heading: "Customers",
    },
    {
        icon: UilAnalytics,
        heading: "Analytics",
    },
    {
        icon: UilSetting,
        heading: "Settings",
    },
    // {
    //     icon:  UilSignout ,
    //     heading: "Sign Out",
    // },
];

export const CardsData=[
    {
        title: "Reviews",
        color:{
            backGround: "linear-gradient(180deg, #44a3dd 0%, #a0b8ef 100%)",
            boxShadow: "opx 10px 20px 0px #44a3dd",
        },
        barValue:70,
        value: "1,281",
        png: UilCommentAltChartLines
    },

    {
        title: "Average Rating",
        color:{
            backGround: "linear-gradient(180deg, #e4a0e8 0%, #db2090  100%)",
            boxShadow: "opx 10px 20px 0px #e4a0e8",
        },
        barValue:90,
        value: "4.6",
        png: UilStar
    },

    {
        title: "Sentiment Analysis",
        color:{
            backGround: "linear-gradient(180deg, #fb8b23 0%, #ffcccb 100%)",
            boxShadow: "opx 10px 20px 0px #fb8b23",
        },
        barValue:20,
        value: "960",
        png: UilAnalytics
    },
]

