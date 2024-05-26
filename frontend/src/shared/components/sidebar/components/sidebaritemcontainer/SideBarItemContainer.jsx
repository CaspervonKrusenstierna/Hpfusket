import {React, useState, useEffect} from 'react'
import "./SideBarItemContainer"
import { CartShoppingSolidSvg, CircleInfoSolidSvg, CodeSolidSvg, HouseSolidSvg, ScrewDriverWrenchSolidSvg } from "../../../../assets"
import SideBarItem from './components/sidebaritem/SideBarItem'
import SideBarItemAnchor from './components/sidebaritemanchor/SideBarItemAnchor';

const SideBarItemContainer = (props) => {
    const [SideBarItems, setSideBarItems] = useState();
    useEffect(() => {
      switch(props.privilege){
        case 0:
          setSideBarItems(<><SideBarItem icon={CartShoppingSolidSvg} text="Priser" href="/dashboard"></SideBarItem></>)
          break;
        case 1:
          setSideBarItems(<><SideBarItem icon={CartShoppingSolidSvg} text="Priser" href="/dashboard"><SideBarItemAnchor href="http://127.0.0.1:3000/dashboard/cheat" icon={CodeSolidSvg} text="Fusk"></SideBarItemAnchor></SideBarItem><SideBarItemAnchor href="/dashboard/info" icon={CircleInfoSolidSvg} text="Info"></SideBarItemAnchor></>)
          break;
        case 2:
          setSideBarItems(<><SideBarItem icon={CartShoppingSolidSvg} text="Priser" href="/dashboard"></SideBarItem><SideBarItemAnchor href="http://127.0.0.1:3000/dashboard/cheat" icon={CodeSolidSvg} text="Fusk"></SideBarItemAnchor><SideBarItemAnchor href="/dashboard/info" icon={CircleInfoSolidSvg} text="Info"></SideBarItemAnchor><SideBarItemAnchor href="/dashboard/admin" icon={ScrewDriverWrenchSolidSvg} text="Admin"></SideBarItemAnchor></>)
          break;
        }
    }, [])
    return <div className='SideBarItemContainer'>{SideBarItems}</div>
}

export default SideBarItemContainer