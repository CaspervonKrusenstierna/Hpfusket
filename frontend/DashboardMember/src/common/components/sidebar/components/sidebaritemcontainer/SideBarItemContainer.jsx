import {React, useState, useEffect} from 'react'
import "./SideBarItemContainer"
import { CartShoppingSolidSvg, CircleInfoSolidSvg, CodeSolidSvg, EnvelopeImg, HouseSolidSvg, ScrewDriverWrenchSolidSvg } from "../../../../assets"
import SideBarItemAnchor from './components/sidebaritemanchor/SideBarItemAnchor';
import SideBarItem from './components/sidebaritem/SideBarItem';
const SideBarItemContainer = (props) => {
  const [SideBarItems, setSideBarItems] = useState();
  useEffect(() => {
    switch(props.privilege){
      case 1:
        setSideBarItems(<><SideBarItemAnchor icon={CartShoppingSolidSvg} text="Priser" href="http://127.0.0.1:3000/dashboard/payment"></SideBarItemAnchor><SideBarItem href="/dashboard/cheat" icon={CodeSolidSvg} text="Fusk"></SideBarItem><SideBarItem href="/dashboard/info" icon={CircleInfoSolidSvg} text="Info"></SideBarItem></>)
        break;
      case 2:
        setSideBarItems(<><SideBarItemAnchor icon={CartShoppingSolidSvg} text="Priser" href="http://127.0.0.1:3000/dashboard/payment"></SideBarItemAnchor><SideBarItem href="/dashboard/cheat" icon={CodeSolidSvg} text="Fusk"></SideBarItem><SideBarItem href="/dashboard/info" icon={CircleInfoSolidSvg} text="Info"></SideBarItem><SideBarItemAnchor href="http://127.0.0.1:3000/dashboard/admin" icon={ScrewDriverWrenchSolidSvg} text="Admin"></SideBarItemAnchor></>)
        break;
      }

  }, [])
    return <div className='SideBarItemContainer'>{SideBarItems}</div>
}

export default SideBarItemContainer