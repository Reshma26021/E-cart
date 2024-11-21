import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { Link } from 'react-router-dom'
import { searchProduct } from '../../redux/slice/productSlice'

const Header = () => {
  const dispatch = useDispatch()
   const userCart = useSelector(state=>state.cartReducer)
    const userWishlist = useSelector(state=>state.wishlistReducer)
    return (
      <nav className='flex bg-violet-600 fixed w-full p-5 text-white font-bold'>
   <Link className='text-2xl' to={'/'}><i className='fa-solid fa-truck-fast me-1'></i>E Cart</Link>
<ul className='flex-1 text-right'>
 <li className='list-none inline-block px-5'> <input style={{ width: '300px' }} className='rounded p-1 text-black'onChange={e=>dispatch(searchProduct(e.target.value.toLocaleLowerCase()))} type="text" placeholder='Search Products Here !!!' /></li>
 <li className='list-none inline-block px-5'><Link to={'/Wishlist'}><i className='fa-solid fa-heart text-red-600'> </i>Wishlist <span className='bg-black text-white rounded p-1'> {userWishlist?.length} </span> </Link> </li>
   <li className='list-none inline-block px-5'><Link to={'/Cart'}><i className='fa-solid fa-heart text-green-600'> </i>Cart <span className='bg-black text-white rounded p-1'> {userCart?.length} </span> </Link> </li>
            </ul>
        </nav>
    )
}

export default Header