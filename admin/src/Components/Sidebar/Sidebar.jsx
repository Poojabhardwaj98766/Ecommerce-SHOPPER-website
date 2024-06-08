import './Sidebar.css'
import {Link} from 'react-router-dom'
import addproducticon from '../../assets/Product_Cart.svg'
import listicon from '../../assets/Product_list_icon.svg'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/admin/addProduct'} style={{textDecoration:"none"}}>
         <div className="sidebar-item">
                <img src={addproducticon} alt="" />
                <p>Add product</p>
         </div>
      </Link>
      <Link to={'/admin/listProduct'} style={{textDecoration:"none"}}>
         <div className="sidebar-item">
                  <img src={listicon} alt="" />
                <p>Product List</p>
         </div>
      </Link>
    </div>
  )
}

export default Sidebar
