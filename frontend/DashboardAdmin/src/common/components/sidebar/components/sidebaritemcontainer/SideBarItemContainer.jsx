import {React, useState, useEffect} from 'react'
import "./SideBarItemContainer"
import { CartShoppingSolidSvg, CircleInfoSolidSvg, CodeSolidSvg, EnvelopeImg, HouseSolidSvg, ScrewDriverWrenchSolidSvg } from '../../../../assets';
import SideBarItemAnchor from './components/sidebaritemanchor/SideBarItemAnchor';
import SideBarItem from './components/sidebaritem/SideBarItem';
const SideBarItemContainer = (props) => {
  const [SideBarItems, setSideBarItems] = useState();
  useEffect(() => {
      setSideBarItems(<><SideBarItemAnchor icon={CartShoppingSolidSvg} text="Priser" href="http://127.0.0.1:3000/dashboard/payment"></SideBarItemAnchor><SideBarItemAnchor href="http://127.0.0.1:3000/dashboard/cheat" icon={CodeSolidSvg} text="Fusk"></SideBarItemAnchor><SideBarItemAnchor href="http://127.0.0.1:3000/dashboard/info" icon={CircleInfoSolidSvg} text="Info"></SideBarItemAnchor><SideBarItem href="http://127.0.0.1:3000/dashboard/admin" icon={ScrewDriverWrenchSolidSvg} text="Admin"></SideBarItem></>)
  }, [])
    return <div className='SideBarItemContainer'>{SideBarItems}</div>
}

export default SideBarItemContainer