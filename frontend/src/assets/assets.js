
import logo from "./logo.jpeg";
import searchIcon from "./searchIcon.png";
import basketIcon from "./basketIcon.png";
import logoText from "./logoText.jpg";
import rating_stars from "./food_item_rating.jpg";
import plussign from "./PlusSign.png";
import coloredPlus from "./coloredPlus.jpg";
import coloredSub from "./coloredSub.jpg";
import facebook_icon from "./facebook_icon.jpg";
import email_icon from "./email_icon.jpg";
import linkedin_icon from "./linkedin_icon.jpg";
import crossImage_icon from "./crossImage.png";
import login_popup_bg from "./loginPopupBg.jpg";
import adminProfile from "./adminprofile.jpg";
import orders from "./orders.png";
import logout from "./logout.jpg";

//menu item images
import menu1 from "./menu-1.jpg";
import menu2 from "./menu-2.jpg";
import menu3 from "./menu-3.jpg";
import menu4 from "./menu-4.jpg";

//food menu images
import food1 from "./food_1.jpg";
import food2 from "./food_2.jpg";
import food3 from "./food_3.jpg";
import food4 from "./food_4.jpg";
import food5 from "./food_5.jpg";


export const assets={  
    logo:logo,
    searchIcon:searchIcon,
    basketIcon:basketIcon,
    logoText:logoText,
    rating_stars:rating_stars,
    plussign:plussign,
    coloredPlus:coloredPlus,
    coloredSub:coloredSub,
    facebook_icon:facebook_icon,
    email_icon:email_icon,
    linkedin_icon:linkedin_icon,
    crossImage_icon:crossImage_icon,
    login_popup_bg:login_popup_bg,
    adminProfile:adminProfile,
    orders:orders,
    logout:logout
}

export const menu_item=[
    {itemName:"Appetizers",
     itemImage:menu1
    },
    {
     itemName:"Maincourse",
     itemImage:menu2
    },
    {
     itemName:"Deserts",
     itemImage:menu3
    },
    {
     itemName:"Beverages",
     itemImage:menu4
    }
]

export const food_list=[
    {
        _id:"1",
        name:"Spring Rolls",
        image:food1,
        price:200,
        description:"Spring rolls are crispy wrappers filled with vegetables, meat, or seafood.",
        category:"Appetizers",
    },
    {
        _id:"2",
        name:"Butter Chicken",
        image:food2,
        price:320,
        description:"Tender chicken pieces cooked in a rich, creamy tomato-based sauce.",
        category:"Maincourse",
    },
    {
        _id:"3",
        name:"Gulab Jamun",
        image:food3,
        price:100,
        description:"Deep-fried dough balls made from milk solids, soaked in sugar syrup flavored with rosewater",
        category:"Deserts",
    },
    {
        _id:"4",
        name:"Cold Coffee",
        image:food4,
        price:70,
        description:"Cold coffee is a refreshing beverage made by blending coffee with milk, ice, and sugar.",
        category:"Beverages",
    },
    {
        _id:"5",
        name:"Paneer Butter Masala",
        image:food5,
        price:250,
        description:"Paneer Butter Masala is a creamy tomato curry with soft paneer cubes, enriched with butter and spices.",
        category:"Maincourse",
    },
]